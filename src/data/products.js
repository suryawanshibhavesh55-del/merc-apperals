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
    id: "merc-candle-05",
    name: "Emerald Lotus Pond Urli Candle",
    subtitle: "Handcrafted Lotus Pond with Sculpted Lilies & Boat in Scalloped Vessel",
    category: "Festive Urlis",
    mainCategory: "Candles",
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 28,
    images: [
      "assets/new candle/emerald-lotus-pond-urli-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Handcrafted Luxury",
    shortDescription: "A serene scalloped brass urli candle featuring a jade-green pond with sculpted floating lotus blossoms, miniature boat, and shimmering gold accents in a luxury gift box.",
    fullDescription: "Transform any festive evening or special sanctuary with the Emerald Lotus Pond Urli Candle. Meticulously handcrafted by Mer C., this artisanal centerpiece replicates a tranquil lotus pond with sculpted pink lotus blossoms, water lily pods, and a wooden boat floating atop mint-green soy wax infused with delicate gold shimmer, encased in a scalloped gold vessel and luxury gift box.",
    specifications: {
      waxType: "100% Pure Soy Wax & Botanical Fragrance",
      weight: "550g",
      fragrance: "Mogra & Fresh Lotus Blossom",
      container: "Scalloped Brass-Finish Urli Vessel with Luxury Gift Box",
      dimensions: "16cm Diameter x 5.5cm Height"
    },
    careInstructions: [
      "Light all cotton wicks simultaneously for an even, tranquil burn pool.",
      "Place on flat heat-resistant surfaces away from drafts.",
      "Trim wicks to 5mm before every use."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-06",
    name: "Azure Lotus Pond Pearl Candle",
    subtitle: "Sky-Blue Scalloped Lotus Pond with Floating Blooms & Luminous Pearls",
    category: "Festive Urlis",
    mainCategory: "Candles",
    price: 499,
    originalPrice: 699,
    rating: 5.0,
    reviewsCount: 34,
    images: [
      "assets/new candle/azure-lotus-pond-pearl-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Heritage Edition",
    shortDescription: "A breathtaking sky-blue water pond candle adorned with handcrafted crimson lotus blossoms, pearl drops, and a miniature wooden canoe in a scalloped metallic urli.",
    fullDescription: "Inspired by tranquil temple water bodies, the Azure Lotus Pond Pearl Candle is an ode to traditional Indian craftsmanship. Featuring delicate sculpted pink and ruby lotuses, freshwater pearl accents, and a handcrafted boat floating gracefully across celestial blue soy wax. Packaged in an exquisite white gift box ready for gifting.",
    specifications: {
      waxType: "Natural Soy Wax & Eco-Friendly Dyes",
      weight: "550g",
      fragrance: "Cool Lotus Mist & White Jasmine",
      container: "Scalloped Gold-Finish Urli Vessel with Luxury Presentation Box",
      dimensions: "16cm Diameter x 5.5cm Height"
    },
    careInstructions: [
      "Burn within sight and keep away from children and pets.",
      "Place on the included presentation surface or a decorative coaster."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-07",
    name: "Jade Succulent Garden Brass Candle",
    subtitle: "Sculpted Botanical Succulent Cluster in Polished Brass Bowl",
    category: "Decorative Bowls",
    mainCategory: "Candles",
    price: 429,
    originalPrice: 579,
    rating: 4.9,
    reviewsCount: 22,
    images: [
      "assets/new candle/jade-succulent-garden-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Botanical Art",
    shortDescription: "A lush garden of hand-poured jade green succulents nestled in pure cream soy wax, presented in a radiant brass bowl inside a festive crimson gift box.",
    fullDescription: "Bring everlasting botanical beauty into your home with the Jade Succulent Garden Candle. Each miniature succulent rosette is individually hand-molded with botanical precision and placed over a silky ivory soy wax bed. Encased in a polished brass bowl and packed in an opulent ruby red gift box.",
    specifications: {
      waxType: "100% Pure Plant-Based Soy Wax",
      weight: "400g",
      fragrance: "Eucalyptus, Sage & Wild Bamboo",
      container: "Polished Gold Metal Bowl in Crimson Presentation Box",
      dimensions: "13cm Diameter x 6cm Height"
    },
    careInstructions: [
      "Allow wax pool to reach the container edge on first burn.",
      "Wipe brass exterior gently with a dry microfiber cloth."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-08",
    name: "Sacred Ganesha Leaf Art Urli Candle",
    subtitle: "Devotional Lord Ganesha Form in Sacred Green Leaves & Saffron Wax",
    category: "Festive Urlis",
    mainCategory: "Candles",
    price: 549,
    originalPrice: 749,
    rating: 5.0,
    reviewsCount: 41,
    images: [
      "assets/new candle/sacred-ganesha-leaf-art-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Auspicious Edition",
    shortDescription: "An auspicious handcrafted Lord Ganesha depicted in sacred betel-style sculpted leaves with holy tilak on vibrant golden saffron wax with floral pastel confetti.",
    fullDescription: "Invite divine blessings, prosperity, and peace into your living space with the Sacred Ganesha Leaf Art Candle. The revered form of Lord Ganesha is sculpted from pure wax leaves with vermilion and sandalwood tilak, floating upon a golden saffron wax surface accented by pastel flower sprinkles. Ideal for Diwali, housewarmings, pooja rooms, and spiritual gifting.",
    specifications: {
      waxType: "Auspicious Natural Soy Wax Blend",
      weight: "500g",
      fragrance: "Chandan, Kesar & Fresh Marigold",
      container: "Scalloped Brass Urli in Luxury Presentation Box",
      dimensions: "16cm Diameter x 5.5cm Height"
    },
    careInstructions: [
      "Ideal for pooja rooms, mandirs, and festive entrances.",
      "Burn on a heat-safe surface away from flammable items."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-09",
    name: "Pastel Blossom Bouquet Urli Candle",
    subtitle: "Multi-Color Hand-Carved Florals over Shimmering Lilac Soy Wax",
    category: "Decorative Bowls",
    mainCategory: "Candles",
    price: 429,
    originalPrice: 579,
    rating: 4.8,
    reviewsCount: 19,
    images: [
      "assets/new candle/pastel-blossom-bouquet-urli-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Artisanal Bloom",
    shortDescription: "An enchanting garden of hand-carved floral blossoms in pastel pink, cobalt, lavender, and ivory set over sparkling lilac soy wax in a scalloped vessel.",
    fullDescription: "A celebration of springtime florals, the Pastel Blossom Bouquet Candle features over a dozen hand-sculpted miniature roses, dahlias, and daisies arranged in a vibrant meadow pattern. Set against a luminous lilac wax backdrop with fine shimmer, this candle radiates romantic warmth and soft floral fragrance.",
    specifications: {
      waxType: "Eco Soy Wax with Cosmetic-Grade Shimmer",
      weight: "520g",
      fragrance: "Wild Orchid & French Lilac",
      container: "Scalloped Gold Metal Urli in Premium Gift Box",
      dimensions: "15.5cm Diameter x 5.5cm Height"
    },
    careInstructions: [
      "Trim wick to 1/4 inch before each lighting.",
      "Keep away from direct heat and excessive sunlight."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-10",
    name: "Golden Sunflower Meadow Brass Urli",
    subtitle: "Vibrant Hand-Sculpted Sunflowers with Gold Glitter over Mint Wax",
    category: "Festive Urlis",
    mainCategory: "Candles",
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 26,
    images: [
      "assets/new candle/golden-sunflower-meadow-brass-urli.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Sunlight Radiance",
    shortDescription: "A radiant arrangement of golden-petaled sunflowers dusted with micro gold shimmer across a refreshing seafoam green wax base in a brass scalloped urli.",
    fullDescription: "Brighten any room with the joy and vitality of the Golden Sunflower Meadow Candle. Featuring seven handcrafted sunburst sunflowers with sparkling amber centers resting on a soothing pastel mint wax pond. Multi-wick design ensures a wide, tranquil pool of warm golden illumination.",
    specifications: {
      waxType: "Pure Soy & Golden Wax Infusion",
      weight: "550g",
      fragrance: "Sunny Citrus & Wild Sunflower Petals",
      container: "Scalloped Brass Finish Urli Vessel",
      dimensions: "16.5cm Diameter x 5.5cm Height"
    },
    careInstructions: [
      "Light all wicks simultaneously for uniform melting.",
      "Do not move candle while liquid wax pool is hot."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-11",
    name: "Royal Pink Dahlia Bloom Urli Candle",
    subtitle: "Statement Sculpted Dahlia with 24K Gold Leaf Flakes & Pearl Center",
    category: "Sculptural Candles",
    mainCategory: "Candles",
    price: 399,
    originalPrice: 549,
    rating: 4.9,
    reviewsCount: 23,
    images: [
      "assets/new candle/royal-pink-dahlia-bloom-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Statement Bloom",
    shortDescription: "A majestic centerpiece candle featuring an oversized sculpted pink dahlia with textured stamen and genuine gold foil leafing inside a scalloped gold frame.",
    fullDescription: "The Royal Pink Dahlia Bloom Candle stands as a centerpiece of floral elegance. Each delicate petal is sculpted with realistic folds and adorned with flecks of gold leaf, blooming proudly from a pearlescent white wax base inside a scalloped golden vessel. Packaged in a windowed gift box.",
    specifications: {
      waxType: "100% Hand-Poured Soy Wax & Gold Leaf",
      weight: "380g",
      fragrance: "Peony Petals & Creamy White Musk",
      container: "Scalloped Brass Vessel in White Gift Box",
      dimensions: "13.5cm Diameter x 6cm Height"
    },
    careInstructions: [
      "Place on a level coaster before lighting.",
      "Trim wick to 5mm before every burn session."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-12",
    name: "Imperial Lavender Peony Lotus Bowl Candle",
    subtitle: "Artisanal Tiered Peony Rose in Sculpted Brass Lotus Chalice",
    category: "Decorative Bowls",
    mainCategory: "Candles",
    price: 449,
    originalPrice: 599,
    rating: 5.0,
    reviewsCount: 31,
    images: [
      "assets/new candle/imperial-lavender-peony-lotus-bowl.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Royal Elegance",
    shortDescription: "A lavish full-bloom lavender peony with silver shimmer edges nestled in a heavy cast brass 6-petal lotus chalice on a marble coaster.",
    fullDescription: "Exuding supreme sophistication, the Imperial Lavender Peony Candle showcases a dense, multi-layered wax peony rose in rich lilac hues, brushed with silver shimmer. It rests gracefully inside an upward-curving gold petal metallic lotus bowl, casting radiant shadows when illuminated.",
    specifications: {
      waxType: "High-Purity Botanical Soy Wax",
      weight: "420g",
      fragrance: "English Lavender & Frosted Peony",
      container: "Brushed Brass Petal Lotus Chalice Bowl",
      dimensions: "13cm Diameter x 7.5cm Height"
    },
    careInstructions: [
      "Burn for 2 to 3 hours maximum per lighting session.",
      "Ensure vessel has completely cooled before handling."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-13",
    name: "Sacred Brass Kurma (Turtle) Pearl Candle",
    subtitle: "Auspicious Kurma Pedestal Bowl with Pearl Spheres & Pure Gold Leaf",
    category: "Festive Urlis",
    mainCategory: "Candles",
    price: 599,
    originalPrice: 799,
    rating: 5.0,
    reviewsCount: 47,
    images: [
      "assets/new candle/sacred-brass-kurma-pearl-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Vastu & Auspicious",
    shortDescription: "An auspicious handcrafted cast-brass Kurma (tortoise) holding a scalloped candle bowl with ivory soy wax, iridescent pearl spheres, and gold foil.",
    fullDescription: "Symbolizing longevity, stability, and abundance according to ancient Vastu Shastra traditions, the Sacred Kurma Candle features an artisanal heavy brass turtle base carrying an open lotus urli. Filled with fragrant ivory soy wax, lustrous pearl-like wax spheres, and genuine gold leaf flakes. An incomparable auspicious gift for Diwali and Griha Pravesh.",
    specifications: {
      waxType: "100% Natural Soy Wax & Gold Flakes",
      weight: "620g",
      fragrance: "Royal Sandalwood & Vedic Oudh",
      container: "Solid Cast Brass Kurma (Turtle) Pedestal Vessel",
      dimensions: "17cm Length x 14cm Width x 8cm Height"
    },
    careInstructions: [
      "Place facing east or north for positive energy and vastu harmony.",
      "Cleanse brass exterior with dry cloth."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-14",
    name: "Dual Blossom Luxury Urli Candle Gift Set",
    subtitle: "Pack of 2 Scalloped Urli Candles in Premium Ribboned Gift Box",
    category: "Decorative Bowls",
    mainCategory: "Candles",
    price: 649,
    originalPrice: 899,
    rating: 5.0,
    reviewsCount: 38,
    images: [
      "assets/new candle/dual-blossom-luxury-urli-gift-set.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Gift Set (Pack of 2)",
    shortDescription: "A luxury duo gift box featuring two full-size scalloped urli candles: a royal lavender peony and a sunny yellow tea rose with festive ribbon and greeting card.",
    fullDescription: "The ultimate gifting experience. This curated presentation set holds two stunning scalloped metal candles: one featuring a lavender peony bloom and the second featuring a sunny golden tea rose on creamy ivory wax. Housed inside a satin-lined black and gold designer gift box tied with an elegant golden bow.",
    specifications: {
      waxType: "100% Pure Soy Wax (2 × 280g Candles)",
      weight: "750g Total Set Weight",
      fragrance: "Rose de Mai & Sweet Citrus Vanilla",
      container: "Two Scalloped Brass Urli Bowls in Luxury Gift Hamper Box",
      dimensions: "Gift Box: 28cm x 16cm x 7cm"
    },
    careInstructions: [
      "Remove all ribbon and packaging tags before burning.",
      "Burn candles on separate heat-resistant coasters."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-15",
    name: "Luminous Pink Lotus & Pearl Chalice Candle",
    subtitle: "Full-Bloom Pink Lotus with Shimmering Pearls in Gold Lotus Chalice",
    category: "Festive Urlis",
    mainCategory: "Candles",
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 29,
    images: [
      "assets/new candle/luminous-pink-lotus-pearl-chalice.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Divine Radiance",
    shortDescription: "A radiant sculpted pink lotus flower centered amidst smooth pearl spheres in a soft mint wax base, cradled in a brass-finish petal chalice.",
    fullDescription: "Embodying purity and enlightenment, the Luminous Pink Lotus & Pearl Chalice Candle features a hand-sculpted blooming lotus blossom surrounded by lustrous ivory pearls on seafoam wax. The dramatic upturned gold lotus petals create reflections and warmth, making it a captivating decor highlight.",
    specifications: {
      waxType: "Natural Soy Wax & Luminous Wax Pearls",
      weight: "420g",
      fragrance: "Lotus Bloom, Lily of the Valley & White Tea",
      container: "Upturned Brass Petal Lotus Vessel",
      dimensions: "13.5cm Diameter x 8cm Height"
    },
    careInstructions: [
      "Place on the included wooden charger or a marble tray.",
      "Trim wick to 1/4 inch before each burn."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
  },
  {
    id: "merc-candle-16",
    name: "Four-Color Floral Symphony Brass Candle",
    subtitle: "Four Vibrant Blossom Clusters (Red, Yellow, Orange, Blue) in Brass Bowl",
    category: "Decorative Bowls",
    mainCategory: "Candles",
    price: 429,
    originalPrice: 579,
    rating: 4.8,
    reviewsCount: 17,
    images: [
      "assets/new candle/four-color-floral-symphony-candle.jpeg"
    ],
    isFeatured: true,
    isHeroBanner: false,
    badge: "Vibrant Garden",
    shortDescription: "Four distinct floral bouquets in ruby red, marigold yellow, warm amber, and royal blue nestled with emerald foliage in a round brass bowl inside a white gift box.",
    fullDescription: "A vibrant harmony of colors and botanical artistry. The Four-Color Floral Symphony Candle features four distinct clusters of intricately molded wax blossoms in radiant red, gold, orange, and electric blue, framed with green leaves over pure white soy wax. Housed in a round gold bowl and packaged in a gift box.",
    specifications: {
      waxType: "Handcrafted 100% Soy Wax Blend",
      weight: "450g",
      fragrance: "Tropical Frangipani, Hibiscus & Bergamot",
      container: "Round Gold Metal Container in White Gift Box",
      dimensions: "13.5cm Diameter x 6cm Height"
    },
    careInstructions: [
      "Keep wick centered and trimmed to 5mm.",
      "Burn away from drafts, paper, and combustible decor."
    ],
    availability: "In Stock",
    stock: 25,
    isActive: true
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
