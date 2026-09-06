'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';

interface TeamTier {
  title: string;
  volume: string;
  techniqueTag: string;
  image: string;
  description: string;
  examples: string[];
  serviceSlug: string;
}

const TEAM_TIERS: TeamTier[] = [
  {
    title: 'Dotaciones & Empresas',
    volume: '10 A 500+ PIEZAS',
    techniqueTag: 'BORDADO COMPUTARIZADO',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    description: 'Polos en tela piqué resistente con bordado fino computarizado, camisas corporativas y chalecos duraderos.',
    examples: ['Bordado de alta definición y relieve', 'Curvas de tallas S a XXL', 'Facturación formal y despacho ágil'],
    serviceSlug: 'dotaciones-empresariales-confeccion',
  },
  {
    title: 'Marcas & Colecciones Cápsula',
    volume: 'DESDE 20 PIEZAS',
    techniqueTag: 'ESTAMPADO DTF TEXTIL',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    description: 'Camisetas en tela piel de durazno suave y fresca con estampado reflectivo o a todo color que no se cuartea.',
    examples: ['Estampado de máxima durabilidad al lavado', 'Etiquetas personalizadas', 'Empaque individual listo para entrega'],
    serviceSlug: 'impresion-dtf-por-metro',
  },
  {
    title: 'Eventos, Congresos & Merch',
    volume: '50 A 1000+ PIEZAS',
    techniqueTag: 'SUBLIMACIÓN FOTOGRÁFICA',
    image: '/assets/telas/qatar/qatar-1.jpg',
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
              
              {/* Lookbook Real Photo Frame */}
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden border border-white/10 bg-[#141419] p-4 flex flex-col justify-between">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out brightness-90 contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A96E] bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-xs border border-[#C8A96E]/40 font-semibold">
                    {tier.volume}
                  </span>
                  <span className="font-mono text-[9px] text-[#F4F1EA] bg-black/70 px-2 py-0.5 rounded-xs border border-white/10 uppercase">
                    TALLER DIRECTO
                  </span>
                </div>

                <div className="relative z-10 pt-2 text-right">
                  <span className="font-mono text-[9px] text-[#C8A96E] tracking-wider uppercase bg-black/85 px-2.5 py-1 rounded-xs border border-white/10">
                    {tier.techniqueTag}
                  </span>
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
