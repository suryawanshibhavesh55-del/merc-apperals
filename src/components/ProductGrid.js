/**
 * Product Collection Grid Component with Filtering & Search Integration
 */

import { PRODUCTS, CATEGORIES } from '../data/products.js';
import { ProductCard } from './ProductCard.js';
import { cartStore } from '../context/CartState.js';

const CANDLE_CATEGORIES = [
  "All",
  "Decorative Bowls",
  "Festive Urlis",
  "Glass Jars",
  "Sculptural Candles"
];

export function ProductGrid(state) {
  const { activeCategory, searchQuery } = state;
  const allProducts = (state.products && state.products.length > 0) ? state.products : PRODUCTS;

  // Candle products ONLY: Strictly exclude any Resin Art products
  const candleProducts = allProducts.filter(p => p.category !== 'Resin Art' && p.mainCategory !== 'Resin Art' && p.isActive !== false);

  // Filter logic within candles
  let filteredProducts = candleProducts.filter(product => {
    let matchesCategory = true;
    if (activeCategory && activeCategory !== "All" && activeCategory !== "Candles") {
      matchesCategory = product.category === activeCategory;
    }

    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.shortDescription && product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return `
    <section id="catalog" class="py-16 md:py-24 bg-white border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
            HANDMADE ELEGANCE
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight">
            Our Candle Collection
          </h2>
          <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
          <p class="text-base text-[#475569] font-sans font-light">
            Handcrafted pieces made to brighten your space.
          </p>
        </div>

        <!-- CANDLE CATEGORY FILTER TABS -->
        <div class="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          ${CANDLE_CATEGORIES.map(cat => `
            <button type="button" 
                    onclick="cartStore.setCategory('${cat}')" 
                    class="px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all border ${activeCategory === cat || (cat === 'All' && (activeCategory === 'All' || activeCategory === 'Candles')) ? 'bg-[#1E293B] text-white border-[#1E293B] shadow-sm' : 'bg-[#F0F4F8] text-[#475569] border-[#E2E9F0] hover:bg-white hover:border-[#CBD5E1]'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- SEARCH STATUS BADGE -->
        ${searchQuery ? `
          <div class="mb-8 flex items-center justify-between bg-[#F0F4F8] px-4 py-3 rounded-lg border border-[#E2E9F0]">
            <p class="text-sm text-[#475569]">
              Showing results for "<span class="font-semibold text-[#0F172A]">${searchQuery}</span>" (${filteredProducts.length} items found)
            </p>
            <button type="button" onclick="cartStore.setSearchQuery('')" class="text-xs text-[#0F172A] font-semibold hover:underline">
              Clear Search
            </button>
          </div>
        ` : ''}

        <!-- PRODUCT GRID -->
        ${filteredProducts.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            ${filteredProducts.map(p => ProductCard(p, state)).join('')}
          </div>
        ` : `
          <div class="text-center py-16 bg-[#F0F4F8] rounded-2xl border border-dashed border-[#CBD5E1]">
            <svg class="w-12 h-12 mx-auto text-[#94A3B8] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
            <h3 class="font-serif text-xl text-[#0F172A]">No products found</h3>
            <p class="text-sm text-[#64748B] mt-1">Try selecting another category or clearing your search filter.</p>
            <button type="button" 
                    onclick="cartStore.setCategory('All'); cartStore.setSearchQuery('');" 
                    class="mt-4 px-6 py-2.5 bg-[#1E293B] text-white text-xs uppercase tracking-wider rounded font-medium">
              View All Products
            </button>
          </div>
        `}

      </div>
    </section>
  `;
}
