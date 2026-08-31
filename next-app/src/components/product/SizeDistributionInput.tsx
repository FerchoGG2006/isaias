'use client';

import React from 'react';
import { SizeQuantity } from '@/domain/catalog';

interface SizeDistributionInputProps {
  sizes: string[];
  totalQuantity: number;
  value: SizeQuantity[];
  onChange: (newDistribution: SizeQuantity[]) => void;
}

export const SizeDistributionInput: React.FC<SizeDistributionInputProps> = ({
  sizes,
  totalQuantity,
  value,
  onChange,
}) => {
  const currentTotal = value.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const isValid = currentTotal === totalQuantity;

  const handleQuantityChange = (size: string, qty: number) => {
    const safeQty = Math.max(0, isNaN(qty) ? 0 : qty);
    const existingIndex = value.findIndex((item) => item.size === size);
    let updated: SizeQuantity[];

    if (existingIndex > -1) {
      updated = [...value];
      updated[existingIndex] = { size, quantity: safeQty };
    } else {
      updated = [...value, { size, quantity: safeQty }];
    }

    onChange(updated);
  };

  const handleDistributeEvenly = () => {
    if (sizes.length === 0 || totalQuantity <= 0) return;
    const base = Math.floor(totalQuantity / sizes.length);
    const remainder = totalQuantity % sizes.length;

    const distributed: SizeQuantity[] = sizes.map((size, index) => ({
      size,
      quantity: base + (index < remainder ? 1 : 0),
    }));

    onChange(distributed);
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
            Distribución de Tallas
          </h4>
          <p className="text-xs text-neutral-400">
            Distribuye las {totalQuantity} unidades solicitadas entre las tallas disponibles.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDistributeEvenly}
          className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-medium text-amber-400 hover:bg-neutral-700 transition"
        >
          Distribuir equitativamente
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {sizes.map((size) => {
          const item = value.find((v) => v.size === size);
          const qty = item ? item.quantity : 0;

          return (
            <div
              key={size}
              className="flex flex-col items-center rounded-lg border border-neutral-800 bg-neutral-950 p-2.5"
            >
              <span className="text-xs font-bold text-neutral-300 uppercase mb-1.5">
                {size}
              </span>
              <div className="flex items-center space-x-1 w-full justify-between">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(size, qty - 1)}
                  className="flex h-7 w-7 items-center justify-center rounded bg-neutral-800 text-neutral-300 hover:bg-neutral-700 text-sm font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  value={qty === 0 ? '' : qty}
                  placeholder="0"
                  onChange={(e) => handleQuantityChange(size, parseInt(e.target.value, 10))}
                  className="w-12 text-center bg-transparent text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-amber-500 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange(size, qty + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded bg-neutral-800 text-neutral-300 hover:bg-neutral-700 text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-neutral-400">Total asignado:</span>
        <span
          className={`font-bold px-2 py-0.5 rounded ${
            isValid
              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
              : 'bg-amber-950/80 text-amber-400 border border-amber-800'
          }`}
        >
          {currentTotal} de {totalQuantity} unidades {isValid ? '✓ Correcto' : `(Faltan/Sobran ${Math.abs(totalQuantity - currentTotal)})`}
        </span>
      </div>
    </div>
  );
};
