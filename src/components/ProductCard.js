/**
 * Minimal Luxury Product Card Component
 * Clean Rupee symbol rendering (&#8377;) & full card clickability
 */

import { cartStore } from '../context/CartState.js';

export function ProductCard(product, state) {
  const isInWishlist = cartStore.isInWishlist(product.id);
  const primaryImg = (typeof product.images?.[0] === 'object' ? product.images[0]?.url : product.images?.[0]) || '';

  return `
    <div onclick="window.openProductById('${product.id}')"
         class="group bg-white rounded-xl border border-[#E2E9F0] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer">
      
      <!-- IMAGE CONTAINER WITH DESKTOP HOVER ZOOM -->
      <div class="relative w-full h-64 sm:h-72 overflow-hidden bg-[#F0F4F8]">
        
        <img src="${primaryImg}" 
             alt="${product.name}" 
             loading="lazy"
             class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out">

        <!-- BADGE -->
        ${product.badge ? `
          <span class="absolute top-3 left-3 bg-[#0F172A] text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold">
            ${product.badge}
          </span>
        ` : ''}

        <!-- WISHLIST BUTTON -->
        <button type="button" 
                onclick="event.stopPropagation(); window.toggleWishlistById('${product.id}')" 
                class="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-[#0F172A] shadow-sm transition-colors"
                title="Save to Wishlist">
          <svg class="w-4 h-4 stroke-[1.5] ${isInWishlist ? 'fill-red-500 stroke-red-500' : 'fill-none'}" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
          </svg>
        </button>

        <!-- QUICK VIEW OVERLAY BUTTON -->
        <div class="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button type="button" 
                  onclick="event.stopPropagation(); window.openProductById('${product.id}')"
                  class="w-full py-2.5 bg-white/95 backdrop-blur-md text-[#0F172A] text-xs uppercase tracking-wider font-semibold rounded shadow-md hover:bg-[#0F172A] hover:text-white transition-all">
            VIEW DETAILS
          </button>
        </div>

      </div>

      <!-- CARD DETAILS -->
      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B] block mb-1">
            ${product.category}
          </span>
          
          <h3 class="font-serif text-xl font-medium text-[#0F172A] group-hover:text-[#334155] transition-colors leading-snug line-clamp-1">
            ${product.name}
          </h3>

          <p class="text-xs text-[#64748B] font-sans font-light mt-1.5 line-clamp-2 leading-relaxed">
            ${product.shortDescription}
          </p>
        </div>

        <!-- PRICE & ADD TO CART (Clean Rupee Symbol) -->
        <div class="pt-3 border-t border-[#E2E9F0] flex items-center justify-between">
          <div class="flex flex-col">
            <div class="flex items-baseline space-x-1.5">
              <span class="font-serif text-lg font-semibold text-[#0F172A]">&#8377;${product.price}</span>
              ${product.originalPrice ? `<span class="text-xs text-[#94A3B8] line-through font-sans">&#8377;${product.originalPrice}</span>` : ''}
            </div>
            ${(product.freeDelivery || product.isFreeDelivery || product.id === 'merc-candle-04') ? `
              <span class="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1 mt-0.5">
                <svg class="w-3 h-3 text-emerald-600 inline flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v5.05A2.5 2.5 0 0115.95 15H17a1 1 0 001-1v-4.586a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0014.586 6H14z"/>
                </svg>
                <span>Free Delivery</span>
              </span>
            ` : ''}
          </div>

          <button type="button" 
                  onclick="event.stopPropagation(); window.addToCartById('${product.id}', 1, false)" 
                  class="px-4 py-2 bg-[#1E293B] text-white text-xs uppercase tracking-wider font-medium rounded hover:bg-[#334155] transition-colors flex items-center gap-1.5">
            <span>ADD</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </button>
        </div>

      </div>

    </div>
  `;
}
