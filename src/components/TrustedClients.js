/**
 * Corporate Client Logos Showcase Component — Replaces product cards with clean brand logo grid matching Alice Blue theme
 */

import { CORPORATE_LOGOS } from '../data/corporateLogos.js';

export function TrustedClients() {
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
