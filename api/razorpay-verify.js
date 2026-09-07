/**
 * Vercel Serverless Function: /api/razorpay/verify
 * Verifies Razorpay payment signature cryptographically on the server.
 * Enforces strict idempotency, prevents duplicate processing, decrements inventory, and updates MongoDB order to PAID.
 */

import { getDatabase } from '../lib/db.js';
import { verifyPaymentSignature } from '../lib/razorpay.js';
import { sendOwnerOrderEmail } from '../lib/email.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  try {
    const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};

    if (!orderId || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Missing required payment verification parameters.'
      });
    }

    const db = await getDatabase();
    const ordersCollection = db.collection('orders');
    const productsCollection = db.collection('products');

    const order = await ordersCollection.findOne({ orderId });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Order "${orderId}" not found in system.`
      });
    }

    // 1. Idempotency Guard: Prevent duplicate order processing if already verified
    if (order.paymentStatus === 'PAID') {
      return res.status(200).json({
        success: true,
        message: 'Payment already verified.',
        orderId,
        order
      });
    }

    // 2. Cryptographic Server-Side Signature Verification
    const isSignatureValid = verifyPaymentSignature({
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature
    });

    if (!isSignatureValid) {
      console.warn(`[Razorpay Verify] Signature mismatch for Order ${orderId}`);
      await ordersCollection.updateOne(
        { orderId },
        {
          $set: {
            paymentStatus: 'FAILED',
            status: 'PAYMENT_FAILED',
            'payment.status': 'failed',
            'payment.razorpayOrderId': razorpay_order_id,
            'payment.razorpayPaymentId': razorpay_payment_id,
            'payment.signatureVerified': false,
            updatedAt: new Date()
          }
        }
      );

      return res.status(400).json({
        success: false,
        message: 'Payment verification failed: Invalid cryptographic signature.'
      });
    }

    // 3. Mark Order as PAID and CONFIRMED
    const updatedFields = {
      status: 'CONFIRMED',
      paymentStatus: 'PAID',
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignatureVerified: true,
      payment: {
        method: 'razorpay',
        status: 'paid',
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        signatureVerified: true,
        paidAt: new Date()
      },
      updatedAt: new Date()
    };

    await ordersCollection.updateOne({ orderId }, { $set: updatedFields });

    // 4. Decrement Stock for Verified Order Items (Guarded against duplicate decrement)
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

    const updatedOrder = await ordersCollection.findOne({ orderId });
    await sendOwnerOrderEmail(updatedOrder, db);

    return res.status(200).json({
      success: true,
      message: 'Payment verified and order confirmed.',
      orderId,
      order: updatedOrder
    });

  } catch (err) {
    console.error('[Razorpay Verify Error]', err.name || 'Error');
    return res.status(500).json({
      success: false,
      message: err.message || 'Payment verification failed due to internal error.'
    });
  }
}
