'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const Header: React.FC = () => {
  const {
    setIsQuoteDrawerOpen,
    totalUnits,
    business,
    businessId,
    setBusinessId,
  } = useQuote();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '573105634509';
  const cleanPhone = rawPhone.replace(/\D/g, '') || '573105634509';

  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `¡Hola ${business.name}! Me gustaría solicitar información y cotización.`
  )}`;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleTenant = () => {
    setBusinessId(businessId === 'isaias' ? 'palacio' : 'isaias');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0C0D10]/90 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0 group-hover:scale-105 transition-transform bg-[#141419] shadow-md flex items-center justify-center p-0.5">
            <Image
              src={business.logoUrl || '/assets/logo-isaias.png'}
              alt={business.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-sm sm:text-base text-[#F4F1EA] tracking-wider uppercase leading-none group-hover:text-[#C8A96E] transition-colors">
              {business.name}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#C8A96E] mt-0.5 font-medium">
              Valledupar, Cesar
            </span>
          </div>
        </Link>

        {/* Center: Clean & Spaced Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#D0CFC9]">
          <Link href="/catalogo" className="hover:text-[#C8A96E] transition-colors">
            Catálogo
          </Link>
          <Link href="/servicios" className="hover:text-[#C8A96E] transition-colors">
            Servicios
          </Link>
          <Link href="/#galeria" className="hover:text-[#C8A96E] transition-colors">
            Galería
          </Link>
          <Link href="/#taller" className="hover:text-[#C8A96E] transition-colors">
            Nosotros
          </Link>
          <Link href="/#contacto" className="hover:text-[#C8A96E] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Right: Tenant Switcher & Circular Action Icons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Dual-Tenant Switcher Pill */}
          <div className="hidden xl:flex items-center bg-[#141419] border border-white/15 rounded-full p-1 font-mono text-[10px] tracking-wider uppercase">
            <button
              type="button"
              onClick={() => setBusinessId('isaias')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                businessId === 'isaias'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold shadow-md'
                  : 'text-[#8A8A92] hover:text-[#F4F1EA]'
              }`}
            >
              Isaías
            </button>
            <button
              type="button"
              onClick={() => setBusinessId('palacio')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                businessId === 'palacio'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold shadow-md'
                  : 'text-[#8A8A92] hover:text-[#F4F1EA]'
              }`}
            >
              El Palacio
            </button>
          </div>

          {/* WhatsApp Circular Icon Button */}
          <a
            href={waUrl}
            target={cleanPhone ? '_blank' : undefined}
            rel={cleanPhone ? 'noopener noreferrer' : undefined}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-[#F4F1EA] hover:text-[#C8A96E] transition-all cursor-pointer shadow-md"
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
            className="relative h-10 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1.5 text-[#F4F1EA] hover:text-[#C8A96E] transition-all cursor-pointer shadow-md"
            aria-label="Ver lista de cotización"
            title="Ver lista de cotización"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="hidden sm:inline font-sans text-xs tracking-normal font-medium">
              Cotización{totalUnits > 0 ? ` (${totalUnits})` : ''}
            </span>
            {totalUnits > 0 && (
              <span className="sm:hidden absolute -top-1 -right-1 w-5 h-5 bg-[#C8A96E] text-[#0C0D10] text-[10px] font-bold rounded-full flex items-center justify-center font-mono shadow-sm">
                {totalUnits}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F4F1EA] p-2 hover:bg-white/10 rounded-full transition-colors"
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
        <div className="lg:hidden bg-[#141419]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-[#8A8A92]">
            <span>TALLER / LÍNEA:</span>
            <button
              onClick={toggleTenant}
              className="text-[#C8A96E] font-bold uppercase tracking-wider underline cursor-pointer"
            >
              {business.name} (Cambiar ↺)
            </button>
          </div>

          <nav className="flex flex-col gap-3 font-sans text-xs uppercase tracking-[0.16em] text-[#F4F1EA]">
            <Link href="/catalogo" onClick={closeMobileMenu} className="py-2 border-b border-white/5 hover:text-[#C8A96E]">
              Catálogo
            </Link>
            <Link href="/servicios" onClick={closeMobileMenu} className="py-2 border-b border-white/5 hover:text-[#C8A96E]">
              Servicios
            </Link>
            <Link href="/#galeria" onClick={closeMobileMenu} className="py-2 border-b border-white/5 hover:text-[#C8A96E]">
              Galería
            </Link>
            <Link href="/#taller" onClick={closeMobileMenu} className="py-2 border-b border-white/5 hover:text-[#C8A96E]">
              Nosotros
            </Link>
            <Link href="/#contacto" onClick={closeMobileMenu} className="py-2 hover:text-[#C8A96E]">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
