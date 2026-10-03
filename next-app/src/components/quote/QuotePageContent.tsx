'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { PrintableQuoteSheet } from './PrintableQuoteSheet';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const QuotePageContent: React.FC = () => {
  const {
    quoteItems,
    removeItem,
    clearQuote,
    totalUnits,
    estimatedTotal,
    business,
    customer,
    updateCustomer,
    generalNotes,
    setGeneralNotes,
    getWhatsAppUrl,
    showToast,
  } = useQuote();

  const [copied, setCopied] = useState(false);
  const [isPrintSheetOpen, setIsPrintSheetOpen] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const { url, message, isConfigured } = getWhatsAppUrl();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      showToast('✓ Resumen copiado al portapapeles');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast('No se pudo copiar el texto');
    }
  };

  return (
    <div className="wrap max-w-7xl mx-auto">
      
      {/* Breadcrumbs */}
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Solicitud de Cotización' }]} />
      </div>

      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-slate-200 pb-8">
        <div className="flex flex-col gap-3 max-w-2xl">
          <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Solicitud de Cotización
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Revisa las especificaciones de tus prendas, ingresa tus datos de contacto y envía tu orden directamente a nuestro taller por WhatsApp.
          </p>
        </div>

        {quoteItems.length > 0 && (
          <button
            onClick={clearQuote}
            className="font-sans text-xs uppercase tracking-wider text-slate-500 hover:text-red-500 self-start md:self-auto transition-colors cursor-pointer"
          >
            Vaciar lista de cotización
          </button>
        )}
      </div>

      {quoteItems.length === 0 ? (
        /* Empty State */
        <div className="bg-white border border-slate-200 rounded-2xl p-12 sm:p-20 text-center flex flex-col items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0284C7]">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900">Tu lista de cotización está vacía</h2>
            <p className="text-sm text-slate-600 font-normal">
              Explora nuestras prendas y servicios de taller para agregar tu primer producto.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/catalogo"
              className="font-sans text-xs uppercase tracking-[0.14em] bg-[#00AFEF] hover:bg-[#0284C7] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              Explorar Catálogo →
            </Link>
            <Link
              href="/servicios"
              className="font-sans text-xs uppercase tracking-[0.14em] bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl transition-all font-semibold shadow-xs"
            >
              Servicios de Estampado y Bordado
            </Link>
          </div>
        </div>
      ) : (
        /* Main 2-Column Quote Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Items List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] font-bold flex items-center justify-between">
              <span>PIEZAS CONFIGURADAS ({quoteItems.length})</span>
              <span>TOTAL UNIDADES: {totalUnits}</span>
            </h2>

            <div className="flex flex-col gap-6">
              {quoteItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 hover:border-[#00AFEF]/60 rounded-2xl p-6 flex flex-col gap-5 transition-all shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Item Image */}
                    <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                      <Image
                        src={item.image || '/assets/hero-main.jpg'}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item Summary Details */}
                    <div className="flex flex-col justify-between flex-grow gap-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col">
                          <span className="font-mono text-[10px] text-[#0284C7] uppercase tracking-wider font-bold">
                            ITEM 0{idx + 1} · {item.code || 'CONFECCIÓN'}
                          </span>
                          <h3 className="font-sans font-bold text-xl text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="font-mono text-xs text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Eliminar de la cotización"
                          aria-label="Eliminar item"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Technical Specs Pills */}
                      <div className="flex flex-wrap gap-2 font-mono text-[11px] text-slate-600 pt-1">
                        {item.selectedVariant && (
                          <span className="bg-slate-50 px-2.5 py-1 border border-slate-200 rounded-lg">
                            Color: <strong className="text-slate-900">{item.selectedVariant.colorName}</strong>
                          </span>
                        )}
                        {item.selectedTechnique && (
                          <span className="bg-slate-50 px-2.5 py-1 border border-slate-200 rounded-lg">
                            Técnica: <strong className="text-slate-900">{item.selectedTechnique}</strong>
                          </span>
                        )}
                        {item.selectedPlacements && item.selectedPlacements.length > 0 && (
                          <span className="bg-slate-50 px-2.5 py-1 border border-slate-200 rounded-lg">
                            Ubicación: <strong className="text-slate-900">{item.selectedPlacements.join(', ')}</strong>
                          </span>
                        )}
                        <span className="bg-[#00AFEF]/10 px-2.5 py-1 border border-[#00AFEF]/30 text-[#0284C7] rounded-lg font-bold">
                          {item.totalQuantity} {item.totalQuantity === 1 ? 'unidad' : 'unidades'}
                        </span>
                      </div>

                      {/* Size Distribution */}
                      {item.sizeDistribution && Object.keys(item.sizeDistribution).length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px]">
                          <span className="text-slate-500 font-sans">Curva de Tallas:</span>
                          {Object.entries(item.sizeDistribution).map(([sz, qty]) => (
                            <span key={sz} className="bg-slate-100 px-2 py-0.5 border border-slate-200 rounded-md text-slate-800">
                              {sz}: <strong className="text-[#0284C7]">{qty}</strong>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Design Attachment Info */}
                      {item.attachment && (
                        <div className="pt-1 font-mono text-[11px] text-slate-500 flex items-center gap-2">
                          <span>📎 Arte adjunto:</span>
                          {item.attachment.fileUrl ? (
                            <a
                              href={item.attachment.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0284C7] hover:underline truncate max-w-xs transition-colors flex items-center gap-1 font-semibold"
                            >
                              <span>{item.attachment.name}</span>
                              <span className="text-[10px]">↗</span>
                            </a>
                          ) : (
                            <span className="text-slate-800 underline truncate max-w-xs">{item.attachment.name}</span>
                          )}
                        </div>
                      )}

                      {/* Item Notes */}
                      {item.notes && (
                        <p className="pt-1 text-xs text-slate-500 italic font-normal">
                          &ldquo;{item.notes}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add More Items CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-sans text-xs">
              <Link
                href="/catalogo"
                className="text-[#0284C7] hover:text-[#0369A1] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>+ Agregar otra prenda del catálogo</span>
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href="/servicios"
                className="text-[#0284C7] hover:text-[#0369A1] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>+ Agregar estampado o bordado sobre prendas propias</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Customer Info & WhatsApp Dispatch Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sticky top-24 shadow-sm">
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-slate-900">
                Enviar a WhatsApp
              </h2>
              <p className="font-sans text-xs text-slate-600 font-normal mt-1">
                Un asesor humano en Valledupar te confirmará disponibilidad, diseño y tiempo de entrega.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Verificación antispam honeypot: Si el campo oculto tiene contenido, es un bot
                if (honeypot) {
                  return;
                }
                if (url && url !== '#') {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }}
              className="flex flex-col gap-4 font-sans text-xs"
            >
              {/* Campo Honeypot Oculto Antispam */}
              <div aria-hidden="true" style={{ display: 'none', position: 'absolute', left: '-9999px' }}>
                <label htmlFor="website_check_hp">No llenar si eres humano:</label>
                <input
                  id="website_check_hp"
                  type="text"
                  name="website_check_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-700 font-semibold text-xs">
                  Tu nombre o contacto (Opcional):
                </label>
                <input
                  type="text"
                  value={customer.name || ''}
                  onChange={(e) => updateCustomer({ name: e.target.value })}
                  placeholder="Ej: Carlos Gómez"
                  className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] focus:bg-white text-slate-900 placeholder:text-slate-400 p-3 rounded-xl outline-none text-xs transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-700 font-semibold text-xs">
                    Ciudad de Entrega (Opcional):
                  </label>
                  <input
                    type="text"
                    value={customer.city || ''}
                    onChange={(e) => updateCustomer({ city: e.target.value })}
                    placeholder="Valledupar / Otra"
                    className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] focus:bg-white text-slate-900 placeholder:text-slate-400 p-3 rounded-xl outline-none text-xs transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-700 font-semibold text-xs">
                    Empresa o Marca (Opcional):
                  </label>
                  <input
                    type="text"
                    value={customer.company || ''}
                    onChange={(e) => updateCustomer({ company: e.target.value })}
                    placeholder="Nombre comercial"
                    className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] focus:bg-white text-slate-900 placeholder:text-slate-400 p-3 rounded-xl outline-none text-xs transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-700 font-semibold text-xs">
                  Comentarios o fechas de entrega:
                </label>
                <textarea
                  rows={2}
                  value={generalNotes}
                  onChange={(e) => setGeneralNotes(e.target.value)}
                  placeholder="Ej: ¿Tienen entrega para este fin de semana?"
                  className="bg-slate-50 border border-slate-300 focus:border-[#00AFEF] focus:bg-white text-slate-900 placeholder:text-slate-400 p-3 rounded-xl outline-none resize-none text-xs transition-colors"
                />
              </div>

              {/* Order Summary Numbers */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-2 my-1 font-sans text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600">Total Prendas / Items:</span>
                  <span className="text-slate-900 font-bold">{totalUnits} unidades</span>
                </div>
                {estimatedTotal !== undefined && estimatedTotal > 0 && (
                  <div className="flex justify-between border-t border-slate-200 pt-2 font-mono">
                    <span className="text-slate-600 font-sans">Estimado Referencial:</span>
                    <span className="text-[#0284C7] font-bold">
                      ${estimatedTotal.toLocaleString('es-CO')} COP
                    </span>
                  </div>
                )}
                <span className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                  El valor final exacto se confirma directamente en el chat según tus detalles y diseño.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                {isConfigured ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        // Analytics
                        import('@/lib/analytics').then(({ trackQuoteSubmitted, trackWhatsAppClick }) => {
                          trackQuoteSubmitted(totalUnits, estimatedTotal, business.id);
                          trackWhatsAppClick('quote_page');
                        });
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/10 transition-all text-center"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                    </svg>
                    <span>Enviar Cotización por WhatsApp (1 Clic)</span>
                  </a>
                ) : (
                  <button
                    type="submit"
                    className="w-full font-sans text-xs uppercase tracking-wider bg-[#00AFEF] hover:bg-[#0284C7] text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all cursor-pointer text-center"
                  >
                    Enviar Cotización al Taller
                  </button>
                )}

                <p className="text-center text-[11px] text-slate-500">
                  Al dar clic, se abrirá WhatsApp con el resumen de tus prendas ya listo para enviar.
                </p>

                <button
                  type="button"
                  onClick={() => setIsPrintSheetOpen(true)}
                  className="w-full font-sans text-xs uppercase tracking-wider bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs font-semibold"
                >
                  <svg className="w-4 h-4 text-[#0284C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Hoja de Cotización Formal (PDF / Imprimir)</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full font-sans text-xs uppercase tracking-wider bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 py-3 rounded-xl transition-colors cursor-pointer font-medium"
                >
                  {copied ? '✓ Copiado al portapapeles' : 'Copiar Resumen de Texto'}
                </button>
              </div>

              <div className="pt-2 text-center font-mono text-[10px] text-slate-500">
                Atención directa en Valledupar · WhatsApp: {business.whatsappPhone}
              </div>
            </form>
          </div>

        </div>
      )}

      {/* Modal Imprimible de Cotización Formal */}
      {isPrintSheetOpen && (
        <PrintableQuoteSheet
          quoteItems={quoteItems}
          customer={customer}
          generalNotes={generalNotes}
          totalUnits={totalUnits}
          estimatedTotal={estimatedTotal}
          business={business}
          onClose={() => setIsPrintSheetOpen(false)}
        />
      )}

    </div>
  );
};
