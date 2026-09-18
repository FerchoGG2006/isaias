'use client';

import React, { useEffect } from 'react';

export interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SizeRow {
  size: string;
  chestCm: number;
  lengthCm: number;
  shoulderCm: number;
}

const SIZES_DATA: SizeRow[] = [
  { size: 'S', chestCm: 50, lengthCm: 70, shoulderCm: 44 },
  { size: 'M', chestCm: 52, lengthCm: 72, shoulderCm: 46 },
  { size: 'L', chestCm: 54, lengthCm: 74, shoulderCm: 48 },
  { size: 'XL', chestCm: 56, lengthCm: 76, shoulderCm: 50 },
  { size: 'XXL', chestCm: 58, lengthCm: 78, shoulderCm: 52 },
];

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-guide-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#0E1015] border border-[#C8A96E]/30 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh] text-[#F4F1EA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📐</span>
              <h3 id="size-guide-title" className="font-sans font-bold text-lg sm:text-xl text-[#F4F1EA] tracking-tight">
                Guía de Medidas y Tallas (cm)
              </h3>
            </div>
            <p className="font-sans text-xs text-[#A0A0A5] mt-1">
              Medidas estándar de confección nacional para prendas unisex y dotaciones.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#8A8A92] hover:text-[#F4F1EA] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar guía de tallas"
          >
            ✕
          </button>
        </div>

        {/* Horma Note */}
        <div className="my-4 p-3.5 bg-[#14151C] border-l-2 border-[#C8A96E] rounded-r-xl text-xs text-[#D0CFC9] leading-relaxed">
          <p>
            <strong className="text-[#C8A96E]">Horma regular unisex:</strong> Confeccionada en tela fresca piel de durazno que no encoge ni pierde color al lavado. Si prefieres un ajuste holgado (oversize), te sugerimos elegir una talla superior.
          </p>
        </div>

        {/* Table of sizes */}
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#12131A] mb-5">
          <table className="w-full text-left font-sans text-xs">
            <thead>
              <tr className="bg-white/5 text-[#C8A96E] uppercase tracking-wider text-[11px] font-bold border-b border-white/10">
                <th className="py-3 px-4">Talla</th>
                <th className="py-3 px-4">Pecho (Ancho)</th>
                <th className="py-3 px-4">Largo Total</th>
                <th className="py-3 px-4">Hombro a Hombro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#D0CFC9]">
              {SIZES_DATA.map((row) => (
                <tr key={row.size} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 font-bold text-[#F4F1EA] font-mono text-sm">
                    {row.size}
                  </td>
                  <td className="py-3 px-4 font-mono">{row.chestCm} cm</td>
                  <td className="py-3 px-4 font-mono">{row.lengthCm} cm</td>
                  <td className="py-3 px-4 font-mono">{row.shoulderCm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to measure guide */}
        <div className="p-4 bg-[#14151C] border border-white/10 rounded-xl flex flex-col gap-2.5">
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#C8A96E] flex items-center gap-2">
            <span>✂️</span>
            <span>¿Cómo medir una prenda en casa?</span>
          </h4>
          <ul className="text-xs text-[#A0A0A5] flex flex-col gap-2 list-none">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-white/5 text-[#C8A96E] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Coloca una camiseta que te quede bien</strong> extendida sobre una mesa o superficie plana.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-white/5 text-[#C8A96E] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Ancho (Pecho):</strong> Mide en línea recta de axila a axila (a 2 cm debajo de la costura de la manga).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-white/5 text-[#C8A96E] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Largo total:</strong> Mide desde la unión del cuello con el hombro hasta el borde inferior de la prenda.</span>
            </li>
          </ul>
        </div>

        {/* Footer info & CTA */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#8A8A92] text-center sm:text-left">
            ¿Dudas con tu talla? Puedes pedir muestra física o asesoría directa en WhatsApp.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#C8A96E] hover:bg-[#dbbe82] text-[#0C0D10] font-sans font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Entendido, volver a mi prenda
          </button>
        </div>
      </div>
    </div>
  );
};
