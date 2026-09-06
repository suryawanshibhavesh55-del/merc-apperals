/**
 * About Mer C. Brand Story Section Component
 */

import { SITE_CONFIG } from '../config/siteConfig.js';

export function AboutSection() {
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
