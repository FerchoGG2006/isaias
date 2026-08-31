'use client';

import React, { useState } from 'react';

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
  },
];

export function MaterialExplorer() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeMaterial = SENSORY_MATERIALS[selectedIdx] || SENSORY_MATERIALS[0];

  return (
    <section id="materiales" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Telas & Materiales
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Prendas suaves, frescas y con la mejor textura para tu comodidad diaria.
          </p>
        </div>

        {/* Sensory Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-medium">
          {SENSORY_MATERIALS.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                idx === selectedIdx
                  ? 'bg-[#3B82F6] text-[#FFFFFF] font-semibold shadow-md shadow-[#3B82F6]/25'
                  : 'text-[#94A3B8] hover:text-[#FFFFFF] bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/15'
              }`}
            >
              {mat.name.split(' ')[0]} {mat.name.includes('Spandex') ? 'Spandex' : mat.name.includes('Reflectivo') ? 'Reflectivo' : mat.name.includes('3D') ? 'Bordado' : '4K'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tactile Stage */}
      <div className="bg-[#181D26]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sensory Narrative (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
                Tela Seleccionada
              </span>
              <span className="text-xs text-[#94A3B8] font-medium">{activeMaterial.index}</span>
            </div>
            
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FFFFFF] tracking-tight leading-tight">
              {activeMaterial.name}
            </h3>

            <p className="font-serif italic text-base text-[#E5A910]">
              {activeMaterial.sensoryQuote}
            </p>
            
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed font-light">
              {activeMaterial.description}
            </p>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-[#94A3B8]/15 text-xs text-[#FFFFFF]">
              {activeMaterial.tactilePillars.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#3B82F6] font-bold">✓</span>
                  <span className="text-[#94A3B8] text-xs">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#94A3B8]">
              <span className="bg-[#12151C] px-4 py-2 rounded-full border border-white/10 text-[#E5A910] font-semibold">
                {activeMaterial.densityGrammage}
              </span>
              <span className="bg-[#12151C] px-4 py-2 rounded-full border border-white/10 text-[#3B82F6] font-semibold">
                {activeMaterial.thermalSpec}
              </span>
            </div>
          </div>

          {/* Right Column: Textile Lookbook Frame (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#12151C] to-[#0E1016] shadow-xl p-6 sm:p-8 flex flex-col justify-between group">
            
            <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="text-[#3B82F6] uppercase font-semibold">
                Taller Valledupar
              </span>
              <span className="text-[#E5A910] font-semibold">
                100% Garantizado
              </span>
            </div>

            {/* Central Texture Icon & Title */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#94A3B8]/25 flex items-center justify-center mb-3 bg-[#181D26]/80 backdrop-blur-md shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>

              <span className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-bold">
                Muestra de Tela & Acabado
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-sm font-light">
                Espacio preparado para fotografía de textura en primer plano para apreciar la suavidad de la tela.
              </p>
            </div>

            {/* Bottom Status Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8] pt-3 border-t border-[#94A3B8]/15">
              <span>Telas suaves y frescas</span>
              <span className="text-[#3B82F6] font-semibold">Calidad comprobada</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}


