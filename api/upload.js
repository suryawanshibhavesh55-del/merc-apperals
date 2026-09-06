/**
 * Vercel Serverless Function: /api/upload
 * Secure Cloudinary Image Upload Endpoint (Admin only)
 * Streams uploaded image base64 directly to Cloudinary with ecommerce optimizations.
 */

import { uploadToCloudinary } from './lib/cloudinary.js';
import { verifyAdminToken } from './lib/auth.js';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

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
    verifyAdminToken(req);

    const { fileData, folder = 'mer-c/products' } = req.body || {};

    if (!fileData) {
      return res.status(400).json({ success: false, message: 'Missing image data (fileData is required).' });
    }

    // Upload to Cloudinary
    const uploaded = await uploadToCloudinary(fileData, folder);

    return res.status(200).json({
      success: true,
      message: 'Image uploaded successfully to Cloudinary.',
      ...uploaded
    });
  } catch (err) {
    console.error('[Upload API Error]', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
