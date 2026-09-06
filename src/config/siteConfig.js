/**
 * Central Configuration for Mer C. Apparels N Accessories E-Commerce System
 */

export const SITE_CONFIG = {
  brandName: "Mer C.",
  companyFullName: "Mer C Apparels N Accessories",
  tagline: "Handcrafted Premium Candles & Resin Art",
  
  // CENTRALIZED WHATSAPP INQUIRY NUMBER
  // Change this single variable when updating client phone number
  WHATSAPP_NUMBER: "+917045493582",

  // CENTRALIZED SOCIAL MEDIA LINKS
  social: {
    instagram: "https://www.instagram.com/mercapparelsnaccessories25/",
    instagramHandle: "@mercapparelsnaccessories25"
  },
  
  // Default WhatsApp message templates
  whatsappMessages: {
    corporateGifting: "Hello Mer C., I am interested in corporate gifting solutions. I would like to discuss my requirements.",
    generalInquiry: "Hello Mer C., I have a question about your handcrafted candle and resin art collection.",
    productInquiry: (productName) => `Hello Mer C., I am interested in ordering '${productName}'. Could you please share more details?`,
    ourWorkInquiry: "Hello Mer C., I saw your previous custom work on your website and would like to enquire about a similar custom order.",
    orderLookupInquiry: "Hello Mer C., I placed an order on your website but forgot my Order Number. Could you please help me locate my order?"
  },

  // Brand Colors matching reference design system
  colors: {
    primaryBg: "#F0F4F8",     // Soft Alice Blue background tint
    secondaryBg: "#FFFFFF",   // Crisp white
    accent: "#E2E9F0",        // Light blue-gray border
    darkText: "#0F172A",      // Deep navy / blue-black
    mutedText: "#475569",     // Muted slate navy
    buttonBg: "#1E293B",      // Dark navy button
    buttonHover: "#334155"    // Hover dark navy
  },

  // Payment & Delivery architecture - Delivery is ALWAYS 100% Free (included in product prices)
  payment: {
    currency: "INR",
    currencySymbol: "₹",
    freeShippingThreshold: 0,
    standardShippingFee: 0,
    provider: "RAZORPAY_PLACEHOLDER", // Prepared for future Razorpay integration
    mode: "TEST_MODE"
  }
};
