/**
 * Cloudinary Media Storage Utility
 * Direct server-side integration for product and portfolio image uploads.
 */

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

/**
 * Uploads a base64 or buffer image string to Cloudinary with ecommerce optimizations
 * @param {string} fileData - Base64 Data URI or image URL
 * @param {string} folder - Target folder in Cloudinary (e.g. 'mer-c/products')
 * @returns {Promise<Object>} Secure URL and public ID
 */
export async function uploadToCloudinary(fileData, folder = 'mer-c/products') {
  const result = await cloudinary.uploader.upload(fileData, {
    folder: folder,
    resource_type: 'image',
    transformation: [
      { quality: 'auto:good' },
      { fetch_format: 'auto' }
    ]
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
    format: result.format,
    width: result.width,
    height: result.height
  };
}

export async function deleteFromCloudinary(publicId) {
  if (!publicId) return null;
  return await cloudinary.uploader.destroy(publicId);
}

export default cloudinary;
