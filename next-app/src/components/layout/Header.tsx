'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

export const Header: React.FC = () => {
  const {
    setIsQuoteDrawerOpen,
    totalUnits,
    business,
  } = useQuote();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const waUrl = getWhatsAppChatUrl(
    business.whatsappPhone,
    `¡Hola ${business.name}! Me gustaría solicitar información y cotización.`
  );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between gap-6">

        {/* Left: Brand Logo Only */}
        <Link
          href="/"
          className="flex items-center group shrink-0"
          aria-label="Variedades Isaías — Ir al inicio"
          title="Variedades Isaías"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
            <Image
              src="/assets/logo-isaias-3.png"
              alt="Variedades Isaías"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center: Clean & Spaced Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs uppercase tracking-[0.14em] font-sans font-medium text-slate-700">
          <Link href="/catalogo" className="hover:text-[#0284C7] transition-colors">
            Catálogo
          </Link>
          <Link href="/servicios" className="hover:text-[#0284C7] transition-colors">
            Servicios
          </Link>
          <Link href="/tecnicas" className="hover:text-[#0284C7] transition-colors">
            Técnicas
          </Link>
          <Link href="/personaliza" className="hover:text-[#0284C7] transition-colors">
            ¿Cómo pedir?
          </Link>
          <Link href="/#taller" className="hover:text-[#0284C7] transition-colors">
            Taller
          </Link>
          <Link href="/#contacto" className="hover:text-[#0284C7] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Right: Circular Action Icons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">

          {/* Direct Phone Call Button (Desktop & Tablet) */}
          <a
            href="tel:+573105634509"
            className="hidden sm:flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-slate-50 hover:bg-[#00AFEF]/10 border border-slate-200 hover:border-[#00AFEF]/40 text-slate-700 hover:text-[#0284C7] text-xs font-sans transition-all cursor-pointer shadow-xs"
            title="Llamar a taller: (310) 563-4509"
            aria-label="Llamar directamente al taller"
          >
            <svg className="w-3.5 h-3.5 text-[#00AFEF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* WhatsApp Circular Icon Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#25D366]/10 border border-slate-200 flex items-center justify-center text-[#25D366] transition-all cursor-pointer shadow-xs"
            title="Escribir por WhatsApp"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
            </svg>
          </a>

          {/* Cart / Quote Drawer Button */}
          <button
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="relative h-10 px-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 text-slate-800 hover:text-[#0284C7] transition-all cursor-pointer shadow-xs"
            aria-label="Ver lista de cotización"
            title="Ver lista de cotización"
          >
            <svg className="w-4 h-4 shrink-0 text-[#00AFEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span suppressHydrationWarning className="hidden sm:inline font-sans text-xs tracking-normal font-bold">
              Cotización{totalUnits > 0 ? ` (${totalUnits})` : ''}
            </span>
            {totalUnits > 0 && (
              <span suppressHydrationWarning className="sm:hidden absolute -top-1 -right-1 w-5 h-5 bg-[#00AFEF] text-white text-[10px] font-bold rounded-full flex items-center justify-center font-mono shadow-xs">
                {totalUnits}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <nav className="flex flex-col gap-3 font-sans text-xs uppercase tracking-[0.16em] text-slate-800">
            <Link href="/catalogo" onClick={closeMobileMenu} className="py-2 border-b border-slate-100 hover:text-[#0284C7]">
              Catálogo de Prendas
            </Link>
            <Link href="/servicios" onClick={closeMobileMenu} className="py-2 border-b border-slate-100 hover:text-[#0284C7]">
              Servicios de Estampado & Bordado
            </Link>
            <Link href="/tecnicas" onClick={closeMobileMenu} className="py-2 border-b border-slate-100 hover:text-[#0284C7]">
              Técnicas de Producción (DTF, Wilcom)
            </Link>
            <Link href="/personaliza" onClick={closeMobileMenu} className="py-2 border-b border-slate-100 hover:text-[#0284C7]">
              ¿Cómo hacer tu pedido?
            </Link>
            <Link href="/#taller" onClick={closeMobileMenu} className="py-2 border-b border-slate-100 hover:text-[#0284C7]">
              Sobre el Taller Textil
            </Link>
            <Link href="/#contacto" onClick={closeMobileMenu} className="py-2 hover:text-[#0284C7]">
              Contacto & Cotización
            </Link>

            {/* Enlace de llamada directa en móvil */}
            <a
              href="tel:+573105634509"
              onClick={closeMobileMenu}
              className="mt-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0284C7] font-bold flex items-center justify-center gap-2 hover:bg-[#00AFEF]/10 transition-colors"
            >
              <svg className="w-4 h-4 text-[#00AFEF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Llamar a taller: (310) 563-4509</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
