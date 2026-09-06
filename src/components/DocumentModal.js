/**
 * Official Business Document Lightbox / Modal Viewer Component
 * Displays authentic source PDF certificates (GST & Udyam/MSME) without distortion.
 * Offers responsive fit-to-screen viewing, new-tab inspection, and direct original PDF download.
 */

export function DocumentModal(state) {
  const { activeDocument } = state;
  if (!activeDocument) return '';

  return `
    <div id="document-modal-backdrop" 
         class="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
         onclick="if (event.target === this) cartStore.closeDocument()">
      
      <!-- MODAL DIALOG CONTAINER -->
      <div class="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#CBD5E1] text-[#0F172A]"
           onclick="event.stopPropagation()">
        
        <!-- TOP CONTROLS & METADATA BAR -->
        <div class="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between gap-3 flex-shrink-0">
          
          <!-- LEFT: DOCUMENT IDENTITY -->
          <div class="flex items-center space-x-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="min-w-0">
              <div class="flex items-center space-x-2">
                <h3 class="font-serif text-base sm:text-lg font-medium text-[#0F172A] truncate">
                  ${activeDocument.title}
                </h3>
                <span class="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#E2E8F0] text-[#475569] tracking-wider">
                  ${activeDocument.form}
                </span>
              </div>
              <p class="text-xs text-[#64748B] font-mono truncate">
                Reg No: <span class="font-semibold text-[#0F172A]">${activeDocument.number}</span>
              </p>
            </div>
          </div>

          <!-- RIGHT: ACTION CONTROLS & CLOSE -->
          <div class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <!-- OPEN IN NEW TAB -->
            <a href="${activeDocument.path}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="hidden md:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#CBD5E1] bg-white text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A] text-xs font-medium transition-colors shadow-sm"
               title="Open full document in new tab">
              <span>Open in New Tab</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>

            <!-- DOWNLOAD ORIGINAL PDF -->
            <a href="${activeDocument.path}" 
               download="${activeDocument.filename}"
               class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 text-xs font-medium transition-colors shadow-sm"
               title="Download original certificate PDF">
              <span>Download PDF</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>

            <!-- CLOSE BUTTON -->
            <button type="button" 
                    onclick="cartStore.closeDocument()" 
                    class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                    title="Close certificate viewer (Esc)">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

        </div>

        <!-- MAIN PDF VIEWER AREA -->
        <div class="relative flex-grow bg-slate-200 overflow-hidden flex flex-col">
          <iframe src="${activeDocument.path}#toolbar=1&navpanes=0&scrollbar=1" 
                  class="w-full h-full border-0 bg-white"
                  title="${activeDocument.title}">
          </iframe>

          <!-- MOBILE / FALLBACK NOTICE STRIP -->
          <div class="md:hidden px-4 py-2 bg-[#F1F5F9] border-t border-[#CBD5E1] text-[11px] text-[#475569] flex items-center justify-between">
            <span class="truncate">Official Certificate • Verified</span>
            <a href="${activeDocument.path}" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0F172A] underline flex items-center space-x-1 flex-shrink-0">
              <span>Open in New Tab</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
}
