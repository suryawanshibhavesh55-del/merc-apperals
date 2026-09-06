/**
 * Dedicated Resin Art Product Section Component
 * Renders conditionally ONLY when >= 1 active Resin Art products exist in MongoDB.
 * Completely separate from the Candle Product Section.
 */

import { ProductCard } from './ProductCard.js';
import { PRODUCTS } from '../data/products.js';

export function ResinProductGrid(state) {
  const allProducts = (state && state.products && state.products.length > 0) ? state.products : (window.PRODUCTS || PRODUCTS);
  const resinProducts = allProducts.filter(p => (p.category === 'Resin Art' || p.mainCategory === 'Resin Art') && p.isActive !== false);

  // If 0 active Resin Art products exist, do NOT render this section at all
  if (resinProducts.length === 0) {
    return '';
  }

  return `
    <section id="resin-art-products" class="py-16 md:py-24 bg-white border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER (Visually matching Our Candle Collection) -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
            CREATIVE. UNIQUE. TIMELESS.
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight">
            Our Resin Art Collection
          </h2>
          <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
          <p class="text-base text-[#475569] font-sans font-light">
            Discover our handcrafted resin art collection.
          </p>
        </div>

        <!-- RESIN ART PRODUCT GRID (Contains ONLY Resin Art products) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          ${resinProducts.map(p => ProductCard(p, state)).join('')}
        </div>

      </div>
    </section>
  `;
}
