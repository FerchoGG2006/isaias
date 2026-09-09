'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TechniqueProcess {
  id: string;
  name: string;
  badge: string;
  thermalFact: string;
  headline: string;
  description: string;
  compatibleProducts: string[];
  serviceSlug: string;
  image: string;
}

const TECHNIQUES_DATA: TechniqueProcess[] = [
  {
    id: 'dtf',
    name: 'Estampado DTF Textil',
    badge: 'ALTA DEFINICIÓN & ELASTICIDAD',
    thermalFact: 'Fijación duradera · No se quiebra ni se cae',
    headline: 'Colores Vivos y Detalles Nítidos en Cualquier Prenda',
    description: 'Permite estampar desde logotipos pequeños hasta ilustraciones complejas a todo color. El estampado se integra con la tela, resistiendo estiramientos y múltiples lavadas sin perder intensidad.',
    compatibleProducts: ['Camisetas Ajustadas', 'Baby Tees', 'Buzos & Hoodies', 'Dotaciones'],
    serviceSlug: 'impresion-dtf-por-metro',
    image: '/assets/telas/ajustadas/ajustada-3.jpg',
  },
  {
    id: 'sublimacion',
    name: 'Sublimación Fotográfica',
    badge: 'TACTO CERO & CALIDAD FOTOGRÁFICA',
    thermalFact: 'Tacto imperceptible · 100% transpirable',
    headline: 'Impresión que No se Siente al Tacto y No se Cae',
    description: 'La tinta se fusiona directamente con la fibra sintética y artículos promocionales. La prenda queda 100% transpirable, suave y el color nunca se borra con el lavado.',
    compatibleProducts: ['Prendas Deportivas', 'Mugs & Pocillos', 'Termos Metálicos', 'Accesorios'],
    serviceSlug: 'sublimacion-fotografica-promocionales',
    image: '/assets/telas/qatar/qatar-1.jpg',
  },
  {
    id: 'bordado',
    name: 'Bordado Computarizado 3D',
    badge: 'RELIEVE ELEGANTE & MÁXIMA DURACIÓN',
    thermalFact: 'Puntadas de alta densidad · Elegancia formal',
    headline: 'Elegancia y Prestigio para tu Marca o Empresa',
    description: 'Bordados con puntadas precisas y opción de relieve 3D para darle presencia institucional y sofisticación a camisas polo, gorras y uniformes corporativos.',
    compatibleProducts: ['Polos Cuello Tejido', 'Gorras', 'Camisas Ejecutivas', 'Chalecos'],
    serviceSlug: 'bordado-computarizado-prendas',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
  },
  {
    id: 'vinil',
    name: 'Vinilo Textil Especial',
    badge: 'ACABADOS METALIZADOS & REFLECTIVOS',
    thermalFact: 'Efectos dorados, brillantes y reflectivos',
    headline: 'Efectos Brillantes, Dorados y Reflectivos de Noche',
    description: 'Ideal para números de camisetas deportivas, nombres personalizados y logotipos que requieran acabados brillantes, dorados o reflectivos de alta visibilidad.',
    compatibleProducts: ['Uniformes Deportivos', 'Prendas de Noche', 'Gorras', 'Bolsos'],
    serviceSlug: 'impresion-dtf-por-metro',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  },
];

import { useQuote } from '@/context/QuoteContext';

export const TechniquesSection: React.FC = () => {
  const { businessId } = useQuote();
  const defaultIdx = businessId === 'palacio' ? 1 : 0;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const activeIdx = selectedIdx ?? defaultIdx;
  const activeTech = TECHNIQUES_DATA[activeIdx] || TECHNIQUES_DATA[0];

  return (
    <section id="tecnicas" className="w-full bg-[#0C0D10] text-[#F4F1EA] py-24 sm:py-32 wrap border-t border-white/10 scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-xl">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
            Técnicas de Personalización.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Personaliza tus prendas con estampados vivos y bordados duraderos de excelente calidad.
          </p>
        </div>

        <Link
          href="/servicios"
          className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] hover:underline flex items-center gap-2 transition-colors self-start md:self-auto font-medium"
        >
          <span>Ver todos los servicios de taller</span>
          <span>→</span>
        </Link>
      </div>

      {/* Stage & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Technique Stage (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/10 bg-[#141419] shadow-2xl p-6 sm:p-8 flex flex-col justify-end group">
          
          {/* Background Real Technique Sample Photo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={activeTech.image}
                alt={activeTech.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Stage Bottom Information */}
          <div className="relative z-10 flex flex-col gap-3">
            <div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
                {activeTech.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#D0CFC9] mt-1 font-light max-w-lg leading-relaxed">
                {activeTech.headline}
              </p>
            </div>

            {/* Compatible items strip */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-2 font-sans text-xs">
              <span className="text-[#8A8A92] font-light">Ideal para:</span>
              {activeTech.compatibleProducts.map((prod) => (
                <span
                  key={prod}
                  className="font-sans text-[11px] bg-black/70 text-[#C8A96E] px-2.5 py-0.5 rounded-xs border border-[#C8A96E]/30"
                >
                  {prod}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Technique Switcher (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {TECHNIQUES_DATA.map((tech, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={tech.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-xs border transition-all duration-300 flex flex-col gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#141419] border-[#C8A96E] shadow-xl'
                    : 'bg-[#0b0b0e] hover:bg-[#141419] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-sans font-bold text-base sm:text-lg ${isActive ? 'text-[#C8A96E]' : 'text-[#F4F1EA]'}`}>
                    {tech.name}
                  </span>
                  {isActive && <span className="text-[#C8A96E] text-xs">● Activo</span>}
                </div>

                <p className="font-sans text-xs text-[#8A8A92] leading-relaxed font-light line-clamp-2">
                  {tech.description}
                </p>
              </button>
            );
          })}

          <div className="pt-2">
            <Link
              href={`/servicios/${activeTech.serviceSlug}`}
              className="w-full bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-sans text-xs uppercase tracking-wider font-bold py-3.5 px-6 rounded-xs text-center block transition-all shadow-md"
            >
              Ver servicio de {activeTech.name} →
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
};
