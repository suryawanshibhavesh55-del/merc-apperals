/**
 * Vercel Serverless Function: /api/auth
 * Handles Admin login, token verification, and logout.
 */

import { verifyCredentials, generateToken, verifyAdminToken } from './lib/auth.js';
import cookie from 'cookie';

export default async function handler(req, res) {
  // Enable CORS headers if required
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { action = 'login', username, password } = req.body || {};

      if (action === 'login') {
        if (!username || !password) {
          return res.status(400).json({ success: false, message: 'Username and password are required.' });
        }

        const isValid = verifyCredentials(username, password);
        if (!isValid) {
          return res.status(401).json({ success: false, message: 'Invalid admin username or password.' });
        }

        const token = generateToken(username);

        // Set secure HTTP-only cookie
        res.setHeader('Set-Cookie', cookie.serialize('merc_admin_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 7 * 24 * 60 * 60, // 7 days
          path: '/'
        }));

        return res.status(200).json({
          success: true,
          message: 'Admin authenticated successfully.',
          token,
          user: { username, role: 'ADMIN' }
        });
      }

      if (action === 'logout') {
        res.setHeader('Set-Cookie', cookie.serialize('merc_admin_token', '', {
          httpOnly: true,
          expires: new Date(0),
          path: '/'
        }));
        return res.status(200).json({ success: true, message: 'Logged out successfully.' });
      }

      return res.status(400).json({ success: false, message: 'Invalid action.' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  if (req.method === 'GET') {
    // Verify session
    try {
      const user = verifyAdminToken(req);
      return res.status(200).json({ authenticated: true, user });
    } catch (err) {
      return res.status(401).json({ authenticated: false, message: err.message });
    }
  }

  return res.status(405).json({ success: false, message: 'Method not allowed.' });
}
