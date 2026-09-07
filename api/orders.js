/**
 * Vercel Serverless Function: /api/orders
 * Public POST: Customer places order during checkout (persisted to MongoDB)
 * Admin GET/PUT: Full order management, filtering, status workflow, courier details & notes
 */

import { getDatabase } from '../lib/db.js';
import { verifyAdminToken } from '../lib/auth.js';
import { createRazorpayOrder, getRazorpayKeys } from '../lib/razorpay.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = await getDatabase();
    const ordersCollection = db.collection('orders');
    const productsCollection = db.collection('products');

    // 1. POST: Customer places order from checkout
    if (req.method === 'POST') {
      const data = req.body;

      if (!data.customer || !data.items || data.items.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid order payload: items and customer details required.' });
      }

      // Generate clean sequential order number #MC1001+
      const totalOrdersCount = await ordersCollection.countDocuments();
      const orderNumber = 1001 + totalOrdersCount;
      const orderId = `#MC${orderNumber}`;

      // Build immutable snapshot of items at time of purchase with server-side price & stock verification
      const itemsSnapshot = [];
      for (const item of data.items) {
        const prod = item.product || {};
        const quantity = Math.max(1, Number(item.quantity) || 1);

        let verifiedPrice = Number(prod.price) || 0;
        let verifiedName = prod.name || 'Handcrafted Piece';
        let verifiedCategory = prod.category || 'Decorative';
        let verifiedImg = Array.isArray(prod.images) && prod.images.length > 0
          ? (typeof prod.images[0] === 'string' ? prod.images[0] : prod.images[0].url)
          : '';

        if (prod.id && prod.id !== 'custom') {
          const dbProduct = await productsCollection.findOne({ id: prod.id });
          if (dbProduct) {
            verifiedPrice = Number(dbProduct.price);
            verifiedName = dbProduct.name;
            verifiedCategory = dbProduct.category || dbProduct.mainCategory || verifiedCategory;
            if (Array.isArray(dbProduct.images) && dbProduct.images.length > 0) {
              verifiedImg = typeof dbProduct.images[0] === 'string' ? dbProduct.images[0] : (dbProduct.images[0].url || '');
            }
            if (dbProduct.stock !== undefined && dbProduct.stock < quantity) {
              return res.status(400).json({
                success: false,
                message: `Product "${dbProduct.name}" has insufficient stock (only ${dbProduct.stock} left).`
              });
            }
          }
        }

        const itemSubtotal = verifiedPrice * quantity;
        itemsSnapshot.push({
          productId: prod.id || 'custom',
          productName: verifiedName,
          category: verifiedCategory,
          priceAtPurchase: verifiedPrice,
          imageAtPurchase: verifiedImg,
          quantity,
          subtotal: itemSubtotal
        });
      }

      // Server-side enforcement: Only Razorpay Online Payment is accepted.
      if (data.paymentMethod && String(data.paymentMethod).toUpperCase() !== 'RAZORPAY') {
        return res.status(400).json({
          success: false,
          message: 'Cash on Delivery is discontinued. Online payment via Razorpay is required.'
        });
      }

      // Server-side calculation & verification (Delivery is ALWAYS 100% Free - costs included in product prices)
      const calculatedSubtotal = itemsSnapshot.reduce((sum, i) => sum + i.subtotal, 0);
      const subtotal = calculatedSubtotal;
      const shipping = 0; // Strict Business Rule: Delivery charge is ALWAYS ₹0
      const totalAmount = calculatedSubtotal; // Final customer payable amount = subtotal + ₹0 delivery

      const amountInPaise = Math.round(totalAmount * 100);
      const rzpOrder = await createRazorpayOrder({
        amount: amountInPaise,
        currency: 'INR',
        receipt: orderId,
        notes: {
          orderId,
          customerEmail: data.customer.email || '',
          customerPhone: data.customer.phone || ''
        }
      });

      const orderDocument = {
        orderId,
        customer: {
          name: data.customer.name ? data.customer.name.trim() : 'Customer',
          phone: data.customer.phone ? data.customer.phone.trim() : '',
          email: data.customer.email ? data.customer.email.trim() : '',
          address: data.customer.address ? data.customer.address.trim() : '',
          city: data.customer.city ? data.customer.city.trim() : '',
          pincode: data.customer.pincode ? data.customer.pincode.trim() : ''
        },
        items: itemsSnapshot,
        itemCount: itemsSnapshot.reduce((sum, i) => sum + i.quantity, 0),
        subtotal,
        shipping,
        discount: 0,
        totalAmount,
        status: 'PENDING_PAYMENT',
        paymentStatus: 'PENDING',
        paymentMethod: 'RAZORPAY',
        razorpayOrderId: rzpOrder.id,
        payment: {
          method: 'razorpay',
          status: 'pending',
          razorpayOrderId: rzpOrder.id,
          razorpayPaymentId: '',
          signatureVerified: false
        },
        shippingStatus: 'PENDING',
        courierName: '',
        trackingNumber: '',
        trackingUrl: '',
        estimatedDelivery: '',
        shippingDetails: {
          courier: '',
          trackingNumber: '',
          trackingUrl: '',
          estimatedDelivery: '',
          status: 'NEW'
        },
        adminNotes: '',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await ordersCollection.insertOne(orderDocument);

      const { keyId } = getRazorpayKeys();
      const responsePayload = {
        success: true,
        message: 'Order initiated for Razorpay payment.',
        orderId,
        order: orderDocument,
        razorpay: {
          keyId,
          orderId: rzpOrder.id,
          amount: rzpOrder.amount,
          currency: rzpOrder.currency || 'INR',
          name: 'Mer C.',
          description: `Order ${orderId}`,
          prefill: {
            name: orderDocument.customer.name,
            email: orderDocument.customer.email,
            contact: orderDocument.customer.phone
          }
        }
      };

      return res.status(201).json(responsePayload);
    }

    // 2. GET: Admin retrieves orders with search, filter, and pagination
    if (req.method === 'GET') {
      verifyAdminToken(req);

      const {
        search = '',
        status = '',
        paymentStatus = '',
        date = '',
        limit = 50,
        page = 1
      } = req.query;

      let query = {};

      // Text search across ID, Name, Phone, Email
      if (search) {
        const regex = new RegExp(search, 'i');
        query.$or = [
          { orderId: regex },
          { 'customer.name': regex },
          { 'customer.phone': regex },
          { 'customer.email': regex }
        ];
      }

      // Status filter
      if (status && status !== 'ALL') {
        query.status = status.toUpperCase();
      }

      // Payment Status filter
      if (paymentStatus && paymentStatus !== 'ALL') {
        query.paymentStatus = paymentStatus.toUpperCase();
      }

      // Date Range filter
      if (date) {
        const now = new Date();
        if (date === 'today') {
          const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          query.createdAt = { $gte: start };
        } else if (date === 'yesterday') {
          const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
          const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          query.createdAt = { $gte: start, $lt: end };
        } else if (date === '7d') {
          const start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          query.createdAt = { $gte: start };
        } else if (date === '30d') {
          const start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          query.createdAt = { $gte: start };
        }
      }

      const skip = (Number(page) - 1) * Number(limit);
      const orders = await ordersCollection
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .toArray();

      const totalMatching = await ordersCollection.countDocuments(query);
      const unreadCount = await ordersCollection.countDocuments({ isRead: false });

      return res.status(200).json({
        success: true,
        orders,
        total: totalMatching,
        unreadCount,
        page: Number(page),
        totalPages: Math.ceil(totalMatching / Number(limit))
      });
    }

    // 3. PUT: Admin updates order status, tracking, notes, or read flag
    if (req.method === 'PUT') {
      verifyAdminToken(req);
      const { orderId, status, paymentStatus, courierName, trackingNumber, trackingUrl, estimatedDelivery, adminNotes, isRead } = req.body || {};

      if (!orderId) {
        return res.status(400).json({ success: false, message: 'orderId is required.' });
      }

      const updateFields = { updatedAt: new Date() };

      if (status !== undefined) {
        const cleanStatus = status.toUpperCase();
        updateFields.status = cleanStatus;
        updateFields['shippingDetails.status'] = cleanStatus;
      }
      if (paymentStatus !== undefined) updateFields.paymentStatus = paymentStatus.toUpperCase();
      if (courierName !== undefined) {
        const cleanCourier = courierName.trim();
        updateFields.courierName = cleanCourier;
        updateFields['shippingDetails.courier'] = cleanCourier;
      }
      if (trackingNumber !== undefined) {
        const cleanTracking = trackingNumber.trim();
        updateFields.trackingNumber = cleanTracking;
        updateFields['shippingDetails.trackingNumber'] = cleanTracking;
      }
      if (trackingUrl !== undefined) {
        const cleanUrl = trackingUrl.trim();
        updateFields.trackingUrl = cleanUrl;
        updateFields['shippingDetails.trackingUrl'] = cleanUrl;
      }
      if (estimatedDelivery !== undefined) {
        const cleanEst = estimatedDelivery.trim();
        updateFields.estimatedDelivery = cleanEst;
        updateFields['shippingDetails.estimatedDelivery'] = cleanEst;
      }
      if (adminNotes !== undefined) updateFields.adminNotes = adminNotes;
      if (isRead !== undefined) updateFields.isRead = Boolean(isRead);

      const result = await ordersCollection.updateOne({ orderId }, { $set: updateFields });

      if (result.matchedCount === 0) {
        return res.status(404).json({ success: false, message: `Order ${orderId} not found.` });
      }

      const updated = await ordersCollection.findOne({ orderId });
      return res.status(200).json({ success: true, message: 'Order updated successfully.', order: updated });
    }

    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  } catch (err) {
    console.error('[Orders API Error]', err.name || 'Error');
    const rawMsg = err.message || '';
    const isDbError = rawMsg === 'Database configuration is unavailable.' ||
                      rawMsg.includes('mongodb') ||
                      rawMsg.includes('Mongo') ||
                      rawMsg.includes('scheme') ||
                      rawMsg.includes('topology') ||
                      rawMsg.includes('connection');
    const safeMsg = isDbError ? 'Database configuration is unavailable.' : (rawMsg || 'Unable to process order.');
    return res.status(500).json({ success: false, message: safeMsg });
  }
}
