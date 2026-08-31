'use client';

import React from 'react';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="taller" className="wrap py-28 sm:py-36 border-t border-[#94A3B8]/15 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Workshop Atelier Showcase (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
          <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="text-[#E5A910] font-semibold uppercase">
              Taller Propio
            </span>
            <span>Valledupar · Cesar</span>
          </div>

          {/* Center Atelier Icon & Story */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-8">
            <div className="w-20 h-20 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-4 bg-[#181D26]/80 backdrop-blur-sm group-hover:scale-105 transition-all shadow-md">
              <svg className="w-9 h-9 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
              CONFECCIÓN & ESTAMPACIÓN TEXTIL
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-bold mt-1">
              Atelier Variedades Isaías
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-md mt-2 font-light">
              Taller físico en Valledupar con maquinaria propia para confeccionar, bordar y estampar tus pedidos con la mejor calidad.
            </p>
          </div>

          {/* Bottom Info Bar */}
          <div className="relative z-10 text-xs text-[#FFFFFF] bg-[#12151C]/90 backdrop-blur-md p-4 border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[#E5A910] font-bold uppercase tracking-wider text-xs">PRODUCCIÓN DIRECTA</span>
            <span className="text-[#94A3B8] text-xs">PRECIOS DE TALLER SIN INTERMEDIARIOS</span>
          </div>
        </div>

        {/* Minimal Editorial Manifesto (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <h2 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-[#FFFFFF] tracking-tight leading-none">
              Hecho en <br />
              <span className="text-[#3B82F6] italic font-normal">Valledupar.</span>
            </h2>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#FFFFFF] leading-relaxed">
            &ldquo;Una idea. Una máquina. Una prenda confeccionada sin intermediarios.&rdquo;
          </p>

          <p className="font-sans text-sm text-[#94A3B8] leading-relaxed font-light">
            En nuestro taller textil unificamos bordado computarizado 3D y estampado DTF con acabados limpios y resistentes. Desde una sola prenda personalizada hasta dotaciones completas para empresas y eventos.
          </p>

          {/* 3 Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#94A3B8]/15 text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-[#3B82F6] font-bold text-base">100%</span>
              <span className="text-[#94A3B8] text-xs">Taller Valledupar</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#E5A910] font-bold text-base">Alta Definición</span>
              <span className="text-[#94A3B8] text-xs">Colores Vivos</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#38BDF8] font-bold text-base">1 a 500+</span>
              <span className="text-[#94A3B8] text-xs">Prendas por Lote</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#3B82F6] hover:text-[#FFFFFF] font-semibold transition-colors"
            >
              <span>Visitar nuestro taller en Valledupar</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};


