/**
 * Corporate Gifting Section Component — Preserves existing approved layout & adds "Our Work" portfolio preview
 */

import { SITE_CONFIG } from '../config/siteConfig.js';
import { HOMEPAGE_PORTFOLIO_PREVIEWS } from '../data/ourWorkPortfolio.js';

export function CorporateGifting() {
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
