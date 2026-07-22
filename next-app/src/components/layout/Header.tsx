'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export const Header: React.FC = () => {
  const { setIsCartOpen, totalItems, whatsappPhone } = useCart();

  const waUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    '¡Hola! Me gustaría cotizar un trabajo de sublimación / DTF / bordado en Valledupar.'
  )}`;

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <Image src="/assets/logo-isaias.png" alt="Logo Variedades Isaías" width={48} height={48} />
          </span>
          <span className="brand-name">
            Variedades <span>Isaías</span>
          </span>
        </a>

        <nav className="links">
          <a href="#tecnicas">Técnicas</a>
          <a href="#galeria">Galería</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="nav-actions">
          <a
            className="icon-btn"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Escríbenos por WhatsApp"
            aria-label="Escríbenos por WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
            </svg>
          </a>
          <button
            className="icon-btn"
            onClick={() => setIsCartOpen(true)}
            title="Ver carrito"
            aria-label="Ver carrito"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1.4" />
              <circle cx="18" cy="21" r="1.4" />
              <path d="M2.5 3h2l2.6 12.3a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};
