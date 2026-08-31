'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';

export const HeroSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="inicio" className="relative w-full min-h-[85vh] bg-[#12151C] overflow-hidden text-[#FFFFFF] flex items-center justify-center py-24 sm:py-32">
      
      {/* 1. LUXURY AMBIENT LIGHTING (CLEAN & MINIMALIST) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft atmospheric radial gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#3B82F6]/15 via-[#E5A910]/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[140px]" />
      </div>

      {/* 2. EDITORIAL HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        {/* Subtitle / Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold bg-[#181D26]/90 border border-white/10 px-5 py-2 rounded-full shadow-sm">
            Confección & Personalización Textil · Valledupar
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h1 className="font-serif font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FFFFFF] tracking-tight leading-[0.95]">
            HAZLO <span className="italic font-normal text-[#E5A910]">TUYO.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed font-light mt-6">
            Prendas de alta calidad, estampados duraderos y bordados personalizados hechos a tu medida para marcas, empresas y eventos.
          </p>

          {/* Action Buttons (Apple Style Pills) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link
              href="/catalogo"
              className="text-xs uppercase tracking-wider bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-[1.02] text-center flex items-center gap-2"
            >
              <span>Ver Catálogo de Prendas</span>
              <span className="text-sm">→</span>
            </Link>

            <button
              onClick={openQuoteDrawer}
              className="text-xs uppercase tracking-wider text-[#FFFFFF] hover:text-[#E5A910] bg-[#181D26] hover:bg-[#202734] border border-white/15 hover:border-[#E5A910]/50 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center shadow-md"
            >
              Cotizar por WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Benefits Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#94A3B8] bg-[#181D26]/80 backdrop-blur-md px-8 py-3.5 rounded-full border border-white/10 shadow-sm"
        >
          <span className="flex items-center gap-2 text-[#FFFFFF]">
            <span className="text-[#3B82F6] font-bold">✓</span>
            Telas suaves que no se deforman
          </span>
          <span className="flex items-center gap-2 text-[#FFFFFF]">
            <span className="text-[#E5A910] font-bold">✓</span>
            Estampados y bordados duraderos
          </span>
          <span className="flex items-center gap-2 text-[#FFFFFF]">
            <span className="text-[#3B82F6] font-bold">✓</span>
            Taller propio en Valledupar
          </span>
        </motion.div>

      </div>

    </section>
  );
};
