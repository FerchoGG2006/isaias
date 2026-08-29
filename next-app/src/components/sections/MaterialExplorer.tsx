'use client';

import React from 'react';
import Image from 'next/image';
import { MacroViewer } from '@/components/catalog/MacroViewer';
import { materialStories } from '@/data/materials';

export function MaterialExplorer() {
  const macroMaterial = materialStories[0]; // Piel de durazno spandex 220g

  return (
    <section id="materiales" className="wrap py-20 border-t border-white/10">
      
      {/* Section Head */}
      <div className="flex flex-col gap-2 max-w-2xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.25em] font-semibold">
          <span className="opacity-60">01</span>
          <span>/</span>
          <span>CIENCIA TEXTIL & MATERIA PRIMA</span>
        </div>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
          Inspección de Materiales en Alta Definición
        </h2>
        <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
          Una lectura pausada de las materias primas, gramajes y acabados textiles procesados en nuestro taller de Valledupar.
        </p>
      </div>

      {/* Interactive 10X Macro Inspection Shell */}
      <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-10 mb-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Technical Narrative (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-[#C8A96E]/10 border border-[#C8A96E]/30 px-3 py-1 rounded-xs w-fit">
              INSPECCIÓN INTERACTIVA · 10X
            </span>
            
            <h3 className="font-sans font-bold text-2xl text-[#F4F1EA] tracking-tight">
              Piel de Durazno Spandex · 220 g
            </h3>
            
            <p className="text-xs sm:text-sm text-[#A0A0A5] leading-relaxed">
              Mueve el cursor o toca la superficie para activar el lente macroscópico 10X. Observa la uniformidad del tejido peinado, la ausencia de motas y la densidad de 220 gramos diseñada para fijación térmica DTF y confort ergonómico.
            </p>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 font-mono text-[10px] text-[#C8A96E]">
              <span className="bg-black/60 px-2.5 py-1 border border-white/10 rounded-xs">
                ✓ 220 g/m² densidad
              </span>
              <span className="bg-black/60 px-2.5 py-1 border border-white/10 rounded-xs">
                ✓ Microfibra esmerilada
              </span>
              <span className="bg-black/60 px-2.5 py-1 border border-white/10 rounded-xs">
                ✓ Elasticidad 4-way
              </span>
            </div>
          </div>

          {/* Right Column: 10X Loupe Viewer (7 Cols) */}
          <div className="lg:col-span-7">
            <MacroViewer
              image={macroMaterial.image}
              alt="Inspección macroscópica de Piel de durazno spandex 220g"
            />
          </div>

        </div>
      </div>

      {/* 3 Structured Material Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materialStories.map((story) => (
          <article
            key={story.id}
            className="group bg-[#121216] border border-white/10 hover:border-[#C8A96E]/50 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
          >
            <div className="relative w-full aspect-[16/10] bg-[#0d0d10] overflow-hidden border-b border-white/10">
              <Image
                src={story.image}
                alt={story.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-2.5 py-1 border border-[#C8A96E]/30 rounded-xs">
                {story.eyebrow}
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#C8A96E] tracking-widest block mb-1">
                  {story.index}
                </span>
                <h4 className="font-sans font-bold text-base sm:text-lg text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  {story.title}
                </h4>
                <ul className="mt-3 flex flex-col gap-1.5 font-mono text-xs text-[#A0A0A5]">
                  {story.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-1.5">
                      <span className="text-[#C8A96E] shrink-0">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#A0A0A5]">
                {story.technical.map((tech) => (
                  <span key={tech} className="bg-black/40 px-2 py-0.5 border border-white/5 rounded-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
