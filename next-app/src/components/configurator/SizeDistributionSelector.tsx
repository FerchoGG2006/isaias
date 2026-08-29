'use client';

import React from 'react';

export interface SizeDistributionSelectorProps {
  sizes: string[];
  distribution: Record<string, number>;
  onChange: (newDistribution: Record<string, number>, newSum: number) => void;
  targetQuantity: number;
  onTargetQuantityChange: (qty: number) => void;
}

export const SizeDistributionSelector: React.FC<SizeDistributionSelectorProps> = ({
  sizes,
  distribution,
  onChange,
  targetQuantity,
  onTargetQuantityChange,
}) => {
  const currentSum = Object.values(distribution).reduce(
    (sum, val) => sum + (Number(val) || 0),
    0
  );

  const diff = targetQuantity - currentSum;
  const isMatch = currentSum === targetQuantity;

  const handleSizeChange = (size: string, rawVal: string) => {
    const val = Math.max(0, parseInt(rawVal, 10) || 0);
    const updated = { ...distribution, [size]: val };
    const newSum = Object.values(updated).reduce((s, v) => s + (Number(v) || 0), 0);
    onChange(updated, newSum);
  };

  const handleStep = (size: string, delta: number) => {
    const current = distribution[size] || 0;
    const nextVal = Math.max(0, current + delta);
    const updated = { ...distribution, [size]: nextVal };
    const newSum = Object.values(updated).reduce((s, v) => s + (Number(v) || 0), 0);
    onChange(updated, newSum);
  };

  const syncTotalToSum = () => {
    if (currentSum > 0) {
      onTargetQuantityChange(currentSum);
    }
  };

  const distributeEqually = () => {
    if (sizes.length === 0 || targetQuantity <= 0) return;
    const basePerSize = Math.floor(targetQuantity / sizes.length);
    let remainder = targetQuantity % sizes.length;

    const newDist: Record<string, number> = {};
    sizes.forEach((s) => {
      newDist[s] = basePerSize + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder -= 1;
    });

    onChange(newDist, targetQuantity);
  };

  const clearDistribution = () => {
    const newDist: Record<string, number> = {};
    sizes.forEach((s) => {
      newDist[s] = 0;
    });
    onChange(newDist, 0);
  };

  return (
    <div className="flex flex-col gap-4 bg-[#141419] p-4 sm:p-5 border border-white/10 rounded-sm">
      
      {/* Target Quantity Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#C8A96E] font-semibold block">
            CANTIDAD TOTAL DE PRENDAS
          </span>
          <span className="text-[11px] text-[#A0A0A5]">
            Define el total y distribúyelo en la matriz de tallas inferior.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#070708] border border-white/20 rounded-xs">
            <button
              type="button"
              onClick={() => onTargetQuantityChange(Math.max(1, targetQuantity - 1))}
              className="px-3 py-1.5 text-sm font-bold text-[#A0A0A5] hover:text-[#F4F1EA] transition-colors"
              aria-label="Disminuir cantidad total"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={targetQuantity}
              onChange={(e) => onTargetQuantityChange(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="w-16 text-center font-mono font-bold text-sm bg-transparent text-[#F4F1EA] outline-none"
              aria-label="Cantidad total deseada"
            />
            <button
              type="button"
              onClick={() => onTargetQuantityChange(targetQuantity + 1)}
              className="px-3 py-1.5 text-sm font-bold text-[#A0A0A5] hover:text-[#F4F1EA] transition-colors"
              aria-label="Aumentar cantidad total"
            >
              +
            </button>
          </div>
          <span className="font-mono text-xs text-[#A0A0A5]">unid.</span>
        </div>
      </div>

      {/* Size Grid Controls */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-bold">
            DISTRIBUCIÓN POR TALLA:
          </span>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <button
              type="button"
              onClick={distributeEqually}
              className="text-[#C8A96E] hover:underline cursor-pointer"
            >
              Distribuir parejo
            </button>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={clearDistribution}
              className="text-[#A0A0A5] hover:text-[#F4F1EA] hover:underline cursor-pointer"
            >
              Limpiar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-1">
          {sizes.map((size) => {
            const count = distribution[size] || 0;
            return (
              <div
                key={size}
                className={`flex flex-col p-2.5 rounded-xs border transition-colors ${
                  count > 0
                    ? 'bg-[#1a1a22] border-[#C8A96E]/50'
                    : 'bg-[#0b0b0e] border-white/10'
                }`}
              >
                <span className="font-mono text-xs font-bold text-[#F4F1EA] mb-1.5 text-center">
                  {size}
                </span>

                <div className="flex items-center justify-between bg-[#070708] border border-white/15 rounded-xs overflow-hidden">
                  <button
                    type="button"
                    onClick={() => handleStep(size, -1)}
                    className="w-7 h-7 flex items-center justify-center font-bold text-xs text-[#A0A0A5] hover:text-[#F4F1EA] hover:bg-white/5"
                    aria-label={`Reducir talla ${size}`}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={count}
                    onChange={(e) => handleSizeChange(size, e.target.value)}
                    className="w-8 text-center font-mono text-xs font-semibold bg-transparent text-[#F4F1EA] outline-none"
                    aria-label={`Cantidad para talla ${size}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleStep(size, 1)}
                    className="w-7 h-7 flex items-center justify-center font-bold text-xs text-[#A0A0A5] hover:text-[#F4F1EA] hover:bg-white/5"
                    aria-label={`Aumentar talla ${size}`}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Validation Status Bar */}
      <div
        className={`p-3 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs ${
          isMatch
            ? 'bg-emerald-950/40 border border-emerald-800/50 text-emerald-300'
            : currentSum === 0
            ? 'bg-amber-950/30 border border-amber-800/40 text-amber-300'
            : diff > 0
            ? 'bg-amber-950/30 border border-amber-800/40 text-amber-300'
            : 'bg-red-950/30 border border-red-800/40 text-red-300'
        }`}
      >
        <div className="flex items-center gap-2">
          {isMatch ? (
            <>
              <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>Distribución exacta: <strong>{currentSum}</strong> de <strong>{targetQuantity}</strong> prendas.</span>
            </>
          ) : diff > 0 ? (
            <>
              <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Asignadas {currentSum} de {targetQuantity} prendas (faltan <strong>{diff}</strong>).</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>La suma de tallas ({currentSum}) excede el total por <strong>{Math.abs(diff)}</strong>.</span>
            </>
          )}
        </div>

        {!isMatch && currentSum > 0 && (
          <button
            type="button"
            onClick={syncTotalToSum}
            className="text-[11px] underline hover:text-white cursor-pointer self-start sm:self-auto"
          >
            Ajustar total a {currentSum}
          </button>
        )}
      </div>

    </div>
  );
};
