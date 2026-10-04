/**
 * LegalMate AI Suite - Core Interactive Logic & State Management
 * Adheres strictly to Swiss Editorial Design System & Responsive Workflows
 */

const LegalMate = {
  activeRoute: 'dashboard',

  init() {
    this.initRouter();
    this.initGlobalShortcuts();
    this.initNotifications();
    this.initPacerSync();
  },

  /* ----------------------------------------------------
   * Toast Notification Service
   * ---------------------------------------------------- */
  showToast(message, icon = 'check_circle', duration = 3000) {
    let container = document.getElementById('legalmate-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'legalmate-toast-container';
      container.className = 'fixed top-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-center justify-between p-3.5 bg-[#171717] text-white rounded-xl shadow-xl border border-white/10 transition-all duration-300 transform translate-y-[-10px] opacity-0';
    toast.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="material-symbols-outlined text-[18px] text-[#ef4444] shrink-0">${icon}</span>
        <span class="text-[13px] font-medium leading-snug truncate">${message}</span>
      </div>
      <span class="text-[11px] font-mono text-neutral-400 shrink-0 ml-2">JUST NOW</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-[-10px]', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
      toast.classList.add('translate-y-[-10px]', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  /* ----------------------------------------------------
   * Hash-Based Single-Page Routing (supports multi-view)
   * ---------------------------------------------------- */
  initRouter() {
    window.addEventListener('hashchange', () => this.handleHashChange());
    // Initial check
    this.handleHashChange();
  },

  handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    const validRoutes = ['dashboard', 'assistant', 'docgen', 'docanalyzer', 'cms'];
    if (validRoutes.includes(hash)) {
      this.switchView(hash);
    }
  },

  navigateTo(routeId) {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.endsWith('.html')) {
      window.location.hash = routeId;
    } else {
      // Map routes to standalone html pages if on a standalone page
      const pageMap = {
        'dashboard': 'dashboard.html',
        'assistant': 'ai-assistant.html',
        'docgen': 'document-generator.html',
        'docanalyzer': 'document-analyzer.html',
        'cms': 'case-management.html'
      };
      if (pageMap[routeId]) {
        window.location.href = pageMap[routeId];
      }
    }
  },

  switchView(routeId) {
    this.activeRoute = routeId;

    // Toggle main views if in unified mode
    document.querySelectorAll('.app-view').forEach(view => {
      if (view.id === `view-${routeId}`) {
        view.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        view.classList.add('hidden');
      }
    });

    // Update navigation active states
    document.querySelectorAll('[data-path]').forEach(link => {
      const path = link.getAttribute('data-path');
      const isCurrent = path === routeId;
      if (isCurrent) {
        link.classList.add('bg-[#171717]', 'text-white', 'font-semibold');
        link.classList.remove('text-neutral-600', 'hover:bg-neutral-100', 'hover:text-black');
        link.setAttribute('aria-current', 'page');
        const icon = link.querySelector('.material-symbols-outlined');
        if (icon) icon.classList.add('text-white');
      } else {
        link.classList.remove('bg-[#171717]', 'text-white', 'font-semibold');
        link.classList.add('text-neutral-600', 'hover:bg-neutral-100', 'hover:text-black');
        link.removeAttribute('aria-current');
        const icon = link.querySelector('.material-symbols-outlined');
        if (icon) icon.classList.remove('text-white');
      }
    });

    // Mobile bottom bar active classes
    document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
      const path = btn.getAttribute('data-path');
      if (path === routeId) {
        btn.classList.add('bg-[#171717]', 'text-white');
        btn.classList.remove('text-neutral-500');
      } else {
        btn.classList.remove('bg-[#171717]', 'text-white');
        btn.classList.add('text-neutral-500');
      }
    });

    // Sync Page Title in mobile/desktop headers
    const titles = {
      'dashboard': 'Dashboard',
      'assistant': 'AI Counsel Assistant',
      'docgen': 'Document Generator',
      'docanalyzer': 'Document Risk Analyzer',
      'cms': 'Case Docket Registry'
    };
    const titleEl = document.getElementById('current-page-title');
    if (titleEl && titles[routeId]) {
      titleEl.textContent = titles[routeId];
    }
  },

  /* ----------------------------------------------------
   * Global Keyboard Shortcuts (Ctrl+K Command Palette)
   * ---------------------------------------------------- */
  initGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openOmnibox();
      }
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  },

  openOmnibox() {
    let omnibox = document.getElementById('legalmate-omnibox');
    if (!omnibox) {
      this.createOmnibox();
      omnibox = document.getElementById('legalmate-omnibox');
    }
    omnibox.classList.remove('hidden');
    const input = document.getElementById('omnibox-input');
    if (input) {
      input.value = '';
      input.focus();
    }
  },

  closeAllModals() {
    document.querySelectorAll('.legalmate-modal').forEach(m => m.classList.add('hidden'));
  },

  createOmnibox() {
    const modal = document.createElement('div');
    modal.id = 'legalmate-omnibox';
    modal.className = 'legalmate-modal fixed inset-0 z-[1000] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4';
    modal.innerHTML = `
      <div class="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden" onclick="event.stopPropagation()">
        <div class="p-3 border-b border-neutral-200 flex items-center gap-3">
          <span class="material-symbols-outlined text-neutral-400 text-[22px]">search</span>
          <input id="omnibox-input" type="text" placeholder="Search statutes, cases, clauses, or jump to module..." class="w-full text-[15px] outline-none placeholder:text-neutral-400 py-1" />
          <span class="text-[11px] font-mono text-neutral-400 border border-neutral-200 px-1.5 py-0.5 rounded">ESC</span>
        </div>
        <div class="p-2 max-h-[380px] overflow-y-auto space-y-1" id="omnibox-results">
          <div class="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">Quick Jump</div>
          <div class="omnibox-item flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer text-sm" onclick="LegalMate.navigateTo('assistant'); LegalMate.closeAllModals();">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-neutral-700">auto_awesome</span>
              <span class="font-medium">AI Counsel Assistant</span>
            </div>
            <span class="text-xs text-neutral-400 font-mono">#assistant</span>
          </div>
          <div class="omnibox-item flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer text-sm" onclick="LegalMate.navigateTo('docgen'); LegalMate.closeAllModals();">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-neutral-700">note_add</span>
              <span class="font-medium">Document Generator</span>
            </div>
            <span class="text-xs text-neutral-400 font-mono">#docgen</span>
          </div>
          <div class="omnibox-item flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer text-sm" onclick="LegalMate.navigateTo('docanalyzer'); LegalMate.closeAllModals();">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-neutral-700">document_scanner</span>
              <span class="font-medium">Document Risk Analyzer</span>
            </div>
            <span class="text-xs text-neutral-400 font-mono">#docanalyzer</span>
          </div>
          <div class="omnibox-item flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer text-sm" onclick="LegalMate.navigateTo('cms'); LegalMate.closeAllModals();">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-neutral-700">folder_open</span>
              <span class="font-medium">Case Docket Registry</span>
            </div>
            <span class="text-xs text-neutral-400 font-mono">#cms</span>
          </div>
          <div class="px-3 pt-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">Active Dockets</div>
          <div class="omnibox-item flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer text-sm" onclick="LegalMate.navigateTo('cms'); LegalMate.closeAllModals(); LegalMate.showCaseDetails('State of California v. Thorne Dynamics');">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-neutral-700">gavel</span>
              <span class="font-medium">#CR-2024-8841 Thorne Dynamics</span>
            </div>
            <span class="text-xs text-neutral-400 font-mono">Hearing Tmrw</span>
          </div>
        </div>
      </div>
    `;
    modal.addEventListener('click', () => modal.classList.add('hidden'));
    document.body.appendChild(modal);

    const input = modal.querySelector('#omnibox-input');
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      modal.querySelectorAll('.omnibox-item').forEach(item => {
        if (!q || item.textContent.toLowerCase().includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  },

  /* ----------------------------------------------------
   * PACER Synchronizer Simulation
   * ---------------------------------------------------- */
  initPacerSync() {
    const pacerBtn = document.getElementById('pacer-sync-btn');
    if (pacerBtn) {
      pacerBtn.addEventListener('click', () => {
        this.triggerPacerSync();
      });
    }
  },

  triggerPacerSync() {
    const icon = document.getElementById('pacer-sync-icon');
    if (icon) icon.classList.add('animate-spin');
    this.showToast('Connecting to PACER CourtSync APIs...', 'sync', 2000);
    setTimeout(() => {
      if (icon) icon.classList.remove('animate-spin');
      this.showToast('PACER Dockets Synchronized • 34 active cases verified', 'verified');
    }, 1800);
  },

  /* ----------------------------------------------------
   * Notifications Drawer
   * ---------------------------------------------------- */
  initNotifications() {
    // Shared notification buttons
    document.querySelectorAll('.btn-notifications').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleNotificationsMenu();
      });
    });
  },

  toggleNotificationsMenu() {
    let menu = document.getElementById('notifications-dropdown');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
};

/* Attach to window */
window.LegalMate = LegalMate;
document.addEventListener('DOMContentLoaded', () => {
  LegalMate.init();
});
