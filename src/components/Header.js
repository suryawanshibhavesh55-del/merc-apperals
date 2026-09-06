/**
 * Premium Header Component — Clones exact proportions, typography, and spacing of reference design
 */

import { SITE_CONFIG } from '../config/siteConfig.js';
import { cartStore } from '../context/CartState.js';

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

export function Header(state) {
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
