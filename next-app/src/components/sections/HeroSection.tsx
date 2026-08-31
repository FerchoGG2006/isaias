'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';

export const HeroSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="inicio" className="relative w-full min-h-[92vh] bg-[#12151C] overflow-hidden text-[#FFFFFF] flex items-center justify-center py-20 sm:py-28">
      
      {/* 1. SOFT ELEGANT LIGHTING */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#3B82F6]/15 via-[#E5A910]/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12151C]/60 via-transparent to-[#12151C]" />
      </div>

      {/* 2. EDITORIAL HERO CONTENT */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        {/* Subtitle / Location */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium mb-4"
        >
          Confección & Personalización Textil · Valledupar
        </motion.p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h1 className="font-serif font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FFFFFF] tracking-tight leading-[0.95]">
            HAZLO <span className="italic font-normal text-[#E5A910]">TUYO.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed font-light mt-5">
            Prendas de alta calidad, estampados duraderos y bordados personalizados hechos a tu medida para marcas, empresas y eventos.
          </p>

          {/* Action Buttons */}
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-7">
            <Link
              href="/catalogo"
              className="text-xs uppercase tracking-wider bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:scale-[1.02] text-center flex items-center gap-2"
            >
              <span>Ver Catálogo de Prendas</span>
              <span className="text-sm">→</span>
            </Link>

            <button
              onClick={openQuoteDrawer}
              className="text-xs uppercase tracking-wider text-[#FFFFFF] hover:text-[#E5A910] bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/25 hover:border-[#E5A910]/50 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center"
            >
              Cotizar por WhatsApp
            </button>
          </div>
        </motion.div>

        {/* 3. ELEGANT SHOWCASE STAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-full max-w-2xl"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#181D26]/90 via-[#12151C]/90 to-[#0E1016]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
            
            <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] rounded-2xl border border-white/5 bg-radial from-[#1C2330] to-[#12151C] flex flex-col items-center justify-center p-6 text-center">
              
              <div className="w-12 h-12 rounded-full bg-[#181D26] border border-[#94A3B8]/25 flex items-center justify-center mb-3 text-[#3B82F6]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-bold">
                Tu Diseño en Prendas de Alta Calidad
              </h4>

              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-md mt-1 font-light">
                Camisetas ajustadas, polos con cuello tejido, dotaciones empresariales y accesorios personalizados.
              </p>

              <div className="mt-3 flex items-center gap-3 text-xs text-[#E5A910] font-medium">
                <span>★ Desde 1 unidad hasta pedidos por mayor</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Benefits Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#94A3B8]">
          <span className="flex items-center gap-2 text-[#FFFFFF]">
            <span className="text-[#3B82F6]">✓</span>
            Telas suaves que no se deforman
          </span>
          <span className="flex items-center gap-2 text-[#FFFFFF]">
            <span className="text-[#E5A910]">✓</span>
            Estampados y bordados duraderos
          </span>
          <span className="flex items-center gap-2 text-[#FFFFFF]">
            <span className="text-[#3B82F6]">✓</span>
            Taller propio en Valledupar
          </span>
        </div>

      </div>

    </section>
  );
};

