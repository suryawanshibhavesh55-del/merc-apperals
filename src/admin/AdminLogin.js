/**
 * Admin Login Page Component
 * Minimalist, luxury aesthetic matching Mer C. brand identity.
 */

import { adminStore } from './adminStore.js';

let showPassword = false;

window.toggleAdminPasswordVisibility = () => {
  showPassword = !showPassword;
  const input = document.getElementById('admin-password-input');
  if (input) {
    input.type = showPassword ? 'text' : 'password';
  }
  const eyeIcon = document.getElementById('admin-eye-icon');
  if (eyeIcon) {
    eyeIcon.innerHTML = showPassword 
      ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />`
      : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`;
  }
};

window.handleAdminLoginSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const username = form.username.value;
  const password = form.password.value;
  await adminStore.login(username, password);
};

export function AdminLogin(state) {
  const { isLoading, errorMessage } = state;

  return `
    <div class="min-h-screen bg-[#F0F4F8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <!-- BRAND LOGO -->
        <span class="font-serif text-4xl text-[#0F172A] tracking-tight font-medium">
          Mer C.
        </span>
        <h2 class="mt-2 text-xs uppercase tracking-[0.25em] text-[#64748B] font-semibold">
          Admin Dashboard
        </h2>
        <div class="w-10 h-[1.5px] bg-[#0F172A] mx-auto mt-3"></div>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div class="bg-white py-8 px-6 sm:px-10 rounded-2xl border border-[#CBD5E1] shadow-sm">
          
          ${errorMessage ? `
            <div class="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2 animate-fadeIn">
              <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>${errorMessage}</span>
            </div>
          ` : ''}

          <form onsubmit="handleAdminLoginSubmit(event)" class="space-y-5">
            <div>
              <label for="admin-username" class="block text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5">
                Admin Username
              </label>
              <input id="admin-username" 
                     name="username" 
                     type="text" 
                     required 
                     autocomplete="username"
                     placeholder="e.g. admin"
                     class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] focus:border-[#0F172A] text-[#0F172A] transition-all">
            </div>

            <div>
              <label for="admin-password-input" class="block text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5">
                Password
              </label>
              <div class="relative">
                <input id="admin-password-input" 
                       name="password" 
                       type="password" 
                       required 
                       autocomplete="current-password"
                       placeholder="••••••••"
                       class="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] focus:border-[#0F172A] text-[#0F172A] pr-10 transition-all">
                
                <button type="button" 
                        onclick="toggleAdminPasswordVisibility()" 
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-[#64748B] hover:text-[#0F172A] focus:outline-none">
                  <svg id="admin-eye-icon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" 
                      ${isLoading ? 'disabled' : ''}
                      class="w-full py-3.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded transition-all shadow-sm flex items-center justify-center space-x-2">
                ${isLoading ? `
                  <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>AUTHENTICATING...</span>
                ` : `
                  <span>LOG IN TO DASHBOARD</span>
                `}
              </button>
            </div>
          </form>

          <div class="mt-6 pt-5 border-t border-[#E2E9F0] text-center">
            <a href="#hero" 
               class="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors inline-flex items-center space-x-1">
              <span>← Return to Public Website</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  `;
}
