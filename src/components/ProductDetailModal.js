/**
 * Full Product Detail View Component
 * Clean Rupee symbol rendering & specifications (Burn Time line removed as requested)
 */

import { PRODUCTS } from '../data/products.js';
import { cartStore } from '../context/CartState.js';
import { SITE_CONFIG } from '../config/siteConfig.js';

let activeImageIndex = 0;
let modalQty = 1;

window.setActiveModalImage = (index) => {
  activeImageIndex = index;
  const mainImg = document.getElementById('modal-main-image');
  if (mainImg && window.currentModalProduct) {
    mainImg.src = window.currentModalProduct.images[index] || window.currentModalProduct.images[0];
  }
};

window.updateModalQty = (delta) => {
  modalQty = Math.max(1, modalQty + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = modalQty;
};

export function ProductDetailModal(state) {
  const product = state.selectedProduct;
  if (!product) return '';
  window.currentModalProduct = product;

  const activeImage = product.images[activeImageIndex] || product.images[0];
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.productInquiry(product.name))}`;

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      <!-- PRODUCT DETAIL CONTAINER -->
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E2E9F0] relative">
        
        <!-- CLOSE / BACK BUTTON -->
        <button type="button" 
                onclick="cartStore.closeProductDetail()" 
                class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#F0F4F8] hover:bg-[#E2E9F0] text-[#0F172A] flex items-center justify-center transition-colors shadow-xs"
                title="Close Product View">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
          
          <!-- LEFT: PRODUCT IMAGE GALLERY -->
          <div class="md:col-span-6 space-y-4">
            <div class="w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-[#F0F4F8] border border-[#E2E9F0] relative">
              <img id="modal-main-image" 
                   src="${activeImage}" 
                   alt="${product.name}" 
                   class="w-full h-full object-cover object-center transition-all duration-300">
              
              ${product.badge ? `
                <span class="absolute top-4 left-4 bg-[#0F172A] text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded font-semibold">
                  ${product.badge}
                </span>
              ` : ''}
            </div>

            <!-- THUMBNAILS -->
            ${product.images.length > 1 ? `
              <div class="flex items-center space-x-3 overflow-x-auto pb-2">
                ${product.images.map((img, idx) => `
                  <button type="button" 
                          onclick="window.setActiveModalImage(${idx})" 
                          class="w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${idx === activeImageIndex ? 'border-[#0F172A] ring-2 ring-[#0F172A]/20' : 'border-[#E2E9F0] opacity-70 hover:opacity-100'}">
                    <img src="${img}" alt="" class="w-full h-full object-cover">
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- RIGHT: PRODUCT DETAILS & ACTIONS -->
          <div class="md:col-span-6 flex flex-col justify-between space-y-6">
            
            <div>
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
                  ${product.category}
                </span>
                <span class="text-xs px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                  ${product.availability}
                </span>
              </div>

              <h2 class="font-serif text-3xl sm:text-4xl text-[#0F172A] font-medium mt-2 leading-tight">
                ${product.name}
              </h2>

              ${product.subtitle ? `
                <p class="text-xs text-[#64748B] italic mt-1 font-serif">
                  ${product.subtitle}
                </p>
              ` : ''}

              <!-- PRICING (Clean Rupee Symbol) -->
              <div class="mt-4 flex items-baseline space-x-3">
                <span class="font-serif text-3xl font-semibold text-[#0F172A]">&#8377;${product.price}</span>
                ${product.originalPrice ? `<span class="text-sm text-[#94A3B8] line-through font-sans">&#8377;${product.originalPrice}</span>` : ''}
                <span class="text-xs text-slate-500">(Inclusive of all taxes)</span>
              </div>

              <!-- FREE DELIVERY HIGHLIGHT BANNER -->
              ${(product.freeDelivery || product.isFreeDelivery || product.id === 'merc-candle-04') ? `
                <div class="mt-3 flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                  <svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v5.05A2.5 2.5 0 0115.95 15H17a1 1 0 001-1v-4.586a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0014.586 6H14z"/>
                  </svg>
                  <span>FREE DELIVERY • Delivery charges are 100% Free for this product</span>
                </div>
              ` : ''}

              <!-- FULL DETAILED PRODUCT DESCRIPTION -->
              <div class="mt-4 pt-4 border-t border-[#E2E9F0]">
                <h3 class="text-xs uppercase tracking-wider font-semibold text-[#0F172A] mb-1.5">Product Story & Craftsmanship</h3>
                <p class="text-sm text-[#475569] font-light leading-relaxed">
                  ${product.fullDescription}
                </p>
              </div>

              <!-- SPECIFICATIONS LIST -->
              ${product.specifications ? `
                <div class="mt-6 bg-[#F0F4F8] p-4 rounded-xl space-y-2 text-xs text-[#334155] border border-[#E2E9F0]">
                  ${(product.category === 'Resin Art' || product.mainCategory === 'Resin Art') ? `
                    ${product.specifications.material ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Material:</span> <span>${product.specifications.material}</span></div>` : ''}
                    ${product.specifications.finish ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Finish:</span> <span>${product.specifications.finish}</span></div>` : ''}
                    ${product.specifications.dimensions ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Dimensions:</span> <span>${product.specifications.dimensions}</span></div>` : ''}
                    ${product.specifications.weight ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Weight:</span> <span>${product.specifications.weight}</span></div>` : ''}
                    ${product.specifications.color ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Color / Tone:</span> <span>${product.specifications.color}</span></div>` : ''}
                    ${product.specifications.packageContents ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Package:</span> <span class="font-medium text-[#0F172A]">${product.specifications.packageContents}</span></div>` : ''}
                    ${product.specifications.delivery ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Delivery Charges:</span> <span class="text-emerald-700 font-bold">${product.specifications.delivery}</span></div>` : ''}
                  ` : `
                    ${product.specifications.packageContents ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Package Contents:</span> <span class="font-medium text-[#0F172A]">${product.specifications.packageContents}</span></div>` : ''}
                    ${product.specifications.delivery ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Delivery Charges:</span> <span class="text-emerald-700 font-bold">${product.specifications.delivery}</span></div>` : ''}
                    ${product.specifications.waxType ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Wax Blend:</span> <span>${product.specifications.waxType}</span></div>` : ''}
                    ${product.specifications.weight ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Weight:</span> <span>${product.specifications.weight}</span></div>` : ''}
                    ${product.specifications.fragrance ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Fragrance Profile:</span> <span>${product.specifications.fragrance}</span></div>` : ''}
                    ${product.specifications.container ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Vessel:</span> <span>${product.specifications.container}</span></div>` : ''}
                    ${product.specifications.dimensions ? `<div class="flex justify-between"><span class="font-semibold text-[#0F172A]">Dimensions:</span> <span>${product.specifications.dimensions}</span></div>` : ''}
                  `}
                </div>
              ` : ''}
            </div>

            <!-- QUANTITY & CTA ACTION BUTTONS -->
            <div class="space-y-4 pt-4 border-t border-[#E2E9F0]">
              
              <!-- QUANTITY SELECTOR -->
              <div class="flex items-center space-x-4">
                <span class="text-xs uppercase tracking-wider text-[#64748B] font-semibold">Quantity:</span>
                <div class="flex items-center border border-[#CBD5E1] rounded-lg bg-white overflow-hidden shadow-xs">
                  <button type="button" onclick="window.updateModalQty(-1)" class="px-3.5 py-1.5 text-[#0F172A] hover:bg-[#F0F4F8] font-bold text-sm transition-colors">-</button>
                  <span id="modal-qty-val" class="px-4 py-1.5 text-sm font-semibold text-[#0F172A]">1</span>
                  <button type="button" onclick="window.updateModalQty(1)" class="px-3.5 py-1.5 text-[#0F172A] hover:bg-[#F0F4F8] font-bold text-sm transition-colors">+</button>
                </div>
              </div>

              <!-- BUTTONS: ADD TO CART & ORDER NOW -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button type="button" 
                        onclick="cartStore.addToCart(window.currentModalProduct, modalQty, false)" 
                        class="py-3.5 bg-[#1E293B] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#334155] transition-colors shadow-sm">
                  ADD TO CART
                </button>

                <button type="button" 
                        onclick="cartStore.orderNow(window.currentModalProduct, modalQty)" 
                        class="py-3.5 bg-[#0F172A] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-black transition-colors shadow-sm">
                  ORDER NOW
                </button>
              </div>

              <!-- WHATSAPP CUSTOMER INQUIRY -->
              <a href="${whatsappUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-full py-3 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-lg hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
                </svg>
                <span>Ask a Question on WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  `;
}
