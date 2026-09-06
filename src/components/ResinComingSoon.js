/**
 * Resin Art Visual Storytelling Banner Component
 * Always renders the approved visual introduction and background photography.
 * CTA button dynamically toggles:
 * - "COMING SOON" when 0 active Resin Art products exist in MongoDB.
 * - "EXPLORE RESIN ART →" (smooth anchor to #resin-art-products) when >= 1 active Resin Art products exist.
 */

import { PRODUCTS } from '../data/products.js';

export function ResinComingSoon(state) {
  const allProducts = (state && state.products && state.products.length > 0) ? state.products : (window.PRODUCTS || PRODUCTS);
  const resinProducts = allProducts.filter(p => (p.category === 'Resin Art' || p.mainCategory === 'Resin Art') && p.isActive !== false);
  const hasResinProducts = resinProducts.length > 0;

  return `
    <section id="resin-art" class="relative w-full bg-[#EBF1F6] min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden border-b border-[#E2E9F0]">
      
      <!-- FULL-WIDTH RESIN ART BACKGROUND IMAGE (SAME COMPOSITION FOR ALL BREAKPOINTS) -->
      <img src="assets/generated/resin_art_coming_soon.jpg" 
           alt="Mer C. Handcrafted Resin Art Collection" 
           class="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-[65%_center] md:object-center">
      
      <!-- ALICE BLUE GRADIENT OVERLAY FOR READABILITY -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#EBF1F6]/95 via-[#EBF1F6]/85 sm:via-[#EBF1F6]/75 to-transparent w-full sm:w-3/4 md:w-3/5 lg:w-1/2"></div>

      <!-- RESIN CONTENT OVERLAY (Positioned directly inside the visual space) -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 z-10">
        <div class="max-w-xs sm:max-w-md lg:max-w-xl space-y-4 sm:space-y-6">
          
          <span class="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#64748B] block">
            CREATIVE. UNIQUE. TIMELESS.
          </span>

          <h2 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-medium leading-tight">
            Resin Art
          </h2>

          <div class="w-12 h-[1.5px] bg-[#0F172A]"></div>

          <p class="text-xs sm:text-base text-[#475569] font-sans font-light max-w-md leading-relaxed">
            Beautifully handcrafted resin art pieces that add charm to your space.
          </p>

          <div class="pt-2">
            ${hasResinProducts ? `
              <a href="#resin-art-products" 
                 class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-none shadow-sm hover:bg-[#334155] transition-all group">
                <span>EXPLORE RESIN ART</span>
                <svg class="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </a>
            ` : `
              <div class="inline-block px-8 py-3.5 border border-[#1E293B] text-[#1E293B] text-xs uppercase tracking-[0.2em] font-medium bg-transparent cursor-default">
                COMING SOON
              </div>
            `}
          </div>

        </div>
      </div>

    </section>
  `;
}
