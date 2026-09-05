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

  // 1. Color / Tono
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    capabilities.availableColors[0] || {
      id: 'default',
      colorName: 'Estándar',
      colorHex: '#C8A96E',
      inStock: true,
    }
  );

  // 2. Modo de personalización simplificado: 'print' (estampado) | 'embroidery' (bordado) | 'plain' (lisa)
  const hasEmbroidery = capabilities.allowedTechniques.some((t) => t.includes('bordado'));
  const hasPrint = capabilities.allowedTechniques.some((t) => !t.includes('bordado'));

  const defaultCustomType = hasPrint ? 'print' : hasEmbroidery ? 'embroidery' : 'plain';
  const [customType, setCustomType] = useState<'print' | 'embroidery' | 'plain'>(defaultCustomType);

  // Técnica técnica detallada (respaldada para WhatsApp)
  const defaultTech = capabilities.allowedTechniques[0] || 'dtf-full-color';
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>(defaultTech);

  // 3. Ubicaciones
  const [selectedPlacements, setSelectedPlacements] = useState<string[]>(
    capabilities.allowedPlacements[0] ? [capabilities.allowedPlacements[0].label] : []
  );

  // 4. Modo de pedido: 'quick' (por defecto: 1 clic al detal o unidades directas) o 'bulk' (matriz de tallas)
  const [orderMode, setOrderMode] = useState<'quick' | 'bulk'>('quick');

  // Modo rápido
  const defaultSize = capabilities.availableSizes[0] || 'M';
  const [quickSize, setQuickSize] = useState<string>(defaultSize);
  const [quickQuantity, setQuickQuantity] = useState<number>(1);

  // Modo mayorista
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

  // Acordeón de opciones avanzadas (colapsado para adultos / abierto para empresas)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState<boolean>(false);

  // Carga de diseño y notas
  const [designDeliveryMode, setDesignDeliveryMode] = useState<'whatsapp' | 'upload'>('whatsapp');
  const [attachment, setAttachment] = useState<DesignFileAttachment | undefined>(undefined);
  const [notes, setNotes] = useState<string>('');

  // Cantidad efectiva
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

  const handleCustomTypeChange = (type: 'print' | 'embroidery' | 'plain') => {
    setCustomType(type);
    if (type === 'plain') {
      setSelectedTechniqueId('Prenda Lisa (Sin Estampar)');
      setSelectedPlacements([]);
    } else if (type === 'embroidery') {
      const embTech = capabilities.allowedTechniques.find((t) => t.includes('bordado')) || 'bordado-industrial-3d';
      setSelectedTechniqueId(embTech);
      if (selectedPlacements.length === 0 && capabilities.allowedPlacements[0]) {
        setSelectedPlacements([capabilities.allowedPlacements[0].label]);
      }
    } else {
      const prnTech = capabilities.allowedTechniques.find((t) => !t.includes('bordado')) || defaultTech;
      setSelectedTechniqueId(prnTech);
      if (selectedPlacements.length === 0 && capabilities.allowedPlacements[0]) {
        setSelectedPlacements([capabilities.allowedPlacements[0].label]);
      }
    }
  };

  const togglePlacement = (label: string) => {
    setSelectedPlacements((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  // Cálculo de precio
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

  const sizeValidation =
    orderMode === 'quick' || capabilities.sizingMode !== 'distribution'
      ? { isValid: true, currentSum: effectiveTotalQuantity, diff: 0 }
      : validateSizeDistribution(bulkSizeDistribution, targetQuantity);

  const currentTechniqueObj = TECHNIQUES.find(
    (t) => t.id === selectedTechniqueId || t.slug === selectedTechniqueId
  );

  // Técnica visual legible para el cliente
  const readableTechnique =
    customType === 'plain'
      ? 'Prenda Lisa (Sin Estampar)'
      : currentTechniqueObj?.name || (customType === 'embroidery' ? 'Bordado' : 'Estampado Personalizado');

  const finalNotes = [
    customType === 'plain' ? 'Cliente solicita prenda lisa sin marcar.' : '',
    designDeliveryMode === 'whatsapp' && customType !== 'plain' && !attachment
      ? 'Cliente coordinará el logotipo / diseño directamente por WhatsApp.'
      : '',
    notes.trim(),
  ]
    .filter(Boolean)
    .join(' | ');

  const currentQuoteItem = buildProductQuoteItem({
    product,
    selectedVariant,
    selectedTechnique: readableTechnique,
    selectedPlacements: customType === 'plain' ? [] : selectedPlacements,
    sizeDistribution:
      capabilities.sizingMode === 'distribution' ? effectiveSizeDistribution : {},
    totalQuantity: effectiveTotalQuantity,
    attachment: designDeliveryMode === 'upload' ? attachment : undefined,
    notes: finalNotes,
  });

  const [validationError, setValidationError] = useState<string | null>(null);

  const handleDirectWhatsApp = () => {
    if (!sizeValidation.isValid && orderMode === 'bulk') {
      setValidationError('Por favor verifica que la suma de tallas coincida con la cantidad total requerida.');
      return;
    }
    setValidationError(null);

    const { url, isConfigured } = getSingleItemWhatsAppUrl(currentQuoteItem, businessId);
    if (isConfigured && url && url !== '#contacto') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const fallbackUrl = `https://wa.me/573105634509?text=${encodeURIComponent(
        `¡Hola Variedades Isaías! Me gustaría solicitar información y cotización para: ${currentQuoteItem.title} (${currentQuoteItem.totalQuantity} und, Talla ${quickSize}, Color ${selectedVariant.colorName}).`
      )}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleAddToQuote = () => {
    if (!sizeValidation.isValid && orderMode === 'bulk') {
      setValidationError('Por favor verifica que la suma de tallas coincida con la cantidad total requerida.');
      return;
    }
    setValidationError(null);

    addItem(currentQuoteItem);
    setIsQuoteDrawerOpen(true);
  };

  return (
    <>
      {/* CONTENEDOR PRINCIPAL: INTERFAZ LIGERA Y DIRECTA */}
      <div className="flex flex-col gap-5 bg-[#0E1015] border border-white/10 rounded-2xl p-5 sm:p-7 shadow-2xl">

        {/* PASO 1: COLOR (BOTONES AMPLIOS Y CÓMODOS) */}
        {capabilities.availableColors.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <label className="font-sans text-xs text-[#F4F1EA] font-semibold flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C8A96E] text-[#0C0D10] text-[11px] font-bold flex items-center justify-center">
                1
              </span>
              <span>Elige tu color:</span>
              <strong className="text-[#C8A96E] ml-1">{selectedVariant.colorName}</strong>
            </label>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {capabilities.availableColors.map((col) => {
                const isSelected = selectedVariant.id === col.id;
                return (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => handleVariantSelect(col)}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-sans transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1E26] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/15 ring-2 ring-[#C8A96E]/50 scale-[1.02]'
                        : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/30 shrink-0 shadow-sm"
                      style={{ backgroundColor: col.colorHex }}
                    />
                    <span className="font-medium text-xs">{col.colorName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PASO 2: TALLA Y CANTIDAD (RÁPIDO, CLARO Y CON BOTONES AMPLIOS) */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <label className="font-sans text-xs text-[#F4F1EA] font-semibold flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C8A96E] text-[#0C0D10] text-[11px] font-bold flex items-center justify-center">
                2
              </span>
              <span>Talla y Cantidad:</span>
            </label>

            {/* Alternador sutil si necesita dotaciones para empresa */}
            {capabilities.sizingMode === 'distribution' && (
              <button
                type="button"
                onClick={() => {
                  const newMode = orderMode === 'quick' ? 'bulk' : 'quick';
                  setOrderMode(newMode);
                  if (newMode === 'bulk') setShowAdvancedOptions(true);
                }}
                className="text-xs text-[#C8A96E] hover:underline cursor-pointer flex items-center gap-1 font-medium"
              >
                <span>{orderMode === 'quick' ? '¿Vas a pedir varias tallas para un equipo? Toca aquí' : '← Volver a pedir una sola talla'}</span>
              </button>
            )}
          </div>

          {orderMode === 'quick' ? (
            <div className="flex flex-col gap-4 p-4 bg-[#14151C] border border-white/10 rounded-xl">
              
              {/* Selector de tallas con botones cómodos */}
              {capabilities.availableSizes.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[11px] text-[#A0A0A5]">
                    Toca tu talla:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {capabilities.availableSizes.map((size) => {
                      const isSelected = quickSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setQuickSize(size)}
                          className={`min-w-[48px] h-11 px-3 rounded-xl font-mono text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#C8A96E] text-[#0C0D10] shadow-lg shadow-[#C8A96E]/25 scale-105 ring-2 ring-[#C8A96E]'
                              : 'bg-[#0F1015] border border-white/15 text-[#F4F1EA] hover:border-[#C8A96E]/60'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                  <p className="font-sans text-[11px] text-[#A0A0A5] pt-1 flex items-center gap-1.5">
                    <span className="text-[#C8A96E]">✓</span> Horma clásica colombiana (cómoda, no apretada). En WhatsApp te confirmamos las medidas exactas si tienes dudas.
                  </p>
                </div>
              )}

              {/* Selector de cantidad con atajos rápidos de 1 clic */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                <span className="font-sans text-[11px] text-[#A0A0A5]">
                  ¿Cuántas prendas necesitas?
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Stepper manual */}
                  <div className="flex items-center bg-[#0C0D10] border border-white/20 rounded-xl overflow-hidden shadow-inner">
                    <button
                      type="button"
                      onClick={() => setQuickQuantity(Math.max(1, quickQuantity - 1))}
                      className="w-11 h-11 flex items-center justify-center font-bold text-lg text-[#8A8A92] hover:text-[#F4F1EA] hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Disminuir unidades"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quickQuantity}
                      onChange={(e) => setQuickQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                      className="w-14 text-center font-mono font-bold text-base bg-transparent text-[#F4F1EA] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuickQuantity(quickQuantity + 1)}
                      className="w-11 h-11 flex items-center justify-center font-bold text-lg text-[#8A8A92] hover:text-[#F4F1EA] hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Aumentar unidades"
                    >
                      +
                    </button>
                  </div>

                  {/* Atajos de 1 toque: [1 unidad] [6 unidades] [12 docena] */}
                  <div className="flex items-center gap-1.5">
                    {[1, 6, 12, 24].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setQuickQuantity(preset)}
                        className={`px-3 py-2 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer ${
                          quickQuantity === preset
                            ? 'bg-[#C8A96E]/20 text-[#C8A96E] border border-[#C8A96E]/50 font-bold'
                            : 'bg-white/5 text-[#8A8A92] hover:text-[#F4F1EA] border border-transparent hover:border-white/10'
                        }`}
                      >
                        {preset === 12 ? '12 (Docena)' : `${preset} ${preset === 1 ? 'prenda' : 'prendas'}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* MATRIZ DE DISTRIBUCIÓN POR MAYOR (SOLO SI SE ACTIVA) */
            <div className="p-4 bg-[#14151C] border border-white/10 rounded-xl">
              <SizeDistributionSelector
                sizes={capabilities.availableSizes}
                distribution={bulkSizeDistribution}
                onChange={(newDist) => setBulkSizeDistribution(newDist)}
                targetQuantity={targetQuantity}
                onTargetQuantityChange={(newTarget) => setTargetQuantity(newTarget)}
              />
            </div>
          )}
        </div>

        {/* PASO 3: ¿CÓMO LA QUIERES PERSONALIZADA? (EN LENGUAJE HUMANO Y COTIDIANO) */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <label className="font-sans text-xs text-[#F4F1EA] font-semibold flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#C8A96E] text-[#0C0D10] text-[11px] font-bold flex items-center justify-center">
              3
            </span>
            <span>¿Cómo quieres tu prenda?</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Opción A: Con Estampado / Logo */}
            <button
              type="button"
              onClick={() => handleCustomTypeChange('print')}
              className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col gap-1 ${
                customType === 'print'
                  ? 'bg-[#1C1E26] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/15 ring-1 ring-[#C8A96E]/40'
                  : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-base">👕</span>
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                  customType === 'print' ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-white/30'
                }`}>
                  {customType === 'print' && <span className="w-1.5 h-1.5 rounded-full bg-[#0C0D10]" />}
                </span>
              </div>
              <span className="font-sans font-bold text-xs text-[#F4F1EA] mt-1">
                Con Estampado / Logo
              </span>
              <span className="text-[11px] text-[#A0A0A5]">
                Estampado suave a todo color que no se cae con las lavadas
              </span>
            </button>

            {/* Opción B: Con Bordado */}
            {hasEmbroidery && (
              <button
                type="button"
                onClick={() => handleCustomTypeChange('embroidery')}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col gap-1 ${
                  customType === 'embroidery'
                    ? 'bg-[#1C1E26] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/15 ring-1 ring-[#C8A96E]/40'
                    : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base">🧵</span>
                  <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                    customType === 'embroidery' ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-white/30'
                  }`}>
                    {customType === 'embroidery' && <span className="w-1.5 h-1.5 rounded-full bg-[#0C0D10]" />}
                  </span>
                </div>
                <span className="font-sans font-bold text-xs text-[#F4F1EA] mt-1">
                  Con Bordado
                </span>
                <span className="text-[11px] text-[#A0A0A5]">
                  Bordado fino en relieve que dura para siempre
                </span>
              </button>
            )}

            {/* Opción C: Prenda Lisa Sin Marcar */}
            <button
              type="button"
              onClick={() => handleCustomTypeChange('plain')}
              className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col gap-1 ${
                customType === 'plain'
                  ? 'bg-[#1C1E26] border-[#C8A96E] text-[#F4F1EA] shadow-md shadow-[#C8A96E]/15 ring-1 ring-[#C8A96E]/40'
                  : 'bg-[#14151C] border-white/10 text-[#8A8A92] hover:border-white/25 hover:text-[#F4F1EA]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-base">✨</span>
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                  customType === 'plain' ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-white/30'
                }`}>
                  {customType === 'plain' && <span className="w-1.5 h-1.5 rounded-full bg-[#0C0D10]" />}
                </span>
              </div>
              <span className="font-sans font-bold text-xs text-[#F4F1EA] mt-1">
                Prenda Lisa (Sin Estampar)
              </span>
              <span className="text-[11px] text-[#A0A0A5]">
                Prenda lista para usar en color sólido
              </span>
            </button>
          </div>
        </div>

        {/* ACCESO A OPCIONES AVANZADAS / EMPRESAS (DESPLEGABLE ELEGANTE Y SIN ESTORBAR) */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
            className="w-full py-2.5 px-3.5 bg-[#14151C] hover:bg-[#1A1C24] border border-white/10 hover:border-white/20 rounded-xl text-left flex items-center justify-between text-xs text-[#A0A0A5] hover:text-[#F4F1EA] transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#C8A96E]">✦</span>
              <span className="font-medium">
                {showAdvancedOptions ? 'Ocultar opciones adicionales' : '¿Quieres agregar tu logo, notas o elegir ubicación? (Opcional)'}
              </span>
            </span>
            <span className="font-sans text-xs text-[#C8A96E]">{showAdvancedOptions ? '▲ Cerrar' : '▼ Ver'}</span>
          </button>

          {/* CONTENIDO DEL PANEL AVANZADO */}
          {showAdvancedOptions && (
            <div className="mt-3 p-4 bg-[#12141A] border border-white/10 rounded-xl flex flex-col gap-4 animate-in fade-in duration-200">
              
              {/* A. Ubicación del estampado */}
              {customType !== 'plain' && capabilities.allowedPlacements.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs font-semibold text-[#F4F1EA]">
                    Ubicación preferida del logo:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {capabilities.allowedPlacements.map((plc) => {
                      const isSelected = selectedPlacements.includes(plc.label);
                      return (
                        <button
                          key={plc.id}
                          type="button"
                          onClick={() => togglePlacement(plc.label)}
                          className={`px-3 py-1.5 rounded-lg border font-sans text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-[#181A22] border-[#C8A96E] text-[#F4F1EA]'
                              : 'bg-[#0E1015] border-white/10 text-[#8A8A92] hover:border-white/25'
                          }`}
                        >
                          <span className={isSelected ? 'text-[#C8A96E]' : 'text-white/30'}>
                            {isSelected ? '✓' : '○'}
                          </span>
                          <span>{plc.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* B. Subida de archivo vs WhatsApp */}
              {customType !== 'plain' && (
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <span className="font-sans text-xs font-semibold text-[#F4F1EA]">
                    ¿Cómo nos entregas tu diseño?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDesignDeliveryMode('whatsapp')}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2 ${
                        designDeliveryMode === 'whatsapp'
                          ? 'bg-[#141D17] border-[#25D366]/60 text-[#F4F1EA]'
                          : 'bg-[#0E1015] border-white/10 text-[#8A8A92]'
                      }`}
                    >
                      <span className="text-[#25D366]">●</span>
                      <div>
                        <span className="font-bold block">Por el chat de WhatsApp</span>
                        <span className="text-[10px] text-[#A0A0A5]">Nos envías la foto directamente (Más fácil)</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDesignDeliveryMode('upload')}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2 ${
                        designDeliveryMode === 'upload'
                          ? 'bg-[#181A22] border-[#C8A96E] text-[#F4F1EA]'
                          : 'bg-[#0E1015] border-white/10 text-[#8A8A92]'
                      }`}
                    >
                      <span className="text-[#C8A96E]">📁</span>
                      <div>
                        <span className="font-bold block">Subir archivo aquí</span>
                        <span className="text-[10px] text-[#A0A0A5]">Foto o imagen de tu celular</span>
                      </div>
                    </button>
                  </div>

                  {designDeliveryMode === 'upload' && (
                    <div className="mt-1">
                      <FileUploader
                        attachment={attachment}
                        onAttachmentChange={(att) => setAttachment(att)}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* C. Notas adicionales */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-white/5">
                <span className="font-sans text-xs font-semibold text-[#F4F1EA]">
                  Comentarios o indicaciones:
                </span>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: Necesito entrega para el viernes, logo al frente..."
                  className="w-full bg-[#0E1015] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] px-3 py-2 text-xs rounded-lg outline-none"
                />
              </div>

            </div>
          )}
        </div>

        {/* RESUMEN Y BOTÓN PROTAGÓNICO DE WHATSAPP (SIN RODEOS) */}
        <div className="pt-4 border-t border-white/15 flex flex-col gap-4 bg-[#14151C] p-4 sm:p-5 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8A96E] font-semibold block mb-0.5">
                RESUMEN DE TU SELECCIÓN
              </span>
              <span className="text-sm font-semibold text-[#F4F1EA]">
                {effectiveTotalQuantity} {effectiveTotalQuantity === 1 ? 'prenda' : 'prendas'}
                {orderMode === 'quick' ? ` · Talla ${quickSize}` : ''} · {selectedVariant.colorName} ·{' '}
                {readableTechnique}
              </span>
            </div>

            <div className="text-left sm:text-right">
              {product.pricing.type === 'fixed' && estimatedSubtotal !== undefined ? (
                <>
                  <span suppressHydrationWarning className="font-mono text-[11px] text-[#8A8A92] block">
                    ${(effectiveUnitPrice || 0).toLocaleString('es-CO')} c/u (ref.)
                  </span>
                  <span suppressHydrationWarning className="font-mono font-bold text-xl sm:text-2xl text-[#C8A96E]">
                    ${estimatedSubtotal.toLocaleString('es-CO')} COP
                  </span>
                </>
              ) : (
                <span className="font-mono text-xs font-semibold text-[#C8A96E] bg-black/50 px-3 py-1.5 border border-[#C8A96E]/30 rounded-full">
                  Precio exacto por cotización
                </span>
              )}
            </div>
          </div>

          {/* Mensaje de validación accesible si aplica */}
          {validationError && (
            <div
              role="alert"
              className="p-3 bg-red-950/80 border border-red-500/60 rounded-xl text-red-200 text-xs font-mono flex items-center gap-2.5 animate-in fade-in duration-200"
            >
              <span className="text-red-400 font-bold text-sm shrink-0">⚠</span>
              <span>{validationError}</span>
            </div>
          )}

          {/* BOTÓN PRINCIPAL VERDE DE WHATSAPP + BOTÓN SECUNDARIO */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-sans font-bold text-sm sm:text-base py-4 px-6 rounded-xl shadow-xl shadow-[#25D366]/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Pedir por WhatsApp — Te asesoramos gratis</span>
            </button>

            {/* Microcopia tranquilizadora para adultos */}
            <p className="text-center font-sans text-xs text-[#A0A0A5] leading-relaxed">
              ✓ Un asesor humano de nuestro taller en Valledupar te atenderá directamente. Puedes enviarle fotos, logos y preguntas sin ningún compromiso.
            </p>

            {/* Botón secundario para guardar y seguir viendo */}
            <button
              type="button"
              onClick={handleAddToQuote}
              className="w-full bg-[#181A22] hover:bg-[#20222B] text-[#D0CFC9] hover:text-[#F4F1EA] border border-white/15 hover:border-[#C8A96E]/50 font-sans font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-colors cursor-pointer"
            >
              + Guardar en mi lista de cotización
            </button>
          </div>
        </div>

      </div>

      {/* BARRA FLOTANTE FIJA INFERIOR (STICKY ACTION BAR) — SOLO MÓVIL */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0D10]/95 backdrop-blur-xl border-t border-[#C8A96E]/30 py-3 px-4 sm:px-8 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="wrap flex items-center justify-between gap-4">
          
          {/* Lado izquierdo: Prenda + Talla + Total */}
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="w-4 h-4 rounded-full border border-white/30 shrink-0 hidden sm:block shadow-sm"
              style={{ backgroundColor: selectedVariant.colorHex }}
            />
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-xs sm:text-sm text-[#F4F1EA] truncate">
                  {product.title}
                </span>
                <span className="font-mono text-[10px] text-[#C8A96E] bg-white/5 px-2 py-0.5 rounded-full shrink-0">
                  {effectiveTotalQuantity} {effectiveTotalQuantity === 1 ? 'ud' : 'uds'}
                  {orderMode === 'quick' ? ` · ${quickSize}` : ''}
                </span>
              </div>
              <span className="font-sans text-[11px] text-[#8A8A92] truncate hidden sm:block">
                Color {selectedVariant.colorName} · {readableTechnique}
              </span>
            </div>
          </div>

          {/* Lado derecho: Precio + Botón WhatsApp principal */}
          <div className="flex items-center gap-3 shrink-0">
            {product.pricing.type === 'fixed' && estimatedSubtotal !== undefined ? (
              <div className="text-right hidden xs:block">
                <span suppressHydrationWarning className="font-mono font-bold text-sm sm:text-base text-[#C8A96E]">
                  ${estimatedSubtotal.toLocaleString('es-CO')} COP
                </span>
              </div>
            ) : null}

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-sans font-bold text-xs sm:text-sm py-2.5 px-4 sm:px-5 rounded-full shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Pedir por WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleAddToQuote}
              className="bg-[#181A22] hover:bg-[#20222B] text-[#F4F1EA] border border-white/15 hover:border-[#C8A96E]/50 font-sans font-medium text-xs py-2.5 px-3.5 rounded-full transition-colors cursor-pointer hidden md:inline-block"
            >
              + Lista
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
