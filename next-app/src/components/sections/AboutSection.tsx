'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="taller" className="wrap py-14 sm:py-20 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Workshop Photo Frame */}
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/10 bg-[#0C0D10] shadow-2xl group">
          <Image
            src="/assets/hero-main.jpg"
            alt="Taller de confección y estampado Variedades Isaías en Valledupar"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xs border border-white/10 font-sans">
            <span className="font-semibold text-[#C8A96E]">Taller en Valledupar, Cesar</span>
            <span className="text-[#A0A0A5] text-xs">Producción directa y personalizada</span>
          </div>
        </div>

        {/* Story & Values */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
              Confección directa en Valledupar.
            </h2>
          </div>

          <p className="font-sans text-sm text-[#D0CFC9] leading-relaxed font-light">
            En nuestro taller textil unificamos bordado computarizado en relieve y estampados suaves a todo color con acabados limpios y resistentes. Trabajamos desde una sola prenda personalizada hasta lotes de dotaciones para empresas y eventos.
          </p>

          <div className="flex flex-col gap-3 text-xs font-sans text-[#D0CFC9] pt-2 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Precios de taller:</strong> Sin intermediarios, directo de máquina a tus manos.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Telas frescas:</strong> Piel de durazno, algodón piqué y dry-fit de alta duración.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Envíos nacionales:</strong> Despachos locales en Valledupar y envíos a todo el país.</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#C8A96E] hover:underline font-semibold transition-colors"
            >
              <span>Escríbenos o visítanos en Valledupar</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
