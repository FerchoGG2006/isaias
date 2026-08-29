'use client';

import React from 'react';
import Link from 'next/link';
import { TECHNIQUES } from '@/data/techniques';

export const TechniquesSection: React.FC = () => {
  return (
    <section id="tecnicas" className="wrap py-16 sm:py-24 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="section-head mb-0">
          <span className="eyebrow">OFICIO Y PRECISIÓN TÉRMICA</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F4F1EA] tracking-tight">
            Técnicas de Personalización
          </h2>
          <p className="text-[#A0A0A5] text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
            Curado térmico exacto a 160 °C, sublimación molecular a 200 °C y bordados 3D programados en software Wilcom.
          </p>
        </div>

        <Link
          href="/servicios"
          className="font-mono text-xs uppercase tracking-widest text-[#C8A96E] hover:underline flex items-center gap-1.5 self-start sm:self-auto"
        >
          <span>Ver todos los servicios</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECHNIQUES.map((tech) => (
          <div
            key={tech.id}
            className="group bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/50 rounded-sm p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96E]/10"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xs bg-[#141419] border border-white/10 flex items-center justify-center text-[#C8A96E] group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={tech.iconSvg} />
                  </svg>
                </div>

                {tech.curingTemperature && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8A96E] bg-black/60 px-2.5 py-1 border border-[#C8A96E]/30 rounded-xs">
                    {tech.curingTemperature}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans font-bold text-lg text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-[#A0A0A5] leading-relaxed">
                  {tech.shortDescription}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#A0A0A5]">
              <span>Mínimo: {tech.minUnits} {tech.minUnits === 1 ? 'unidad' : 'unidades'}</span>
              <span className="text-[#C8A96E]">Estudio Valledupar</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
