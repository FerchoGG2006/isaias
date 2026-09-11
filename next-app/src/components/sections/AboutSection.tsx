'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

export const AboutSection: React.FC = () => {
  const { business } = useQuote();
  const [activeMedia, setActiveMedia] = useState<'video' | 'embroidery' | 'workshop'>('video');
  const [isMuted, setIsMuted] = useState(true);

  const waUrl = getWhatsAppChatUrl(
    business.whatsappPhone,
    '¡Hola Variedades Isaías! Me gustaría consultar sobre la confección y personalización en su taller.'
  );

  return (
    <section id="taller" className="wrap py-12 sm:py-16 border-t border-white/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Media Frame (Compact & Quiet) */}
        <div className="lg:col-span-5 flex flex-col gap-3 max-w-md mx-auto w-full">
          <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-white/15 bg-[#070709] shadow-xl group">
            
            {activeMedia === 'video' && (
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                <video
                  src="/assets/palacio-hero.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="max-h-full max-w-full object-contain mx-auto brightness-[1.02] contrast-[1.05]"
                />

                {/* Subtle Sound Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/70 hover:bg-black border border-white/20 text-[#F4F1EA] hover:text-[#C8A96E] transition-all cursor-pointer z-10"
                  title={isMuted ? 'Activar sonido' : 'Silenciar'}
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
              </div>
            )}

            {activeMedia === 'embroidery' && (
              <Image
                src="/media/embroidery-machine.jpeg"
                alt="Bordadora industrial multicabezal Wilcom"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center brightness-95"
              />
            )}

            {activeMedia === 'workshop' && (
              <Image
                src="/assets/hero-main.jpg"
                alt="Taller de confección y mesa de corte"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center brightness-90"
              />
            )}

            {/* Discreet caption pill */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-[11px] text-[#F4F1EA] bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-xs border border-white/10 font-sans flex items-center justify-between">
              <span className="text-[#C8A96E] font-medium truncate">
                {activeMedia === 'video'
                  ? 'Producción textil directa'
                  : activeMedia === 'embroidery'
                  ? 'Bordadora industrial Wilcom'
                  : 'Mesa de corte y confección'}
              </span>
              <span className="text-[#8A8A92] text-[10px] shrink-0 ml-2">Sin intermediarios</span>
            </div>
          </div>

          {/* Minimal Tab Switchers */}
          <div className="flex items-center justify-center gap-1.5 font-sans text-xs text-[#A0A0A5]">
            <button
              type="button"
              onClick={() => setActiveMedia('video')}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer text-[11px] ${
                activeMedia === 'video'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-semibold'
                  : 'bg-[#141419] hover:text-[#F4F1EA]'
              }`}
            >
              Video
            </button>
            <button
              type="button"
              onClick={() => setActiveMedia('embroidery')}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer text-[11px] ${
                activeMedia === 'embroidery'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-semibold'
                  : 'bg-[#141419] hover:text-[#F4F1EA]'
              }`}
            >
              Bordadora
            </button>
            <button
              type="button"
              onClick={() => setActiveMedia('workshop')}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer text-[11px] ${
                activeMedia === 'workshop'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-semibold'
                  : 'bg-[#141419] hover:text-[#F4F1EA]'
              }`}
            >
              Confección
            </button>
          </div>
        </div>

        {/* Story & Workshop Capabilities */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-widest">
              Taller de Producción Propia
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F4F1EA] tracking-tight">
              Confección directa y maquinaria industrial.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#D0CFC9] leading-relaxed font-light">
            En <strong>Variedades Isaías</strong> producimos y personalizamos directamente cada prenda en nuestro taller en Valledupar. Ofrecemos bordado computarizado de alta definición, estampado DTF suave que no se cuartea y sublimación nítida, garantizando acabados impecables y precios directos de taller.
          </p>

          {/* Minimal 3-item capability grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10 font-sans text-xs">
            <div className="bg-[#141419] p-3 rounded-xs border border-white/5">
              <span className="text-[#C8A96E] font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                Bordado 3D
              </span>
              <p className="text-[#8A8A92] text-[11px] font-light leading-snug">
                Puntada fina y duradera para polos y uniformes.
              </p>
            </div>

            <div className="bg-[#141419] p-3 rounded-xs border border-white/5">
              <span className="text-[#C8A96E] font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                Estampado DTF
              </span>
              <p className="text-[#8A8A92] text-[11px] font-light leading-snug">
                Tacto suave que no se cuartea con las lavadas.
              </p>
            </div>

            <div className="bg-[#141419] p-3 rounded-xs border border-white/5">
              <span className="text-[#C8A96E] font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                Precios Directos
              </span>
              <p className="text-[#8A8A92] text-[11px] font-light leading-snug">
                Desde 1 prenda hasta pedidos al por mayor.
              </p>
            </div>
          </div>

          <div className="pt-1">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#C8A96E] hover:underline font-semibold transition-colors"
            >
              <span>Consultar disponibilidad y tiempos de taller</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
