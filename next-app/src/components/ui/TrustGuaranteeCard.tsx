'use client';

import React from 'react';

export interface TrustGuaranteeCardProps {
  compact?: boolean;
  className?: string;
}

const GUARANTEES = [
  {
    step: '1',
    title: 'Muestra Virtual Previa',
    description:
      'Montaje digital 100% fiel enviado por WhatsApp para tu visto bueno antes de cortar o estampar.',
    icon: (
      <svg className="w-4 h-4 text-[#C8A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Control de Calidad Prenda por Prenda',
    description:
      'Revisión minuciosa de costuras, bordados Wilcom y fijación térmica de estampados.',
    icon: (
      <svg className="w-4 h-4 text-[#C8A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Guía Asegurada a Toda Colombia',
    description:
      'Despacho con Servientrega o Interrapidísimo con número de seguimiento en tiempo real.',
    icon: (
      <svg className="w-4 h-4 text-[#C8A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

export const TrustGuaranteeCard: React.FC<TrustGuaranteeCardProps> = ({
  compact = false,
  className = '',
}) => {
  if (compact) {
    return (
      <div className={`p-3.5 bg-[#12141A] border border-white/10 rounded-xl flex flex-col gap-2.5 ${className}`}>
        <div className="flex items-center gap-2 text-[#C8A96E] font-sans font-bold text-xs uppercase tracking-wider">
          <span className="text-sm">🛡️</span>
          <span>Garantía y Confianza Isaías</span>
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs">
          {GUARANTEES.map((g) => (
            <div key={g.step} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                {g.icon}
              </span>
              <div className="leading-tight">
                <span className="font-semibold text-[#F4F1EA] block text-[11px]">
                  {g.title}
                </span>
                <span className="text-[10px] text-[#A0A0A5]">
                  {g.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`p-5 sm:p-6 bg-[#0E1015] border border-white/10 rounded-2xl shadow-xl flex flex-col gap-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#C8A96E]/15 border border-[#C8A96E]/30 flex items-center justify-center text-sm">
            🛡️
          </div>
          <div>
            <h4 className="font-sans font-bold text-sm sm:text-base text-[#F4F1EA] tracking-tight">
              Garantía y Confianza en 3 Pasos
            </h4>
            <span className="text-xs text-[#A0A0A5] font-light">
              Tu pedido 100% protegido desde la aprobación digital hasta tus manos
            </span>
          </div>
        </div>
        <span className="hidden sm:inline-block px-2.5 py-1 bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-full text-[10px] font-mono font-bold text-[#C8A96E] uppercase tracking-wider">
          Compra Segura
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
        {GUARANTEES.map((g) => (
          <div
            key={g.step}
            className="p-3.5 bg-[#14151C] border border-white/5 rounded-xl flex flex-col gap-2 hover:border-[#C8A96E]/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-lg bg-[#0C0D10] border border-white/10 flex items-center justify-center shadow-inner">
                {g.icon}
              </span>
              <span className="font-mono text-xs font-bold text-[#C8A96E]/60">
                0{g.step}
              </span>
            </div>

            <h5 className="font-sans font-bold text-xs text-[#F4F1EA]">
              {g.title}
            </h5>

            <p className="font-sans text-[11px] text-[#A0A0A5] leading-relaxed">
              {g.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
