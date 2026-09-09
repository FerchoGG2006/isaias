'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

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
  const { business } = useQuote();

  const wholesaleWaUrl = getWhatsAppChatUrl(
    business?.whatsappPhone,
    `¡Hola ${business?.name || 'Variedades Isaías'}! Me gustaría solicitar cotización al por mayor para dotaciones / uniformes de mi empresa o equipo.`
  );

  return (
    <section id="equipos" className="wrap py-14 sm:py-20 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
            Dotaciones & Equipos.
          </h2>
          <p className="font-sans text-sm text-[#8A8A92] leading-relaxed font-light mt-1">
            Confección y personalización textil para empresas, marcas independientes y eventos.
          </p>
        </div>

        <a
          href={wholesaleWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs uppercase tracking-wider bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-bold px-6 py-3.5 rounded-xs transition-all shadow-md self-start md:self-auto flex items-center gap-2"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
          </svg>
          <span>Cotizar para Empresas →</span>
        </a>
      </div>

      {/* 3 Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TEAM_TIERS.map((tier, idx) => (
          <div
            key={idx}
            className="group bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#141419]">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 z-10">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#C8A96E] bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-xs border border-[#C8A96E]/30 font-medium">
                    {tier.volume}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-bold text-lg text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  {tier.title}
                </h3>
                <p className="font-sans text-xs text-[#8A8A92] leading-relaxed font-light">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10 font-sans text-xs text-[#D0CFC9]">
                {tier.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#C8A96E] text-xs">✓</span>
                    <span className="text-[#A0A0A5] text-xs font-light">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <Link
                href={`/servicios/${tier.serviceSlug}`}
                className="font-sans text-xs uppercase tracking-wider text-[#C8A96E] hover:text-[#F4F1EA] font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Ver detalles de servicio</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
