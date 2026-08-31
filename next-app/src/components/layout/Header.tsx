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
    setIsAdminOpen,
    showToast,
  } = useQuote();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const cleanPhone = rawPhone.replace(/\D/g, '');

  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `¡Hola ${business.name}! Me gustaría cotizar un trabajo de personalización textil / bordado en Valledupar.`
      )}`
    : '#contacto';

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleBrand = (newId: 'isaias' | 'palacio') => {
    if (newId !== businessId) {
      setBusinessId(newId);
      showToast(`Cambiado a: ${newId === 'isaias' ? 'Variedades Isaías' : 'El Palacio de la Sublimación'}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C8A96E]/40 shrink-0 group-hover:scale-105 transition-transform bg-[#141419]">
              <Image
                src={business.logoUrl || '/assets/logo-isaias.png'}
                alt={`Logo ${business.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-sm tracking-wider uppercase text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                {business.name}
              </span>
              <span className="font-mono text-[10px] text-[#A0A0A5] tracking-widest uppercase">
                VALLEDUPAR · ESTUDIO TEXTIL
              </span>
            </div>
          </Link>

          {/* Minimal Multi-Brand Switcher Pill */}
          <div className="hidden xl:flex items-center bg-[#141419] border border-white/10 rounded-full p-0.5 ml-2 font-mono text-[10px] uppercase">
            <button
              onClick={() => toggleBrand('isaias')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                businessId === 'isaias'
                  ? 'bg-[#C8A96E] text-[#070708] font-bold shadow-sm'
                  : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              Isaías
            </button>
            <button
              onClick={() => toggleBrand('palacio')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                businessId === 'palacio'
                  ? 'bg-[#C8A96E] text-[#070708] font-bold shadow-sm'
                  : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              Palacio
            </button>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-[#D0CFC9]">
          <Link href="/catalogo" className="hover:text-[#C8A96E] transition-colors">
            Catálogo
          </Link>
          <Link href="/personaliza" className="hover:text-[#C8A96E] transition-colors">
            Personaliza
          </Link>
          <Link href="/servicios" className="hover:text-[#C8A96E] transition-colors">
            Servicios
          </Link>
          <Link href="/#materiales" className="hover:text-[#C8A96E] transition-colors">
            Materiales
          </Link>
          <Link href="/#galeria" className="hover:text-[#C8A96E] transition-colors">
            Proyectos
          </Link>
          <Link href="/#taller" className="hover:text-[#C8A96E] transition-colors">
            Taller
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Admin Settings Trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-[#A0A0A5] hover:text-[#C8A96E] p-2 hover:bg-white/5 rounded-xs transition-colors"
            title="Ajustes de Taller y WhatsApp"
            aria-label="Ajustes de Taller y WhatsApp"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Direct WhatsApp Action (Desktop) */}
          <a
            href={waUrl}
            target={cleanPhone ? '_blank' : undefined}
            rel={cleanPhone ? 'noopener noreferrer' : undefined}
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F4F1EA] hover:text-[#C8A96E] bg-[#141419] border border-white/15 hover:border-[#C8A96E] px-4 py-2.5 rounded-xs transition-all"
            title="Escríbenos directamente por WhatsApp"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Quote Drawer Trigger */}
          <button
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-wider bg-[#F4F1EA] hover:bg-[#C8A96E] text-[#070708] font-bold px-3.5 sm:px-5 py-2.5 rounded-xs shadow-md transition-all cursor-pointer"
            aria-label="Abrir panel de cotización"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden xs:inline sm:inline">Cotización</span>
            {totalUnits > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#070708] text-[#C8A96E] text-[10px] rounded-full font-bold">
                {totalUnits}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F4F1EA] p-2 hover:bg-white/5 rounded-xs transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
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
        <div className="lg:hidden bg-[#0e0e11] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          
          {/* Brand Switcher (Mobile) */}
          <div className="flex items-center justify-between py-2 border-b border-white/10 font-mono text-xs">
            <span className="text-[#A0A0A5]">Marca Activa:</span>
            <div className="flex items-center gap-1 bg-[#141419] p-1 border border-white/10 rounded-xs">
              <button
                onClick={() => toggleBrand('isaias')}
                className={`px-2.5 py-1 text-[11px] rounded-xs uppercase ${
                  businessId === 'isaias' ? 'bg-[#C8A96E] text-[#070708] font-bold' : 'text-[#A0A0A5]'
                }`}
              >
                Isaías
              </button>
              <button
                onClick={() => toggleBrand('palacio')}
                className={`px-2.5 py-1 text-[11px] rounded-xs uppercase ${
                  businessId === 'palacio' ? 'bg-[#C8A96E] text-[#070708] font-bold' : 'text-[#A0A0A5]'
                }`}
              >
                Palacio
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-3 font-mono text-sm uppercase tracking-widest text-[#F4F1EA]">
            <Link
              href="/catalogo"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Catálogo de Prendas
            </Link>
            <Link
              href="/personaliza"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] text-[#C8A96E] font-bold transition-colors"
            >
              Personaliza tu Pieza
            </Link>
            <Link
              href="/servicios"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Servicios & Maquila
            </Link>
            <Link
              href="/cotizar"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Solicitud de Cotización
            </Link>
            <Link
              href="/#materiales"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Inspección de Materiales (10X)
            </Link>
            <Link
              href="/#galeria"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Archivo de Proyectos
            </Link>
            <Link
              href="/#taller"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Nuestro Taller
            </Link>
            <Link
              href="/#contacto"
              onClick={closeMobileMenu}
              className="py-2 hover:text-[#C8A96E] transition-colors"
            >
              Contacto & Taller Físico
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={waUrl}
              target={cleanPhone ? '_blank' : undefined}
              rel={cleanPhone ? 'noopener noreferrer' : undefined}
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-[#070708] bg-[#25D366] font-bold py-3 rounded-xs"
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
