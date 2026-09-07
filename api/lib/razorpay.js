/**
 * Razorpay Test Mode Serverless Utility
 * Safe, zero-dependency integration using Node.js native fetch and crypto.
 * Never exposes RAZORPAY_KEY_SECRET or RAZORPAY_WEBHOOK_SECRET to frontend.
 */

import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

function sanitizeEnvVar(val) {
  if (!val || typeof val !== 'string') return '';
  let cleaned = val.trim();
  if ((cleaned.startsWith('"') && cleaned.endsWith('"')) || (cleaned.startsWith("'") && cleaned.endsWith("'"))) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  return cleaned;
}

export function getRazorpayKeys() {
  const keyId = sanitizeEnvVar(process.env.RAZORPAY_KEY_ID);
  const keySecret = sanitizeEnvVar(process.env.RAZORPAY_KEY_SECRET);
  const webhookSecret = sanitizeEnvVar(process.env.RAZORPAY_WEBHOOK_SECRET);

  return {
    keyId,
    keySecret,
    webhookSecret,
    isConfigured: Boolean(keyId && keySecret)
  };
}

/**
 * Creates a Razorpay Order via REST API (Amount must be in paise)
 * @param {Object} params - { amount, currency, receipt, notes }
 * @returns {Promise<Object>} Razorpay Order Object
 */
export async function createRazorpayOrder({ amount, currency = 'INR', receipt, notes = {} }) {
  const { keyId, keySecret, isConfigured } = getRazorpayKeys();

  if (!isConfigured) {
    console.error('[Razorpay Error] RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is missing in environment variables.');
    throw new Error('Online payment gateway configuration is unavailable.');
  }

  const roundedAmount = Math.round(Number(amount));
  if (!roundedAmount || roundedAmount <= 0) {
    throw new Error('Invalid order amount for payment creation.');
  }

  const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
  const payload = {
    amount: roundedAmount,
    currency,
    receipt: receipt ? String(receipt).slice(0, 40) : undefined,
    notes: {
      platform: 'Mer C. Apparels N Accessories',
      ...notes
    }
  };

  try {
    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('[Razorpay API Error]', data.error ? data.error.description : 'Failed to create order');
      // If placeholder test keys are in use, provide simulated order entity for seamless development/testing
      if (keyId.includes('Test') || keySecret.includes('Test')) {
        console.warn('[Razorpay Test Mode] Fallback to simulated test order entity for local development.');
        return {
          id: 'order_test_' + (receipt ? receipt.replace(/[^a-zA-Z0-9]/g, '') : Date.now()),
          entity: 'order',
          amount: roundedAmount,
          currency,
          receipt,
          status: 'created',
          attempts: 0,
          notes: payload.notes,
          created_at: Math.floor(Date.now() / 1000)
        };
      }
      throw new Error(data.error?.description || 'Failed to create payment order with gateway.');
    }

    return data;
  } catch (err) {
    console.error('[Razorpay Connection Error]', err.name || 'Error');
    if (keyId.includes('Test') || keySecret.includes('Test')) {
      console.warn('[Razorpay Test Mode] Network/auth failed with test keys; providing mock order entity.');
      return {
        id: 'order_test_' + (receipt ? receipt.replace(/[^a-zA-Z0-9]/g, '') : Date.now()),
        entity: 'order',
        amount: roundedAmount,
        currency,
        receipt,
        status: 'created',
        attempts: 0,
        notes: payload.notes,
        created_at: Math.floor(Date.now() / 1000)
      };
    }
    if (err.message.includes('Online payment gateway configuration')) throw err;
    throw new Error(err.message || 'Payment gateway is currently unreachable.');
  }
}

/**
 * Verifies Razorpay payment signature server-side
 * Formula: HMAC-SHA256(order_id + "|" + payment_id, secret) == signature
 * @param {Object} params - { razorpayOrderId, razorpayPaymentId, razorpaySignature }
 * @returns {boolean} True if signature is valid
 */
export function verifyPaymentSignature({ razorpayOrderId, razorpayPaymentId, razorpaySignature }) {
  const { keySecret } = getRazorpayKeys();

  if (!keySecret) {
    console.error('[Razorpay Verify Error] Missing RAZORPAY_KEY_SECRET.');
    return false;
  }

  if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
    return false;
  }

  try {
    const text = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(text)
      .digest('hex');

    const expectedBuf = Buffer.from(expectedSignature);
    const actualBuf = Buffer.from(razorpaySignature);

    if (expectedBuf.length !== actualBuf.length) {
      return false;
    }

    return crypto.timingSafeEqual(expectedBuf, actualBuf);
  } catch (err) {
    console.error('[Razorpay Signature Error]', err.message);
    return false;
  }
}

/**
 * Verifies incoming Razorpay Webhook signature
 * Formula: HMAC-SHA256(rawBody, webhookSecret) == x-razorpay-signature
 * @param {Object} params - { rawBody, signature }
 * @returns {boolean} True if webhook signature is valid
 */
export function verifyWebhookSignature({ rawBody, signature }) {
  const { webhookSecret } = getRazorpayKeys();

  if (!webhookSecret) {
    console.error('[Razorpay Webhook Error] Missing RAZORPAY_WEBHOOK_SECRET.');
    return false;
  }

  if (!rawBody || !signature) {
    return false;
  }

  try {
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(typeof rawBody === 'string' ? rawBody : JSON.stringify(rawBody))
      .digest('hex');

    const expectedBuf = Buffer.from(expectedSignature);
    const actualBuf = Buffer.from(signature);

    if (expectedBuf.length !== actualBuf.length) {
      return false;
    }

    return crypto.timingSafeEqual(expectedBuf, actualBuf);
  } catch (err) {
    console.error('[Razorpay Webhook Verification Error]', err.message);
    return false;
  }
}

