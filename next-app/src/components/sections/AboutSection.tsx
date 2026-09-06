'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="taller" className="wrap py-10 sm:py-14 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Workshop Atelier Showcase with Real Photo (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/10 bg-[#0C0D10] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
          
          <Image
            src="/assets/hero-main.jpg"
            alt="Taller de confección y estampado Variedades Isaías en Valledupar"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/30 to-[#0C0D10]/50" />

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
            <span className="text-[#C8A96E] font-medium uppercase bg-black/75 px-3 py-1 rounded-xs border border-white/10">
              Taller Propio
            </span>
            <span className="bg-black/75 px-3 py-1 rounded-xs border border-white/10 text-[#F4F1EA]">
              Valledupar · Cesar
            </span>
          </div>

          {/* Bottom Info Bar */}
          <div className="relative z-10 text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xs border border-white/10 flex items-center justify-between font-mono">
            <span className="text-[#C8A96E] font-semibold uppercase tracking-wider text-[11px]">
              PRODUCCIÓN DIRECTA
            </span>
            <span className="text-[#8A8A92] text-[11px]">
              PRECIOS DE TALLER SIN INTERMEDIARIOS
            </span>
          </div>
        </div>

        {/* Minimal Editorial Manifesto (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A96E] font-semibold">
              ORIGEN & OFICIO
            </span>
            <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight leading-none">
              Hecho en <br />
              <span className="text-[#C8A96E] italic font-normal">Valledupar.</span>
            </h2>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#F4F1EA] leading-relaxed">
            &ldquo;Una idea. Una máquina. Una prenda confeccionada sin intermediarios.&rdquo;
          </p>

          <p className="font-sans text-sm text-[#8A8A92] leading-relaxed font-light">
            En nuestro taller textil unificamos bordado fino computarizado en relieve y estampados suaves a todo color con acabados limpios y duraderos. Desde una sola pieza personalizada hasta lotes completos de dotaciones para empresas, marcas y eventos.
          </p>

          {/* 3 Atelier Pillars */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10 text-xs font-sans">
            <div className="flex flex-col gap-1">
              <span className="text-[#C8A96E] font-mono text-sm font-semibold">Taller Físico</span>
              <span className="text-[#8A8A92] text-xs font-light">Valledupar, Cesar</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#F4F1EA] font-mono text-sm font-semibold">Prenda a Prenda</span>
              <span className="text-[#8A8A92] text-xs font-light">Control de Acabado</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#C8A96E] font-mono text-sm font-semibold">1 a 500+</span>
              <span className="text-[#8A8A92] text-xs font-light">Unidades por Lote</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#F4F1EA] font-semibold transition-colors"
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
