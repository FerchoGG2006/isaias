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
    setIsAdminOpen,
  } = useQuote();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const cleanPhone = rawPhone.replace(/\D/g, '');

  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `¡Hola Variedades Isaías! Me gustaría cotizar un trabajo de personalización textil / bordado.`
      )}`
    : '#contacto';

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#12151C]/80 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#3B82F6]/40 shrink-0 group-hover:scale-105 transition-transform bg-[#181D26] shadow-sm">
            <Image
              src={business.logoUrl || '/assets/logo-isaias.png'}
              alt="Logo Variedades Isaías"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-semibold text-base sm:text-lg text-[#FFFFFF] tracking-tight group-hover:text-[#3B82F6] transition-colors">
            Variedades Isaías
          </span>
        </Link>

        {/* Simplified Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          <Link href="/catalogo" className="hover:text-[#FFFFFF] transition-colors">
            Catálogo
          </Link>
          <Link href="/personaliza" className="hover:text-[#FFFFFF] transition-colors">
            Personaliza
          </Link>
          <Link href="/servicios" className="hover:text-[#FFFFFF] transition-colors">
            Servicios
          </Link>
          <Link href="/#taller" className="hover:text-[#FFFFFF] transition-colors">
            Nosotros
          </Link>
          <Link href="/#contacto" className="hover:text-[#FFFFFF] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Action Buttons (Apple Style Rounded-Full) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Direct WhatsApp Action */}
          <a
            href={waUrl}
            target={cleanPhone ? '_blank' : undefined}
            rel={cleanPhone ? 'noopener noreferrer' : undefined}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#FFFFFF] hover:text-[#00D2FF] bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/20 hover:border-[#00D2FF]/50 px-4 py-2.5 rounded-full transition-all shadow-sm"
            title="Escríbenos directamente por WhatsApp"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            <span>WhatsApp</span>
          </a>

          {/* Quote Drawer Trigger */}
          <button
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="relative flex items-center gap-2 text-xs font-semibold bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] px-5 py-2.5 rounded-full shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 transition-all cursor-pointer"
            aria-label="Abrir panel de cotización"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Cotización</span>
            {totalUnits > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#E5A910] text-[#12151C] text-[10px] rounded-full font-bold">
                {totalUnits}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#FFFFFF] p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
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
        <div className="md:hidden bg-[#181D26]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[#FFFFFF]">
            <Link
              href="/catalogo"
              onClick={closeMobileMenu}
              className="py-2.5 border-b border-white/5 hover:text-[#3B82F6] transition-colors"
            >
              Catálogo de Prendas
            </Link>
            <Link
              href="/personaliza"
              onClick={closeMobileMenu}
              className="py-2.5 border-b border-white/5 text-[#3B82F6] font-semibold hover:text-[#3B82F6] transition-colors"
            >
              Personaliza tu Prenda
            </Link>
            <Link
              href="/servicios"
              onClick={closeMobileMenu}
              className="py-2.5 border-b border-white/5 hover:text-[#3B82F6] transition-colors"
            >
              Servicios & Maquila
            </Link>
            <Link
              href="/cotizar"
              onClick={closeMobileMenu}
              className="py-2.5 border-b border-white/5 hover:text-[#3B82F6] transition-colors"
            >
              Solicitud de Cotización
            </Link>
            <Link
              href="/#taller"
              onClick={closeMobileMenu}
              className="py-2.5 border-b border-white/5 hover:text-[#3B82F6] transition-colors"
            >
              Nuestro Taller
            </Link>
            <Link
              href="/#contacto"
              onClick={closeMobileMenu}
              className="py-2.5 hover:text-[#3B82F6] transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={waUrl}
              target={cleanPhone ? '_blank' : undefined}
              rel={cleanPhone ? 'noopener noreferrer' : undefined}
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] font-bold py-3 rounded-full transition-all shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
