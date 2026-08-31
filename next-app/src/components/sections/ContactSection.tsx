'use client';

import React from 'react';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const ContactSection: React.FC = () => {
  const { getWhatsAppUrl, openQuoteDrawer } = useQuote();
  const { url, isConfigured } = getWhatsAppUrl();

  return (
    <section id="contacto" className="wrap py-28 sm:py-36 border-t border-[#94A3B8]/15 scroll-mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Headline */}
        <h2 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-[#FFFFFF] tracking-tight leading-none">
          ¿Qué vamos <br />
          <span className="text-[#3B82F6] italic font-normal">a crear juntos?</span>
        </h2>

        {/* Supporting Quote */}
        <p className="font-sans text-base sm:text-xl text-[#94A3B8] max-w-xl leading-relaxed font-light">
          Cuéntanos tu idea o envíanos tu diseño. Nosotros te asesoramos con la mejor tela y técnica para tu presupuesto.
        </p>

        {/* Clean CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full max-w-lg">
          {isConfigured ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-[#FFFFFF] font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Solicitar Cotización por WhatsApp</span>
            </a>
          ) : (
            <button
              onClick={openQuoteDrawer}
              className="w-full sm:w-auto text-xs uppercase tracking-wider bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] font-semibold px-8 py-4 rounded-full shadow-md hover:scale-[1.02] transition-all text-center cursor-pointer"
            >
              Solicitar Cotización Directa
            </button>
          )}

          <Link
            href="/catalogo"
            className="w-full sm:w-auto text-xs uppercase tracking-wider text-[#FFFFFF] hover:text-[#3B82F6] bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/20 px-8 py-4 rounded-full transition-all text-center font-medium hover:scale-[1.02]"
          >
            Explorar Catálogo
          </Link>
        </div>

        {/* Footnote */}
        <div className="pt-6 border-t border-[#94A3B8]/15 w-full flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
          <span>Taller en Valledupar, Cesar</span>
          <span className="text-[#3B82F6]">·</span>
          <span>Envíos con Guía Asegurada</span>
          <span className="text-[#E5A910]">·</span>
          <span>Atención de Lunes a Sábado</span>
        </div>

      </div>
    </section>
  );
};


