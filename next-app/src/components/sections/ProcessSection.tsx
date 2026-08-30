'use client';

import React from 'react';

const TIMELINE_STEPS = [
  {
    num: '01',
    title: 'IDEA',
    tag: 'DISEÑO O CONCEPTO',
    description: 'Envías tu logotipo, ilustración o concepto gráfico en cualquier formato (vectorial, PNG, PDF o boceto).',
  },
  {
    num: '02',
    title: 'CONFIGURA',
    tag: 'MATERIA & TALLAS',
    description: 'Eliges la prenda, el sustrato textil (Spandex 220g, Piqué, Qatar) y la distribución de tallas de tu pedido.',
  },
  {
    num: '03',
    title: 'PRODUCE',
    tag: 'OFICIO TÉCNICO',
    description: 'Curado térmico DTF a 160 °C, ponchado computarizado Wilcom 3D o sublimación fotográfica 4K en Valledupar.',
  },
  {
    num: '04',
    title: 'ENTREGA',
    tag: 'PUNTO FÍSICO O ENVÍO',
    description: 'Entrega directa en nuestro taller físico en Valledupar o despacho con guía asegurada a todo el país.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="proceso" className="wrap py-24 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">08</span>
            <span>/</span>
            <span>METODOLOGÍA · DE LA IDEA A LA PRENDA</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            De la Idea a la Prenda Terminada
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Un flujo lineal, transparente y sin fricción técnica.
          </p>
        </div>

        <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-widest self-start md:self-auto">
          TIEMPO ÁGIL DE RESPUESTA
        </span>
      </div>

      {/* Minimalist Connected Editorial Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {TIMELINE_STEPS.map((step, idx) => (
          <div
            key={step.num}
            className="flex flex-col gap-5 p-6 bg-[#0e0e11] border border-white/10 rounded-sm relative group hover:border-[#C8A96E]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-4xl font-extrabold text-[#C8A96E] tracking-tight">
                {step.num}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#A0A0A5] bg-black/60 px-2.5 py-1 rounded-xs border border-white/5">
                {step.tag}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A5] leading-relaxed font-light">
                {step.description}
              </p>
            </div>

            {/* Connection indicator */}
            {idx < TIMELINE_STEPS.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#C8A96E] font-mono font-bold text-sm">
                →
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

