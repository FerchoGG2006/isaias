'use client';

import React, { useState } from 'react';
import {
  Product,
  ProductConfiguration,
  TechniqueId,
  SizeQuantity,
  CustomizationCapability,
} from '@/domain/catalog';
import { TECHNIQUES } from '@/data/services';
import { SizeDistributionInput } from './SizeDistributionInput';
import { DesignUploader } from './DesignUploader';
import { QuoteSummaryCard } from './QuoteSummaryCard';

interface ProductConfiguratorProps {
  product: Product;
}

export const ProductConfigurator: React.FC<ProductConfiguratorProps> = ({ product }) => {
  const supports = (cap: string) => product.capabilities.includes(cap as CustomizationCapability);

  const [quantity, setQuantity] = useState<number>(12);
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(
    product.variants[0]?.id
  );
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<TechniqueId | undefined>(
    product.techniques[0] || 'dtf'
  );

  const initialSizeDistribution: SizeQuantity[] = product.sizes.map((size) => ({
    size,
    quantity: 0,
  }));

  const [sizeDistribution, setSizeDistribution] =
    useState<SizeQuantity[]>(initialSizeDistribution);
  const [designFileName, setDesignFileName] = useState<string | undefined>();
  const [designFileUrl, setDesignFileUrl] = useState<string | undefined>();
  const [placement] = useState<string>('Pecho / Frente');
  const [notes, setNotes] = useState<string>('');

  const currentSizeTotal = sizeDistribution.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  const isSizeValidationRequired = supports('size_distribution') && product.sizes.length > 0;
  const isSizeValid = !isSizeValidationRequired || currentTotalEqualsSizeTotal();

  function currentTotalEqualsSizeTotal() {
    return currentSizeTotal === quantity;
  }

  const config: ProductConfiguration = {
    productId: product.id,
    variantId: selectedVariantId,
    techniqueId: selectedTechniqueId,
    quantity,
    sizeDistribution: isSizeValidationRequired ? sizeDistribution : undefined,
    designFileName,
    designFileUrl,
    placement: supports('placement') ? placement : undefined,
    notes,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Configuration Controls Column */}
      <div className="lg:col-span-7 space-y-6">
        {/* 1. Quantities & Variants */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
              1. Cantidad & Variantes
            </h3>
            <span className="text-xs text-amber-400 font-mono font-medium">
              Min. 1 ud
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase">
                Cantidad Total a Cotizar
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-10 w-10 rounded-lg bg-neutral-800 font-bold text-lg text-neutral-300 hover:bg-neutral-700"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="h-10 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 text-center text-base font-bold text-white focus:border-amber-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-10 w-10 rounded-lg bg-neutral-800 font-bold text-lg text-neutral-300 hover:bg-neutral-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Color / Variant */}
            {supports('color') && product.variants.length > 0 && (
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase">
                  Color / Variante
                </label>
                <select
                  value={selectedVariantId}
                  onChange={(e) => setSelectedVariantId(e.target.value)}
                  className="h-10 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 text-xs font-semibold text-white focus:border-amber-500 focus:outline-none"
                >
                  {product.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* 2. Size Distribution Matrix (if applicable) */}
        {supports('size_distribution') && product.sizes.length > 0 && (
          <SizeDistributionInput
            sizes={product.sizes}
            totalQuantity={quantity}
            value={sizeDistribution}
            onChange={setSizeDistribution}
          />
        )}

        {/* 3. Personalization Technique */}
        {supports('technique') && product.techniques.length > 0 && (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
              2. Técnica de Personalización
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.techniques.map((techId) => {
                const tech = TECHNIQUES.find((t) => t.id === techId);
                const isSelected = selectedTechniqueId === techId;

                return (
                  <button
                    key={techId}
                    type="button"
                    onClick={() => setSelectedTechniqueId(techId)}
                    className={`flex flex-col text-left p-3.5 rounded-lg border transition ${
                      isSelected
                        ? 'border-amber-500 bg-amber-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                      {tech?.name || techId}
                    </span>
                    <span className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                      {tech?.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Placement & Design Upload */}
        {supports('design_upload') && (
          <DesignUploader
            selectedFileName={designFileName}
            onFileSelect={(name, url) => {
              setDesignFileName(name);
              setDesignFileUrl(url);
            }}
          />
        )}

        {/* 5. Additional Notes & Instructions */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-1.5">
            Notas de Cotización / Ubicación del Logo
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ejemplo: Logo en pecho izquierdo a 8cm y estampado grande en espalda. Requiero entrega en 5 días hábiles."
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-xs text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Sticky Summary Card */}
      <div className="lg:col-span-5 sticky top-24">
        <QuoteSummaryCard product={product} config={config} isValid={isSizeValid} />
      </div>
    </div>
  );
};
