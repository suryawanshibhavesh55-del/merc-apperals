/**
 * Vercel Serverless Function: /api/products
 * Public GET: Active candle products
 * Admin GET/POST/PUT/DELETE: Full product catalog management
 */

import { getDatabase } from './lib/db.js';
import { verifyAdminToken } from './lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = await getDatabase();
    const collection = db.collection('products');

    // 1. GET: Retrieve products
    if (req.method === 'GET') {
      const isAllRequested = req.query.all === 'true';
      let filter = { isActive: { $ne: false } };

      if (isAllRequested) {
        try {
          verifyAdminToken(req);
          filter = {}; // Admin can view all including inactive
        } catch {
          // Unauthenticated fallback to active products only
          filter = { isActive: { $ne: false } };
        }
      }

      const products = await collection.find(filter).sort({ createdAt: -1 }).toArray();

      // Normalize images array for frontend compatibility
      const sanitized = products.map(p => ({
        ...p,
        images: Array.isArray(p.images) ? p.images.map(img => typeof img === 'string' ? img : img.url) : []
      }));

      return res.status(200).json({ success: true, count: sanitized.length, products: sanitized });
    }

    // 2. POST: Admin creates new product
    if (req.method === 'POST') {
      verifyAdminToken(req);
      const data = req.body;

      if (!data.name || !data.price) {
        return res.status(400).json({ success: false, message: 'Product name and price are required.' });
      }

      const isResin = data.category === 'Resin Art' || data.mainCategory === 'Resin Art';
      const defaultPrefix = isResin ? 'merc-resin-' : 'merc-candle-';
      const productId = data.id || defaultPrefix + Date.now().toString().slice(-6);

      const defaultSpecs = isResin ? {
        material: data.material || (data.specifications && data.specifications.material) || "High-Grade Epoxy Resin",
        finish: data.finish || (data.specifications && data.specifications.finish) || "Glossy Glass Finish",
        dimensions: data.dimensions || (data.specifications && data.specifications.dimensions) || "Custom Handcrafted",
        weight: data.weight || (data.specifications && data.specifications.weight) || "Artisanal",
        color: data.color || (data.specifications && data.specifications.color) || "Multicolor Pigment"
      } : {
        waxType: data.waxType || (data.specifications && data.specifications.waxType) || "100% Pure Soy Wax & Essential Oils",
        weight: data.weight || (data.specifications && data.specifications.weight) || "350g",
        fragrance: data.fragrance || (data.specifications && data.specifications.fragrance) || "Signature Botanical",
        container: data.container || (data.specifications && data.specifications.container) || "Handcrafted Vessel",
        dimensions: data.dimensions || (data.specifications && data.specifications.dimensions) || "10cm x 8cm"
      };

      const defaultCare = isResin ? (data.careInstructions || [
        "Wipe gently with a soft damp microfiber cloth.",
        "Avoid direct high heat, harsh chemicals, and abrasive scrubbers."
      ]) : (data.careInstructions || [
        "Trim wick to 1/4 inch before lighting.",
        "Burn on heat-resistant surface away from drafts."
      ]);
      
      const newProduct = {
        id: productId,
        name: data.name.trim(),
        subtitle: data.subtitle ? data.subtitle.trim() : '',
        category: data.category || (isResin ? 'Resin Art' : 'Decorative Bowls'),
        mainCategory: isResin ? 'Resin Art' : 'Candles',
        price: Number(data.price),
        originalPrice: data.originalPrice ? Number(data.originalPrice) : Math.round(Number(data.price) * 1.3),
        rating: 5.0,
        reviewsCount: 1,
        images: Array.isArray(data.images) ? data.images.map(img => typeof img === 'string' ? { url: img, isPrimary: true } : img) : [],
        isFeatured: Boolean(data.isFeatured),
        isHeroBanner: false,
        badge: data.badge || (isResin ? 'Handcrafted' : 'Artisanal'),
        shortDescription: data.shortDescription || data.name,
        fullDescription: data.fullDescription || data.shortDescription || data.name,
        specifications: data.specifications || defaultSpecs,
        careInstructions: defaultCare,
        stock: Number(data.stock) >= 0 ? Number(data.stock) : 25,
        availability: Number(data.stock) === 0 ? "Out of Stock" : "In Stock",
        isActive: data.isActive !== false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await collection.insertOne(newProduct);
      return res.status(201).json({ success: true, message: 'Product created successfully.', product: newProduct });
    }

    // 3. PUT: Admin updates product
    if (req.method === 'PUT') {
      verifyAdminToken(req);
      const data = req.body;
      const id = data.id;

      if (!id) {
        return res.status(400).json({ success: false, message: 'Product ID is required for updating.' });
      }

      const updateFields = {
        updatedAt: new Date()
      };

      if (data.name !== undefined) updateFields.name = data.name.trim();
      if (data.subtitle !== undefined) updateFields.subtitle = data.subtitle.trim();
      if (data.category !== undefined) {
        updateFields.category = data.category;
        updateFields.mainCategory = (data.category === 'Resin Art' || data.mainCategory === 'Resin Art') ? 'Resin Art' : 'Candles';
      }
      if (data.mainCategory !== undefined) updateFields.mainCategory = data.mainCategory;
      if (data.price !== undefined) updateFields.price = Number(data.price);
      if (data.originalPrice !== undefined) updateFields.originalPrice = Number(data.originalPrice);
      if (data.shortDescription !== undefined) updateFields.shortDescription = data.shortDescription;
      if (data.fullDescription !== undefined) updateFields.fullDescription = data.fullDescription;
      if (data.stock !== undefined) {
        updateFields.stock = Number(data.stock);
        updateFields.availability = Number(data.stock) === 0 ? "Out of Stock" : "In Stock";
      }
      if (data.availability !== undefined) updateFields.availability = data.availability;
      if (data.isActive !== undefined) updateFields.isActive = Boolean(data.isActive);
      if (data.images !== undefined) {
        updateFields.images = Array.isArray(data.images) ? data.images.map(img => typeof img === 'string' ? { url: img, isPrimary: true } : img) : [];
      }
      if (data.specifications !== undefined) updateFields.specifications = data.specifications;
      if (data.careInstructions !== undefined) updateFields.careInstructions = data.careInstructions;

      const result = await collection.updateOne({ id }, { $set: updateFields });

      if (result.matchedCount === 0) {
        return res.status(404).json({ success: false, message: 'Product not found.' });
      }

      const updated = await collection.findOne({ id });
      return res.status(200).json({ success: true, message: 'Product updated successfully.', product: updated });
    }

    // 4. DELETE: Admin archives or deletes product
    if (req.method === 'DELETE') {
      verifyAdminToken(req);
      const { id, permanent = false } = req.query;

      if (!id) {
        return res.status(400).json({ success: false, message: 'Product ID is required.' });
      }

      if (permanent === 'true') {
        await collection.deleteOne({ id });
        return res.status(200).json({ success: true, message: 'Product permanently deleted.' });
      } else {
        // Soft delete/archive
        await collection.updateOne({ id }, { $set: { isActive: false, updatedAt: new Date() } });
        return res.status(200).json({ success: true, message: 'Product archived successfully.' });
      }
    }

    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  } catch (err) {
    console.error('[Products API Error]', err);
    if (req.method === 'GET' && req.query.all !== 'true') {
      try {
        const { PRODUCTS } = await import('../src/data/products.js');
        if (Array.isArray(PRODUCTS) && PRODUCTS.length > 0) {
          return res.status(200).json({ success: true, count: PRODUCTS.length, products: PRODUCTS, fallback: true });
        }
      } catch (fallbackErr) {
        console.error('[Products Fallback Error]', fallbackErr);
      }
    }
    return res.status(500).json({ success: false, message: err.message });
  }
}
