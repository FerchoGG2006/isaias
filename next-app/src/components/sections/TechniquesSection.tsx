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
  image: string;
  serviceSlug: string;
}

const TECHNIQUES_DATA: TechniqueProcess[] = [
  {
    id: 'dtf',
    name: 'DTF REFLECTIVO & FULL COLOR',
    badge: 'ESTRUCTURA DE POLIAMIDA & CURADO 160°C',
    thermalFact: '160 °C · 15s de presión neumática',
    headline: 'Impresión Directa a Film: Definición Vectorial sin Límites',
    description: 'Pigmentos textiles de alta cobertura con base blanca densa y microesferas reflectivas de alta intensidad. Funde el diseño íntimamente con la fibra elástica, manteniendo flexibilidad total sin cuartearse.',
    compatibleProducts: ['Camisetas Piel de Durazno 220g', 'Baby Tees', 'Hoodies & Suéteres', 'Dotaciones'],
    image: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg',
    serviceSlug: 'impresion-dtf-por-metro',
  },
  {
    id: 'sublimacion',
    name: 'SUBLIMACIÓN FOTOGRÁFICA 4K',
    badge: 'TRANSFERENCIA GASEOSA A 200°C',
    thermalFact: '200 °C · Integración molecular',
    headline: 'Color Gaseoso Permanente: Tacto Cero & Transpirabilidad',
    description: 'El tinte térmico vaporiza a 200 °C integrándose dentro de las moléculas de poliéster y polímeros cerámicos. El resultado es 100% transpirable, indeleble ante el lavado y de resolución fotográfica 4K.',
    compatibleProducts: ['Prendas Deportivas Qatar', 'Mugs Cerámicos', 'Botellas Térmicas', 'Cintas & Merch'],
    image: '/assets/img-12.jpg',
    serviceSlug: 'sublimacion-fotografica-maquila',
  },
  {
    id: 'bordado',
    name: 'BORDADO COMPUTARIZADO 3D',
    badge: 'MATRICES WILCOM & RELIEVE 3D',
    thermalFact: 'Hilatura de poliéster de alta resistencia',
    headline: 'Volumen Tridimensional: Ponchado de Alta Densidad',
    description: 'Digitalización vectorial en software Wilcom para crear relieves densos y matrices de costura tridimensional. Resistencia inalterable al paso del tiempo sobre prendas estructuradas.',
    compatibleProducts: ['Polos Cuello Tejido en Algodón Piqué', 'Gorras Estructuradas', 'Camisas de Dotación'],
    image: '/assets/telas/cuello_tejido/cuello-6.jpg',
    serviceSlug: 'bordado-computarizado-prendas',
  },
  {
    id: 'vinil',
    name: 'VINIL TEXTIL TERMOFIJADO',
    badge: 'CORTE VECTORIAL DE ALTO CONTRASTE',
    thermalFact: '150 °C · Adhesivo térmico industrial',
    headline: 'Acabados Especiales: Metálicos, Mates y Reflectivos',
    description: 'Películas de poliuretano de alta gama cortadas con cuchilla micrométrica para números deportivos, logotipos monocromáticos limpios y acabados texturizados de máximo contraste.',
    compatibleProducts: ['Prendas Deportivas', 'Uniformes de Equipo', 'Gorras', 'Bolsos Textiles'],
    image: '/assets/telas/ajustadas/ajustada-4.jpg',
    serviceSlug: 'impresion-dtf-por-metro',
  },
];

export const TechniquesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTech = TECHNIQUES_DATA[activeIdx] || TECHNIQUES_DATA[0];

  return (
    <section id="tecnicas" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.32em] font-semibold">
            05 / PROCESOS DE TALLER
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter">
            THE TECHNIQUES
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D0CFC9] leading-relaxed font-normal">
            &ldquo;Química textil, curvas térmicas y costura de precisión.&rdquo;
          </p>
        </div>

        <Link
          href="/servicios"
          className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#F4F1EA] flex items-center gap-2 transition-colors self-start md:self-auto"
        >
          <span>Ver todos los servicios de maquila</span>
          <span>→</span>
        </Link>
      </div>

      {/* Vertical Editorial Process Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Technique Image with Fade Reveal (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden bg-[#141419] border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={activeTech.image}
                alt={activeTech.headline}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-6 left-6 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30 rounded-xs">
            {activeTech.badge}
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md p-4 border border-white/10 rounded-xs">
            <span className="text-[#C8A96E] font-bold">{activeTech.thermalFact}</span>
            <span className="text-[#A0A0A5] text-[11px]">Taller de Producción Valledupar</span>
          </div>
        </div>

        {/* Right Column: Vertical Technique Navigation & Story (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Vertical Menu Tabs */}
          <div className="flex flex-col border-b border-white/10">
            {TECHNIQUES_DATA.map((tech, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`py-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest border-t border-white/10 transition-all text-left cursor-pointer group ${
                    isActive
                      ? 'text-[#C8A96E] font-bold pl-3 border-l-2 border-l-[#C8A96E]'
                      : 'text-[#A0A0A5] hover:text-[#F4F1EA] hover:pl-2'
                  }`}
                >
                  <span>{tech.name}</span>
                  <span className="text-[11px] opacity-60 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Active Technique Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight leading-snug">
              {activeTech.headline}
            </h3>

            <p className="text-sm text-[#D0CFC9] leading-relaxed font-light">
              {activeTech.description}
            </p>

            {/* Compatible Garments */}
            <div className="pt-4 flex flex-col gap-2 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-wider text-[#A0A0A5]">Prendas y Sustratos Compatibles:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeTech.compatibleProducts.map((prod) => (
                  <span key={prod} className="bg-[#141419] px-2.5 py-1 border border-white/10 text-[#F4F1EA] text-[11px] rounded-xs">
                    {prod}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/servicios/${activeTech.serviceSlug}`}
                className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#F4F1EA] font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <span>Cotizar servicio de {activeTech.name.split('&')[0].trim()}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};


