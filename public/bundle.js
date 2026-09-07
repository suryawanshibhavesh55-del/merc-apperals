
/* --- src/config/siteConfig.js --- */
/**
 * Central Configuration for Mer C. Apparels N Accessories E-Commerce System
 */

const SITE_CONFIG = {
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


/* --- src/data/products.js --- */
/**
 * Centralized Product Catalog Schema for Mer C.
 * Updated: Each product features exclusively its own single high-resolution photography asset.
 */

const PRODUCTS = [
  {
    id: "merc-candle-01",
    name: "Botanical Multi-Layer Floral Candle",
    subtitle: "Triple-Layer Pastels with Handcrafted Dried Botanicals",
    category: "Decorative Bowls",
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    reviewsCount: 38,
    images: [
      "assets/candles_processed/botanical-multi-layer-floral-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: true,
    badge: "Bestseller",
    shortDescription: "A stunning centerpiece candle featuring three soothing pastel wax layers, topped with preserved roses and lavender botanicals in a fluted glass bowl.",
    fullDescription: "Elevate your living space with our flagship Botanical Multi-Layer Candle. Carefully poured by hand, this candle harmonizes three pastel wax tiers - lavender, cream, and soft blush pink. It is topped with hand-selected dried roses, lavender sprays, and a natural wooden wick that crackles softly as it burns.",
    specifications: {
      waxType: "100% Pure Soy Wax & Botanical Oils",
      weight: "450g",
      fragrance: "Lavender & French Rose",
      container: "Fluted Crystal Glass Bowl with Wooden Coaster Base",
      dimensions: "12cm Diameter x 10cm Height"
    },
    careInstructions: [
      "Trim wick to 1/4 inch before each burn.",
      "Allow the melt pool to reach the edges of the glass on the first burn to prevent tunneling.",
      "Keep away from drafts, pets, and flammable objects.",
      "Place on the included solid wood coaster for surface protection."
    ],
    availability: "In Stock"
  },
  {
    id: "merc-candle-02",
    name: "Royal Lotus Urli Candle",
    subtitle: "Heritage Brass Finish Urli with Sculpted Floating Lotuses",
    category: "Festive Urlis",
    price: 449,
    originalPrice: 599,
    rating: 5.0,
    reviewsCount: 52,
    images: [
      "assets/candles_processed/royal-lotus-urli-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Heritage Edition",
    shortDescription: "A traditional scallop-bordered Urli bowl filled with ocean-blue wax and detailed hand-molded lotus petals and lily leaves.",
    fullDescription: "Celebrate festive moments with the Royal Lotus Urli Candle. Designed to resemble a serene lotus pond, this traditional piece features hand-molded lotus blossoms in shades of crimson and pink floating gracefully over cerulean blue wax. Perfect for festive celebrations, housewarmings, and temple decor.",
    specifications: {
      waxType: "Eco Soy & Microcrystalline Blend",
      weight: "650g",
      fragrance: "Mogra & Jasmine Nectar",
      container: "Crafted Brass Finish Scalloped Metal Vessel",
      dimensions: "20cm Diameter x 6cm Height"
    },
    careInstructions: [
      "Ideal for central coffee tables and entrance decor.",
      "Light all wicks simultaneously for an even warm glow.",
      "Do not burn for more than 4 consecutive hours."
    ],
    availability: "In Stock"
  },
  {
    id: "merc-candle-03",
    name: "Golden Shimmer Glass Candle",
    subtitle: "Crystal Tumbler with Encapsulated Gold Glitter Base",
    category: "Glass Jars",
    price: 299,
    originalPrice: 349,
    rating: 4.8,
    reviewsCount: 24,
    images: [
      "assets/candles_processed/golden-shimmer-glass-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Minimal Luxury",
    shortDescription: "A sophisticated minimalist tumbler featuring a glowing white soy wax top and a radiant golden gel shimmer base.",
    fullDescription: "Breathe quiet luxury into your space with the Golden Shimmer Glass Candle. Crafted with dual-phase magic: the top layer consists of creamy vanilla-scented soy wax, while the lower phase traps thousands of micro-gold sparkles in crystal-clear gel wax, creating a captivating ambient glow.",
    specifications: {
      waxType: "Dual-Layer Soy & Sparkling Gel Wax",
      weight: "320g",
      fragrance: "Warm Amber & Madagascar Vanilla",
      container: "Heavy-Base Crystal Glass Tumbler",
      dimensions: "8.5cm Diameter x 11cm Height"
    },
    careInstructions: [
      "Place on flat heat-resistant surfaces.",
      "Wipe glass exterior with a soft microfiber cloth."
    ],
    availability: "In Stock"
  },
  {
    id: "merc-candle-04",
    name: "Blossom Rose Sphere Candle (Pack of 4)",
    subtitle: "Pack of 4 Handcrafted Rose Sculptures • Free Delivery",
    category: "Sculptural Candles",
    price: 299,
    originalPrice: 499,
    rating: 4.9,
    reviewsCount: 19,
    images: [
      "assets/candles_processed/blossom-rose-sphere-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Pack of 4",
    freeDelivery: true,
    isFreeDelivery: true,
    shortDescription: "Pack of 4 standalone spherical candles carved meticulously into delicate pink and white rose petals. Delivery charges are completely FREE.",
    fullDescription: "A luxury set of 4 wax artistry masterpieces. Each Blossom Rose Sphere Candle is individually hand-molded and shaded with gradient soft pink edges. Perfect for gifting, home décor, or dining accents. Delivery charges are completely FREE on this set of 4.",
    specifications: {
      packageContents: "Pack of 4 Candles",
      waxType: "High-Purity Natural Beeswax & Soy Blend",
      weight: "280g (70g each × 4 candles)",
      fragrance: "Fresh Cut Velvet Roses",
      container: "Standalone Sculptural Wax (Coaster Recommended)",
      dimensions: "9cm Diameter each (Set of 4)",
      delivery: "FREE Delivery (No extra shipping charges)"
    },
    careInstructions: [
      "Place on a ceramic plate or wooden trivet before lighting.",
      "Trim cotton wick to 5mm before every lighting."
    ],
    availability: "In Stock"
  },
  {
    id: "merc-resin-01",
    name: "Bombay Sapphire Bottle Resin Art Frame",
    subtitle: "Crushed Glass & Gold Flake Embellished Shadowbox Frame",
    category: "Resin Art",
    mainCategory: "Resin Art",
    price: 2500,
    originalPrice: 3499,
    rating: 5.0,
    reviewsCount: 14,
    images: [
      "assets/resin_art/bombay_sapphire_resin_art_frame.jpg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Exclusive",
    shortDescription: "A bespoke shadowbox frame featuring an authentic Bombay Sapphire bottle encased in high-gloss black epoxy resin with hand-embedded crushed crystal glass and floating gold flakes.",
    fullDescription: "Elevate your lounge, bar, or living space with this luxury Bombay Sapphire Resin Wall Art. Individually handcrafted by Mer C., this statement piece embeds an authentic Bombay Sapphire bottle onto a deep obsidian resin bed accented with sparkling crushed glass and genuine gold foil leafing, encased in a handcrafted wooden frame.",
    specifications: {
      material: "Epoxy Resin, Authentic Glass Bottle & Natural Wood Frame",
      finish: "Ultra-Gloss Scratch-Resistant Crystal Resin with Gold Flecks",
      dimensions: "12in x 16in x 2.5in (Shadowbox Wall Frame)",
      weight: "1.8 kg",
      color: "Obsidian Black, Sapphire Blue & Gold Flakes"
    },
    careInstructions: [
      "Wipe gently with a soft dry microfiber cloth.",
      "Avoid prolonged direct sunlight exposure to preserve resin luster.",
      "Do not use abrasive chemicals or alcohol-based solvents."
    ],
    availability: "In Stock",
    stock: 5,
    isActive: true
  }
];

const CATEGORIES = [
  "All",
  "Candles",
  "Resin Art",
  "Decorative Bowls",
  "Festive Urlis",
  "Glass Jars",
  "Sculptural Candles"
];


/* --- src/data/trustedClients.js --- */
/**
 * Trusted Corporate Clients & Order Showcase Catalog
 */

const TRUSTED_CLIENTS = [
  {
    id: "client-1",
    name: "Madhuri Naturals",
    type: "Handmade Product Launch",
    image: "assets/trusted_clients/client-showcase-12.jpeg",
    description: "Custom corporate hampers and natural handmade collections."
  },
  {
    id: "client-2",
    name: "Madhuri Creations",
    type: "Bulk Celebratory Hampers",
    image: "assets/trusted_clients/client-showcase-10.jpeg",
    description: "Over 500+ handcrafted floral candles for corporate distribution."
  },
  {
    id: "client-3",
    name: "Madhuri Naturals Soap Launch",
    type: "Festive Custom Packaging",
    image: "assets/trusted_clients/client-showcase-13.jpeg",
    description: "Exclusive packaging & artisan gift box integration."
  },
  {
    id: "client-4",
    name: "Bulk Order Delivery",
    type: "Corporate Gifting Batch",
    image: "assets/trusted_clients/client-showcase-15.jpeg",
    description: "Verified bulk shipping & custom ribbon styling for corporate clients."
  },
  {
    id: "client-5",
    name: "Lotus Lotus Batch Order",
    type: "Custom Festive Gifting",
    image: "assets/trusted_clients/client-showcase-2.jpeg",
    description: "Handcrafted festive urli candle order completion."
  },
  {
    id: "client-6",
    name: "Velvet Rose Special",
    type: "Corporate Event Gifting",
    image: "assets/trusted_clients/client-showcase-1.jpeg",
    description: "Sculptured floral pieces for high-profile client appreciation events."
  }
];


/* --- src/data/corporateLogos.js --- */
/**
 * Corporate Client Logos Catalog extracted from Mer C. official partnerships
 */

const CORPORATE_LOGOS = [
  {
    id: "logo-1",
    name: "Lakshya Shooting Club",
    image: "assets/client_logos/lakshya-shooting-club.png"
  },
  {
    id: "logo-2",
    name: "Khelo India",
    image: "assets/client_logos/khelo-india.png"
  },
  {
    id: "logo-3",
    name: "National Rifle Association of India",
    image: "assets/client_logos/nrai-national-rifle.png"
  },
  {
    id: "logo-4",
    name: "Infosys Foundation",
    image: "assets/client_logos/infosys-foundation.png"
  },
  {
    id: "logo-5",
    name: "Axis Bank",
    image: "assets/client_logos/axis-bank.png"
  },
  {
    id: "logo-6",
    name: "TIR Sports",
    image: "assets/client_logos/tir-sports.png"
  },
  {
    id: "logo-7",
    name: "Accenture",
    image: "assets/client_logos/accenture.png"
  },
  {
    id: "logo-8",
    name: "TIAA",
    image: "assets/client_logos/tiaa.png"
  },
  {
    id: "logo-9",
    name: "Stinger Drafting",
    image: "assets/client_logos/stinger-drafting.png"
  },
  {
    id: "logo-10",
    name: "Spotify",
    image: "assets/client_logos/spotify.png"
  },
  {
    id: "logo-11",
    name: "RR Kabel / RR Global",
    image: "assets/client_logos/rr-kabel.png"
  }
];


/* --- src/data/ourWorkPortfolio.js --- */
/**
 * Mer C. — Client Previous Work & Custom Orders Portfolio Data
 * Structured catalog of all 44 authentic client project photographs from assets/corporate gifting/
 */

const CUSTOM_WORK_CATEGORIES = [
  {
    id: "custom-mugs-bottles",
    number: "01",
    title: "CUSTOM MUGS & BOTTLES",
    subtitle: "Artisanal Drinkware & Hydration Essentials",
    description: "Custom printed ceramic mugs, high-grade stainless steel vacuum bottles, insulated travel tumblers, and personalized drinkware curated for esteemed corporate clients including Spotify, TIAA, Accenture, and Piramal.",
    images: [
      {
        id: "mug-spotify",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.37 PM.jpeg",
        title: "Spotify Employee Appreciation Ceramic Mug",
        client: "Spotify",
        alt: "Mer C. custom printed Spotify corporate ceramic mug on office desk"
      },
      {
        id: "mug-team",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.37 PM (1).jpeg",
        title: "Dual-Tone Team Inspiration Ceramic Mug",
        client: "Corporate Gifting",
        alt: "Mer C. custom blue-interior ceramic mug with inspirational team quote"
      },
      {
        id: "mug-piramal",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.37 PM (2).jpeg",
        title: "Piramal Pharma Solutions Corporate Mug",
        client: "Piramal Pharma Solutions",
        alt: "Mer C. custom branded Piramal Pharma Solutions corporate coffee mug"
      },
      {
        id: "mug-monogram",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.38 PM.jpeg",
        title: "Personalized Monogram Heart-Handle Mug",
        client: "Personalized Gifting",
        alt: "Mer C. bespoke monogram floral ceramic mug with heart-shaped handle"
      },
      {
        id: "mug-enamel-merc",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.38 PM (1).jpeg",
        title: "Mer C. Signature Stainless Rim Enamel Camp Mug",
        client: "Mer C. Collection",
        alt: "Mer C. Apparels N Accessories signature white enamel metal campfire mug"
      },
      {
        id: "bottle-merc-sports",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.39 PM.jpeg",
        title: "Mer C. Signature Sports Carabiner Bottle",
        client: "Mer C. Collection",
        alt: "Mer C. white aluminum outdoor sports bottle with secure carabiner clip"
      },
      {
        id: "tumbler-insulated",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.39 PM (1).jpeg",
        title: "Personalized Slim Floral Travel Tumbler",
        client: "Personalized Gifting",
        alt: "Mer C. custom printed slim insulated travel tumbler with botanical monogram"
      },
      {
        id: "bottle-thermal-merc",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.39 PM (2).jpeg",
        title: "Mer C. Signature Vacuum Thermal Flask",
        client: "Mer C. Collection",
        alt: "Mer C. stainless steel vacuum insulated temperature-retention water bottle"
      },
      {
        id: "nrai-collection-display",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.40 PM.jpeg",
        title: "NRAI Official Mugs, Bottles & Coaster Suite",
        client: "National Rifle Association of India",
        alt: "Mer C. complete official merchandise suite for NRAI including bottles and mugs"
      },
      {
        id: "nrai-coasters-set",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.40 PM (1).jpeg",
        title: "NRAI Official Tricolor Target Coaster Trio",
        client: "National Rifle Association of India",
        alt: "Mer C. custom wooden drink coasters with NRAI emblem target print"
      },
      {
        id: "bottle-neeraj-chopra",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.45 PM (3).jpeg",
        title: "Neeraj Chopra Classic 2025 Matte Black Sports Flask",
        client: "Sports Event Series",
        alt: "Mer C. customized matte black sports water bottle for Neeraj Chopra Classic 2025"
      },
      {
        id: "tiaa-mugs-bulk-table",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.46 PM (2).jpeg",
        title: "TIAA & Accenture Corporate Mug Order Banquet Display",
        client: "TIAA / Accenture",
        alt: "Mer C. bulk corporate mug order display for TIAA and Accenture with gift hampers"
      },
      {
        id: "tiaa-mugs-gift-boxes",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.46 PM (3).jpeg",
        title: "TIAA & Accenture Gift Hampers & Ceramic Mugs",
        client: "TIAA / Accenture",
        alt: "Mer C. handcrafted corporate gift hampers and personalized mugs"
      },
      {
        id: "tiaa-mugs-full-showcase",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.47 PM.jpeg",
        title: "Mer C. Official Corporate Gifting Suite Display",
        client: "TIAA / Accenture / Mer C.",
        alt: "Mer C. official corporate gifting setup with branded mugs, hampers and gift boxes"
      },
      {
        id: "tiaa-mug-closeup",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.53 PM (1).jpeg",
        title: "TIAA Accenture 'Best Team Ever' Ceramic Mug",
        client: "TIAA / Accenture",
        alt: "Mer C. close-up view of TIAA and Accenture customized Best Team Ever corporate mug"
      }
    ]
  },
  {
    id: "custom-tshirts",
    number: "02",
    title: "CUSTOM T-SHIRTS",
    subtitle: "Corporate Polos, Athletic Jerseys & Custom Apparel",
    description: "Custom manufactured and screen-printed apparel, including dry-fit event tees, corporate embroidered pique polo shirts, championship hoodies, and athletic uniforms for organizations like Khelo India, Lakshya Shooting Club, and Stinger Drafting.",
    images: [
      {
        id: "tee-stinger-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.42 PM.jpeg",
        title: "Stinger Drafting Corporate Contrast Collar Polo",
        client: "Stinger Drafting",
        alt: "Mer C. custom manufactured white and yellow corporate polo for Stinger Drafting"
      },
      {
        id: "tee-green-pique-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.43 PM.jpeg",
        title: "Executive Forest Green Pique Polo",
        client: "Corporate Apparel",
        alt: "Mer C. bespoke tailored forest green executive pique polo shirt"
      },
      {
        id: "tee-vintage-1968",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.44 PM.jpeg",
        title: "'Made in 1968' Milestone Graphic T-Shirt",
        client: "Bespoke Milestone Order",
        alt: "Mer C. premium custom graphic print black cotton milestone t-shirt"
      },
      {
        id: "tee-nrai-hoodie",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.44 PM (1).jpeg",
        title: "NRAI Tricolor Colorblock Pullover Hoodie",
        client: "National Rifle Association of India",
        alt: "Mer C. tri-color blocked athletic hoodie with NRAI official embroidered crest"
      },
      {
        id: "tee-lakshya-cup-2023",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.44 PM (2).jpeg",
        title: "RR Lakshya Cup 2023 Two-Tone Raglan Tee",
        client: "RR Global / Lakshya Club",
        alt: "Mer C. custom event raglan sleeve t-shirt for RR Lakshya Cup 2023"
      },
      {
        id: "tee-nrai-white-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.45 PM.jpeg",
        title: "NRAI Official White Crested Athletic Polo",
        client: "National Rifle Association of India",
        alt: "Mer C. white performance athletic polo shirt customized for NRAI"
      },
      {
        id: "tee-khelo-india-jersey",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.45 PM (1).jpeg",
        title: "Khelo India Athlete High-Performance Jersey",
        client: "Khelo India / Lakshya Club",
        alt: "Mer C. athletic performance moisture-wicking jersey for Khelo India"
      },
      {
        id: "tee-khelo-india-tracksuit",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.45 PM (2).jpeg",
        title: "Khelo India Official Athlete Presentation Tracksuit",
        client: "Khelo India / Lakshya Club",
        alt: "Mer C. full athletic warm-up tracksuit customized for Khelo India athletes"
      },
      {
        id: "tee-gypsydivers-front",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.54 PM (1).jpeg",
        title: "Gypsy Divers Havelock Crest Graphic T-Shirt (Front)",
        client: "Gypsy Divers Havelock",
        alt: "Mer C. custom vibrant royal blue cotton graphic tee for Gypsy Divers Havelock"
      },
      {
        id: "tee-two-tone-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.54 PM (2).jpeg",
        title: "Colorblocked Gold & Navy Pique Corporate Polo",
        client: "Corporate Apparel",
        alt: "Mer C. modern dual-tone yellow and navy blue pique knit polo shirt"
      },
      {
        id: "tee-nrai-navy-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.54 PM (3).jpeg",
        title: "NRAI Official Navy Blue Crested Polo",
        client: "National Rifle Association of India",
        alt: "Mer C. deep navy blue performance athletic polo with NRAI tricolor stripe"
      },
      {
        id: "tee-nrai-landmark-jersey",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.55 PM.jpeg",
        title: "NRAI Heritage Monuments Athletic Jersey",
        client: "National Rifle Association of India",
        alt: "Mer C. sublimated sportswear jersey with Indian architectural landmarks for NRAI"
      },
      {
        id: "tee-gypsydivers-back",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.55 PM (1).jpeg",
        title: "Gypsy Divers Havelock T-Shirt (Back Typography)",
        client: "Gypsy Divers Havelock",
        alt: "Mer C. yellow screen printed back typography on royal blue cotton tee"
      },
      {
        id: "tee-lakshya-cup-2022",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.55 PM (2).jpeg",
        title: "13th RR Lakshya Cup 2022 Championship T-Shirt",
        client: "RR Global / Lakshya Club",
        alt: "Mer C. customized tournament commemorative blue heather cotton t-shirt"
      },
      {
        id: "tee-dw-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.56 PM.jpeg",
        title: "DW Executive Embroidered Clean White Polo",
        client: "DW Corporate",
        alt: "Mer C. embroidered corporate badge white pique polo shirt"
      },
      {
        id: "tee-shooting-sweatshirt",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.56 PM (1).jpeg",
        title: "'Keep Calm and Go Rifle Shooting' Crewneck Sweatshirt",
        client: "Sports Club Apparel",
        alt: "Mer C. heavy fleece navy crewneck sweatshirt with custom typographic print"
      },
      {
        id: "tee-fullhouse-jersey",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.56 PM (2).jpeg",
        title: "Full House 365 Athletic Striped Sleeve T-Shirt",
        client: "Full House 365",
        alt: "Mer C. custom striped sleeve navy graphic sports jersey for Full House 365"
      },
      {
        id: "tee-lakshya-women-polo",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.09.53 PM.jpeg",
        title: "Lakshya Shooting Club Official Team Performance Polo",
        client: "Lakshya Shooting Club",
        alt: "Mer C. high-performance athletic polo with tricolor banner for Lakshya Club"
      }
    ]
  },
  {
    id: "custom-resin-keychains",
    number: "03",
    title: "CUSTOM RESIN ART KEYCHAINS",
    subtitle: "Handcrafted Resin Charms, Bag Tags & Keepsakes",
    description: "Hand-poured epoxy resin keychains infused with 24K gold foil flakes, personalized typography, and durable gold-plated keyrings. Handcrafted in volume for major corporate events including TIAA and Accenture.",
    images: [
      {
        id: "resin-initial-charms",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.46 PM.jpeg",
        title: "Personalized Initial Gold Foil Resin Bag Charms",
        client: "Custom Orders",
        alt: "Mer C. handcrafted round resin keychains with gold leaf and metallic initials"
      },
      {
        id: "resin-tiaa-bulk-hampers",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.46 PM (1).jpeg",
        title: "TIAA & Accenture Gold Flake Bulk Keychain Hampers",
        client: "TIAA / Accenture",
        alt: "Mer C. bulk corporate order of gold flake resin keychains in organza gift bags"
      },
      {
        id: "resin-tiaa-single-token",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.52 PM.jpeg",
        title: "TIAA Accenture 'Best Team Ever' Gold Flake Token",
        client: "TIAA / Accenture",
        alt: "Mer C. close-up of custom gold leaf resin keychain for TIAA and Accenture"
      }
    ]
  },
  {
    id: "other-custom-work",
    number: "04",
    title: "OTHER CUSTOM WORK",
    subtitle: "Handcrafted Decor, Artisan Mirrors & Studio Accessories",
    description: "A showcase of bespoke resin mosaic mirrors, artisanal handcrafted concrete candle vessels, and custom executive desk accessories handcrafted by Mer C.",
    images: [
      {
        id: "other-resin-mirror-floral",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.47 PM (1).jpeg",
        title: "Artisan Floral Pearl Mosaic Resin Vanity Mirror",
        client: "Handcrafted Decor",
        alt: "Mer C. bespoke round vanity mirror framed with handcrafted purple resin pearls"
      },
      {
        id: "other-vessel-coral-hex",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.47 PM (2).jpeg",
        title: "Geometric Coral Pink Concrete Tealight Vessel",
        client: "Artisan Vessels",
        alt: "Mer C. hand-cast geometric concrete tealight candle holder in blush coral"
      },
      {
        id: "other-vessel-lotus-yellow",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.47 PM (3).jpeg",
        title: "Handcrafted Sunlit Lotus Petal Tealight Holder",
        client: "Artisan Vessels",
        alt: "Mer C. yellow sculpted lotus petal candle vessel on stone surface"
      },
      {
        id: "other-mirror-seashell-ocean",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.48 PM.jpeg",
        title: "Ocean Azure Seashell Resin Mosaic Statement Mirror",
        client: "Handcrafted Decor",
        alt: "Mer C. large wall statement mirror with real seashells and turquoise ocean resin"
      },
      {
        id: "other-dish-conch-resin",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.53 PM.jpeg",
        title: "Ocean Turquoise & Gold Resin Conch Seashell Trinket Dish",
        client: "Resin Decor",
        alt: "Mer C. hand-poured turquoise and gold mica resin conch shell keepsake dish"
      },
      {
        id: "other-candle-oceanic-gel",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.54 PM.jpeg",
        title: "Oceanic Dual-Layer Gel & Soy Candle with Shells",
        client: "Artisan Candles",
        alt: "Mer C. handmade botanical gel and soy wax candle with real ocean shells"
      },
      {
        id: "other-desk-pad-gold",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.09.53 PM (1).jpeg",
        title: "Mer C. Executive Gold Geometric Desk Mat",
        client: "Mer C. Collection",
        alt: "Mer C. Apparels N Accessories gold foil logo precision leatherette desk pad"
      },
      {
        id: "other-desk-pad-gaming",
        src: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.09.53 PM (2).jpeg",
        title: "Mer C. Extended Studio Workstation Desk Mat",
        client: "Mer C. Collection",
        alt: "Mer C. Apparels N Accessories oversized studio desk mat with keyboard and mouse"
      }
    ]
  }
];

// Curated 3 representative photographs for Homepage Corporate Gifting preview
const HOMEPAGE_PORTFOLIO_PREVIEWS = [
  {
    categoryTitle: "CUSTOM MUGS & BOTTLES",
    categoryRoute: "#/our-work",
    image: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 2.49.37 PM.jpeg",
    title: "Spotify Corporate Mug",
    alt: "Mer C. custom printed ceramic mug for Spotify"
  },
  {
    categoryTitle: "CUSTOM T-SHIRTS",
    categoryRoute: "#/our-work",
    image: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.01.45 PM (1).jpeg",
    title: "Khelo India Sports Jersey",
    alt: "Mer C. custom athletic jersey for Khelo India"
  },
  {
    categoryTitle: "CUSTOM RESIN ART KEYCHAINS",
    categoryRoute: "#/our-work",
    image: "assets/corporate gifting/WhatsApp Image 2026-09-02 at 3.06.52 PM.jpeg",
    title: "TIAA & Accenture Gold Flake Keychain",
    alt: "Mer C. gold flake resin art keychain for TIAA and Accenture"
  }
];


/* --- src/context/CartState.js --- */
/**
 * State Management Store for Mer C. E-Commerce & Portfolio
 * Handles Cart items, Wishlist, Hash Routing, Toast Notifications, Our Work Portfolio, Lightbox, LocalStorage,
 * and live MongoDB product catalog synchronization.
 */





const OFFICIAL_DOCUMENTS = {
  gst: {
    id: 'gst',
    title: 'GST Registration Certificate',
    form: 'Form GST REG-06',
    authority: 'Government of India',
    jurisdiction: 'State Tax Officer, Ghansoli_701, Maharashtra',
    number: '27BBUPR0507D1ZL',
    entityName: 'MerC Apparels N Accessories',
    type: 'Regular Registration (Proprietorship)',
    issueDate: '24/03/2022',
    path: 'assets/documents/mer-c-gst-registration-certificate.pdf',
    filename: 'mer-c-gst-registration-certificate.pdf'
  },
  udyam: {
    id: 'udyam',
    title: 'Udyam Registration Certificate',
    form: 'Ministry of MSME',
    authority: 'Ministry of Micro, Small and Medium Enterprises • Government of India',
    jurisdiction: 'District Industries Centre, Thane, Maharashtra',
    number: 'UDYAM-MH-33-0175395',
    entityName: 'MERC APPARELS N ACCESSORIES',
    type: 'Micro Enterprise (Trading & Manufacturing)',
    issueDate: '17/02/2022',
    path: 'assets/documents/mer-c-udyam-msme-certificate.pdf',
    filename: 'mer-c-udyam-msme-certificate.pdf'
  }
};

class CartStore {
  constructor() {
    this.listeners = new Set();
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.isCartOpen = false;
    this.isCheckoutOpen = false;
    this.selectedProduct = null;
    this.activeCategory = "All";
    this.searchQuery = "";
    this.toastMessage = null;
    this.toastTimeout = null;
    this.isOurWorkPage = false;
    this.isAdminRoute = false;
    this.isAccountPage = false;
    this.activeLightbox = null;
    this.activeDocument = null;
    this.isSearchOpen = false;
    this.searchTimer = null;

    // Hash-based routing listener
    window.addEventListener('hashchange', () => this.handleHashChange());
    this.handleHashChange();

    // Keyboard controls for Lightbox and Document navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.activeLightbox) this.closeLightbox();
        if (this.activeDocument) this.closeDocument();
      }
      if (!this.activeLightbox) return;
      if (e.key === 'ArrowRight') this.nextLightboxImage();
      if (e.key === 'ArrowLeft') this.prevLightboxImage();
    });

    // Synchronize live products from MongoDB Atlas
    this.fetchLiveProducts();
  }

  async fetchLiveProducts() {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && Array.isArray(data.products)) {
        // Sync into global PRODUCTS array in place
        PRODUCTS.length = 0;
        data.products.forEach(p => PRODUCTS.push(p));
        this.notify();
      }
    } catch (e) {
      console.warn('[CartStore] Fallback to static product catalog (API offline or static mode).');
    }
  }

  handleHashChange() {
    const hash = window.location.hash;
    const path = window.location.pathname;

    if (hash === '#/admin' || hash.startsWith('#/admin') || path === '/admin' || path.startsWith('/admin/')) {
      this.isAdminRoute = true;
      this.isOurWorkPage = false;
      this.isAccountPage = false;
      this.selectedProduct = null;
      this.isCheckoutOpen = false;
      this.isCartOpen = false;
    } else if (hash === '#/account' || hash.startsWith('#/account') || path === '/account' || path.startsWith('/account/')) {
      this.isAdminRoute = false;
      this.isOurWorkPage = false;
      this.isAccountPage = true;
      this.selectedProduct = null;
      this.isCheckoutOpen = false;
      this.isCartOpen = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash.startsWith('#/product/')) {
      this.isAdminRoute = false;
      this.isAccountPage = false;
      const productId = hash.replace('#/product/', '');
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
        this.selectedProduct = product;
        this.isCheckoutOpen = false;
        this.isOurWorkPage = false;
      }
    } else if (hash === '#/checkout') {
      this.isAdminRoute = false;
      this.isAccountPage = false;
      this.isCheckoutOpen = true;
      this.isCartOpen = false;
      this.isOurWorkPage = false;
    } else if (hash === '#/cart') {
      this.isAdminRoute = false;
      this.isAccountPage = false;
      this.isCartOpen = true;
    } else if (hash === '#/our-work') {
      this.isAdminRoute = false;
      this.isAccountPage = false;
      this.isOurWorkPage = true;
      this.selectedProduct = null;
      this.isCheckoutOpen = false;
      this.isCartOpen = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.isAdminRoute = false;
      this.isOurWorkPage = false;
      this.isAccountPage = false;
      // Clear modals if navigating to regular anchor
      if (hash === '' || hash === '#hero' || hash === '#catalog' || hash === '#resin-art' || hash === '#corporate-gifting' || hash === '#about') {
        this.selectedProduct = null;
        this.isCheckoutOpen = false;
      }
    }
    this.notify();
  }

  loadCart() {
    try {
      const stored = localStorage.getItem('merc_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('LocalStorage error reading cart:', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('merc_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('LocalStorage error saving cart:', e);
    }
    this.notify();
  }

  loadWishlist() {
    try {
      const stored = localStorage.getItem('merc_wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem('merc_wishlist', JSON.stringify(this.wishlist));
    } catch (e) {
      console.warn('LocalStorage error saving wishlist:', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.getState()));
  }

  getState() {
    const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const shipping = 0; // Delivery is ALWAYS 100% Free - costs already included in product prices
    const total = subtotal;
    const freeShippingRemaining = 0;

    return {
      products: PRODUCTS,
      cart: this.cart,
      wishlist: this.wishlist,
      itemCount,
      subtotal,
      shipping,
      total,
      freeShippingRemaining,
      isCartOpen: this.isCartOpen,
      isCheckoutOpen: this.isCheckoutOpen,
      selectedProduct: this.selectedProduct,
      activeCategory: this.activeCategory,
      searchQuery: this.searchQuery,
      toastMessage: this.toastMessage,
      isOurWorkPage: this.isOurWorkPage,
      isAdminRoute: this.isAdminRoute,
      isAccountPage: this.isAccountPage,
      activeLightbox: this.activeLightbox,
      activeDocument: this.activeDocument,
      isSearchOpen: this.isSearchOpen
    };
  }

  showToast(msg) {
    this.toastMessage = msg;
    if (typeof document !== 'undefined') {
      let toastEl = document.getElementById('storefront-toast');
      if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'storefront-toast';
        document.body.appendChild(toastEl);
      }
      toastEl.className = 'fixed bottom-6 left-6 z-50 bg-[#0F172A] text-white text-xs font-medium px-5 py-3 rounded-lg shadow-xl flex items-center space-x-2 border border-slate-700 transition-opacity duration-300 pointer-events-none';
      toastEl.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>${msg}</span>
      `;
      toastEl.style.opacity = '1';
      if (this.toastTimeout) clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        this.toastMessage = null;
        if (toastEl) {
          toastEl.style.opacity = '0';
          setTimeout(() => {
            if (toastEl && toastEl.parentNode) toastEl.remove();
          }, 300);
        }
      }, 2500);
    }
  }

  // Cart Operations
  addToCart(product, quantity = 1, openDrawer = false) {
    const existingIndex = this.cart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
    this.saveCart();
    this.showToast(`"${product.name}" added to your bag`);
    if (openDrawer) {
      this.openCart();
    }
  }

  orderNow(product, quantity = 1) {
    this.addToCart(product, quantity, false);
    window.location.hash = '#/checkout';
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId, newQty) {
    if (newQty <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity = newQty;
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  // Wishlist Operations
  toggleWishlist(product) {
    const index = this.wishlist.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.showToast(`Removed from Wishlist`);
    } else {
      this.wishlist.push(product);
      this.showToast(`Added to Wishlist`);
    }
    this.saveWishlist();
  }

  isInWishlist(productId) {
    return this.wishlist.some(item => item.id === productId);
  }

  // UI Drawer Controls
  openCart() {
    window.location.hash = '#/cart';
  }

  closeCart() {
    if (window.location.hash === '#/cart') {
      window.history.back();
    } else {
      this.isCartOpen = false;
      this.notify();
    }
  }

  openCheckout() {
    window.location.hash = '#/checkout';
  }

  closeCheckout() {
    if (window.location.hash === '#/checkout') {
      window.history.back();
    } else {
      this.isCheckoutOpen = false;
      this.notify();
    }
  }

  openProductDetail(product) {
    window.location.hash = `#/product/${product.id}`;
  }

  closeProductDetail() {
    if (window.location.hash.startsWith('#/product/')) {
      window.history.back();
    } else {
      this.selectedProduct = null;
      this.notify();
    }
  }

  // Our Work Portfolio Navigation
  navigateToOurWork() {
    window.location.hash = '#/our-work';
  }

  navigateBackFromOurWork() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#corporate-gifting';
    }
  }

  // Lightbox Controls
  openLightbox(categoryId, imageIndex) {
    const cat = CUSTOM_WORK_CATEGORIES.find(c => c.id === categoryId);
    if (cat && cat.images[imageIndex]) {
      this.activeLightbox = {
        categoryId,
        categoryTitle: cat.title,
        imageIndex,
        total: cat.images.length,
        image: cat.images[imageIndex]
      };
      this.notify();
    }
  }

  closeLightbox() {
    this.activeLightbox = null;
    this.notify();
  }

  nextLightboxImage() {
    if (!this.activeLightbox) return;
    const cat = CUSTOM_WORK_CATEGORIES.find(c => c.id === this.activeLightbox.categoryId);
    if (cat) {
      const nextIdx = (this.activeLightbox.imageIndex + 1) % cat.images.length;
      this.openLightbox(cat.id, nextIdx);
    }
  }

  prevLightboxImage() {
    if (!this.activeLightbox) return;
    const cat = CUSTOM_WORK_CATEGORIES.find(c => c.id === this.activeLightbox.categoryId);
    if (cat) {
      const prevIdx = (this.activeLightbox.imageIndex - 1 + cat.images.length) % cat.images.length;
      this.openLightbox(cat.id, prevIdx);
    }
  }

  setCategory(cat) {
    this.activeCategory = cat;
    this.notify();
  }

  setSearchQuery(query) {
    this.searchQuery = query;
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.notify();
    }, 250);
  }

  openDocument(docId) {
    if (typeof docId === 'string' && OFFICIAL_DOCUMENTS[docId]) {
      this.activeDocument = OFFICIAL_DOCUMENTS[docId];
    } else if (typeof docId === 'object' && docId !== null) {
      this.activeDocument = docId;
    }
    this.notify();
  }

  closeDocument() {
    this.activeDocument = null;
    this.notify();
  }
}

const cartStore = new CartStore();
window.refreshCustomerProducts = () => cartStore.fetchLiveProducts();


/* --- src/admin/adminStore.js --- */
/**
 * Admin Panel Reactive State Store
 * Manages authentication, dashboard metrics, orders, products, custom work, and settings.
 */

class AdminStore {
  constructor() {
    this.listeners = new Set();
    this.token = localStorage.getItem('merc_admin_token') || null;
    this.user = null;
    this.isAuthenticated = false;
    this.activeTab = 'dashboard'; // 'dashboard' | 'orders' | 'products' | 'custom-work' | 'customers' | 'settings'
    this.isSidebarOpen = false;

    // Data states
    this.dashboardStats = null;
    this.recentOrders = [];
    this.orders = [];
    this.ordersTotal = 0;
    this.unreadOrdersCount = 0;
    this.selectedOrder = null;
    this.ordersFilter = {
      search: '',
      status: 'ALL',
      date: 'all'
    };

    this.products = [];
    this.editingProduct = null;
    this.isAddProductOpen = false;

    this.customWorkItems = [];
    this.isAddCustomWorkOpen = false;

    this.settings = null;
    this.isLoading = false;
    this.errorMessage = null;
    this.toast = null;
    this.toastTimer = null;

    if (this.token) {
      this.checkAuth();
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(l => l(this.getState()));
  }

  getState() {
    return {
      token: this.token,
      user: this.user,
      isAuthenticated: this.isAuthenticated,
      activeTab: this.activeTab,
      isSidebarOpen: this.isSidebarOpen,
      dashboardStats: this.dashboardStats,
      recentOrders: this.recentOrders,
      orders: this.orders,
      ordersTotal: this.ordersTotal,
      unreadOrdersCount: this.unreadOrdersCount,
      selectedOrder: this.selectedOrder,
      ordersFilter: this.ordersFilter,
      products: this.products,
      editingProduct: this.editingProduct,
      isAddProductOpen: this.isAddProductOpen,
      customWorkItems: this.customWorkItems,
      isAddCustomWorkOpen: this.isAddCustomWorkOpen,
      settings: this.settings,
      isLoading: this.isLoading,
      errorMessage: this.errorMessage,
      toast: this.toast
    };
  }

  showToast(message, type = 'success') {
    this.toast = { message, type };
    if (typeof document !== 'undefined') {
      let toastEl = document.getElementById('admin-toast-container');
      if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'admin-toast-container';
        document.body.appendChild(toastEl);
      }
      toastEl.className = `fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg shadow-xl text-xs font-semibold text-white flex items-center space-x-2 transition-opacity duration-300 pointer-events-none ${type === 'error' ? 'bg-rose-700' : 'bg-[#0F172A]'}`;
      toastEl.innerHTML = `
        <span class="w-2 h-2 rounded-full ${type === 'error' ? 'bg-rose-300' : 'bg-emerald-400'}"></span>
        <span>${message}</span>
      `;
      toastEl.style.opacity = '1';
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast = null;
        if (toastEl) {
          toastEl.style.opacity = '0';
          setTimeout(() => {
            if (toastEl && toastEl.parentNode) toastEl.remove();
          }, 300);
        }
      }, 3000);
    }
  }

  getHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async checkAuth() {
    try {
      const res = await fetch('/api/auth', {
        headers: this.getHeaders()
      });
      const data = await res.json();
      if (data.authenticated) {
        this.isAuthenticated = true;
        this.user = data.user;
        await this.loadInitialData();
        return;
      } else {
        this.logout();
      }
    } catch {
      this.logout();
    }
    this.notify();
  }

  async login(username, password) {
    this.isLoading = true;
    this.errorMessage = null;
    this.notify();

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', username, password })
      });

      const data = await res.json();
      if (data.success) {
        this.token = data.token;
        this.user = data.user;
        this.isAuthenticated = true;
        localStorage.setItem('merc_admin_token', data.token);
        this.showToast('Welcome back, Admin!');
        await this.loadInitialData();
      } else {
        this.errorMessage = data.message || 'Invalid username or password.';
      }
    } catch (err) {
      this.errorMessage = 'Network error connecting to authentication service.';
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async logout() {
    try {
      await fetch('/api/auth', {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ action: 'logout' })
      });
    } catch (e) {
      // Ignore network errors on logout
    }

    this.token = null;
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem('merc_admin_token');
    this.notify();
  }

  setTab(tab) {
    this.activeTab = tab;
    this.isSidebarOpen = false;
    this.errorMessage = null;
    if (tab === 'dashboard') this.fetchDashboard();
    if (tab === 'orders') this.fetchOrders();
    if (tab === 'products') this.fetchProducts();
    if (tab === 'custom-work') this.fetchCustomWork();
    if (tab === 'settings') this.fetchSettings();
    this.notify();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.notify();
  }

  async loadInitialData() {
    await Promise.all([
      this.fetchDashboard({ silent: true }),
      this.fetchOrders({ silent: true }),
      this.fetchProducts({ silent: true }),
      this.fetchSettings({ silent: true })
    ]);
    this.notify();
  }

  // Dashboard Metrics
  async fetchDashboard(options = {}) {
    try {
      const res = await fetch('/api/dashboard', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.dashboardStats = data.stats;
        this.recentOrders = data.recentOrders;
        this.unreadOrdersCount = data.stats.newOrders;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Dashboard fetch error:', err);
    }
  }

  // Orders Management
  async fetchOrders(options = {}) {
    try {
      const { search, status, date } = this.ordersFilter;
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (status && status !== 'ALL') params.append('status', status);
      if (date && date !== 'all') params.append('date', date);

      const res = await fetch(`/api/orders?${params.toString()}`, { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.orders = data.orders;
        this.ordersTotal = data.total;
        this.unreadOrdersCount = data.unreadCount;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Orders fetch error:', err);
    }
  }

  setOrderFilter(key, value) {
    this.ordersFilter[key] = value;
    if (key === 'search') {
      if (this.orderSearchTimer) clearTimeout(this.orderSearchTimer);
      this.orderSearchTimer = setTimeout(() => {
        this.fetchOrders();
      }, 300);
    } else {
      this.fetchOrders();
    }
  }

  selectOrder(order) {
    this.selectedOrder = order;
    if (order && !order.isRead) {
      this.updateOrderStatus(order.orderId, { isRead: true });
    }
    this.notify();
  }

  closeOrderDrawer() {
    this.selectedOrder = null;
    this.notify();
  }

  async updateOrderStatus(orderId, updatePayload) {
    try {
      const res = await fetch('/api/orders', {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ orderId, ...updatePayload })
      });
      const data = await res.json();
      if (data.success) {
        this.showToast(`Order ${orderId} updated.`);
        if (this.selectedOrder && this.selectedOrder.orderId === orderId) {
          this.selectedOrder = data.order;
        }
        await this.fetchOrders();
        await this.fetchDashboard();
      }
    } catch (err) {
      this.showToast('Failed to update order.', 'error');
    }
  }

  // Products Management
  async fetchProducts(options = {}) {
    try {
      const res = await fetch('/api/products?all=true', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.products = data.products;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Products fetch error:', err);
    }
  }

  openAddProductModal() {
    this.editingProduct = null;
    this.isAddProductOpen = true;
    this.notify();
  }

  openEditProductModal(product) {
    this.editingProduct = product;
    this.isAddProductOpen = true;
    this.notify();
  }

  closeProductModal() {
    this.isAddProductOpen = false;
    this.editingProduct = null;
    this.notify();
  }

  async saveProduct(productData) {
    this.isLoading = true;
    this.notify();
    try {
      const isEdit = Boolean(productData.id);
      const url = '/api/products';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: this.getHeaders(),
        body: JSON.stringify(productData)
      });
      const data = await res.json();

      if (data.success) {
        this.showToast(isEdit ? 'Product updated successfully.' : 'Product created successfully.');
        this.closeProductModal();
        await this.fetchProducts();
        await this.fetchDashboard();
        // Notify customer store to refresh products
        if (window.refreshCustomerProducts) {
          window.refreshCustomerProducts();
        }
      } else {
        this.showToast(data.message || 'Failed to save product.', 'error');
      }
    } catch (err) {
      this.showToast('Error saving product.', 'error');
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async deleteProduct(id, permanent = false) {
    if (!confirm(permanent ? 'Are you sure you want to permanently delete this product?' : 'Are you sure you want to archive this product?')) {
      return;
    }

    try {
      const res = await fetch(`/api/products?id=${id}&permanent=${permanent}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      const data = await res.json();
      if (data.success) {
        this.showToast(data.message);
        await this.fetchProducts();
        await this.fetchDashboard();
        if (window.refreshCustomerProducts) {
          window.refreshCustomerProducts();
        }
      }
    } catch (err) {
      this.showToast('Error deleting product.', 'error');
    }
  }

  // Cloudinary Image Upload
  async uploadImage(base64Data, folder = 'mer-c/products') {
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ fileData: base64Data, folder })
      });
      const data = await res.json();
      if (data.success) {
        return { success: true, url: data.url, publicId: data.publicId };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  // Custom Work
  async fetchCustomWork() {
    try {
      const res = await fetch('/api/custom-work', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.customWorkItems = data.items;
        this.notify();
      }
    } catch (err) {
      console.warn('Custom work fetch error:', err);
    }
  }

  async saveCustomWork(itemData) {
    this.isLoading = true;
    this.notify();
    try {
      const res = await fetch('/api/custom-work', {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(itemData)
      });
      const data = await res.json();
      if (data.success) {
        this.showToast('Showcase photo added.');
        this.isAddCustomWorkOpen = false;
        await this.fetchCustomWork();
      } else {
        this.showToast(data.message || 'Failed to add showcase item.', 'error');
      }
    } catch (err) {
      this.showToast('Error saving showcase item.', 'error');
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async deleteCustomWork(id) {
    if (!confirm('Are you sure you want to remove this showcase photo?')) return;
    try {
      const res = await fetch(`/api/custom-work?id=${id}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      const data = await res.json();
      if (data.success) {
        this.showToast('Showcase item removed.');
        await this.fetchCustomWork();
      }
    } catch (err) {
      this.showToast('Error deleting item.', 'error');
    }
  }

  // Settings
  async fetchSettings(options = {}) {
    try {
      const res = await fetch('/api/settings', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.settings = data.settings;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Settings fetch error:', err);
    }
  }

  async saveSettings(settingsData) {
    this.isLoading = true;
    this.notify();
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(settingsData)
      });
      const data = await res.json();
      if (data.success) {
        this.showToast('Settings saved successfully.');
        this.settings = data.settings;
      }
    } catch (err) {
      this.showToast('Error updating settings.', 'error');
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }
}

const adminStore = new AdminStore();


/* --- src/admin/AdminLogin.js --- */
/**
 * Admin Login Page Component
 * Minimalist, luxury aesthetic matching Mer C. brand identity.
 */



let showPassword = false;

window.toggleAdminPasswordVisibility = () => {
  showPassword = !showPassword;
  const input = document.getElementById('admin-password-input');
  if (input) {
    input.type = showPassword ? 'text' : 'password';
  }
  const eyeIcon = document.getElementById('admin-eye-icon');
  if (eyeIcon) {
    eyeIcon.innerHTML = showPassword 
      ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />`
      : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`;
  }
};

window.handleAdminLoginSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const username = form.username.value;
  const password = form.password.value;
  await adminStore.login(username, password);
};

function AdminLogin(state) {
  const { isLoading, errorMessage } = state;

  return `
    <div class="min-h-screen bg-[#F0F4F8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <!-- BRAND LOGO -->
        <span class="font-serif text-4xl text-[#0F172A] tracking-tight font-medium">
          Mer C.
        </span>
        <h2 class="mt-2 text-xs uppercase tracking-[0.25em] text-[#64748B] font-semibold">
          Admin Dashboard
        </h2>
        <div class="w-10 h-[1.5px] bg-[#0F172A] mx-auto mt-3"></div>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div class="bg-white py-8 px-6 sm:px-10 rounded-2xl border border-[#CBD5E1] shadow-sm">
          
          ${errorMessage ? `
            <div class="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2 animate-fadeIn">
              <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>${errorMessage}</span>
            </div>
          ` : ''}

          <form onsubmit="handleAdminLoginSubmit(event)" class="space-y-5">
            <div>
              <label for="admin-username" class="block text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5">
                Admin Username
              </label>
              <input id="admin-username" 
                     name="username" 
                     type="text" 
                     required 
                     autocomplete="username"
                     placeholder="e.g. admin"
                     class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] focus:border-[#0F172A] text-[#0F172A] transition-all">
            </div>

            <div>
              <label for="admin-password-input" class="block text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5">
                Password
              </label>
              <div class="relative">
                <input id="admin-password-input" 
                       name="password" 
                       type="password" 
                       required 
                       autocomplete="current-password"
                       placeholder="••••••••"
                       class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] focus:border-[#0F172A] text-[#0F172A] pr-10 transition-all">
                
                <button type="button" 
                        onclick="toggleAdminPasswordVisibility()" 
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-[#64748B] hover:text-[#0F172A] focus:outline-none">
                  <svg id="admin-eye-icon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" 
                      ${isLoading ? 'disabled' : ''}
                      class="w-full py-3.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded transition-all shadow-sm flex items-center justify-center space-x-2">
                ${isLoading ? `
                  <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>AUTHENTICATING...</span>
                ` : `
                  <span>LOG IN TO DASHBOARD</span>
                `}
              </button>
            </div>
          </form>

          <div class="mt-6 pt-5 border-t border-[#E2E9F0] text-center">
            <a href="#hero" 
               class="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors inline-flex items-center space-x-1">
              <span>← Return to Public Website</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  `;
}


/* --- src/admin/AdminDashboard.js --- */
/**
 * Mer C. — Professional Admin Dashboard Component
 * Full-featured e-commerce management center with real-time MongoDB Atlas metrics,
 * order status workflows, Cloudinary image upload, and portfolio controls.
 */



let pendingProductImages = [];
let isUploadingImage = false;

// Global helper attachments for modal and form interactions
window.adminSetTab = (tab) => adminStore.setTab(tab);
window.adminToggleSidebar = () => adminStore.toggleSidebar();
window.adminLogout = () => adminStore.logout();

window.adminOpenOrder = (orderId) => {
  const order = adminStore.getState().orders.find(o => o.orderId === orderId);
  if (order) adminStore.selectOrder(order);
};

window.adminCloseOrderDrawer = () => adminStore.closeOrderDrawer();

window.adminUpdateStatus = async (orderId, newStatus) => {
  await adminStore.updateOrderStatus(orderId, { status: newStatus });
};

window.adminSaveOrderDetails = async (e, orderId) => {
  e.preventDefault();
  const form = e.target;
  const courierName = form.courierName ? form.courierName.value.trim() : '';
  const trackingNumber = form.trackingNumber ? form.trackingNumber.value.trim() : '';
  const trackingUrl = form.trackingUrl ? form.trackingUrl.value.trim() : '';
  const status = form.status ? form.status.value : undefined;
  const estimatedDelivery = form.estimatedDelivery ? form.estimatedDelivery.value.trim() : '';
  const paymentStatus = form.paymentStatus ? form.paymentStatus.value : undefined;
  const adminNotes = form.adminNotes ? form.adminNotes.value.trim() : undefined;

  const payload = { courierName, trackingNumber, trackingUrl, estimatedDelivery };
  if (status) payload.status = status;
  if (paymentStatus) payload.paymentStatus = paymentStatus;
  if (adminNotes !== undefined) payload.adminNotes = adminNotes;

  await adminStore.updateOrderStatus(orderId, payload);
};

// Product Modal Handlers
window.adminOpenAddProduct = () => {
  pendingProductImages = [];
  adminStore.openAddProductModal();
};

window.adminOpenEditProduct = (id) => {
  const p = adminStore.getState().products.find(item => item.id === id);
  if (p) {
    pendingProductImages = Array.isArray(p.images) ? [...p.images] : [];
    adminStore.openEditProductModal(p);
  }
};

window.adminCloseProductModal = () => adminStore.closeProductModal();

window.adminHandleImageFiles = async (input) => {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];

  // Validation
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  if (!validTypes.includes(file.type)) {
    alert('Please upload a JPG, PNG, or WEBP image.');
    return;
  }

  isUploadingImage = true;
  adminStore.notify();

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    const result = await adminStore.uploadImage(base64Data, 'mer-c/products');
    isUploadingImage = false;

    if (result.success) {
      pendingProductImages.push(result.url);
      adminStore.showToast('Image uploaded to Cloudinary.');
    } else {
      adminStore.showToast(result.message || 'Upload failed.', 'error');
    }
    adminStore.notify();
  };
  reader.readAsDataURL(file);
};

let adminProductCategoryFilter = 'ALL';
window.adminSetProductCategoryFilter = (cat) => {
  adminProductCategoryFilter = cat;
  adminStore.notify();
};

window.adminOnCategoryChange = (category) => {
  const candleSpecs = document.getElementById('admin-candle-specs');
  const resinSpecs = document.getElementById('admin-resin-specs');
  const candleSubcat = document.getElementById('admin-candle-subcat-group');
  if (category === 'Resin Art') {
    if (candleSpecs) candleSpecs.classList.add('hidden');
    if (candleSubcat) candleSubcat.classList.add('hidden');
    if (resinSpecs) resinSpecs.classList.remove('hidden');
  } else {
    if (candleSpecs) candleSpecs.classList.remove('hidden');
    if (candleSubcat) candleSubcat.classList.remove('hidden');
    if (resinSpecs) resinSpecs.classList.add('hidden');
  }
};

window.adminRemoveProductImage = (index) => {
  pendingProductImages.splice(index, 1);
  adminStore.notify();
};

window.adminSaveProductSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const state = adminStore.getState();
  const editing = state.editingProduct;

  const mainCat = form.mainCategory ? form.mainCategory.value : (form.category ? form.category.value : 'Candles');
  const isResin = mainCat === 'Resin Art';

  let finalCategory = mainCat;
  if (!isResin && form.candleSubcategory && form.candleSubcategory.value) {
    finalCategory = form.candleSubcategory.value;
  }

  const specifications = isResin ? {
    material: form.material ? form.material.value.trim() : '',
    finish: form.finish ? form.finish.value.trim() : '',
    dimensions: form.resinDimensions ? form.resinDimensions.value.trim() : '',
    weight: form.resinWeight ? form.resinWeight.value.trim() : '',
    color: form.color ? form.color.value.trim() : ''
  } : {
    waxType: form.waxType ? form.waxType.value.trim() : '',
    weight: form.weight ? form.weight.value.trim() : '',
    fragrance: form.fragrance ? form.fragrance.value.trim() : '',
    container: form.container ? form.container.value.trim() : '',
    dimensions: form.dimensions ? form.dimensions.value.trim() : ''
  };

  const careInstructions = isResin ? (
    form.resinCare && form.resinCare.value ? form.resinCare.value.split('\n').map(s => s.trim()).filter(Boolean) : [
      "Wipe gently with a soft damp microfiber cloth.",
      "Avoid direct high heat, harsh chemicals, and abrasive scrubbers."
    ]
  ) : (
    form.candleCare && form.candleCare.value ? form.candleCare.value.split('\n').map(s => s.trim()).filter(Boolean) : [
      "Trim wick to 1/4 inch before lighting.",
      "Burn on heat-resistant surface away from drafts."
    ]
  );

  const productData = {
    id: editing ? editing.id : undefined,
    name: form.name.value.trim(),
    subtitle: form.subtitle.value.trim(),
    category: finalCategory,
    mainCategory: isResin ? 'Resin Art' : 'Candles',
    price: Number(form.price.value),
    originalPrice: form.originalPrice.value ? Number(form.originalPrice.value) : undefined,
    stock: Number(form.stock.value),
    shortDescription: form.shortDescription.value.trim(),
    fullDescription: form.fullDescription.value.trim(),
    images: pendingProductImages.length > 0 ? pendingProductImages : (editing && editing.images ? editing.images : []),
    specifications,
    careInstructions,
    isActive: form.isActive ? form.isActive.checked : true
  };

  await adminStore.saveProduct(productData);
};

window.adminToggleProductActive = async (id, currentActive) => {
  await adminStore.saveProduct({ id, isActive: !currentActive });
};

window.adminDeleteProduct = async (id) => {
  await adminStore.deleteProduct(id, false);
};

// Custom Work Modal Handlers
let pendingWorkImage = '';
window.adminOpenAddCustomWork = () => {
  pendingWorkImage = '';
  adminStore.isAddCustomWorkOpen = true;
  adminStore.notify();
};

window.adminCloseAddCustomWork = () => {
  adminStore.isAddCustomWorkOpen = false;
  adminStore.notify();
};

window.adminHandleWorkImageFile = async (input) => {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  isUploadingImage = true;
  adminStore.notify();

  const reader = new FileReader();
  reader.onload = async (e) => {
    const result = await adminStore.uploadImage(e.target.result, 'mer-c/custom-work');
    isUploadingImage = false;
    if (result.success) {
      pendingWorkImage = result.url;
      adminStore.showToast('Showcase image uploaded.');
    } else {
      adminStore.showToast('Upload failed.', 'error');
    }
    adminStore.notify();
  };
  reader.readAsDataURL(file);
};

window.adminSaveCustomWorkSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  if (!pendingWorkImage) {
    alert('Please upload a showcase image first.');
    return;
  }

  await adminStore.saveCustomWork({
    title: form.title.value,
    category: form.category.value,
    client: form.client.value,
    src: pendingWorkImage
  });
};

window.adminDeleteCustomWork = async (id) => {
  await adminStore.deleteCustomWork(id);
};

// Settings Form Handler
window.adminSaveSettingsSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  await adminStore.saveSettings({
    storeName: form.storeName.value,
    whatsappNumber: form.whatsappNumber.value,
    instagramUrl: form.instagramUrl ? form.instagramUrl.value : undefined,
    freeShippingThreshold: Number(form.freeShippingThreshold.value),
    standardShippingFee: Number(form.standardShippingFee.value),
    lowStockThreshold: Number(form.lowStockThreshold.value)
  });
};

// Status badge helper
function getStatusBadge(status) {
  const map = {
    NEW: 'bg-blue-100 text-blue-800 border-blue-200',
    CONFIRMED: 'bg-sky-100 text-sky-800 border-sky-200',
    PROCESSING: 'bg-amber-100 text-amber-800 border-amber-200',
    PACKED: 'bg-purple-100 text-purple-800 border-purple-200',
    SHIPPED: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    DELIVERED: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    CANCELLED: 'bg-rose-100 text-rose-800 border-rose-200'
  };
  return map[status] || 'bg-slate-100 text-slate-800 border-slate-200';
}

function AdminDashboard(state) {
  const {
    user,
    activeTab,
    isSidebarOpen,
    dashboardStats,
    recentOrders,
    orders,
    ordersTotal,
    unreadOrdersCount,
    selectedOrder,
    ordersFilter,
    products,
    editingProduct,
    isAddProductOpen,
    customWorkItems,
    isAddCustomWorkOpen,
    settings,
    isLoading,
    toast
  } = state;

  const stats = dashboardStats || {
    totalOrders: 0,
    newOrders: 0,
    processingOrders: 0,
    shippedOrders: 0,
    deliveredOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    lowStockCount: 0
  };

  return `
    <div class="min-h-screen bg-[#F0F4F8] flex flex-col font-sans antialiased text-[#0F172A]">
      
      <!-- TOP NAVIGATION BAR -->
      <header class="bg-white border-b border-[#E2E9F0] sticky top-0 z-30 shadow-xs">
        <div class="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          
          <!-- LEFT: LOGO & MOBILE HAMBURGER -->
          <div class="flex items-center space-x-3">
            <button type="button" onclick="adminToggleSidebar()" class="lg:hidden p-2 text-[#475569] hover:text-[#0F172A] rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div class="flex items-center space-x-2">
              <span class="font-serif text-2xl text-[#0F172A] font-semibold tracking-tight">Mer C.</span>
              <span class="text-[10px] uppercase tracking-widest bg-[#F0F4F8] text-[#475569] font-bold px-2 py-0.5 rounded border border-[#CBD5E1]">ADMIN</span>
            </div>
          </div>

          <!-- CENTER: ACTIVE TAB TITLE (DESKTOP) -->
          <div class="hidden sm:block text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
            ${activeTab.replace('-', ' ')}
          </div>

          <!-- RIGHT: ACTION CONTROLS & LOGOUT -->
          <div class="flex items-center space-x-3 sm:space-x-4">
            <button type="button" 
                    onclick="adminStore.loadInitialData(); adminStore.showToast('Data refreshed.');" 
                    title="Refresh Data"
                    class="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F0F4F8] rounded-full transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </button>

            <!-- Storefront Link -->
            <a href="#hero" target="_blank" 
               title="View Public Store"
               class="hidden sm:flex items-center space-x-1.5 text-xs text-[#475569] hover:text-[#0F172A] px-2.5 py-1.5 rounded border border-[#E2E9F0] hover:bg-[#F0F4F8]">
              <span>View Store</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>

            <!-- Admin Profile Indicator -->
            <div class="flex items-center space-x-2 pl-2 border-l border-[#E2E9F0]">
              <span class="w-7 h-7 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-xs font-semibold">
                ${user ? user.username.charAt(0).toUpperCase() : 'A'}
              </span>
              <span class="hidden md:inline text-xs font-medium text-[#334155]">${user ? user.username : 'Admin'}</span>
            </div>

            <!-- Logout Button -->
            <button type="button" 
                    onclick="adminLogout()" 
                    class="p-1.5 text-xs text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded transition-colors flex items-center space-x-1" 
                    title="Logout">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              <span class="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      <!-- MAIN LAYOUT: SIDEBAR + CONTENT -->
      <div class="flex-grow flex">
        
        <!-- SIDEBAR -->
        <aside class="${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#E2E9F0] transition-transform duration-300 ease-in-out flex flex-col justify-between shadow-lg lg:shadow-none">
          
          <div class="py-6 px-4 space-y-1.5">
            <div class="px-3 pb-3 text-[10px] uppercase tracking-[0.24em] font-bold text-[#94A3B8]">
              NAVIGATION
            </div>

            <!-- Dashboard Overview -->
            <button type="button" 
                    onclick="adminSetTab('dashboard')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'dashboard' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span>Dashboard</span>
            </button>

            <!-- Orders with Unread Badge -->
            <button type="button" 
                    onclick="adminSetTab('orders')" 
                    class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'orders' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <div class="flex items-center space-x-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <span>Orders</span>
              </div>
              ${stats.newOrders > 0 ? `
                <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-500 text-white">
                  ${stats.newOrders}
                </span>
              ` : ''}
            </button>

            <!-- Products -->
            <button type="button" 
                    onclick="adminSetTab('products')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'products' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              <span>Products</span>
            </button>

            <!-- Custom Work (Portfolio) -->
            <button type="button" 
                    onclick="adminSetTab('custom-work')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'custom-work' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Custom Work</span>
            </button>

            <!-- Customers -->
            <button type="button" 
                    onclick="adminSetTab('customers')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'customers' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <span>Customers</span>
            </button>

            <div class="pt-4 px-3 pb-2 text-[10px] uppercase tracking-[0.24em] font-bold text-[#94A3B8]">
              SYSTEM
            </div>

            <!-- Settings -->
            <button type="button" 
                    onclick="adminSetTab('settings')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'settings' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Settings</span>
            </button>
          </div>

          <!-- Bottom Footer in Sidebar -->
          <div class="p-4 border-t border-[#E2E9F0] text-[11px] text-[#94A3B8] text-center">
            Mer C. E-Commerce Platform v1.0
          </div>
        </aside>

        <!-- MAIN VIEWPORT CONTENT -->
        <main class="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          
          ${activeTab === 'dashboard' ? renderOverviewTab(stats, recentOrders) : ''}
          ${activeTab === 'orders' ? renderOrdersTab(orders, ordersTotal, ordersFilter) : ''}
          ${activeTab === 'products' ? renderProductsTab(products) : ''}
          ${activeTab === 'custom-work' ? renderCustomWorkTab(customWorkItems) : ''}
          ${activeTab === 'customers' ? renderCustomersTab(orders) : ''}
          ${activeTab === 'settings' ? renderSettingsTab(settings) : ''}

        </main>

      </div>

      <!-- SLIDE-OVER ORDER DETAIL MODAL -->
      ${selectedOrder ? renderOrderDetailDrawer(selectedOrder) : ''}

      <!-- ADD / EDIT PRODUCT MODAL -->
      ${isAddProductOpen ? renderProductModal(editingProduct, pendingProductImages, isUploadingImage) : ''}

      <!-- ADD CUSTOM WORK MODAL -->
      ${isAddCustomWorkOpen ? renderCustomWorkModal(pendingWorkImage, isUploadingImage) : ''}

    </div>
  `;
}

/* =========================================================================
   TAB RENDERERS
   ========================================================================= */

function renderOverviewTab(stats, recentOrders) {
  return `
    <div class="space-y-8">
      
      <!-- WELCOME & QUICK ACTIONS -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Dashboard Overview</h1>
          <p class="text-xs text-[#64748B] mt-0.5">Real-time performance metrics and recent customer activity.</p>
        </div>
        <div class="flex items-center space-x-3">
          <button type="button" 
                  onclick="adminOpenAddProduct()" 
                  class="px-4 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-xs flex items-center space-x-2">
            <span>+ ADD PRODUCT</span>
          </button>
          <button type="button" 
                  onclick="adminSetTab('orders')" 
                  class="px-4 py-2.5 bg-white border border-[#CBD5E1] hover:bg-[#F0F4F8] text-[#0F172A] text-xs uppercase tracking-wider font-medium rounded">
            <span>VIEW ALL ORDERS</span>
          </button>
        </div>
      </div>

      <!-- METRIC CARDS GRID -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- Total Revenue -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs">
          <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">Total Revenue</span>
          <div class="mt-2 font-serif text-3xl font-semibold text-[#0F172A]">&#8377;${stats.totalRevenue.toLocaleString('en-IN')}</div>
          <span class="text-[10px] text-emerald-600 font-medium">From non-cancelled orders</span>
        </div>

        <!-- Total Orders -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs">
          <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">Total Orders</span>
          <div class="mt-2 font-serif text-3xl font-semibold text-[#0F172A]">${stats.totalOrders}</div>
          <span class="text-[10px] text-[#64748B]">Lifetime customer checkouts</span>
        </div>

        <!-- New Orders -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs ${stats.newOrders > 0 ? 'ring-2 ring-blue-500/20' : ''}">
          <div class="flex justify-between items-center">
            <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">New Orders</span>
            ${stats.newOrders > 0 ? `<span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>` : ''}
          </div>
          <div class="mt-2 font-serif text-3xl font-semibold text-blue-700">${stats.newOrders}</div>
          <span class="text-[10px] text-blue-600 font-medium">Awaiting admin review</span>
        </div>

        <!-- Low Stock Alert -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs ${stats.lowStockCount > 0 ? 'bg-amber-50/50 border-amber-200' : ''}">
          <span class="text-[11px] uppercase tracking-wider font-semibold ${stats.lowStockCount > 0 ? 'text-amber-800' : 'text-[#64748B]'}">Low Stock Items</span>
          <div class="mt-2 font-serif text-3xl font-semibold ${stats.lowStockCount > 0 ? 'text-amber-700' : 'text-[#0F172A]'}">${stats.lowStockCount}</div>
          <span class="text-[10px] ${stats.lowStockCount > 0 ? 'text-amber-600' : 'text-[#64748B]'} font-medium">Inventory &le; 15 units</span>
        </div>

      </div>

      <!-- SECONDARY METRICS STRIP -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-[#E2E9F0] text-center text-xs">
        <div>
          <span class="text-[#64748B] block">Processing</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.processingOrders}</strong>
        </div>
        <div class="border-l border-[#E2E9F0]">
          <span class="text-[#64748B] block">Shipped</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.shippedOrders}</strong>
        </div>
        <div class="border-l border-[#E2E9F0]">
          <span class="text-[#64748B] block">Delivered</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.deliveredOrders}</strong>
        </div>
        <div class="border-l border-[#E2E9F0]">
          <span class="text-[#64748B] block">Total Products</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.totalProducts}</strong>
        </div>
      </div>

      <!-- RECENT ORDERS SECTION -->
      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        <div class="p-5 border-b border-[#E2E9F0] flex items-center justify-between">
          <h2 class="font-serif text-xl text-[#0F172A] font-medium">Recent Orders</h2>
          <button type="button" onclick="adminSetTab('orders')" class="text-xs text-blue-700 hover:text-blue-900 font-semibold">
            View All &rarr;
          </button>
        </div>

        ${recentOrders.length === 0 ? `
          <div class="text-center py-12 text-xs text-[#94A3B8]">
            No orders found in database yet. Place a test order from checkout to see it appear here.
          </div>
        ` : `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#334155]">
              <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
                <tr>
                  <th class="p-3.5 pl-5">Order ID</th>
                  <th class="p-3.5">Customer</th>
                  <th class="p-3.5">Date</th>
                  <th class="p-3.5">Items</th>
                  <th class="p-3.5">Total</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 pr-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E9F0]">
                ${recentOrders.map(order => `
                  <tr class="hover:bg-[#F8FAFC] transition-colors ${!order.isRead ? 'bg-blue-50/40 font-medium' : ''}">
                    <td class="p-3.5 pl-5 font-mono text-[#0F172A] font-semibold">${order.orderId}</td>
                    <td class="p-3.5">${order.customer.name}</td>
                    <td class="p-3.5 text-[#64748B]">${new Date(order.createdAt).toLocaleDateString()}</td>
                    <td class="p-3.5">${order.itemCount || (order.items ? order.items.length : 1)}</td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${order.totalAmount}</td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold border ${getStatusBadge(order.status)}">
                        ${order.status}
                      </span>
                    </td>
                    <td class="p-3.5 pr-5 text-right">
                      <button type="button" onclick="adminOpenOrder('${order.orderId}')" class="px-2.5 py-1 bg-[#1E293B] text-white rounded text-[11px] hover:bg-[#334155]">
                        View
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

    </div>
  `;
}

function renderOrdersTab(orders, total, filter) {
  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Order Management</h1>
          <p class="text-xs text-[#64748B]">Viewing ${orders.length} of ${total} orders.</p>
        </div>
      </div>

      <!-- SEARCH & FILTER BAR -->
      <div class="bg-white p-4 rounded-xl border border-[#E2E9F0] shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        
        <!-- Search Input -->
        <div class="relative w-full md:w-80">
          <input type="text" 
                 id="admin-order-search-input"
                 placeholder="Search Order ID, Name, Phone..." 
                 value="${filter.search}"
                 oninput="adminStore.setOrderFilter('search', this.value)"
                 class="w-full pl-9 pr-4 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
          <svg class="w-4 h-4 text-[#94A3B8] absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>

        <div class="flex items-center space-x-3 w-full md:w-auto">
          <!-- Status Filter -->
          <select onchange="adminStore.setOrderFilter('status', this.value)" 
                  class="px-3 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
            <option value="ALL" ${filter.status === 'ALL' ? 'selected' : ''}>All Statuses</option>
            <option value="NEW" ${filter.status === 'NEW' ? 'selected' : ''}>New</option>
            <option value="CONFIRMED" ${filter.status === 'CONFIRMED' ? 'selected' : ''}>Confirmed</option>
            <option value="PROCESSING" ${filter.status === 'PROCESSING' ? 'selected' : ''}>Processing</option>
            <option value="PACKED" ${filter.status === 'PACKED' ? 'selected' : ''}>Packed</option>
            <option value="SHIPPED" ${filter.status === 'SHIPPED' ? 'selected' : ''}>Shipped</option>
            <option value="DELIVERED" ${filter.status === 'DELIVERED' ? 'selected' : ''}>Delivered</option>
            <option value="CANCELLED" ${filter.status === 'CANCELLED' ? 'selected' : ''}>Cancelled</option>
          </select>

          <!-- Date Range Filter -->
          <select onchange="adminStore.setOrderFilter('date', this.value)" 
                  class="px-3 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
            <option value="all" ${filter.date === 'all' ? 'selected' : ''}>All Time</option>
            <option value="today" ${filter.date === 'today' ? 'selected' : ''}>Today</option>
            <option value="yesterday" ${filter.date === 'yesterday' ? 'selected' : ''}>Yesterday</option>
            <option value="7d" ${filter.date === '7d' ? 'selected' : ''}>Last 7 Days</option>
            <option value="30d" ${filter.date === '30d' ? 'selected' : ''}>Last 30 Days</option>
          </select>
        </div>

      </div>

      <!-- ORDERS TABLE -->
      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        ${orders.length === 0 ? `
          <div class="text-center py-16 text-xs text-[#94A3B8]">
            No orders match the selected filters.
          </div>
        ` : `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#334155]">
              <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
                <tr>
                  <th class="p-3.5 pl-5">Order ID</th>
                  <th class="p-3.5">Customer</th>
                  <th class="p-3.5">Contact</th>
                  <th class="p-3.5">Date</th>
                  <th class="p-3.5">Items</th>
                  <th class="p-3.5">Amount</th>
                  <th class="p-3.5">Payment</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 pr-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E9F0]">
                ${orders.map(order => `
                  <tr class="hover:bg-[#F8FAFC] transition-colors cursor-pointer ${!order.isRead ? 'bg-blue-50/40 font-medium' : ''}" 
                      onclick="adminOpenOrder('${order.orderId}')">
                    <td class="p-3.5 pl-5 font-mono text-[#0F172A] font-semibold flex items-center space-x-1.5">
                      ${!order.isRead ? `<span class="w-2 h-2 rounded-full bg-blue-500"></span>` : ''}
                      <span>${order.orderId}</span>
                    </td>
                    <td class="p-3.5">${order.customer.name}</td>
                    <td class="p-3.5 text-[#64748B]">${order.customer.phone || order.customer.email || '—'}</td>
                    <td class="p-3.5 text-[#64748B]">${new Date(order.createdAt).toLocaleDateString()}</td>
                    <td class="p-3.5">${order.itemCount || (order.items ? order.items.length : 1)} items</td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${order.totalAmount}</td>
                    <td class="p-3.5">
                      <div class="space-y-0.5">
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded inline-block ${order.paymentStatus === 'PAID' ? 'bg-emerald-100 text-emerald-800' : (order.paymentStatus === 'FAILED' ? 'bg-rose-100 text-rose-800' : 'bg-amber-50 text-amber-800')}">
                          ${order.paymentStatus || 'PENDING'}
                        </span>
                        <div class="text-[9px] text-[#64748B] uppercase tracking-wider font-medium">
                          ${order.paymentMethod === 'RAZORPAY' ? '⚡ Razorpay' : '💵 Cash on Delivery'}
                        </div>
                      </div>
                    </td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold border ${getStatusBadge(order.status)}">
                        ${order.status}
                      </span>
                    </td>
                    <td class="p-3.5 pr-5 text-right" onclick="event.stopPropagation()">
                      <button type="button" onclick="adminOpenOrder('${order.orderId}')" class="px-3 py-1 bg-[#1E293B] text-white rounded text-[11px] hover:bg-[#334155]">
                        View
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

    </div>
  `;
}

function renderOrderDetailDrawer(order) {
  const customerPhoneClean = order.customer.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${customerPhoneClean}?text=${encodeURIComponent(`Hello ${order.customer.name}, this is Mer C. regarding your order ${order.orderId}.`)}`;

  return `
    <div class="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end"
         onclick="if(event.target === this) adminCloseOrderDrawer()">
      
      <div class="w-full max-w-2xl bg-white h-full shadow-2xl overflow-y-auto flex flex-col justify-between">
        
        <!-- HEADER -->
        <div class="p-5 sm:p-6 border-b border-[#E2E9F0] flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div class="flex items-center space-x-3">
              <h2 class="font-mono text-xl text-[#0F172A] font-bold">${order.orderId}</h2>
              <span class="px-2.5 py-0.5 rounded text-xs font-semibold border ${getStatusBadge(order.status)}">
                ${order.status}
              </span>
            </div>
            <p class="text-xs text-[#64748B] mt-1">Placed on ${new Date(order.createdAt).toLocaleString()}</p>
          </div>

          <button type="button" onclick="adminCloseOrderDrawer()" class="p-2 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-[#F0F4F8]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- BODY CONTENT -->
        <div class="p-5 sm:p-6 space-y-6 flex-grow">
          
          <!-- QUICK ACTION: WHATSAPP CUSTOMER -->
          ${order.customer.phone ? `
            <a href="${whatsappUrl}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-xs transition-colors">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
              </svg>
              <span>CONTACT CUSTOMER ON WHATSAPP</span>
            </a>
          ` : ''}

          <!-- ORDER STATUS CHANGER -->
          <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-2">
            <label class="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">Update Status</label>
            <div class="flex items-center space-x-2">
              <select onchange="adminUpdateStatus('${order.orderId}', this.value)" 
                      class="flex-grow px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
                <option value="NEW" ${order.status === 'NEW' ? 'selected' : ''}>NEW (Received)</option>
                <option value="CONFIRMED" ${order.status === 'CONFIRMED' ? 'selected' : ''}>CONFIRMED</option>
                <option value="PROCESSING" ${order.status === 'PROCESSING' ? 'selected' : ''}>PROCESSING (In Workshop)</option>
                <option value="PACKED" ${order.status === 'PACKED' ? 'selected' : ''}>PACKED</option>
                <option value="SHIPPED" ${order.status === 'SHIPPED' ? 'selected' : ''}>SHIPPED (With Courier)</option>
                <option value="OUT_FOR_DELIVERY" ${order.status === 'OUT_FOR_DELIVERY' ? 'selected' : ''}>OUT FOR DELIVERY</option>
                <option value="DELIVERED" ${order.status === 'DELIVERED' ? 'selected' : ''}>DELIVERED</option>
                <option value="CANCELLED" ${order.status === 'CANCELLED' ? 'selected' : ''}>CANCELLED</option>
              </select>
            </div>
          </div>

          <!-- CUSTOMER INFORMATION & ADDRESS -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-1 text-xs">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-1">Customer Details</span>
              <div class="font-bold text-[#0F172A]">${order.customer.name}</div>
              <div>Phone: <a href="tel:${order.customer.phone}" class="text-blue-700 hover:underline">${order.customer.phone || '—'}</a></div>
              <div>Email: <a href="mailto:${order.customer.email}" class="text-blue-700 hover:underline">${order.customer.email || '—'}</a></div>
            </div>

            <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-1 text-xs">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-1">Shipping Address</span>
              <div class="text-[#334155]">${order.customer.address || '—'}</div>
              <div class="text-[#334155]">${order.customer.city || ''} ${order.customer.pincode ? `- ${order.customer.pincode}` : ''}</div>
            </div>
          </div>

          <!-- ORDER ITEMS LIST -->
          <div>
            <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-3">Order Items</span>
            <div class="border border-[#E2E9F0] rounded-xl divide-y divide-[#E2E9F0] overflow-hidden">
              ${(order.items || []).map(item => `
                <div class="p-3.5 flex items-center space-x-3 text-xs bg-white">
                  ${item.imageAtPurchase ? `
                    <img src="${item.imageAtPurchase}" class="w-12 h-12 rounded object-cover border border-[#E2E9F0] bg-[#F0F4F8]">
                  ` : `
                    <div class="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-[#94A3B8] font-bold">🕯️</div>
                  `}
                  <div class="flex-grow">
                    <div class="font-semibold text-[#0F172A]">${item.productName}</div>
                    <div class="text-[#64748B] text-[11px]">&#8377;${item.priceAtPurchase} &times; ${item.quantity}</div>
                  </div>
                  <div class="font-mono font-semibold text-[#0F172A]">&#8377;${item.subtotal || (item.priceAtPurchase * item.quantity)}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- ORDER TOTALS SUMMARY -->
          <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-2 text-xs">
            <div class="flex justify-between text-[#475569]">
              <span>Subtotal</span>
              <span>&#8377;${order.subtotal}</span>
            </div>
            <div class="flex justify-between text-[#475569]">
              <span>Delivery</span>
              <span class="font-medium text-emerald-700">${order.shipping === 0 || !order.shipping ? 'FREE (&#8377;0)' : `&#8377;${order.shipping}`}</span>
            </div>
            <div class="flex justify-between font-serif text-base font-bold text-[#0F172A] pt-2 border-t border-[#CBD5E1]">
              <span>Total Paid/Due</span>
              <span>&#8377;${order.totalAmount}</span>
            </div>
          </div>

          <!-- PAYMENT & GATEWAY DETAILS -->
          <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-2 text-xs">
            <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-1">Payment Information</span>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <span class="text-[10px] text-[#64748B] block">Method</span>
                <span class="font-semibold text-[#0F172A]">${order.paymentMethod === 'RAZORPAY' ? '⚡ Razorpay Online' : '💵 Cash on Delivery'}</span>
              </div>
              <div>
                <span class="text-[10px] text-[#64748B] block">Payment Status</span>
                <span class="font-semibold ${order.paymentStatus === 'PAID' ? 'text-emerald-700' : (order.paymentStatus === 'FAILED' ? 'text-rose-700' : 'text-amber-700')}">
                  ${order.paymentStatus || 'PENDING'} ${order.paymentStatus === 'PAID' ? '✓' : ''}
                </span>
              </div>
            </div>

            ${(order.razorpayOrderId || (order.payment && order.payment.razorpayOrderId)) ? `
              <div class="pt-2 border-t border-[#CBD5E1] space-y-1">
                <div class="flex justify-between">
                  <span class="text-[10px] text-[#64748B]">Razorpay Order ID:</span>
                  <span class="font-mono text-[11px] text-[#0F172A] font-medium">${order.razorpayOrderId || order.payment.razorpayOrderId}</span>
                </div>
                ${(order.razorpayPaymentId || (order.payment && order.payment.razorpayPaymentId)) ? `
                  <div class="flex justify-between">
                    <span class="text-[10px] text-[#64748B]">Razorpay Payment ID:</span>
                    <span class="font-mono text-[11px] text-emerald-800 font-semibold">${order.razorpayPaymentId || order.payment.razorpayPaymentId}</span>
                  </div>
                ` : ''}
                ${order.razorpaySignatureVerified || (order.payment && order.payment.signatureVerified) ? `
                  <div class="flex justify-between">
                    <span class="text-[10px] text-[#64748B]">Signature Verification:</span>
                    <span class="text-[10px] text-emerald-700 font-bold">HMAC-SHA256 Verified ✓</span>
                  </div>
                ` : ''}
              </div>
            ` : ''}
          </div>

          <!-- EDITABLE COURIER DETAILS & NOTES FORM -->
          <form onsubmit="adminSaveOrderDetails(event, '${order.orderId}')" class="space-y-4 pt-2">
            <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block">Delivery & Courier Fulfillment</span>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Courier Name</label>
                <input type="text" name="courierName" value="${order.courierName || (order.shippingDetails && order.shippingDetails.courier) || ''}" placeholder="e.g. Delhivery / BlueDart / DTDC" 
                       class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Tracking Number / AWB</label>
                <input type="text" name="trackingNumber" value="${order.trackingNumber || (order.shippingDetails && order.shippingDetails.trackingNumber) || ''}" placeholder="e.g. DL987654321" 
                       class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>
            </div>

            <div>
              <label class="block text-[11px] text-[#475569] mb-1">Live Courier Tracking URL</label>
              <input type="url" name="trackingUrl" value="${order.trackingUrl || (order.shippingDetails && order.shippingDetails.trackingUrl) || ''}" placeholder="https://www.delhivery.com/track/package/..." 
                     class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Order Status</label>
                <select name="status" class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded text-[#0F172A] font-semibold">
                  <option value="NEW" ${order.status === 'NEW' ? 'selected' : ''}>NEW</option>
                  <option value="CONFIRMED" ${order.status === 'CONFIRMED' ? 'selected' : ''}>CONFIRMED</option>
                  <option value="PROCESSING" ${order.status === 'PROCESSING' ? 'selected' : ''}>PROCESSING</option>
                  <option value="PACKED" ${order.status === 'PACKED' ? 'selected' : ''}>PACKED</option>
                  <option value="SHIPPED" ${order.status === 'SHIPPED' ? 'selected' : ''}>SHIPPED</option>
                  <option value="OUT_FOR_DELIVERY" ${order.status === 'OUT_FOR_DELIVERY' ? 'selected' : ''}>OUT FOR DELIVERY</option>
                  <option value="DELIVERED" ${order.status === 'DELIVERED' ? 'selected' : ''}>DELIVERED</option>
                  <option value="CANCELLED" ${order.status === 'CANCELLED' ? 'selected' : ''}>CANCELLED</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Estimated Delivery</label>
                <input type="text" name="estimatedDelivery" value="${order.estimatedDelivery || (order.shippingDetails && order.shippingDetails.estimatedDelivery) || ''}" placeholder="e.g. 10 Sep 2026 or 3-5 Days" 
                       class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>
            </div>

            <div>
              <label class="block text-[11px] text-[#475569] mb-1">Payment Status</label>
              <select name="paymentStatus" class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
                <option value="PENDING" ${order.paymentStatus === 'PENDING' ? 'selected' : ''}>PENDING</option>
                <option value="PAID" ${order.paymentStatus === 'PAID' ? 'selected' : ''}>PAID</option>
                <option value="FAILED" ${order.paymentStatus === 'FAILED' ? 'selected' : ''}>FAILED</option>
                <option value="REFUNDED" ${order.paymentStatus === 'REFUNDED' ? 'selected' : ''}>REFUNDED</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] text-[#475569] mb-1">Admin Internal Notes (Private)</label>
              <textarea name="adminNotes" rows="2" placeholder="Private internal notes about this order..." 
                        class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">${order.adminNotes || ''}</textarea>
            </div>

            <button type="submit" class="w-full py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors shadow-xs">
              SAVE SHIPPING DETAILS
            </button>
          </form>

        </div>

      </div>

    </div>
  `;
}

function renderProductsTab(products) {
  const totalCount = products.length;
  const candleCount = products.filter(p => p.category !== 'Resin Art' && p.mainCategory !== 'Resin Art').length;
  const resinCount = products.filter(p => p.category === 'Resin Art' || p.mainCategory === 'Resin Art').length;

  const filtered = products.filter(p => {
    if (adminProductCategoryFilter === 'Candles') {
      return p.category !== 'Resin Art' && p.mainCategory !== 'Resin Art';
    }
    if (adminProductCategoryFilter === 'Resin Art') {
      return p.category === 'Resin Art' || p.mainCategory === 'Resin Art';
    }
    return true;
  });

  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Product Catalog</h1>
          <p class="text-xs text-[#64748B]">Manage public candles, resin art, prices, stock levels, and Cloudinary photography.</p>
        </div>
        <button type="button" 
                onclick="adminOpenAddProduct()" 
                class="px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-xs flex items-center space-x-2">
          <span>+ ADD NEW PRODUCT</span>
        </button>
      </div>

      <!-- CATEGORY FILTER TABS -->
      <div class="flex items-center space-x-2 border-b border-[#E2E9F0] pb-2">
        <button type="button" 
                onclick="adminSetProductCategoryFilter('ALL')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${adminProductCategoryFilter === 'ALL' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E9F0]'}">
          All (${totalCount})
        </button>
        <button type="button" 
                onclick="adminSetProductCategoryFilter('Candles')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${adminProductCategoryFilter === 'Candles' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E9F0]'}">
          Candles (${candleCount})
        </button>
        <button type="button" 
                onclick="adminSetProductCategoryFilter('Resin Art')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${adminProductCategoryFilter === 'Resin Art' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E9F0]'}">
          Resin Art (${resinCount})
        </button>
      </div>

      <!-- PRODUCTS TABLE -->
      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-[#334155]">
            <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
              <tr>
                <th class="p-3.5 pl-5">Product</th>
                <th class="p-3.5">Category</th>
                <th class="p-3.5">Price</th>
                <th class="p-3.5">Stock</th>
                <th class="p-3.5">Visibility</th>
                <th class="p-3.5 pr-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E2E9F0]">
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="6" class="text-center py-10 text-xs text-[#94A3B8]">
                    No products found in this category. Click "+ ADD NEW PRODUCT" to create one.
                  </td>
                </tr>
              ` : filtered.map(p => {
                const img = Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : '';
                const isResin = p.category === 'Resin Art' || p.mainCategory === 'Resin Art';
                return `
                  <tr class="hover:bg-[#F8FAFC] transition-colors ${p.isActive === false ? 'opacity-60 bg-slate-50' : ''}">
                    <td class="p-3.5 pl-5 flex items-center space-x-3">
                      <img src="${img}" class="w-12 h-12 rounded object-cover border border-[#E2E9F0] bg-[#F0F4F8]" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><text y=\\'.9em\\' font-size=\\'90\\'>${isResin ? '✨' : '🕯️'}</text></svg>'">
                      <div>
                        <div class="font-semibold text-[#0F172A] line-clamp-1">${p.name}</div>
                        <div class="text-[10px] text-[#64748B] font-mono">${p.id}</div>
                      </div>
                    </td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${isResin ? 'bg-sky-100 text-sky-800 border border-sky-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}">
                        ${isResin ? 'Resin Art' : p.category}
                      </span>
                    </td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${p.price}</td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${p.stock <= 15 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                        ${p.stock} in stock
                      </span>
                    </td>
                    <td class="p-3.5">
                      <button type="button" 
                              onclick="adminToggleProductActive('${p.id}', ${p.isActive !== false})" 
                              class="text-[10px] font-semibold px-2 py-0.5 rounded border ${p.isActive !== false ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-300'}">
                        ${p.isActive !== false ? 'Active (Live)' : 'Inactive (Hidden)'}
                      </button>
                    </td>
                    <td class="p-3.5 pr-5 text-right space-x-2">
                      <button type="button" onclick="adminOpenEditProduct('${p.id}')" class="px-2.5 py-1 bg-slate-100 text-[#0F172A] hover:bg-slate-200 rounded text-[11px] font-medium">
                        Edit
                      </button>
                      <button type="button" onclick="adminDeleteProduct('${p.id}')" class="px-2.5 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded text-[11px] font-medium">
                        Delete
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function renderProductModal(editingProduct, pendingImages, isUploading) {
  const p = editingProduct || {};
  const isResin = p.category === 'Resin Art' || p.mainCategory === 'Resin Art';
  const specs = p.specifications || {};

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E9F0] p-6 sm:p-8 relative">
        
        <button type="button" onclick="adminCloseProductModal()" class="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] p-2">
          ✕
        </button>

        <h2 class="font-serif text-2xl text-[#0F172A] font-semibold mb-1">
          ${editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <p class="text-xs text-[#64748B] mb-6">Enter product specifications and upload high-resolution Cloudinary imagery.</p>

        <form onsubmit="adminSaveProductSubmit(event)" class="space-y-4 text-xs">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Product Name *</label>
              <input type="text" name="name" required value="${p.name || ''}" placeholder="e.g. Ocean Wave Resin Tray" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Subtitle / Line</label>
              <input type="text" name="subtitle" value="${p.subtitle || ''}" placeholder="e.g. Handcrafted Resin Art" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
          </div>

          <!-- PRIMARY CATEGORY SELECTOR -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Category *</label>
              <select name="mainCategory" onchange="window.adminOnCategoryChange(this.value)" class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A] font-medium">
                <option value="Candles" ${!isResin ? 'selected' : ''}>Candles</option>
                <option value="Resin Art" ${isResin ? 'selected' : ''}>Resin Art</option>
              </select>
            </div>
            <div id="admin-candle-subcat-group" class="${isResin ? 'hidden' : ''}">
              <label class="block font-semibold text-[#475569] mb-1">Candle Type / Subcategory</label>
              <select name="candleSubcategory" class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
                <option value="Decorative Bowls" ${p.category === 'Decorative Bowls' ? 'selected' : ''}>Decorative Bowls</option>
                <option value="Festive Urlis" ${p.category === 'Festive Urlis' ? 'selected' : ''}>Festive Urlis</option>
                <option value="Glass Jars" ${p.category === 'Glass Jars' ? 'selected' : ''}>Glass Jars</option>
                <option value="Sculptural Candles" ${p.category === 'Sculptural Candles' ? 'selected' : ''}>Sculptural Candles</option>
                <option value="Candles" ${p.category === 'Candles' ? 'selected' : ''}>General Candle</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Price (&#8377;) *</label>
              <input type="number" name="price" required value="${p.price || ''}" placeholder="1499" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Original Price (&#8377;)</label>
              <input type="number" name="originalPrice" value="${p.originalPrice || ''}" placeholder="1799" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Stock Quantity *</label>
              <input type="number" name="stock" required value="${p.stock !== undefined ? p.stock : 10}" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
          </div>

          <div class="flex items-center pt-1">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" name="isActive" ${p.isActive !== false ? 'checked' : ''} class="w-4 h-4 text-[#0F172A]">
              <span class="font-medium text-[#0F172A]">Visible in Public Shop</span>
            </label>
          </div>

          <!-- CLOUDINARY IMAGE UPLOAD SECTION -->
          <div class="border border-[#CBD5E1] rounded-xl p-4 bg-[#F8FAFC] space-y-3">
            <span class="block font-semibold uppercase tracking-wider text-[#475569]">Cloudinary Product Images</span>
            
            <div class="flex flex-wrap gap-3">
              ${pendingImages.map((img, idx) => `
                <div class="relative w-20 h-20 rounded-lg overflow-hidden border border-[#CBD5E1] bg-white group">
                  <img src="${img}" class="w-full h-full object-cover">
                  <button type="button" onclick="adminRemoveProductImage(${idx})" 
                          class="absolute top-1 right-1 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs opacity-80 hover:opacity-100">
                    ✕
                  </button>
                  ${idx === 0 ? `<span class="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] text-center uppercase font-bold py-0.5">Primary</span>` : ''}
                </div>
              `).join('')}

              <!-- Upload Button -->
              <label class="w-20 h-20 rounded-lg border-2 border-dashed border-[#CBD5E1] hover:border-[#0F172A] flex flex-col items-center justify-center cursor-pointer transition-colors bg-white">
                ${isUploading ? `
                  <svg class="animate-spin h-5 w-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ` : `
                  <svg class="w-6 h-6 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span class="text-[9px] text-[#64748B] mt-1 font-semibold">Upload</span>
                `}
                <input type="file" accept="image/jpeg,image/png,image/webp" onchange="adminHandleImageFiles(this)" class="hidden">
              </label>
            </div>
            <p class="text-[11px] text-[#64748B]">Images will be compressed and optimized on Cloudinary. The first image is Primary.</p>
          </div>

          <!-- DESCRIPTIONS -->
          <div>
            <label class="block font-semibold text-[#475569] mb-1">Short Description</label>
            <input type="text" name="shortDescription" value="${p.shortDescription || ''}" placeholder="One line summary..." 
                   class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Full Description</label>
            <textarea name="fullDescription" rows="3" placeholder="Detailed product story & craftsmanship..." 
                      class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">${p.fullDescription || ''}</textarea>
          </div>

          <!-- CANDLE SPECIFICATIONS (Shown when Candles is selected) -->
          <div id="admin-candle-specs" class="space-y-3 pt-2 ${isResin ? 'hidden' : ''}">
            <h3 class="font-semibold text-[#475569] uppercase tracking-wider text-[11px]">Candle Specifications</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[#64748B] mb-1">Fragrance</label>
                <input type="text" name="fragrance" value="${specs.fragrance || ''}" placeholder="e.g. French Lavender" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Wax Blend</label>
                <input type="text" name="waxType" value="${specs.waxType || ''}" placeholder="e.g. 100% Pure Soy Wax" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Weight</label>
                <input type="text" name="weight" value="${specs.weight || ''}" placeholder="e.g. 350g" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Container / Vessel</label>
                <input type="text" name="container" value="${specs.container || ''}" placeholder="e.g. Ceramic Vessel" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Dimensions</label>
                <input type="text" name="dimensions" value="${specs.dimensions || ''}" placeholder="e.g. 10cm x 8cm" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
            </div>
            <div>
              <label class="block text-[#64748B] mb-1">Candle Care Instructions (One per line)</label>
              <textarea name="candleCare" rows="2" placeholder="Trim wick to 1/4 inch before lighting&#10;Burn on heat-resistant surface" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">${Array.isArray(p.careInstructions) ? p.careInstructions.join('\n') : ''}</textarea>
            </div>
          </div>

          <!-- RESIN ART SPECIFICATIONS (Shown when Resin Art is selected) -->
          <div id="admin-resin-specs" class="space-y-3 pt-2 ${!isResin ? 'hidden' : ''}">
            <h3 class="font-semibold text-[#475569] uppercase tracking-wider text-[11px]">Resin Art Specifications</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[#64748B] mb-1">Material</label>
                <input type="text" name="material" value="${specs.material || ''}" placeholder="e.g. Epoxy Resin & Wood" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Finish</label>
                <input type="text" name="finish" value="${specs.finish || ''}" placeholder="e.g. High Gloss Glass Finish" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Dimensions</label>
                <input type="text" name="resinDimensions" value="${specs.dimensions || ''}" placeholder="e.g. 12 x 8 inches" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Weight</label>
                <input type="text" name="resinWeight" value="${specs.weight || ''}" placeholder="e.g. 650g" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Color / Design</label>
                <input type="text" name="color" value="${specs.color || ''}" placeholder="e.g. Ocean Blue & White Waves" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
            </div>
            <div>
              <label class="block text-[#64748B] mb-1">Care Instructions (One per line)</label>
              <textarea name="resinCare" rows="2" placeholder="Wipe with a damp microfiber cloth&#10;Avoid direct high heat and harsh chemicals" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">${Array.isArray(p.careInstructions) ? p.careInstructions.join('\n') : ''}</textarea>
            </div>
          </div>

          <div class="pt-4 border-t border-[#E2E9F0] flex justify-end space-x-3">
            <button type="button" onclick="adminCloseProductModal()" class="px-4 py-2 border border-[#CBD5E1] rounded font-semibold text-[#475569]">
              Cancel
            </button>
            <button type="submit" class="px-6 py-2 bg-[#1E293B] hover:bg-[#334155] text-white rounded font-semibold uppercase tracking-wider">
              Save Product
            </button>
          </div>

        </form>

      </div>
    </div>
  `;
}

function renderCustomWorkTab(items) {
  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Custom Work Portfolio</h1>
          <p class="text-xs text-[#64748B]">Manage photos in the public Our Work showcase across Mugs, T-Shirts, and Resin Art.</p>
        </div>
        <button type="button" 
                onclick="adminOpenAddCustomWork()" 
                class="px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-xs flex items-center space-x-2">
          <span>+ ADD SHOWCASE PHOTO</span>
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        ${items.map(item => `
          <div class="bg-white rounded-xl border border-[#E2E9F0] overflow-hidden shadow-xs flex flex-col justify-between group">
            <div class="aspect-square relative overflow-hidden bg-[#F8FAFC]">
              <img src="${item.src}" class="w-full h-full object-cover">
              <button type="button" 
                      onclick="adminDeleteCustomWork('${item.id}')" 
                      class="absolute top-2 right-2 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                ✕
              </button>
            </div>
            <div class="p-3">
              <span class="text-[9px] uppercase tracking-wider font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                ${item.category}
              </span>
              <h4 class="font-semibold text-xs text-[#0F172A] mt-1.5 line-clamp-1">${item.title}</h4>
              <p class="text-[10px] text-[#64748B] mt-0.5">${item.client || 'Mer C. Custom'}</p>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function renderCustomWorkModal(pendingImage, isUploading) {
  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E2E9F0]">
        
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-serif text-xl font-semibold text-[#0F172A]">Add Showcase Photo</h3>
          <button type="button" onclick="adminCloseAddCustomWork()" class="text-[#64748B]">✕</button>
        </div>

        <form onsubmit="adminSaveCustomWorkSubmit(event)" class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-[#475569] mb-1">Title *</label>
            <input type="text" name="title" required placeholder="e.g. Spotify Corporate Ceramic Mug" 
                   class="w-full px-3 py-2 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Category *</label>
            <select name="category" class="w-full px-3 py-2 border border-[#CBD5E1] rounded text-[#0F172A]">
              <option value="custom-mugs-bottles">CUSTOM MUGS & BOTTLES</option>
              <option value="custom-tshirts">CUSTOM T-SHIRTS</option>
              <option value="custom-resin-keychains">CUSTOM RESIN ART KEYCHAINS</option>
              <option value="other-custom-work">OTHER CUSTOM WORK</option>
            </select>
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Client Name / Reference</label>
            <input type="text" name="client" placeholder="e.g. Spotify / TIAA" 
                   class="w-full px-3 py-2 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Upload Photo to Cloudinary</label>
            <div class="flex items-center space-x-3">
              ${pendingImage ? `
                <img src="${pendingImage}" class="w-16 h-16 rounded object-cover border border-[#CBD5E1]">
              ` : ''}
              <label class="flex-grow py-3 border-2 border-dashed border-[#CBD5E1] rounded-lg text-center cursor-pointer hover:border-[#0F172A]">
                <span class="text-[11px] text-[#64748B] font-semibold">${isUploading ? 'Uploading to Cloudinary...' : 'Select Photo from Computer'}</span>
                <input type="file" accept="image/*" onchange="adminHandleWorkImageFile(this)" class="hidden">
              </label>
            </div>
          </div>

          <div class="pt-2 flex justify-end space-x-2">
            <button type="button" onclick="adminCloseAddCustomWork()" class="px-4 py-2 border border-[#CBD5E1] rounded">Cancel</button>
            <button type="submit" class="px-5 py-2 bg-[#1E293B] text-white rounded font-semibold uppercase">Save to Showcase</button>
          </div>
        </form>

      </div>
    </div>
  `;
}

function renderCustomersTab(orders) {
  // Aggregate unique customers
  const customerMap = {};
  orders.forEach(order => {
    const emailOrPhone = order.customer.email || order.customer.phone;
    if (!emailOrPhone) return;
    if (!customerMap[emailOrPhone]) {
      customerMap[emailOrPhone] = {
        name: order.customer.name,
        phone: order.customer.phone,
        email: order.customer.email,
        city: order.customer.city,
        totalOrders: 0,
        totalSpent: 0,
        lastOrder: order.createdAt
      };
    }
    customerMap[emailOrPhone].totalOrders += 1;
    customerMap[emailOrPhone].totalSpent += order.totalAmount;
    if (new Date(order.createdAt) > new Date(customerMap[emailOrPhone].lastOrder)) {
      customerMap[emailOrPhone].lastOrder = order.createdAt;
    }
  });

  const customerList = Object.values(customerMap);

  return `
    <div class="space-y-6">
      <div>
        <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Customer Directory</h1>
        <p class="text-xs text-[#64748B]">Directory generated automatically from checkout orders.</p>
      </div>

      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        ${customerList.length === 0 ? `
          <div class="text-center py-16 text-xs text-[#94A3B8]">No customer order history recorded yet.</div>
        ` : `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#334155]">
              <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
                <tr>
                  <th class="p-3.5 pl-5">Customer Name</th>
                  <th class="p-3.5">Phone (WhatsApp)</th>
                  <th class="p-3.5">Email</th>
                  <th class="p-3.5">City</th>
                  <th class="p-3.5">Total Orders</th>
                  <th class="p-3.5">Lifetime Value</th>
                  <th class="p-3.5 pr-5">Last Order</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E9F0]">
                ${customerList.map(c => `
                  <tr class="hover:bg-[#F8FAFC]">
                    <td class="p-3.5 pl-5 font-semibold text-[#0F172A]">${c.name}</td>
                    <td class="p-3.5">
                      <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}" target="_blank" class="text-emerald-700 hover:underline flex items-center space-x-1">
                        <span>${c.phone || '—'}</span>
                      </a>
                    </td>
                    <td class="p-3.5 text-[#64748B]">${c.email || '—'}</td>
                    <td class="p-3.5">${c.city || '—'}</td>
                    <td class="p-3.5 font-mono">${c.totalOrders}</td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${c.totalSpent}</td>
                    <td class="p-3.5 pr-5 text-[#64748B]">${new Date(c.lastOrder).toLocaleDateString()}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderSettingsTab(settings) {
  const s = settings || {
    storeName: "Mer C.",
    whatsappNumber: "+917045493582",
    freeShippingThreshold: 0,
    standardShippingFee: 0,
    lowStockThreshold: 15
  };

  return `
    <div class="space-y-6 max-w-2xl">
      <div>
        <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Store Settings</h1>
        <p class="text-xs text-[#64748B]">Configure store branding, WhatsApp contact number, and fulfillment policies.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border border-[#E2E9F0] shadow-xs">
        <form onsubmit="adminSaveSettingsSubmit(event)" class="space-y-4 text-xs">
          
          <!-- FREE DELIVERY POLICY BADGE -->
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900">
            <span class="font-semibold block mb-0.5">🚚 Store Delivery Policy: 100% FREE Delivery</span>
            <span class="text-emerald-700 font-light">Delivery charges are included in product prices. Customers are never charged additional delivery/shipping fees.</span>
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Store Brand Name</label>
            <input type="text" name="storeName" value="${s.storeName || 'Mer C.'}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">WhatsApp Business Number (Inquiries & Customer Contact)</label>
            <input type="text" name="whatsappNumber" value="${s.whatsappNumber || '+917045493582'}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Official Instagram Profile URL</label>
            <input type="text" name="instagramUrl" value="${s.instagramUrl || 'https://www.instagram.com/mercapparelsnaccessories25/'}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]"
                   placeholder="https://www.instagram.com/mercapparelsnaccessories25/">
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Free Shipping Threshold (&#8377;)</label>
              <input type="number" name="freeShippingThreshold" value="${s.freeShippingThreshold !== undefined ? s.freeShippingThreshold : 0}" 
                     class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Standard Delivery Fee (&#8377;)</label>
              <input type="number" name="standardShippingFee" value="${s.standardShippingFee !== undefined ? s.standardShippingFee : 0}" 
                     class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Low Stock Warning Threshold (units)</label>
            <input type="number" name="lowStockThreshold" value="${s.lowStockThreshold || 15}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div class="pt-4 border-t border-[#E2E9F0]">
            <button type="submit" class="px-6 py-3 bg-[#1E293B] hover:bg-[#334155] text-white font-semibold rounded uppercase tracking-wider">
              SAVE STORE SETTINGS
            </button>
          </div>

        </form>
      </div>

    </div>
  `;
}


/* --- src/services/paymentService.js --- */
/**
 * Payment Service Architecture
 * Modular payment gateway abstraction layer.
 * Client-side integration for Razorpay Standard Checkout & serverless verification.
 */



const paymentService = {
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


/* --- src/components/Header.js --- */
/**
 * Premium Header Component — Clones exact proportions, typography, and spacing of reference design
 */




window.showComingSoonToast = (categoryName = 'Home & Living') => {
  const existing = document.getElementById('coming-soon-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'coming-soon-toast';
  toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-[90%] sm:w-auto bg-[#0F172A] text-white px-6 py-4 rounded-xl shadow-2xl border border-slate-700 flex items-center space-x-3.5 animate-fadeIn';
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-300 text-sm">
      ✨
    </div>
    <div class="text-left flex-grow">
      <div class="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">${categoryName}</div>
      <div class="text-xs font-serif font-medium text-white">Coming Soon</div>
      <div class="text-[11px] text-slate-300 font-light mt-0.5">Beautiful pieces for your home are coming soon.</div>
    </div>
    <button type="button" onclick="document.getElementById('coming-soon-toast')?.remove()" class="text-slate-400 hover:text-white text-xs pl-2" title="Close">✕</button>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    const el = document.getElementById('coming-soon-toast');
    if (el) {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.4s ease';
      setTimeout(() => el.remove(), 400);
    }
  }, 3500);
};

function Header(state) {
  const { itemCount, wishlist, activeCategory, isOurWorkPage } = state;
  const isSearchActive = state.searchQuery.length > 0;
  const allProducts = (state && state.products && state.products.length > 0) ? state.products : (window.PRODUCTS || []);
  const hasResinProducts = allProducts.some(p => (p.category === 'Resin Art' || p.mainCategory === 'Resin Art') && p.isActive !== false);
  const hasHomeLivingProducts = allProducts.some(p => (p.category === 'Home & Living' || p.mainCategory === 'Home & Living' || p.category === 'Home and Living' || p.mainCategory === 'Home and Living') && p.isActive !== false);

  return `
    <header class="sticky top-0 z-40 bg-[#F0F4F8]/95 backdrop-blur-md border-b border-[#E2E9F0] transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24">
          
          <!-- LEFT: BRAND LOGO -->
          <div class="flex-shrink-0 flex flex-col items-start cursor-pointer group" onclick="if(window.location.hash === '#/our-work'){ window.location.hash = ''; } window.scrollTo({top: 0, behavior: 'smooth'})">
            <span class="font-serif text-3xl sm:text-4xl text-[#0F172A] tracking-tight font-medium leading-none group-hover:text-[#334155] transition-colors">
              ${SITE_CONFIG.brandName}
            </span>
            <span class="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#64748B] font-semibold mt-1 font-sans">
              APPARELS N ACCESSORIES
            </span>
          </div>

          <!-- CENTER: NAVIGATION LINKS (Desktop) -->
          <nav class="hidden md:flex items-center space-x-3.5 lg:space-x-5 xl:space-x-6 text-[11px] lg:text-xs uppercase tracking-[0.12em] lg:tracking-[0.16em] font-medium text-[#1E293B]">
            <a href="#hero" 
               class="relative py-2 hover:text-[#0F172A] transition-colors ${!isOurWorkPage && activeCategory === 'All' && !isSearchActive ? 'text-[#0F172A] font-semibold' : 'text-[#475569]'}">
              HOME
              <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0F172A] rounded-full transform ${!isOurWorkPage && activeCategory === 'All' ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300"></span>
            </a>
            
            <a href="#catalog" 
               onclick="if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('All')"
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569]">
              SHOP
            </a>
            
            <a href="#catalog" 
               onclick="if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('Decorative Bowls')"
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569]">
              CANDLES
            </a>
            
            <a href="${hasResinProducts ? '#resin-art-products' : '#resin-art'}" 
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569] flex items-center gap-1.5">
              <span>RESIN ART</span>
              ${!hasResinProducts ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 tracking-wider lowercase font-normal">soon</span>` : ''}
            </a>
            
            <a href="#corporate-gifting" 
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569]">
              CORPORATE GIFTING
            </a>

            <!-- OUR WORK PORTFOLIO LINK -->
            <a href="#/our-work" 
               onclick="cartStore.navigateToOurWork()"
               class="relative py-2 hover:text-[#0F172A] transition-colors ${isOurWorkPage ? 'text-[#0F172A] font-semibold' : 'text-[#475569]'}">
              OUR WORK
              <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0F172A] rounded-full transform ${isOurWorkPage ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300"></span>
            </a>

            <a href="#about" 
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569]">
              ABOUT MER C.
            </a>

            <!-- HOME & LIVING (Coming Soon) -->
            <a href="${hasHomeLivingProducts ? '#catalog' : 'javascript:void(0)'}" 
               onclick="${hasHomeLivingProducts ? `if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('Home & Living');` : `showComingSoonToast('Home & Living');`}"
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569] flex items-center gap-1.5 cursor-pointer">
              <span>HOME & LIVING</span>
              ${!hasHomeLivingProducts ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 tracking-wider lowercase font-normal">soon</span>` : ''}
            </a>

            <a href="#footer" 
               class="py-2 hover:text-[#0F172A] transition-colors text-[#475569]">
              CONTACT
            </a>
          </nav>

          <!-- RIGHT: ACTION ICONS -->
          <div class="flex items-center space-x-4 sm:space-x-6 text-[#1E293B]">
            
            <!-- Search Toggle -->
            <button type="button" 
                    onclick="toggleSearchOverlay()" 
                    class="p-2 hover:text-[#0F172A] hover:bg-[#E2E9F0]/60 rounded-full transition-colors relative"
                    title="Search Catalog">
              <svg class="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </button>

            <!-- Account / Order Tracking Entry Point -->
            <a href="#/account" 
               class="p-2 hover:text-[#0F172A] hover:bg-[#E2E9F0]/60 rounded-full transition-colors flex items-center justify-center"
               title="My Account / Track Order"
               aria-label="Track Order & Account">
              <svg class="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
              </svg>
            </a>

            <!-- Wishlist Icon -->
            <a href="#catalog" 
               onclick="if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('All')"
               class="hidden sm:block p-2 hover:text-[#0F172A] hover:bg-[#E2E9F0]/60 rounded-full transition-colors relative"
               title="Wishlist">
              <svg class="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
              </svg>
              ${wishlist.length > 0 ? `<span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>` : ''}
            </a>

            <!-- Shopping Bag / Cart Button -->
            <button type="button" 
                    onclick="cartStore.openCart()" 
                    class="p-2 hover:text-[#0F172A] hover:bg-[#E2E9F0]/60 rounded-full transition-colors relative flex items-center justify-center"
                    aria-label="Shopping Cart">
              <svg class="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
              </svg>
              <span class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#0F172A] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                ${itemCount}
              </span>
            </button>

            <!-- Mobile Hamburger Toggle -->
            <button type="button" 
                    onclick="toggleMobileMenu()" 
                    class="md:hidden p-2 text-[#0F172A] hover:bg-[#E2E9F0]/60 rounded-lg transition-colors">
              <svg class="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>

          </div>
        </div>

        <!-- SEARCH OVERLAY BAR (Expandable) -->
        <div id="search-overlay" class="${(state.searchQuery || state.isSearchOpen) ? '' : 'hidden'} pb-4 transition-all">
          <div class="relative max-w-md mx-auto">
            <input type="text" 
                   id="search-input"
                   placeholder="Search candles, resin art, gifts..." 
                   value="${state.searchQuery || ''}"
                   oninput="cartStore.setSearchQuery(this.value)"
                   class="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F172A] shadow-sm text-[#0F172A]">
            <svg class="w-4 h-4 absolute left-3.5 top-3.5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
            ${state.searchQuery ? `
              <button type="button" onclick="cartStore.setSearchQuery(''); window.toggleSearchOverlay(false);" class="absolute right-3.5 top-3 text-[#64748B] hover:text-[#0F172A]">
                ✕
              </button>
            ` : ''}
          </div>
        </div>

      </div>

      <!-- MOBILE NAVIGATION DRAWER -->
      <div id="mobile-menu" class="hidden md:hidden bg-[#F0F4F8] border-b border-[#E2E9F0] px-6 py-6 space-y-4">
        <a href="#hero" onclick="if(window.location.hash === '#/our-work') window.location.hash=''; toggleMobileMenu();" class="block text-sm uppercase tracking-widest text-[#0F172A] font-medium py-1.5 border-b border-[#E2E9F0]/60">HOME</a>
        <a href="#catalog" onclick="if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('All'); toggleMobileMenu();" class="block text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5 border-b border-[#E2E9F0]/60">SHOP</a>
        <a href="#catalog" onclick="if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('Decorative Bowls'); toggleMobileMenu();" class="block text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5 border-b border-[#E2E9F0]/60">CANDLES</a>
        <a href="${hasResinProducts ? '#resin-art-products' : '#resin-art'}" onclick="if(window.location.hash === '#/our-work') window.location.hash='${hasResinProducts ? '#resin-art-products' : '#resin-art'}'; toggleMobileMenu()" class="text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5 border-b border-[#E2E9F0]/60 flex items-center justify-between">
          <span>RESIN ART</span>
          ${!hasResinProducts ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 tracking-wider lowercase font-normal">soon</span>` : ''}
        </a>
        <a href="#corporate-gifting" onclick="if(window.location.hash === '#/our-work') window.location.hash='#corporate-gifting'; toggleMobileMenu()" class="block text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5 border-b border-[#E2E9F0]/60">CORPORATE GIFTING</a>
        <a href="#/our-work" onclick="toggleMobileMenu(); cartStore.navigateToOurWork()" class="block text-sm uppercase tracking-widest text-[#0F172A] font-semibold py-1.5 border-b border-[#E2E9F0]/60">OUR WORK (PORTFOLIO)</a>
        <a href="#about" onclick="if(window.location.hash === '#/our-work') window.location.hash='#about'; toggleMobileMenu()" class="block text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5 border-b border-[#E2E9F0]/60">ABOUT MER C.</a>
        
        <!-- HOME & LIVING (Mobile) -->
        <a href="${hasHomeLivingProducts ? '#catalog' : 'javascript:void(0)'}" 
           onclick="toggleMobileMenu(); ${hasHomeLivingProducts ? `if(window.location.hash === '#/our-work') window.location.hash='#catalog'; cartStore.setCategory('Home & Living');` : `showComingSoonToast('Home & Living');`}" 
           class="text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5 border-b border-[#E2E9F0]/60 flex items-center justify-between cursor-pointer">
          <span>HOME & LIVING</span>
          ${!hasHomeLivingProducts ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 tracking-wider lowercase font-normal">soon</span>` : ''}
        </a>

        <a href="#/account" onclick="toggleMobileMenu()" class="block text-sm uppercase tracking-widest text-[#0F172A] font-semibold py-1.5 border-b border-[#E2E9F0]/60 flex items-center justify-between">
          <span>TRACK ORDER / ACCOUNT</span>
          <svg class="w-4 h-4 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
        </a>
        <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="block text-sm uppercase tracking-widest text-[#0F172A] font-medium py-1.5 border-b border-[#E2E9F0]/60 flex items-center justify-between">
          <span>INSTAGRAM</span>
          <span class="text-xs font-mono text-[#64748B] lowercase">@mercapparelsnaccessories25 ↗</span>
        </a>
        <a href="#footer" onclick="if(window.location.hash === '#/our-work') window.location.hash='#footer'; toggleMobileMenu()" class="block text-sm uppercase tracking-widest text-[#475569] font-medium py-1.5">CONTACT</a>
      </div>
    </header>
  `;
}


/* --- src/components/Hero.js --- */
/**
 * Single Responsive Hero Component
 * Single DOM container, single hero image (assets/generated/unified_hero_banner.jpg), single text overlay across all breakpoints.
 */



function Hero() {
  return `
    <section id="hero" class="relative w-full bg-[#EBF1F6] min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-[#E2E9F0]">
      
      <!-- SINGLE HERO IMAGE FOR ALL BREAKPOINTS (SAME APPROVED IMAGE) -->
      <img src="assets/generated/unified_hero_banner.jpg" 
           alt="Mer C. Handcrafted Candle Composition" 
           class="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-[65%_center] md:object-center">
      
      <!-- ALICE BLUE GRADIENT OVERLAY -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#EBF1F6]/95 via-[#EBF1F6]/85 sm:via-[#EBF1F6]/75 to-transparent w-full sm:w-3/4 md:w-3/5 lg:w-1/2"></div>

      <!-- HERO TEXT OVERLAY (Positioned directly over the hero image) -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 z-10">
        <div class="max-w-xs sm:max-w-md lg:max-w-xl space-y-4 sm:space-y-6">
          
          <!-- Eyebrow text -->
          <div class="flex items-center space-x-2">
            <span class="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#475569]">
              HANDCRAFTED WITH LOVE
            </span>
          </div>

          <!-- Main Serif Headline -->
          <h1 class="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-[#0F172A] leading-[1.08] tracking-tight">
            Illuminate.<br>
            Decorate.<br>
            Celebrate.
          </h1>

          <!-- Supporting Paragraph -->
          <p class="text-xs sm:text-base lg:text-lg text-[#475569] font-sans font-light leading-relaxed max-w-md">
            Premium handcrafted candles and artistic pieces, created to bring warmth and beauty to every moment.
          </p>

          <!-- Action Button -->
          <div class="pt-2 sm:pt-3">
            <a href="#catalog" 
               onclick="cartStore.setCategory('All')"
               class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-none shadow-sm hover:bg-[#334155] transition-all group">
              <span>SHOP CANDLES</span>
              <svg class="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
          </div>

          <!-- Slide Indicator -->
          <div class="pt-4 sm:pt-6 flex items-center space-x-4 text-xs font-sans text-[#64748B]">
            <span class="font-semibold text-[#0F172A] tracking-wider">01</span>
            <span class="w-10 h-[1.5px] bg-[#0F172A]"></span>
            <span class="hover:text-[#0F172A] cursor-pointer transition-colors" onclick="window.openProductById('merc-candle-02')">02</span>
            <span class="hover:text-[#0F172A] cursor-pointer transition-colors" onclick="window.openProductById('merc-candle-03')">03</span>
          </div>

        </div>
      </div>

    </section>
  `;
}


/* --- src/components/ResinComingSoon.js --- */
/**
 * Resin Art Visual Storytelling Banner Component
 * Always renders the approved visual introduction and background photography.
 * CTA button dynamically toggles:
 * - "COMING SOON" when 0 active Resin Art products exist in MongoDB.
 * - "EXPLORE RESIN ART →" (smooth anchor to #resin-art-products) when >= 1 active Resin Art products exist.
 */



function ResinComingSoon(state) {
  const allProducts = (state && state.products && state.products.length > 0) ? state.products : (window.PRODUCTS || PRODUCTS);
  const resinProducts = allProducts.filter(p => (p.category === 'Resin Art' || p.mainCategory === 'Resin Art') && p.isActive !== false);
  const hasResinProducts = resinProducts.length > 0;

  return `
    <section id="resin-art" class="relative w-full bg-[#EBF1F6] min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden border-b border-[#E2E9F0]">
      
      <!-- FULL-WIDTH RESIN ART BACKGROUND IMAGE (SAME COMPOSITION FOR ALL BREAKPOINTS) -->
      <img src="assets/generated/resin_art_coming_soon.jpg" 
           alt="Mer C. Handcrafted Resin Art Collection" 
           class="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-[65%_center] md:object-center">
      
      <!-- ALICE BLUE GRADIENT OVERLAY FOR READABILITY -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#EBF1F6]/95 via-[#EBF1F6]/85 sm:via-[#EBF1F6]/75 to-transparent w-full sm:w-3/4 md:w-3/5 lg:w-1/2"></div>

      <!-- RESIN CONTENT OVERLAY (Positioned directly inside the visual space) -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 z-10">
        <div class="max-w-xs sm:max-w-md lg:max-w-xl space-y-4 sm:space-y-6">
          
          <span class="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#64748B] block">
            CREATIVE. UNIQUE. TIMELESS.
          </span>

          <h2 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-medium leading-tight">
            Resin Art
          </h2>

          <div class="w-12 h-[1.5px] bg-[#0F172A]"></div>

          <p class="text-xs sm:text-base text-[#475569] font-sans font-light max-w-md leading-relaxed">
            Beautifully handcrafted resin art pieces that add charm to your space.
          </p>

          <div class="pt-2">
            ${hasResinProducts ? `
              <a href="#resin-art-products" 
                 class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-none shadow-sm hover:bg-[#334155] transition-all group">
                <span>EXPLORE RESIN ART</span>
                <svg class="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </a>
            ` : `
              <div class="inline-block px-8 py-3.5 border border-[#1E293B] text-[#1E293B] text-xs uppercase tracking-[0.2em] font-medium bg-transparent cursor-default">
                COMING SOON
              </div>
            `}
          </div>

        </div>
      </div>

    </section>
  `;
}


/* --- src/components/ResinProductGrid.js --- */
/**
 * Dedicated Resin Art Product Section Component
 * Renders conditionally ONLY when >= 1 active Resin Art products exist in MongoDB.
 * Completely separate from the Candle Product Section.
 */




function ResinProductGrid(state) {
  const allProducts = (state && state.products && state.products.length > 0) ? state.products : (window.PRODUCTS || PRODUCTS);
  const resinProducts = allProducts.filter(p => (p.category === 'Resin Art' || p.mainCategory === 'Resin Art') && p.isActive !== false);

  // If 0 active Resin Art products exist, do NOT render this section at all
  if (resinProducts.length === 0) {
    return '';
  }

  return `
    <section id="resin-art-products" class="py-16 md:py-24 bg-white border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER (Visually matching Our Candle Collection) -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
            CREATIVE. UNIQUE. TIMELESS.
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight">
            Our Resin Art Collection
          </h2>
          <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
          <p class="text-base text-[#475569] font-sans font-light">
            Discover our handcrafted resin art collection.
          </p>
        </div>

        <!-- RESIN ART PRODUCT GRID (Contains ONLY Resin Art products) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          ${resinProducts.map(p => ProductCard(p, state)).join('')}
        </div>

      </div>
    </section>
  `;
}


/* --- src/components/FeatureStrip.js --- */
/**
 * Feature Trust Strip Component — Clones exact 4-column divided bar from reference design
 */

function FeatureStrip() {
  return `
    <section class="bg-[#F0F4F8] border-y border-[#E2E9F0] py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#CBD5E1]">
          
          <!-- Column 1: Handmade -->
          <div class="flex flex-col items-center text-center px-4 space-y-3">
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E2E9F0] shadow-sm text-[#0F172A]">
              <svg class="w-6 h-6 stroke-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 9v6m-3-3h6"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
              </svg>
            </div>
            <div class="text-xs uppercase tracking-[0.18em] font-semibold text-[#0F172A] leading-tight font-sans">
              HANDMADE<br>WITH LOVE
            </div>
          </div>

          <!-- Column 2: Premium Quality -->
          <div class="flex flex-col items-center text-center px-4 space-y-3">
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E2E9F0] shadow-sm text-[#0F172A]">
              <svg class="w-6 h-6 stroke-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
              </svg>
            </div>
            <div class="text-xs uppercase tracking-[0.18em] font-semibold text-[#0F172A] leading-tight font-sans">
              PREMIUM<br>QUALITY
            </div>
          </div>

          <!-- Column 3: Perfect for Gifting -->
          <div class="flex flex-col items-center text-center px-4 space-y-3">
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E2E9F0] shadow-sm text-[#0F172A]">
              <svg class="w-6 h-6 stroke-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-9-13.5h18"></path>
              </svg>
            </div>
            <div class="text-xs uppercase tracking-[0.18em] font-semibold text-[#0F172A] leading-tight font-sans">
              PERFECT FOR<br>GIFTING
            </div>
          </div>

          <!-- Column 4: Secure Payments / Support -->
          <div class="flex flex-col items-center text-center px-4 space-y-3">
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E2E9F0] shadow-sm text-[#0F172A]">
              <svg class="w-6 h-6 stroke-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z"></path>
              </svg>
            </div>
            <div class="text-xs uppercase tracking-[0.18em] font-semibold text-[#0F172A] leading-tight font-sans">
              SECURE<br>PAYMENTS
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}


/* --- src/components/ProductCard.js --- */
/**
 * Minimal Luxury Product Card Component
 * Clean Rupee symbol rendering (&#8377;) & full card clickability
 */



function ProductCard(product, state) {
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


/* --- src/components/ProductGrid.js --- */
/**
 * Product Collection Grid Component with Filtering & Search Integration
 */





const CANDLE_CATEGORIES = [
  "All",
  "Decorative Bowls",
  "Festive Urlis",
  "Glass Jars",
  "Sculptural Candles"
];

function ProductGrid(state) {
  const { activeCategory, searchQuery } = state;
  const allProducts = (state.products && state.products.length > 0) ? state.products : PRODUCTS;

  // Candle products ONLY: Strictly exclude any Resin Art products
  const candleProducts = allProducts.filter(p => p.category !== 'Resin Art' && p.mainCategory !== 'Resin Art' && p.isActive !== false);

  // Filter logic within candles
  let filteredProducts = candleProducts.filter(product => {
    let matchesCategory = true;
    if (activeCategory && activeCategory !== "All" && activeCategory !== "Candles") {
      matchesCategory = product.category === activeCategory;
    }

    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.shortDescription && product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return `
    <section id="catalog" class="py-16 md:py-24 bg-white border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
            HANDMADE ELEGANCE
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight">
            Our Candle Collection
          </h2>
          <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
          <p class="text-base text-[#475569] font-sans font-light">
            Handcrafted pieces made to brighten your space.
          </p>
        </div>

        <!-- CANDLE CATEGORY FILTER TABS -->
        <div class="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          ${CANDLE_CATEGORIES.map(cat => `
            <button type="button" 
                    onclick="cartStore.setCategory('${cat}')" 
                    class="px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all border ${activeCategory === cat || (cat === 'All' && (activeCategory === 'All' || activeCategory === 'Candles')) ? 'bg-[#1E293B] text-white border-[#1E293B] shadow-sm' : 'bg-[#F0F4F8] text-[#475569] border-[#E2E9F0] hover:bg-white hover:border-[#CBD5E1]'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- SEARCH STATUS BADGE -->
        ${searchQuery ? `
          <div class="mb-8 flex items-center justify-between bg-[#F0F4F8] px-4 py-3 rounded-lg border border-[#E2E9F0]">
            <p class="text-sm text-[#475569]">
              Showing results for "<span class="font-semibold text-[#0F172A]">${searchQuery}</span>" (${filteredProducts.length} items found)
            </p>
            <button type="button" onclick="cartStore.setSearchQuery('')" class="text-xs text-[#0F172A] font-semibold hover:underline">
              Clear Search
            </button>
          </div>
        ` : ''}

        <!-- PRODUCT GRID -->
        ${filteredProducts.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            ${filteredProducts.map(p => ProductCard(p, state)).join('')}
          </div>
        ` : `
          <div class="text-center py-16 bg-[#F0F4F8] rounded-2xl border border-dashed border-[#CBD5E1]">
            <svg class="w-12 h-12 mx-auto text-[#94A3B8] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
            <h3 class="font-serif text-xl text-[#0F172A]">No products found</h3>
            <p class="text-sm text-[#64748B] mt-1">Try selecting another category or clearing your search filter.</p>
            <button type="button" 
                    onclick="cartStore.setCategory('All'); cartStore.setSearchQuery('');" 
                    class="mt-4 px-6 py-2.5 bg-[#1E293B] text-white text-xs uppercase tracking-wider rounded font-medium">
              View All Products
            </button>
          </div>
        `}

      </div>
    </section>
  `;
}


/* --- src/components/ProductDetailModal.js --- */
/**
 * Full Product Detail View Component
 * Clean Rupee symbol rendering & specifications (Burn Time line removed as requested)
 */





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

function ProductDetailModal(state) {
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


/* --- src/components/PortfolioLightbox.js --- */
/**
 * Portfolio Image Viewer / Lightbox Component
 * Pure image presentation with smooth navigation (Next, Prev, Close, Keyboard shortcuts)
 * Strictly NO e-commerce actions.
 */



function PortfolioLightbox(state) {
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


/* --- src/components/OurWorkPage.js --- */
/**
 * Dedicated "Our Work" Portfolio Showcase Page Component
 * Renders all 44 authentic client project photographs organized across the 4 categories
 * Pure portfolio showcase with Lightbox viewing and WhatsApp inquiry — strictly zero e-commerce actions.
 */




function OurWorkPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.ourWorkInquiry)}`;

  return `
    <div class="bg-[#F0F4F8] min-h-screen py-8 sm:py-12 animate-fadeIn">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- TOP NAVIGATION BREADCRUMB & BACK BUTTON -->
        <div class="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E9F0]">
          <a href="#corporate-gifting" 
             onclick="window.cartStore.navigateBackFromOurWork()"
             class="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors group">
            <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>BACK TO HOME</span>
          </a>

          <div class="flex items-center space-x-2 text-xs text-[#64748B]">
            <a href="#hero" class="hover:text-[#0F172A] transition-colors">Home</a>
            <span>/</span>
            <span class="text-[#0F172A] font-medium">Our Work</span>
          </div>
        </div>

        <!-- PAGE HEADER -->
        <div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span class="text-xs uppercase tracking-[0.26em] font-semibold text-[#64748B]">
            PORTFOLIO & BESPOKE COMMISSIONS
          </span>
          <h1 class="font-serif text-4xl sm:text-6xl text-[#0F172A] font-medium tracking-tight">
            Our Work
          </h1>
          <div class="w-16 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
          <p class="text-base sm:text-lg text-[#475569] font-sans font-light leading-relaxed">
            A collection of custom creations crafted for our clients.
          </p>
        </div>

        <!-- CATEGORIES SHOWCASE -->
        <div class="space-y-20 sm:space-y-28">
          ${CUSTOM_WORK_CATEGORIES.map((category) => `
            <section id="${category.id}" class="scroll-mt-24">
              
              <!-- CATEGORY HEADER -->
              <div class="mb-8 sm:mb-10 pb-4 border-b border-[#E2E9F0] flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div class="flex items-center space-x-3 mb-2">
                    <span class="font-serif text-2xl sm:text-3xl text-[#94A3B8] font-light">
                      ${category.number}
                    </span>
                    <span class="w-8 h-[1px] bg-[#CBD5E1]"></span>
                    <span class="text-xs uppercase tracking-[0.22em] font-semibold text-[#64748B]">
                      ${category.subtitle}
                    </span>
                  </div>
                  <h2 class="font-serif text-3xl sm:text-4xl text-[#0F172A] font-medium tracking-tight">
                    ${category.title}
                  </h2>
                </div>
                
                <p class="text-xs sm:text-sm text-[#64748B] max-w-lg font-light leading-relaxed">
                  ${category.description}
                </p>
              </div>

              <!-- CATEGORY PHOTO GALLERY GRID -->
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                ${category.images.map((img, imgIdx) => `
                  <div onclick="window.cartStore.openLightbox('${category.id}', ${imgIdx})"
                       class="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E2E9F0] shadow-xs hover:shadow-lg hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between">
                    
                    <!-- IMAGE VIEWPORT -->
                    <div class="relative aspect-square w-full overflow-hidden bg-[#F0F4F8]">
                      <img src="${img.src}" 
                           alt="${img.alt}" 
                           loading="lazy"
                           class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out">
                      
                      <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span class="p-2.5 rounded-full bg-white/90 text-[#0F172A] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <!-- CAPTION DETAILS -->
                    <div class="p-3.5 sm:p-4 bg-white">
                      <h3 class="font-serif text-sm sm:text-base font-medium text-[#0F172A] group-hover:text-[#334155] transition-colors line-clamp-1">
                        ${img.title}
                      </h3>
                      ${img.client ? `
                        <p class="text-[11px] text-[#64748B] font-sans mt-0.5 truncate">
                          Client: <span class="text-[#334155] font-medium">${img.client}</span>
                        </p>
                      ` : ''}
                    </div>

                  </div>
                `).join('')}
              </div>

            </section>
          `).join('')}
        </div>

        <!-- BOTTOM WHATSAPP INQUIRY SECTION -->
        <div class="mt-24 sm:mt-32 bg-white rounded-2xl border border-[#CBD5E1] p-8 sm:p-14 lg:p-16 text-center shadow-sm">
          <div class="max-w-2xl mx-auto space-y-4">
            <span class="text-xs uppercase tracking-[0.24em] font-semibold text-[#64748B]">
              BESPOKE ORDERS & COMMISSIONS
            </span>
            <h2 class="font-serif text-3xl sm:text-5xl text-[#0F172A] font-medium tracking-tight">
              Like Something You See?
            </h2>
            <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
            <p class="text-sm sm:text-base text-[#475569] font-sans font-light leading-relaxed">
              Let's create something personalized for you. From customized merchandise and corporate bulk gifting to bespoke resin keepsakes, we craft to your specifications.
            </p>

            <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="${whatsappUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#334155] transition-all shadow-md group gap-3">
                <svg class="w-5 h-5 fill-current text-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
                </svg>
                <span>ENQUIRE ON WHATSAPP</span>
              </a>

              <a href="#catalog" 
                 onclick="window.cartStore.setCategory('All')"
                 class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#0F172A] border border-[#CBD5E1] text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#F0F4F8] transition-all">
                <span>EXPLORE CANDLES</span>
              </a>

              <a href="${SITE_CONFIG.social.instagram}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#0F172A] border border-[#CBD5E1] text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#F0F4F8] transition-all gap-2.5">
                <svg class="w-4 h-4 fill-current text-[#0F172A]" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>EXPLORE ON INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}


/* --- src/components/CorporateGifting.js --- */
/**
 * Corporate Gifting Section Component — Preserves existing approved layout & adds "Our Work" portfolio preview
 */




function CorporateGifting() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.corporateGifting)}`;

  return `
    <section id="corporate-gifting" class="py-16 md:py-24 bg-[#F0F4F8] border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="bg-white rounded-2xl border border-[#CBD5E1] p-6 sm:p-12 lg:p-16 shadow-sm">
          
          <!-- 1. EXISTING APPROVED CORPORATE GIFTING TWO-COLUMN LAYOUT -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- LEFT VISUAL COLUMN (PRESERVED IMAGE) -->
            <div class="lg:col-span-6 relative">
              <div class="rounded-xl overflow-hidden border border-[#E2E9F0] shadow-md bg-[#F0F4F8]">
                <img src="assets/generated/corporate_gifting_hero.jpg" 
                     alt="Mer C. Corporate Gifting Hampers" 
                     class="w-full h-auto sm:h-[420px] lg:h-[440px] object-contain sm:object-cover object-center">
              </div>
            </div>

            <!-- RIGHT CONTENT & WHATSAPP INQUIRY COLUMN -->
            <div class="lg:col-span-6 space-y-6">
              
              <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#64748B]">
                BESPOKE SOLUTIONS
              </span>

              <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] leading-tight font-normal">
                Corporate Gifting
              </h2>

              <div class="w-12 h-[1.5px] bg-[#0F172A]"></div>

              <p class="text-base text-[#475569] font-sans font-light leading-relaxed">
                Thoughtfully handcrafted gifting solutions for teams, clients, celebrations and special occasions.
              </p>

              <!-- HIGHLIGHT FEATURES LIST -->
              <div class="space-y-3 pt-2 text-sm text-[#334155]">
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Custom branding, logo engraving & ribbon color matching</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Bespoke fragrance selections & personalized notes</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Pan-India secure bulk logistics & event delivery</span>
                </div>
              </div>

              <!-- WHATSAPP CTA BUTTON -->
              <div class="pt-4">
                <a href="${whatsappUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#334155] transition-all shadow-sm group gap-3">
                  <svg class="w-5 h-5 fill-current text-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
                  </svg>
                  <span>ENQUIRE FOR CORPORATE GIFTING</span>
                </a>
              </div>

            </div>

          </div>

          <!-- 2. "A GLIMPSE OF OUR WORK" SUPPORTING PORTFOLIO PREVIEW -->
          <div class="border-t border-[#E2E9F0] mt-12 sm:mt-16 pt-10 sm:pt-14">
            
            <div class="text-center max-w-2xl mx-auto space-y-2.5 mb-8 sm:mb-10">
              <span class="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#64748B]">
                CLIENT PORTFOLIO
              </span>
              <h3 class="font-serif text-3xl sm:text-4xl text-[#0F172A] font-medium tracking-tight">
                A Glimpse of Our Work
              </h3>
              <p class="text-xs sm:text-sm text-[#475569] font-sans font-light leading-relaxed">
                From custom gifts to personalized creations, explore some of our previous work.
              </p>
            </div>

            <!-- 3 PREVIEW EDITORIAL CARDS (1 Mugs/Bottles, 1 T-Shirts, 1 Resin Keychains) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
              ${HOMEPAGE_PORTFOLIO_PREVIEWS.map((item) => `
                <div onclick="window.cartStore.navigateToOurWork()" 
                     class="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E2E9F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-300 flex flex-col">
                  
                  <div class="aspect-[4/3] w-full overflow-hidden bg-[#F0F4F8] relative">
                    <img src="${item.image}" 
                         alt="${item.alt}" 
                         loading="lazy"
                         class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    
                    <span class="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#0F172A] text-[9px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold shadow-xs">
                      ${item.categoryTitle}
                    </span>
                  </div>

                  <div class="p-3.5 text-center bg-white">
                    <h4 class="font-serif text-sm font-medium text-[#0F172A] group-hover:text-[#334155] transition-colors truncate">
                      ${item.title}
                    </h4>
                  </div>

                </div>
              `).join('')}
            </div>

            <!-- "VIEW OUR WORK" CTA BUTTON -->
            <div class="text-center pt-8 sm:pt-10">
              <a href="#/our-work" 
                 onclick="window.cartStore.navigateToOurWork()"
                 class="inline-flex items-center justify-center px-8 py-3.5 bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#334155] transition-all shadow-sm group gap-2.5">
                <span>VIEW OUR WORK</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}


/* --- src/components/TrustedClients.js --- */
/**
 * Corporate Client Logos Showcase Component — Replaces product cards with clean brand logo grid matching Alice Blue theme
 */



function TrustedClients() {
  return `
    <section class="py-16 md:py-24 bg-[#F0F4F8] border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="text-xs uppercase tracking-[0.22em] font-semibold text-[#64748B]">
            CORPORATE PARTNERSHIPS
          </span>
          <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] font-medium tracking-tight">
            Our Corporate Clients
          </h2>
          <div class="w-12 h-[1.5px] bg-[#0F172A] mx-auto my-3"></div>
          <p class="text-base text-[#475569] font-sans font-light">
            Trusted by leading brands and organizations for artisanal gifting and handcrafted collections.
          </p>
        </div>

        <!-- CORPORATE CLIENT LOGOS GRID -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          ${CORPORATE_LOGOS.map(logo => `
            <div class="group bg-white rounded-xl border border-[#E2E9F0] p-6 h-28 sm:h-32 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-300">
              <img src="${logo.image}" 
                   alt="${logo.name}" 
                   title="${logo.name}"
                   loading="lazy"
                   class="max-h-14 sm:max-h-16 max-w-[85%] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


/* --- src/components/AboutSection.js --- */
/**
 * About Mer C. Brand Story Section Component
 */



function AboutSection() {
  return `
    <section id="about" class="py-16 md:py-24 bg-[#F0F4F8] border-b border-[#E2E9F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- LEFT IMAGE COLUMN -->
          <div class="lg:col-span-6">
            <div class="relative rounded-2xl overflow-hidden shadow-lg border border-[#CBD5E1]">
              <img src="assets/generated/about_brand_craft.jpg" 
                   alt="Crafting Mer C. Handcrafted Candles" 
                   class="w-full h-[400px] sm:h-[480px] object-cover object-center">
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <span class="text-xs uppercase tracking-[0.2em] font-semibold text-slate-200">OUR HERITAGE</span>
                <p class="font-serif text-2xl font-light mt-1">Artisan Passion in Every Flame.</p>
              </div>
            </div>
          </div>

          <!-- RIGHT TEXT COLUMN -->
          <div class="lg:col-span-6 space-y-6">
            
            <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#64748B]">
              THE MER C. STORY
            </span>

            <h2 class="font-serif text-4xl sm:text-5xl text-[#0F172A] leading-tight font-normal">
              Handcrafted with Love,<br>Sculpted with Care.
            </h2>

            <div class="w-12 h-[1.5px] bg-[#0F172A]"></div>

            <p class="text-base text-[#475569] font-sans font-light leading-relaxed">
              At <strong class="font-semibold text-[#0F172A]">Mer C. Apparels N Accessories</strong>, we believe every space deserves warmth, light, and artistic elegance. Founded on a passion for handmade decor, each candle and upcoming resin creation is sculpted individually using eco-friendly botanical wax, natural essential oils, and hand-selected floral accents.
            </p>

            <p class="text-base text-[#475569] font-sans font-light leading-relaxed">
              Whether you are seeking a serene centerpiece for festive celebrations, a luxury personal indulgence, or memorable bespoke corporate hampers, Mer C. turns quiet moments into luminous experiences.
            </p>

            <div class="pt-4 grid grid-cols-2 gap-6 border-t border-[#E2E9F0]">
              <div>
                <span class="font-serif text-3xl text-[#0F172A] block font-semibold">100%</span>
                <span class="text-xs uppercase tracking-wider text-[#64748B] font-medium">Eco Soy & Botanicals</span>
              </div>
              <div>
                <span class="font-serif text-3xl text-[#0F172A] block font-semibold">5,000+</span>
                <span class="text-xs uppercase tracking-wider text-[#64748B] font-medium">Homes Illuminated</span>
              </div>
            </div>

            <!-- INSTAGRAM BRAND CONNECTION -->
            <div class="pt-2 flex items-center space-x-2.5 text-xs text-[#64748B]">
              <span class="font-medium text-[#0F172A]">Follow our craft on Instagram:</span>
              <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1.5 text-[#0F172A] hover:text-[#334155] font-medium border-b border-[#0F172A]/30 hover:border-[#0F172A] pb-0.5 transition-all">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>@mercapparelsnaccessories25</span>
              </a>
            </div>

          </div>

        </div>

        <!-- ELEGANT DIVIDER -->
        <div class="my-16 sm:my-20 border-t border-[#CBD5E1]"></div>

        <!-- OUR BUSINESS CREDENTIALS SECTION -->
        <div class="space-y-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#64748B]">
              OFFICIAL VERIFICATION
            </span>
            <h3 class="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal">
              Our Business Credentials
            </h3>
            <p class="text-base text-[#475569] font-sans font-light">
              Registered and established with a commitment to quality, creativity and trust.
            </p>
          </div>

          <!-- TWO BALANCED DOCUMENT CARDS (Side by side on desktop, stacked on mobile) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
            
            <!-- CARD 1: GST REGISTRATION -->
            <div class="bg-white rounded-2xl border border-[#CBD5E1] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div class="space-y-4">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <span class="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#64748B] block">
                      Government of India
                    </span>
                    <h4 class="font-serif text-2xl text-[#0F172A] font-normal mt-1">
                      GST Registration
                    </h4>
                  </div>
                  <div class="w-11 h-11 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] flex-shrink-0 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>

                <div class="w-10 h-[1.5px] bg-[#0F172A]"></div>

                <p class="text-sm text-[#475569] font-sans font-light leading-relaxed">
                  Official GST Registration Certificate (Form GST REG-06) issued by the jurisdictional authority of the State of Maharashtra under the Government of India.
                </p>

                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-[#64748B] uppercase tracking-wider text-[10px] font-medium">Registration Number (GSTIN)</span>
                    <span class="font-mono font-semibold text-[#0F172A]">27BBUPR0507D1ZL</span>
                  </div>
                  <div class="flex items-center justify-between text-xs pt-1 border-t border-[#E2E8F0]/80">
                    <span class="text-[#64748B]">Registered Entity</span>
                    <span class="font-medium text-[#0F172A]">MerC Apparels N Accessories</span>
                  </div>
                </div>
              </div>

              <!-- ACTION BUTTONS -->
              <div class="pt-6 mt-6 border-t border-[#F1F5F9] flex flex-wrap items-center gap-3">
                <button type="button" 
                        onclick="cartStore.openDocument('gst')"
                        class="flex-1 min-w-[140px] px-5 py-2.5 bg-[#0F172A] text-white text-xs uppercase tracking-widest font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center space-x-2">
                  <span>View Certificate</span>
                  <span>&rarr;</span>
                </button>
                <a href="assets/documents/mer-c-gst-registration-certificate.pdf" 
                   download="mer-c-gst-registration-certificate.pdf"
                   class="px-4 py-2.5 bg-white border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC] text-xs uppercase tracking-wider font-medium rounded-xl transition-colors shadow-sm inline-flex items-center space-x-1.5">
                  <span>Download PDF</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- CARD 2: UDYAM / MSME REGISTRATION -->
            <div class="bg-white rounded-2xl border border-[#CBD5E1] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div class="space-y-4">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <span class="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#64748B] block">
                      Government of India
                    </span>
                    <h4 class="font-serif text-2xl text-[#0F172A] font-normal mt-1">
                      Udyam / MSME Registration
                    </h4>
                  </div>
                  <div class="w-11 h-11 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] flex-shrink-0 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                </div>

                <div class="w-10 h-[1.5px] bg-[#0F172A]"></div>

                <p class="text-sm text-[#475569] font-sans font-light leading-relaxed">
                  Official Udyam Registration Certificate issued by the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
                </p>

                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-[#64748B] uppercase tracking-wider text-[10px] font-medium">Udyam Registration Number</span>
                    <span class="font-mono font-semibold text-[#0F172A]">UDYAM-MH-33-0175395</span>
                  </div>
                  <div class="flex items-center justify-between text-xs pt-1 border-t border-[#E2E8F0]/80">
                    <span class="text-[#64748B]">Registered Enterprise</span>
                    <span class="font-medium text-[#0F172A]">MerC Apparels N Accessories</span>
                  </div>
                </div>
              </div>

              <!-- ACTION BUTTONS -->
              <div class="pt-6 mt-6 border-t border-[#F1F5F9] flex flex-wrap items-center gap-3">
                <button type="button" 
                        onclick="cartStore.openDocument('udyam')"
                        class="flex-1 min-w-[140px] px-5 py-2.5 bg-[#0F172A] text-white text-xs uppercase tracking-widest font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center space-x-2">
                  <span>View Certificate</span>
                  <span>&rarr;</span>
                </button>
                <a href="assets/documents/mer-c-udyam-msme-certificate.pdf" 
                   download="mer-c-udyam-msme-certificate.pdf"
                   class="px-4 py-2.5 bg-white border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC] text-xs uppercase tracking-wider font-medium rounded-xl transition-colors shadow-sm inline-flex items-center space-x-1.5">
                  <span>Download PDF</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}


/* --- src/components/CartDrawer.js --- */
/**
 * Slide-Over Shopping Cart Drawer Component
 * Clean Rupee symbol rendering (&#8377;)
 */



function CartDrawer(state) {
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


/* --- src/components/CheckoutModal.js --- */
/**
 * Checkout Flow Modal Component — Integrated with Razorpay & MongoDB Atlas Serverless API
 * Supports Razorpay Standard Checkout (Online Payment).
 * Enforces server-side recalculation and ₹0 free delivery.
 */




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

function CheckoutModal(state) {
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


/* --- src/components/AccountTrackingPage.js --- */
/**
 * Customer Account & Order Tracking Page Component
 * Accessed exclusively via the Header User / Person icon at #/account or /account.
 * Form: Email + Order Number (e.g. MC1005).
 * Verification is handled 100% server-side via /api/track.
 */




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

function AccountTrackingPage(state) {
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


/* --- src/components/WhatsAppInquiry.js --- */
/**
 * Unobtrusive Floating WhatsApp Helper Button Component
 */



function WhatsAppInquiry() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.generalInquiry)}`;

  return `
    <a href="${whatsappUrl}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="fixed bottom-6 right-6 z-30 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
       title="Chat with Mer C. on WhatsApp">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
      </svg>
      <span class="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold uppercase tracking-wider pr-1">
        Inquire Now
      </span>
    </a>
  `;
}


/* --- src/components/DocumentModal.js --- */
/**
 * Official Business Document Lightbox / Modal Viewer Component
 * Displays authentic source PDF certificates (GST & Udyam/MSME) without distortion.
 * Offers responsive fit-to-screen viewing, new-tab inspection, and direct original PDF download.
 */

function DocumentModal(state) {
  const { activeDocument } = state;
  if (!activeDocument) return '';

  return `
    <div id="document-modal-backdrop" 
         class="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
         onclick="if (event.target === this) cartStore.closeDocument()">
      
      <!-- MODAL DIALOG CONTAINER -->
      <div class="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#CBD5E1] text-[#0F172A]"
           onclick="event.stopPropagation()">
        
        <!-- TOP CONTROLS & METADATA BAR -->
        <div class="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between gap-3 flex-shrink-0">
          
          <!-- LEFT: DOCUMENT IDENTITY -->
          <div class="flex items-center space-x-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="min-w-0">
              <div class="flex items-center space-x-2">
                <h3 class="font-serif text-base sm:text-lg font-medium text-[#0F172A] truncate">
                  ${activeDocument.title}
                </h3>
                <span class="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#E2E8F0] text-[#475569] tracking-wider">
                  ${activeDocument.form}
                </span>
              </div>
              <p class="text-xs text-[#64748B] font-mono truncate">
                Reg No: <span class="font-semibold text-[#0F172A]">${activeDocument.number}</span>
              </p>
            </div>
          </div>

          <!-- RIGHT: ACTION CONTROLS & CLOSE -->
          <div class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <!-- OPEN IN NEW TAB -->
            <a href="${activeDocument.path}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="hidden md:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#CBD5E1] bg-white text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A] text-xs font-medium transition-colors shadow-sm"
               title="Open full document in new tab">
              <span>Open in New Tab</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>

            <!-- DOWNLOAD ORIGINAL PDF -->
            <a href="${activeDocument.path}" 
               download="${activeDocument.filename}"
               class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 text-xs font-medium transition-colors shadow-sm"
               title="Download original certificate PDF">
              <span>Download PDF</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>

            <!-- CLOSE BUTTON -->
            <button type="button" 
                    onclick="cartStore.closeDocument()" 
                    class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                    title="Close certificate viewer (Esc)">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

        </div>

        <!-- MAIN PDF VIEWER AREA -->
        <div class="relative flex-grow bg-slate-200 overflow-hidden flex flex-col">
          <iframe src="${activeDocument.path}#toolbar=1&navpanes=0&scrollbar=1" 
                  class="w-full h-full border-0 bg-white"
                  title="${activeDocument.title}">
          </iframe>

          <!-- MOBILE / FALLBACK NOTICE STRIP -->
          <div class="md:hidden px-4 py-2 bg-[#F1F5F9] border-t border-[#CBD5E1] text-[11px] text-[#475569] flex items-center justify-between">
            <span class="truncate">Official Certificate • Verified</span>
            <a href="${activeDocument.path}" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0F172A] underline flex items-center space-x-1 flex-shrink-0">
              <span>Open in New Tab</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
}


/* --- src/components/Footer.js --- */
/**
 * Premium Minimalist Footer Component
 */




function Footer() {
  return `
    <footer id="footer" class="bg-[#F0F4F8] border-t border-[#CBD5E1] pt-16 pb-12 text-[#475569]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#CBD5E1]">
          
          <!-- COLUMN 1: BRAND LOGO & STATEMENT -->
          <div class="md:col-span-4 space-y-4">
            <div class="flex flex-col items-start cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
              <span class="font-serif text-3xl text-[#0F172A] tracking-tight font-medium">
                ${SITE_CONFIG.brandName}
              </span>
              <span class="text-[9px] uppercase tracking-[0.25em] text-[#64748B] font-semibold mt-1 font-sans">
                APPARELS N ACCESSORIES
              </span>
            </div>

            <p class="text-xs text-[#64748B] font-light leading-relaxed max-w-sm">
              Premium handcrafted candles and artistic decor pieces, thoughtfully sculpted to bring warmth and beauty to your home and corporate celebrations.
            </p>

            <!-- SOCIAL MEDIA ICONS -->
            <div class="flex items-center space-x-3 pt-2">
              <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors" title="Follow us on Instagram (@mercapparelsnaccessories25)">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors" title="Facebook">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.592 0 9 1.847 9 5.052V8z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors" title="Pinterest">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <div class="pt-1">
              <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#64748B] hover:text-[#0F172A] inline-flex items-center gap-1.5 transition-colors">
                <span class="font-medium text-[#0F172A]">Instagram:</span>
                <span class="font-mono text-[11px] text-slate-600">@mercapparelsnaccessories25</span>
                <span class="text-[10px] text-slate-400">↗</span>
              </a>
            </div>
          </div>

          <!-- COLUMN 2: SHOP NAVIGATION -->
          <div class="md:col-span-3 space-y-3 text-xs uppercase tracking-wider">
            <h3 class="font-semibold text-[#0F172A]">Explore Collections</h3>
            <ul class="space-y-2 text-[#475569] font-normal lowercase tracking-normal">
              <li><a href="#catalog" onclick="cartStore.setCategory('All')" class="hover:text-[#0F172A] transition-colors">Shop All Candles</a></li>
              <li><a href="#catalog" onclick="cartStore.setCategory('Decorative Bowls')" class="hover:text-[#0F172A] transition-colors">Decorative Bowls</a></li>
              <li><a href="#catalog" onclick="cartStore.setCategory('Festive Urlis')" class="hover:text-[#0F172A] transition-colors">Festive Urlis</a></li>
              <li><a href="#catalog" onclick="cartStore.setCategory('Glass Jars')" class="hover:text-[#0F172A] transition-colors">Glass Jars</a></li>
              <li><a href="#resin-art" class="hover:text-[#0F172A] transition-colors">Resin Art (Coming Soon)</a></li>
            </ul>
          </div>

          <!-- COLUMN 3: BUSINESS & GIFTING -->
          <div class="md:col-span-2 space-y-3 text-xs uppercase tracking-wider">
            <h3 class="font-semibold text-[#0F172A]">Company</h3>
            <ul class="space-y-2 text-[#475569] font-normal lowercase tracking-normal">
              <li><a href="#about" class="hover:text-[#0F172A] transition-colors">About Mer C.</a></li>
              <li><a href="#corporate-gifting" class="hover:text-[#0F172A] transition-colors">Corporate Gifting</a></li>
              <li><a href="#corporate-gifting" class="hover:text-[#0F172A] transition-colors">Bulk Orders</a></li>
              <li><a href="#hero" class="hover:text-[#0F172A] transition-colors">Custom Decor</a></li>
              <li><a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="hover:text-[#0F172A] transition-colors inline-flex items-center gap-1 font-medium text-[#0F172A]"><span>Instagram</span><span class="text-[10px] text-slate-400">↗</span></a></li>
            </ul>
          </div>

          <!-- COLUMN 4: POLICIES & SUPPORT -->
          <div class="md:col-span-3 space-y-3 text-xs uppercase tracking-wider">
            <h3 class="font-semibold text-[#0F172A]">Customer Policies</h3>
            <ul class="space-y-2 text-[#475569] font-normal lowercase tracking-normal">
              <li><a href="#" onclick="alert('Shipping Policy: Pan-India express delivery within 3-5 business days. Delivery is completely FREE for all products and orders with no minimum order threshold.')" class="hover:text-[#0F172A] transition-colors">Shipping Policy</a></li>
              <li><a href="#" onclick="alert('Refund Policy: Damaged items are replaced free of charge upon unboxing proof within 48 hours.')" class="hover:text-[#0F172A] transition-colors">Refund & Replacement Policy</a></li>
              <li><a href="#" onclick="alert('Privacy Policy: Mer C. respects your data privacy. Customer information is never shared.')" class="hover:text-[#0F172A] transition-colors">Privacy Policy</a></li>
              <li><a href="#" onclick="alert('Terms & Conditions: Standard e-commerce commercial terms apply to all transactions.')" class="hover:text-[#0F172A] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        <!-- COPYRIGHT & CREDITS -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] space-y-2 sm:space-y-0">
          <p>© 2026 Mer C. Apparels N Accessories. All rights reserved.</p>
          <p class="font-serif italic text-slate-500">Handcrafted Premium E-Commerce Platform</p>
        </div>

      </div>
    </footer>
  `;
}


/* --- src/app.js --- */
/**
 * Main Application Orchestrator & Mount System
 * Unifies Customer E-Commerce Storefront & Professional Admin Panel
 */




























// Attach global helpers to window for reliable HTML inline event handling
window.SITE_CONFIG = SITE_CONFIG;
window.PRODUCTS = PRODUCTS;
window.CUSTOM_WORK_CATEGORIES = CUSTOM_WORK_CATEGORIES;
window.HOMEPAGE_PORTFOLIO_PREVIEWS = HOMEPAGE_PORTFOLIO_PREVIEWS;
window.cartStore = cartStore;
window.adminStore = adminStore;

window.openProductById = (id) => {
  const p = PRODUCTS.find(item => item.id === id);
  if (p) cartStore.openProductDetail(p);
};

window.addToCartById = (id, quantity = 1, openDrawer = false) => {
  const p = PRODUCTS.find(item => item.id === id);
  if (p) cartStore.addToCart(p, quantity, openDrawer);
};

window.orderNowById = (id, quantity = 1) => {
  const p = PRODUCTS.find(item => item.id === id);
  if (p) cartStore.orderNow(p, quantity);
};

window.toggleWishlistById = (id) => {
  const p = PRODUCTS.find(item => item.id === id);
  if (p) cartStore.toggleWishlist(p);
};

window.openDocumentModal = (docId) => {
  cartStore.openDocument(docId);
};

window.closeDocumentModal = () => {
  cartStore.closeDocument();
};

window.toggleMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
};

window.toggleSearchOverlay = (force) => {
  if (typeof force === 'boolean') {
    cartStore.isSearchOpen = force;
  } else {
    cartStore.isSearchOpen = !cartStore.isSearchOpen;
  }
  const overlay = document.getElementById('search-overlay');
  if (overlay) {
    if (cartStore.isSearchOpen) {
      overlay.classList.remove('hidden');
      const input = document.getElementById('search-input');
      if (input) input.focus();
    } else {
      overlay.classList.add('hidden');
    }
  }
};

function captureFormState() {
  const activeEl = document.activeElement;
  let activeInfo = null;

  if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) {
    activeInfo = {
      id: activeEl.id || null,
      name: activeEl.name || null,
      type: activeEl.type || null,
      value: activeEl.value,
      selectionStart: (typeof activeEl.selectionStart === 'number') ? activeEl.selectionStart : null,
      selectionEnd: (typeof activeEl.selectionEnd === 'number') ? activeEl.selectionEnd : null,
      formId: activeEl.form ? activeEl.form.id || null : null
    };
  }

  const formsData = {};
  const forms = document.querySelectorAll('form');
  forms.forEach((form, fIdx) => {
    const key = form.id || form.name || `form_${fIdx}`;
    const fieldValues = {};
    const elements = form.querySelectorAll('input, textarea, select');
    elements.forEach(el => {
      if (el.name) {
        if (el.type === 'checkbox') {
          fieldValues[el.name] = el.checked;
        } else if (el.type === 'radio') {
          if (el.checked) fieldValues[el.name] = el.value;
        } else {
          fieldValues[el.name] = el.value;
        }
      }
    });
    formsData[key] = fieldValues;
  });

  return { activeInfo, formsData };
}

function restoreFormState(snapshot) {
  if (!snapshot) return;
  const { activeInfo, formsData } = snapshot;

  if (formsData) {
    const forms = document.querySelectorAll('form');
    forms.forEach((form, fIdx) => {
      const key = form.id || form.name || `form_${fIdx}`;
      const savedFields = formsData[key];
      if (savedFields) {
        Object.entries(savedFields).forEach(([name, val]) => {
          const el = form.querySelector(`[name="${name}"]`);
          if (el && el.value !== val) {
            if (el.type === 'checkbox') {
              el.checked = Boolean(val);
            } else if (el.type === 'radio') {
              if (el.value === val) el.checked = true;
            } else {
              el.value = val;
            }
          }
        });
      }
    });
  }

  if (activeInfo) {
    let target = null;
    if (activeInfo.id) {
      target = document.getElementById(activeInfo.id);
    }
    if (!target && activeInfo.name) {
      if (activeInfo.formId) {
        const f = document.getElementById(activeInfo.formId);
        if (f) target = f.querySelector(`[name="${activeInfo.name}"]`);
      }
      if (!target) {
        target = document.querySelector(`[name="${activeInfo.name}"]`);
      }
    }

    if (target && typeof target.focus === 'function') {
      if (typeof activeInfo.value === 'string' && target.value !== activeInfo.value) {
        target.value = activeInfo.value;
      }
      target.focus();
      if (typeof activeInfo.selectionStart === 'number' && typeof target.setSelectionRange === 'function') {
        try {
          target.setSelectionRange(activeInfo.selectionStart, activeInfo.selectionEnd);
        } catch (_) {}
      }
    }
  }
}

function renderApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const formSnapshot = captureFormState();
  const state = cartStore.getState();

  // 1. ADMIN AREA (When routed to #/admin or /admin)
  if (state.isAdminRoute) {
    const adminState = adminStore.getState();
    if (adminState.isAuthenticated) {
      appContainer.innerHTML = AdminDashboard(adminState);
    } else {
      appContainer.innerHTML = AdminLogin(adminState);
    }
    restoreFormState(formSnapshot);
    return;
  }

  // 2. CUSTOMER-FACING STOREFRONT
  appContainer.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#F0F4F8] text-[#0F172A] selection:bg-[#0F172A] selection:text-white font-sans antialiased">
      
      <!-- HEADER -->
      ${Header(state)}

      <!-- MAIN CONTENT AREA -->
      <main class="flex-grow">
        ${state.isOurWorkPage ? `
          <!-- DEDICATED OUR WORK SHOWCASE VIEW -->
          ${OurWorkPage()}
        ` : state.isAccountPage ? `
          <!-- DEDICATED CUSTOMER ACCOUNT / TRACK ORDER VIEW -->
          ${AccountTrackingPage(state)}
        ` : `
          <!-- HOMEPAGE CORE VIEWS -->
          ${Hero()}
          ${ResinComingSoon(state)}
          ${FeatureStrip()}
          ${ProductGrid(state)}
          ${ResinProductGrid(state)}
          ${CorporateGifting()}
          ${TrustedClients()}
          ${AboutSection()}
        `}
      </main>

      <!-- FOOTER -->
      ${Footer()}

      <!-- OVERLAYS & MODALS -->
      ${ProductDetailModal(state)}
      ${PortfolioLightbox(state)}
      ${CartDrawer(state)}
      ${CheckoutModal(state)}
      ${DocumentModal(state)}
      ${WhatsAppInquiry()}

    </div>
  `;

  restoreFormState(formSnapshot);
}

// Single-registration lifecycle initialization
let hasMounted = false;
function initApp() {
  if (hasMounted) return;
  hasMounted = true;
  renderApp();
  cartStore.subscribe(renderApp);
  adminStore.subscribe(renderApp);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

