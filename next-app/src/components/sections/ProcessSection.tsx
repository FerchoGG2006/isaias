'use client';

import React from 'react';

const STORY_STEPS = [
  {
    num: '01',
    title: 'IDEA',
    subtitle: 'Concepto & Archivo',
    narrative: 'Envías tu logotipo, ilustración o concepto gráfico en cualquier formato vectorial o digital. Nosotros analizamos compatibilidad de color y trazado.',
  },
  {
    num: '02',
    title: 'CONFIGURACIÓN',
    subtitle: 'Materia & Silueta',
    narrative: 'Seleccionas el corte (ajustada, polo, hoodie) y la materia prima (Piel de durazno 220g, Piqué, Qatar) definiendo técnica y distribución de tallas.',
  },
  {
    num: '03',
    title: 'PRODUCCIÓN',
    subtitle: 'Oficio en Taller',
    narrative: 'Curado térmico DTF a 160 °C, ponchado matricial Wilcom 3D o sublimación 4K a 200 °C ejecutados bajo estricto control de calidad en Valledupar.',
  },
  {
    num: '04',
    title: 'ENTREGA',
    subtitle: 'Prenda en Mano',
    narrative: 'Retiro presencial en nuestro taller físico o despacho nacional con empaque individual y guía asegurada. Lista para vestir o comercializar.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="proceso" className="wrap py-24 sm:py-32 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-baseline gap-4 mb-1">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
              ETAPAS DE TRABAJO
            </span>
          </div>
          <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight">
            Cómo Trabajamos.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Cuatro pasos sencillos desde tu idea hasta la prenda terminada en tus manos.
          </p>
        </div>

        <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-widest self-start md:self-auto font-medium">
          [ PROCESO EN TALLER ]
        </span>
      </div>

      {/* Continuous Horizontal Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 border-t border-white/10 pt-10">
        {STORY_STEPS.map((step) => (
          <div key={step.num} className="flex flex-col gap-4 group">
            
            {/* Step Header */}
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-4xl sm:text-5xl font-bold text-[#C8A96E] tracking-tight group-hover:translate-x-1 transition-all">
                {step.num}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8A8A92]">
                {step.subtitle}
              </span>
            </div>

            {/* Step Content */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
              <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#F4F1EA] tracking-tight group-hover:text-[#C8A96E] transition-colors">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#8A8A92] leading-relaxed font-light">
                {step.narrative}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
