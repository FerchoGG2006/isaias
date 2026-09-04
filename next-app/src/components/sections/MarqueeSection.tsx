import React from 'react';

const ATELIER_MANIFESTO = [
  'HECHO EN VALLEDUPAR',
  'ESTUDIO TEXTIL & MAQUILA',
  'DTF REFLECTIVO A 160°C',
  'BORDADO 3D WILCOM',
  'SUBLIMACIÓN FOTOGRÁFICA 4K',
  'PIEL DE DURAZNO SPANDEX 220G',
  'DOTACIONES & VOLUMEN',
  'PERSONALIZACIÓN DE ALTA COSTURA',
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="w-full bg-[#09090b] border-y border-white/10 py-4 overflow-hidden select-none">
      <div className="flex w-max animate-marquee items-center gap-16 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A96E] font-medium">
        {ATELIER_MANIFESTO.concat(ATELIER_MANIFESTO).concat(ATELIER_MANIFESTO).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]/40" />
          </div>
        ))}
      </div>
    </div>
  );
};


