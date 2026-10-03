'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

export const AboutSection: React.FC = () => {
  const { business } = useQuote();
  const [activeMedia, setActiveMedia] = useState<'embroidery' | 'workshop'>('embroidery');

  const waUrl = getWhatsAppChatUrl(
    business.whatsappPhone,
    '¡Hola Variedades Isaías! Me gustaría consultar sobre la confección y personalización en su taller.'
  );

  return (
    <section id="taller" className="wrap py-12 sm:py-16 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Media Frame (Compact & Quiet) */}
        <div className="lg:col-span-5 flex flex-col gap-3 max-w-md mx-auto w-full">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group">
            {activeMedia === 'embroidery' && (
              <Image
                src="/media/embroidery-machine.jpeg"
                alt="Bordadora industrial multicabezal Wilcom"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
            )}

            {activeMedia === 'workshop' && (
              <Image
                src="/assets/hero-main.jpg"
                alt="Taller de confección y mesa de corte"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
            )}

            {/* Discreet caption pill */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-[11px] text-white bg-slate-900/85 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-sans flex items-center justify-between">
              <span className="text-[#00AFEF] font-bold truncate">
                {activeMedia === 'embroidery'
                  ? 'Bordadora industrial Wilcom'
                  : 'Mesa de corte y confección'}
              </span>
              <span className="text-slate-300 text-[10px] shrink-0 ml-2">Sin intermediarios</span>
            </div>
          </div>

          {/* Minimal Tab Switchers */}
          <div className="flex items-center justify-center gap-2 font-sans text-xs text-slate-500">
            <button
              type="button"
              onClick={() => setActiveMedia('embroidery')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer text-[11px] ${
                activeMedia === 'embroidery'
                  ? 'bg-[#00AFEF] text-white font-bold shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Bordadora Wilcom
            </button>
            <button
              type="button"
              onClick={() => setActiveMedia('workshop')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer text-[11px] ${
                activeMedia === 'workshop'
                  ? 'bg-[#00AFEF] text-white font-bold shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Taller & Confección
            </button>
          </div>
        </div>

        {/* Story & Workshop Capabilities */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#0284C7] font-bold uppercase tracking-widest">
              Taller de Producción Propia
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Confección directa y maquinaria industrial.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            En <strong>Variedades Isaías</strong> producimos y personalizamos directamente cada prenda en nuestro taller en Valledupar. Ofrecemos bordado computarizado de alta definición, estampado DTF suave que no se cuartea y sublimación nítida, garantizando acabados impecables y precios directos de taller sin intermediarios.
          </p>

          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#0284C7] hover:underline font-bold transition-colors"
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
