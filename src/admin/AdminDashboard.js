/**
 * Mer C. — Professional Admin Dashboard Component
 * Full-featured e-commerce management center with real-time MongoDB Atlas metrics,
 * order status workflows, Cloudinary image upload, and portfolio controls.
 */

import { adminStore } from './adminStore.js';

let pendingProductImages = [];
let isUploadingImage = false;

// Global helper attachments for modal and form interactions
window.adminSetTab = (tab) => adminStore.setTab(tab);
window.adminToggleSidebar = () => adminStore.toggleSidebar();
window.adminLogout = () => adminStore.logout();

window.adminOpenOrder = (orderId) => {
  const order = adminStore.getState().orders.find(o => o.orderId === orderId);
  if (order) adminStore.selectOrder(order);
};

window.adminCloseOrderDrawer = () => adminStore.closeOrderDrawer();

window.adminUpdateStatus = async (orderId, newStatus) => {
  await adminStore.updateOrderStatus(orderId, { status: newStatus });
};

window.adminSaveOrderDetails = async (e, orderId) => {
  e.preventDefault();
  const form = e.target;
  const courierName = form.courierName ? form.courierName.value.trim() : '';
  const trackingNumber = form.trackingNumber ? form.trackingNumber.value.trim() : '';
  const trackingUrl = form.trackingUrl ? form.trackingUrl.value.trim() : '';
  const status = form.status ? form.status.value : undefined;
  const estimatedDelivery = form.estimatedDelivery ? form.estimatedDelivery.value.trim() : '';
  const paymentStatus = form.paymentStatus ? form.paymentStatus.value : undefined;
  const adminNotes = form.adminNotes ? form.adminNotes.value.trim() : undefined;

  const payload = { courierName, trackingNumber, trackingUrl, estimatedDelivery };
  if (status) payload.status = status;
  if (paymentStatus) payload.paymentStatus = paymentStatus;
  if (adminNotes !== undefined) payload.adminNotes = adminNotes;

  await adminStore.updateOrderStatus(orderId, payload);
};

// Product Modal Handlers
window.adminOpenAddProduct = () => {
  pendingProductImages = [];
  adminStore.openAddProductModal();
};

window.adminOpenEditProduct = (id) => {
  const p = adminStore.getState().products.find(item => item.id === id);
  if (p) {
    pendingProductImages = Array.isArray(p.images) ? [...p.images] : [];
    adminStore.openEditProductModal(p);
  }
};

window.adminCloseProductModal = () => adminStore.closeProductModal();

window.adminHandleImageFiles = async (input) => {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];

  // Validation
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  if (!validTypes.includes(file.type)) {
    alert('Please upload a JPG, PNG, or WEBP image.');
    return;
  }

  isUploadingImage = true;
  adminStore.notify();

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    const result = await adminStore.uploadImage(base64Data, 'mer-c/products');
    isUploadingImage = false;

    if (result.success) {
      pendingProductImages.push(result.url);
      adminStore.showToast('Image uploaded to Cloudinary.');
    } else {
      adminStore.showToast(result.message || 'Upload failed.', 'error');
    }
    adminStore.notify();
  };
  reader.readAsDataURL(file);
};

let adminProductCategoryFilter = 'ALL';
window.adminSetProductCategoryFilter = (cat) => {
  adminProductCategoryFilter = cat;
  adminStore.notify();
};

window.adminOnCategoryChange = (category) => {
  const candleSpecs = document.getElementById('admin-candle-specs');
  const resinSpecs = document.getElementById('admin-resin-specs');
  const candleSubcat = document.getElementById('admin-candle-subcat-group');
  if (category === 'Resin Art') {
    if (candleSpecs) candleSpecs.classList.add('hidden');
    if (candleSubcat) candleSubcat.classList.add('hidden');
    if (resinSpecs) resinSpecs.classList.remove('hidden');
  } else {
    if (candleSpecs) candleSpecs.classList.remove('hidden');
    if (candleSubcat) candleSubcat.classList.remove('hidden');
    if (resinSpecs) resinSpecs.classList.add('hidden');
  }
};

window.adminRemoveProductImage = (index) => {
  pendingProductImages.splice(index, 1);
  adminStore.notify();
};

window.adminSaveProductSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const state = adminStore.getState();
  const editing = state.editingProduct;

  const mainCat = form.mainCategory ? form.mainCategory.value : (form.category ? form.category.value : 'Candles');
  const isResin = mainCat === 'Resin Art';

  let finalCategory = mainCat;
  if (!isResin && form.candleSubcategory && form.candleSubcategory.value) {
    finalCategory = form.candleSubcategory.value;
  }

  const specifications = isResin ? {
    material: form.material ? form.material.value.trim() : '',
    finish: form.finish ? form.finish.value.trim() : '',
    dimensions: form.resinDimensions ? form.resinDimensions.value.trim() : '',
    weight: form.resinWeight ? form.resinWeight.value.trim() : '',
    color: form.color ? form.color.value.trim() : ''
  } : {
    waxType: form.waxType ? form.waxType.value.trim() : '',
    weight: form.weight ? form.weight.value.trim() : '',
    fragrance: form.fragrance ? form.fragrance.value.trim() : '',
    container: form.container ? form.container.value.trim() : '',
    dimensions: form.dimensions ? form.dimensions.value.trim() : ''
  };

  const careInstructions = isResin ? (
    form.resinCare && form.resinCare.value ? form.resinCare.value.split('\n').map(s => s.trim()).filter(Boolean) : [
      "Wipe gently with a soft damp microfiber cloth.",
      "Avoid direct high heat, harsh chemicals, and abrasive scrubbers."
    ]
  ) : (
    form.candleCare && form.candleCare.value ? form.candleCare.value.split('\n').map(s => s.trim()).filter(Boolean) : [
      "Trim wick to 1/4 inch before lighting.",
      "Burn on heat-resistant surface away from drafts."
    ]
  );

  const productData = {
    id: editing ? editing.id : undefined,
    name: form.name.value.trim(),
    subtitle: form.subtitle.value.trim(),
    category: finalCategory,
    mainCategory: isResin ? 'Resin Art' : 'Candles',
    price: Number(form.price.value),
    originalPrice: form.originalPrice.value ? Number(form.originalPrice.value) : undefined,
    stock: Number(form.stock.value),
    shortDescription: form.shortDescription.value.trim(),
    fullDescription: form.fullDescription.value.trim(),
    images: pendingProductImages.length > 0 ? pendingProductImages : (editing && editing.images ? editing.images : []),
    specifications,
    careInstructions,
    isActive: form.isActive ? form.isActive.checked : true
  };

  await adminStore.saveProduct(productData);
};

window.adminToggleProductActive = async (id, currentActive) => {
  await adminStore.saveProduct({ id, isActive: !currentActive });
};

window.adminDeleteProduct = async (id) => {
  await adminStore.deleteProduct(id, false);
};

// Custom Work Modal Handlers
let pendingWorkImage = '';
window.adminOpenAddCustomWork = () => {
  pendingWorkImage = '';
  adminStore.isAddCustomWorkOpen = true;
  adminStore.notify();
};

window.adminCloseAddCustomWork = () => {
  adminStore.isAddCustomWorkOpen = false;
  adminStore.notify();
};

window.adminHandleWorkImageFile = async (input) => {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  isUploadingImage = true;
  adminStore.notify();

  const reader = new FileReader();
  reader.onload = async (e) => {
    const result = await adminStore.uploadImage(e.target.result, 'mer-c/custom-work');
    isUploadingImage = false;
    if (result.success) {
      pendingWorkImage = result.url;
      adminStore.showToast('Showcase image uploaded.');
    } else {
      adminStore.showToast('Upload failed.', 'error');
    }
    adminStore.notify();
  };
  reader.readAsDataURL(file);
};

window.adminSaveCustomWorkSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  if (!pendingWorkImage) {
    alert('Please upload a showcase image first.');
    return;
  }

  await adminStore.saveCustomWork({
    title: form.title.value,
    category: form.category.value,
    client: form.client.value,
    src: pendingWorkImage
  });
};

window.adminDeleteCustomWork = async (id) => {
  await adminStore.deleteCustomWork(id);
};

// Settings Form Handler
window.adminSaveSettingsSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  await adminStore.saveSettings({
    storeName: form.storeName.value,
    whatsappNumber: form.whatsappNumber.value,
    instagramUrl: form.instagramUrl ? form.instagramUrl.value : undefined,
    freeShippingThreshold: Number(form.freeShippingThreshold.value),
    standardShippingFee: Number(form.standardShippingFee.value),
    lowStockThreshold: Number(form.lowStockThreshold.value)
  });
};

// Status badge helper
function getStatusBadge(status) {
  const map = {
    NEW: 'bg-blue-100 text-blue-800 border-blue-200',
    CONFIRMED: 'bg-sky-100 text-sky-800 border-sky-200',
    PROCESSING: 'bg-amber-100 text-amber-800 border-amber-200',
    PACKED: 'bg-purple-100 text-purple-800 border-purple-200',
    SHIPPED: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    DELIVERED: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    CANCELLED: 'bg-rose-100 text-rose-800 border-rose-200'
  };
  return map[status] || 'bg-slate-100 text-slate-800 border-slate-200';
}

export function AdminDashboard(state) {
  const {
    user,
    activeTab,
    isSidebarOpen,
    dashboardStats,
    recentOrders,
    orders,
    ordersTotal,
    unreadOrdersCount,
    selectedOrder,
    ordersFilter,
    products,
    editingProduct,
    isAddProductOpen,
    customWorkItems,
    isAddCustomWorkOpen,
    settings,
    isLoading,
    toast
  } = state;

  const stats = dashboardStats || {
    totalOrders: 0,
    newOrders: 0,
    processingOrders: 0,
    shippedOrders: 0,
    deliveredOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    lowStockCount: 0
  };

  return `
    <div class="min-h-screen bg-[#F0F4F8] flex flex-col font-sans antialiased text-[#0F172A]">
      
      <!-- TOP NAVIGATION BAR -->
      <header class="bg-white border-b border-[#E2E9F0] sticky top-0 z-30 shadow-xs">
        <div class="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          
          <!-- LEFT: LOGO & MOBILE HAMBURGER -->
          <div class="flex items-center space-x-3">
            <button type="button" onclick="adminToggleSidebar()" class="lg:hidden p-2 text-[#475569] hover:text-[#0F172A] rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div class="flex items-center space-x-2">
              <span class="font-serif text-2xl text-[#0F172A] font-semibold tracking-tight">Mer C.</span>
              <span class="text-[10px] uppercase tracking-widest bg-[#F0F4F8] text-[#475569] font-bold px-2 py-0.5 rounded border border-[#CBD5E1]">ADMIN</span>
            </div>
          </div>

          <!-- CENTER: ACTIVE TAB TITLE (DESKTOP) -->
          <div class="hidden sm:block text-xs uppercase tracking-[0.2em] font-semibold text-[#64748B]">
            ${activeTab.replace('-', ' ')}
          </div>

          <!-- RIGHT: ACTION CONTROLS & LOGOUT -->
          <div class="flex items-center space-x-3 sm:space-x-4">
            <button type="button" 
                    onclick="adminStore.loadInitialData(); adminStore.showToast('Data refreshed.');" 
                    title="Refresh Data"
                    class="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F0F4F8] rounded-full transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </button>

            <!-- Storefront Link -->
            <a href="#hero" target="_blank" 
               title="View Public Store"
               class="hidden sm:flex items-center space-x-1.5 text-xs text-[#475569] hover:text-[#0F172A] px-2.5 py-1.5 rounded border border-[#E2E9F0] hover:bg-[#F0F4F8]">
              <span>View Store</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>

            <!-- Admin Profile Indicator -->
            <div class="flex items-center space-x-2 pl-2 border-l border-[#E2E9F0]">
              <span class="w-7 h-7 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-xs font-semibold">
                ${user ? user.username.charAt(0).toUpperCase() : 'A'}
              </span>
              <span class="hidden md:inline text-xs font-medium text-[#334155]">${user ? user.username : 'Admin'}</span>
            </div>

            <!-- Logout Button -->
            <button type="button" 
                    onclick="adminLogout()" 
                    class="p-1.5 text-xs text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded transition-colors flex items-center space-x-1" 
                    title="Logout">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              <span class="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      <!-- MAIN LAYOUT: SIDEBAR + CONTENT -->
      <div class="flex-grow flex">
        
        <!-- SIDEBAR -->
        <aside class="${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#E2E9F0] transition-transform duration-300 ease-in-out flex flex-col justify-between shadow-lg lg:shadow-none">
          
          <div class="py-6 px-4 space-y-1.5">
            <div class="px-3 pb-3 text-[10px] uppercase tracking-[0.24em] font-bold text-[#94A3B8]">
              NAVIGATION
            </div>

            <!-- Dashboard Overview -->
            <button type="button" 
                    onclick="adminSetTab('dashboard')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'dashboard' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span>Dashboard</span>
            </button>

            <!-- Orders with Unread Badge -->
            <button type="button" 
                    onclick="adminSetTab('orders')" 
                    class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'orders' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <div class="flex items-center space-x-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <span>Orders</span>
              </div>
              ${stats.newOrders > 0 ? `
                <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-500 text-white">
                  ${stats.newOrders}
                </span>
              ` : ''}
            </button>

            <!-- Products -->
            <button type="button" 
                    onclick="adminSetTab('products')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'products' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              <span>Products</span>
            </button>

            <!-- Custom Work (Portfolio) -->
            <button type="button" 
                    onclick="adminSetTab('custom-work')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'custom-work' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Custom Work</span>
            </button>

            <!-- Customers -->
            <button type="button" 
                    onclick="adminSetTab('customers')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'customers' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <span>Customers</span>
            </button>

            <div class="pt-4 px-3 pb-2 text-[10px] uppercase tracking-[0.24em] font-bold text-[#94A3B8]">
              SYSTEM
            </div>

            <!-- Settings -->
            <button type="button" 
                    onclick="adminSetTab('settings')" 
                    class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'settings' ? 'bg-[#0F172A] text-white shadow-xs font-semibold' : 'text-[#475569] hover:bg-[#F0F4F8] hover:text-[#0F172A]'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Settings</span>
            </button>
          </div>

          <!-- Bottom Footer in Sidebar -->
          <div class="p-4 border-t border-[#E2E9F0] text-[11px] text-[#94A3B8] text-center">
            Mer C. E-Commerce Platform v1.0
          </div>
        </aside>

        <!-- MAIN VIEWPORT CONTENT -->
        <main class="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          
          ${activeTab === 'dashboard' ? renderOverviewTab(stats, recentOrders) : ''}
          ${activeTab === 'orders' ? renderOrdersTab(orders, ordersTotal, ordersFilter) : ''}
          ${activeTab === 'products' ? renderProductsTab(products) : ''}
          ${activeTab === 'custom-work' ? renderCustomWorkTab(customWorkItems) : ''}
          ${activeTab === 'customers' ? renderCustomersTab(orders) : ''}
          ${activeTab === 'settings' ? renderSettingsTab(settings) : ''}

        </main>

      </div>

      <!-- SLIDE-OVER ORDER DETAIL MODAL -->
      ${selectedOrder ? renderOrderDetailDrawer(selectedOrder) : ''}

      <!-- ADD / EDIT PRODUCT MODAL -->
      ${isAddProductOpen ? renderProductModal(editingProduct, pendingProductImages, isUploadingImage) : ''}

      <!-- ADD CUSTOM WORK MODAL -->
      ${isAddCustomWorkOpen ? renderCustomWorkModal(pendingWorkImage, isUploadingImage) : ''}

    </div>
  `;
}

/* =========================================================================
   TAB RENDERERS
   ========================================================================= */

function renderOverviewTab(stats, recentOrders) {
  return `
    <div class="space-y-8">
      
      <!-- WELCOME & QUICK ACTIONS -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Dashboard Overview</h1>
          <p class="text-xs text-[#64748B] mt-0.5">Real-time performance metrics and recent customer activity.</p>
        </div>
        <div class="flex items-center space-x-3">
          <button type="button" 
                  onclick="adminOpenAddProduct()" 
                  class="px-4 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-xs flex items-center space-x-2">
            <span>+ ADD PRODUCT</span>
          </button>
          <button type="button" 
                  onclick="adminSetTab('orders')" 
                  class="px-4 py-2.5 bg-white border border-[#CBD5E1] hover:bg-[#F0F4F8] text-[#0F172A] text-xs uppercase tracking-wider font-medium rounded">
            <span>VIEW ALL ORDERS</span>
          </button>
        </div>
      </div>

      <!-- METRIC CARDS GRID -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- Total Revenue -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs">
          <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">Total Revenue</span>
          <div class="mt-2 font-serif text-3xl font-semibold text-[#0F172A]">&#8377;${stats.totalRevenue.toLocaleString('en-IN')}</div>
          <span class="text-[10px] text-emerald-600 font-medium">From non-cancelled orders</span>
        </div>

        <!-- Total Orders -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs">
          <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">Total Orders</span>
          <div class="mt-2 font-serif text-3xl font-semibold text-[#0F172A]">${stats.totalOrders}</div>
          <span class="text-[10px] text-[#64748B]">Lifetime customer checkouts</span>
        </div>

        <!-- New Orders -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs ${stats.newOrders > 0 ? 'ring-2 ring-blue-500/20' : ''}">
          <div class="flex justify-between items-center">
            <span class="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">New Orders</span>
            ${stats.newOrders > 0 ? `<span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>` : ''}
          </div>
          <div class="mt-2 font-serif text-3xl font-semibold text-blue-700">${stats.newOrders}</div>
          <span class="text-[10px] text-blue-600 font-medium">Awaiting admin review</span>
        </div>

        <!-- Low Stock Alert -->
        <div class="bg-white p-5 rounded-xl border border-[#E2E9F0] shadow-xs ${stats.lowStockCount > 0 ? 'bg-amber-50/50 border-amber-200' : ''}">
          <span class="text-[11px] uppercase tracking-wider font-semibold ${stats.lowStockCount > 0 ? 'text-amber-800' : 'text-[#64748B]'}">Low Stock Items</span>
          <div class="mt-2 font-serif text-3xl font-semibold ${stats.lowStockCount > 0 ? 'text-amber-700' : 'text-[#0F172A]'}">${stats.lowStockCount}</div>
          <span class="text-[10px] ${stats.lowStockCount > 0 ? 'text-amber-600' : 'text-[#64748B]'} font-medium">Inventory &le; 15 units</span>
        </div>

      </div>

      <!-- SECONDARY METRICS STRIP -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-[#E2E9F0] text-center text-xs">
        <div>
          <span class="text-[#64748B] block">Processing</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.processingOrders}</strong>
        </div>
        <div class="border-l border-[#E2E9F0]">
          <span class="text-[#64748B] block">Shipped</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.shippedOrders}</strong>
        </div>
        <div class="border-l border-[#E2E9F0]">
          <span class="text-[#64748B] block">Delivered</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.deliveredOrders}</strong>
        </div>
        <div class="border-l border-[#E2E9F0]">
          <span class="text-[#64748B] block">Total Products</span>
          <strong class="font-mono text-base text-[#0F172A]">${stats.totalProducts}</strong>
        </div>
      </div>

      <!-- RECENT ORDERS SECTION -->
      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        <div class="p-5 border-b border-[#E2E9F0] flex items-center justify-between">
          <h2 class="font-serif text-xl text-[#0F172A] font-medium">Recent Orders</h2>
          <button type="button" onclick="adminSetTab('orders')" class="text-xs text-blue-700 hover:text-blue-900 font-semibold">
            View All &rarr;
          </button>
        </div>

        ${recentOrders.length === 0 ? `
          <div class="text-center py-12 text-xs text-[#94A3B8]">
            No orders found in database yet. Place a test order from checkout to see it appear here.
          </div>
        ` : `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#334155]">
              <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
                <tr>
                  <th class="p-3.5 pl-5">Order ID</th>
                  <th class="p-3.5">Customer</th>
                  <th class="p-3.5">Date</th>
                  <th class="p-3.5">Items</th>
                  <th class="p-3.5">Total</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 pr-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E9F0]">
                ${recentOrders.map(order => `
                  <tr class="hover:bg-[#F8FAFC] transition-colors ${!order.isRead ? 'bg-blue-50/40 font-medium' : ''}">
                    <td class="p-3.5 pl-5 font-mono text-[#0F172A] font-semibold">${order.orderId}</td>
                    <td class="p-3.5">${order.customer.name}</td>
                    <td class="p-3.5 text-[#64748B]">${new Date(order.createdAt).toLocaleDateString()}</td>
                    <td class="p-3.5">${order.itemCount || (order.items ? order.items.length : 1)}</td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${order.totalAmount}</td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold border ${getStatusBadge(order.status)}">
                        ${order.status}
                      </span>
                    </td>
                    <td class="p-3.5 pr-5 text-right">
                      <button type="button" onclick="adminOpenOrder('${order.orderId}')" class="px-2.5 py-1 bg-[#1E293B] text-white rounded text-[11px] hover:bg-[#334155]">
                        View
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

    </div>
  `;
}

function renderOrdersTab(orders, total, filter) {
  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Order Management</h1>
          <p class="text-xs text-[#64748B]">Viewing ${orders.length} of ${total} orders.</p>
        </div>
      </div>

      <!-- SEARCH & FILTER BAR -->
      <div class="bg-white p-4 rounded-xl border border-[#E2E9F0] shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        
        <!-- Search Input -->
        <div class="relative w-full md:w-80">
          <input type="text" 
                 id="admin-order-search-input"
                 placeholder="Search Order ID, Name, Phone..." 
                 value="${filter.search}"
                 oninput="adminStore.setOrderFilter('search', this.value)"
                 class="w-full pl-9 pr-4 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
          <svg class="w-4 h-4 text-[#94A3B8] absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>

        <div class="flex items-center space-x-3 w-full md:w-auto">
          <!-- Status Filter -->
          <select onchange="adminStore.setOrderFilter('status', this.value)" 
                  class="px-3 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
            <option value="ALL" ${filter.status === 'ALL' ? 'selected' : ''}>All Statuses</option>
            <option value="NEW" ${filter.status === 'NEW' ? 'selected' : ''}>New</option>
            <option value="CONFIRMED" ${filter.status === 'CONFIRMED' ? 'selected' : ''}>Confirmed</option>
            <option value="PROCESSING" ${filter.status === 'PROCESSING' ? 'selected' : ''}>Processing</option>
            <option value="PACKED" ${filter.status === 'PACKED' ? 'selected' : ''}>Packed</option>
            <option value="SHIPPED" ${filter.status === 'SHIPPED' ? 'selected' : ''}>Shipped</option>
            <option value="DELIVERED" ${filter.status === 'DELIVERED' ? 'selected' : ''}>Delivered</option>
            <option value="CANCELLED" ${filter.status === 'CANCELLED' ? 'selected' : ''}>Cancelled</option>
          </select>

          <!-- Date Range Filter -->
          <select onchange="adminStore.setOrderFilter('date', this.value)" 
                  class="px-3 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
            <option value="all" ${filter.date === 'all' ? 'selected' : ''}>All Time</option>
            <option value="today" ${filter.date === 'today' ? 'selected' : ''}>Today</option>
            <option value="yesterday" ${filter.date === 'yesterday' ? 'selected' : ''}>Yesterday</option>
            <option value="7d" ${filter.date === '7d' ? 'selected' : ''}>Last 7 Days</option>
            <option value="30d" ${filter.date === '30d' ? 'selected' : ''}>Last 30 Days</option>
          </select>
        </div>

      </div>

      <!-- ORDERS TABLE -->
      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        ${orders.length === 0 ? `
          <div class="text-center py-16 text-xs text-[#94A3B8]">
            No orders match the selected filters.
          </div>
        ` : `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#334155]">
              <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
                <tr>
                  <th class="p-3.5 pl-5">Order ID</th>
                  <th class="p-3.5">Customer</th>
                  <th class="p-3.5">Contact</th>
                  <th class="p-3.5">Date</th>
                  <th class="p-3.5">Items</th>
                  <th class="p-3.5">Amount</th>
                  <th class="p-3.5">Payment</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 pr-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E9F0]">
                ${orders.map(order => `
                  <tr class="hover:bg-[#F8FAFC] transition-colors cursor-pointer ${!order.isRead ? 'bg-blue-50/40 font-medium' : ''}" 
                      onclick="adminOpenOrder('${order.orderId}')">
                    <td class="p-3.5 pl-5 font-mono text-[#0F172A] font-semibold flex items-center space-x-1.5">
                      ${!order.isRead ? `<span class="w-2 h-2 rounded-full bg-blue-500"></span>` : ''}
                      <span>${order.orderId}</span>
                    </td>
                    <td class="p-3.5">${order.customer.name}</td>
                    <td class="p-3.5 text-[#64748B]">${order.customer.phone || order.customer.email || '—'}</td>
                    <td class="p-3.5 text-[#64748B]">${new Date(order.createdAt).toLocaleDateString()}</td>
                    <td class="p-3.5">${order.itemCount || (order.items ? order.items.length : 1)} items</td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${order.totalAmount}</td>
                    <td class="p-3.5">
                      <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${order.paymentStatus === 'PAID' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-50 text-amber-800'}">
                        ${order.paymentStatus}
                      </span>
                    </td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold border ${getStatusBadge(order.status)}">
                        ${order.status}
                      </span>
                    </td>
                    <td class="p-3.5 pr-5 text-right" onclick="event.stopPropagation()">
                      <button type="button" onclick="adminOpenOrder('${order.orderId}')" class="px-3 py-1 bg-[#1E293B] text-white rounded text-[11px] hover:bg-[#334155]">
                        View
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

    </div>
  `;
}

function renderOrderDetailDrawer(order) {
  const customerPhoneClean = order.customer.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${customerPhoneClean}?text=${encodeURIComponent(`Hello ${order.customer.name}, this is Mer C. regarding your order ${order.orderId}.`)}`;

  return `
    <div class="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end"
         onclick="if(event.target === this) adminCloseOrderDrawer()">
      
      <div class="w-full max-w-2xl bg-white h-full shadow-2xl overflow-y-auto flex flex-col justify-between">
        
        <!-- HEADER -->
        <div class="p-5 sm:p-6 border-b border-[#E2E9F0] flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div class="flex items-center space-x-3">
              <h2 class="font-mono text-xl text-[#0F172A] font-bold">${order.orderId}</h2>
              <span class="px-2.5 py-0.5 rounded text-xs font-semibold border ${getStatusBadge(order.status)}">
                ${order.status}
              </span>
            </div>
            <p class="text-xs text-[#64748B] mt-1">Placed on ${new Date(order.createdAt).toLocaleString()}</p>
          </div>

          <button type="button" onclick="adminCloseOrderDrawer()" class="p-2 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-[#F0F4F8]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- BODY CONTENT -->
        <div class="p-5 sm:p-6 space-y-6 flex-grow">
          
          <!-- QUICK ACTION: WHATSAPP CUSTOMER -->
          ${order.customer.phone ? `
            <a href="${whatsappUrl}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-xs transition-colors">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.434 2.503 1.185 3.468l-.779 2.853 2.918-.765c.928.674 2.062 1.054 3.242 1.054 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.765-5.766-5.765zm3.385 8.131c-.144.405-.837.774-1.17.823-.302.043-.697.072-2.146-.526-1.722-.71-2.827-2.476-2.912-2.592-.085-.115-.698-.93-.698-1.773 0-.843.434-1.258.591-1.431.157-.172.344-.215.459-.215.115 0 .23 0 .33.006.105.006.244-.04.382.29.144.344.488 1.192.531 1.278.043.086.072.187.014.302-.057.115-.086.187-.172.287-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.447.738.96 1.195.66.587 1.216.769 1.388.855.172.086.273.072.373-.043.101-.115.431-.502.546-.674.115-.172.23-.144.387-.086.158.057 1.005.474 1.177.56.172.086.287.129.33.201.043.072.043.417-.101.822z"/>
              </svg>
              <span>CONTACT CUSTOMER ON WHATSAPP</span>
            </a>
          ` : ''}

          <!-- ORDER STATUS CHANGER -->
          <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-2">
            <label class="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">Update Status</label>
            <div class="flex items-center space-x-2">
              <select onchange="adminUpdateStatus('${order.orderId}', this.value)" 
                      class="flex-grow px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded-lg font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
                <option value="NEW" ${order.status === 'NEW' ? 'selected' : ''}>NEW (Received)</option>
                <option value="CONFIRMED" ${order.status === 'CONFIRMED' ? 'selected' : ''}>CONFIRMED</option>
                <option value="PROCESSING" ${order.status === 'PROCESSING' ? 'selected' : ''}>PROCESSING (In Workshop)</option>
                <option value="PACKED" ${order.status === 'PACKED' ? 'selected' : ''}>PACKED</option>
                <option value="SHIPPED" ${order.status === 'SHIPPED' ? 'selected' : ''}>SHIPPED (With Courier)</option>
                <option value="OUT_FOR_DELIVERY" ${order.status === 'OUT_FOR_DELIVERY' ? 'selected' : ''}>OUT FOR DELIVERY</option>
                <option value="DELIVERED" ${order.status === 'DELIVERED' ? 'selected' : ''}>DELIVERED</option>
                <option value="CANCELLED" ${order.status === 'CANCELLED' ? 'selected' : ''}>CANCELLED</option>
              </select>
            </div>
          </div>

          <!-- CUSTOMER INFORMATION & ADDRESS -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-1 text-xs">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-1">Customer Details</span>
              <div class="font-bold text-[#0F172A]">${order.customer.name}</div>
              <div>Phone: <a href="tel:${order.customer.phone}" class="text-blue-700 hover:underline">${order.customer.phone || '—'}</a></div>
              <div>Email: <a href="mailto:${order.customer.email}" class="text-blue-700 hover:underline">${order.customer.email || '—'}</a></div>
            </div>

            <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-1 text-xs">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-1">Shipping Address</span>
              <div class="text-[#334155]">${order.customer.address || '—'}</div>
              <div class="text-[#334155]">${order.customer.city || ''} ${order.customer.pincode ? `- ${order.customer.pincode}` : ''}</div>
            </div>
          </div>

          <!-- ORDER ITEMS LIST -->
          <div>
            <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block mb-3">Order Items</span>
            <div class="border border-[#E2E9F0] rounded-xl divide-y divide-[#E2E9F0] overflow-hidden">
              ${(order.items || []).map(item => `
                <div class="p-3.5 flex items-center space-x-3 text-xs bg-white">
                  ${item.imageAtPurchase ? `
                    <img src="${item.imageAtPurchase}" class="w-12 h-12 rounded object-cover border border-[#E2E9F0] bg-[#F0F4F8]">
                  ` : `
                    <div class="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-[#94A3B8] font-bold">🕯️</div>
                  `}
                  <div class="flex-grow">
                    <div class="font-semibold text-[#0F172A]">${item.productName}</div>
                    <div class="text-[#64748B] text-[11px]">&#8377;${item.priceAtPurchase} &times; ${item.quantity}</div>
                  </div>
                  <div class="font-mono font-semibold text-[#0F172A]">&#8377;${item.subtotal || (item.priceAtPurchase * item.quantity)}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- ORDER TOTALS SUMMARY -->
          <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E9F0] space-y-2 text-xs">
            <div class="flex justify-between text-[#475569]">
              <span>Subtotal</span>
              <span>&#8377;${order.subtotal}</span>
            </div>
            <div class="flex justify-between text-[#475569]">
              <span>Delivery</span>
              <span class="font-medium text-emerald-700">${order.shipping === 0 || !order.shipping ? 'FREE (&#8377;0)' : `&#8377;${order.shipping}`}</span>
            </div>
            <div class="flex justify-between font-serif text-base font-bold text-[#0F172A] pt-2 border-t border-[#CBD5E1]">
              <span>Total Paid/Due</span>
              <span>&#8377;${order.totalAmount}</span>
            </div>
          </div>

          <!-- EDITABLE COURIER DETAILS & NOTES FORM -->
          <form onsubmit="adminSaveOrderDetails(event, '${order.orderId}')" class="space-y-4 pt-2">
            <span class="text-[10px] uppercase tracking-wider font-semibold text-[#64748B] block">Delivery & Courier Fulfillment</span>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Courier Name</label>
                <input type="text" name="courierName" value="${order.courierName || (order.shippingDetails && order.shippingDetails.courier) || ''}" placeholder="e.g. Delhivery / BlueDart / DTDC" 
                       class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Tracking Number / AWB</label>
                <input type="text" name="trackingNumber" value="${order.trackingNumber || (order.shippingDetails && order.shippingDetails.trackingNumber) || ''}" placeholder="e.g. DL987654321" 
                       class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>
            </div>

            <div>
              <label class="block text-[11px] text-[#475569] mb-1">Live Courier Tracking URL</label>
              <input type="url" name="trackingUrl" value="${order.trackingUrl || (order.shippingDetails && order.shippingDetails.trackingUrl) || ''}" placeholder="https://www.delhivery.com/track/package/..." 
                     class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Order Status</label>
                <select name="status" class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded text-[#0F172A] font-semibold">
                  <option value="NEW" ${order.status === 'NEW' ? 'selected' : ''}>NEW</option>
                  <option value="CONFIRMED" ${order.status === 'CONFIRMED' ? 'selected' : ''}>CONFIRMED</option>
                  <option value="PROCESSING" ${order.status === 'PROCESSING' ? 'selected' : ''}>PROCESSING</option>
                  <option value="PACKED" ${order.status === 'PACKED' ? 'selected' : ''}>PACKED</option>
                  <option value="SHIPPED" ${order.status === 'SHIPPED' ? 'selected' : ''}>SHIPPED</option>
                  <option value="OUT_FOR_DELIVERY" ${order.status === 'OUT_FOR_DELIVERY' ? 'selected' : ''}>OUT FOR DELIVERY</option>
                  <option value="DELIVERED" ${order.status === 'DELIVERED' ? 'selected' : ''}>DELIVERED</option>
                  <option value="CANCELLED" ${order.status === 'CANCELLED' ? 'selected' : ''}>CANCELLED</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] text-[#475569] mb-1">Estimated Delivery</label>
                <input type="text" name="estimatedDelivery" value="${order.estimatedDelivery || (order.shippingDetails && order.shippingDetails.estimatedDelivery) || ''}" placeholder="e.g. 10 Sep 2026 or 3-5 Days" 
                       class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">
              </div>
            </div>

            <div>
              <label class="block text-[11px] text-[#475569] mb-1">Payment Status</label>
              <select name="paymentStatus" class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
                <option value="PENDING" ${order.paymentStatus === 'PENDING' ? 'selected' : ''}>PENDING</option>
                <option value="PAID" ${order.paymentStatus === 'PAID' ? 'selected' : ''}>PAID</option>
                <option value="FAILED" ${order.paymentStatus === 'FAILED' ? 'selected' : ''}>FAILED</option>
                <option value="REFUNDED" ${order.paymentStatus === 'REFUNDED' ? 'selected' : ''}>REFUNDED</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] text-[#475569] mb-1">Admin Internal Notes (Private)</label>
              <textarea name="adminNotes" rows="2" placeholder="Private internal notes about this order..." 
                        class="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0F172A] text-[#0F172A]">${order.adminNotes || ''}</textarea>
            </div>

            <button type="submit" class="w-full py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors shadow-xs">
              SAVE SHIPPING DETAILS
            </button>
          </form>

        </div>

      </div>

    </div>
  `;
}

function renderProductsTab(products) {
  const totalCount = products.length;
  const candleCount = products.filter(p => p.category !== 'Resin Art' && p.mainCategory !== 'Resin Art').length;
  const resinCount = products.filter(p => p.category === 'Resin Art' || p.mainCategory === 'Resin Art').length;

  const filtered = products.filter(p => {
    if (adminProductCategoryFilter === 'Candles') {
      return p.category !== 'Resin Art' && p.mainCategory !== 'Resin Art';
    }
    if (adminProductCategoryFilter === 'Resin Art') {
      return p.category === 'Resin Art' || p.mainCategory === 'Resin Art';
    }
    return true;
  });

  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Product Catalog</h1>
          <p class="text-xs text-[#64748B]">Manage public candles, resin art, prices, stock levels, and Cloudinary photography.</p>
        </div>
        <button type="button" 
                onclick="adminOpenAddProduct()" 
                class="px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-xs flex items-center space-x-2">
          <span>+ ADD NEW PRODUCT</span>
        </button>
      </div>

      <!-- CATEGORY FILTER TABS -->
      <div class="flex items-center space-x-2 border-b border-[#E2E9F0] pb-2">
        <button type="button" 
                onclick="adminSetProductCategoryFilter('ALL')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${adminProductCategoryFilter === 'ALL' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E9F0]'}">
          All (${totalCount})
        </button>
        <button type="button" 
                onclick="adminSetProductCategoryFilter('Candles')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${adminProductCategoryFilter === 'Candles' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E9F0]'}">
          Candles (${candleCount})
        </button>
        <button type="button" 
                onclick="adminSetProductCategoryFilter('Resin Art')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${adminProductCategoryFilter === 'Resin Art' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E9F0]'}">
          Resin Art (${resinCount})
        </button>
      </div>

      <!-- PRODUCTS TABLE -->
      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-[#334155]">
            <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
              <tr>
                <th class="p-3.5 pl-5">Product</th>
                <th class="p-3.5">Category</th>
                <th class="p-3.5">Price</th>
                <th class="p-3.5">Stock</th>
                <th class="p-3.5">Visibility</th>
                <th class="p-3.5 pr-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E2E9F0]">
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="6" class="text-center py-10 text-xs text-[#94A3B8]">
                    No products found in this category. Click "+ ADD NEW PRODUCT" to create one.
                  </td>
                </tr>
              ` : filtered.map(p => {
                const img = Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : '';
                const isResin = p.category === 'Resin Art' || p.mainCategory === 'Resin Art';
                return `
                  <tr class="hover:bg-[#F8FAFC] transition-colors ${p.isActive === false ? 'opacity-60 bg-slate-50' : ''}">
                    <td class="p-3.5 pl-5 flex items-center space-x-3">
                      <img src="${img}" class="w-12 h-12 rounded object-cover border border-[#E2E9F0] bg-[#F0F4F8]" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><text y=\\'.9em\\' font-size=\\'90\\'>${isResin ? '✨' : '🕯️'}</text></svg>'">
                      <div>
                        <div class="font-semibold text-[#0F172A] line-clamp-1">${p.name}</div>
                        <div class="text-[10px] text-[#64748B] font-mono">${p.id}</div>
                      </div>
                    </td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${isResin ? 'bg-sky-100 text-sky-800 border border-sky-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}">
                        ${isResin ? 'Resin Art' : p.category}
                      </span>
                    </td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${p.price}</td>
                    <td class="p-3.5">
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${p.stock <= 15 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                        ${p.stock} in stock
                      </span>
                    </td>
                    <td class="p-3.5">
                      <button type="button" 
                              onclick="adminToggleProductActive('${p.id}', ${p.isActive !== false})" 
                              class="text-[10px] font-semibold px-2 py-0.5 rounded border ${p.isActive !== false ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-300'}">
                        ${p.isActive !== false ? 'Active (Live)' : 'Inactive (Hidden)'}
                      </button>
                    </td>
                    <td class="p-3.5 pr-5 text-right space-x-2">
                      <button type="button" onclick="adminOpenEditProduct('${p.id}')" class="px-2.5 py-1 bg-slate-100 text-[#0F172A] hover:bg-slate-200 rounded text-[11px] font-medium">
                        Edit
                      </button>
                      <button type="button" onclick="adminDeleteProduct('${p.id}')" class="px-2.5 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded text-[11px] font-medium">
                        Delete
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function renderProductModal(editingProduct, pendingImages, isUploading) {
  const p = editingProduct || {};
  const isResin = p.category === 'Resin Art' || p.mainCategory === 'Resin Art';
  const specs = p.specifications || {};

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E9F0] p-6 sm:p-8 relative">
        
        <button type="button" onclick="adminCloseProductModal()" class="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] p-2">
          ✕
        </button>

        <h2 class="font-serif text-2xl text-[#0F172A] font-semibold mb-1">
          ${editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <p class="text-xs text-[#64748B] mb-6">Enter product specifications and upload high-resolution Cloudinary imagery.</p>

        <form onsubmit="adminSaveProductSubmit(event)" class="space-y-4 text-xs">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Product Name *</label>
              <input type="text" name="name" required value="${p.name || ''}" placeholder="e.g. Ocean Wave Resin Tray" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A] focus:ring-2 focus:ring-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Subtitle / Line</label>
              <input type="text" name="subtitle" value="${p.subtitle || ''}" placeholder="e.g. Handcrafted Resin Art" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
          </div>

          <!-- PRIMARY CATEGORY SELECTOR -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Category *</label>
              <select name="mainCategory" onchange="window.adminOnCategoryChange(this.value)" class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A] font-medium">
                <option value="Candles" ${!isResin ? 'selected' : ''}>Candles</option>
                <option value="Resin Art" ${isResin ? 'selected' : ''}>Resin Art</option>
              </select>
            </div>
            <div id="admin-candle-subcat-group" class="${isResin ? 'hidden' : ''}">
              <label class="block font-semibold text-[#475569] mb-1">Candle Type / Subcategory</label>
              <select name="candleSubcategory" class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
                <option value="Decorative Bowls" ${p.category === 'Decorative Bowls' ? 'selected' : ''}>Decorative Bowls</option>
                <option value="Festive Urlis" ${p.category === 'Festive Urlis' ? 'selected' : ''}>Festive Urlis</option>
                <option value="Glass Jars" ${p.category === 'Glass Jars' ? 'selected' : ''}>Glass Jars</option>
                <option value="Sculptural Candles" ${p.category === 'Sculptural Candles' ? 'selected' : ''}>Sculptural Candles</option>
                <option value="Candles" ${p.category === 'Candles' ? 'selected' : ''}>General Candle</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Price (&#8377;) *</label>
              <input type="number" name="price" required value="${p.price || ''}" placeholder="1499" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Original Price (&#8377;)</label>
              <input type="number" name="originalPrice" value="${p.originalPrice || ''}" placeholder="1799" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Stock Quantity *</label>
              <input type="number" name="stock" required value="${p.stock !== undefined ? p.stock : 10}" 
                     class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
          </div>

          <div class="flex items-center pt-1">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" name="isActive" ${p.isActive !== false ? 'checked' : ''} class="w-4 h-4 text-[#0F172A]">
              <span class="font-medium text-[#0F172A]">Visible in Public Shop</span>
            </label>
          </div>

          <!-- CLOUDINARY IMAGE UPLOAD SECTION -->
          <div class="border border-[#CBD5E1] rounded-xl p-4 bg-[#F8FAFC] space-y-3">
            <span class="block font-semibold uppercase tracking-wider text-[#475569]">Cloudinary Product Images</span>
            
            <div class="flex flex-wrap gap-3">
              ${pendingImages.map((img, idx) => `
                <div class="relative w-20 h-20 rounded-lg overflow-hidden border border-[#CBD5E1] bg-white group">
                  <img src="${img}" class="w-full h-full object-cover">
                  <button type="button" onclick="adminRemoveProductImage(${idx})" 
                          class="absolute top-1 right-1 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs opacity-80 hover:opacity-100">
                    ✕
                  </button>
                  ${idx === 0 ? `<span class="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] text-center uppercase font-bold py-0.5">Primary</span>` : ''}
                </div>
              `).join('')}

              <!-- Upload Button -->
              <label class="w-20 h-20 rounded-lg border-2 border-dashed border-[#CBD5E1] hover:border-[#0F172A] flex flex-col items-center justify-center cursor-pointer transition-colors bg-white">
                ${isUploading ? `
                  <svg class="animate-spin h-5 w-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ` : `
                  <svg class="w-6 h-6 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span class="text-[9px] text-[#64748B] mt-1 font-semibold">Upload</span>
                `}
                <input type="file" accept="image/jpeg,image/png,image/webp" onchange="adminHandleImageFiles(this)" class="hidden">
              </label>
            </div>
            <p class="text-[11px] text-[#64748B]">Images will be compressed and optimized on Cloudinary. The first image is Primary.</p>
          </div>

          <!-- DESCRIPTIONS -->
          <div>
            <label class="block font-semibold text-[#475569] mb-1">Short Description</label>
            <input type="text" name="shortDescription" value="${p.shortDescription || ''}" placeholder="One line summary..." 
                   class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Full Description</label>
            <textarea name="fullDescription" rows="3" placeholder="Detailed product story & craftsmanship..." 
                      class="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded text-[#0F172A]">${p.fullDescription || ''}</textarea>
          </div>

          <!-- CANDLE SPECIFICATIONS (Shown when Candles is selected) -->
          <div id="admin-candle-specs" class="space-y-3 pt-2 ${isResin ? 'hidden' : ''}">
            <h3 class="font-semibold text-[#475569] uppercase tracking-wider text-[11px]">Candle Specifications</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[#64748B] mb-1">Fragrance</label>
                <input type="text" name="fragrance" value="${specs.fragrance || ''}" placeholder="e.g. French Lavender" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Wax Blend</label>
                <input type="text" name="waxType" value="${specs.waxType || ''}" placeholder="e.g. 100% Pure Soy Wax" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Weight</label>
                <input type="text" name="weight" value="${specs.weight || ''}" placeholder="e.g. 350g" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Container / Vessel</label>
                <input type="text" name="container" value="${specs.container || ''}" placeholder="e.g. Ceramic Vessel" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Dimensions</label>
                <input type="text" name="dimensions" value="${specs.dimensions || ''}" placeholder="e.g. 10cm x 8cm" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
            </div>
            <div>
              <label class="block text-[#64748B] mb-1">Candle Care Instructions (One per line)</label>
              <textarea name="candleCare" rows="2" placeholder="Trim wick to 1/4 inch before lighting&#10;Burn on heat-resistant surface" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">${Array.isArray(p.careInstructions) ? p.careInstructions.join('\n') : ''}</textarea>
            </div>
          </div>

          <!-- RESIN ART SPECIFICATIONS (Shown when Resin Art is selected) -->
          <div id="admin-resin-specs" class="space-y-3 pt-2 ${!isResin ? 'hidden' : ''}">
            <h3 class="font-semibold text-[#475569] uppercase tracking-wider text-[11px]">Resin Art Specifications</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[#64748B] mb-1">Material</label>
                <input type="text" name="material" value="${specs.material || ''}" placeholder="e.g. Epoxy Resin & Wood" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Finish</label>
                <input type="text" name="finish" value="${specs.finish || ''}" placeholder="e.g. High Gloss Glass Finish" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Dimensions</label>
                <input type="text" name="resinDimensions" value="${specs.dimensions || ''}" placeholder="e.g. 12 x 8 inches" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Weight</label>
                <input type="text" name="resinWeight" value="${specs.weight || ''}" placeholder="e.g. 650g" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
              <div>
                <label class="block text-[#64748B] mb-1">Color / Design</label>
                <input type="text" name="color" value="${specs.color || ''}" placeholder="e.g. Ocean Blue & White Waves" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">
              </div>
            </div>
            <div>
              <label class="block text-[#64748B] mb-1">Care Instructions (One per line)</label>
              <textarea name="resinCare" rows="2" placeholder="Wipe with a damp microfiber cloth&#10;Avoid direct high heat and harsh chemicals" class="w-full px-3 py-1.5 border border-[#CBD5E1] rounded text-[#0F172A]">${Array.isArray(p.careInstructions) ? p.careInstructions.join('\n') : ''}</textarea>
            </div>
          </div>

          <div class="pt-4 border-t border-[#E2E9F0] flex justify-end space-x-3">
            <button type="button" onclick="adminCloseProductModal()" class="px-4 py-2 border border-[#CBD5E1] rounded font-semibold text-[#475569]">
              Cancel
            </button>
            <button type="submit" class="px-6 py-2 bg-[#1E293B] hover:bg-[#334155] text-white rounded font-semibold uppercase tracking-wider">
              Save Product
            </button>
          </div>

        </form>

      </div>
    </div>
  `;
}

function renderCustomWorkTab(items) {
  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Custom Work Portfolio</h1>
          <p class="text-xs text-[#64748B]">Manage photos in the public Our Work showcase across Mugs, T-Shirts, and Resin Art.</p>
        </div>
        <button type="button" 
                onclick="adminOpenAddCustomWork()" 
                class="px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-xs flex items-center space-x-2">
          <span>+ ADD SHOWCASE PHOTO</span>
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        ${items.map(item => `
          <div class="bg-white rounded-xl border border-[#E2E9F0] overflow-hidden shadow-xs flex flex-col justify-between group">
            <div class="aspect-square relative overflow-hidden bg-[#F8FAFC]">
              <img src="${item.src}" class="w-full h-full object-cover">
              <button type="button" 
                      onclick="adminDeleteCustomWork('${item.id}')" 
                      class="absolute top-2 right-2 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                ✕
              </button>
            </div>
            <div class="p-3">
              <span class="text-[9px] uppercase tracking-wider font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                ${item.category}
              </span>
              <h4 class="font-semibold text-xs text-[#0F172A] mt-1.5 line-clamp-1">${item.title}</h4>
              <p class="text-[10px] text-[#64748B] mt-0.5">${item.client || 'Mer C. Custom'}</p>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function renderCustomWorkModal(pendingImage, isUploading) {
  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E2E9F0]">
        
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-serif text-xl font-semibold text-[#0F172A]">Add Showcase Photo</h3>
          <button type="button" onclick="adminCloseAddCustomWork()" class="text-[#64748B]">✕</button>
        </div>

        <form onsubmit="adminSaveCustomWorkSubmit(event)" class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-[#475569] mb-1">Title *</label>
            <input type="text" name="title" required placeholder="e.g. Spotify Corporate Ceramic Mug" 
                   class="w-full px-3 py-2 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Category *</label>
            <select name="category" class="w-full px-3 py-2 border border-[#CBD5E1] rounded text-[#0F172A]">
              <option value="custom-mugs-bottles">CUSTOM MUGS & BOTTLES</option>
              <option value="custom-tshirts">CUSTOM T-SHIRTS</option>
              <option value="custom-resin-keychains">CUSTOM RESIN ART KEYCHAINS</option>
              <option value="other-custom-work">OTHER CUSTOM WORK</option>
            </select>
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Client Name / Reference</label>
            <input type="text" name="client" placeholder="e.g. Spotify / TIAA" 
                   class="w-full px-3 py-2 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Upload Photo to Cloudinary</label>
            <div class="flex items-center space-x-3">
              ${pendingImage ? `
                <img src="${pendingImage}" class="w-16 h-16 rounded object-cover border border-[#CBD5E1]">
              ` : ''}
              <label class="flex-grow py-3 border-2 border-dashed border-[#CBD5E1] rounded-lg text-center cursor-pointer hover:border-[#0F172A]">
                <span class="text-[11px] text-[#64748B] font-semibold">${isUploading ? 'Uploading to Cloudinary...' : 'Select Photo from Computer'}</span>
                <input type="file" accept="image/*" onchange="adminHandleWorkImageFile(this)" class="hidden">
              </label>
            </div>
          </div>

          <div class="pt-2 flex justify-end space-x-2">
            <button type="button" onclick="adminCloseAddCustomWork()" class="px-4 py-2 border border-[#CBD5E1] rounded">Cancel</button>
            <button type="submit" class="px-5 py-2 bg-[#1E293B] text-white rounded font-semibold uppercase">Save to Showcase</button>
          </div>
        </form>

      </div>
    </div>
  `;
}

function renderCustomersTab(orders) {
  // Aggregate unique customers
  const customerMap = {};
  orders.forEach(order => {
    const emailOrPhone = order.customer.email || order.customer.phone;
    if (!emailOrPhone) return;
    if (!customerMap[emailOrPhone]) {
      customerMap[emailOrPhone] = {
        name: order.customer.name,
        phone: order.customer.phone,
        email: order.customer.email,
        city: order.customer.city,
        totalOrders: 0,
        totalSpent: 0,
        lastOrder: order.createdAt
      };
    }
    customerMap[emailOrPhone].totalOrders += 1;
    customerMap[emailOrPhone].totalSpent += order.totalAmount;
    if (new Date(order.createdAt) > new Date(customerMap[emailOrPhone].lastOrder)) {
      customerMap[emailOrPhone].lastOrder = order.createdAt;
    }
  });

  const customerList = Object.values(customerMap);

  return `
    <div class="space-y-6">
      <div>
        <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Customer Directory</h1>
        <p class="text-xs text-[#64748B]">Directory generated automatically from checkout orders.</p>
      </div>

      <div class="bg-white rounded-xl border border-[#E2E9F0] shadow-xs overflow-hidden">
        ${customerList.length === 0 ? `
          <div class="text-center py-16 text-xs text-[#94A3B8]">No customer order history recorded yet.</div>
        ` : `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#334155]">
              <thead class="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#E2E9F0]">
                <tr>
                  <th class="p-3.5 pl-5">Customer Name</th>
                  <th class="p-3.5">Phone (WhatsApp)</th>
                  <th class="p-3.5">Email</th>
                  <th class="p-3.5">City</th>
                  <th class="p-3.5">Total Orders</th>
                  <th class="p-3.5">Lifetime Value</th>
                  <th class="p-3.5 pr-5">Last Order</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E9F0]">
                ${customerList.map(c => `
                  <tr class="hover:bg-[#F8FAFC]">
                    <td class="p-3.5 pl-5 font-semibold text-[#0F172A]">${c.name}</td>
                    <td class="p-3.5">
                      <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}" target="_blank" class="text-emerald-700 hover:underline flex items-center space-x-1">
                        <span>${c.phone || '—'}</span>
                      </a>
                    </td>
                    <td class="p-3.5 text-[#64748B]">${c.email || '—'}</td>
                    <td class="p-3.5">${c.city || '—'}</td>
                    <td class="p-3.5 font-mono">${c.totalOrders}</td>
                    <td class="p-3.5 font-semibold text-[#0F172A]">&#8377;${c.totalSpent}</td>
                    <td class="p-3.5 pr-5 text-[#64748B]">${new Date(c.lastOrder).toLocaleDateString()}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderSettingsTab(settings) {
  const s = settings || {
    storeName: "Mer C.",
    whatsappNumber: "+917045493582",
    freeShippingThreshold: 0,
    standardShippingFee: 0,
    lowStockThreshold: 15
  };

  return `
    <div class="space-y-6 max-w-2xl">
      <div>
        <h1 class="font-serif text-3xl text-[#0F172A] font-medium">Store Settings</h1>
        <p class="text-xs text-[#64748B]">Configure store branding, WhatsApp contact number, and fulfillment policies.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border border-[#E2E9F0] shadow-xs">
        <form onsubmit="adminSaveSettingsSubmit(event)" class="space-y-4 text-xs">
          
          <!-- FREE DELIVERY POLICY BADGE -->
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900">
            <span class="font-semibold block mb-0.5">🚚 Store Delivery Policy: 100% FREE Delivery</span>
            <span class="text-emerald-700 font-light">Delivery charges are included in product prices. Customers are never charged additional delivery/shipping fees.</span>
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Store Brand Name</label>
            <input type="text" name="storeName" value="${s.storeName || 'Mer C.'}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">WhatsApp Business Number (Inquiries & Customer Contact)</label>
            <input type="text" name="whatsappNumber" value="${s.whatsappNumber || '+917045493582'}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Official Instagram Profile URL</label>
            <input type="text" name="instagramUrl" value="${s.instagramUrl || 'https://www.instagram.com/mercapparelsnaccessories25/'}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]"
                   placeholder="https://www.instagram.com/mercapparelsnaccessories25/">
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Free Shipping Threshold (&#8377;)</label>
              <input type="number" name="freeShippingThreshold" value="${s.freeShippingThreshold !== undefined ? s.freeShippingThreshold : 0}" 
                     class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
            <div>
              <label class="block font-semibold text-[#475569] mb-1">Standard Delivery Fee (&#8377;)</label>
              <input type="number" name="standardShippingFee" value="${s.standardShippingFee !== undefined ? s.standardShippingFee : 0}" 
                     class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
            </div>
          </div>

          <div>
            <label class="block font-semibold text-[#475569] mb-1">Low Stock Warning Threshold (units)</label>
            <input type="number" name="lowStockThreshold" value="${s.lowStockThreshold || 15}" 
                   class="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded text-[#0F172A]">
          </div>

          <div class="pt-4 border-t border-[#E2E9F0]">
            <button type="submit" class="px-6 py-3 bg-[#1E293B] hover:bg-[#334155] text-white font-semibold rounded uppercase tracking-wider">
              SAVE STORE SETTINGS
            </button>
          </div>

        </form>
      </div>

    </div>
  `;
}
