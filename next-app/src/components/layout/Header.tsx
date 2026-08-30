'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const Header: React.FC = () => {
  const { setIsQuoteDrawerOpen, totalUnits, business, setIsAdminOpen } = useQuote();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const cleanPhone = rawPhone.replace(/\D/g, '');

  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        '¡Hola! Me gustaría cotizar un trabajo de personalización textil / bordado en Valledupar.'
      )}`
    : '#contacto';

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
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

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#D0CFC9]">
          <Link href="/catalogo" className="hover:text-[#C8A96E] transition-colors">
            Catálogo
          </Link>
          <Link href="/servicios" className="hover:text-[#C8A96E] transition-colors">
            Servicios
          </Link>
          <Link href="/#materiales" className="hover:text-[#C8A96E] transition-colors">
            Materiales
          </Link>
          <Link href="/#nosotros" className="hover:text-[#C8A96E] transition-colors">
            Taller
          </Link>
          <Link href="/#contacto" className="hover:text-[#C8A96E] transition-colors">
            Contacto
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
            className="md:hidden text-[#F4F1EA] p-2 hover:bg-white/5 rounded-xs transition-colors"
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
        <div className="md:hidden bg-[#0e0e11] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 font-mono text-sm uppercase tracking-widest text-[#F4F1EA]">
            <Link
              href="/catalogo"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Catálogo de Prendas
            </Link>
            <Link
              href="/servicios"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Servicios de Estampación & Bordado
            </Link>
            <Link
              href="/#materiales"
              onClick={closeMobileMenu}
              className="py-2 border-b border-white/5 hover:text-[#C8A96E] transition-colors"
            >
              Inspección de Materiales
            </Link>
            <Link
              href="/#nosotros"
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
              Contacto & Ubicación
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={waUrl}
              target={cleanPhone ? '_blank' : undefined}
              rel={cleanPhone ? 'noopener noreferrer' : undefined}
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F4F1EA] bg-[#141419] border border-white/15 py-3 rounded-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
