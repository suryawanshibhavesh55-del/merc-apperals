/**
 * Vercel Serverless Function: /api/custom-work
 * Portfolio / Our Work showcase management
 * Public GET: Retrieve portfolio categories and photos
 * Admin POST/DELETE: Add/remove portfolio showcase items
 */

import { getDatabase } from '../lib/db.js';
import { verifyAdminToken } from '../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = await getDatabase();
    const collection = db.collection('customWork');

    // 1. GET: Retrieve portfolio items
    if (req.method === 'GET') {
      const items = await collection.find({}).sort({ createdAt: -1 }).toArray();
      return res.status(200).json({ success: true, count: items.length, items });
    }

    // 2. POST: Admin adds showcase item
    if (req.method === 'POST') {
      verifyAdminToken(req);
      const data = req.body;

      if (!data.title || !data.src || !data.category) {
        return res.status(400).json({ success: false, message: 'Title, category, and image URL (src) are required.' });
      }

      const newItem = {
        id: 'work-' + Date.now().toString().slice(-6),
        title: data.title.trim(),
        category: data.category.trim(), // 'custom-mugs-bottles' | 'custom-tshirts' | 'custom-resin-keychains' | 'other-custom-work'
        src: data.src,
        client: data.client ? data.client.trim() : 'Custom Client Order',
        alt: data.alt || data.title,
        createdAt: new Date()
      };

      await collection.insertOne(newItem);
      return res.status(201).json({ success: true, message: 'Portfolio showcase item added.', item: newItem });
    }

    // 3. DELETE: Admin removes showcase item
    if (req.method === 'DELETE') {
      verifyAdminToken(req);
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ success: false, message: 'Item ID is required.' });
      }

      await collection.deleteOne({ id });
      return res.status(200).json({ success: true, message: 'Showcase item removed.' });
    }

    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  } catch (err) {
    console.error('[Custom Work API Error]', err.name || 'Error');
    const rawMsg = err.message || '';
    const isDbError = rawMsg === 'Database configuration is unavailable.' ||
                      rawMsg.includes('mongodb') ||
                      rawMsg.includes('Mongo') ||
                      rawMsg.includes('scheme') ||
                      rawMsg.includes('topology') ||
                      rawMsg.includes('connection');
    const safeMsg = isDbError ? 'Database configuration is unavailable.' : (rawMsg || 'Unable to load portfolio.');
    return res.status(500).json({ success: false, message: safeMsg });
  }
}
