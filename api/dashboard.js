/**
 * Vercel Serverless Function: /api/dashboard
 * Aggregates real-time statistics and recent orders for the Admin Overview
 */

import { getDatabase } from './lib/db.js';
import { verifyAdminToken } from './lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    verifyAdminToken(req);

    const db = await getDatabase();
    const ordersCollection = db.collection('orders');
    const productsCollection = db.collection('products');
    const settingsCollection = db.collection('settings');

    const settings = await settingsCollection.findOne({}) || {};
    const lowStockThreshold = Number(settings.lowStockThreshold) || 15;

    // Counts across statuses
    const totalOrders = await ordersCollection.countDocuments();
    const newOrders = await ordersCollection.countDocuments({ status: 'NEW' });
    const processingOrders = await ordersCollection.countDocuments({ status: { $in: ['CONFIRMED', 'PROCESSING', 'PACKED'] } });
    const shippedOrders = await ordersCollection.countDocuments({ status: 'SHIPPED' });
    const deliveredOrders = await ordersCollection.countDocuments({ status: 'DELIVERED' });
    const cancelledOrders = await ordersCollection.countDocuments({ status: 'CANCELLED' });

    // Revenue calculation (Excludes cancelled orders)
    const revenueAgg = await ordersCollection.aggregate([
      { $match: { status: { $ne: 'CANCELLED' } } },
      { $group: { _id: null, totalRevenue: { $sum: '$totalAmount' } } }
    ]).toArray();

    const totalRevenue = revenueAgg.length > 0 ? revenueAgg[0].totalRevenue : 0;

    // Product metrics
    const totalProducts = await productsCollection.countDocuments({ isActive: { $ne: false } });
    const lowStockCount = await productsCollection.countDocuments({
      isActive: { $ne: false },
      stock: { $lte: lowStockThreshold }
    });

    // Recent 6 orders
    const recentOrders = await ordersCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(6)
      .toArray();

    return res.status(200).json({
      success: true,
      stats: {
        totalOrders,
        newOrders,
        processingOrders,
        shippedOrders,
        deliveredOrders,
        cancelledOrders,
        totalRevenue,
        totalProducts,
        lowStockCount,
        unreadOrdersCount: newOrders
      },
      recentOrders
    });
  } catch (err) {
    console.error('[Dashboard API Error]', err.name || 'Error');
    const rawMsg = err.message || '';
    const isDbError = rawMsg === 'Database configuration is unavailable.' ||
                      rawMsg.includes('mongodb') ||
                      rawMsg.includes('Mongo') ||
                      rawMsg.includes('scheme') ||
                      rawMsg.includes('topology') ||
                      rawMsg.includes('connection');
    const safeMsg = isDbError ? 'Database configuration is unavailable.' : (rawMsg || 'Unable to load dashboard metrics.');
    return res.status(500).json({ success: false, message: safeMsg });
  }
}
