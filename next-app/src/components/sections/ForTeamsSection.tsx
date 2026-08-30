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
  serviceSlug: string;
}

const TEAM_TIERS: TeamTier[] = [
  {
    title: 'Dotaciones & Empresas',
    volume: '10 A 500+ PIEZAS',
    description: 'Polos piqué pesados con bordado 3D Wilcom, camisas corporativas y chalecos de alta durabilidad.',
    examples: ['Bordado de alta densidad', 'Curvas de tallas S a XXL', 'Facturación y entrega formal'],
    image: '/assets/telas/cuello_tejido/cuello-6.jpg',
    serviceSlug: 'dotaciones-empresariales-confeccion',
  },
  {
    title: 'Marcas & Colecciones Cápsula',
    volume: 'DESDE 20 PIEZAS',
    description: 'Camisetas en piel de durazno spandex 220g con DTF reflectivo o full color de alta fidelidad.',
    examples: ['Fijación térmica a 160 °C', 'Etiquetas personalizadas', 'Empaque individual listo'],
    image: '/assets/telas/ajustadas/ajustada-3.jpg',
    serviceSlug: 'impresion-dtf-por-metro',
  },
  {
    title: 'Eventos, Congresos & Merch',
    volume: '50 A 1000+ PIEZAS',
    description: 'Prendas transpirables Qatar, mugs térmicos, termos metálicos y accesorios con sublimación 4K.',
    examples: ['Sublimación 4K a 200 °C', 'Tiempos ágiles de despacho', 'Control de color estricto'],
    image: '/assets/img-12.jpg',
    serviceSlug: 'sublimacion-fotografica-maquila',
  },
];

export const ForTeamsSection: React.FC = () => {
  const { openQuoteDrawer } = useQuote();

  return (
    <section id="equipos" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.32em] font-semibold">
            09 / PRODUCCIÓN EMPRESARIAL
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter">
            FOR TEAMS
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D0CFC9] leading-relaxed font-normal">
            &ldquo;Producción para equipos que necesitan verse como uno.&rdquo;
          </p>
        </div>

        <button
          onClick={openQuoteDrawer}
          className="font-mono text-xs uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#dbbe82] text-[#070708] font-bold px-8 py-4 rounded-xs transition-all self-start md:self-auto cursor-pointer shadow-xl text-center"
        >
          Solicitar Cotización Empresarial →
        </button>
      </div>

      {/* 3 Tier Elegant Lookbook Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {TEAM_TIERS.map((tier, idx) => (
          <div
            key={idx}
            className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/50 rounded-xs p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-500 shadow-xl"
          >
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-wider text-[#C8A96E] bg-black/80 backdrop-blur-md px-2.5 py-1 border border-[#C8A96E]/30 rounded-xs">
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

              <ul className="flex flex-col gap-2 pt-4 border-t border-white/10 font-mono text-xs text-[#D0CFC9]">
                {tier.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">▪</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/servicios/${tier.serviceSlug}`}
                className="font-mono text-xs uppercase tracking-wider text-[#C8A96E] hover:text-[#F4F1EA] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Ver especificaciones</span>
                <span>→</span>
              </Link>
              <span className="font-mono text-[11px] text-[#A0A0A5]">Valledupar</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

