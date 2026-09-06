/**
 * Main Application Orchestrator & Mount System
 * Unifies Customer E-Commerce Storefront & Professional Admin Panel
 */

import { SITE_CONFIG } from './config/siteConfig.js';
import { PRODUCTS } from './data/products.js';
import { CUSTOM_WORK_CATEGORIES, HOMEPAGE_PORTFOLIO_PREVIEWS } from './data/ourWorkPortfolio.js';
import { cartStore } from './context/CartState.js';
import { adminStore } from './admin/adminStore.js';
import { AdminLogin } from './admin/AdminLogin.js';
import { AdminDashboard } from './admin/AdminDashboard.js';

import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { ResinComingSoon } from './components/ResinComingSoon.js';
import { ResinProductGrid } from './components/ResinProductGrid.js';
import { FeatureStrip } from './components/FeatureStrip.js';
import { ProductGrid } from './components/ProductGrid.js';
import { ProductDetailModal } from './components/ProductDetailModal.js';
import { CorporateGifting } from './components/CorporateGifting.js';
import { OurWorkPage } from './components/OurWorkPage.js';
import { AccountTrackingPage } from './components/AccountTrackingPage.js';
import { PortfolioLightbox } from './components/PortfolioLightbox.js';
import { TrustedClients } from './components/TrustedClients.js';
import { AboutSection } from './components/AboutSection.js';
import { CartDrawer } from './components/CartDrawer.js';
import { CheckoutModal } from './components/CheckoutModal.js';
import { WhatsAppInquiry } from './components/WhatsAppInquiry.js';
import { DocumentModal } from './components/DocumentModal.js';
import { Footer } from './components/Footer.js';

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
