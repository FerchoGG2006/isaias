'use client';

import React, { useState } from 'react';
import { MacroViewer } from '@/components/catalog/MacroViewer';
import { materialStories } from '@/data/materials';

export function MaterialExplorer() {
  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState(0);
  const activeMaterial = materialStories[selectedMaterialIndex] || materialStories[0];

  return (
    <section id="materiales" className="wrap py-24 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">03</span>
            <span>/</span>
            <span>MATERIA PRIMA · FEEL THE MATERIAL (10X)</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            Siente la Materia Prima
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Gramajes densos, hilatura peinada y confort táctil. Usa el lente macro 10X para inspeccionar la fibra real.
          </p>
        </div>

        {/* Material Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs uppercase tracking-wider">
          {materialStories.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterialIndex(idx)}
              className={`px-3.5 py-2 rounded-xs border transition-all cursor-pointer whitespace-nowrap ${
                idx === selectedMaterialIndex
                  ? 'bg-[#C8A96E] border-[#C8A96E] text-[#070708] font-bold shadow-md'
                  : 'bg-[#141419] border-white/10 text-[#A0A0A5] hover:text-[#F4F1EA] hover:border-white/30'
              }`}
            >
              {mat.title.split('·')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Protagonist 10X Tactile Stage */}
      <div className="bg-[#0e0e11] border border-white/10 rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sensory Narrative (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-[#C8A96E]/10 border border-[#C8A96E]/30 px-3 py-1 rounded-xs">
                INSPECCIÓN 10X · TACTO
              </span>
              <span className="font-mono text-xs text-[#A0A0A5]">{activeMaterial.index}</span>
            </div>
            
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight leading-tight">
              {activeMaterial.title}
            </h3>
            
            <p className="text-sm text-[#D0CFC9] leading-relaxed font-light">
              Mueve el cursor o desliza sobre el lienzo para activar el aumento 10X. Aprecia la continuidad del hilo, la suavidad al contacto y la respuesta térmica de la base.
            </p>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/5 font-mono text-xs text-[#A0A0A5]">
              {activeMaterial.points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#C8A96E] font-bold">✓</span>
                  <span className="text-[#F4F1EA]">{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeMaterial.technical.map((tech) => (
                <span key={tech} className="font-mono text-[10px] bg-black/60 text-[#C8A96E] px-2.5 py-1 border border-white/10 rounded-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 10X Loupe Viewer (7 Cols) */}
          <div className="lg:col-span-7">
            <MacroViewer
              key={activeMaterial.id}
              image={activeMaterial.image}
              alt={`Inspección macroscópica de ${activeMaterial.title}`}
            />
          </div>

        </div>
      </div>

    </section>
  );
}

