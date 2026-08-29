'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const Header: React.FC = () => {
  const { setIsQuoteDrawerOpen, totalUnits, business } = useQuote();

  const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const cleanPhone = rawPhone.replace(/\D/g, '');

  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        '¡Hola! Me gustaría cotizar un trabajo de personalización textil / bordado en Valledupar.'
      )}`
    : '#contacto';

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C8A96E]/40 shrink-0 group-hover:scale-105 transition-transform">
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

        {/* Navigation Links */}
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
        <div className="flex items-center gap-3">
          
          {/* Direct WhatsApp Action */}
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
            className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-wider bg-[#F4F1EA] hover:bg-[#C8A96E] text-[#070708] font-bold px-4 sm:px-5 py-2.5 rounded-xs shadow-md transition-all cursor-pointer"
            aria-label="Abrir panel de cotización"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Cotización</span>
            {totalUnits > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#070708] text-[#C8A96E] text-[10px] rounded-full font-bold">
                {totalUnits}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
