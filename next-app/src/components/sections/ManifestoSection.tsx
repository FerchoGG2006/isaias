'use client';

import React from 'react';
import Link from 'next/link';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifiesto" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Large Editorial Statement */}
        <blockquote className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight leading-[1.2] font-normal">
          &ldquo;No hacemos solo estampados. Convertimos ideas en prendas que dan <span className="text-[#3B82F6] not-italic font-bold">orgullo vestir</span>.&rdquo;
        </blockquote>

        {/* Supporting Narrative */}
        <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed font-light">
          Cada fibra, estampado y bordado nace en nuestro taller de Valledupar con la convicción de que una prenda personalizada debe verse impecable y durar por años.
        </p>

        {/* Clean Strip */}
        <div className="w-full pt-8 border-t border-[#94A3B8]/15 flex flex-wrap items-center justify-around gap-6 text-xs uppercase tracking-wider text-[#94A3B8]">
          <Link href="/servicios/impresion-dtf-por-metro" className="hover:text-[#3B82F6] transition-colors font-medium">
            Estampado DTF Duradero
          </Link>
          <span className="text-[#E5A910] font-serif">·</span>
          <Link href="/servicios/sublimacion-fotografica-maquila" className="hover:text-[#3B82F6] transition-colors font-medium">
            Sublimación Fotográfica
          </Link>
          <span className="text-[#E5A910] font-serif">·</span>
          <Link href="/servicios/bordado-computarizado-prendas" className="hover:text-[#3B82F6] transition-colors font-medium">
            Bordado Wilcom 3D
          </Link>
          <span className="text-[#E5A910] font-serif">·</span>
          <Link href="/servicios/dotaciones-empresariales-confeccion" className="hover:text-[#3B82F6] transition-colors font-medium">
            Dotaciones Empresariales
          </Link>
        </div>

      </div>
    </section>
  );
};
