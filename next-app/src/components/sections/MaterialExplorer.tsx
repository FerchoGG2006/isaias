'use client';

import React, { useState } from 'react';
import { MacroViewer } from '@/components/catalog/MacroViewer';

interface SensoryMaterial {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  sensoryQuote: string;
  description: string;
  tactilePillars: string[];
  image: string;
}

const SENSORY_MATERIALS: SensoryMaterial[] = [
  {
    id: 'piel-durazno',
    index: '01 / 04',
    name: 'PIEL DE DURAZNO SPANDEX 220G',
    subtitle: 'TACTO ESMERILADO & MICROFIBRA PEINADA',
    sensoryQuote: '«Suave al roce, elástica al cuerpo, indeformable con el uso.»',
    description: 'Microfibra de 220 gramos con acabado esmerilado tipo piel de durazno. Proporciona una caída limpia y una base textil ultra-lisa que recibe la fijación térmica sin crear textura rugosa.',
    tactilePillars: ['220 g/m² densidad pesada', 'Elongación 4-way que acompaña el movimiento', 'Cero motas tras múltiples lavadas'],
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
  },
  {
    id: 'dtf-reflectivo-mat',
    index: '02 / 04',
    name: 'DTF REFLECTIVO 160°C',
    subtitle: 'RETROREFLEXIÓN & CURADO TÉRMICO',
    sensoryQuote: '«Invisible de día, reflectivo en la oscuridad, elástico siempre.»',
    description: 'Polímeros con micro-perlas reflectivas fusionadas a 160 °C sobre la fibra elástica. No se quiebra al estirar la prenda y devuelve destellos de luz intensa ante fuentes directas.',
    tactilePillars: ['Curado térmico exacto a 160 °C', 'Elasticidad idéntica al textil base', '50+ lavadas con reflectividad intacta'],
    image: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg',
  },
  {
    id: 'bordado-wilcom-mat',
    index: '03 / 04',
    name: 'BORDADO 3D WILCOM',
    subtitle: 'RELIEVE TRIDIMENSIONAL & ALGODÓN PIQUÉ',
    sensoryQuote: '«Volumen que se siente al tacto y permanece de por vida.»',
    description: 'Miles de puntadas en hilatura de poliéster brillante de alto calibre sobre algodón piqué estructurado. Los realces tridimensionales 3D aportan presencia y elegancia indiscutible.',
    tactilePillars: ['Ponchado matricial en software Wilcom', 'Relieve 3D con densidad reforzada', 'Base ideal en algodón piqué y dril'],
    image: '/assets/telas/cuello_tejido/cuello-6.jpg',
  },
  {
    id: 'sublimacion-4k-mat',
    index: '04 / 04',
    name: 'SUBLIMACIÓN 4K · 200°C',
    subtitle: 'FUSIÓN MOLECULAR & TRANSPIRABILIDAD',
    sensoryQuote: '«El color no está sobre la tela: es la tela misma.»',
    description: 'Transferencia térmica gaseosa a 200 °C donde el pigmento pasa a formar parte íntima del polímero sintético. Cero tacto plástico, 100% transpirable e indeleble ante la intemperie.',
    tactilePillars: ['Resolución fotográfica 4K', 'Tacto imperceptible y cero sudoración', 'Resistencia total a rayos UV'],
    image: '/assets/img-12.jpg',
  },
];

export function MaterialExplorer() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeMaterial = SENSORY_MATERIALS[selectedIdx] || SENSORY_MATERIALS[0];

  return (
    <section id="materiales" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.32em] font-semibold">
            06 / EXPERIENCIA SENSORIAL
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter">
            FEEL THE MATERIAL
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D0CFC9] leading-relaxed font-normal">
            &ldquo;La textura no se describe. Se siente y se inspecciona.&rdquo;
          </p>
        </div>

        {/* Sensory Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs uppercase tracking-widest">
          {SENSORY_MATERIALS.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                idx === selectedIdx
                  ? 'text-[#C8A96E] border-b border-[#C8A96E] font-bold'
                  : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              [ {mat.name.split(' ')[0]} {mat.name.includes('220G') ? '220G' : mat.name.includes('160°C') ? '160°C' : mat.name.includes('3D') ? '3D' : '4K'} ]
            </button>
          ))}
        </div>
      </div>

      {/* Main Protagonist 10X Tactile Stage */}
      <div className="bg-[#0b0b0e] border border-white/10 rounded-xs p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sensory Narrative (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8A96E] bg-black/60 border border-[#C8A96E]/30 px-3 py-1 rounded-xs">
                INSPECCIÓN 10X · MACRO
              </span>
              <span className="font-mono text-xs text-[#A0A0A5]">{activeMaterial.index}</span>
            </div>
            
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight leading-tight">
              {activeMaterial.name}
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-[#C8A96E]">
              {activeMaterial.sensoryQuote}
            </p>
            
            <p className="text-sm text-[#D0CFC9] leading-relaxed font-light">
              {activeMaterial.description}
            </p>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/10 font-mono text-xs text-[#D0CFC9]">
              {activeMaterial.tactilePillars.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#C8A96E] font-bold">✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 font-mono text-[11px] text-[#A0A0A5]">
              Arrastra el cursor o toca el lienzo para activar el aumento 10X.
            </div>
          </div>

          {/* Right Column: 10X Loupe Viewer (7 Cols) */}
          <div className="lg:col-span-7">
            <MacroViewer
              key={activeMaterial.id}
              image={activeMaterial.image}
              alt={`Inspección macroscópica de ${activeMaterial.name}`}
            />
          </div>

        </div>
      </div>

    </section>
  );
}


