'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';
import { LogoIsaias } from '@/components/ui/LogoIsaias';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

export const HeroSection: React.FC = () => {
  const { business, getWhatsAppUrl } = useQuote();
  const { url: waUrl } = getWhatsAppUrl();

  const finalWaUrl = waUrl && waUrl !== '#' && waUrl !== '#contacto'
    ? waUrl
    : getWhatsAppChatUrl(business.whatsappPhone, '¡Hola Variedades Isaías! Me gustaría cotizar prendas personalizadas.');

  return (
    <section id="inicio" className="relative w-full min-h-[75vh] bg-[#0C0D10] overflow-hidden text-[#F4F1EA] flex items-center justify-center py-12 sm:py-16">
      
      {/* 1. EDITORIAL BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/hero-main.jpg"
          alt="Taller de confección y personalización textil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 brightness-90 contrast-[1.05]"
        />

        {/* Gradient Mask for High Editorial Readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/40 to-[#0C0D10]/60" />

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[140px] bg-gradient-to-b from-[#C8A96E]/12 pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        
        {/* Emblem / Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center justify-center"
        >
          <LogoIsaias size="lg" />
        </motion.div>

        {/* Accessible H1 */}
        <h1 className="sr-only">
          Variedades Isaías — Taller de confección y personalización textil
        </h1>

        {/* Supporting Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-sm sm:text-base text-[#D0CFC9] font-light max-w-xl mb-10 leading-relaxed tracking-wide"
        >
          Confección directa, telas seleccionadas de alta resistencia y acabados profesionales en bordado computarizado y estampado DTF.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full font-sans text-xs font-semibold uppercase tracking-[0.16em]"
        >
          {/* Button 1: WhatsApp Direct CTA */}
          <a
            href={finalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-bold px-9 py-4 rounded-xs transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 text-center shrink-0 bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] shadow-[#C8A96E]/20 hover:scale-[1.02]"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
            </svg>
            <span>Cotizar por WhatsApp</span>
          </a>

          {/* Button 2: Outline Catalog CTA */}
          <Link
            href="/catalogo"
            className="w-full sm:w-auto bg-[#141419]/90 hover:bg-[#1C1C24] border border-white/20 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] font-semibold px-9 py-4 rounded-xs transition-all duration-300 shadow-xl text-center shrink-0 hover:scale-[1.02]"
          >
            Ver Catálogo
          </Link>
        </motion.div>

      </div>

    </section>
  );
};
