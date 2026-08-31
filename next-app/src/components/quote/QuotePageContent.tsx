'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';

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
      <nav className="font-mono text-xs text-[#A0A0A5] mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[#F4F1EA] transition-colors">INICIO</Link>
        <span>/</span>
        <span className="text-[#C8A96E]">SOLICITUD DE COTIZACIÓN</span>
      </nav>

      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-[#C8A96E] font-semibold">
            {business.name.toUpperCase()} · VALLEDUPAR
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight">
            Solicitud de Cotización
          </h1>
          <p className="text-sm sm:text-base text-[#D0CFC9] leading-relaxed font-light">
            Revisa las especificaciones de tus prendas, ingresa tus datos de contacto y envía tu orden directamente a nuestro taller por WhatsApp.
          </p>
        </div>

        {quoteItems.length > 0 && (
          <button
            onClick={clearQuote}
            className="font-mono text-xs uppercase tracking-wider text-[#A0A0A5] hover:text-red-400 self-start md:self-auto transition-colors cursor-pointer"
          >
            [ Vaciar lista de cotización ]
          </button>
        )}
      </div>

      {quoteItems.length === 0 ? (
        /* Empty State */
        <div className="bg-[#0b0b0e] border border-white/10 rounded-xs p-12 sm:p-20 text-center flex flex-col items-center gap-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96E]">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <h2 className="font-sans font-bold text-2xl text-[#F4F1EA]">Tu lista de cotización está vacía</h2>
            <p className="text-sm text-[#A0A0A5] font-light">
              Explora nuestro catálogo de siluetas o servicios de maquila para configurar tu primera pieza.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/catalogo"
              className="font-mono text-xs uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#dbbe82] text-[#070708] font-bold px-8 py-3.5 rounded-xs transition-all shadow-xl"
            >
              Explorar Catálogo →
            </Link>
            <Link
              href="/servicios"
              className="font-mono text-xs uppercase tracking-[0.2em] bg-[#141419] hover:bg-[#1c1c24] border border-white/15 text-[#F4F1EA] px-6 py-3.5 rounded-xs transition-all"
            >
              Ver Maquila & Técnicas
            </Link>
          </div>
        </div>
      ) : (
        /* Main 2-Column Quote Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Items List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold flex items-center justify-between">
              <span>PIEZAS CONFIGURADAS ({quoteItems.length})</span>
              <span>TOTAL UNIDADES: {totalUnits}</span>
            </h2>

            <div className="flex flex-col gap-6">
              {quoteItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/40 rounded-xs p-6 flex flex-col gap-5 transition-all shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Item Image */}
                    <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xs overflow-hidden bg-[#141419] border border-white/10 shrink-0">
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
                          <span className="font-mono text-[10px] text-[#C8A96E] uppercase tracking-wider">
                            ITEM 0{idx + 1} · {item.code || 'CONFECCIÓN'}
                          </span>
                          <h3 className="font-sans font-bold text-xl text-[#F4F1EA]">
                            {item.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="font-mono text-xs text-[#A0A0A5] hover:text-red-400 transition-colors p-1"
                          title="Eliminar de la cotización"
                          aria-label="Eliminar item"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Technical Specs Pills */}
                      <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[#D0CFC9] pt-1">
                        {item.selectedVariant && (
                          <span className="bg-[#141419] px-2.5 py-1 border border-white/10 rounded-xs">
                            Color: <strong className="text-[#F4F1EA]">{item.selectedVariant.colorName}</strong>
                          </span>
                        )}
                        {item.selectedTechnique && (
                          <span className="bg-[#141419] px-2.5 py-1 border border-white/10 rounded-xs">
                            Técnica: <strong className="text-[#F4F1EA]">{item.selectedTechnique}</strong>
                          </span>
                        )}
                        {item.selectedPlacements && item.selectedPlacements.length > 0 && (
                          <span className="bg-[#141419] px-2.5 py-1 border border-white/10 rounded-xs">
                            Ubicación: <strong className="text-[#F4F1EA]">{item.selectedPlacements.join(', ')}</strong>
                          </span>
                        )}
                        <span className="bg-[#141419] px-2.5 py-1 border border-[#C8A96E]/30 text-[#C8A96E] rounded-xs font-bold">
                          {item.totalQuantity} {item.totalQuantity === 1 ? 'unidad' : 'unidades'}
                        </span>
                      </div>

                      {/* Size Distribution */}
                      {item.sizeDistribution && Object.keys(item.sizeDistribution).length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px]">
                          <span className="text-[#A0A0A5]">Curva de Tallas:</span>
                          {Object.entries(item.sizeDistribution).map(([sz, qty]) => (
                            <span key={sz} className="bg-black/60 px-2 py-0.5 border border-white/10 rounded-xs text-[#F4F1EA]">
                              {sz}: <strong className="text-[#C8A96E]">{qty}</strong>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Design Attachment Info */}
                      {item.attachment && (
                        <div className="pt-1 font-mono text-[11px] text-[#A0A0A5] flex items-center gap-2">
                          <span>📎 Arte adjunto:</span>
                          <span className="text-[#F4F1EA] underline truncate max-w-xs">{item.attachment.name}</span>
                        </div>
                      )}

                      {/* Item Notes */}
                      {item.notes && (
                        <p className="pt-1 text-xs text-[#A0A0A5] italic font-light">
                          &ldquo;{item.notes}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add More Items CTA */}
            <div className="flex items-center gap-4 pt-4 font-mono text-xs">
              <Link
                href="/catalogo"
                className="text-[#C8A96E] hover:text-[#F4F1EA] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>+ Agregar otra prenda del catálogo</span>
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/servicios"
                className="text-[#C8A96E] hover:text-[#F4F1EA] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>+ Agregar servicio de maquila</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Customer Info & WhatsApp Dispatch Form (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0b0b0e] border border-white/10 rounded-xs p-6 sm:p-8 flex flex-col gap-6 sticky top-24 shadow-2xl">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold border-b border-white/10 pb-4">
              DATOS DE CONTACTO & DESPACHO
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (url && url !== '#') {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }}
              className="flex flex-col gap-4 font-mono text-xs"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-[#A0A0A5] uppercase tracking-wider text-[10px]">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  value={customer.name || ''}
                  onChange={(e) => updateCustomer({ name: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 rounded-xs outline-none text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#A0A0A5] uppercase tracking-wider text-[10px]">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customer.phone || ''}
                    onChange={(e) => updateCustomer({ phone: e.target.value })}
                    placeholder="300 000 0000"
                    className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 rounded-xs outline-none text-xs"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#A0A0A5] uppercase tracking-wider text-[10px]">
                    Ciudad de Entrega
                  </label>
                  <input
                    type="text"
                    value={customer.city || ''}
                    onChange={(e) => updateCustomer({ city: e.target.value })}
                    placeholder="Valledupar / Otra"
                    className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 rounded-xs outline-none text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#A0A0A5] uppercase tracking-wider text-[10px]">
                  Empresa o Marca (Opcional)
                </label>
                <input
                  type="text"
                  value={customer.company || ''}
                  onChange={(e) => updateCustomer({ company: e.target.value })}
                  placeholder="Nombre de tu empresa o evento"
                  className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 rounded-xs outline-none text-xs"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#A0A0A5] uppercase tracking-wider text-[10px]">
                  Instrucciones o Fechas de Entrega
                </label>
                <textarea
                  rows={3}
                  value={generalNotes}
                  onChange={(e) => setGeneralNotes(e.target.value)}
                  placeholder="Comentarios adicionales sobre tu pedido..."
                  className="bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 rounded-xs outline-none resize-none text-xs"
                />
              </div>

              {/* Order Summary Numbers */}
              <div className="p-4 bg-black/60 border border-white/10 rounded-xs flex flex-col gap-2 my-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[#A0A0A5]">Total Prendas / Items:</span>
                  <span className="text-[#F4F1EA] font-bold">{totalUnits} unidades</span>
                </div>
                {estimatedTotal !== undefined && estimatedTotal > 0 && (
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-[#A0A0A5]">Estimado Referencial:</span>
                    <span className="text-[#C8A96E] font-bold">
                      ${estimatedTotal.toLocaleString('es-CO')} COP
                    </span>
                  </div>
                )}
                <span className="text-[10px] text-[#A0A0A5] pt-1">
                  * El valor final exacto y tiempos de entrega se confirman por WhatsApp con base en tu diseño.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                {isConfigured ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] bg-[#25D366] hover:bg-[#20bd5a] text-[#070708] font-bold py-4 px-6 rounded-xs shadow-xl transition-all text-center"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                    </svg>
                    <span>Enviar Cotización por WhatsApp</span>
                  </a>
                ) : (
                  <button
                    type="submit"
                    className="w-full font-mono text-xs uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#dbbe82] text-[#070708] font-bold py-4 px-6 rounded-xs shadow-xl transition-all cursor-pointer text-center"
                  >
                    Enviar Cotización al Taller
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full font-mono text-xs uppercase tracking-wider bg-[#141419] hover:bg-[#1a1a22] border border-white/15 text-[#D0CFC9] hover:text-[#F4F1EA] py-3 rounded-xs transition-colors cursor-pointer"
                >
                  {copied ? '✓ Copiado al portapapeles' : 'Copiar Resumen para Email'}
                </button>
              </div>

              <div className="pt-2 text-center font-mono text-[10px] text-[#A0A0A5]">
                Atención directa en Valledupar · Tel: {business.whatsappPhone}
              </div>
            </form>
          </div>

        </div>
      )}

    </div>
  );
};
