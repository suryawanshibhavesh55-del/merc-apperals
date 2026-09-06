/**
 * Cross-Platform Production Bundler for Mer C.
 * Compiles and bundles application modules for production delivery.
 * Native Node.js execution across Linux, macOS, Windows, and Vercel.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  'src/config/siteConfig.js',
  'src/data/products.js',
  'src/data/trustedClients.js',
  'src/data/corporateLogos.js',
  'src/data/ourWorkPortfolio.js',
  'src/context/CartState.js',
  'src/admin/adminStore.js',
  'src/admin/AdminLogin.js',
  'src/admin/AdminDashboard.js',
  'src/services/paymentService.js',
  'src/components/Header.js',
  'src/components/Hero.js',
  'src/components/ResinComingSoon.js',
  'src/components/ResinProductGrid.js',
  'src/components/FeatureStrip.js',
  'src/components/ProductCard.js',
  'src/components/ProductGrid.js',
  'src/components/ProductDetailModal.js',
  'src/components/PortfolioLightbox.js',
  'src/components/OurWorkPage.js',
  'src/components/CorporateGifting.js',
  'src/components/TrustedClients.js',
  'src/components/AboutSection.js',
  'src/components/CartDrawer.js',
  'src/components/CheckoutModal.js',
  'src/components/AccountTrackingPage.js',
  'src/components/WhatsAppInquiry.js',
  'src/components/DocumentModal.js',
  'src/components/Footer.js',
  'src/app.js'
];

let bundleContent = '';
let processedCount = 0;

for (const relPath of files) {
  const fullPath = path.resolve(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    let fileContent = fs.readFileSync(fullPath, 'utf8');
    // Strip export statements and import statements for standalone browser compatibility
    fileContent = fileContent.replace(/import\s+[^;]+;/g, '');
    fileContent = fileContent.replace(/export\s+const\s+/g, 'const ');
    fileContent = fileContent.replace(/export\s+function\s+/g, 'function ');
    fileContent = fileContent.replace(/export\s+class\s+/g, 'class ');
    fileContent = fileContent.replace(/export\s+default\s+/g, '');
    bundleContent += '\n/* --- ' + relPath + ' --- */\n' + fileContent + '\n';
    processedCount++;
  } else {
    console.warn(`Warning: File not found: ${relPath}`);
  }
}

// 1. Output bundle.js to root directory (for local backwards compatibility)
const rootOutputPath = path.resolve(__dirname, 'bundle.js');
fs.writeFileSync(rootOutputPath, bundleContent, 'utf8');

// 2. Prepare 'public' output directory for Vercel production deployment
const publicDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 3. Output bundle.js inside public/
const publicBundlePath = path.join(publicDir, 'bundle.js');
fs.writeFileSync(publicBundlePath, bundleContent, 'utf8');

// 4. Copy index.html into public/
const srcHtml = path.resolve(__dirname, 'index.html');
const destHtml = path.join(publicDir, 'index.html');
if (fs.existsSync(srcHtml)) {
  fs.copyFileSync(srcHtml, destHtml);
}

// 5. Copy assets/ directory into public/assets/
const srcAssets = path.resolve(__dirname, 'assets');
const destAssets = path.join(publicDir, 'assets');
if (fs.existsSync(srcAssets)) {
  fs.cpSync(srcAssets, destAssets, { recursive: true, force: true });
}

console.log(`✓ Standalone bundle.js created successfully (${processedCount}/${files.length} modules bundled)!`);
console.log(`✓ Output directory 'public' populated for Vercel deployment:`);
console.log(`  - ${path.relative(__dirname, publicBundlePath)} (${(fs.statSync(publicBundlePath).size / 1024).toFixed(1)} KB)`);
console.log(`  - ${path.relative(__dirname, destHtml)} (${(fs.statSync(destHtml).size / 1024).toFixed(1)} KB)`);
console.log(`  - ${path.relative(__dirname, destAssets)} (static assets synchronized)`);

