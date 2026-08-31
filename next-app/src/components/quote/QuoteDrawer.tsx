'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { Button } from '@/components/ui/Button';

export const QuoteDrawer: React.FC = () => {
  const {
    quoteItems,
    isQuoteDrawerOpen,
    setIsQuoteDrawerOpen,
    removeItem,
    clearQuote,
    totalUnits,
    estimatedTotal,
    customer,
    updateCustomer,
    generalNotes,
    setGeneralNotes,
    getWhatsAppUrl,
  } = useQuote();

  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsQuoteDrawerOpen(false);
      }
    };
    if (isQuoteDrawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isQuoteDrawerOpen, setIsQuoteDrawerOpen]);

  if (!isQuoteDrawerOpen) return null;

  const handleSendWhatsApp = () => {
    if (quoteItems.length === 0) return;
    const { url, isConfigured } = getWhatsAppUrl();

    if (isConfigured) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Número de WhatsApp no configurado. Por favor contáctanos a través de nuestro punto físico en Valledupar.');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsQuoteDrawerOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-[#0e0e11] border-l border-white/15 z-50 flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-drawer-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#141419] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#C8A96E] animate-pulse" />
            <div>
              <h3 id="quote-drawer-title" className="font-sans font-bold text-lg text-[#F4F1EA] tracking-tight">
                Tu Solicitud de Cotización
              </h3>
              <span className="font-mono text-[11px] text-[#A0A0A5]">
                {totalUnits} {totalUnits === 1 ? 'pieza total' : 'piezas totales'} configuradas
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsQuoteDrawerOpen(false)}
            className="text-[#A0A0A5] hover:text-[#F4F1EA] p-2 hover:bg-white/5 rounded-xs transition-colors"
            title="Cerrar panel de cotización"
            aria-label="Cerrar panel de cotización"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Items List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-4 custom-scrollbar">
          {quoteItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center my-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#C8A96E] mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-sans font-bold text-base text-[#F4F1EA] mb-1">
                Aún no has agregado productos a cotizar
              </h4>
              <p className="font-mono text-xs text-[#A0A0A5] max-w-xs mb-6 leading-relaxed">
                Explora el catálogo o nuestros servicios, configura tus tallas y técnicas deseadas.
              </p>
              <Button
                variant="gold"
                size="md"
                href="/catalogo"
                onClick={() => setIsQuoteDrawerOpen(false)}
              >
                Explorar Catálogo
              </Button>
            </div>
          ) : (
            <>
              {quoteItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#141419] border border-white/10 rounded-sm flex flex-col gap-3 relative"
                >
                  <div className="flex items-start gap-3.5">
                    {item.image && (
                      <div className="relative w-16 h-20 bg-[#070708] border border-white/10 rounded-xs overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-sans font-bold text-sm text-[#F4F1EA] truncate">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#A0A0A5] hover:text-red-400 p-1"
                          title="Eliminar de la cotización"
                          aria-label={`Eliminar ${item.title}`}
                        >
                          ✕
                        </button>
                      </div>

                      {item.code && (
                        <span className="font-mono text-[10px] text-[#C8A96E] block mb-1">
                          CÓD: {item.code}
                        </span>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {item.selectedVariant && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] bg-[#070708] px-2 py-0.5 border border-white/10 rounded-xs text-[#D0CFC9]">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: item.selectedVariant.colorHex }}
                            />
                            {item.selectedVariant.colorName}
                          </span>
                        )}

                        {item.selectedTechnique && (
                          <span className="font-mono text-[10px] bg-[#070708] px-2 py-0.5 border border-white/10 rounded-xs text-[#C8A96E]">
                            {item.selectedTechnique}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Size breakdown */}
                  {item.sizeDistribution && Object.keys(item.sizeDistribution).length > 0 && (
                    <div className="bg-[#0b0b0e] p-2 rounded-xs border border-white/5 font-mono text-[11px] text-[#A0A0A5]">
                      <span className="text-[#F4F1EA] font-semibold block mb-0.5">Tallas:</span>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(item.sizeDistribution)
                          .filter(([, q]) => q > 0)
                          .map(([s, q]) => (
                            <span key={s} className="bg-white/5 px-1.5 py-0.5 rounded-xs">
                              {s}: <strong className="text-[#F4F1EA]">{q}</strong>
                            </span>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Placements & Attachments */}
                  <div className="flex flex-col gap-1 font-mono text-[11px] text-[#A0A0A5]">
                    {item.selectedPlacements && item.selectedPlacements.length > 0 && (
                      <span>• Ubicación: {item.selectedPlacements.join(', ')}</span>
                    )}
                    {item.attachment && (
                      <span className="text-[#C8A96E] truncate">
                        • Diseño adjunto: {item.attachment.name}
                      </span>
                    )}
                    {item.notes && (
                      <span className="italic line-clamp-1 opacity-80">
                        • Notas: &quot;{item.notes}&quot;
                      </span>
                    )}
                  </div>

                  {/* Item Footer */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#A0A0A5]">
                      Cantidad: <strong className="text-[#F4F1EA]">{item.totalQuantity} und.</strong>
                    </span>

                    {item.estimatedSubtotal ? (
                      <span className="font-bold text-[#C8A96E]">
                        ${item.estimatedSubtotal.toLocaleString('es-CO')} COP
                      </span>
                    ) : (
                      <span className="text-[#C8A96E] text-[11px]">Bajo cotización</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Optional Contact Fields Accordion */}
              <div className="border border-white/10 rounded-sm bg-[#141419] overflow-hidden mt-2">
                <button
                  type="button"
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full p-3.5 flex items-center justify-between font-mono text-xs text-[#F4F1EA] hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✦</span> Datos de Contacto (Opcional)
                  </span>
                  <span>{showContactForm ? '▲' : '▼'}</span>
                </button>

                {showContactForm && (
                  <div className="p-4 pt-1 border-t border-white/10 flex flex-col gap-3 bg-[#0e0e11]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        placeholder="Tu nombre / Contacto"
                        value={customer.name || ''}
                        onChange={(e) => updateCustomer({ name: e.target.value })}
                        className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-2.5 font-sans text-xs rounded-xs outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Empresa / Marca"
                        value={customer.company || ''}
                        onChange={(e) => updateCustomer({ company: e.target.value })}
                        className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-2.5 font-sans text-xs rounded-xs outline-none"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Ciudad / Municipio (ej. Valledupar, Aguachica...)"
                      value={customer.city || ''}
                      onChange={(e) => updateCustomer({ city: e.target.value })}
                      className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-2.5 font-sans text-xs rounded-xs outline-none"
                    />

                    <textarea
                      rows={2}
                      placeholder="Observaciones generales para toda la cotización..."
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-2.5 font-sans text-xs rounded-xs outline-none resize-none"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer with totals & WhatsApp CTA */}
        {quoteItems.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#141419] border-t border-white/15 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[#A0A0A5]">
                <span>Total de prendas / piezas:</span>
                <span className="text-[#F4F1EA] font-bold">{totalUnits} unidades</span>
              </div>

              {estimatedTotal !== undefined && (
                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span className="text-[#A0A0A5]">Total estimado referencia:</span>
                  <span className="font-bold text-base text-[#C8A96E]">
                    ${estimatedTotal.toLocaleString('es-CO')} COP
                  </span>
                </div>
              )}
            </div>

            <Button
              variant="wa"
              size="lg"
              onClick={handleSendWhatsApp}
              className="w-full"
              leftIcon={
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                </svg>
              }
            >
              Enviar Cotización por WhatsApp
            </Button>

            <Link
              href="/cotizar"
              onClick={() => setIsQuoteDrawerOpen(false)}
              className="font-mono text-[11px] uppercase tracking-wider text-center text-[#C8A96E] hover:text-[#F4F1EA] py-1 transition-colors"
            >
              Ver página completa de cotización & datos de entrega →
            </Link>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#A0A0A5]">
              <span>* Se abrirá WhatsApp con el resumen formateado.</span>
              <button
                onClick={clearQuote}
                className="hover:text-red-400 underline cursor-pointer"
              >
                Vaciar lista
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
