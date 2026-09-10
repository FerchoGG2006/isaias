'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<'video' | 'embroidery' | 'workshop'>('video');
  const [isMuted, setIsMuted] = useState(true);
  const [isCinemaModalOpen, setIsCinemaModalOpen] = useState(false);

  return (
    <section id="taller" className="wrap py-14 sm:py-20 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Workshop Media Frame (4K Video + Real Machinery Photos) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/15 bg-black shadow-2xl group">
            
            {activeMedia === 'video' && (
              <div className="relative w-full h-full flex items-center justify-center bg-[#070709] overflow-hidden">
                {/* Ambient glow blurred backdrop to enhance depth */}
                <video
                  src="/assets/palacio-hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                />

                {/* Main Native 1080p HD Video (Uncropped, Crystal Sharp) */}
                <video
                  src="/assets/palacio-hero.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="relative z-10 max-h-full max-w-full object-contain mx-auto brightness-[1.04] contrast-[1.08] saturate-[1.10] drop-shadow-2xl"
                />

                {/* 4K Ultra HD Badge & Controls Overlay */}
                <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2">
                  <span className="font-mono text-[9px] sm:text-[10px] font-extrabold tracking-widest text-[#0C0D10] bg-[#C8A96E] px-2.5 py-1 rounded shadow-lg uppercase">
                    4K · 1080p HD
                  </span>
                  
                  {/* Sound Toggle */}
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-full bg-black/80 hover:bg-black border border-white/20 text-[#F4F1EA] hover:text-[#C8A96E] transition-all shadow-md cursor-pointer"
                    title={isMuted ? 'Activar sonido' : 'Silenciar'}
                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>

                  {/* Cinema Modal Expand */}
                  <button
                    type="button"
                    onClick={() => setIsCinemaModalOpen(true)}
                    className="p-1.5 rounded-full bg-black/80 hover:bg-black border border-white/20 text-[#F4F1EA] hover:text-[#C8A96E] transition-all shadow-md cursor-pointer"
                    title="Ver en pantalla completa 4K"
                    aria-label="Ver en pantalla completa 4K"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
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

            {activeMedia !== 'video' && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            )}

            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xs border border-white/10 font-sans">
              <span className="font-semibold text-[#C8A96E]">
                {activeMedia === 'video'
                  ? 'Producción en vivo · Maquinaria de Taller'
                  : activeMedia === 'embroidery'
                  ? 'Bordadora Industrial Wilcom Multicabezal'
                  : 'Taller de Confección y Corte en Valledupar'}
              </span>
              <span className="text-[#A0A0A5] text-[11px] hidden sm:inline">
                Producción directa sin intermediarios
              </span>
            </div>
          </div>

          {/* Media Switcher Buttons */}
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#A0A0A5] flex-wrap">
            <span className="text-[10px] mr-1 text-[#8A8A92]">Ver Taller:</span>
            <button
              type="button"
              onClick={() => setActiveMedia('video')}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMedia === 'video'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#141419] text-[#A0A0A5] border-white/10 hover:text-[#F4F1EA]'
              }`}
            >
              <span>▶ Video en Acción</span>
              <span className="text-[9px] bg-black/30 px-1.5 py-0.5 rounded font-mono">4K HD</span>
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

      {/* Modal Cinema 4K Fullscreen */}
      {isCinemaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col items-center justify-center bg-[#070709] border border-white/15 rounded-xl overflow-hidden shadow-2xl">
            
            {/* Header Modal Bar */}
            <div className="w-full bg-[#14151C] border-b border-white/10 px-4 py-3 flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F4F1EA]">Producción en Vivo · Taller Valledupar</span>
                <span className="font-mono text-[9px] text-[#0C0D10] bg-[#C8A96E] font-bold px-2 py-0.5 rounded">
                  4K Ultra HD
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCinemaModalOpen(false)}
                className="text-[#A0A0A5] hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Cerrar reproductor"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-[9/16] max-h-[75vh] flex items-center justify-center bg-black">
              <video
                src="/assets/palacio-hero.mp4"
                autoPlay
                loop
                controls
                playsInline
                className="w-full h-full object-contain brightness-105 contrast-[1.08] saturate-[1.10]"
              />
            </div>

            {/* Footer Modal Bar */}
            <div className="w-full bg-[#14151C] border-t border-white/10 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-[#A0A0A5]">
              <span>Maquinaria industrial de alta velocidad</span>
              <button
                type="button"
                onClick={() => setIsCinemaModalOpen(false)}
                className="text-[#C8A96E] hover:underline font-bold"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
