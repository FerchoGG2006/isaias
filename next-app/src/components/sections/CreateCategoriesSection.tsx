'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CreateCategoriesSection: React.FC = () => {
  return (
    <section id="crear" className="wrap py-24 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">01</span>
            <span>/</span>
            <span>LÍNEAS DE CREACIÓN · ¿QUÉ QUIERES CREAR?</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            Diseña, Personaliza y Viste
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Desde prendas individuales en piel de durazno spandex hasta dotaciones corporativas y artículos de merchandising.
          </p>
        </div>


        <Link
          href="/catalogo"
          className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#F4F1EA] flex items-center gap-2 transition-colors self-start md:self-auto"
        >
          <span>Ver catálogo completo</span>
          <span>→</span>
        </Link>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Large Feature Card: ROPA & CONFECCIÓN (7 Cols) */}
        <Link
          href="/catalogo/ropa"
          className="lg:col-span-7 group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto rounded-sm overflow-hidden bg-[#141419] border border-white/10 hover:border-[#C8A96E]/60 transition-all duration-500 flex flex-col justify-end p-8 sm:p-12 shadow-2xl min-h-[380px]"
        >
          <Image
            src="/assets/telas/ajustadas/ajustada-1.jpg"
            alt="Confección y prendas en piel de durazno spandex 220g"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Text Content */}
          <div className="relative z-10 flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-bold">
              COLECCIÓN PRINCIPAL · SPANDEX 220G
            </span>
            <h3 className="font-sans font-bold text-2xl sm:text-4xl text-[#F4F1EA] tracking-tight group-hover:text-[#C8A96E] transition-colors">
              Ropa & Siluetas Textiles
            </h3>
            <p className="text-xs sm:text-sm text-[#D0CFC9] max-w-lg leading-relaxed font-light line-clamp-2">
              Camisetas ajustadas, baby tees, polos cuello tejido en algodón piqué y prendas deportivas en poliéster transpirable.
            </p>
            <div className="pt-3 flex items-center gap-2 font-mono text-xs text-[#F4F1EA] group-hover:text-[#C8A96E] font-semibold tracking-wider">
              <span>Explorar 12 siluetas</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Right Stacked Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Card 2: SUBLIMACIÓN & ACCESORIOS */}
          <Link
            href="/catalogo/sublimacion"
            className="group relative aspect-[16/9] lg:aspect-auto flex-1 rounded-sm overflow-hidden bg-[#141419] border border-white/10 hover:border-[#C8A96E]/60 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 shadow-xl min-h-[180px]"
          >
            <Image
              src="/assets/mug.png"
              alt="Sublimación 4K en mugs y artículos rígidos"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/60 to-transparent" />

            <div className="relative z-10 flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-bold">
                SUBLIMACIÓN 4K · 200°C
              </span>
              <h4 className="font-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight group-hover:text-[#C8A96E] transition-colors">
                Mugs & Merchandising
              </h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed font-light line-clamp-2">
                Tazas cerámicas, botellas térmicas y artículos promocionales con impresión fotográfica indestructible.
              </p>
              <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-[#F4F1EA] group-hover:text-[#C8A96E] font-semibold tracking-wider">
                <span>Ver artículos</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Card 3: DOTACIONES & UNIFORMES */}
          <Link
            href="/catalogo/dotaciones"
            className="group relative aspect-[16/9] lg:aspect-auto flex-1 rounded-sm overflow-hidden bg-[#141419] border border-white/10 hover:border-[#C8A96E]/60 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 shadow-xl min-h-[180px]"
          >
            <Image
              src="/assets/telas/cuello_tejido/cuello-2.jpg"
              alt="Dotaciones empresariales y bordado 3D Wilcom"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/60 to-transparent" />

            <div className="relative z-10 flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-bold">
                VOLUMEN CORPORATIVO
              </span>
              <h4 className="font-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight group-hover:text-[#C8A96E] transition-colors">
                Dotaciones & Uniformes
              </h4>
              <p className="text-xs text-[#A0A0A5] leading-relaxed font-light line-clamp-2">
                Polos en piqué pesado y bordados computarizados de alta densidad para empresas del Cesar y el Caribe.
              </p>
              <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-[#F4F1EA] group-hover:text-[#C8A96E] font-semibold tracking-wider">
                <span>Ver dotaciones</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
};
