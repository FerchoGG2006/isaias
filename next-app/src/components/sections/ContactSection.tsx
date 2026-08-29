'use client';

import React from 'react';
import { useQuote } from '@/context/QuoteContext';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
  const { getWhatsAppUrl, setIsQuoteDrawerOpen } = useQuote();
  const { url, isConfigured } = getWhatsAppUrl();

  return (
    <section id="contacto" className="wrap py-16 sm:py-20">
      <div className="bg-[#141419] border border-white/10 rounded-sm p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A96E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
            ATENCIÓN DIRECTA EN VALLEDUPAR
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-4xl text-[#F4F1EA] tracking-tight">
            ¿Tienes un proyecto especial o dotación en mente?
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A5] leading-relaxed">
            Hablemos de tus prendas, cantidades y técnicas requeridas. Te asesoramos técnicamente y enviamos cotización formal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          {isConfigured ? (
            <Button
              variant="wa"
              size="lg"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              leftIcon={
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                </svg>
              }
            >
              Iniciar Chat de Cotización
            </Button>
          ) : (
            <Button
              variant="gold"
              size="lg"
              onClick={() => setIsQuoteDrawerOpen(true)}
              className="w-full sm:w-auto"
            >
              Configurar Cotización Web
            </Button>
          )}

          <Button
            variant="outline"
            size="lg"
            href="/servicios"
            className="w-full sm:w-auto"
          >
            Ver Servicios
          </Button>
        </div>

      </div>
    </section>
  );
};
