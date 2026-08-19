'use client';

import React, { useState } from 'react';
import { Liquid } from 'liquid-gooey';
import { useCart } from '@/context/CartContext';

export default function FloatingGooeyMenu() {
  const [open, setOpen] = useState(false);
  const { setIsCartOpen, totalItems, whatsappPhone } = useCart();

  const waUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    '¡Hola! Me gustaría cotizar un trabajo de sublimación / DTF / bordado en Valledupar.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Liquid Gooey Area */}
      <Liquid blur={6} contrast={18} fill="#ffffff" shadow="0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.15)">
        
        {/* WhatsApp Action Button */}
        <Liquid.Item x={open ? -64 : 0} y={open ? -16 : 0} transition="bouncy">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 height w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600 transition-colors"
            title="Escríbenos por WhatsApp"
            aria-label="Escríbenos por WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
            </svg>
          </a>
        </Liquid.Item>

        {/* View Cart Action Button */}
        <Liquid.Item x={open ? -16 : 0} y={open ? -64 : 0} transition="bouncy" delay={40}>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-violet-600 text-white shadow-md hover:bg-violet-700 transition-colors"
            title="Ver Carrito"
            aria-label="Ver Carrito"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1.4" />
              <circle cx="18" cy="21" r="1.4" />
              <path d="M2.5 3h2l2.6 12.3a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </Liquid.Item>

        {/* Main Trigger Button */}
        <Liquid.Item>
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 ${
              open ? 'rotate-45' : ''
            }`}
            aria-label="Acciones rápidas"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </Liquid.Item>

      </Liquid>
    </div>
  );
}
