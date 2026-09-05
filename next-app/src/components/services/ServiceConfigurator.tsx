'use client';

import React, { useState } from 'react';
import { Service, DesignFileAttachment } from '@/domain';
import { TECHNIQUES } from '@/data/techniques';
import { FileUploader } from '@/components/configurator/FileUploader';
import { buildServiceQuoteItem, calculateUnitPrice } from '@/lib/quoteBuilder';
import { useQuote } from '@/context/QuoteContext';
import { getSingleItemWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

export interface ServiceConfiguratorProps {
  service: Service;
}

export const ServiceConfigurator: React.FC<ServiceConfiguratorProps> = ({ service }) => {
  const { addItem, setIsQuoteDrawerOpen, businessId } = useQuote();

  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>(service.techniques[0] || '');
  const [totalQuantity, setTotalQuantity] = useState<number>(service.minUnits || 1);
  const [garmentType, setGarmentType] = useState<string>('');
  const [attachment, setAttachment] = useState<DesignFileAttachment | undefined>(undefined);
  const [notes, setNotes] = useState<string>('');

  const currentTechniqueObj = TECHNIQUES.find(
    (t) => t.id === selectedTechniqueId || t.slug === selectedTechniqueId
  );

  const effectiveUnitPrice =
    service.pricing.type === 'from' || service.pricing.type === 'fixed'
      ? calculateUnitPrice(
          service.pricing.basePrice,
          totalQuantity,
          service.pricing.bulkDiscounts
        )
      : undefined;

  const estimatedSubtotal =
    effectiveUnitPrice !== undefined ? effectiveUnitPrice * totalQuantity : undefined;

  const currentQuoteItem = buildServiceQuoteItem({
    service,
    selectedTechnique: currentTechniqueObj?.name || selectedTechniqueId,
    totalQuantity,
    garmentType,
    attachment,
    notes,
  });

  const handleDirectWhatsApp = () => {
    const { url, isConfigured } = getSingleItemWhatsAppUrl(currentQuoteItem, businessId);
    if (isConfigured) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToQuote = () => {
    addItem(currentQuoteItem);
    setIsQuoteDrawerOpen(true);
  };

  return (
    <div className="flex flex-col gap-6 bg-[#0e0e11] border border-white/10 rounded-sm p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-1">
            COTIZADOR DE SERVICIO
          </span>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight">
            Especifica tu Requerimiento
          </h3>
        </div>
        <span className="font-mono text-xs text-[#A0A0A5] bg-[#141419] px-3 py-1.5 border border-white/10 rounded-xs">
          Mínimo: {service.minUnits} {service.minUnits === 1 ? 'unidad' : 'unidades'}
        </span>
      </div>

      {/* 1. TECHNIQUE CHOICE */}
      {service.techniques.length > 1 && (
        <div className="flex flex-col gap-2.5">
          <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
            1. TÉCNICA REQUERIDA:
          </label>
          <div className="flex flex-wrap gap-2.5">
            {service.techniques.map((tId) => {
              const tech = TECHNIQUES.find((t) => t.id === tId || t.slug === tId);
              const isSelected = selectedTechniqueId === tId;
              return (
                <button
                  key={tId}
                  type="button"
                  onClick={() => setSelectedTechniqueId(tId)}
                  className={`px-4 py-2.5 rounded-xs border font-mono text-xs transition-all ${
                    isSelected
                      ? 'bg-[#1a1a22] border-[#C8A96E] text-[#F4F1EA]'
                      : 'bg-[#141419] border-white/10 text-[#A0A0A5] hover:border-white/30'
                  }`}
                >
                  {tech?.name || tId}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. QUANTITY INPUT */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
        <div className="flex items-center justify-between">
          <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
            2. CANTIDAD DE PRENDAS / METROS:
          </label>
          <span className="font-mono text-xs text-[#A0A0A5]">
            Mínimo: {service.minUnits} und.
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[#141419] p-3 border border-white/15 rounded-xs">
          <button
            type="button"
            onClick={() => setTotalQuantity(Math.max(service.minUnits || 1, totalQuantity - 1))}
            className="w-8 h-8 rounded-xs bg-[#070708] border border-white/10 flex items-center justify-center font-bold text-[#A0A0A5] hover:text-[#F4F1EA]"
          >
            -
          </button>
          <input
            type="number"
            min={service.minUnits || 1}
            value={totalQuantity}
            onChange={(e) =>
              setTotalQuantity(Math.max(service.minUnits || 1, parseInt(e.target.value, 10) || service.minUnits || 1))
            }
            className="flex-1 text-center font-mono font-bold text-base bg-transparent text-[#F4F1EA] outline-none"
          />
          <button
            type="button"
            onClick={() => setTotalQuantity(totalQuantity + 1)}
            className="w-8 h-8 rounded-xs bg-[#070708] border border-white/10 flex items-center justify-center font-bold text-[#A0A0A5] hover:text-[#F4F1EA]"
          >
            +
          </button>
        </div>
      </div>

      {/* 3. GARMENT TYPE (If client provides own garments) */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
        <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
          3. TIPO DE PRENDAS O SUPERFICIE (SI SON PROPIAS):
        </label>
        <input
          type="text"
          placeholder="Ej: 50 camisas de dotación manga larga, 20 gorras cerradas, etc."
          value={garmentType}
          onChange={(e) => setGarmentType(e.target.value)}
          className="w-full bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 font-sans text-xs rounded-xs outline-none"
        />
      </div>

      {/* 4. DESIGN FILE */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
        <label className="font-sans text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
          4. TU FOTO, LOGO O DISEÑO:
        </label>
        <FileUploader
          attachment={attachment}
          onAttachmentChange={(att) => setAttachment(att)}
        />
      </div>

      {/* 5. NOTES */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
        <label className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
          5. INDICACIONES Y DIMENSIONES ESTIMADAS:
        </label>
        <textarea
          rows={3}
          placeholder="Indica medidas aproximadas (ej. 8x8 cm en pechera), tipo de relieve (plano o 3D) o fecha requerida."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 font-sans text-xs rounded-xs outline-none resize-y"
        />
      </div>

      {/* LIVE SUMMARY & ACTIONS */}
      <div className="pt-5 border-t border-white/15 flex flex-col gap-4 bg-[#141419] p-5 rounded-sm">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] text-[#C8A96E] uppercase tracking-wider block">
              RESUMEN ESTIMADO
            </span>
            <span className="text-sm font-bold text-[#F4F1EA]">
              {totalQuantity} {totalQuantity === 1 ? 'unidad' : 'unidades'} · {currentTechniqueObj?.name || selectedTechniqueId}
            </span>
          </div>

          <div className="text-right">
            {estimatedSubtotal !== undefined ? (
              <>
                <span className="font-mono text-[10px] text-[#A0A0A5] block">
                  ${(effectiveUnitPrice || 0).toLocaleString('es-CO')} c/u (estimado)
                </span>
                <span className="font-mono font-bold text-lg text-[#C8A96E]">
                  ${estimatedSubtotal.toLocaleString('es-CO')} COP
                </span>
              </>
            ) : (
              <span className="font-sans text-xs text-[#C8A96E] bg-black/40 px-2.5 py-1 border border-[#C8A96E]/20 rounded-xs">
                Precio se confirma con tu logo
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="wa"
            size="lg"
            onClick={handleDirectWhatsApp}
            className="flex-1"
          >
            Cotizar Servicio por WhatsApp
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleAddToQuote}
          >
            Añadir a Cotización +
          </Button>
        </div>
      </div>
    </div>
  );
};
