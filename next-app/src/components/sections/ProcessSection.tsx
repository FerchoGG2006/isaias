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
    <section id="proceso" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Cómo Trabajamos
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Cuatro pasos sencillos desde tu idea hasta la prenda terminada en tus manos.
          </p>
        </div>

        <span className="text-xs text-[#3B82F6] uppercase tracking-wider self-start md:self-auto font-semibold">
          Proceso en Taller
        </span>
      </div>

      {/* Continuous Horizontal Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 border-t border-[#94A3B8]/15 pt-10">
        {STORY_STEPS.map((step) => (
          <div key={step.num} className="flex flex-col gap-4 group">
            
            {/* Step Header */}
            <div className="flex items-baseline justify-between">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#3B82F6] tracking-tight group-hover:translate-x-1 transition-all">
                {step.num}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
                {step.subtitle}
              </span>
            </div>

            {/* Step Content */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-[#94A3B8]/15">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#FFFFFF] tracking-tight group-hover:text-[#3B82F6] transition-colors">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                {step.narrative}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};


