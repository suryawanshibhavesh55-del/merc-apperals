/**
 * Centralized Product Catalog Schema for Mer C.
 * Updated: Each product features exclusively its own single high-resolution photography asset.
 */

export const PRODUCTS = [
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

export const CATEGORIES = [
  "All",
  "Candles",
  "Resin Art",
  "Decorative Bowls",
  "Festive Urlis",
  "Glass Jars",
  "Sculptural Candles"
];
