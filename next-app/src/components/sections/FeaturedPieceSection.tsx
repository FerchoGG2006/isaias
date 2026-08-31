'use client';

import React from 'react';
import Link from 'next/link';

export const FeaturedPieceSection: React.FC = () => {
  return (
    <section id="pieza-destacada" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Protagonist Fashion Stage (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] shadow-2xl group flex flex-col justify-between p-6 sm:p-10">
          
          {/* Radial Warm Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#3B82F6]/15 via-[#E5A910]/10 to-transparent rounded-full blur-[90px] pointer-events-none" />

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="uppercase tracking-wider text-[#E5A910] font-semibold">
              Prenda Más Solicitada
            </span>
            <span className="uppercase tracking-wider hidden sm:block font-medium">
              Valledupar · Taller Propio
            </span>
          </div>

          {/* Central Showcase Card */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-all bg-[#181D26]/80 backdrop-blur-sm shadow-lg">
              <svg className="w-10 h-10 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <span className="text-xs uppercase tracking-wider text-[#E5A910] mb-1 font-semibold">
              Piel de Durazno Spandex · 220g
            </span>
            <h4 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-bold">
              Camiseta Ajustada Spandex
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-sm mt-2 font-light">
              Tacto ultra suave, elasticidad superior y horma entallada ideal para marcas de ropa o uniformes modernos.
            </p>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10 pt-4 border-t border-[#94A3B8]/15 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="text-[#FFFFFF]">Tallas S · M · L · XL</span>
            <span className="text-[#3B82F6] font-semibold">Estampado o Bordado</span>
          </div>

        </div>

        {/* Lateral Information (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="flex flex-col gap-2.5">
            <h3 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] tracking-tight leading-[1.1]">
              Camiseta Ajustada Spandex
            </h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed font-light">
              Diseñada especialmente para quienes buscan una prenda con excelente horma, tela gruesa que no se trasluce y acabados resistentes al lavado frecuente.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 text-xs text-[#94A3B8]">
            <div className="flex flex-col gap-1 pb-3 border-b border-[#94A3B8]/15">
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">Tela & Tacto</span>
              <span className="text-sm font-semibold text-[#FFFFFF]">Piel de Durazno Spandex · 220 g/m²</span>
              <span className="text-[#94A3B8] text-xs">Suavidad aterciopelada y tela que no pierde la forma.</span>
            </div>

            <div className="flex flex-col gap-1 pb-3 border-b border-[#94A3B8]/15">
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">Formas de Personalizar</span>
              <div className="flex flex-wrap gap-2 pt-1.5">
                <span className="bg-[#181D26] px-3.5 py-1.5 border border-[#94A3B8]/20 text-[#3B82F6] rounded-full font-semibold">Estampado DTF</span>
                <span className="bg-[#181D26] px-3.5 py-1.5 border border-[#94A3B8]/20 text-[#E5A910] rounded-full font-semibold">Bordado Wilcom 3D</span>
                <span className="bg-[#181D26] px-3.5 py-1.5 border border-[#94A3B8]/20 text-[#FFFFFF] rounded-full font-semibold">Sublimación 4K</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">Cantidades</span>
              <span className="text-[#FFFFFF]">Personalizamos desde 1 sola prenda hasta lotes por docenas para empresas.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
            <Link
              href="/catalogo/ropa/camiseta-ajustada-estampada"
              className="text-xs uppercase tracking-wider bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] font-semibold px-7 py-3.5 rounded-full transition-all shadow-md shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:scale-[1.02] text-center"
            >
              Personalizar Esta Prenda →
            </Link>
            <Link
              href="/catalogo"
              className="text-xs uppercase tracking-wider bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/20 text-[#FFFFFF] font-medium px-6 py-3.5 rounded-full transition-all text-center hover:scale-[1.02]"
            >
              Ver Otras Prendas
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
