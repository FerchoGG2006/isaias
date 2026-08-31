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
  iconType: string;
}

const TEAM_TIERS: TeamTier[] = [
  {
    title: 'Dotaciones & Empresas',
    volume: '10 A 500+ PIEZAS',
    description: 'Polos piqué pesados con bordado 3D Wilcom, camisas corporativas y chalecos de alta durabilidad.',
    examples: ['Bordado de alta densidad Wilcom', 'Curvas de tallas S a XXL', 'Facturación formal y despacho ágil'],
    serviceSlug: 'dotaciones-empresariales-confeccion',
    iconType: 'shield',
  },
  {
    title: 'Marcas & Colecciones Cápsula',
    volume: 'DESDE 20 PIEZAS',
    description: 'Camisetas en piel de durazno spandex 220g con DTF reflectivo o full color de alta fidelidad.',
    examples: ['Fijación térmica exacta a 160 °C', 'Etiquetas personalizadas', 'Empaque individual listo para retail'],
    serviceSlug: 'impresion-dtf-por-metro',
    iconType: 'sparkles',
  },
  {
    title: 'Eventos, Congresos & Merch',
    volume: '50 A 1000+ PIEZAS',
    description: 'Prendas transpirables Qatar, mugs térmicos, termos metálicos y accesorios con sublimación 4K.',
    examples: ['Sublimación 4K a 200 °C', 'Tiempos ágiles de despacho', 'Control de color fotográfico estricto'],
    serviceSlug: 'sublimacion-fotografica-maquila',
    iconType: 'flag',
  },
];

export const ForTeamsSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="equipos" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Dotaciones & Equipos
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Confección y personalización textil para empresas, negocios y eventos.
          </p>
        </div>

        <button
          onClick={openQuoteDrawer}
          className="text-xs uppercase tracking-wider bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] font-semibold px-6 py-3 rounded-full transition-all shadow-md shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:scale-[1.02] cursor-pointer self-start md:self-auto"
        >
          Cotizar para Empresas →
        </button>
      </div>

      {/* 3 Tier Elegant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TEAM_TIERS.map((tier, idx) => (
          <div
            key={idx}
            className="group bg-[#181D26]/90 backdrop-blur-xl border border-white/10 hover:border-[#3B82F6]/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-5 transition-all duration-400 shadow-2xl hover:scale-[1.01]"
          >
            <div className="flex flex-col gap-4">
              
              {/* Lookbook Tier Box */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#12151C] to-[#0E1016] p-4 flex flex-col justify-between">
                <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
                  {tier.volume}
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-12 h-12 rounded-full border border-[#94A3B8]/20 flex items-center justify-center bg-[#181D26]/80 group-hover:border-[#3B82F6] transition-colors shadow-sm">
                    <svg className="w-5 h-5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-serif text-base text-[#FFFFFF] font-bold mt-1">Producción por Mayor</span>
                </div>

                <div className="relative z-10 text-xs text-[#3B82F6] text-right font-semibold">
                  Entrega Rápida
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif font-bold text-xl text-[#FFFFFF] group-hover:text-[#3B82F6] transition-colors">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-3 border-t border-[#94A3B8]/15 text-xs text-[#FFFFFF]">
                {tier.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#3B82F6] font-bold">✓</span>
                    <span className="text-[#94A3B8] text-xs">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#94A3B8]/15">
              <Link
                href={`/servicios/${tier.serviceSlug}`}
                className="text-xs uppercase tracking-wider text-[#3B82F6] hover:text-[#FFFFFF] font-semibold inline-flex items-center gap-1.5 transition-colors"
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

