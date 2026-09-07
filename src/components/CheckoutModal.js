/**
 * Checkout Flow Modal Component — Integrated with Razorpay & MongoDB Atlas Serverless API
 * Supports Razorpay Standard Checkout (Online Payment).
 * Enforces server-side recalculation and ₹0 free delivery.
 */

import { cartStore } from '../context/CartState.js';
import { paymentService } from '../services/paymentService.js';

let currentStep = 'DETAILS'; // 'DETAILS' | 'CONFIRMATION'
const selectedPaymentMethod = 'RAZORPAY'; // Razorpay is the exclusive payment method
let lastOrderResult = null;
let isProcessing = false;
let checkoutNotice = '';

window.setCheckoutPaymentMethod = () => {
  // Maintained for backward compatibility; Razorpay is the only payment method
  cartStore.notify();
};

window.handleCheckoutSubmit = async (e) => {
  e.preventDefault();
  if (isProcessing) return;

  const form = e.target;
  const customer = {
    name: form.fullName.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    address: form.address.value.trim(),
    city: form.city.value.trim(),
    pincode: form.pincode.value.trim()
  };

  const state = cartStore.getState();
  const subtotal = state.subtotal;
  const paymentMethod = 'RAZORPAY';
  checkoutNotice = '';

  const orderPayload = {
    customer,
    items: state.cart,
    subtotal: subtotal,
    shipping: 0,
    totalAmount: subtotal,
    paymentMethod: 'RAZORPAY'
  };

  isProcessing = true;
  const btn = document.getElementById('checkout-submit-btn');
  if (btn) {
    btn.innerHTML = `<span class="animate-pulse">Preparing Secure Payment...</span>`;
  }

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.message || 'Unable to place order.');
    }

    // ONLINE PAYMENT VIA RAZORPAY STANDARD CHECKOUT
    if (result.razorpay) {
      if (btn) btn.innerHTML = `<span class="animate-pulse">Opening Razorpay Checkout...</span>`;

      try {
        const verifyResult = await paymentService.openRazorpayCheckout(result.razorpay, result.orderId);

        lastOrderResult = {
          orderId: result.orderId,
          customer,
          amount: state.total,
          status: 'CONFIRMED',
          paymentStatus: 'PAID',
          paymentMethod: 'RAZORPAY',
          transactionId: verifyResult.order?.razorpayPaymentId || result.razorpay.orderId
        };

        cartStore.clearCart();
        currentStep = 'CONFIRMATION';
        cartStore.notify();
      } catch (rzpErr) {
        console.warn('[Checkout Razorpay Flow]', rzpErr.message);
        if (rzpErr.message === 'PAYMENT_DISMISSED') {
          checkoutNotice = 'Payment was cancelled. You can retry your payment.';
        } else {
          checkoutNotice = rzpErr.message || 'Payment could not be completed. Please try again.';
        }
        cartStore.notify();
      }
    } else {
      throw new Error(result.message || 'Unable to initiate online payment.');
    }
  } catch (err) {
    alert('Checkout error: ' + (err.message || 'Unable to place order.'));
  } finally {
    isProcessing = false;
    const currentBtn = document.getElementById('checkout-submit-btn');
    if (currentBtn && currentStep !== 'CONFIRMATION') {
      const state = cartStore.getState();
      currentBtn.innerHTML = `PAY NOW (&#8377;${state.total})`;
    }
  }
};

export function CheckoutModal(state) {
  const { isCheckoutOpen, cart, subtotal, shipping, total } = state;
  if (!isCheckoutOpen) return '';

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E9F0] relative p-6 sm:p-8">
        
        <!-- CLOSE BUTTON -->
        <button type="button" 
                onclick="cartStore.closeCheckout();" 
                class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F0F4F8] hover:bg-[#E2E9F0] text-[#0F172A] flex items-center justify-center font-bold text-sm">
          ✕
        </button>

        ${currentStep === 'CONFIRMATION' && lastOrderResult ? `
          <!-- ORDER CONFIRMATION STEP -->
          <div class="text-center py-8 space-y-4">
            <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h2 class="font-serif text-3xl text-[#0F172A]">Order Received!</h2>
            <p class="text-sm text-[#475569]">
              Thank you, <strong class="font-semibold text-[#0F172A]">${lastOrderResult.customer.name}</strong>. Your order has been registered in our system.
            </p>

            <div class="bg-[#F0F4F8] p-4 rounded-xl text-xs text-left space-y-2 text-[#334155] border border-[#E2E9F0] max-w-md mx-auto">
              <div class="flex justify-between"><span>Order Reference:</span> <strong class="font-mono text-[#0F172A]">${lastOrderResult.orderId}</strong></div>
              <div class="flex justify-between"><span>Total Amount:</span> <strong class="font-semibold text-[#0F172A]">&#8377;${lastOrderResult.amount}</strong></div>
              <div class="flex justify-between">
                <span>Payment Method:</span> 
                <span class="font-semibold text-[#0F172A]">${lastOrderResult.paymentMethod === 'RAZORPAY' ? '⚡ Razorpay Online' : 'Online Payment'}</span>
              </div>
              <div class="flex justify-between">
                <span>Payment Status:</span> 
                <span class="text-emerald-700 font-bold">
                  PAID ONLINE (Verified ✓)
                </span>
              </div>
              ${lastOrderResult.transactionId ? `
                <div class="flex justify-between"><span>Transaction ID:</span> <span class="font-mono text-[#475569]">${lastOrderResult.transactionId}</span></div>
              ` : ''}
              <div class="flex justify-between"><span>Delivery Address:</span> <span>${lastOrderResult.customer.city || ''} ${lastOrderResult.customer.pincode ? `(${lastOrderResult.customer.pincode})` : ''}</span></div>
              <div class="flex justify-between"><span>Fulfillment:</span> <span class="text-blue-700 font-semibold">Registered (Awaiting fulfillment)</span></div>
            </div>

            <p class="text-xs text-[#334155] bg-white border border-[#CBD5E1] p-3 rounded-lg max-w-md mx-auto">
              Use your order number and email address to track your order.
            </p>

            <p class="text-xs text-[#64748B] italic">
              Our workshop will prepare your handcrafted order. You will receive updates via WhatsApp.
            </p>

            <button type="button" 
                    onclick="currentStep = 'DETAILS'; cartStore.closeCheckout();" 
                    class="mt-4 px-8 py-3.5 bg-[#1E293B] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#334155]">
              CONTINUE SHOPPING
            </button>
          </div>
        ` : `
          <!-- CUSTOMER DETAILS & CHECKOUT FORM -->
          <div>
            <div class="mb-6">
              <span class="text-xs uppercase tracking-widest text-[#64748B] font-semibold">MER C. CHECKOUT</span>
              <h2 class="font-serif text-3xl text-[#0F172A]">Shipping & Order Details</h2>
            </div>

            <!-- ORDER SUMMARY MINI BAR -->
            <div class="bg-[#F0F4F8] p-4 rounded-xl mb-6 text-xs text-[#334155] border border-[#E2E9F0] space-y-2">
              <div class="font-semibold text-[#0F172A] uppercase tracking-wider border-b border-[#CBD5E1] pb-1.5 mb-2">Order Items (${cart.length})</div>
              ${cart.map(item => `
                <div class="flex justify-between items-start gap-2">
                  <span class="break-words min-w-0 flex-1">${item.product.name} × ${item.quantity}</span>
                  <span class="font-semibold text-[#0F172A] flex-shrink-0 whitespace-nowrap">&#8377;${item.product.price * item.quantity}</span>
                </div>
              `).join('')}
              <div class="flex justify-between pt-2 border-t border-[#CBD5E1]">
                <span>Subtotal</span>
                <span class="font-semibold text-[#0F172A]">&#8377;${subtotal}</span>
              </div>
              <div class="flex justify-between">
                <span>Delivery</span>
                <span class="text-emerald-700 font-semibold">FREE (&#8377;0)</span>
              </div>
              <div class="flex justify-between font-serif text-lg font-bold text-[#0F172A] pt-2 border-t border-[#CBD5E1]">
                <span>Total</span>
                <span>&#8377;${subtotal}</span>
              </div>
            </div>

            ${checkoutNotice ? `
              <div class="mb-4 p-3.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs flex items-start space-x-2">
                <span class="text-amber-600 font-bold">⚠️</span>
                <div>${checkoutNotice}</div>
              </div>
            ` : ''}

            <form id="checkout-form" onsubmit="handleCheckoutSubmit(event)" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold uppercase text-[#475569] mb-1">Full Name</label>
                  <input type="text" name="fullName" required placeholder="e.g. Priya Sharma" 
                         class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase text-[#475569] mb-1">Phone (WhatsApp)</label>
                  <input type="tel" name="phone" required placeholder="+91 98765 43210" 
                         class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase text-[#475569] mb-1">Email Address</label>
                <input type="email" name="email" required placeholder="priya@example.com" 
                       class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase text-[#475569] mb-1">Shipping Address</label>
                <textarea name="address" required rows="2" placeholder="House/Flat No., Building, Street Name..." 
                          class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]"></textarea>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold uppercase text-[#475569] mb-1">City</label>
                  <input type="text" name="city" required placeholder="Mumbai / Pune" 
                         class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase text-[#475569] mb-1">Pincode</label>
                  <input type="text" name="pincode" required placeholder="400001" 
                         class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
                </div>
              </div>

              <!-- PAYMENT METHOD (ONLINE PAYMENT VIA RAZORPAY ONLY) -->
              <div class="pt-2">
                <label class="block text-xs font-semibold uppercase text-[#475569] mb-2">Payment Method</label>
                <div class="flex items-start p-3.5 border border-[#0F172A] bg-slate-50 rounded-xl ring-1 ring-[#0F172A]">
                  <div class="mt-0.5 mr-3 text-emerald-600 font-bold text-sm">🔒</div>
                  <div class="min-w-0 flex-1">
                    <div class="font-semibold text-xs text-[#0F172A] flex items-center justify-between">
                      <span>Online Payment</span>
                      <span class="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Razorpay Secure</span>
                    </div>
                    <div class="text-[11px] text-[#64748B] mt-0.5">UPI, Debit/Credit Cards, NetBanking, Wallets</div>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <button type="submit" 
                        id="checkout-submit-btn"
                        class="w-full py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#334155] transition-colors shadow-md">
                  PAY NOW (&#8377;${total})
                </button>
                <div class="text-[10px] text-center text-[#64748B] mt-2">
                  🔒 256-Bit Encrypted Secure Checkout • 100% Free Delivery Pan-India
                </div>
              </div>
            </form>
          </div>
        `}

    </div>
  `;
}
