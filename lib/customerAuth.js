/**
 * Customer Authentication & Password Security Utilities
 * Uses Node.js standard crypto module (PBKDF2 with SHA-512) for secure password hashing.
 * Universal across Node.js runtime and Vercel Serverless Functions.
 */

import crypto from 'crypto';

const ITERATIONS = 10000;
const KEY_LENGTH = 64;
const DIGEST = 'sha512';

/**
 * Hashes a plaintext password with a random cryptographic salt.
 * @param {string} password 
 * @returns {{ hash: string, salt: string }}
 */
export function hashPassword(password) {
  if (!password || typeof password !== 'string') {
    throw new Error('Valid password string is required.');
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST).toString('hex');
  return { hash, salt };
}

/**
 * Verifies a plaintext password against a stored salt and hash.
 * @param {string} password 
 * @param {string} salt 
 * @param {string} storedHash 
 * @returns {boolean}
 */
export function verifyPassword(password, salt, storedHash) {
  if (!password || !salt || !storedHash) return false;
  try {
    const hash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST).toString('hex');
    return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(storedHash, 'hex'));
  } catch (e) {
    return false;
  }
}
