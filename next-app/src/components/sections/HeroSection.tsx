'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';
import { LogoIsaias } from '@/components/ui/LogoIsaias';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

import { trackWhatsAppClick } from '@/lib/analytics';

export const HeroSection: React.FC = () => {
  const { business, getWhatsAppUrl } = useQuote();
  const { url: waUrl } = getWhatsAppUrl();

  const finalWaUrl = waUrl && waUrl !== '#' && waUrl !== '#contacto'
    ? waUrl
    : getWhatsAppChatUrl(business.whatsappPhone, '¡Hola Variedades Isaías! Me gustaría cotizar prendas personalizadas.');

  const handleWaClick = () => {
    trackWhatsAppClick('hero_cta');
  };

  return (
    <section id="inicio" className="relative w-full min-h-[calc(100svh-68px)] bg-white overflow-hidden text-slate-900 flex items-center justify-center py-10 sm:py-16 border-b border-slate-200">
      
      {/* 1. EDITORIAL BACKGROUND PHOTO CON VELO BLANCO LUMINOSO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/hero-main.jpg"
          alt="Taller de confección textil, corte de telas y bordado computarizado en Valledupar - Variedades Isaías"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%] sm:object-[center_20%] opacity-20 filter grayscale contrast-125"
        />

        {/* Velo blanco puro luminoso que elimina el fondo negro difuminado */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white" />

        {/* Resplandor sutil cian acorde a la identidad del logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] bg-[#00AFEF]/10 pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 my-auto">
        
        {/* Emblem / Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6 flex flex-col items-center justify-center"
        >
          <LogoIsaias size="lg" />
        </motion.div>

        {/* Accessible H1 */}
        <h1 className="sr-only">
          Variedades Isaías — Confección textil, bordados computarizados y estampados DTF en Valledupar
        </h1>

        {/* Supporting Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-sm sm:text-base md:text-lg text-slate-700 font-normal max-w-2xl mb-8 sm:mb-10 leading-relaxed tracking-normal"
        >
          Confección propia sin intermediarios, telas frescas de alta resistencia y acabados industriales en bordado computarizado Wilcom y estampado DTF elástico.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none font-sans text-xs font-bold uppercase tracking-[0.14em]"
        >
          {/* Button 1: WhatsApp Direct CTA */}
          <a
            href={finalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaClick}
            className="w-full sm:w-auto font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#00AFEF]/25 hover:shadow-xl hover:shadow-[#00AFEF]/35 flex items-center justify-center gap-2.5 text-center shrink-0 bg-[#00AFEF] hover:bg-[#0284C7] text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
            </svg>
            <span>Cotizar por WhatsApp</span>
          </a>

          {/* Button 2: Outline Catalog CTA */}
          <Link
            href="/catalogo"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#00AFEF] text-slate-800 hover:text-[#00AFEF] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-center shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver Catálogo de Colección
          </Link>
        </motion.div>
      </div>

    </section>
  );
};
