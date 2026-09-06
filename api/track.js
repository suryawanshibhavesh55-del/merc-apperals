/**
 * Vercel Serverless Function: /api/track
 * Customer Order Tracking Endpoint
 * Verifies Email + Order Number server-side against MongoDB Atlas.
 * Enforces strict customer isolation: customers can only view their own authenticated order.
 */

import { getDatabase } from './lib/db.js';

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

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
    const { email, orderNumber, orderId } = req.body || {};

    const cleanEmail = (email || '').trim();
    const rawOrderNum = (orderNumber || orderId || '').trim();
    const normalizedOrderNum = rawOrderNum.replace(/^#/, '').trim();

    if (!cleanEmail || !normalizedOrderNum) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both your Email Address and Order Number.'
      });
    }

    const db = await getDatabase();
    const ordersCollection = db.collection('orders');

    // Case-insensitive email and flexible order reference matching (handles with or without #)
    const emailRegex = new RegExp('^' + escapeRegex(cleanEmail) + '$', 'i');
    const orderIdRegex = new RegExp('^#?' + escapeRegex(normalizedOrderNum) + '$', 'i');

    const order = await ordersCollection.findOne({
      'customer.email': emailRegex,
      orderId: orderIdRegex
    });

    const GENERIC_ERROR_MESSAGE = "We couldn't find an order matching those details. Please check your email address and order number.";

    // If no order exists matching both email and order number
    if (!order) {
      return res.status(404).json({
        success: false,
        message: GENERIC_ERROR_MESSAGE
      });
    }

    // Normalize shipping information (only show when entered by admin)
    const courier = order.courierName || (order.shippingDetails && order.shippingDetails.courier) || '';
    const trackingNum = order.trackingNumber || (order.shippingDetails && order.shippingDetails.trackingNumber) || '';
    const trackingUrl = order.trackingUrl || (order.shippingDetails && order.shippingDetails.trackingUrl) || '';
    const estimatedDelivery = order.estimatedDelivery || (order.shippingDetails && order.shippingDetails.estimatedDelivery) || '';

    const STATUS_MAP = {
      NEW: 0,
      CONFIRMED: 0,
      PROCESSING: 1,
      PACKED: 2,
      SHIPPED: 3,
      OUT_FOR_DELIVERY: 4,
      DELIVERED: 5,
      CANCELLED: -1
    };
    const orderStatus = (order.status || 'NEW').toUpperCase();
    const timelineIndex = STATUS_MAP[orderStatus] !== undefined ? STATUS_MAP[orderStatus] : 0;

    // Sanitized order details (Zero exposure of admin notes, passwords, or other customer data)
    const sanitizedOrder = {
      orderId: order.orderId,
      status: orderStatus,
      timelineIndex,
      courier,
      courierName: courier,
      trackingNumber: trackingNum,
      trackingUrl,
      estimatedDelivery,
      createdAt: order.createdAt,
      customer: {
        name: order.customer ? order.customer.name || 'Customer' : 'Customer',
        city: order.customer ? order.customer.city || '' : '',
        pincode: order.customer ? order.customer.pincode || '' : ''
      },
      shipping: {
        courier,
        trackingNumber: trackingNum,
        trackingUrl,
        estimatedDelivery,
        status: orderStatus
      },
      items: (order.items || []).map(item => ({
        productName: item.productName || 'Handcrafted Piece',
        priceAtPurchase: Number(item.priceAtPurchase) || 0,
        quantity: Number(item.quantity) || 1,
        subtotal: Number(item.subtotal) || ((Number(item.priceAtPurchase) || 0) * (Number(item.quantity) || 1)),
        imageAtPurchase: item.imageAtPurchase || ''
      })),
      subtotal: Number(order.subtotal) || 0,
      shippingFee: Number(order.shipping) || 0,
      totalAmount: Number(order.totalAmount) || 0
    };

    return res.status(200).json({
      success: true,
      message: 'Order retrieved successfully.',
      order: sanitizedOrder
    });

  } catch (err) {
    console.error('[Track API Error]', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while tracking your order. Please try again later.'
    });
  }
}
