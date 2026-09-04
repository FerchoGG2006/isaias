'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';
import { LogoIsaias } from '@/components/ui/LogoIsaias';
import { LogoPalacio } from '@/components/ui/LogoPalacio';

export const HeroSection: React.FC = () => {
  const { businessId, getWhatsAppUrl } = useQuote();
  const { url: waUrl } = getWhatsAppUrl();

  const isIsaias = businessId === 'isaias';

  return (
    <section id="inicio" className="relative w-full min-h-[75vh] bg-[#0C0D10] overflow-hidden text-[#F4F1EA] flex items-center justify-center py-10 sm:py-14">
      
      {/* 1. WORKSHOP BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/hero-main.jpg"
          alt="Taller de confección y personalización en Valledupar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 brightness-90 contrast-[1.05]"
        />

        {/* Capa de difuminado sutil para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-[#0C0D10]/70 via-transparent to-[#0C0D10]/30" />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#C8A96E]/10 via-transparent to-transparent rounded-full blur-[140px]" />
      </div>

      {/* 2. SINGLE STANDALONE LOGO PER TENANT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        
        {/* Standalone Logo Display (1 Logo per Tenant View) */}
        <motion.div
          key={businessId}
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center justify-center"
        >
          {isIsaias ? (
            /* TENANT 1: VARIEDADES ISAÍAS STANDALONE LOGO */
            <LogoIsaias size="lg" />
          ) : (
            /* TENANT 2: EL PALACIO DE LA SUBLIMACIÓN STANDALONE LOGO */
            <LogoPalacio size="lg" />
          )}
        </motion.div>

        {/* Sub-hero Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-medium bg-black/70 backdrop-blur-md border border-[#C8A96E]/50 px-6 sm:px-8 py-2.5 rounded-full shadow-2xl">
            <span>VALLEDUPAR</span>
            <span className="text-white/40">·</span>
            <span>{isIsaias ? 'ESTUDIO DE PERSONALIZACIÓN TEXTIL & BORDADOS' : 'ESPECIALISTAS EN SUBLIMACIÓN 4K & MERCHANDISING'}</span>
          </div>
        </motion.div>

        {/* Action Buttons (Horizontal Layout on Same Line with Generous Spacing) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full font-mono text-xs uppercase tracking-[0.2em]"
        >
          {/* Button 1: Gold Filled WhatsApp CTA */}
          <a
            href={waUrl && waUrl !== '#' ? waUrl : '#contacto'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-bold px-9 py-4.5 rounded-xs transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 text-center shrink-0 hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
            </svg>
            <span>COTIZAR POR WHATSAPP</span>
          </a>

          {/* Button 2: Outline Catalog CTA */}
          <Link
            href="/catalogo"
            className="w-full sm:w-auto bg-black/60 hover:bg-black/80 border border-white/30 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] font-semibold px-9 py-4.5 rounded-xs transition-all duration-300 shadow-2xl text-center shrink-0 hover:scale-105"
          >
            VER CATÁLOGO
          </Link>
        </motion.div>

      </div>

    </section>
  );
};
