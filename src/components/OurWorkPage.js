/**
 * Dedicated "Our Work" Portfolio Showcase Page Component
 * Renders all 44 authentic client project photographs organized across the 4 categories
 * Pure portfolio showcase with Lightbox viewing and WhatsApp inquiry — strictly zero e-commerce actions.
 */

import { SITE_CONFIG } from '../config/siteConfig.js';
import { CUSTOM_WORK_CATEGORIES } from '../data/ourWorkPortfolio.js';

export function OurWorkPage() {
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
