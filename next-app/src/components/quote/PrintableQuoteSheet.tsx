'use client';

import React from 'react';
import Image from 'next/image';
import { QuoteItem, QuoteCustomer, Business } from '@/domain';

export interface PrintableQuoteSheetProps {
  quoteItems: QuoteItem[];
  customer: QuoteCustomer;
  generalNotes?: string;
  totalUnits: number;
  estimatedTotal?: number;
  business: Business;
  quoteNumber?: string;
  currentDate?: string;
  onClose: () => void;
}

export const PrintableQuoteSheet: React.FC<PrintableQuoteSheetProps> = ({
  quoteItems,
  customer,
  generalNotes,
  totalUnits,
  estimatedTotal,
  business,
  quoteNumber,
  currentDate = 'Valledupar, Cesar',
  onClose,
}) => {
  const customerDigits = (customer.phone || customer.name || 'VAL').replace(/\D/g, '');
  const quoteSuffix = customerDigits.slice(-4) || '1088';
  const computedQuoteNumber = quoteNumber || `COT-2026-${quoteSuffix}-${totalUnits}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto p-4 sm:p-8 flex items-center justify-center">
      
      {/* Barra flotante de acciones (se oculta al imprimir) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 print:hidden bg-[#14151C] border border-white/20 p-2 rounded-xl shadow-2xl">
        <button
          type="button"
          onClick={handlePrint}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-lg transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-4 11H9v-5h6v5zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-9H3v4h18V3z" />
          </svg>
          <span>Imprimir / Guardar como PDF</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 text-[#F4F1EA] text-xs font-mono px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Cerrar ✕
        </button>
      </div>

      {/* Hoja membretada oficial (diseñada para papel A4 / Carta) */}
      <div className="w-full max-w-4xl bg-white text-[#111] p-8 sm:p-12 rounded-sm shadow-2xl my-auto print:m-0 print:p-8 print:shadow-none print:w-full print:max-w-none">
        
        {/* Encabezado Membretado */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b-2 border-[#C8A96E]">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-300 bg-gray-50 shrink-0">
              <Image
                src={business.logoUrl || '/assets/logo-isaias-3.png'}
                alt={business.name}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-sans font-black text-2xl tracking-tight text-gray-900 uppercase">
                {business.name}
              </h1>
              <span className="font-mono text-xs text-gray-600">
                Taller de Confección & Personalización Textil
              </span>
              <span className="font-sans text-xs text-gray-500">
                Valledupar, Cesar · WhatsApp: +{business.whatsappPhone}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:items-end font-mono text-xs text-gray-600">
            <span className="font-bold text-sm text-gray-900 bg-gray-100 px-3 py-1 rounded">
              {computedQuoteNumber}
            </span>
            <span className="mt-1">Fecha: {currentDate}</span>
            <span>Validez: 15 días calendario</span>
          </div>
        </div>

        {/* Datos del Cliente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 bg-gray-50 rounded border border-gray-200 text-xs font-sans">
          <div>
            <span className="text-gray-500 block uppercase font-mono text-[10px]">Cliente / Solicitante:</span>
            <strong className="text-sm text-gray-900">{customer.name || 'Cliente Particular'}</strong>
            {customer.company && (
              <span className="text-gray-600 block">Empresa: {customer.company}</span>
            )}
          </div>
          <div>
            <span className="text-gray-500 block uppercase font-mono text-[10px]">Destino / Entrega:</span>
            <strong className="text-sm text-gray-900">{customer.city || 'Valledupar, Cesar'}</strong>
            <span className="text-gray-600 block">Estado: Cotización Preliminar para Aprobación</span>
          </div>
        </div>

        {/* Tabla Desglosada de Prendas / Ítems */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-100 font-mono text-[11px] text-gray-700 uppercase">
                <th className="py-2.5 px-3">Ítem</th>
                <th className="py-2.5 px-3">Prenda / Especificación</th>
                <th className="py-2.5 px-3">Técnica & Detalles</th>
                <th className="py-2.5 px-3 text-center">Tallas / Und</th>
                <th className="py-2.5 px-3 text-right">Cant.</th>
                <th className="py-2.5 px-3 text-right">Unitario</th>
                <th className="py-2.5 px-3 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quoteItems.map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 font-mono text-gray-500">
                    0{idx + 1}
                  </td>
                  <td className="py-3 px-3">
                    <strong className="text-gray-900 block font-sans text-sm">{item.title}</strong>
                    {item.code && <span className="font-mono text-[10px] text-gray-500">Cód: {item.code} · </span>}
                    {item.selectedVariant && (
                      <span className="text-gray-600 font-medium">Color: {item.selectedVariant.colorName}</span>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-gray-800 block">{item.selectedTechnique || 'Estándar'}</span>
                    {item.selectedPlacements && item.selectedPlacements.length > 0 && (
                      <span className="text-[10px] text-gray-500 block">
                        Ubicación: {item.selectedPlacements.join(', ')}
                      </span>
                    )}
                    {item.attachment && (
                      <span className="text-[10px] text-[#25D366] font-semibold block">
                        ✓ Diseño adjunto: {item.attachment.name}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center font-mono">
                    {item.sizeDistribution && Object.keys(item.sizeDistribution).length > 0 ? (
                      <div className="flex flex-wrap justify-center gap-1">
                        {Object.entries(item.sizeDistribution)
                          .filter(([, qty]) => qty > 0)
                          .map(([s, q]) => (
                            <span key={s} className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200 text-[10px]">
                              {s}:{q}
                            </span>
                          ))}
                      </div>
                    ) : (
                      <span className="text-gray-500">Estándar</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-gray-900">
                    {item.totalQuantity}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-gray-700">
                    {item.unitPrice ? `$${item.unitPrice.toLocaleString('es-CO')}` : 'Bajo vol.'}
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-gray-900">
                    {item.estimatedSubtotal
                      ? `$${item.estimatedSubtotal.toLocaleString('es-CO')}`
                      : 'Por confirmar'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totales y Resumen */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-4 border-t border-gray-300">
          <div className="max-w-md text-xs text-gray-600 leading-relaxed font-sans">
            <h4 className="font-bold text-gray-900 uppercase font-mono text-[11px] mb-1">Condiciones Comerciales:</h4>
            <p>• <strong>Forma de pago:</strong> 50% de anticipo para inicio de producción y 50% contra entrega.</p>
            <p>• <strong>Garantía:</strong> Estampados y bordados certificados de alta durabilidad en lavado.</p>
            {generalNotes && (
              <p className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-gray-800 italic">
                Indicaciones: &ldquo;{generalNotes}&rdquo;
              </p>
            )}
          </div>

          <div className="w-full sm:w-64 bg-gray-50 p-4 rounded border border-gray-200 font-mono text-xs flex flex-col gap-2">
            <div className="flex justify-between text-gray-700">
              <span>Total Prendas:</span>
              <strong className="text-gray-900">{totalUnits} unidades</strong>
            </div>
            {estimatedTotal && estimatedTotal > 0 && (
              <div className="flex justify-between text-sm border-t border-gray-300 pt-2 font-bold text-gray-900">
                <span>Total Estimado:</span>
                <span className="text-[#B8985D]">${estimatedTotal.toLocaleString('es-CO')} COP</span>
              </div>
            )}
            <span className="text-[10px] text-gray-500 pt-1 font-sans">
              * Valores en pesos colombianos (COP).
            </span>
          </div>
        </div>

        {/* Firmas de Autorización */}
        <div className="grid grid-cols-2 gap-12 pt-14 text-center text-xs font-sans text-gray-500">
          <div className="border-t border-gray-300 pt-2">
            <strong className="text-gray-800 block">Taller {business.name}</strong>
            <span>Valledupar, Cesar</span>
          </div>
          <div className="border-t border-gray-300 pt-2">
            <strong className="text-gray-800 block">Aprobación Cliente / Compras</strong>
            <span>Firma o Sello Autorizado</span>
          </div>
        </div>

      </div>

    </div>
  );
};
