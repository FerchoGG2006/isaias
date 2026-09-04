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

  // 4. Modo de tallas: 'quick' (1-clic al detal) o 'bulk' (matriz mayorista/dotaciones)
  const [orderMode, setOrderMode] = useState<'quick' | 'bulk'>('quick');

  // Modo rápido: talla única seleccionada y cantidad
  const defaultSize = capabilities.availableSizes[0] || 'M';
  const [quickSize, setQuickSize] = useState<string>(defaultSize);
  const [quickQuantity, setQuickQuantity] = useState<number>(1);

  // Modo mayorista: distribución por tallas
  const [targetQuantity, setTargetQuantity] = useState<number>(
    capabilities.defaultQuantity || capabilities.minQuantity || 12
  );

  const initialSizesDist: Record<string, number> = {};
  if (capabilities.sizingMode === 'distribution') {
    capabilities.availableSizes.forEach((size, idx) => {
      initialSizesDist[size] = idx === 0 ? targetQuantity : 0;
    });
  }

  const [bulkSizeDistribution, setBulkSizeDistribution] =
    useState<Record<string, number>>(initialSizesDist);

  // 5. Carga de diseño: 'whatsapp' (asesoría/enviar por chat) o 'upload' (subir archivo)
  const [designDeliveryMode, setDesignDeliveryMode] = useState<'whatsapp' | 'upload'>('whatsapp');
  const [attachment, setAttachment] = useState<DesignFileAttachment | undefined>(undefined);
  const [notes, setNotes] = useState<string>('');

  // Cantidad efectiva y distribución consolidada según el modo activo
  const effectiveTotalQuantity =
    orderMode === 'quick' ? quickQuantity : targetQuantity;

  const effectiveSizeDistribution: Record<string, number> =
    orderMode === 'quick'
      ? { [quickSize]: quickQuantity }
      : bulkSizeDistribution;

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

  // Cálculo en vivo de precio unitario y subtotal
  const effectiveUnitPrice =
    product.pricing.type === 'fixed'
      ? calculateUnitPrice(
          product.pricing.basePrice,
          effectiveTotalQuantity,
          product.pricing.bulkDiscounts
        )
      : product.pricing.basePrice;

  const estimatedSubtotal =
    effectiveUnitPrice !== undefined && product.pricing.type === 'fixed'
      ? effectiveUnitPrice * effectiveTotalQuantity
      : undefined;

  // Validación de tallas (en modo quick siempre es válida)
  const sizeValidation =
    orderMode === 'quick' || capabilities.sizingMode !== 'distribution'
      ? { isValid: true, currentSum: effectiveTotalQuantity, diff: 0 }
      : validateSizeDistribution(bulkSizeDistribution, targetQuantity);

  const currentTechniqueObj = TECHNIQUES.find(
    (t) => t.id === selectedTechniqueId || t.slug === selectedTechniqueId
  );

  // Construir notas finales incluyendo si el diseño se coordinará por WhatsApp
  const finalNotes = [
    designDeliveryMode === 'whatsapp' && !attachment
      ? 'Cliente coordinará el logotipo / diseño directamente por WhatsApp.'
      : '',
    notes.trim(),
  ]
    .filter(Boolean)
    .join(' | ');

  const currentQuoteItem = buildProductQuoteItem({
    product,
    selectedVariant,
    selectedTechnique: currentTechniqueObj?.name || selectedTechniqueId,
    selectedPlacements,
    sizeDistribution:
      capabilities.sizingMode === 'distribution' ? effectiveSizeDistribution : {},
    totalQuantity: effectiveTotalQuantity,
    attachment: designDeliveryMode === 'upload' ? attachment : undefined,
    notes: finalNotes,
  });

  const handleDirectWhatsApp = () => {
    if (!sizeValidation.isValid && orderMode === 'bulk') {
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
    if (!sizeValidation.isValid && orderMode === 'bulk') {
      alert('Por favor verifica que la suma de tallas coincida con la cantidad total.');
      return;
    }

    addItem(currentQuoteItem);
    setIsQuoteDrawerOpen(true);
  };

  return (
    <>
      {/* CONTENEDOR PRINCIPAL DEL CONFIGURADOR */}
      <div className="flex flex-col gap-6 bg-[#0E1015] border border-white/10 rounded-xl p-5 sm:p-7 shadow-xl">
        
        {/* Encabezado del configurador */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-0.5">
              ATELIER CONFIGURATOR
            </span>
            <h2 className="font-serif font-normal text-xl sm:text-2xl text-[#F4F1EA] tracking-tight">
              Personaliza tu Pedido
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#8A8A92] bg-[#14151C] px-3 py-1 rounded-full border border-white/10">
            REF: <span className="text-[#F4F1EA] font-semibold">{product.code}</span>
          </div>
        </div>

        {/* 1. SELECTOR DE COLOR / TONO */}
        {capabilities.availableColors.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-semibold">
                1. Tono / Color: <span className="text-[#C8A96E]">{selectedVariant.colorName}</span>
              </label>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {capabilities.availableColors.map((col) => {
                const isSelected = selectedVariant.id === col.id;
                return (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => handleVariantSelect(col)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-sans transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1E26] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/10 ring-1 ring-[#C8A96E]/40'
                        : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0 shadow-sm"
                      style={{ backgroundColor: col.colorHex }}
                    />
                    <span className="font-medium">{col.colorName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. TALLAS Y CANTIDADES: SELECTOR RÁPIDO 1-CLIC + TOGGLE MAYORISTA */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-semibold">
              2. Cantidad y Talla:
            </label>

            {/* Selector de modo rápido vs mayorista */}
            {capabilities.sizingMode === 'distribution' && (
              <button
                type="button"
                onClick={() => setOrderMode(orderMode === 'quick' ? 'bulk' : 'quick')}
                className="font-mono text-[11px] text-[#C8A96E] hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <span>{orderMode === 'quick' ? '¿Pedido para empresa / varias tallas?' : '← Volver a Talla Única Rápida'}</span>
              </button>
            )}
          </div>

          {/* MODO A: COMPRA RÁPIDA (1 A 5 PRENDAS) */}
          {orderMode === 'quick' ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#14151C] border border-white/10 rounded-xl">
              
              {/* Botones de Talla en 1 toque */}
              {capabilities.sizingMode === 'distribution' && (
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A92]">
                    Selecciona tu talla:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {capabilities.availableSizes.map((size) => {
                      const isSelected = quickSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setQuickSize(size)}
                          className={`w-10 h-10 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#C8A96E] text-[#0C0D10] shadow-md shadow-[#C8A96E]/20 scale-105'
                              : 'bg-[#0F1015] border border-white/15 text-[#F4F1EA] hover:border-[#C8A96E]/50'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Stepper de Cantidad */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A92]">
                  Unidades:
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#0C0D10] border border-white/15 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuickQuantity(Math.max(1, quickQuantity - 1))}
                      className="w-9 h-9 flex items-center justify-center font-mono font-bold text-sm text-[#8A8A92] hover:text-[#F4F1EA] hover:bg-white/5 transition-colors cursor-pointer"
                      aria-label="Disminuir unidades"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quickQuantity}
                      onChange={(e) => setQuickQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                      className="w-12 text-center font-mono font-bold text-sm bg-transparent text-[#F4F1EA] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuickQuantity(quickQuantity + 1)}
                      className="w-9 h-9 flex items-center justify-center font-mono font-bold text-sm text-[#8A8A92] hover:text-[#F4F1EA] hover:bg-white/5 transition-colors cursor-pointer"
                      aria-label="Aumentar unidades"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-mono text-xs text-[#8A8A92]">
                    {quickQuantity === 1 ? 'prenda' : 'prendas'}
                  </span>
                </div>
              </div>

            </div>
          ) : (
            /* MODO B: MATRIZ DE DISTRIBUCIÓN POR MAYOR */
            <SizeDistributionSelector
              sizes={capabilities.availableSizes}
              distribution={bulkSizeDistribution}
              onChange={(newDist) => setBulkSizeDistribution(newDist)}
              targetQuantity={targetQuantity}
              onTargetQuantityChange={(newTarget) => setTargetQuantity(newTarget)}
            />
          )}
        </div>

        {/* 3. TÉCNICA DE PERSONALIZACIÓN COMPACTA */}
        {capabilities.allowedTechniques.length > 0 && (
          <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-semibold">
              3. Técnica de Estampación / Confección:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.allowedTechniques.map((techId) => {
                const tech = TECHNIQUES.find((t) => t.id === techId || t.slug === techId);
                const isSelected = selectedTechniqueId === techId;
                return (
                  <button
                    key={techId}
                    type="button"
                    onClick={() => setSelectedTechniqueId(techId)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#181A22] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/10 ring-1 ring-[#C8A96E]/30'
                        : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-white/30'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0C0D10]" />}
                      </span>
                      <div className="truncate">
                        <span className="font-sans font-semibold text-xs text-[#F4F1EA] block truncate">
                          {tech?.name || techId}
                        </span>
                        <span className="font-sans text-[10px] text-[#8A8A92] line-clamp-1">
                          {tech?.shortDescription}
                        </span>
                      </div>
                    </div>

                    {tech?.curingTemperature && (
                      <span className="font-mono text-[9px] uppercase text-[#C8A96E] bg-black/50 px-2 py-0.5 border border-[#C8A96E]/30 rounded-full shrink-0">
                        {tech.curingTemperature}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. UBICACIÓN DEL ESTAMPADO / BORDADO */}
        {capabilities.allowedPlacements.length > 0 && (
          <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-semibold">
              4. Ubicación de Estampado:
            </label>

            <div className="flex flex-wrap gap-2">
              {capabilities.allowedPlacements.map((plc) => {
                const isSelected = selectedPlacements.includes(plc.label);
                return (
                  <button
                    key={plc.id}
                    type="button"
                    onClick={() => togglePlacement(plc.label)}
                    className={`px-3 py-1.5 rounded-full border font-sans text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#181A22] border-[#C8A96E] text-[#F4F1EA] shadow-sm'
                        : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full border flex items-center justify-center text-[8px] ${
                        isSelected
                          ? 'bg-[#C8A96E] border-[#C8A96E] text-[#0C0D10] font-bold'
                          : 'border-white/30'
                      }`}
                    >
                      {isSelected && '✓'}
                    </span>
                    <span>{plc.label}</span>
                    {plc.maxDimensions && (
                      <span className="font-mono text-[10px] opacity-60">({plc.maxDimensions})</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. LOGO / DISEÑO CON ASESORÍA ÁGIL */}
        {capabilities.allowsDesignUpload && (
          <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-semibold">
                5. Tu Diseño o Logo:
              </label>
            </div>

            {/* Selector de modo de entrega de diseño */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDesignDeliveryMode('whatsapp')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2.5 ${
                  designDeliveryMode === 'whatsapp'
                    ? 'bg-[#141D17] border-[#25D366]/60 text-[#F4F1EA]'
                    : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25'
                }`}
              >
                <span className="text-[#25D366] text-base">●</span>
                <div>
                  <span className="font-sans font-semibold text-xs text-[#F4F1EA] block">
                    Enviar o Asesorar por WhatsApp
                  </span>
                  <span className="font-sans text-[10px] text-[#8A8A92]">
                    Envías la foto/logo en el chat (Recomendado)
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDesignDeliveryMode('upload')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2.5 ${
                  designDeliveryMode === 'upload'
                    ? 'bg-[#181A22] border-[#C8A96E] text-[#F4F1EA]'
                    : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25'
                }`}
              >
                <span className="text-[#C8A96E] text-base">📁</span>
                <div>
                  <span className="font-sans font-semibold text-xs text-[#F4F1EA] block">
                    Subir Archivo Aquí
                  </span>
                  <span className="font-sans text-[10px] text-[#8A8A92]">
                    PDF, PNG, JPG de alta resolución
                  </span>
                </div>
              </button>
            </div>

            {/* Uploader si eligió subir archivo */}
            {designDeliveryMode === 'upload' && (
              <div className="mt-1 animate-in fade-in duration-200">
                <FileUploader
                  attachment={attachment}
                  onAttachmentChange={(att) => setAttachment(att)}
                />
              </div>
            )}
          </div>
        )}

        {/* 6. NOTAS E INDICACIONES (COMPACTO) */}
        {capabilities.allowsNotes && (
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] font-semibold">
              6. Indicaciones Especiales (Opcional):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Logo al frente centrado, entrega para el viernes..."
              className="w-full bg-[#14151C] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] px-3.5 py-2.5 font-sans text-xs rounded-lg outline-none transition-colors placeholder:text-[#8A8A92]/50"
            />
          </div>
        )}

        {/* 7. RESUMEN EN EL FORMULARIO */}
        <div className="pt-5 border-t border-white/15 flex flex-col gap-4 bg-[#14151C] p-4 sm:p-5 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C8A96E] font-semibold block mb-0.5">
                RESUMEN DE CONFIGURACIÓN
              </span>
              <span className="text-xs font-semibold text-[#F4F1EA]">
                {effectiveTotalQuantity} {effectiveTotalQuantity === 1 ? 'prenda' : 'prendas'}
                {orderMode === 'quick' ? ` · Talla ${quickSize}` : ''} · {selectedVariant.colorName} ·{' '}
                {currentTechniqueObj?.name || selectedTechniqueId}
              </span>
            </div>

            <div className="text-left sm:text-right">
              {product.pricing.type === 'fixed' && estimatedSubtotal !== undefined ? (
                <>
                  <span className="font-mono text-[10px] text-[#8A8A92] block">
                    ${(effectiveUnitPrice || 0).toLocaleString('es-CO')} c/u (ref.)
                  </span>
                  <span className="font-mono font-bold text-xl text-[#C8A96E]">
                    ${estimatedSubtotal.toLocaleString('es-CO')} COP
                  </span>
                </>
              ) : (
                <span className="font-mono text-xs font-semibold text-[#C8A96E] bg-black/50 px-2.5 py-1 border border-[#C8A96E]/30 rounded-full">
                  Precio bajo cotización
                </span>
              )}
            </div>
          </div>

          {/* Botones de acción en página */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Button
              variant="wa"
              size="md"
              onClick={handleDirectWhatsApp}
              className="flex-1 text-xs uppercase tracking-wider font-semibold py-3"
              leftIcon={
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                </svg>
              }
            >
              Pedir por WhatsApp (1 Clic)
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={handleAddToQuote}
              className="text-xs uppercase tracking-wider py-3"
            >
              Añadir a Cotización +
            </Button>
          </div>
        </div>

      </div>

      {/* BARRA FLOTANTE FIJA INFERIOR (STICKY ACTION BAR) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0C0D10]/95 backdrop-blur-xl border-t border-[#C8A96E]/30 py-3 px-4 sm:px-8 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="wrap flex items-center justify-between gap-4">
          
          {/* Lado izquierdo: Prenda + Talla + Total */}
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0 hidden sm:block shadow-sm"
              style={{ backgroundColor: selectedVariant.colorHex }}
            />
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-serif font-normal text-xs sm:text-sm text-[#F4F1EA] truncate">
                  {product.title}
                </span>
                <span className="font-mono text-[10px] text-[#C8A96E] bg-white/5 px-2 py-0.5 rounded-full shrink-0">
                  {effectiveTotalQuantity} {effectiveTotalQuantity === 1 ? 'ud' : 'uds'}
                  {orderMode === 'quick' ? ` · ${quickSize}` : ''}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#8A8A92] truncate hidden sm:block">
                {selectedVariant.colorName} · {currentTechniqueObj?.name || selectedTechniqueId}
              </span>
            </div>
          </div>

          {/* Lado derecho: Precio + Botones directos */}
          <div className="flex items-center gap-3 shrink-0">
            {product.pricing.type === 'fixed' && estimatedSubtotal !== undefined ? (
              <div className="text-right hidden xs:block">
                <span className="font-mono font-bold text-sm sm:text-base text-[#C8A96E]">
                  ${estimatedSubtotal.toLocaleString('es-CO')} COP
                </span>
              </div>
            ) : null}

            {/* Botón WhatsApp prioritario */}
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-sans font-bold text-xs uppercase tracking-wider py-2.5 px-4 sm:px-5 rounded-full shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Pedir WhatsApp</span>
            </button>

            {/* Botón Añadir a Cotización */}
            <button
              type="button"
              onClick={handleAddToQuote}
              className="bg-[#181A22] hover:bg-[#20222B] text-[#F4F1EA] border border-white/15 hover:border-[#C8A96E]/50 font-sans font-medium text-xs uppercase tracking-wider py-2.5 px-3.5 rounded-full transition-colors cursor-pointer hidden md:inline-block"
            >
              + Cotizar
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
