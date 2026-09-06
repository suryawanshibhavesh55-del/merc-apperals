/**
 * Portfolio Image Viewer / Lightbox Component
 * Pure image presentation with smooth navigation (Next, Prev, Close, Keyboard shortcuts)
 * Strictly NO e-commerce actions.
 */

import { cartStore } from '../context/CartState.js';

export function PortfolioLightbox(state) {
  const { activeLightbox } = state;
  if (!activeLightbox) return '';

  const { image, categoryTitle, imageIndex, total } = activeLightbox;

  return `
    <div class="fixed inset-0 z-50 overflow-hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
         onclick="if (event.target === this) cartStore.closeLightbox()">
      
      <!-- TOP BAR: CATEGORY & CLOSE -->
      <div class="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 text-white pointer-events-none">
        <div class="pointer-events-auto flex items-center space-x-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
          <span class="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-slate-300">
            ${categoryTitle}
          </span>
          <span class="text-[10px] sm:text-xs text-white/50">|</span>
          <span class="text-[10px] sm:text-xs font-mono text-white/80">
            ${imageIndex + 1} / ${total}
          </span>
        </div>

        <button type="button" 
                onclick="cartStore.closeLightbox()" 
                class="pointer-events-auto w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all shadow-md focus:outline-none"
                title="Close Viewer (Esc)">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- NAVIGATION: PREVIOUS BUTTON -->
      <button type="button" 
              onclick="cartStore.prevLightboxImage()" 
              class="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-white text-white hover:text-[#0F172A] border border-white/20 flex items-center justify-center transition-all shadow-lg focus:outline-none group"
              title="Previous Photo (Left Arrow)">
        <svg class="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <!-- NAVIGATION: NEXT BUTTON -->
      <button type="button" 
              onclick="cartStore.nextLightboxImage()" 
              class="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-white text-white hover:text-[#0F172A] border border-white/20 flex items-center justify-center transition-all shadow-lg focus:outline-none group"
              title="Next Photo (Right Arrow)">
        <svg class="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- MAIN IMAGE DISPLAY CONTAINER -->
      <div class="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center p-2">
        <img src="${image.src}" 
             alt="${image.alt}" 
             class="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300 select-none">
        
        <!-- CAPTION & CLIENT LABEL -->
        <div class="mt-3 text-center px-4 max-w-2xl">
          <h4 class="font-serif text-lg sm:text-xl text-white font-medium">
            ${image.title}
          </h4>
          ${image.client ? `
            <p class="text-xs text-slate-400 font-sans tracking-wide mt-0.5">
              Client / Project: <span class="text-slate-200">${image.client}</span>
            </p>
          ` : ''}
        </div>
      </div>

    </div>
  `;
}
