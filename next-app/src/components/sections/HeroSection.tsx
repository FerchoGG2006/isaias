'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';

export const HeroSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="inicio" className="relative w-full min-h-[92vh] bg-[#070708] overflow-hidden text-[#F4F1EA] flex items-center justify-center py-24 sm:py-32">
      
      {/* 1. DOMINANT EDITORIAL HERO PHOTOGRAPHY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-main.jpg"
          alt="Variedades Isaías - Atelier textil y personalización en Valledupar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Minimal Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/90 via-[#070708]/60 to-[#070708]" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
      </div>

      {/* 2. EDITORIAL HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7 max-w-4xl"
        >
          {/* Minimal Atelier Eyebrow */}
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-[#C8A96E] font-medium">
            PERSONALIZACIÓN TEXTIL · DESDE VALLEDUPAR
          </span>

          {/* Maison-Inspired Massive Editorial Headline */}
          <h1 className="font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F4F1EA] tracking-tighter leading-none">
            HAZLO TUYO.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#D0CFC9] max-w-xl leading-relaxed font-light mt-2">
            Ropa, productos y piezas personalizadas con estándar de alta costura y confección superior.
          </p>

          {/* Clean Editorial CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              href="/catalogo"
              className="font-mono text-xs uppercase tracking-[0.2em] bg-[#F4F1EA] text-[#070708] hover:bg-[#C8A96E] hover:text-[#070708] font-bold px-8 py-4 rounded-xs transition-all duration-300 shadow-xl text-center"
            >
              Explorar Catálogo →
            </Link>

            <button
              onClick={openQuoteDrawer}
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F1EA] hover:text-[#C8A96E] bg-black/40 hover:bg-black/70 border border-white/20 hover:border-[#C8A96E]/60 font-semibold px-8 py-4 rounded-xs transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
            >
              Solicitar Cotización
            </button>
          </div>

          {/* Atelier Technical Seal Footnote */}
          <div className="pt-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-[#A0A0A5]">
            <span>Piel de durazno 220g</span>
            <span className="text-[#C8A96E]">·</span>
            <span>DTF 160°C</span>
            <span className="text-[#C8A96E]">·</span>
            <span>Bordado Wilcom 3D</span>
            <span className="text-[#C8A96E]">·</span>
            <span>Sublimación 4K</span>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

