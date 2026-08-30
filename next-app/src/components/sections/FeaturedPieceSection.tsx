'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const FeaturedPieceSection: React.FC = () => {
  return (
    <section id="pieza-destacada" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Giant Protagonist Image (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[3/4] rounded-xs overflow-hidden bg-[#141419] border border-white/10 shadow-2xl group">
          <Image
            src="/assets/telas/ajustadas/ajustada-2.jpg"
            alt="Camiseta Ajustada Spandex 220g - Pieza Destacada"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-transparent to-black/20" />
          
          <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-4 py-2 border border-[#C8A96E]/30 rounded-xs">
            FEATURED PIECE · EDICIÓN 026
          </div>
        </div>

        {/* Lateral Editorial Information (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-[#C8A96E] font-medium">
              04 / SILUETA PROTAGONISTA
            </span>
            <h3 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight leading-[1.05]">
              CAMISETA AJUSTADA SPANDEX
            </h3>
          </div>

          <div className="flex flex-col gap-4 font-mono text-xs text-[#D0CFC9]">
            <div className="flex flex-col gap-1 pb-4 border-b border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#A0A0A5]">MATERIA PRIMA</span>
              <span className="text-sm font-bold text-[#F4F1EA]">Piel de Durazno Spandex · 220 g</span>
              <span className="text-[#A0A0A5] text-[11px]">Tacto esmerilado suave, elongación 4-way y confección entallada.</span>
            </div>

            <div className="flex flex-col gap-1 pb-4 border-b border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#A0A0A5]">TÉCNICAS DISPONIBLES</span>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-[#141419] px-3 py-1 border border-white/10 text-[#C8A96E] rounded-xs">DTF REFLECTIVO 160°C</span>
                <span className="bg-[#141419] px-3 py-1 border border-white/10 text-[#C8A96E] rounded-xs">BORDADO 3D WILCOM</span>
                <span className="bg-[#141419] px-3 py-1 border border-white/10 text-[#C8A96E] rounded-xs">DTF FULL COLOR</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-[#A0A0A5]">ESCALA DE PEDIDO</span>
              <span className="text-[#F4F1EA]">Desde 1 unidad personalizada hasta 500+ piezas corporativas.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              href="/catalogo/ropa/camiseta-ajustada-estampada"
              className="font-mono text-xs uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#dbbe82] text-[#070708] font-bold px-8 py-4 rounded-xs transition-all shadow-xl text-center"
            >
              Configurar Pieza →
            </Link>
            <Link
              href="/catalogo/ropa"
              className="font-mono text-xs uppercase tracking-[0.2em] bg-[#141419] hover:bg-[#1c1c24] border border-white/15 text-[#F4F1EA] px-6 py-4 rounded-xs transition-all text-center"
            >
              Ver Siluetas Similares
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
