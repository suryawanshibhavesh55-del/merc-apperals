/**
 * Premium Minimalist Footer Component
 */

import { SITE_CONFIG } from '../config/siteConfig.js';
import { cartStore } from '../context/CartState.js';

export function Footer() {
  return `
    <footer id="footer" class="bg-[#F0F4F8] border-t border-[#CBD5E1] pt-16 pb-12 text-[#475569]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#CBD5E1]">
          
          <!-- COLUMN 1: BRAND LOGO & STATEMENT -->
          <div class="md:col-span-4 space-y-4">
            <div class="flex flex-col items-start cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
              <span class="font-serif text-3xl text-[#0F172A] tracking-tight font-medium">
                ${SITE_CONFIG.brandName}
              </span>
              <span class="text-[9px] uppercase tracking-[0.25em] text-[#64748B] font-semibold mt-1 font-sans">
                APPARELS N ACCESSORIES
              </span>
            </div>

            <p class="text-xs text-[#64748B] font-light leading-relaxed max-w-sm">
              Premium handcrafted candles and artistic decor pieces, thoughtfully sculpted to bring warmth and beauty to your home and corporate celebrations.
            </p>

            <!-- SOCIAL MEDIA ICONS -->
            <div class="flex items-center space-x-3 pt-2">
              <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors" title="Follow us on Instagram (@mercapparelsnaccessories25)">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors" title="Facebook">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.592 0 9 1.847 9 5.052V8z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors" title="Pinterest">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <div class="pt-1">
              <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#64748B] hover:text-[#0F172A] inline-flex items-center gap-1.5 transition-colors">
                <span class="font-medium text-[#0F172A]">Instagram:</span>
                <span class="font-mono text-[11px] text-slate-600">@mercapparelsnaccessories25</span>
                <span class="text-[10px] text-slate-400">↗</span>
              </a>
            </div>
          </div>

          <!-- COLUMN 2: SHOP NAVIGATION -->
          <div class="md:col-span-3 space-y-3 text-xs uppercase tracking-wider">
            <h3 class="font-semibold text-[#0F172A]">Explore Collections</h3>
            <ul class="space-y-2 text-[#475569] font-normal lowercase tracking-normal">
              <li><a href="#catalog" onclick="cartStore.setCategory('All')" class="hover:text-[#0F172A] transition-colors">Shop All Candles</a></li>
              <li><a href="#catalog" onclick="cartStore.setCategory('Decorative Bowls')" class="hover:text-[#0F172A] transition-colors">Decorative Bowls</a></li>
              <li><a href="#catalog" onclick="cartStore.setCategory('Festive Urlis')" class="hover:text-[#0F172A] transition-colors">Festive Urlis</a></li>
              <li><a href="#catalog" onclick="cartStore.setCategory('Glass Jars')" class="hover:text-[#0F172A] transition-colors">Glass Jars</a></li>
              <li><a href="#resin-art" class="hover:text-[#0F172A] transition-colors">Resin Art (Coming Soon)</a></li>
            </ul>
          </div>

          <!-- COLUMN 3: BUSINESS & GIFTING -->
          <div class="md:col-span-2 space-y-3 text-xs uppercase tracking-wider">
            <h3 class="font-semibold text-[#0F172A]">Company</h3>
            <ul class="space-y-2 text-[#475569] font-normal lowercase tracking-normal">
              <li><a href="#about" class="hover:text-[#0F172A] transition-colors">About Mer C.</a></li>
              <li><a href="#corporate-gifting" class="hover:text-[#0F172A] transition-colors">Corporate Gifting</a></li>
              <li><a href="#corporate-gifting" class="hover:text-[#0F172A] transition-colors">Bulk Orders</a></li>
              <li><a href="#hero" class="hover:text-[#0F172A] transition-colors">Custom Decor</a></li>
              <li><a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="hover:text-[#0F172A] transition-colors inline-flex items-center gap-1 font-medium text-[#0F172A]"><span>Instagram</span><span class="text-[10px] text-slate-400">↗</span></a></li>
            </ul>
          </div>

          <!-- COLUMN 4: POLICIES & SUPPORT -->
          <div class="md:col-span-3 space-y-3 text-xs uppercase tracking-wider">
            <h3 class="font-semibold text-[#0F172A]">Customer Policies</h3>
            <ul class="space-y-2 text-[#475569] font-normal lowercase tracking-normal">
              <li><a href="#" onclick="alert('Shipping Policy: Pan-India express delivery within 3-5 business days. Delivery is completely FREE for all products and orders with no minimum order threshold.')" class="hover:text-[#0F172A] transition-colors">Shipping Policy</a></li>
              <li><a href="#" onclick="alert('Refund Policy: Damaged items are replaced free of charge upon unboxing proof within 48 hours.')" class="hover:text-[#0F172A] transition-colors">Refund & Replacement Policy</a></li>
              <li><a href="#" onclick="alert('Privacy Policy: Mer C. respects your data privacy. Customer information is never shared.')" class="hover:text-[#0F172A] transition-colors">Privacy Policy</a></li>
              <li><a href="#" onclick="alert('Terms & Conditions: Standard e-commerce commercial terms apply to all transactions.')" class="hover:text-[#0F172A] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        <!-- COPYRIGHT & CREDITS -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] space-y-2 sm:space-y-0">
          <p>© 2026 Mer C. Apparels N Accessories. All rights reserved.</p>
          <p class="font-serif italic text-slate-500">Handcrafted Premium E-Commerce Platform</p>
        </div>

      </div>
    </footer>
  `;
}
