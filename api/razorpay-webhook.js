/**
 * Vercel Serverless Function: /api/razorpay/webhook
 * Handles incoming Razorpay webhook notifications server-to-server.
 * Verifies x-razorpay-signature, idempotently updates order status, and keeps state in sync.
 */

import { getDatabase } from '../lib/db.js';
import { verifyWebhookSignature } from '../lib/razorpay.js';
import { sendOwnerOrderEmail } from '../lib/email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const signature = req.headers['x-razorpay-signature'];
  if (!signature) {
    return res.status(400).json({ success: false, message: 'Missing x-razorpay-signature header.' });
  }

  // Obtain raw body for signature verification
  const rawBody = req.rawBody || (typeof req.body === 'string' ? req.body : JSON.stringify(req.body));

  const isSignatureValid = verifyWebhookSignature({ rawBody, signature });
  if (!isSignatureValid) {
    console.warn('[Razorpay Webhook] Webhook signature verification failed.');
    return res.status(400).json({ success: false, message: 'Invalid webhook signature.' });
  }

  try {
    const event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const eventType = event.event;
    console.log(`[Razorpay Webhook] Received valid event: ${eventType}`);

    const db = await getDatabase();
    const ordersCollection = db.collection('orders');
    const productsCollection = db.collection('products');

    let rzpOrderId = '';
    let rzpPaymentId = '';

    if (eventType === 'order.paid') {
      rzpOrderId = event.payload?.order?.entity?.id || '';
      rzpPaymentId = event.payload?.payment?.entity?.id || '';
    } else if (eventType === 'payment.captured') {
      rzpOrderId = event.payload?.payment?.entity?.order_id || '';
      rzpPaymentId = event.payload?.payment?.entity?.id || '';
    } else if (eventType === 'payment.failed') {
      rzpOrderId = event.payload?.payment?.entity?.order_id || '';
      rzpPaymentId = event.payload?.payment?.entity?.id || '';

      if (rzpOrderId) {
        await ordersCollection.updateOne(
          {
            $or: [{ razorpayOrderId: rzpOrderId }, { 'payment.razorpayOrderId': rzpOrderId }],
            paymentStatus: { $ne: 'PAID' }
          },
          {
            $set: {
              paymentStatus: 'FAILED',
              status: 'PAYMENT_FAILED',
              'payment.status': 'failed',
              'payment.razorpayPaymentId': rzpPaymentId,
              updatedAt: new Date()
            }
          }
        );
      }

      return res.status(200).json({ received: true, status: 'payment_failed_recorded' });
    }

    // Handle successful payment synchronization
    if (rzpOrderId) {
      const order = await ordersCollection.findOne({
        $or: [{ razorpayOrderId: rzpOrderId }, { 'payment.razorpayOrderId': rzpOrderId }]
      });

      if (!order) {
        console.warn(`[Razorpay Webhook] No matching order found for Razorpay Order ID: ${rzpOrderId}`);
        return res.status(200).json({ received: true, warning: 'Order not found in database' });
      }

      // Idempotency: If already marked PAID, return without duplicate actions
      if (order.paymentStatus === 'PAID') {
        return res.status(200).json({ received: true, status: 'already_paid' });
      }

      // Update to PAID & CONFIRMED
      await ordersCollection.updateOne(
        { orderId: order.orderId },
        {
          $set: {
            status: 'CONFIRMED',
            paymentStatus: 'PAID',
            razorpayOrderId: rzpOrderId,
            razorpayPaymentId: rzpPaymentId || order.razorpayPaymentId,
            razorpaySignatureVerified: true,
            payment: {
              method: 'razorpay',
              status: 'paid',
              razorpayOrderId: rzpOrderId,
              razorpayPaymentId: rzpPaymentId || order.razorpayPaymentId,
              signatureVerified: true,
              paidAt: new Date()
            },
            updatedAt: new Date()
          }
        }
      );

      // Decrement stock if order was in PENDING_PAYMENT state
      if (Array.isArray(order.items)) {
        for (const item of order.items) {
          if (item.productId && item.productId !== 'custom') {
            const qty = Number(item.quantity) || 1;
            await productsCollection.updateOne(
              { id: item.productId, stock: { $gte: qty } },
              { $inc: { stock: -qty }, $set: { updatedAt: new Date() } }
            );
          }
        }
      }

      const updatedOrder = await ordersCollection.findOne({ orderId: order.orderId });
      await sendOwnerOrderEmail(updatedOrder, db);

      return res.status(200).json({ received: true, status: 'order_marked_paid', orderId: order.orderId });
    }

    return res.status(200).json({ received: true, status: 'unhandled_event_acknowledged' });

  } catch (err) {
    console.error('[Razorpay Webhook Error]', err.name || 'Error', err.message);
    return res.status(500).json({ success: false, message: 'Webhook processing error.' });
  }
}
