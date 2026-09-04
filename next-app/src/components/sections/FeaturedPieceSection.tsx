'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const FeaturedPieceSection: React.FC = () => {
  return (
    <section id="pieza-destacada" className="wrap py-24 sm:py-32 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Protagonist Fashion Stage with Real Photo (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[3/4] rounded-xs overflow-hidden border border-white/10 bg-[#141419] shadow-2xl group flex flex-col justify-between p-6 sm:p-10">
          
          {/* Background Real Product Photography */}
          <Image
            src="/assets/telas/ajustadas/ajustada-1.jpg"
            alt="Camiseta Ajustada Piel de Durazno Spandex 220g"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/40 to-[#0C0D10]/60" />

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
            <span className="uppercase tracking-widest text-[#C8A96E] font-medium bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
              PIEZA MÁS SOLICITADA
            </span>
            <span className="uppercase tracking-widest hidden sm:block font-light bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 text-[#F4F1EA]">
              Valledupar Atelier
            </span>
          </div>

          {/* Central Information over subtle dark card */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6 bg-black/60 backdrop-blur-md p-6 rounded-xs border border-white/10 max-w-md mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] mb-1 font-medium">
              PIEL DE DURAZNO SPANDEX · 220G
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-normal">
              Camiseta Ajustada Spandex
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] mt-2 font-light">
              Tacto ultra suave, elasticidad superior y horma entallada ideal para marcas de ropa o uniformes modernos.
            </p>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#8A8A92] bg-black/70 px-4 py-2.5 rounded-xs font-mono">
            <span className="text-[#F4F1EA] font-light">Tallas S · M · L · XL</span>
            <span className="text-[#C8A96E] font-semibold">Estampado DTF o Bordado</span>
          </div>

        </div>

        {/* Lateral Information (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
              SILUETA EMBLEMÁTICA
            </span>
            <h3 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.1]">
              Camiseta Ajustada Spandex
            </h3>
            <p className="font-sans text-sm text-[#8A8A92] leading-relaxed font-light">
              Diseñada especialmente para quienes buscan una prenda con excelente horma, tela gruesa que no se trasluce y acabados resistentes al lavado frecuente.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-xs text-[#8A8A92] font-sans">
            <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] font-semibold">Tela & Tacto</span>
              <span className="text-sm font-medium text-[#F4F1EA]">Piel de Durazno Spandex · 220 g/m²</span>
              <span className="text-[#8A8A92] text-xs font-light">Suavidad aterciopelada y tela que no pierde la forma.</span>
            </div>

            <div className="flex flex-col gap-2 pb-3 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] font-semibold">Formas de Personalizar</span>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
                <span className="bg-[#141419] px-3 py-1 border border-white/10 text-[#F4F1EA] rounded-xs font-medium">Estampado DTF</span>
                <span className="bg-[#141419] px-3 py-1 border border-[#C8A96E]/30 text-[#C8A96E] rounded-xs font-semibold">Bordado Wilcom 3D</span>
                <span className="bg-[#141419] px-3 py-1 border border-white/10 text-[#F4F1EA] rounded-xs font-medium">Sublimación 4K</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] font-semibold">Cantidades</span>
              <span className="text-[#F4F1EA] font-light">Personalizamos desde 1 sola prenda hasta lotes por docenas para empresas.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 font-mono text-xs">
            <Link
              href="/catalogo/ropa/camiseta-ajustada-estampada"
              className="uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-bold px-7 py-3.5 rounded-xs transition-all shadow-lg text-center"
            >
              Personalizar Esta Prenda →
            </Link>
            <Link
              href="/catalogo"
              className="uppercase tracking-[0.2em] bg-[#141419] hover:bg-[#1C1C24] border border-white/15 text-[#F4F1EA] hover:text-[#C8A96E] font-medium px-6 py-3.5 rounded-xs transition-all text-center"
            >
              Ver Otras Prendas
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
