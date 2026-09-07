/**
 * lib/email.js
 * Owner order notification module using Resend REST API (Zero external npm dependencies).
 * Located in root lib/ to guarantee Vercel does not treat it as a serverless function.
 */

export function getEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY || '',
    from: process.env.RESEND_FROM_EMAIL || 'Mer C. Orders <orders@mercapperals.com>',
    ownerEmail: process.env.OWNER_ORDER_EMAIL || 'info@mercapperals.com'
  };
}

/**
 * Generates an HTML notification email for the store owner.
 */
export function formatOrderNotificationHtml(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  const customer = order.customer || {};
  const isRazorpay = String(order.paymentMethod || '').toUpperCase() === 'RAZORPAY';
  const paymentMethodLabel = isRazorpay ? 'Razorpay (Online Payment)' : 'Cash on Delivery (COD)';
  const paymentStatusBadge = order.paymentStatus === 'PAID'
    ? '<span style="display:inline-block;padding:3px 8px;background:#e6f4ea;color:#137333;border-radius:4px;font-weight:600;font-size:12px;">PAID</span>'
    : '<span style="display:inline-block;padding:3px 8px;background:#fef7e0;color:#b06000;border-radius:4px;font-weight:600;font-size:12px;">PENDING</span>';

  const itemsRows = items.map((item, idx) => {
    const name = item.productName || item.name || 'Handcrafted Piece';
    const category = item.category ? `<br><small style="color:#666;">${item.category}</small>` : '';
    const qty = Number(item.quantity) || 1;
    const price = Number(item.priceAtPurchase || item.price || 0);
    const subtotal = Number(item.subtotal || price * qty);
    const bgColor = idx % 2 === 0 ? '#ffffff' : '#f9f9f9';

    return `
      <tr style="background-color:${bgColor};border-bottom:1px solid #e0e0e0;">
        <td style="padding:10px 12px;font-size:14px;color:#222;">
          <strong>${name}</strong>${category}
        </td>
        <td style="padding:10px 12px;text-align:center;font-size:14px;color:#444;">${qty}</td>
        <td style="padding:10px 12px;text-align:right;font-size:14px;color:#444;">&#8377;${price.toLocaleString('en-IN')}</td>
        <td style="padding:10px 12px;text-align:right;font-size:14px;font-weight:600;color:#111;">&#8377;${subtotal.toLocaleString('en-IN')}</td>
      </tr>
    `;
  }).join('');

  const orderDate = order.createdAt ? new Date(order.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Order ${order.orderId}</title>
    </head>
    <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#333;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:20px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:600px;width:100%;">
              <!-- Header -->
              <tr>
                <td style="background-color:#1a1a1a;padding:24px 30px;text-align:center;">
                  <h1 style="color:#d4af37;margin:0;font-size:22px;letter-spacing:1px;font-weight:600;">MER C. APPARELS</h1>
                  <p style="color:#cccccc;margin:6px 0 0 0;font-size:13px;">New Customer Order Notification</p>
                </td>
              </tr>

              <!-- Order Summary Banner -->
              <tr>
                <td style="padding:24px 30px 12px 30px;">
                  <div style="background-color:#fafafa;border:1px solid #ebebeb;border-radius:6px;padding:16px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;">
                          <span style="font-size:12px;color:#777;text-transform:uppercase;letter-spacing:0.5px;">Order ID</span>
                          <div style="font-size:20px;font-weight:700;color:#111;margin-top:2px;">${order.orderId}</div>
                          <span style="font-size:12px;color:#888;">${orderDate} IST</span>
                        </td>
                        <td align="right" style="vertical-align:middle;">
                          <div style="margin-bottom:6px;">${paymentStatusBadge}</div>
                          <div style="font-size:13px;color:#555;">${paymentMethodLabel}</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>

              ${isRazorpay && order.razorpayPaymentId ? `
              <!-- Razorpay Details -->
              <tr>
                <td style="padding:0 30px 12px 30px;">
                  <div style="background-color:#e8f4fd;border:1px solid #bee3f8;border-radius:6px;padding:10px 16px;font-size:13px;color:#2b6cb0;">
                    <strong>Razorpay Payment ID:</strong> ${order.razorpayPaymentId}
                    ${order.razorpayOrderId ? `<br><strong>Razorpay Order ID:</strong> ${order.razorpayOrderId}` : ''}
                  </div>
                </td>
              </tr>` : ''}

              <!-- Customer Details -->
              <tr>
                <td style="padding:12px 30px;">
                  <h3 style="margin:0 0 10px 0;font-size:15px;color:#111;border-bottom:1px solid #eee;padding-bottom:6px;">Customer & Delivery Details</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.5;">
                    <tr>
                      <td width="30%" style="color:#666;padding:4px 0;">Name:</td>
                      <td width="70%" style="font-weight:600;color:#222;padding:4px 0;">${customer.name || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td style="color:#666;padding:4px 0;">Phone:</td>
                      <td style="padding:4px 0;"><a href="tel:${customer.phone}" style="color:#0066cc;text-decoration:none;">${customer.phone || 'N/A'}</a></td>
                    </tr>
                    <tr>
                      <td style="color:#666;padding:4px 0;">Email:</td>
                      <td style="padding:4px 0;"><a href="mailto:${customer.email}" style="color:#0066cc;text-decoration:none;">${customer.email || 'N/A'}</a></td>
                    </tr>
                    <tr>
                      <td style="color:#666;padding:4px 0;vertical-align:top;">Address:</td>
                      <td style="color:#222;padding:4px 0;">
                        ${customer.address || ''}<br>
                        ${customer.city ? customer.city + ' ' : ''}${customer.pincode ? '- ' + customer.pincode : ''}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Items Table -->
              <tr>
                <td style="padding:12px 30px;">
                  <h3 style="margin:0 0 10px 0;font-size:15px;color:#111;border-bottom:1px solid #eee;padding-bottom:6px;">Ordered Items</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:8px;">
                    <thead>
                      <tr style="background-color:#f0f0f0;border-bottom:2px solid #ddd;">
                        <th align="left" style="padding:10px 12px;font-size:13px;color:#555;font-weight:600;">Product</th>
                        <th align="center" style="padding:10px 12px;font-size:13px;color:#555;font-weight:600;">Qty</th>
                        <th align="right" style="padding:10px 12px;font-size:13px;color:#555;font-weight:600;">Unit Price</th>
                        <th align="right" style="padding:10px 12px;font-size:13px;color:#555;font-weight:600;">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${itemsRows}
                    </tbody>
                  </table>
                </td>
              </tr>

              <!-- Price Breakdown -->
              <tr>
                <td style="padding:12px 30px 24px 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                    <tr>
                      <td align="right" style="padding:4px 0;color:#666;">Subtotal:</td>
                      <td align="right" width="100" style="padding:4px 0;color:#222;font-weight:500;">&#8377;${Number(order.subtotal || 0).toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td align="right" style="padding:4px 0;color:#666;">Delivery:</td>
                      <td align="right" style="padding:4px 0;color:#137333;font-weight:600;">FREE (&#8377;0)</td>
                    </tr>
                    <tr style="border-top:2px solid #222;">
                      <td align="right" style="padding:10px 0 0 0;font-size:16px;font-weight:700;color:#111;">Total Amount:</td>
                      <td align="right" style="padding:10px 0 0 0;font-size:18px;font-weight:700;color:#111;">&#8377;${Number(order.totalAmount || 0).toLocaleString('en-IN')}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#f9f9f9;padding:16px 30px;border-top:1px solid #ebebeb;text-align:center;font-size:12px;color:#888;">
                  This is an automated notification from Mer C. Apparels store backend.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * Generates plain-text fallback notification email.
 */
export function formatOrderNotificationText(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  const customer = order.customer || {};
  const isRazorpay = String(order.paymentMethod || '').toUpperCase() === 'RAZORPAY';

  const itemsList = items.map(item => {
    const name = item.productName || item.name || 'Handcrafted Piece';
    const qty = Number(item.quantity) || 1;
    const price = Number(item.priceAtPurchase || item.price || 0);
    const subtotal = Number(item.subtotal || price * qty);
    return `- ${name} x${qty} @ Rs.${price} = Rs.${subtotal}`;
  }).join('\n');

  return `
NEW ORDER RECEIVED: ${order.orderId}
========================================
Date: ${order.createdAt ? new Date(order.createdAt).toISOString() : new Date().toISOString()}
Payment Method: ${isRazorpay ? 'Razorpay (Online Payment)' : 'Cash on Delivery (COD)'}
Payment Status: ${order.paymentStatus || 'PENDING'}
${isRazorpay && order.razorpayPaymentId ? `Razorpay Payment ID: ${order.razorpayPaymentId}\nRazorpay Order ID: ${order.razorpayOrderId || 'N/A'}\n` : ''}

CUSTOMER DETAILS:
Name: ${customer.name || 'N/A'}
Phone: ${customer.phone || 'N/A'}
Email: ${customer.email || 'N/A'}
Address: ${customer.address || 'N/A'}
City: ${customer.city || 'N/A'}
Pincode: ${customer.pincode || 'N/A'}

ORDER ITEMS:
${itemsList}

SUMMARY:
Subtotal: Rs.${Number(order.subtotal || 0)}
Delivery: FREE (Rs.0)
Total Amount: Rs.${Number(order.totalAmount || 0)}
========================================
`;
}

/**
 * Sends order notification email to store owner via Resend REST API.
 * Uses atomic MongoDB flag check to enforce strict idempotency (at most once delivery).
 * Non-blocking: will never throw or interrupt order flow if Resend fails.
 *
 * @param {object} order - Order document
 * @param {object} db - MongoDB database instance
 * @returns {Promise<{success: boolean, skipped?: boolean, reason?: string, id?: string, error?: string}>}
 */
export async function sendOwnerOrderEmail(order, db) {
  if (!order || !order.orderId) {
    console.warn('[Resend Email] Invalid order passed to sendOwnerOrderEmail');
    return { success: false, reason: 'INVALID_ORDER' };
  }

  const { apiKey, from, ownerEmail } = getEmailConfig();

  if (!apiKey) {
    console.warn('[Resend Email] RESEND_API_KEY not set in environment. Skipping email notification.');
    return { success: false, skipped: true, reason: 'NO_API_KEY' };
  }

  try {
    // 1. Enforce atomic idempotency using MongoDB if db is provided
    if (db) {
      const ordersCollection = db.collection('orders');
      const updateResult = await ordersCollection.updateOne(
        {
          orderId: order.orderId,
          'emailNotifications.ownerSent': { $ne: true }
        },
        {
          $set: {
            'emailNotifications.ownerSent': true,
            'emailNotifications.ownerAttemptedAt': new Date()
          }
        }
      );

      // If matchedCount is 0, the email was already sent by another process/trigger
      if (updateResult.matchedCount === 0) {
        console.log(`[Resend Email] Email already sent for order ${order.orderId}. Skipping.`);
        return { success: true, skipped: true, reason: 'ALREADY_SENT' };
      }
    }

    // 2. Format subject, html, and text
    const subject = `New Order Received - ${order.orderId} (₹${Number(order.totalAmount || 0).toLocaleString('en-IN')})`;
    const html = formatOrderNotificationHtml(order);
    const text = formatOrderNotificationText(order);

    // 3. Dispatch to Resend REST API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [ownerEmail],
        subject,
        html,
        text
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error(`[Resend Email] Failed to send email for order ${order.orderId}:`, response.status, data);

      if (db) {
        await db.collection('orders').updateOne(
          { orderId: order.orderId },
          {
            $set: {
              'emailNotifications.ownerLastError': data.message || `HTTP ${response.status}`,
              'emailNotifications.ownerFailedAt': new Date()
            }
          }
        ).catch(() => {});
      }

      return { success: false, error: data.message || `HTTP ${response.status}` };
    }

    console.log(`[Resend Email] Order notification sent successfully for ${order.orderId}. Resend ID: ${data.id}`);

    if (db) {
      await db.collection('orders').updateOne(
        { orderId: order.orderId },
        {
          $set: {
            'emailNotifications.ownerResendId': data.id,
            'emailNotifications.ownerSentAt': new Date()
          }
        }
      ).catch(() => {});
    }

    return { success: true, id: data.id };
  } catch (err) {
    console.error(`[Resend Email] Unexpected error sending email for order ${order.orderId}:`, err.message);
    return { success: false, error: err.message };
  }
}
