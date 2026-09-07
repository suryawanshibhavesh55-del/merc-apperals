/**
 * Vercel Serverless Function: /api/settings
 * Store configuration settings
 */

import { getDatabase } from '../lib/db.js';
import { verifyAdminToken } from '../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = await getDatabase();
    const collection = db.collection('settings');

    if (req.method === 'GET') {
      const settings = await collection.findOne({}) || {
        storeName: "Mer C.",
        companyFullName: "Mer C Apparels N Accessories",
        whatsappNumber: process.env.WHATSAPP_NUMBER || "+917045493582",
        instagramUrl: "https://www.instagram.com/mercapparelsnaccessories25/",
        currencySymbol: "₹",
        freeShippingThreshold: 0,
        standardShippingFee: 0,
        lowStockThreshold: 15
      };
      return res.status(200).json({ success: true, settings });
    }

    if (req.method === 'PUT') {
      verifyAdminToken(req);
      const data = req.body || {};

      const updateFields = { updatedAt: new Date() };
      if (data.storeName !== undefined) updateFields.storeName = data.storeName.trim();
      if (data.companyFullName !== undefined) updateFields.companyFullName = data.companyFullName.trim();
      if (data.whatsappNumber !== undefined) updateFields.whatsappNumber = data.whatsappNumber.trim();
      if (data.instagramUrl !== undefined) updateFields.instagramUrl = data.instagramUrl.trim();
      if (data.freeShippingThreshold !== undefined) updateFields.freeShippingThreshold = Number(data.freeShippingThreshold);
      if (data.standardShippingFee !== undefined) updateFields.standardShippingFee = Number(data.standardShippingFee);
      if (data.lowStockThreshold !== undefined) updateFields.lowStockThreshold = Number(data.lowStockThreshold);

      await collection.updateOne({}, { $set: updateFields }, { upsert: true });
      const updated = await collection.findOne({});
      return res.status(200).json({ success: true, message: 'Settings updated successfully.', settings: updated });
    }

    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  } catch (err) {
    console.error('[Settings API Error]', err.name || 'Error');
    const rawMsg = err.message || '';
    const isDbError = rawMsg === 'Database configuration is unavailable.' ||
                      rawMsg.includes('mongodb') ||
                      rawMsg.includes('Mongo') ||
                      rawMsg.includes('scheme') ||
                      rawMsg.includes('topology') ||
                      rawMsg.includes('connection');
    const safeMsg = isDbError ? 'Database configuration is unavailable.' : (rawMsg || 'Unable to load settings.');
    return res.status(500).json({ success: false, message: safeMsg });
  }
}
