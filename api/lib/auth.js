/**
 * Admin Authentication & JWT Security Utility
 * Server-side credential verification and session tokens.
 */

import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'MercAdmin2026!';
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'merc_jwt_secret_token_secure_cormorant_alice_blue_2026';

export function verifyCredentials(username, password) {
  if (!username || !password) return false;
  return (
    username.trim() === ADMIN_USERNAME.trim() &&
    password.trim() === ADMIN_PASSWORD.trim()
  );
}

export function generateToken(username) {
  return jwt.sign(
    {
      username,
      role: 'ADMIN',
      iss: 'mer-c-admin'
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyAdminToken(req) {
  let token = null;

  // 1. Check Authorization header
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  }

  // 2. Check cookies
  if (!token && req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie);
    token = cookies.merc_admin_token;
  }

  if (!token) {
    throw new Error('Authentication required: Missing admin token.');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new Error('Invalid or expired admin session token.');
  }
}
