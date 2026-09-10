'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<'video' | 'embroidery' | 'workshop'>('video');

  return (
    <section id="taller" className="wrap py-14 sm:py-20 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Workshop Media Frame (Video + Real Machinery Photos) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/10 bg-[#0C0D10] shadow-2xl group">
            {activeMedia === 'video' && (
              <video
                src="/assets/palacio-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-90 contrast-[1.05]"
              />
            )}
            {activeMedia === 'embroidery' && (
              <Image
                src="/media/embroidery-machine.jpeg"
                alt="Bordadora industrial multicabezal computarizada en Valledupar"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
            )}
            {activeMedia === 'workshop' && (
              <Image
                src="/assets/hero-main.jpg"
                alt="Taller de confección y mesa de corte de Variedades Isaías"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xs border border-white/10 font-sans">
              <span className="font-semibold text-[#C8A96E]">
                {activeMedia === 'video'
                  ? 'Video real de producción en taller'
                  : activeMedia === 'embroidery'
                  ? 'Bordadora Industrial Wilcom Multicabezal'
                  : 'Taller de Confección y Corte en Valledupar'}
              </span>
              <span className="text-[#A0A0A5] text-xs">
                Producción directa sin intermediarios
              </span>
            </div>
          </div>

          {/* Media Switcher Buttons */}
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#A0A0A5]">
            <span className="text-[10px] mr-1 text-[#8A8A92]">Ver Taller:</span>
            <button
              type="button"
              onClick={() => setActiveMedia('video')}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeMedia === 'video'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#141419] text-[#A0A0A5] border-white/10 hover:text-[#F4F1EA]'
              }`}
            >
              ▶ Video en Acción
            </button>
            <button
              type="button"
              onClick={() => setActiveMedia('embroidery')}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeMedia === 'embroidery'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#141419] text-[#A0A0A5] border-white/10 hover:text-[#F4F1EA]'
              }`}
            >
              Máquina de Bordados
            </button>
            <button
              type="button"
              onClick={() => setActiveMedia('workshop')}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeMedia === 'workshop'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#141419] text-[#A0A0A5] border-white/10 hover:text-[#F4F1EA]'
              }`}
            >
              Mesa de Confección
            </button>
          </div>
        </div>

        {/* Story & Values */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-widest">
              Taller Propio en Valledupar
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
              Confección directa y maquinaria industrial.
            </h2>
          </div>

          <p className="font-sans text-sm text-[#D0CFC9] leading-relaxed font-light">
            En <strong>Variedades Isaías</strong> unificamos confección de prendas y producción en taller propio. Contamos con maquinaria industrial de bordado computarizado Wilcom y calandras de sublimación 4K (unidad de producción El Palacio de la Sublimación), asegurando acabados limpios, resistentes y entregas puntuales tanto para una sola prenda como para dotaciones masivas.
          </p>

          <div className="flex flex-col gap-3 text-xs font-sans text-[#D0CFC9] pt-2 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Precios de taller:</strong> Sin intermediarios, directo de máquina a tus manos.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Bordado y Sublimación 4K:</strong> Relieves finos Wilcom y estampado molecular indeleble.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Telas seleccionadas:</strong> Piel de durazno spandex 220g, piqué y telas dry-fit transpirables.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span><strong>Envíos locales y nacionales:</strong> Atención directa en Valledupar y despachos a toda Colombia.</span>
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
