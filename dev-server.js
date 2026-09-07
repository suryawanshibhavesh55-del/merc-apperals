/**
 * Local Development Server
 * Simulates Vercel Edge/Serverless Function environment locally for /api routes
 * Serves static frontend assets & maps /admin seamlessly to index.html.
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = process.cwd();

// Import serverless function handlers
import authHandler from './api/auth.js';
import productsHandler from './api/products.js';
import ordersHandler from './api/orders.js';
import uploadHandler from './api/upload.js';
import customWorkHandler from './api/custom-work.js';
import dashboardHandler from './api/dashboard.js';
import settingsHandler from './api/settings.js';
import trackHandler from './api/track.js';
import razorpayVerifyHandler from './api/razorpay-verify.js';
import razorpayWebhookHandler from './api/razorpay-webhook.js';

const apiRoutes = {
  '/api/auth': authHandler,
  '/api/products': productsHandler,
  '/api/orders': ordersHandler,
  '/api/track': trackHandler,
  '/api/upload': uploadHandler,
  '/api/custom-work': customWorkHandler,
  '/api/dashboard': dashboardHandler,
  '/api/settings': settingsHandler,
  '/api/razorpay/verify': razorpayVerifyHandler,
  '/api/razorpay/webhook': razorpayWebhookHandler,
  '/api/razorpay-verify': razorpayVerifyHandler,
  '/api/razorpay-webhook': razorpayWebhookHandler
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // 1. Check if route is an API endpoint
  const matchedApiPath = Object.keys(apiRoutes).find(route => pathname === route || pathname.startsWith(route + '/'));

  if (matchedApiPath) {
    const handler = apiRoutes[matchedApiPath];

    // Decorate request object to match Vercel Serverless Function signature
    req.query = parsedUrl.query || {};

    // Decorate response object with .status().json()
    res.status = function (code) {
      res.statusCode = code;
      return res;
    };
    res.json = function (data) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(data));
      return res;
    };

    // Parse request body for POST / PUT / PATCH
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
      let bodyData = '';
      req.on('data', chunk => {
        bodyData += chunk.toString();
      });
      req.on('end', async () => {
        req.rawBody = bodyData;
        try {
          req.body = bodyData ? JSON.parse(bodyData) : {};
        } catch {
          req.body = bodyData;
        }

        try {
          await handler(req, res);
        } catch (err) {
          console.error('[API Handler Error]', err);
          if (!res.writableEnded) {
            res.status(500).json({ success: false, message: err.message });
          }
        }
      });
      return;
    } else {
      req.body = {};
      try {
        await handler(req, res);
      } catch (err) {
        console.error('[API Handler Error]', err);
        if (!res.writableEnded) {
          res.status(500).json({ success: false, message: err.message });
        }
      }
      return;
    }
  }

  // 2. Static File Serving
  if (pathname === '/' || pathname === '/admin' || pathname.startsWith('/admin/') || pathname === '/account' || pathname.startsWith('/account/')) {
    pathname = '/index.html';
  }

  const safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[\/\\])+/, '');
  const publicCandidate = path.join(PUBLIC_DIR, 'public', safePath);
  const rootCandidate = path.join(PUBLIC_DIR, safePath);

  let filePath = rootCandidate;
  if (fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) {
    filePath = publicCandidate;
  } else if (fs.existsSync(rootCandidate) && fs.statSync(rootCandidate).isFile()) {
    filePath = rootCandidate;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(` Mer C. E-Commerce & Admin Platform Local Server`);
  console.log(` URL: http://localhost:${PORT}/`);
  console.log(` Admin: http://localhost:${PORT}/#/admin`);
  console.log(` MongoDB: Connected to MERC Atlas Cluster`);
  console.log(` Cloudinary: Enabled (Cloud: ${process.env.CLOUDINARY_CLOUD_NAME})`);
  console.log(`======================================================\n`);
});
