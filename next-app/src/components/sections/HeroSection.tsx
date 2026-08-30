'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  const { setIsQuoteDrawerOpen } = useQuote();

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] bg-[#070708] overflow-hidden text-[#F4F1EA] flex items-center justify-center py-20">
      
      {/* 1. HERO BACKGROUND IMAGE WITH CINEMATIC DEPTH */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-main.jpg"
          alt="Variedades Isaías - Taller de confección y personalización textil en Valledupar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/90 via-[#070708]/70 to-[#070708]" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]" />
      </div>

      {/* 2. EDITORIAL HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Studio Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#C8A96E] bg-[#141416]/90 border border-[#C8A96E]/30 px-4 py-1.5 rounded-full shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
            <span>ESTUDIO TEXTIL & CONFECCIÓN · VALLEDUPAR</span>
          </div>

          {/* Main Editorial Headline (H1) */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F4F1EA] tracking-tight leading-[1.08] max-w-3xl">
            Personalización Textil con Estándar de <span className="text-[#C8A96E] font-serif italic font-normal">Alta Costura</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#D0CFC9] max-w-2xl leading-relaxed font-light">
            Confección especializada en <strong className="text-[#F4F1EA] font-semibold">piel de durazno spandex 220g</strong>, estampación <strong className="text-[#F4F1EA] font-semibold">DTF reflectivo a 160 °C</strong>, bordado computarizado <strong className="text-[#F4F1EA] font-semibold">Wilcom 3D</strong> y sublimación fotográfica 4K.
          </p>

          {/* Dual Brand Atelier Signature */}
          <div className="flex items-center justify-center gap-4 py-1 px-4 bg-black/40 border border-white/10 rounded-sm">
            <div className="relative h-9 w-44 sm:w-56 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/logos-todos.png"
                alt="Variedades Isaías y Palacio de las Gorras"
                fill
                priority
                unoptimized
                className="object-contain"
              />
            </div>
            <span className="text-white/20 text-xs font-mono">|</span>
            <span className="font-mono text-[10px] sm:text-xs text-[#A0A0A5] uppercase tracking-wider">
              Taller & Maquila Unificada
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gold"
              size="lg"
              href="/catalogo"
              rightIcon={<span>→</span>}
            >
              Explorar Muestrario Textil
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
              Solicitar Cotización por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
