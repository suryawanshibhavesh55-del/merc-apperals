/**
 * Feature Trust Strip Component — Clones exact 4-column divided bar from reference design
 */

export function FeatureStrip() {
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
