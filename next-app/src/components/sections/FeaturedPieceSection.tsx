'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const FeaturedPieceSection: React.FC = () => {
  return (
    <section id="pieza-destacada" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Protagonist Fashion Stage with Real Photo (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-[#12151C] shadow-2xl group flex flex-col justify-between p-6 sm:p-10">
          
          {/* Background Real Product Photography */}
          <Image
            src="/assets/telas/ajustadas/ajustada-1.jpg"
            alt="Camiseta Ajustada Piel de Durazno Spandex 220g"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/40 to-[#12151C]/60" />

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="uppercase tracking-wider text-[#E5A910] font-semibold bg-black/50 px-3.5 py-1 rounded-full border border-white/10">
              Prenda Más Solicitada
            </span>
            <span className="uppercase tracking-wider hidden sm:block font-medium bg-black/50 px-3.5 py-1 rounded-full border border-white/10 text-white">
              Valledupar · Taller Propio
            </span>
          </div>

          {/* Central Information over subtle dark card */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#E5A910] mb-1 font-semibold">
              Piel de Durazno Spandex · 220g
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-bold">
              Camiseta Ajustada Spandex
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-2 font-light">
              Tacto ultra suave, elasticidad superior y horma entallada ideal para marcas de ropa o uniformes modernos.
            </p>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#94A3B8] bg-black/50 px-4 py-2.5 rounded-full">
            <span className="text-[#FFFFFF] font-medium">Tallas S · M · L · XL</span>
            <span className="text-[#3B82F6] font-semibold">Estampado DTF o Bordado</span>
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
