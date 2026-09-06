/**
 * Slide-Over Shopping Cart Drawer Component
 * Clean Rupee symbol rendering (&#8377;)
 */

import { cartStore } from '../context/CartState.js';

export function CartDrawer(state) {
  const { cart, itemCount, subtotal, shipping, total, freeShippingRemaining, isCartOpen } = state;

  if (!isCartOpen) return '';

  return `
    <div class="fixed inset-0 z-50 overflow-hidden">
      
      <!-- BACKDROP -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
           onclick="cartStore.closeCart()"></div>

      <div class="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        
        <!-- DRAWER PANEL -->
        <div class="w-full sm:w-[420px] md:w-[448px] max-w-full bg-white shadow-2xl flex flex-col justify-between border-l border-[#E2E9F0]">
          
          <!-- DRAWER HEADER -->
          <div class="px-4 sm:px-6 py-4 sm:py-6 border-b border-[#E2E9F0] flex items-center justify-between bg-[#F0F4F8] flex-shrink-0">
            <div class="flex items-center space-x-2">
              <h2 class="font-serif text-xl sm:text-2xl text-[#0F172A] font-medium">Shopping Bag</h2>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-[#1E293B] text-white font-semibold">
                ${itemCount}
              </span>
            </div>
            <button type="button" 
                    onclick="cartStore.closeCart()" 
                    class="p-2 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-white transition-colors"
                    title="Close Cart">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- CART ITEMS LIST -->
          <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-4 divide-y divide-[#E2E9F0]">
            ${cart.length > 0 ? cart.map(item => `
              <div class="py-4 flex space-x-3 sm:space-x-4 items-start">
                <!-- PRODUCT IMAGE -->
                <img src="${(typeof item.product.images?.[0] === 'object' ? item.product.images[0]?.url : item.product.images?.[0]) || ''}" 
                     alt="${item.product.name}" 
                     class="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover bg-[#F0F4F8] border border-[#E2E9F0] flex-shrink-0">
                
                <!-- PRODUCT DETAILS & CONTROLS -->
                <div class="flex-1 min-w-0 flex flex-col justify-between">
                  <!-- TOP: NAME & UNIT PRICE -->
                  <div>
                    <h3 class="font-serif text-sm sm:text-base font-medium text-[#0F172A] leading-snug break-words">
                      ${item.product.name}
                    </h3>
                    <div class="flex items-center flex-wrap gap-1.5 mt-1">
                      <p class="text-xs text-[#64748B] font-sans">&#8377;${item.product.price} each</p>
                      ${(item.product.freeDelivery || item.product.isFreeDelivery || item.product.id === 'merc-candle-04') ? `
                        <span class="text-[9px] sm:text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          Free Delivery
                        </span>
                      ` : ''}
                    </div>
                  </div>

                  <!-- MIDDLE: QUANTITY CONTROLS & LINE-ITEM TOTAL -->
                  <div class="flex items-center justify-between mt-3 gap-2">
                    <!-- QUANTITY CONTROLS -->
                    <div class="flex items-center border border-[#CBD5E1] rounded bg-white overflow-hidden text-xs flex-shrink-0">
                      <button type="button" 
                              onclick="cartStore.updateQuantity('${item.product.id}', ${item.quantity - 1})" 
                              class="w-7 h-7 flex items-center justify-center text-[#0F172A] hover:bg-[#F0F4F8] font-bold transition-colors"
                              title="Decrease quantity"
                              aria-label="Decrease quantity">-</button>
                      <span class="min-w-[24px] text-center font-semibold text-[#0F172A] px-1">${item.quantity}</span>
                      <button type="button" 
                              onclick="cartStore.updateQuantity('${item.product.id}', ${item.quantity + 1})" 
                              class="w-7 h-7 flex items-center justify-center text-[#0F172A] hover:bg-[#F0F4F8] font-bold transition-colors"
                              title="Increase quantity"
                              aria-label="Increase quantity">+</button>
                    </div>

                    <!-- LINE-ITEM TOTAL -->
                    <div class="text-right font-serif text-base sm:text-lg font-semibold text-[#0F172A] flex-shrink-0">
                      &#8377;${item.product.price * item.quantity}
                    </div>
                  </div>

                  <!-- BOTTOM: REMOVE BUTTON -->
                  <div class="flex justify-end mt-1.5">
                    <button type="button" 
                            onclick="cartStore.removeFromCart('${item.product.id}')" 
                            class="text-[11px] sm:text-xs text-red-500 hover:text-red-700 font-medium transition-colors hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            `).join('') : `
              <div class="text-center py-12 sm:py-16 px-4 text-[#64748B] space-y-3">
                <svg class="w-12 h-12 mx-auto stroke-[1.2] text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
                <p class="font-serif text-lg text-[#0F172A]">Your bag is currently empty</p>
                <p class="text-xs">Explore our handcrafted candles to add pieces to your space.</p>
                <button type="button" onclick="cartStore.closeCart()" class="mt-2 px-6 py-2.5 bg-[#1E293B] text-white text-xs uppercase tracking-wider font-semibold rounded">
                  BROWSE COLLECTION
                </button>
              </div>
            `}
          </div>

          <!-- DRAWER FOOTER SUMMARY -->
          ${cart.length > 0 ? `
            <div class="p-4 sm:p-6 border-t border-[#E2E9F0] bg-[#F0F4F8] space-y-3 flex-shrink-0">
              <div class="flex justify-between text-xs text-[#475569]">
                <span>Subtotal</span>
                <span class="font-medium text-[#0F172A]">&#8377;${subtotal}</span>
              </div>
              <div class="flex justify-between text-xs text-[#475569]">
                <span>Delivery</span>
                <span class="font-medium text-emerald-700">FREE</span>
              </div>
              <div class="pt-2 border-t border-[#CBD5E1] flex justify-between font-serif text-xl font-semibold text-[#0F172A]">
                <span>Total</span>
                <span>&#8377;${subtotal}</span>
              </div>

              <button type="button" 
                      onclick="cartStore.openCheckout()" 
                      class="w-full py-3.5 sm:py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#334155] transition-colors shadow-md mt-2">
                PROCEED TO CHECKOUT
              </button>
            </div>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}
