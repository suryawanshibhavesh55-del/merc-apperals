/**
 * Single Responsive Hero Component
 * Single DOM container, single hero image (assets/generated/unified_hero_banner.jpg), single text overlay across all breakpoints.
 */

import { cartStore } from '../context/CartState.js';

export function Hero() {
  return `
    <section id="hero" class="relative w-full bg-[#EBF1F6] min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-[#E2E9F0]">
      
      <!-- SINGLE HERO IMAGE FOR ALL BREAKPOINTS (SAME APPROVED IMAGE) -->
      <img src="assets/generated/unified_hero_banner.jpg" 
           alt="Mer C. Handcrafted Candle Composition" 
           class="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-[65%_center] md:object-center">
      
      <!-- ALICE BLUE GRADIENT OVERLAY -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#EBF1F6]/95 via-[#EBF1F6]/85 sm:via-[#EBF1F6]/75 to-transparent w-full sm:w-3/4 md:w-3/5 lg:w-1/2"></div>

      <!-- HERO TEXT OVERLAY (Positioned directly over the hero image) -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 z-10">
        <div class="max-w-xs sm:max-w-md lg:max-w-xl space-y-4 sm:space-y-6">
          
          <!-- Eyebrow text -->
          <div class="flex items-center space-x-2">
            <span class="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#475569]">
              HANDCRAFTED WITH LOVE
            </span>
          </div>

          <!-- Main Serif Headline -->
          <h1 class="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-[#0F172A] leading-[1.08] tracking-tight">
            Illuminate.<br>
            Decorate.<br>
            Celebrate.
          </h1>

          <!-- Supporting Paragraph -->
          <p class="text-xs sm:text-base lg:text-lg text-[#475569] font-sans font-light leading-relaxed max-w-md">
            Premium handcrafted candles and artistic pieces, created to bring warmth and beauty to every moment.
          </p>

          <!-- Action Button -->
          <div class="pt-2 sm:pt-3">
            <a href="#catalog" 
               onclick="cartStore.setCategory('All')"
               class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-none shadow-sm hover:bg-[#334155] transition-all group">
              <span>SHOP CANDLES</span>
              <svg class="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
          </div>

          <!-- Slide Indicator -->
          <div class="pt-4 sm:pt-6 flex items-center space-x-4 text-xs font-sans text-[#64748B]">
            <span class="font-semibold text-[#0F172A] tracking-wider">01</span>
            <span class="w-10 h-[1.5px] bg-[#0F172A]"></span>
            <span class="hover:text-[#0F172A] cursor-pointer transition-colors" onclick="window.openProductById('merc-candle-02')">02</span>
            <span class="hover:text-[#0F172A] cursor-pointer transition-colors" onclick="window.openProductById('merc-candle-03')">03</span>
          </div>

        </div>
      </div>

    </section>
  `;
}
