/**
 * Customer Account & Order Tracking Page Component
 * Accessed exclusively via the Header User / Person icon at #/account or /account.
 * Form: Email + Order Number (e.g. MC1005).
 * Verification is handled 100% server-side via /api/track.
 */

import { cartStore } from '../context/CartState.js';
import { SITE_CONFIG } from '../config/siteConfig.js';

let trackedOrder = null;
let isTrackingLoading = false;
let trackingError = null;

window.handleOrderTrackingSubmit = async (e) => {
  e.preventDefault();
  if (isTrackingLoading) return;

  const form = e.target;
  const email = form.email.value.trim();
  const orderNumber = form.orderNumber.value.trim();

  if (!email || !orderNumber) {
    trackingError = 'Please provide both your Email Address and Order Number.';
    cartStore.notify();
    return;
  }

  isTrackingLoading = true;
  trackingError = null;
  cartStore.notify();

  try {
    const res = await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, orderNumber })
    });

    const data = await res.json();

    if (res.ok && data.success && data.order) {
      trackedOrder = data.order;
      trackingError = null;
    } else {
      trackedOrder = null;
      trackingError = data.message || "We couldn't find an order matching those details. Please check your email address and order number.";
    }
  } catch (err) {
    console.error('[Track Order Error]', err);
    trackedOrder = null;
    trackingError = "Unable to connect to order verification service. Please try again in a few moments.";
  } finally {
    isTrackingLoading = false;
    cartStore.notify();
  }
};

window.resetTrackingView = () => {
  trackedOrder = null;
  trackingError = null;
  cartStore.notify();
};

const TIMELINE_STEPS = [
  { key: 'CONFIRMED', label: 'Order Confirmed', description: 'Order received & registered' },
  { key: 'PROCESSING', label: 'Processing', description: 'Handcrafted items being prepared' },
  { key: 'PACKED', label: 'Packed', description: 'Securely packaged for transit' },
  { key: 'SHIPPED', label: 'Shipped', description: 'Handed over to courier partner' },
  { key: 'DELIVERED', label: 'Delivered', description: 'Successfully delivered' }
];

function getStepIndex(status) {
  switch ((status || '').toUpperCase()) {
    case 'NEW':
    case 'CONFIRMED':
      return 0; // Order Confirmed
    case 'PROCESSING':
      return 1;
    case 'PACKED':
      return 2;
    case 'SHIPPED':
    case 'OUT_FOR_DELIVERY':
    case 'OUT FOR DELIVERY':
      return 3;
    case 'DELIVERED':
      return 4;
    case 'CANCELLED':
      return -1;
    default:
      return 0;
  }
}

function getStatusLabel(status) {
  switch ((status || '').toUpperCase()) {
    case 'NEW':
      return 'Registered (Awaiting fulfillment)';
    case 'CONFIRMED':
      return 'Order Confirmed';
    case 'PROCESSING':
      return 'Processing';
    case 'PACKED':
      return 'Packed';
    case 'SHIPPED':
      return 'Shipped';
    case 'OUT_FOR_DELIVERY':
      return 'Out for Delivery';
    case 'DELIVERED':
      return 'Delivered';
    case 'CANCELLED':
      return 'Cancelled';
    default:
      return status || 'Registered';
  }
}

export function AccountTrackingPage(state) {
  return `
    <div class="min-h-screen bg-[#F0F4F8] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div class="max-w-3xl mx-auto">

        <!-- BREADCRUMB / BACK TO SHOP -->
        <div class="mb-8 flex items-center justify-between">
          <a href="#hero" 
             onclick="cartStore.isAccountPage = false; window.location.hash = '';"
             class="inline-flex items-center text-xs uppercase tracking-widest text-[#64748B] hover:text-[#0F172A] font-semibold transition-colors">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            BACK TO STORE
          </a>

          ${trackedOrder ? `
            <button type="button" 
                    onclick="resetTrackingView()" 
                    class="text-xs uppercase tracking-widest text-[#475569] hover:text-[#0F172A] font-semibold underline decoration-dotted">
              Track Another Order
            </button>
          ` : ''}
        </div>

        ${trackedOrder ? renderOrderResult(trackedOrder) : renderTrackingForm()}

      </div>
    </div>
  `;
}

function renderTrackingForm() {
  return `
    <div class="bg-white rounded-2xl border border-[#E2E9F0] shadow-sm p-8 sm:p-12 space-y-8">
      
      <!-- HEADER -->
      <div class="text-center space-y-2 max-w-md mx-auto">
        <span class="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#64748B] block">
          MY ACCOUNT
        </span>
        <h1 class="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
          Track Your Order
        </h1>
        <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
        <p class="text-xs sm:text-sm text-[#475569] font-sans font-light leading-relaxed">
          Enter your email address and order reference number to view real-time shipping updates.
        </p>
      </div>

      <!-- ERROR FEEDBACK BANNER -->
      ${trackingError ? `
        <div class="bg-rose-50 border border-rose-200 text-rose-800 text-xs px-4 py-3.5 rounded-lg flex items-start space-x-3">
          <svg class="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-medium">${trackingError}</span>
        </div>
      ` : ''}

      <!-- TRACKING FORM -->
      <form onsubmit="handleOrderTrackingSubmit(event)" class="space-y-5 max-w-md mx-auto">
        
        <!-- Email Input -->
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5">
            Email Address *
          </label>
          <input type="email" 
                 name="email" 
                 required 
                 placeholder="your@email.com" 
                 class="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F172A] text-[#0F172A] transition-all">
        </div>

        <!-- Order Number Input -->
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5">
            Order Number *
          </label>
          <input type="text" 
                 name="orderNumber" 
                 required 
                 placeholder="e.g. MC1005" 
                 class="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F172A] text-[#0F172A] font-mono transition-all">
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button type="submit" 
                  ${isTrackingLoading ? 'disabled' : ''}
                  class="w-full py-4 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-none shadow-sm transition-all flex items-center justify-center space-x-2">
            ${isTrackingLoading ? `
              <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>VERIFYING DETAILS...</span>
            ` : `
              <span>TRACK MY ORDER</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            `}
          </button>
        </div>

      </form>

      <!-- FORGOT ORDER NUMBER ASSISTANCE -->
      <div class="text-center pt-2">
        <p class="text-xs text-[#64748B]">
          Forgot your order reference number?
          <a href="https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.orderLookupInquiry)}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="text-[#0F172A] font-semibold underline hover:text-emerald-700 ml-1 inline-flex items-center space-x-1">
            <span>Contact us on WhatsApp</span>
            <svg class="w-3.5 h-3.5 inline-block text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
            </svg>
          </a>
        </p>
      </div>

      <!-- PRIVACY & SECURITY FOOTER NOTE -->
      <div class="text-center pt-6 border-t border-[#E2E9F0] text-[11px] text-[#64748B] font-light">
        🔒 Verified encrypted connection. Your personal details and order information are strictly protected.
      </div>

    </div>
  `;
}

function renderOrderResult(order) {
  const currentStepIdx = getStepIndex(order.status);
  const isCancelled = order.status === 'CANCELLED';
  const shipping = order.shipping || {};
  
  const hasCourier = Boolean(shipping.courier && shipping.courier.trim());
  const hasAwb = Boolean(shipping.trackingNumber && shipping.trackingNumber.trim());
  const hasEstDelivery = Boolean(shipping.estimatedDelivery && shipping.estimatedDelivery.trim());
  const hasShippingInfo = hasCourier || hasAwb || hasEstDelivery;
  const hasLiveTracking = Boolean(shipping.trackingUrl && shipping.trackingUrl.trim());

  return `
    <div class="space-y-6 animate-fadeIn">

      <!-- TOP ORDER SUMMARY CARD -->
      <div class="bg-white rounded-2xl border border-[#E2E9F0] shadow-sm p-6 sm:p-8">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E2E9F0] gap-4">
          <div>
            <span class="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#64748B] block mb-1">
              SHIPMENT DETAILS
            </span>
            <h2 class="font-serif text-2xl sm:text-3xl font-medium text-[#0F172A] tracking-tight">
              Order ${order.orderId}
            </h2>
            <p class="text-xs text-[#64748B] mt-1">
              Placed on ${new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div>
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${getStatusBadgeClass(order.status)}">
              ${getStatusLabel(order.status)}
            </span>
          </div>
        </div>

        <!-- VISUAL STATUS TIMELINE -->
        <div class="py-8">
          ${isCancelled ? `
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center text-rose-800 text-xs">
              <span class="font-bold block text-sm mb-1">Order Cancelled</span>
              This order has been cancelled. For any inquiries, please contact our support team.
            </div>
          ` : `
            <!-- DESKTOP TIMELINE -->
            <div class="hidden sm:grid grid-cols-5 gap-2 text-center relative">
              
              <!-- Background connecting bar -->
              <div class="absolute top-4 left-8 right-8 h-0.5 bg-[#E2E9F0] -z-0"></div>
              
              <!-- Progress fill bar -->
              <div class="absolute top-4 left-8 h-0.5 bg-[#0F172A] transition-all duration-500 -z-0" 
                   style="width: ${Math.min(100, Math.max(0, (currentStepIdx / (TIMELINE_STEPS.length - 1)) * 100))}%;"></div>

              ${TIMELINE_STEPS.map((step, idx) => {
                const isCompleted = idx <= currentStepIdx;
                const isCurrent = idx === currentStepIdx;

                return `
                  <div class="relative flex flex-col items-center group z-10">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      isCompleted 
                        ? 'bg-[#0F172A] text-white shadow-xs' 
                        : 'bg-white border-2 border-[#CBD5E1] text-[#94A3B8]'
                    } ${isCurrent ? 'ring-4 ring-slate-200' : ''}">
                      ${isCompleted ? '✓' : (idx + 1)}
                    </div>
                    <span class="text-[11px] font-semibold mt-3 ${isCurrent ? 'text-[#0F172A]' : isCompleted ? 'text-[#334155]' : 'text-[#94A3B8]'} leading-tight">
                      ${step.label}
                    </span>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- MOBILE TIMELINE (Vertical List) -->
            <div class="sm:hidden space-y-4 pl-2">
              ${TIMELINE_STEPS.map((step, idx) => {
                const isCompleted = idx <= currentStepIdx;
                const isCurrent = idx === currentStepIdx;

                return `
                  <div class="flex items-start space-x-3.5">
                    <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                      isCompleted 
                        ? 'bg-[#0F172A] text-white' 
                        : 'bg-white border border-[#CBD5E1] text-[#94A3B8]'
                    } ${isCurrent ? 'ring-2 ring-slate-300' : ''}">
                      ${isCompleted ? '✓' : (idx + 1)}
                    </div>
                    <div>
                      <span class="text-xs font-semibold ${isCurrent ? 'text-[#0F172A]' : isCompleted ? 'text-[#334155]' : 'text-[#94A3B8]'} block">
                        ${step.label}
                      </span>
                      <span class="text-[10px] text-[#64748B] block font-light">
                        ${step.description}
                      </span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>

        <!-- COURIER & DISPATCH INFORMATION -->
        ${hasShippingInfo ? `
          <div class="pt-6 border-t border-[#E2E9F0] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div class="space-y-2 text-xs">
              ${hasCourier ? `
                <div class="flex items-baseline space-x-2">
                  <span class="text-[#64748B] font-medium w-32">Courier:</span>
                  <span class="font-semibold text-[#0F172A]">${shipping.courier}</span>
                </div>
              ` : ''}

              ${hasAwb ? `
                <div class="flex items-baseline space-x-2">
                  <span class="text-[#64748B] font-medium w-32">Tracking / AWB:</span>
                  <span class="font-mono font-semibold text-[#0F172A]">${shipping.trackingNumber}</span>
                </div>
              ` : ''}

              ${hasEstDelivery ? `
                <div class="flex items-baseline space-x-2">
                  <span class="text-[#64748B] font-medium w-32">Estimated Delivery:</span>
                  <span class="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    ${shipping.estimatedDelivery}
                  </span>
                </div>
              ` : ''}
            </div>

            <!-- LIVE TRACKING BUTTON (ONLY if trackingUrl exists) -->
            ${hasLiveTracking ? `
              <div class="flex md:justify-end">
                <a href="${shipping.trackingUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-flex items-center justify-center px-6 py-3 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors shadow-sm group">
                  <span>TRACK LIVE SHIPMENT</span>
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            ` : ''}

          </div>
        ` : `
          <div class="pt-6 border-t border-[#E2E9F0]">
            <div class="text-xs text-[#64748B] bg-[#F8FAFC] border border-[#E2E9F0] p-4 rounded-xl font-light">
              Tracking information will become available once your order has been dispatched.
            </div>
          </div>
        `}

      </div>

      <!-- ORDER ITEMS & FINANCIAL SUMMARY CARD -->
      <div class="bg-white rounded-2xl border border-[#E2E9F0] shadow-sm p-6 sm:p-8 space-y-6">
        
        <h3 class="font-serif text-lg font-semibold text-[#0F172A] pb-3 border-b border-[#E2E9F0]">
          Ordered Items
        </h3>

        <!-- ITEMS LIST -->
        <div class="divide-y divide-[#E2E9F0]">
          ${(order.items || []).map(item => `
            <div class="py-4 flex items-center justify-between gap-4">
              <div class="flex items-center space-x-4">
                ${item.imageAtPurchase ? `
                  <img src="${item.imageAtPurchase}" class="w-16 h-16 rounded-lg object-cover bg-[#F0F4F8] border border-[#E2E9F0] flex-shrink-0">
                ` : `
                  <div class="w-16 h-16 rounded-lg bg-[#F0F4F8] flex items-center justify-center text-xl flex-shrink-0">📦</div>
                `}
                <div>
                  <h4 class="text-xs sm:text-sm font-medium text-[#0F172A] leading-snug">
                    ${item.productName}
                  </h4>
                  <p class="text-[11px] text-[#64748B] mt-0.5">
                    Qty: ${item.quantity} × &#8377;${item.priceAtPurchase}
                  </p>
                </div>
              </div>

              <div class="font-serif text-sm sm:text-base font-semibold text-[#0F172A] flex-shrink-0">
                &#8377;${item.subtotal || (item.priceAtPurchase * item.quantity)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- TOTALS BREAKDOWN -->
        <div class="pt-4 border-t border-[#CBD5E1] space-y-2 text-xs">
          <div class="flex justify-between text-[#475569]">
            <span>Subtotal</span>
            <span>&#8377;${order.subtotal}</span>
          </div>
          <div class="flex justify-between text-[#475569]">
            <span>Shipping</span>
            <span>${order.shippingFee === 0 ? '<span class="text-emerald-700 font-semibold">FREE</span>' : `&#8377;${order.shippingFee}`}</span>
          </div>
          <div class="flex justify-between font-serif text-lg font-bold text-[#0F172A] pt-2 border-t border-[#CBD5E1]">
            <span>Total Amount</span>
            <span>&#8377;${order.totalAmount}</span>
          </div>
        </div>

      </div>

    </div>
  `;
}

function getStatusBadgeClass(status) {
  switch ((status || '').toUpperCase()) {
    case 'DELIVERED':
      return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
    case 'SHIPPED':
    case 'OUT_FOR_DELIVERY':
      return 'bg-blue-100 text-blue-800 border border-blue-300';
    case 'PACKED':
    case 'PROCESSING':
      return 'bg-amber-100 text-amber-800 border border-amber-300';
    case 'CANCELLED':
      return 'bg-rose-100 text-rose-800 border border-rose-300';
    default:
      return 'bg-slate-100 text-slate-800 border border-slate-300';
  }
}
