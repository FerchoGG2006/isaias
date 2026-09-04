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
    thermalFact: 'Fijación duradera · Curado a 160 °C',
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
    thermalFact: 'Fusionado 4K · Curado a 200 °C',
    headline: 'Impresión que No se Siente al Tacto y No se Cae',
    description: 'La tinta se fusiona directamente con la fibra sintética y artículos promocionales. La prenda queda 100% transpirable, suave y el color nunca se borra con el lavado.',
    compatibleProducts: ['Prendas Deportivas', 'Mugs & Pocillos', 'Termos Metálicos', 'Accesorios'],
    serviceSlug: 'sublimacion-fotografica-maquila',
    image: '/assets/telas/qatar/qatar-1.jpg',
  },
  {
    id: 'bordado',
    name: 'Bordado Computarizado 3D',
    badge: 'RELIEVE ELEGANTE & MÁXIMA DURACIÓN',
    thermalFact: 'Matriz Wilcom · Algodón Piqué',
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
    thermalFact: 'Corte limpio de alta precisión',
    headline: 'Efectos Brillantes, Dorados y Reflectivos de Noche',
    description: 'Ideal para números de camisetas deportivas, nombres personalizados y logotipos que requieran acabados brillantes, dorados o reflectivos de alta visibilidad.',
    compatibleProducts: ['Uniformes Deportivos', 'Prendas de Noche', 'Gorras', 'Bolsos'],
    serviceSlug: 'impresion-dtf-por-metro',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  },
];

export const TechniquesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTech = TECHNIQUES_DATA[activeIdx] || TECHNIQUES_DATA[0];

  return (
    <section id="tecnicas" className="wrap py-10 sm:py-14 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-baseline gap-4 mb-1">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
              TÉCNICAS & MAQUILA
            </span>
          </div>
          <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight">
            Técnicas de Personalización.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Procesos de estampación térmica y bordado industrial para acabados de alta costura.
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
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/10 bg-[#141419] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
          
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/50 to-[#0C0D10]/70" />
            </motion.div>
          </AnimatePresence>

          {/* Top Stage Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
            <span className="uppercase tracking-widest text-[#C8A96E] font-medium bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
              {activeTech.badge}
            </span>
            <span className="text-[#F4F1EA] bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 font-light">
              {activeTech.thermalFact}
            </span>
          </div>

          {/* Center Title overlay */}
          <div className="relative z-10 my-auto py-6 text-center max-w-md mx-auto bg-black/60 backdrop-blur-md p-6 rounded-xs border border-white/10">
            <h3 className="font-serif font-normal text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
              {activeTech.name}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] mt-2 font-light">
              {activeTech.headline}
            </p>
          </div>

          {/* Compatible items strip */}
          <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center gap-2 font-sans text-xs">
            <span className="text-[#8A8A92] font-light">Ideal para:</span>
            {activeTech.compatibleProducts.map((prod) => (
              <span
                key={prod}
                className="font-mono text-[10px] uppercase tracking-wider bg-black/60 text-[#C8A96E] px-3 py-1 rounded-xs border border-white/10"
              >
                {prod}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive Technique Switcher (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {TECHNIQUES_DATA.map((tech, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={tech.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-5 rounded-xs border transition-all duration-300 flex flex-col gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#141419] border-[#C8A96E] shadow-xl'
                    : 'bg-[#0b0b0e] hover:bg-[#141419] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-serif font-normal text-lg sm:text-xl ${isActive ? 'text-[#C8A96E]' : 'text-[#F4F1EA]'}`}>
                    {tech.name}
                  </span>
                  <span className={`font-mono text-xs uppercase tracking-widest ${isActive ? 'text-[#C8A96E]' : 'text-[#8A8A92]'}`}>
                    0{idx + 1}
                  </span>
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
              className="w-full bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-mono text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded-xs text-center block transition-all shadow-lg"
            >
              Cotizar Servicio de {activeTech.name} →
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
};
