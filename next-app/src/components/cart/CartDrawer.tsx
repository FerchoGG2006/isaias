'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQty,
    removeFromCart,
    subtotal,
    whatsappPhone,
  } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let msg = '¡Hola! Quisiera realizar un pedido en Variedades Isaías:\n\n';
    let totalMoney = 0;

    cart.forEach((item, idx) => {
      const itemTotal = item.price * item.qty;
      totalMoney += itemTotal;
      msg += `${idx + 1}. *${item.title}* (${item.optionSelected}) x${item.qty} - $${itemTotal.toLocaleString('es-CO')}\n`;
    });

    msg += `\n*Total estimado:* $${totalMoney.toLocaleString('es-CO')}\n`;
    msg += '¿Me ayudan a confirmar disponibilidades y tiempo de entrega?';

    const waUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <div
        className={`overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="drawer-head">
          <h3>Tu Carrito</h3>
          <button
            className="drawer-close"
            onClick={() => setIsCartOpen(false)}
            title="Cerrar carrito"
            aria-label="Cerrar carrito"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="drawer-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              Tu carrito está vacío.
              <br />
              ¡Agrega algunos productos!
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="cart-row">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={74}
                  style={{ objectFit: 'cover' }}
                />
                <div className="cart-info">
                  <div className="nm">{item.title}</div>
                  <div className="tela-tag">{item.optionSelected}</div>
                  <div className="px">${item.price.toLocaleString('es-CO')}</div>
                  <div className="qty-row">
                    <button className="qty-btn" onClick={() => updateQty(idx, -1)}>
                      -
                    </button>
                    <span className="qty-val">{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(idx, 1)}>
                      +
                    </button>
                    <button className="remove-btn" onClick={() => removeFromCart(idx)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-foot">
          <div className="subtotal-row">
            <span>Subtotal Estimado:</span>
            <span className="val">${subtotal.toLocaleString('es-CO')} COP</span>
          </div>
          <button className="btn btn-wa" onClick={handleCheckout}>
            Enviar Pedido por WhatsApp
          </button>
          <div className="drawer-note">
            Al hacer clic se generará un mensaje automático a nuestro WhatsApp con la lista de tus productos.
          </div>
        </div>
      </div>
    </>
  );
};
