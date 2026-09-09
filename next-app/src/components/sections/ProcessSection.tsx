'use client';

import React from 'react';

const STORY_STEPS = [
  {
    num: '01',
    title: 'Eliges tu prenda',
    subtitle: 'Modelo, tela y color',
    narrative: 'Exploras nuestro catálogo y seleccionas la camiseta, polo, gorra o accesorio que necesitas para ti, tu negocio o tu evento.',
  },
  {
    num: '02',
    title: 'Envías tu diseño o idea',
    subtitle: 'Foto, logo o boceto',
    narrative: 'Nos envías tu foto o logotipo directamente por WhatsApp. Si necesitas ayuda con el diseño o las medidas, te asesoramos sin costo adicional.',
  },
  {
    num: '03',
    title: 'Confección y personalización',
    subtitle: 'Producción en taller',
    narrative: 'Estampamos o bordamos tus prendas en nuestro taller de Valledupar con técnicas de alta resistencia y acabados profesionales.',
  },
  {
    num: '04',
    title: 'Entrega o despacho rápido',
    subtitle: 'Listo en tus manos',
    narrative: 'Puedes recoger tus prendas directamente en nuestro taller en Valledupar o te las enviamos empacadas a cualquier ciudad de Colombia.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="proceso" className="wrap py-14 sm:py-20 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
            Cómo Hacer tu Pedido.
          </h2>
          <p className="font-sans text-sm text-[#8A8A92] leading-relaxed font-light mt-1">
            Cuatro pasos sencillos desde tu idea hasta la prenda lista en tus manos.
          </p>
        </div>

        <span className="font-sans text-xs text-[#C8A96E] uppercase tracking-wider self-start md:self-auto font-medium">
          Atención Directa & Rápida
        </span>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 border-t border-white/10 pt-10">
        {STORY_STEPS.map((step) => (
          <div key={step.num} className="flex flex-col gap-4 group">
            
            {/* Step Header */}
            <div className="flex items-baseline justify-between">
              <span className="font-sans text-3xl sm:text-4xl font-bold text-[#C8A96E] tracking-tight group-hover:translate-x-1 transition-all">
                {step.num}
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-[#8A8A92]">
                {step.subtitle}
              </span>
            </div>

            {/* Step Content */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
              <h3 className="font-sans font-bold text-lg text-[#F4F1EA] tracking-tight group-hover:text-[#C8A96E] transition-colors">
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
