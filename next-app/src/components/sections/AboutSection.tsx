'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="taller" className="wrap py-10 sm:py-14 border-t border-[#94A3B8]/15 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Workshop Atelier Showcase with Real Photo (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-[#12151C] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
          
          <Image
            src="/assets/hero-main.jpg"
            alt="Taller de confección y estampado Variedades Isaías en Valledupar"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/40 to-[#12151C]/60" />

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="text-[#E5A910] font-semibold uppercase bg-black/50 px-3.5 py-1 rounded-full border border-white/10">
              Taller Propio
            </span>
            <span className="bg-black/50 px-3.5 py-1 rounded-full border border-white/10 text-white">Valledupar · Cesar</span>
          </div>

          {/* Center Atelier Story Card */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
              CONFECCIÓN & ESTAMPACIÓN TEXTIL
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-bold mt-1">
              Taller Variedades Isaías
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-md mt-2 font-light">
              Taller físico en Valledupar con maquinaria propia para confeccionar, bordar y estampar tus pedidos con la mejor calidad.
            </p>
          </div>

          {/* Bottom Info Bar */}
          <div className="relative z-10 text-xs text-[#FFFFFF] bg-black/50 px-4 py-2.5 rounded-full flex items-center justify-between">
            <span className="text-[#E5A910] font-bold uppercase tracking-wider text-xs">PRODUCCIÓN DIRECTA</span>
            <span className="text-white text-xs">PRECIOS DE TALLER SIN INTERMEDIARIOS</span>
          </div>
        </div>

        {/* Minimal Editorial Manifesto (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <h2 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-[#FFFFFF] tracking-tight leading-none">
              Hecho en <br />
              <span className="text-[#3B82F6] italic font-normal">Valledupar.</span>
            </h2>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#FFFFFF] leading-relaxed">
            &ldquo;Una idea. Una máquina. Una prenda confeccionada sin intermediarios.&rdquo;
          </p>

          <p className="font-sans text-sm text-[#94A3B8] leading-relaxed font-light">
            En nuestro taller textil unificamos bordado fino en relieve y estampados suaves a todo color con acabados limpios y duraderos. Desde una sola prenda personalizada hasta dotaciones completas para empresas y eventos.
          </p>

          {/* 3 Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#94A3B8]/15 text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-[#3B82F6] font-bold text-base">100%</span>
              <span className="text-[#94A3B8] text-xs">Taller Valledupar</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#E5A910] font-bold text-base">Alta Definición</span>
              <span className="text-[#94A3B8] text-xs">Colores Vivos</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#38BDF8] font-bold text-base">1 a 500+</span>
              <span className="text-[#94A3B8] text-xs">Prendas por Lote</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#3B82F6] hover:text-[#FFFFFF] font-semibold transition-colors"
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
