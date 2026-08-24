import React from 'react';

const TRUST_ITEMS = [
  'ENVÍOS A NIVEL NACIONAL DESDE VALLEDUPAR',
  'CURADO DTF REFLECTIVO A 160°C',
  'CONFECCIÓN SPANDEX 220G DE ALTA DENSIDAD',
  'BORDADO COMPUTARIZADO WILCOM 3D',
  'SUBLIMACIÓN FOTOGRÁFICA 4K EN 200°C',
  'COTIZACIÓN INSTANTÁNEA POR WHATSAPP',
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0d] border-y border-white/10 py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee items-center gap-12 font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
        {TRUST_ITEMS.concat(TRUST_ITEMS).concat(TRUST_ITEMS).map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]/50" />
          </div>
        ))}
      </div>
    </div>
  );
};

