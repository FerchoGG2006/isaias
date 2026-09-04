'use client';

import React, { useState } from 'react';
import { Product, ProductVariant, DesignFileAttachment } from '@/domain';
import { TECHNIQUES } from '@/data/techniques';
import { SizeDistributionSelector } from './SizeDistributionSelector';
import { FileUploader } from './FileUploader';
import {
  buildProductQuoteItem,
  calculateUnitPrice,
  validateSizeDistribution,
} from '@/lib/quoteBuilder';
import { useQuote } from '@/context/QuoteContext';
import { getSingleItemWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

export interface ProductConfiguratorProps {
  product: Product;
  onVariantChange?: (variant: ProductVariant) => void;
}

export const ProductConfigurator: React.FC<ProductConfiguratorProps> = ({
  product,
  onVariantChange,
}) => {
  const { addItem, setIsQuoteDrawerOpen, businessId } = useQuote();

  const capabilities = product.customCapabilities;

  // 1. Color / Variant state
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    capabilities.availableColors[0] || {
      id: 'default',
      colorName: 'Estándar',
      colorHex: '#C8A96E',
      inStock: true,
    }
  );

  // 2. Technique state
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>(
    capabilities.allowedTechniques[0] || 'dtf-full-color'
  );

  // 3. Placement state
  const [selectedPlacements, setSelectedPlacements] = useState<string[]>(
    capabilities.allowedPlacements[0] ? [capabilities.allowedPlacements[0].label] : []
  );

  // 4. Quantity & Sizing state
  const [targetQuantity, setTargetQuantity] = useState<number>(
    capabilities.defaultQuantity || capabilities.minQuantity || 1
  );

  const initialSizesDist: Record<string, number> = {};
  if (capabilities.sizingMode === 'distribution') {
    capabilities.availableSizes.forEach((size, idx) => {
      initialSizesDist[size] = idx === 0 ? targetQuantity : 0;
    });
  }

  const [sizeDistribution, setSizeDistribution] = useState<Record<string, number>>(initialSizesDist);

  // 5. File upload & notes
  const [attachment, setAttachment] = useState<DesignFileAttachment | undefined>(undefined);
  const [notes, setNotes] = useState<string>('');

  const handleVariantSelect = (v: ProductVariant) => {
    setSelectedVariant(v);
    if (onVariantChange) {
      onVariantChange(v);
    }
  };

  const togglePlacement = (label: string) => {
    setSelectedPlacements((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  // Live calculations
  const effectiveUnitPrice =
    product.pricing.type === 'fixed'
      ? calculateUnitPrice(
          product.pricing.basePrice,
          targetQuantity,
          product.pricing.bulkDiscounts
        )
      : product.pricing.basePrice;

  const estimatedSubtotal =
    effectiveUnitPrice !== undefined && product.pricing.type === 'fixed'
      ? effectiveUnitPrice * targetQuantity
      : undefined;

  const sizeValidation =
    capabilities.sizingMode === 'distribution'
      ? validateSizeDistribution(sizeDistribution, targetQuantity)
      : { isValid: true, currentSum: targetQuantity, diff: 0 };

  const currentTechniqueObj = TECHNIQUES.find(
    (t) => t.id === selectedTechniqueId || t.slug === selectedTechniqueId
  );

  const currentQuoteItem = buildProductQuoteItem({
    product,
    selectedVariant,
    selectedTechnique: currentTechniqueObj?.name || selectedTechniqueId,
    selectedPlacements,
    sizeDistribution: capabilities.sizingMode === 'distribution' ? sizeDistribution : {},
    totalQuantity: targetQuantity,
    attachment,
    notes,
  });

  const handleDirectWhatsApp = () => {
    if (!sizeValidation.isValid && capabilities.sizingMode === 'distribution') {
      alert('Por favor verifica que la suma de tallas coincida con la cantidad total.');
      return;
    }

    const { url, isConfigured } = getSingleItemWhatsAppUrl(currentQuoteItem, businessId);
    if (isConfigured) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToQuote = () => {
    if (!sizeValidation.isValid && capabilities.sizingMode === 'distribution') {
      alert('Por favor verifica que la suma de tallas coincida con la cantidad total.');
      return;
    }

    addItem(currentQuoteItem);
    setIsQuoteDrawerOpen(true);
  };

  return (
    <div className="flex flex-col gap-8 bg-[#0e0e11] border border-white/10 rounded-sm p-6 sm:p-8">
      
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-1">
            CONFIGURADOR TÉCNICO
          </span>
          <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight">
            Personaliza tu Pedido
          </h2>
        </div>

        <div className="font-mono text-xs text-[#A0A0A5] bg-[#141419] px-3 py-1.5 border border-white/10 rounded-xs">
          CÓD: <span className="text-[#F4F1EA] font-bold">{product.code}</span>
        </div>
      </div>

      {/* 1. COLOR / VARIANT SELECTOR */}
      {capabilities.availableColors.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
              1. COLOR / TONO: <span className="text-[#C8A96E]">{selectedVariant.colorName}</span>
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            {capabilities.availableColors.map((col) => {
              const isSelected = selectedVariant.id === col.id;
              return (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => handleVariantSelect(col)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xs border font-mono text-xs transition-all ${
                    isSelected
                      ? 'bg-[#1a1a22] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/10'
                      : 'bg-[#141419] border-white/10 text-[#A0A0A5] hover:border-white/30 hover:text-[#F4F1EA]'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shrink-0 shadow-inner"
                    style={{ backgroundColor: col.colorHex }}
                  />
                  <span>{col.colorName}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. TECHNIQUE SELECTOR */}
      {capabilities.allowedTechniques.length > 0 && (
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
            2. TÉCNICA DE PERSONALIZACIÓN:
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.allowedTechniques.map((techId) => {
              const tech = TECHNIQUES.find((t) => t.id === techId || t.slug === techId);
              const isSelected = selectedTechniqueId === techId;
              return (
                <div
                  key={techId}
                  onClick={() => setSelectedTechniqueId(techId)}
                  className={`p-4 rounded-xs border cursor-pointer transition-all flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#1a1a22] border-[#C8A96E] shadow-lg shadow-[#C8A96E]/10'
                      : 'bg-[#141419] border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-[#F4F1EA]">
                      {tech?.name || techId}
                    </span>
                    {tech?.curingTemperature && (
                      <span className="font-mono text-[10px] text-[#C8A96E] bg-black/60 px-2 py-0.5 border border-[#C8A96E]/30 rounded-xs">
                        {tech.curingTemperature}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#A0A0A5] line-clamp-2 leading-relaxed">
                    {tech?.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. PLACEMENT CHECKBOXES */}
      {capabilities.allowedPlacements.length > 0 && (
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
            3. UBICACIÓN DEL ESTAMPADO / BORDADO:
          </label>

          <div className="flex flex-wrap gap-2.5">
            {capabilities.allowedPlacements.map((plc) => {
              const isSelected = selectedPlacements.includes(plc.label);
              return (
                <button
                  key={plc.id}
                  type="button"
                  onClick={() => togglePlacement(plc.label)}
                  className={`px-3.5 py-2 rounded-xs border font-mono text-xs transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#1a1a22] border-[#C8A96E] text-[#F4F1EA]'
                      : 'bg-[#141419] border-white/10 text-[#A0A0A5] hover:border-white/30'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center text-[10px] ${
                      isSelected
                        ? 'bg-[#C8A96E] border-[#C8A96E] text-[#070708] font-bold'
                        : 'border-white/30'
                    }`}
                  >
                    {isSelected && '✓'}
                  </span>
                  <span>{plc.label}</span>
                  {plc.maxDimensions && (
                    <span className="text-[10px] text-[#A0A0A5] opacity-70">
                      ({plc.maxDimensions})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. QUANTITY & SIZES */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
        <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
          4. CANTIDAD Y TALLAS:
        </label>

        {capabilities.sizingMode === 'distribution' ? (
          <SizeDistributionSelector
            sizes={capabilities.availableSizes}
            distribution={sizeDistribution}
            onChange={(newDist) => setSizeDistribution(newDist)}
            targetQuantity={targetQuantity}
            onTargetQuantityChange={(newTarget) => setTargetQuantity(newTarget)}
          />
        ) : (
          <div className="flex items-center justify-between bg-[#141419] p-4 border border-white/10 rounded-xs">
            <div>
              <span className="font-mono text-xs text-[#F4F1EA] font-bold block">
                CANTIDAD DE PIEZAS
              </span>
              <span className="text-[11px] text-[#A0A0A5]">
                {capabilities.availableSizes[0] || 'Tamaño estándar'}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#070708] border border-white/20 rounded-xs">
              <button
                type="button"
                onClick={() => setTargetQuantity(Math.max(1, targetQuantity - 1))}
                className="px-3.5 py-2 text-sm font-bold text-[#A0A0A5] hover:text-[#F4F1EA]"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={targetQuantity}
                onChange={(e) => setTargetQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-16 text-center font-mono font-bold text-sm bg-transparent text-[#F4F1EA] outline-none"
              />
              <button
                type="button"
                onClick={() => setTargetQuantity(targetQuantity + 1)}
                className="px-3.5 py-2 text-sm font-bold text-[#A0A0A5] hover:text-[#F4F1EA]"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 5. DESIGN FILE ATTACHMENT */}
      {capabilities.allowsDesignUpload && (
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
            5. ARCHIVO DE DISEÑO O LOGOTIPO (OPCIONAL):
          </label>
          <FileUploader
            attachment={attachment}
            onAttachmentChange={(att) => setAttachment(att)}
          />
        </div>
      )}

      {/* 6. PROJECT NOTES */}
      {capabilities.allowsNotes && (
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
            6. NOTAS E INDICACIONES ESPECÍFICAS:
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Ejemplo: Logo al frente de 10 cm, nombre personalizado en la espalda, fecha límite para entrega..."
            className="w-full bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3.5 font-sans text-xs rounded-xs outline-none transition-colors placeholder:text-[#A0A0A5]/50 resize-y"
          />
        </div>
      )}

      {/* 7. LIVE QUOTE SUMMARY & ACTIONS */}
      <div className="pt-6 border-t border-white/15 flex flex-col gap-5 bg-[#141419] p-5 sm:p-6 rounded-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8A96E] font-semibold block mb-0.5">
              RESUMEN DE COTIZACIÓN
            </span>
            <span className="text-sm font-bold text-[#F4F1EA]">
              {targetQuantity} {targetQuantity === 1 ? 'prenda' : 'prendas'} · {selectedVariant.colorName} · {currentTechniqueObj?.name || selectedTechniqueId}
            </span>
          </div>

          <div className="text-right">
            {product.pricing.type === 'fixed' && estimatedSubtotal !== undefined ? (
              <>
                <span className="font-mono text-[11px] text-[#A0A0A5] block">
                  ${(effectiveUnitPrice || 0).toLocaleString('es-CO')} c/u (estimado)
                </span>
                <span className="font-mono font-bold text-xl sm:text-2xl text-[#C8A96E]">
                  ${estimatedSubtotal.toLocaleString('es-CO')} COP
                </span>
              </>
            ) : (
              <span className="font-mono text-sm font-bold text-[#C8A96E] bg-black/50 px-3 py-1.5 border border-[#C8A96E]/30 rounded-xs">
                Precio bajo cotización por volumen
              </span>
            )}
          </div>
        </div>

        {/* Volume discount tiers notice */}
        {product.pricing.bulkDiscounts && product.pricing.bulkDiscounts.length > 0 && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#A0A0A5] bg-[#0b0b0e] p-2.5 rounded-xs border border-white/5">
            <span className="text-[#C8A96E] font-bold">★ Descuentos por volumen:</span>
            {product.pricing.bulkDiscounts.map((tier, idx) => (
              <span key={idx} className={targetQuantity >= tier.minQty ? 'text-emerald-400 font-bold' : ''}>
                {tier.minQty}+ unds (${tier.pricePerUnit.toLocaleString('es-CO')}){idx < product.pricing.bulkDiscounts!.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="wa"
            size="lg"
            onClick={handleDirectWhatsApp}
            className="flex-1"
            leftIcon={
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
            }
          >
            Cotizar por WhatsApp
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleAddToQuote}
            className="sm:w-auto"
          >
            Añadir a Cotización +
          </Button>
        </div>

      </div>

    </div>
  );
};
