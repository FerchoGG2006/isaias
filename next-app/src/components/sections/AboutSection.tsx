'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="wrap py-20 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Workshop Photos (5 Cols) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/assets/telas/cuello_tejido/cuello-2.jpg"
              alt="Taller de confección y bordado en Valledupar"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl mt-8">
            <Image
              src="/assets/telas/ajustadas/ajustada-3.jpg"
              alt="Detalle de estampado de alta precisión en taller"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Editorial Copy (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.25em] font-semibold">
              <span className="opacity-60">06</span>
              <span>/</span>
              <span>ESTUDIO & RAÍZ VALLENATA</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
              Variedades Isaías · Valledupar
            </h2>
          </div>

          <blockquote className="font-serif italic text-lg sm:text-xl text-[#C8A96E] border-l-2 border-[#C8A96E] pl-4 my-1">
            &ldquo;Calidad que resalta en cada fibra, hecha por manos de nuestra tierra.&rdquo;
          </blockquote>

          <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#A0A0A5] leading-relaxed font-light">
            <p>
              Somos un estudio y taller especializado en transformar ideas en prendas y piezas personalizadas con estándares de confección superior. Desde pedidos individuales exclusivos hasta dotaciones institucionales de alto volumen para empresas del Cesar y el Caribe.
            </p>
            <p>
              Trabajamos con maquinaria industrial calibrada, software de ponchado computarizado Wilcom y sustratos de máxima durabilidad para asegurar que cada prenda mantenga su color, elasticidad y definición tras innumerables lavadas.
            </p>
          </div>

          {/* Workshop Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
            <div>
              <span className="text-[#C8A96E] font-bold block text-sm">Valledupar</span>
              <span className="text-[#A0A0A5] text-[11px]">Punto físico de entrega</span>
            </div>
            <div>
              <span className="text-[#C8A96E] font-bold block text-sm">Todo el Cesar</span>
              <span className="text-[#A0A0A5] text-[11px]">Despachos intermunicipales</span>
            </div>
            <div>
              <span className="text-[#C8A96E] font-bold block text-sm">Nacional</span>
              <span className="text-[#A0A0A5] text-[11px]">Envíos a toda Colombia</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F4F1EA] hover:text-[#C8A96E] transition-colors"
            >
              <span>Conoce nuestra ubicación y canales directos</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
