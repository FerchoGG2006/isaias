'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  const { setIsQuoteDrawerOpen } = useQuote();

  return (
    <section id="inicio" className="relative w-full min-h-[85vh] bg-[#070708] overflow-hidden text-[#F4F1EA] flex items-center justify-center py-16">
      
      {/* 1. HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-main.jpg"
          alt="Variedades Isaías - Taller de personalización textil en Valledupar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/60 to-[#070708]/40" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* 2. CENTERED HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Main Logo Composition */}
          <div className="relative w-full max-w-xl h-48 sm:h-64 md:h-72 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform hover:scale-[1.02] duration-500">
            <Image
              src="/assets/logos-todos.png"
              alt="Logos Oficiales Palacio y Variedades Isaías"
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Subtitle Badge with Technical Facts */}
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold bg-black/80 backdrop-blur-md px-6 py-2.5 border border-[#C8A96E]/40 rounded-full shadow-2xl">
            VALLEDUPAR · ESTUDIO TEXTIL · DTF 160°C · BORDADO 3D · SUBLIMACIÓN 4K
          </span>

          <p className="font-sans text-sm sm:text-base text-[#D0CFC9] max-w-2xl leading-relaxed font-light">
            Evolucionamos la personalización de prendas hacia una experiencia de taller editorial: telas suaves en piel de durazno 220g, bordados computarizados de alta densidad y estampación de máxima duración.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="gold"
              size="lg"
              href="/catalogo"
              rightIcon={<span>→</span>}
            >
              Explorar Catálogo
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsQuoteDrawerOpen(true)}
              leftIcon={
                <svg className="w-4 h-4 text-[#C8A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            >
              Solicitar Cotización
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
