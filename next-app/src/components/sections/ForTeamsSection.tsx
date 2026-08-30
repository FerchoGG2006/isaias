'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';

interface TeamTier {
  title: string;
  volume: string;
  description: string;
  examples: string[];
  image: string;
  ctaText: string;
  serviceSlug: string;
}

const TEAM_TIERS: TeamTier[] = [
  {
    title: 'Empresas & Uniformes',
    volume: '10 A 500+ PIEZAS',
    description: 'Polos piqué con bordado 3D Wilcom, camisas de dotación corporativa y chalecos de alta durabilidad.',
    examples: ['Bordado de alta densidad', 'Tallas S a XXL combinadas', 'Facturación y entrega formal'],
    image: '/assets/telas/cuello_tejido/cuello-6.jpg',
    ctaText: 'Cotizar Dotaciones',
    serviceSlug: 'dotaciones-empresariales-confeccion',
  },
  {
    title: 'Eventos & Merchandising',
    volume: '20 A 1000+ PIEZAS',
    description: 'Camisetas en algodón o piel de durazno con DTF reflectivo o full color para lanzamientos y festivales.',
    examples: ['Fijación térmica a 160 °C', 'Acabado suave al tacto', 'Tiempos ágiles de despacho'],
    image: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg',
    ctaText: 'Cotizar Merchandising',
    serviceSlug: 'sublimacion-fotografica-maquila',
  },
  {
    title: 'Maquila para Talleres',
    volume: 'POR METRO O CORTE',
    description: 'Servicio exclusivo de impresión DTF por metro lineal y ponchado/bordado sobre prenda armada o por armar.',
    examples: ['DTF por metros continuos', 'Ponchado matriz Wilcom .EMB', 'Recepción de telas del cliente'],
    image: '/assets/telas/ajustadas/ajustada-3.jpg',
    ctaText: 'Cotizar Maquila',
    serviceSlug: 'impresion-dtf-por-metro',
  },
];

export const ForTeamsSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="equipos" className="wrap py-24 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">07</span>
            <span>/</span>
            <span>VOLUMEN & EMPRESAS · FOR TEAMS</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            Para tu Equipo o Empresa
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Desde 10 unidades para proyectos exclusivos hasta 1,000+ prendas corporativas con asesoría técnica directa.
          </p>
        </div>

        <button
          onClick={openQuoteDrawer}
          className="font-mono text-xs uppercase tracking-wider text-[#070708] bg-[#C8A96E] hover:bg-[#dbbe82] font-bold px-6 py-3.5 rounded-xs transition-all self-start md:self-auto cursor-pointer shadow-lg"
        >
          Solicitar Cotización por Volumen →
        </button>
      </div>

      {/* 3 Tier Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_TIERS.map((tier, idx) => (
          <div
            key={idx}
            className="group bg-[#0d0d10] border border-white/10 hover:border-[#C8A96E]/50 rounded-sm p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 font-mono text-[9px] uppercase tracking-wider text-[#C8A96E] bg-black/80 backdrop-blur-md px-2.5 py-1 border border-[#C8A96E]/30 rounded-xs">
                  {tier.volume}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A5] leading-relaxed font-light">
                  {tier.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2 pt-3 border-t border-white/5 font-mono text-xs text-[#D0CFC9]">
                {tier.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">▪</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <Link
                href={`/servicios/${tier.serviceSlug}`}
                className="font-mono text-xs uppercase tracking-wider text-[#C8A96E] hover:text-[#F4F1EA] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>{tier.ctaText}</span>
                <span>→</span>
              </Link>
              <span className="font-mono text-[11px] text-[#A0A0A5]">Estudio Valledupar</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
