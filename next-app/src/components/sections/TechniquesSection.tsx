'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TECHNIQUES } from '@/data/techniques';

interface TechniqueMedia {
  id: string;
  image: string;
  badge: string;
  temperature: string;
  headline: string;
  narrative: string;
  substrate: string;
  durability: string;
}

const TECHNIQUE_STORIES: TechniqueMedia[] = [
  {
    id: 'dtf-reflectivo',
    image: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg',
    badge: 'ALTA VISIBILIDAD & RETROREFLEXIÓN',
    temperature: '160 °C · Curado Exacto',
    headline: 'DTF Reflectivo: Visibilidad que No Se Quiebra',
    narrative: 'Partículas micro-prismáticas que rebotan la luz de noche con máxima intensidad. Curado térmico industrial a 160 °C que funde la poliamida en la fibra elástica sin perder tacto suave.',
    substrate: 'Piel de durazno spandex, algodón y mezclas sintéticas',
    durability: '50+ lavadas sin agrietamiento ni pérdida de brillo',
  },
  {
    id: 'dtf-full-color',
    image: '/assets/telas/ajustadas/ajustada-3.jpg',
    badge: 'DETALLE VECTORIAL & DEGRADADOS',
    temperature: '160 °C · Termofijado',
    headline: 'DTF Full Color: Fidelidad Fotográfica Directa',
    narrative: 'Impresión digital directa a film con base de tinta blanca de alta densidad. Reproduce líneas de 0.2 mm, degradados tonales suaves y colores vibrantes sobre cualquier color de tela.',
    substrate: 'Telas claras, oscuras y mezclas elásticas',
    durability: 'Elasticidad integrada con el movimiento de la prenda',
  },
  {
    id: 'bordado-computarizado',
    image: '/assets/telas/cuello_tejido/cuello-6.jpg',
    badge: 'PONCHADO COMPUTARIZADO WILCOM',
    temperature: 'Costura de Alta Densidad',
    headline: 'Bordado 3D Wilcom: Volumen Tridimensional Permanente',
    narrative: 'Matrices de puntadas diseñadas en software Wilcom e hilatura de poliéster brillante de alto calibre. Realces en relieve 3D sobre pecheras de polo piqué y frentes de gorras.',
    substrate: 'Algodón piqué, dril pesado y sargas corporativas',
    durability: 'Inalterable de por vida ante uso y lavado rudo',
  },
  {
    id: 'sublimacion-fotografica',
    image: '/assets/img-12.jpg',
    badge: 'RESOLUCIÓN 4K POR VAPORIZACIÓN',
    temperature: '200 °C · Presión Neumática',
    headline: 'Sublimación 4K: Color Integrado a Nivel Molecular',
    narrative: 'Transferencia térmica gaseosa a 200 °C donde el pigmento pasa a formar parte íntima del polímero sintético. Cero tacto plástico, 100% transpirable e indeleble.',
    substrate: 'Poliéster transpirable Qatar, tazas cerámicas y termos',
    durability: 'Resistencia total a la intemperie y rayos UV',
  },
];

export const TechniquesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('dtf-reflectivo');

  const activeStory = TECHNIQUE_STORIES.find((t) => t.id === activeId) || TECHNIQUE_STORIES[0];

  return (
    <section id="tecnicas" className="wrap py-24 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">03</span>
            <span>/</span>
            <span>THE PROCESS OF PRINT · OFICIO TÉCNICO</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            Técnicas de Fijación Térmica
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Cada material requiere una temperatura, calibración de presión y química específica para garantizar longevidad.
          </p>
        </div>

        <Link
          href="/servicios"
          className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#F4F1EA] flex items-center gap-2 transition-colors self-start md:self-auto"
        >
          <span>Ver maquila de servicios</span>
          <span>→</span>
        </Link>
      </div>

      {/* Interactive Split-Screen Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#0d0d10] border border-white/10 rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl">
        
        {/* Left Column: Macro Finished Piece Photo (6 Cols) */}
        <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden bg-[#141419] border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={activeStory.image}
                alt={activeStory.headline}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30 rounded-xs">
            {activeStory.badge}
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between font-mono text-xs text-[#F4F1EA] bg-black/70 backdrop-blur-md p-3 border border-white/10 rounded-xs">
            <span className="text-[#C8A96E] font-bold">{activeStory.temperature}</span>
            <span className="text-[#A0A0A5] text-[11px] truncate max-w-[200px]">{activeStory.substrate}</span>
          </div>
        </div>

        {/* Right Column: Interactive Technique Selector & Story (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Technique Pills Tab Bar */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/10">
            {TECHNIQUES.map((tech) => {
              const isSelected = tech.id === activeId || tech.slug === activeId;
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => setActiveId(tech.id)}
                  className={`px-3.5 py-2 rounded-xs font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C8A96E] text-[#070708] font-bold shadow-lg shadow-[#C8A96E]/10'
                      : 'bg-[#141419] text-[#A0A0A5] border border-white/10 hover:border-[#C8A96E]/40 hover:text-[#F4F1EA]'
                  }`}
                  aria-pressed={isSelected}
                >
                  {tech.name.replace('Estampación ', '').replace('Impresión ', '')}
                </button>
              );
            })}
          </div>

          {/* Active Story Narrative */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight leading-snug">
              {activeStory.headline}
            </h3>

            <p className="text-sm text-[#D0CFC9] leading-relaxed font-light">
              {activeStory.narrative}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5 font-mono text-xs">
              <div className="flex flex-col gap-1 p-3 bg-[#141419] border border-white/5 rounded-xs">
                <span className="text-[10px] uppercase text-[#C8A96E] font-semibold">Sustrato Recomendado</span>
                <span className="text-[#F4F1EA] text-[11px]">{activeStory.substrate}</span>
              </div>
              <div className="flex flex-col gap-1 p-3 bg-[#141419] border border-white/5 rounded-xs">
                <span className="text-[10px] uppercase text-[#C8A96E] font-semibold">Durabilidad en Taller</span>
                <span className="text-[#F4F1EA] text-[11px]">{activeStory.durability}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href={`/servicios/${activeId === 'dtf-reflectivo' || activeId === 'dtf-full-color' ? 'impresion-dtf-por-metro' : activeId === 'bordado-computarizado' ? 'bordado-computarizado-prendas' : 'sublimacion-fotografica-maquila'}`}
                className="font-mono text-xs uppercase tracking-wider text-[#C8A96E] hover:text-[#F4F1EA] font-semibold flex items-center gap-2 group"
              >
                <span>Cotizar esta técnica en maquila</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

