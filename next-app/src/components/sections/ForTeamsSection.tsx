'use client';

import React from 'react';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

interface TeamTier {
  title: string;
  volume: string;
  description: string;
  examples: string[];
  serviceSlug: string;
}

const TEAM_TIERS: TeamTier[] = [
  {
    title: 'Dotaciones & Empresas',
    volume: '10 A 500+ PIEZAS',
    description: 'Polos en tela piqué resistente con bordado fino computarizado, camisas corporativas y chalecos duraderos.',
    examples: ['Bordado de alta definición y relieve', 'Curvas de tallas S a XXL', 'Facturación formal y despacho ágil'],
    serviceSlug: 'dotaciones-empresariales-confeccion',
  },
  {
    title: 'Marcas & Colecciones Cápsula',
    volume: 'DESDE 20 PIEZAS',
    description: 'Camisetas en tela piel de durazno suave y fresca con estampado reflectivo o a todo color que no se cuartea.',
    examples: ['Estampado de máxima durabilidad al lavado', 'Etiquetas personalizadas', 'Empaque individual listo para entrega'],
    serviceSlug: 'impresion-dtf-por-metro',
  },
  {
    title: 'Eventos, Congresos & Merch',
    volume: '50 A 1000+ PIEZAS',
    description: 'Prendas transpirables deportivas, mugs térmicos, termos metálicos y recordatorios con estampado nítido.',
    examples: ['Colores vivos permanentes que no se caen', 'Tiempos ágiles de despacho', 'Control riguroso de diseño y logos'],
    serviceSlug: 'sublimacion-fotografica-promocionales',
  },
];

export const ForTeamsSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="equipos" className="wrap py-10 sm:py-14 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-baseline gap-4 mb-1">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
              VENTAS AL POR MAYOR
            </span>
          </div>
          <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight">
            Dotaciones & Equipos.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Confección y personalización textil para empresas, marcas independientes y eventos.
          </p>
        </div>

        <button
          onClick={openQuoteDrawer}
          className="font-mono text-xs uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-bold px-6 py-3.5 rounded-xs transition-all shadow-lg cursor-pointer self-start md:self-auto"
        >
          Cotizar para Empresas →
        </button>
      </div>

      {/* 3 Tier Elegant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TEAM_TIERS.map((tier, idx) => (
          <div
            key={idx}
            className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-500 shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              
              {/* Lookbook Tier Box */}
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden border border-white/10 bg-[#141419] p-4 flex flex-col justify-between">
                <div className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-[#C8A96E] font-medium">
                  {tier.volume}
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/60 group-hover:border-[#C8A96E] transition-colors">
                    <svg className="w-4 h-4 text-[#C8A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-serif text-sm text-[#F4F1EA] font-normal mt-2">Producción por Mayor</span>
                </div>

                <div className="relative z-10 font-sans text-[11px] text-[#8A8A92] text-right">
                  Taller Valledupar
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif font-normal text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  {tier.title}
                </h3>
                <p className="font-sans text-xs text-[#8A8A92] leading-relaxed font-light">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-3 border-t border-white/10 font-sans text-xs text-[#F4F1EA]">
                {tier.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#C8A96E] font-mono text-[10px]">✓</span>
                    <span className="text-[#8A8A92] text-xs font-light">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <Link
                href={`/servicios/${tier.serviceSlug}`}
                className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#F4F1EA] font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Cotizar este volumen</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
