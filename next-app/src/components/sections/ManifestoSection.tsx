'use client';

import React from 'react';
import Link from 'next/link';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifiesto" className="wrap py-24 sm:py-32 border-t border-white/10 scroll-mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Large Editorial Statement */}
        <blockquote className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight leading-[1.2] font-normal">
          &ldquo;No hacemos solo estampados. Convertimos ideas en prendas que dan <span className="text-[#C8A96E] not-italic font-normal">orgullo vestir</span>.&rdquo;
        </blockquote>

        {/* Supporting Narrative */}
        <p className="font-sans text-base sm:text-lg text-[#8A8A92] max-w-2xl leading-relaxed font-light">
          Cada fibra, estampado y bordado nace en nuestro taller de Valledupar con la convicción de que una prenda personalizada debe verse impecable y durar por años.
        </p>

        {/* Clean Strip */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 font-mono text-xs uppercase tracking-widest text-[#8A8A92]">
          <Link href="/servicios/impresion-dtf-por-metro" className="hover:text-[#C8A96E] transition-colors">
            Estampado DTF Duradero
          </Link>
          <span className="text-[#C8A96E]">·</span>
          <Link href="/servicios/sublimacion-fotografica-maquila" className="hover:text-[#C8A96E] transition-colors">
            Sublimación Fotográfica
          </Link>
          <span className="text-[#C8A96E]">·</span>
          <Link href="/servicios/bordado-computarizado-prendas" className="hover:text-[#C8A96E] transition-colors">
            Bordado Wilcom 3D
          </Link>
          <span className="text-[#C8A96E]">·</span>
          <Link href="/servicios/dotaciones-empresariales-confeccion" className="hover:text-[#C8A96E] transition-colors">
            Dotaciones Empresariales
          </Link>
        </div>

      </div>
    </section>
  );
};
