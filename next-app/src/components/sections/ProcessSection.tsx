'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section className="wrap py-20 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.25em] font-semibold">
          <span className="opacity-60">05</span>
          <span>/</span>
          <span>FLUJO DE TRABAJO & PEDIDO</span>
        </div>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
          ¿Cómo Funciona tu Pedido?
        </h2>
        <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
          Un proceso transparente y ágil desde tu idea inicial hasta la entrega final en Valledupar o despacho nacional.
        </p>
      </div>

      {/* 4 Steps Timeline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.num}
            className="bg-[#121216] border border-white/10 rounded-sm p-6 flex flex-col justify-between gap-6 relative group hover:border-[#C8A96E]/40 transition-all duration-300 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-bold text-[#C8A96E]">
                  {step.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]/60" />
              </div>

              <h4 className="font-sans font-bold text-lg text-[#F4F1EA] mb-2 group-hover:text-[#C8A96E] transition-colors">
                {step.title}
              </h4>

              <p className="text-xs text-[#A0A0A5] leading-relaxed font-light">
                {step.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 font-mono text-[10px] uppercase tracking-wider text-[#C8A96E]/80">
              Paso verificado
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
