'use client';

import React from 'react';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const ContactSection: React.FC = () => {
  const { getWhatsAppUrl, openQuoteDrawer } = useQuote();
  const { url, isConfigured } = getWhatsAppUrl();

  return (
    <section id="contacto" className="wrap py-28 border-t border-white/10 scroll-mt-24">
      <div className="bg-[#0b0b0e] border border-white/10 rounded-sm p-8 sm:p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-5 max-w-2xl relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold">
            09 / ATENCIÓN DIRECTA · COTIZAR EN VALLEDUPAR
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight leading-tight">
            ¿Qué vamos <br className="hidden sm:block" />
            <span className="text-[#C8A96E] font-serif italic font-normal">a crear juntos?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D0CFC9] leading-relaxed font-light">
            Una pieza exclusiva. 50 dotaciones corporativas. Un rollo de DTF continuo. Estamos en Valledupar y respondemos con asesoría técnica inmediata.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-[#A0A0A5]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Taller Abierto Hoy
            </span>
            <span>·</span>
            <span>Valledupar, Cesar</span>
            <span>·</span>
            <span>Envíos Nacionales</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:w-72 shrink-0 relative z-10">
          {isConfigured ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-[#070708] bg-[#25D366] hover:bg-[#20bd5a] font-bold px-6 py-4 rounded-xs shadow-lg transition-all text-center"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Cotizar por WhatsApp</span>
            </a>
          ) : (
            <button
              onClick={openQuoteDrawer}
              className="font-mono text-xs uppercase tracking-wider text-[#070708] bg-[#C8A96E] hover:bg-[#dbbe82] font-bold px-6 py-4 rounded-xs shadow-lg transition-all text-center cursor-pointer"
            >
              Configurar Cotización Web
            </button>
          )}

          <Link
            href="/catalogo"
            className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] bg-[#141419] hover:bg-[#1a1a22] border border-white/10 hover:border-[#C8A96E]/40 px-6 py-4 rounded-xs transition-all text-center"
          >
            Explorar Catálogo Completo
          </Link>
        </div>

      </div>
    </section>
  );
};

