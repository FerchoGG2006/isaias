'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';
import { TrustGuaranteeCard } from '@/components/ui/TrustGuaranteeCard';

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
    business,
  } = useQuote();

  const [showContactForm, setShowContactForm] = useState(false);
  const [artworkStatus, setArtworkStatus] = useState<'ready' | 'needs_design'>('ready');

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

    // Append artwork status to general notes in URL
    const artText = artworkStatus === 'ready'
      ? '\n• *Diseño o logo:* Tengo la foto o logo listo.'
      : '\n• *Diseño o logo:* Necesito asesoría o ayuda con el diseño.';

    if (isConfigured && url && url !== '#contacto') {
      const fullUrl = `${url}${encodeURIComponent(artText)}`;
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    } else {
      const fallbackUrl = getWhatsAppChatUrl(
        business?.whatsappPhone,
        `¡Hola ${business?.name || 'Variedades Isaías'}! Me gustaría solicitar cotización para mis productos seleccionados.${artText}`
      );
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity"
        onClick={() => setIsQuoteDrawerOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white border-l border-slate-200 z-50 flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-drawer-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AFEF] animate-pulse" />
            <div>
              <h3 id="quote-drawer-title" className="font-sans font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                Tu Lista de Cotización
              </h3>
              <span className="text-xs text-slate-500">
                {totalUnits} {totalUnits === 1 ? 'prenda seleccionada' : 'prendas totales'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsQuoteDrawerOpen(false)}
            className="text-slate-400 hover:text-slate-800 p-2 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            title="Cerrar panel de cotización"
            aria-label="Cerrar panel de cotización"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Items List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-4">
          {quoteItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center my-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-[#0284C7] mb-4 border border-slate-200">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-sans font-bold text-base text-slate-900 mb-1">
                Aún no has agregado prendas a tu lista
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mb-6 leading-relaxed font-normal">
                Explora el catálogo, selecciona color y talla, y solicita precios de taller al por mayor.
              </p>
              <Link
                href="/catalogo"
                onClick={() => setIsQuoteDrawerOpen(false)}
                className="text-xs uppercase tracking-wider bg-[#00AFEF] hover:bg-[#0284C7] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Explorar Catálogo
              </Link>
            </div>
          ) : (
            <>
              {quoteItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col gap-3 relative shadow-xs"
                >
                  <div className="flex items-start gap-3.5">
                    {item.image && (
                      <div className="relative w-16 h-20 bg-slate-100 border border-slate-200 rounded-lg overflow-hidden shrink-0">
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
                        <h4 className="font-sans font-bold text-sm text-slate-900 truncate">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                          title="Eliminar"
                          aria-label={`Eliminar ${item.title}`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {item.code && (
                        <span className="text-[10px] text-[#0284C7] block mb-1 font-mono font-bold">
                          Ref: {item.code}
                        </span>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {item.selectedVariant && (
                          <span className="inline-flex items-center gap-1 text-[10px] bg-slate-100 px-2.5 py-0.5 border border-slate-200 rounded-full text-slate-800">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: item.selectedVariant.colorHex }}
                            />
                            {item.selectedVariant.colorName}
                          </span>
                        )}

                        {item.selectedTechnique && (
                          <span className="text-[10px] bg-[#00AFEF]/10 px-2.5 py-0.5 border border-[#00AFEF]/30 rounded-full text-[#0284C7] font-semibold">
                            {item.selectedTechnique}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Size breakdown */}
                  {item.sizeDistribution && Object.keys(item.sizeDistribution).length > 0 && (
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-600">
                      <span className="text-slate-900 font-semibold block mb-1">Tallas:</span>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(item.sizeDistribution)
                          .filter(([, q]) => q > 0)
                          .map(([s, q]) => (
                            <span key={s} className="bg-slate-100 px-2 py-0.5 rounded-md text-xs text-slate-800">
                              {s}: <strong className="text-[#0284C7]">{q}</strong>
                            </span>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Item Footer */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Cantidad: <strong className="text-slate-900">{item.totalQuantity} und.</strong>
                    </span>

                    {item.estimatedSubtotal ? (
                      <span className="font-bold text-[#0284C7] font-mono">
                        ${item.estimatedSubtotal.toLocaleString('es-CO')} COP
                      </span>
                    ) : (
                      <span className="text-[#0284C7] text-xs font-semibold">Precio de taller</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Artwork Status Selector */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-2 shadow-xs mt-1">
                <span className="text-[11px] font-semibold text-slate-900">¿Tienes listo tu logo o foto?</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setArtworkStatus('ready')}
                    className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      artworkStatus === 'ready'
                        ? 'bg-[#00AFEF]/10 border-[#00AFEF] text-[#0284C7] font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 text-[#0284C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tengo el logo listo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setArtworkStatus('needs_design')}
                    className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      artworkStatus === 'needs_design'
                        ? 'bg-[#00AFEF]/10 border-[#00AFEF] text-[#0284C7] font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 text-[#0284C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span>Requiero asesoría</span>
                  </button>
                </div>
              </div>

              {/* Optional Contact Fields */}
              <div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full p-3.5 flex items-center justify-between text-xs text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <svg className="w-3.5 h-3.5 text-[#0284C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Datos de Contacto (Opcional)</span>
                  </span>
                  <svg className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${showContactForm ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showContactForm && (
                  <div className="p-4 pt-1 border-t border-slate-200 flex flex-col gap-3 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        placeholder="Tu nombre (opcional)"
                        value={customer.name || ''}
                        onChange={(e) => updateCustomer({ name: e.target.value })}
                        className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] text-slate-900 placeholder:text-slate-400 p-2.5 text-xs rounded-xl outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Empresa / Marca (opcional)"
                        value={customer.company || ''}
                        onChange={(e) => updateCustomer({ company: e.target.value })}
                        className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] text-slate-900 placeholder:text-slate-400 p-2.5 text-xs rounded-xl outline-none"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Ciudad (ej. Valledupar...)"
                      value={customer.city || ''}
                      onChange={(e) => updateCustomer({ city: e.target.value })}
                      className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] text-slate-900 placeholder:text-slate-400 p-2.5 text-xs rounded-xl outline-none"
                    />

                    <textarea
                      rows={2}
                      placeholder="Observaciones generales para tu pedido..."
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] text-slate-900 placeholder:text-slate-400 p-2.5 text-xs rounded-xl outline-none resize-none"
                    />
                  </div>
                )}
              </div>

              {/* Tarjeta de Garantía y Confianza */}
              <TrustGuaranteeCard compact={true} className="mt-2" />
            </>
          )}
        </div>

        {/* Footer with totals & WhatsApp CTA */}
        {quoteItems.length > 0 && (
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Total de piezas:</span>
                <span className="text-slate-900 font-bold">{totalUnits} unidades</span>
              </div>

              {estimatedTotal !== undefined && (
                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <span className="text-slate-600">Total estimado:</span>
                  <span className="font-bold text-base text-[#0284C7] font-mono">
                    ${estimatedTotal.toLocaleString('es-CO')} COP
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all shadow-md shadow-emerald-500/10 hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              <span>Enviar Pedido por WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <Link
                href="/cotizar"
                onClick={() => setIsQuoteDrawerOpen(false)}
                className="text-[#0284C7] hover:underline transition-colors font-semibold"
              >
                Página completa de cotización →
              </Link>
              <button
                onClick={clearQuote}
                className="hover:text-red-500 underline cursor-pointer"
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
