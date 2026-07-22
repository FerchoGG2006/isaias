// State
const state = {
  cart: [],
  activeCategory: 'todos',
  phone: '573000000000' // WhatsApp phone number
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimation();
  initGallery();
  initCatalog();
  initCart();
  initAdmin();
  initScrollReveal();
  initWhatsAppLinks();
});

/* Hero Heat Press Animation */
function initHeroAnimation() {
  const pressRig = document.getElementById('pressRig');
  if (pressRig) {
    setTimeout(() => {
      pressRig.classList.add('run');
    }, 400);
  }
}

/* Gallery Controls & Drag Scroll */
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

/* Catalog Filter Tabs */
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
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.prod-card');
      if (!card) return;

      const title = card.querySelector('h4')?.textContent || 'Producto';
      const priceText = card.querySelector('.price')?.textContent || '$0';
      const price = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
      const img = card.querySelector('img')?.src || '';
      const select = card.querySelector('.tela-select');
      const fabric = select ? select.value : '';

      addToCart({ title, price, img, fabric });
      showToast(`¡${title} añadido al carrito!`);
    });
  });
}

/* Cart Drawer Logic */
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
        msg += `${index + 1}. *${item.title}* ${item.fabric ? '(' + item.fabric + ')' : ''} x${item.qty} - $${itemTotal.toLocaleString('es-CO')}\n`;
      });

      msg += `\n*Total estimado:* $${total.toLocaleString('es-CO')}\n`;
      msg += "\n¿Me ayudan a confirmar disponibilidades y tiempo de entrega?";

      const waUrl = `https://wa.me/${state.phone}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }
}

function addToCart(product) {
  const existing = state.cart.find(
    item => item.title === product.title && item.fabric === product.fabric
  );

  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

function updateQty(index, delta) {
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  renderCart();
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
      const itemTotal = item.price * item.qty;
      totalMoney += itemTotal;

      return `
        <div class="cart-row">
          ${item.img ? `<img src="${item.img}" alt="${item.title}">` : '<div class="mug-ph"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg></div>'}
          <div class="cart-info">
            <div class="nm">${item.title}</div>
            ${item.fabric ? `<div class="tela-tag">${item.fabric}</div>` : ''}
            <div class="px">$${item.price.toLocaleString('es-CO')}</div>
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
    subtotalVal.textContent = `$${totalMoney.toLocaleString('es-CO')}`;
  }
}

// Global scope binding for inline onclick
window.updateCartQty = (idx, delta) => updateQty(idx, delta);

/* Admin Overlay Modal */
function initAdmin() {
  const adminLink = document.getElementById('adminLink');
  const adminOverlay = document.getElementById('adminOverlay');
  const closeAdmin = document.getElementById('closeAdmin');

  adminLink?.addEventListener('click', (e) => {
    e.preventDefault();
    adminOverlay?.classList.add('open');
  });

  closeAdmin?.addEventListener('click', () => {
    adminOverlay?.classList.remove('open');
  });
}

/* Toast Notification */
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

/* Scroll Reveal */
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

/* Dynamic WhatsApp Hero/Nav Buttons */
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
