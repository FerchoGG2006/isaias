'use client';

import React, { useState } from 'react';
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
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
          
          <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

          {/* Top Stage Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="uppercase tracking-wider text-[#E5A910] font-semibold">
              {activeTech.badge}
            </span>
            <span className="uppercase tracking-wider font-semibold">
              Taller Propio
            </span>
          </div>

          {/* Dynamic Interactive Stage Center */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#94A3B8]/25 flex items-center justify-center mb-3 bg-[#181D26]/90 backdrop-blur-md shadow-lg">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>

              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
                Proceso de Estampación
              </span>
              <h4 className="font-serif text-2xl sm:text-4xl text-[#FFFFFF] font-bold mt-1">
                {activeTech.name}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-md mt-2 font-light">
                {activeTech.headline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Strip */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#FFFFFF] bg-[#12151C]/90 backdrop-blur-md p-3.5 border border-white/10 rounded-2xl">
            <span className="text-[#3B82F6] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              {activeTech.thermalFact}
            </span>
            <span className="text-[#94A3B8] text-xs">Valledupar, Cesar</span>
          </div>

        </div>

        {/* Right Column: Technique Navigation & Story (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Menu Tabs */}
          <div className="flex flex-col border-b border-[#94A3B8]/15">
            {TECHNIQUES_DATA.map((tech, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`py-3.5 flex items-center justify-between text-xs uppercase tracking-wider border-t border-[#94A3B8]/15 transition-all text-left cursor-pointer group ${
                    isActive
                      ? 'text-[#3B82F6] font-semibold pl-3.5 border-l-2 border-l-[#3B82F6] bg-white/[0.02]'
                      : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:pl-2'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />}
                    {tech.name}
                  </span>
                  <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Active Technique Details */}
          <div className="flex flex-col gap-3.5">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FFFFFF] tracking-tight leading-snug">
              {activeTech.headline}
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
              {activeTech.description}
            </p>

            {/* Compatible Garments */}
            <div className="pt-3 flex flex-col gap-2 text-xs">
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">Prendas recomendadas para esta técnica:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeTech.compatibleProducts.map((prod) => (
                  <span key={prod} className="bg-[#181D26] px-3.5 py-1.5 border border-[#94A3B8]/20 text-[#FFFFFF] text-xs rounded-full font-medium">
                    {prod}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <Link
                href={`/servicios/${activeTech.serviceSlug}`}
                className="text-xs uppercase tracking-wider text-[#3B82F6] hover:text-[#FFFFFF] font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <span>Cotizar servicio de {activeTech.name}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};


