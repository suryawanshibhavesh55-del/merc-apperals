/**
 * State Management Store for Mer C. E-Commerce & Portfolio
 * Handles Cart items, Wishlist, Hash Routing, Toast Notifications, Our Work Portfolio, Lightbox, LocalStorage,
 * and live MongoDB product catalog synchronization.
 */

import { SITE_CONFIG } from '../config/siteConfig.js';
import { PRODUCTS } from '../data/products.js';
import { CUSTOM_WORK_CATEGORIES } from '../data/ourWorkPortfolio.js';

export const OFFICIAL_DOCUMENTS = {
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

export const cartStore = new CartStore();
window.refreshCustomerProducts = () => cartStore.fetchLiveProducts();
