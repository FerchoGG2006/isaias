'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="taller" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Dominant Workshop Photography (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] rounded-xs overflow-hidden bg-[#141419] border border-white/10 shadow-2xl group">
          <Image
            src="/assets/telas/ajustadas/ajustada-4.jpg"
            alt="Taller de confección y personalización textil en Valledupar"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md p-4 border border-white/10 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[#C8A96E] font-bold uppercase tracking-widest">TALLER & MAQUILA PROPIA · VALLEDUPAR</span>
            <span className="text-[#A0A0A5] text-[11px]">BORDADORAS WILCOM · HORNOS DTF 160°C</span>
          </div>
        </div>

        {/* Minimal Editorial Manifesto (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-[#C8A96E] font-medium">
              08 / IDENTIDAD & OFICIO
            </span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter leading-none">
              MADE IN <br />
              <span className="text-[#C8A96E] font-serif italic font-normal">VALLEDUPAR.</span>
            </h2>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#F4F1EA] leading-relaxed">
            &ldquo;Una idea. Una máquina. Una prenda confeccionada sin intermediarios.&rdquo;
          </p>

          <p className="text-sm text-[#A0A0A5] leading-relaxed font-light">
            En nuestro estudio textil unificamos la precisión del bordado computarizado 3D y la química térmica del DTF reflectivo bajo un control de calidad artesanal. Desde una sola pieza única hasta producciones masivas institucionales.
          </p>

          {/* 3 Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-[#C8A96E] font-bold text-sm">100%</span>
              <span className="text-[#A0A0A5] text-[11px]">Local Valledupar</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#C8A96E] font-bold text-sm">4K / 3D</span>
              <span className="text-[#A0A0A5] text-[11px]">Resolución & Relieve</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#C8A96E] font-bold text-sm">1 a 500+</span>
              <span className="text-[#A0A0A5] text-[11px]">Escala de Entrega</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4F1EA] hover:text-[#C8A96E] font-bold transition-colors"
            >
              <span>Visitar nuestro taller físico en Valledupar</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};


