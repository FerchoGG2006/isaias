'use client';

import React from 'react';

const STORY_STEPS = [
  {
    num: '01',
    title: 'ELIGES TU PRENDA',
    subtitle: 'Modelo & Color',
    narrative: 'Exploras nuestro catálogo y seleccionas la camiseta, polo, gorra o accesorio que necesitas para ti, tu negocio o tu familia.',
  },
  {
    num: '02',
    title: 'NOS ENVÍAS TU IDEA',
    subtitle: 'Foto o Logotipo',
    narrative: 'Nos envías tu foto, imagen o logo directamente por WhatsApp. Si tienes dudas con el diseño, te ayudamos a cuadrarlo sin costo.',
  },
  {
    num: '03',
    title: 'CONFECCIÓN Y ESTAMPADO',
    subtitle: 'Trabajo en Taller',
    narrative: 'Estampamos o bordamos tus prendas en nuestro taller de Valledupar con acabados de alta duración que resisten múltiples lavadas.',
  },
  {
    num: '04',
    title: 'ENTREGA RÁPIDA',
    subtitle: 'En tus Manos',
    narrative: 'Puedes retirar en nuestro taller en Valledupar o te lo enviamos a tu casa o empresa a cualquier parte de Colombia.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="proceso" className="wrap py-10 sm:py-14 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-baseline gap-4 mb-1">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] font-semibold">
              PASO A PASO
            </span>
          </div>
          <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight">
            Cómo Trabajamos.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Cuatro pasos sencillos desde tu idea hasta la prenda lista en tus manos.
          </p>
        </div>

        <span className="font-sans text-xs text-[#C8A96E] uppercase tracking-wider self-start md:self-auto font-medium">
          Atención Directa & Rápida
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
