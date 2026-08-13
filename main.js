// ============================================================
// Variedades Isaías — Main JS (Fully Functional)
// ============================================================

// Default product catalog (source of truth for names & default prices)
const DEFAULT_PRODUCTS = [
  { id: 'ajustada-estampada', title: 'Camiseta Ajustada Estampada',    defaultPrice: 38000 },
  { id: 'ajustada-dama',      title: 'Camiseta Dama Piel de Durazno',  defaultPrice: 36000 },
  { id: 'polo-cuello-tejido', title: 'Camiseta Polo Cuello Tejido',   defaultPrice: 48000 },
  { id: 'polo-corporativa',   title: 'Polo Corporativa Premium',       defaultPrice: 52000 },
  { id: 'qatar-deportiva',    title: 'Camiseta Poliéster Qatar',       defaultPrice: 35000 },
  { id: 'qatar-sublimada',    title: 'Camiseta Qatar Sublimada',       defaultPrice: 38000 },
  { id: 'nino-dtf',           title: 'Camiseta Infantil Personalizada',defaultPrice: 28000 },
  { id: 'reflectivo-nocturno',title: 'Camiseta Vinilo Reflectivo',     defaultPrice: 42000 },
  { id: 'gorra-trucker',      title: 'Gorra Malla / Trucker',          defaultPrice: 25000 },
  { id: 'mug-ceramica',       title: 'Mug de Cerámica 11oz',           defaultPrice: 18000 },
  { id: 'termo-aluminio',     title: 'Termo de Aluminio 600ml',        defaultPrice: 32000 },
];

const DEFAULT_PHONE = '573000000000';
const ADMIN_PASSWORD = 'isaias2026';

// ---- State ----
const state = {
  cart: [],
  phone: DEFAULT_PHONE,
  prices: {},           // { productId: number }
  activeCategory: 'todos',
};

// ---- LocalStorage Keys ----
const LS_CART = 'isaias_cart';
const LS_PHONE = 'isaias_phone';
const LS_PRICES = 'isaias_prices';

// ---- Helpers ----
function saveState() {
  localStorage.setItem(LS_CART, JSON.stringify(state.cart));
  localStorage.setItem(LS_PHONE, state.phone);
  localStorage.setItem(LS_PRICES, JSON.stringify(state.prices));
}

function loadState() {
  try {
    const cart = localStorage.getItem(LS_CART);
    if (cart) state.cart = JSON.parse(cart);
  } catch { state.cart = []; }

  const phone = localStorage.getItem(LS_PHONE);
  if (phone) state.phone = phone;

  try {
    const prices = localStorage.getItem(LS_PRICES);
    if (prices) state.prices = JSON.parse(prices);
  } catch { state.prices = {}; }
}

function getPrice(index) {
  const product = DEFAULT_PRODUCTS[index];
  if (!product) return 0;
  return state.prices[product.id] ?? product.defaultPrice;
}

function getPriceByTitle(title) {
  const product = DEFAULT_PRODUCTS.find(p => p.title === title);
  if (!product) return 0;
  return state.prices[product.id] ?? product.defaultPrice;
}

function formatCOP(num) {
  return '$' + num.toLocaleString('es-CO');
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyPricesToDOM();
  initHeroAnimation();
  initGallery();
  initCatalog();
  initCart();
  initAdmin();
  initScrollReveal();
  initWhatsAppLinks();
  initMobileNav();
  initCatalogSearch();
  initFAQ();
  syncFooterPhone();
  renderCart();
  initLightbox();
});

// ============================================================
// APPLY SAVED PRICES TO DOM
// ============================================================
function applyPricesToDOM() {
  const cards = document.querySelectorAll('.prod-card');
  cards.forEach((card, idx) => {
    const priceEl = card.querySelector('.price');
    if (priceEl && idx < DEFAULT_PRODUCTS.length) {
      priceEl.textContent = formatCOP(getPrice(idx)) + ' COP';
    }
  });
}

// ============================================================
// HERO ANIMATION
// ============================================================
function initHeroAnimation() {
  const pressRig = document.getElementById('pressRig');
  if (pressRig) {
    setTimeout(() => {
      pressRig.classList.add('run');
    }, 400);
  }
}

// ============================================================
// GALLERY
// ============================================================
function initGallery() {
  const track = document.querySelector('.gallery-track');
  const prevBtn = document.getElementById('gnavPrev');
  const nextBtn = document.getElementById('gnavNext');
  const dotsContainer = document.querySelector('.gallery-dots');
  
  if (!track) return;
  
  const items = track.querySelectorAll('.gallery-item');
  if (items.length === 0) return;

  // Create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    items.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `gdot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => scrollToItem(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateActiveState() {
    const scrollPos = track.scrollLeft;
    const itemWidth = items[0].offsetWidth + 16;
    const activeIndex = Math.round(scrollPos / itemWidth);

    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === activeIndex);
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.gdot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }
  }

  function scrollToItem(index) {
    const itemWidth = items[0].offsetWidth + 16;
    track.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth + 16;
      track.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth + 16;
      track.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });
  }

  // Drag to scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });

  track.addEventListener('scroll', updateActiveState);
  updateActiveState();
}

// ============================================================
// CATALOG FILTER + ADD TO CART
// ============================================================
function initCatalog() {
  const tabs = document.querySelectorAll('.cat-tab');
  const prods = document.querySelectorAll('.prod-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.dataset.category || 'todos';
      prods.forEach(prod => {
        if (cat === 'todos' || prod.dataset.category === cat) {
          prod.style.display = 'flex';
        } else {
          prod.style.display = 'none';
        }
      });
    });
  });

  // Add to cart buttons
  document.querySelectorAll('.add-btn').forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.prod-card');
      if (!card) return;

      const title = card.querySelector('h4')?.textContent || 'Producto';
      const price = getPrice(idx);
      const img = card.querySelector('img')?.src || '';
      const telaSelect = card.querySelector('.tela-select');
      const sizeSelect = card.querySelector('.size-select');
      const fabric = telaSelect ? telaSelect.value : '';
      const size = sizeSelect ? sizeSelect.value : '';

      addToCart({ title, price, img, fabric, size });
      showToast(`¡${title} añadido al carrito!`);
    });
  });
}

// ============================================================
// CART LOGIC
// ============================================================
function initCart() {
  const cartBtn = document.getElementById('cartBtn');
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const closeBtn = document.getElementById('closeCart');
  const checkoutBtn = document.getElementById('checkoutWaBtn');

  function openCart() {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
  }

  function closeCart() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
  }

  cartBtn?.addEventListener('click', openCart);
  closeBtn?.addEventListener('click', closeCart);
  overlay?.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      
      let msg = "¡Hola! Quisiera realizar un pedido en Variedades Isaías:\n\n";
      let total = 0;

      state.cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        const details = [];
        if (item.fabric) details.push(item.fabric);
        if (item.size) details.push('Talla ' + item.size);
        const detailStr = details.length > 0 ? ' (' + details.join(' · ') + ')' : '';
        msg += `${index + 1}. *${item.title}*${detailStr} x${item.qty} - ${formatCOP(itemTotal)}\n`;
      });

      msg += `\n*Total estimado:* ${formatCOP(total)}\n`;
      msg += "\n¿Me ayudan a confirmar disponibilidades y tiempo de entrega?";

      const waUrl = `https://wa.me/${state.phone}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }
}

function addToCart(product) {
  const existing = state.cart.find(
    item => item.title === product.title && item.fabric === product.fabric && item.size === product.size
  );

  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  renderCart();
  saveState();
}

function updateQty(index, delta) {
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  renderCart();
  saveState();
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const subtotalVal = document.getElementById('subtotalVal');

  if (!cartItemsContainer) return;

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('is-hidden', totalItems === 0);
  }

  let totalMoney = 0;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Tu carrito está vacío.<br>¡Agrega algunos productos!</div>';
  } else {
    cartItemsContainer.innerHTML = state.cart.map((item, idx) => {
      // Use latest price from state
      const latestPrice = getPriceByTitle(item.title) || item.price;
      const itemTotal = latestPrice * item.qty;
      totalMoney += itemTotal;

      const details = [];
      if (item.fabric) details.push(item.fabric);
      if (item.size) details.push('Talla ' + item.size);

      return `
        <div class="cart-row">
          ${item.img ? `<img src="${item.img}" alt="${item.title}">` : '<div class="mug-ph"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg></div>'}
          <div class="cart-info">
            <div class="nm">${item.title}</div>
            ${details.length > 0 ? `<div class="tela-tag">${details.join(' · ')}</div>` : ''}
            <div class="px">${formatCOP(latestPrice)}</div>
            <div class="qty-row">
              <button class="qty-btn" onclick="window.updateCartQty(${idx}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="window.updateCartQty(${idx}, 1)">+</button>
              <button class="remove-btn" onclick="window.updateCartQty(${idx}, -${item.qty})">Eliminar</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (subtotalVal) {
    subtotalVal.textContent = formatCOP(totalMoney) + ' COP';
  }
}

// Global scope binding for inline onclick
window.updateCartQty = (idx, delta) => updateQty(idx, delta);

// ============================================================
// ADMIN PANEL
// ============================================================
function initAdmin() {
  const adminLink = document.getElementById('adminLink');
  const adminOverlay = document.getElementById('adminOverlay');
  const closeAdmin = document.getElementById('closeAdmin');
  const adminGate = document.getElementById('adminGate');
  const adminSection = document.getElementById('adminSection');
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminPass = document.getElementById('adminPass');
  const adminError = document.getElementById('adminError');
  const adminLogout = document.getElementById('adminLogout');

  // Open overlay
  adminLink?.addEventListener('click', (e) => {
    e.preventDefault();
    adminOverlay?.classList.add('open');
    // Reset state: show gate, hide section
    if (adminGate) adminGate.style.display = 'block';
    if (adminSection) adminSection.classList.remove('visible');
    if (adminPass) adminPass.value = '';
    if (adminError) adminError.style.display = 'none';
  });

  // Close overlay
  closeAdmin?.addEventListener('click', () => {
    adminOverlay?.classList.remove('open');
  });

  // Login
  adminLoginBtn?.addEventListener('click', () => {
    const pw = adminPass?.value || '';
    if (pw === ADMIN_PASSWORD) {
      if (adminGate) adminGate.style.display = 'none';
      if (adminSection) adminSection.classList.add('visible');
      if (adminError) adminError.style.display = 'none';
      renderAdminPriceList();
      // Set current phone
      const phoneInput = document.getElementById('phoneInput');
      if (phoneInput) phoneInput.value = state.phone;
    } else {
      if (adminError) adminError.style.display = 'block';
    }
  });

  // Allow Enter key on password field
  adminPass?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adminLoginBtn?.click();
  });

  // Logout
  adminLogout?.addEventListener('click', () => {
    if (adminGate) adminGate.style.display = 'block';
    if (adminSection) adminSection.classList.remove('visible');
    if (adminPass) adminPass.value = '';
  });

  // Admin Tabs
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.dataset.tab;
      document.querySelectorAll('.admin-tab-content').forEach(tc => tc.classList.remove('visible'));
      const target = document.getElementById('tab-' + tabName);
      if (target) target.classList.add('visible');
    });
  });

  // Save phone
  const savePhoneBtn = document.getElementById('savePhoneBtn');
  savePhoneBtn?.addEventListener('click', () => {
    const phoneInput = document.getElementById('phoneInput');
    const phoneSuccess = document.getElementById('phoneSuccess');
    const newPhone = phoneInput?.value?.replace(/[^0-9]/g, '') || '';
    if (newPhone.length >= 10) {
      state.phone = newPhone;
      saveState();
      initWhatsAppLinks();
      // Update footer display
      const footerPhone = document.querySelector('.foot-grid');
      if (footerPhone) {
        const ps = footerPhone.querySelectorAll('p');
        ps.forEach(p => {
          if (p.textContent.includes('WhatsApp:')) {
            p.textContent = 'WhatsApp: +' + newPhone.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
          }
        });
      }
      if (phoneSuccess) {
        phoneSuccess.classList.add('show');
        setTimeout(() => phoneSuccess.classList.remove('show'), 3000);
      }
    }
  });
}

function renderAdminPriceList() {
  const priceList = document.getElementById('priceList');
  if (!priceList) return;

  priceList.innerHTML = DEFAULT_PRODUCTS.map((product, idx) => {
    const currentPrice = getPrice(idx);
    return `
      <div class="price-item" data-product-id="${product.id}" data-product-index="${idx}">
        <span class="pi-name">${product.title}</span>
        <input type="number" class="pi-input" value="${currentPrice}" min="0" step="1000" id="price-input-${idx}">
        <button class="btn-save" onclick="window.saveProductPrice(${idx})">Guardar</button>
      </div>
    `;
  }).join('');
}

window.saveProductPrice = (idx) => {
  const input = document.getElementById('price-input-' + idx);
  const priceSuccess = document.getElementById('priceSuccess');
  if (!input) return;

  const newPrice = parseInt(input.value) || 0;
  const product = DEFAULT_PRODUCTS[idx];
  if (!product) return;

  state.prices[product.id] = newPrice;
  saveState();
  applyPricesToDOM();
  renderCart(); // update cart with new prices

  if (priceSuccess) {
    priceSuccess.classList.add('show');
    setTimeout(() => priceSuccess.classList.remove('show'), 2500);
  }
};

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// ============================================================
// WHATSAPP LINKS
// ============================================================
function initWhatsAppLinks() {
  const defaultMsg = "¡Hola! Me gustaría cotizar un trabajo de sublimación / DTF / bordado en Valledupar.";
  const url = `https://wa.me/${state.phone}?text=${encodeURIComponent(defaultMsg)}`;

  const waNavBtn = document.getElementById('waNavBtn');
  const waHeroBtn = document.getElementById('waHeroBtn');
  const waCtaBtn = document.getElementById('waCtaBtn');

  if (waNavBtn) waNavBtn.href = url;
  if (waHeroBtn) waHeroBtn.href = url;
  if (waCtaBtn) waCtaBtn.href = url;
}

// ============================================================
// MOBILE NAV
// ============================================================
function initMobileNav() {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const closeMobile = document.getElementById('closeMobile');

  burgerBtn?.addEventListener('click', () => {
    mobileNav?.classList.add('open');
  });

  closeMobile?.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
  });

  // Close on link click
  mobileNav?.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// ============================================================
// CATALOG SEARCH
// ============================================================
function initCatalogSearch() {
  const searchInput = document.getElementById('catSearchInput');
  const shortcut = document.getElementById('searchShortcut');
  if (!searchInput) return;

  // Global Ctrl + K listener
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });

  searchInput.addEventListener('focus', () => {
    if (shortcut) shortcut.style.display = 'none';
  });

  searchInput.addEventListener('blur', () => {
    if (!searchInput.value && shortcut) {
      shortcut.style.display = 'flex';
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query && shortcut) {
      shortcut.style.display = 'none';
    }

    const prods = document.querySelectorAll('.prod-card');
    const activeTab = document.querySelector('.cat-tab.active');
    const cat = activeTab?.dataset.category || 'todos';

    prods.forEach(prod => {
      const title = prod.querySelector('h4')?.textContent.toLowerCase() || '';
      const desc = prod.querySelector('.desc')?.textContent.toLowerCase() || '';
      const categoryMatch = (cat === 'todos' || prod.dataset.category === cat);
      const searchMatch = !query || title.includes(query) || desc.includes(query);

      if (categoryMatch && searchMatch) {
        prod.style.display = 'flex';
      } else {
        prod.style.display = 'none';
      }
    });
  });
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close other accordion items
      faqItems.forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ============================================================
// SYNC FOOTER PHONE
// ============================================================
function syncFooterPhone() {
  const footerGrid = document.querySelector('.foot-grid');
  if (!footerGrid) return;
  const ps = footerGrid.querySelectorAll('p');
  ps.forEach(p => {
    if (p.textContent.includes('WhatsApp:')) {
      p.textContent = 'WhatsApp: +' + state.phone;
    }
  });
}

// ============================================================
// DYNAMIC LIGHTBOX / 21st.dev Style Preview Modal
// ============================================================
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('closeLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');

  if (!modal || !closeBtn) return;

  function openLightbox(imgSrc, title, tag, desc) {
    if (lightboxImg) lightboxImg.src = imgSrc;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxTag) lightboxTag.textContent = tag;
    if (lightboxDesc) lightboxDesc.textContent = desc;

    // Generate specific WhatsApp link
    if (lightboxWaBtn) {
      const text = encodeURIComponent(`¡Hola! Estoy interesado en el diseño "${title}" (${tag}) que vi en su catálogo web: ${window.location.origin}${imgSrc}`);
      lightboxWaBtn.href = `https://wa.me/${state.phone}?text=${text}`;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Esc key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Attach to Gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      const title = img.alt || "Diseño Personalizado";
      
      // Infer category from src path
      let catLabel = "Trabajo Reciente";
      if (img.src.includes('ajustadas')) catLabel = "Tela Ajustada";
      else if (img.src.includes('cuello_tejido')) catLabel = "Polo / Cuello Tejido";
      else if (img.src.includes('qatar')) catLabel = "Poliéster Qatar";
      else if (img.src.includes('reflectivos_ninos')) catLabel = "Reflectivo / Infantil";

      openLightbox(img.getAttribute('src'), title, catLabel, `Estampado de alta definición para ${title.toLowerCase()}. Trabajo realizado en Valledupar.`);
    });
  });

  // Attach to Product images
  document.querySelectorAll('.prod-card').forEach(card => {
    const imgContainer = card.querySelector('.prod-media');
    if (!imgContainer) return;
    
    imgContainer.addEventListener('click', (e) => {
      // Prevent open if clicking the tag or the add button
      if (e.target.closest('.prod-tag') || e.target.closest('.add-btn') || e.target.closest('.tela-select') || e.target.closest('.size-select')) return;

      const img = imgContainer.querySelector('img');
      const title = card.querySelector('h4')?.textContent || "Prenda del catálogo";
      const tag = card.querySelector('.prod-tag')?.textContent || "Prenda";
      const desc = card.querySelector('.desc')?.textContent || "Prenda para estampados y personalización.";
      if (img) {
        openLightbox(img.getAttribute('src'), title, tag, desc);
      }
    });
  });
}

