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
    thermalFact: 'Fijación duradera que no se cuartea',
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
    thermalFact: 'El color pasa a ser parte de la fibra',
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
    thermalFact: 'Hilo resistente de alto brillo',
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
    <section id="tecnicas" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Cómo Personalizamos
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Acabados de calidad para que tus prendas duren por años sin perder el color.
          </p>
        </div>

        <Link
          href="/servicios"
          className="text-xs uppercase tracking-wider text-[#3B82F6] hover:text-[#FFFFFF] flex items-center gap-2 transition-colors self-start md:self-auto font-semibold"
        >
          <span>Ver todos los servicios de taller</span>
          <span>→</span>
        </Link>
      </div>

      {/* Stage & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Technique Stage (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-[#12151C] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
          
          {/* Background Real Technique Sample Photo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, scale: 1.05 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/50 to-[#12151C]/60" />
            </motion.div>
          </AnimatePresence>

          {/* Top Stage Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="uppercase tracking-wider text-[#E5A910] font-semibold bg-black/50 px-3.5 py-1 rounded-full border border-white/10">
              {activeTech.badge}
            </span>
            <span className="text-white bg-black/50 px-3.5 py-1 rounded-full border border-white/10 font-medium">
              {activeTech.thermalFact}
            </span>
          </div>

          {/* Center Title overlay */}
          <div className="relative z-10 my-auto py-6 text-center max-w-md mx-auto bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FFFFFF] tracking-tight">
              {activeTech.name}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-2 font-light">
              {activeTech.headline}
            </p>
          </div>

          {/* Compatible items strip */}
          <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-white font-medium">Ideal para:</span>
            {activeTech.compatibleProducts.map((prod) => (
              <span
                key={prod}
                className="text-[11px] bg-black/50 text-[#3B82F6] px-3 py-1 rounded-full border border-white/10"
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
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#181D26] border-[#3B82F6] shadow-xl scale-[1.02]'
                    : 'bg-[#181D26]/60 hover:bg-[#181D26] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-serif font-bold text-lg sm:text-xl ${isActive ? 'text-[#3B82F6]' : 'text-[#FFFFFF]'}`}>
                    {tech.name}
                  </span>
                  <span className={`text-xs uppercase tracking-wider font-semibold ${isActive ? 'text-[#E5A910]' : 'text-[#94A3B8]'}`}>
                    0{idx + 1}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed font-light line-clamp-2">
                  {tech.description}
                </p>
              </button>
            );
          })}

          <div className="pt-2">
            <Link
              href={`/servicios/${activeTech.serviceSlug}`}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs uppercase tracking-wider font-semibold py-4 px-6 rounded-full text-center block transition-all shadow-md shadow-[#3B82F6]/25 hover:scale-[1.02]"
            >
              Cotizar Servicio de {activeTech.name} →
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
};
