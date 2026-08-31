'use client';

import React from 'react';
import { Product, ProductConfiguration } from '@/domain/catalog';
import { buildQuoteMessage } from '@/lib/whatsapp/buildQuoteMessage';
import { getTechnique } from '@/data/services';

interface QuoteSummaryCardProps {
  product: Product;
  config: ProductConfiguration;
  isValid: boolean;
}

export const QuoteSummaryCard: React.FC<QuoteSummaryCardProps> = ({
  product,
  config,
  isValid,
}) => {
  const { url, phone } = buildQuoteMessage({ product, config });
  const techniqueObj = config.techniqueId ? getTechnique(config.techniqueId) : undefined;

  const estimatedTotal =
    product.pricing.mode === 'from' && product.pricing.amount
      ? product.pricing.amount * config.quantity
      : null;

  return (
    <div className="rounded-xl border border-amber-500/30 bg-neutral-900/90 p-5 backdrop-blur-md shadow-2xl space-y-4">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Resumen de Cotización
          </h3>
          <p className="text-xs text-neutral-400">Variedades Isaías — Directo a taller</p>
        </div>
        <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-semibold text-amber-400">
          {product.code}
        </span>
      </div>

      <div className="space-y-2 text-xs text-neutral-300">
        <div className="flex justify-between py-1 border-b border-neutral-800/60">
          <span className="text-neutral-400">Cantidad Total:</span>
          <span className="font-bold text-white">{config.quantity} ud(s)</span>
        </div>

        {config.variantId && (
          <div className="flex justify-between py-1 border-b border-neutral-800/60">
            <span className="text-neutral-400">Variante/Color:</span>
            <span className="font-semibold text-amber-300">
              {product.variants.find((v) => v.id === config.variantId)?.name || config.variantId}
            </span>
          </div>
        )}

        {config.techniqueId && (
          <div className="flex justify-between py-1 border-b border-neutral-800/60">
            <span className="text-neutral-400">Técnica:</span>
            <span className="font-semibold text-amber-300">
              {techniqueObj ? techniqueObj.name : config.techniqueId}
            </span>
          </div>
        )}

        {config.designFileName && (
          <div className="flex justify-between py-1 border-b border-neutral-800/60">
            <span className="text-neutral-400">Arte adjunto:</span>
            <span className="font-semibold text-emerald-400 truncate max-w-[180px]">
              {config.designFileName}
            </span>
          </div>
        )}

        {estimatedTotal && (
          <div className="flex justify-between py-2 text-sm font-bold text-neutral-100 pt-2">
            <span>Estimado desde:</span>
            <span className="text-amber-400">
              ${estimatedTotal.toLocaleString('es-CO')} COP
            </span>
          </div>
        )}
      </div>

      <a
        href={isValid ? url : '#'}
        target={isValid ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={(e) => {
          if (!isValid) {
            e.preventDefault();
            alert('Por favor completa las cantidades por talla requeridas antes de cotizar.');
          }
        }}
        className={`flex w-full items-center justify-center space-x-2.5 rounded-lg py-3.5 px-4 font-bold text-sm uppercase tracking-wide transition shadow-lg ${
          isValid
            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/50'
            : 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-neutral-700'
        }`}
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
        </svg>
        <span>Solicitar Cotización por WhatsApp</span>
      </a>
      <p className="text-[10px] text-center text-neutral-500">
        WhatsApp Oficial: +{phone} — Respuesta directa de taller
      </p>
    </div>
  );
};
