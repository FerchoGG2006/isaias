'use client';

import React from 'react';
import Link from 'next/link';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifiesto" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* Magazine Eyebrow */}
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E] font-semibold">
          02 / MANIFIESTO DE ESTUDIO
        </span>

        {/* Large Editorial Statement */}
        <blockquote className="font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F4F1EA] tracking-tight leading-[1.15] font-normal">
          &ldquo;No hacemos solo estampados. Convertimos ideas en piezas que se pueden vestir.&rdquo;
        </blockquote>

        {/* Supporting Narrative */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#A0A0A5] max-w-2xl leading-relaxed font-light">
          Cada fibra, curva térmica y puntada nace en nuestro taller de Valledupar con la convicción de que una prenda personalizada debe sentirse, vestirse y durar como una pieza de colección.
        </p>

        {/* Clean Editorial Technical Strip */}
        <div className="w-full pt-10 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 font-mono text-xs uppercase tracking-[0.25em] text-[#D0CFC9]">
          <Link href="/servicios/impresion-dtf-por-metro" className="hover:text-[#C8A96E] transition-colors">
            DTF REFLECTIVO 160°C
          </Link>
          <span className="text-[#C8A96E]/40 font-serif">·</span>
          <Link href="/servicios/sublimacion-fotografica-maquila" className="hover:text-[#C8A96E] transition-colors">
            SUBLIMACIÓN 4K 200°C
          </Link>
          <span className="text-[#C8A96E]/40 font-serif">·</span>
          <Link href="/servicios/bordado-computarizado-prendas" className="hover:text-[#C8A96E] transition-colors">
            BORDADO 3D WILCOM
          </Link>
          <span className="text-[#C8A96E]/40 font-serif">·</span>
          <Link href="/servicios/dotaciones-empresariales-confeccion" className="hover:text-[#C8A96E] transition-colors">
            DOTACIONES & VOLUMEN
          </Link>
        </div>

      </div>
    </section>
  );
};
