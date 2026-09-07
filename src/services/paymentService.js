/**
 * Payment Service Architecture
 * Modular payment gateway abstraction layer.
 * Client-side integration for Razorpay Standard Checkout & serverless verification.
 */

import { SITE_CONFIG } from '../config/siteConfig.js';

export const paymentService = {
  /**
   * Opens Razorpay Standard Checkout modal
   * @param {Object} razorpayPayload - { keyId, orderId, amount, currency, name, description, prefill }
   * @param {string} localOrderId - Mer C. order ID (e.g. #MC1017)
   * @returns {Promise<Object>} Verification response from /api/razorpay/verify
   */
  openRazorpayCheckout(razorpayPayload, localOrderId) {
    return new Promise((resolve, reject) => {
      if (typeof window.Razorpay !== 'function') {
        return reject(new Error('Razorpay SDK is not loaded. Please check your internet connection and refresh.'));
      }

      const options = {
        key: razorpayPayload.keyId,
        amount: razorpayPayload.amount,
        currency: razorpayPayload.currency || 'INR',
        name: razorpayPayload.name || 'Mer C.',
        description: razorpayPayload.description || `Order ${localOrderId}`,
        order_id: razorpayPayload.orderId,
        prefill: razorpayPayload.prefill || {},
        theme: {
          color: '#0F172A' // Brand luxury dark navy
        },
        handler: async function (response) {
          // Response contains: razorpay_payment_id, razorpay_order_id, razorpay_signature
          try {
            const verifyPayload = {
              orderId: localOrderId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            };

            const verifyRes = await fetch('/api/razorpay-verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(verifyPayload)
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              resolve(verifyData);
            } else {
              reject(new Error(verifyData.message || 'Payment signature verification failed.'));
            }
          } catch (err) {
            reject(new Error(err.message || 'Network error during payment verification.'));
          }
        },
        modal: {
          ondismiss: function () {
            reject(new Error('PAYMENT_DISMISSED'));
          },
          escape: true,
          backdropclose: false
        }
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          console.warn('[Razorpay Payment Failed]', resp.error);
          reject(new Error(resp.error?.description || 'Payment was declined or failed.'));
        });
        rzp.open();
      } catch (err) {
        reject(err);
      }
    });
  }
};
