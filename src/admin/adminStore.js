/**
 * Admin Panel Reactive State Store
 * Manages authentication, dashboard metrics, orders, products, custom work, and settings.
 */

class AdminStore {
  constructor() {
    this.listeners = new Set();
    this.token = localStorage.getItem('merc_admin_token') || null;
    this.user = null;
    this.isAuthenticated = false;
    this.activeTab = 'dashboard'; // 'dashboard' | 'orders' | 'products' | 'custom-work' | 'customers' | 'settings'
    this.isSidebarOpen = false;

    // Data states
    this.dashboardStats = null;
    this.recentOrders = [];
    this.orders = [];
    this.ordersTotal = 0;
    this.unreadOrdersCount = 0;
    this.selectedOrder = null;
    this.ordersFilter = {
      search: '',
      status: 'ALL',
      date: 'all'
    };

    this.products = [];
    this.editingProduct = null;
    this.isAddProductOpen = false;

    this.customWorkItems = [];
    this.isAddCustomWorkOpen = false;

    this.settings = null;
    this.isLoading = false;
    this.errorMessage = null;
    this.toast = null;
    this.toastTimer = null;

    if (this.token) {
      this.checkAuth();
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(l => l(this.getState()));
  }

  getState() {
    return {
      token: this.token,
      user: this.user,
      isAuthenticated: this.isAuthenticated,
      activeTab: this.activeTab,
      isSidebarOpen: this.isSidebarOpen,
      dashboardStats: this.dashboardStats,
      recentOrders: this.recentOrders,
      orders: this.orders,
      ordersTotal: this.ordersTotal,
      unreadOrdersCount: this.unreadOrdersCount,
      selectedOrder: this.selectedOrder,
      ordersFilter: this.ordersFilter,
      products: this.products,
      editingProduct: this.editingProduct,
      isAddProductOpen: this.isAddProductOpen,
      customWorkItems: this.customWorkItems,
      isAddCustomWorkOpen: this.isAddCustomWorkOpen,
      settings: this.settings,
      isLoading: this.isLoading,
      errorMessage: this.errorMessage,
      toast: this.toast
    };
  }

  showToast(message, type = 'success') {
    this.toast = { message, type };
    if (typeof document !== 'undefined') {
      let toastEl = document.getElementById('admin-toast-container');
      if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'admin-toast-container';
        document.body.appendChild(toastEl);
      }
      toastEl.className = `fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg shadow-xl text-xs font-semibold text-white flex items-center space-x-2 transition-opacity duration-300 pointer-events-none ${type === 'error' ? 'bg-rose-700' : 'bg-[#0F172A]'}`;
      toastEl.innerHTML = `
        <span class="w-2 h-2 rounded-full ${type === 'error' ? 'bg-rose-300' : 'bg-emerald-400'}"></span>
        <span>${message}</span>
      `;
      toastEl.style.opacity = '1';
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast = null;
        if (toastEl) {
          toastEl.style.opacity = '0';
          setTimeout(() => {
            if (toastEl && toastEl.parentNode) toastEl.remove();
          }, 300);
        }
      }, 3000);
    }
  }

  getHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async checkAuth() {
    try {
      const res = await fetch('/api/auth', {
        headers: this.getHeaders()
      });
      const data = await res.json();
      if (data.authenticated) {
        this.isAuthenticated = true;
        this.user = data.user;
        await this.loadInitialData();
        return;
      } else {
        this.logout();
      }
    } catch {
      this.logout();
    }
    this.notify();
  }

  async login(username, password) {
    this.isLoading = true;
    this.errorMessage = null;
    this.notify();

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', username, password })
      });

      const data = await res.json();
      if (data.success) {
        this.token = data.token;
        this.user = data.user;
        this.isAuthenticated = true;
        localStorage.setItem('merc_admin_token', data.token);
        this.showToast('Welcome back, Admin!');
        await this.loadInitialData();
      } else {
        this.errorMessage = data.message || 'Invalid username or password.';
      }
    } catch (err) {
      this.errorMessage = 'Network error connecting to authentication service.';
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async logout() {
    try {
      await fetch('/api/auth', {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ action: 'logout' })
      });
    } catch (e) {
      // Ignore network errors on logout
    }

    this.token = null;
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem('merc_admin_token');
    this.notify();
  }

  setTab(tab) {
    this.activeTab = tab;
    this.isSidebarOpen = false;
    this.errorMessage = null;
    if (tab === 'dashboard') this.fetchDashboard();
    if (tab === 'orders') this.fetchOrders();
    if (tab === 'products') this.fetchProducts();
    if (tab === 'custom-work') this.fetchCustomWork();
    if (tab === 'settings') this.fetchSettings();
    this.notify();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.notify();
  }

  async loadInitialData() {
    await Promise.all([
      this.fetchDashboard({ silent: true }),
      this.fetchOrders({ silent: true }),
      this.fetchProducts({ silent: true }),
      this.fetchSettings({ silent: true })
    ]);
    this.notify();
  }

  // Dashboard Metrics
  async fetchDashboard(options = {}) {
    try {
      const res = await fetch('/api/dashboard', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.dashboardStats = data.stats;
        this.recentOrders = data.recentOrders;
        this.unreadOrdersCount = data.stats.newOrders;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Dashboard fetch error:', err);
    }
  }

  // Orders Management
  async fetchOrders(options = {}) {
    try {
      const { search, status, date } = this.ordersFilter;
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (status && status !== 'ALL') params.append('status', status);
      if (date && date !== 'all') params.append('date', date);

      const res = await fetch(`/api/orders?${params.toString()}`, { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.orders = data.orders;
        this.ordersTotal = data.total;
        this.unreadOrdersCount = data.unreadCount;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Orders fetch error:', err);
    }
  }

  setOrderFilter(key, value) {
    this.ordersFilter[key] = value;
    if (key === 'search') {
      if (this.orderSearchTimer) clearTimeout(this.orderSearchTimer);
      this.orderSearchTimer = setTimeout(() => {
        this.fetchOrders();
      }, 300);
    } else {
      this.fetchOrders();
    }
  }

  selectOrder(order) {
    this.selectedOrder = order;
    if (order && !order.isRead) {
      this.updateOrderStatus(order.orderId, { isRead: true });
    }
    this.notify();
  }

  closeOrderDrawer() {
    this.selectedOrder = null;
    this.notify();
  }

  async updateOrderStatus(orderId, updatePayload) {
    try {
      const res = await fetch('/api/orders', {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ orderId, ...updatePayload })
      });
      const data = await res.json();
      if (data.success) {
        this.showToast(`Order ${orderId} updated.`);
        if (this.selectedOrder && this.selectedOrder.orderId === orderId) {
          this.selectedOrder = data.order;
        }
        await this.fetchOrders();
        await this.fetchDashboard();
      }
    } catch (err) {
      this.showToast('Failed to update order.', 'error');
    }
  }

  // Products Management
  async fetchProducts(options = {}) {
    try {
      const res = await fetch('/api/products?all=true', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.products = data.products;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Products fetch error:', err);
    }
  }

  openAddProductModal() {
    this.editingProduct = null;
    this.isAddProductOpen = true;
    this.notify();
  }

  openEditProductModal(product) {
    this.editingProduct = product;
    this.isAddProductOpen = true;
    this.notify();
  }

  closeProductModal() {
    this.isAddProductOpen = false;
    this.editingProduct = null;
    this.notify();
  }

  async saveProduct(productData) {
    this.isLoading = true;
    this.notify();
    try {
      const isEdit = Boolean(productData.id);
      const url = '/api/products';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: this.getHeaders(),
        body: JSON.stringify(productData)
      });
      const data = await res.json();

      if (data.success) {
        this.showToast(isEdit ? 'Product updated successfully.' : 'Product created successfully.');
        this.closeProductModal();
        await this.fetchProducts();
        await this.fetchDashboard();
        // Notify customer store to refresh products
        if (window.refreshCustomerProducts) {
          window.refreshCustomerProducts();
        }
      } else {
        this.showToast(data.message || 'Failed to save product.', 'error');
      }
    } catch (err) {
      this.showToast('Error saving product.', 'error');
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async deleteProduct(id, permanent = false) {
    if (!confirm(permanent ? 'Are you sure you want to permanently delete this product?' : 'Are you sure you want to archive this product?')) {
      return;
    }

    try {
      const res = await fetch(`/api/products?id=${id}&permanent=${permanent}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      const data = await res.json();
      if (data.success) {
        this.showToast(data.message);
        await this.fetchProducts();
        await this.fetchDashboard();
        if (window.refreshCustomerProducts) {
          window.refreshCustomerProducts();
        }
      }
    } catch (err) {
      this.showToast('Error deleting product.', 'error');
    }
  }

  // Cloudinary Image Upload
  async uploadImage(base64Data, folder = 'mer-c/products') {
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ fileData: base64Data, folder })
      });
      const data = await res.json();
      if (data.success) {
        return { success: true, url: data.url, publicId: data.publicId };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  // Custom Work
  async fetchCustomWork() {
    try {
      const res = await fetch('/api/custom-work', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.customWorkItems = data.items;
        this.notify();
      }
    } catch (err) {
      console.warn('Custom work fetch error:', err);
    }
  }

  async saveCustomWork(itemData) {
    this.isLoading = true;
    this.notify();
    try {
      const res = await fetch('/api/custom-work', {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(itemData)
      });
      const data = await res.json();
      if (data.success) {
        this.showToast('Showcase photo added.');
        this.isAddCustomWorkOpen = false;
        await this.fetchCustomWork();
      } else {
        this.showToast(data.message || 'Failed to add showcase item.', 'error');
      }
    } catch (err) {
      this.showToast('Error saving showcase item.', 'error');
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async deleteCustomWork(id) {
    if (!confirm('Are you sure you want to remove this showcase photo?')) return;
    try {
      const res = await fetch(`/api/custom-work?id=${id}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      const data = await res.json();
      if (data.success) {
        this.showToast('Showcase item removed.');
        await this.fetchCustomWork();
      }
    } catch (err) {
      this.showToast('Error deleting item.', 'error');
    }
  }

  // Settings
  async fetchSettings(options = {}) {
    try {
      const res = await fetch('/api/settings', { headers: this.getHeaders() });
      const data = await res.json();
      if (data.success) {
        this.settings = data.settings;
        if (!options.silent) this.notify();
      }
    } catch (err) {
      console.warn('Settings fetch error:', err);
    }
  }

  async saveSettings(settingsData) {
    this.isLoading = true;
    this.notify();
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(settingsData)
      });
      const data = await res.json();
      if (data.success) {
        this.showToast('Settings saved successfully.');
        this.settings = data.settings;
      }
    } catch (err) {
      this.showToast('Error updating settings.', 'error');
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }
}

export const adminStore = new AdminStore();
