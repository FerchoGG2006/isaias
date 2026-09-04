'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SensoryMaterial {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  sensoryQuote: string;
  description: string;
  tactilePillars: string[];
  densityGrammage: string;
  thermalSpec: string;
  image: string;
}

const SENSORY_MATERIALS: SensoryMaterial[] = [
  {
    id: 'piel-durazno',
    index: '01 / 04',
    name: 'Piel de Durazno Spandex',
    subtitle: 'TACTO ATERCIOPELADO & MÁXIMA SUAVIDAD',
    sensoryQuote: '«Suave al roce, fresca todo el día y se adapta a tu cuerpo sin apretar.»',
    description: 'Tela de 220 gramos de grosor ideal que no se transparenta. Su acabado suave tipo piel de durazno ofrece una sensación de comodidad única para camisetas y vestidos.',
    tactilePillars: ['Tela gruesa de 220 g/m² que no se trasluce', 'Elasticidad en 4 direcciones que no pierde la horma', 'No genera motas ni bolitas con el uso'],
    densityGrammage: '220 g/m² Grosor Premium',
    thermalSpec: 'Suave & Elástica',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
  },
  {
    id: 'dtf-reflectivo-mat',
    index: '02 / 04',
    name: 'Estampado Reflectivo',
    subtitle: 'ALTA VISIBILIDAD & BRILLO DE NOCHE',
    sensoryQuote: '«Discreto y elegante de día, brillante e impactante de noche.»',
    description: 'Estampado especial que refleja la luz directa en la oscuridad. Perfecto para marcas que buscan destacar o para prendas deportivas y de seguridad vial.',
    tactilePillars: ['Se estira junto con la tela sin romperse', 'Refleja la luz de carros y cámaras', 'Resistente a más de 50 lavadas'],
    densityGrammage: 'Reflectividad de Alta Intensidad',
    thermalSpec: 'Flexible & Duradero',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  },
  {
    id: 'bordado-wilcom-mat',
    index: '03 / 04',
    name: 'Bordado en Relieve 3D',
    subtitle: 'PUNTADAS DE PRECISIÓN & ALGODÓN PIQUÉ',
    sensoryQuote: '«Un acabado formal y elegante que dura toda la vida de la prenda.»',
    description: 'Miles de puntadas en hilo brillante sobre tela polo piqué o gorras. Aporta presencia ejecutiva y formalidad a la imagen de tu empresa o marca.',
    tactilePillars: ['Bordado con relieve que resalta tu logotipo', 'Hilos brillantes resistentes a la decoloración', 'Base ideal en camisas polo y gorras'],
    densityGrammage: 'Hilo de Alta Resistencia',
    thermalSpec: 'Duración Permanente',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
  },
  {
    id: 'sublimacion-4k-mat',
    index: '04 / 04',
    name: 'Sublimación Digital 4K',
    subtitle: 'COLOR TOTAL & CERO TACTO',
    sensoryQuote: '«El diseño forma parte de la tela: nunca se despega ni se borra.»',
    description: 'Impresión digital donde la tinta se funde con la tela deportiva o artículos como pocillos y termos. Permite fotos y degradados en colores súper vivos.',
    tactilePillars: ['Fotografías y colores vivos sin límite', 'Prendas 100% frescas y transpirables', 'No se destiñe con el sol ni el sudor'],
    densityGrammage: 'Color Fotográfico',
    thermalSpec: '100% Transpirable',
    image: '/assets/telas/qatar/qatar-2.jpg',
  },
];

export function MaterialExplorer() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeMaterial = SENSORY_MATERIALS[selectedIdx] || SENSORY_MATERIALS[0];

  return (
    <section id="materiales" className="wrap py-10 sm:py-14 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-baseline gap-4 mb-1">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
              TEXTURA & CALIDAD
            </span>
          </div>
          <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight">
            Telas & Materiales.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Sustratos seleccionados y probados para resistencia térmica y confort.
          </p>
        </div>

        {/* Sensory Switcher Typographic Tabs */}
        <nav className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 scrollbar-none text-xs font-sans tracking-[0.2em] uppercase">
          {SENSORY_MATERIALS.map((mat, idx) => {
            const isActive = idx === selectedIdx;
            const shortLabel = mat.name.split(' ')[0] + (mat.name.includes('Spandex') ? ' Spandex' : mat.name.includes('Reflectivo') ? ' Reflectivo' : mat.name.includes('3D') ? ' Bordado' : ' 4K');
            return (
              <button
                key={mat.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`relative py-2 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#F4F1EA] font-semibold'
                    : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                }`}
              >
                <span>{shortLabel}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A96E]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Tactile Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Texture Stage with Real Fabric Photo (7 Cols) */}
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-white/10 bg-[#141419] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMaterial.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={activeMaterial.image}
                alt={activeMaterial.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/40 to-[#0C0D10]/60" />
            </motion.div>
          </AnimatePresence>

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
            <span className="uppercase tracking-widest text-[#C8A96E] font-medium bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
              {activeMaterial.subtitle}
            </span>
            <span className="text-[#F4F1EA] bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 font-light">
              {activeMaterial.densityGrammage}
            </span>
          </div>

          {/* Center Quote Box */}
          <div className="relative z-10 my-auto py-6 text-center max-w-lg mx-auto bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-xs border border-white/10">
            <p className="font-serif italic text-lg sm:text-2xl text-[#F4F1EA] leading-relaxed">
              {activeMaterial.sensoryQuote}
            </p>
            <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-widest block mt-3 font-medium">
              Sensación al Tacto
            </span>
          </div>

          {/* Bottom Indicators */}
          <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#8A8A92] bg-black/70 px-4 py-2 rounded-xs font-mono">
            <span className="text-[#F4F1EA] font-medium">{activeMaterial.name}</span>
            <span className="text-[#C8A96E] font-semibold">{activeMaterial.thermalSpec}</span>
          </div>

        </div>

        {/* Right Column: Tactile Description & Pillars (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] font-medium">
              {activeMaterial.index}
            </span>
            <h3 className="font-serif font-normal text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
              {activeMaterial.name}
            </h3>
            <p className="font-sans text-sm text-[#8A8A92] leading-relaxed font-light mt-1">
              {activeMaterial.description}
            </p>
          </div>

          {/* Tactile Pillars */}
          <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] font-semibold">
              Ventajas Principales
            </span>
            <ul className="flex flex-col gap-2.5">
              {activeMaterial.tactilePillars.map((pillar, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs text-[#F4F1EA] font-sans">
                  <span className="w-5 h-5 rounded-xs bg-[#141419] border border-[#C8A96E]/30 text-[#C8A96E] flex items-center justify-center font-mono text-[10px] shrink-0 font-bold">
                    ✓
                  </span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality badge */}
          <div className="p-4 bg-[#141419] border border-white/10 rounded-xs flex items-center justify-between text-xs text-[#8A8A92]">
            <div className="flex items-center gap-2">
              <span className="text-[#C8A96E]">★</span>
              <span className="text-[#F4F1EA] font-light">Telas Seleccionadas y Probadas en Taller</span>
            </div>
            <span className="font-mono text-[#C8A96E] font-bold uppercase tracking-wider">Calidad 1A</span>
          </div>
        </div>

      </div>

    </section>
  );
}
