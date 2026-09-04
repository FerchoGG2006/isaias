'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';
import { useQuote } from '@/context/QuoteContext';
import { getProductHotspots, ProductHotspot } from '@/data/productHotspots';

interface ProductHotspotModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const SIZE_GUIDES: Record<string, { size: string; chest: number; length: number; sleeve: number }[]> = {
  default: [
    { size: 'S', chest: 48, length: 68, sleeve: 19 },
    { size: 'M', chest: 51, length: 71, sleeve: 20 },
    { size: 'L', chest: 54, length: 74, sleeve: 21 },
    { size: 'XL', chest: 58, length: 77, sleeve: 22 },
    { size: 'XXL', chest: 62, length: 80, sleeve: 23 },
  ],
  oversize: [
    { size: 'S', chest: 56, length: 72, sleeve: 23 },
    { size: 'M', chest: 60, length: 75, sleeve: 24 },
    { size: 'L', chest: 64, length: 78, sleeve: 25 },
    { size: 'XL', chest: 68, length: 81, sleeve: 26 },
  ],
  babytee: [
    { size: 'XS', chest: 38, length: 44, sleeve: 12 },
    { size: 'S', chest: 41, length: 46, sleeve: 13 },
    { size: 'M', chest: 44, length: 48, sleeve: 14 },
    { size: 'L', chest: 47, length: 50, sleeve: 15 },
  ],
  polo: [
    { size: 'S', chest: 50, length: 69, sleeve: 21 },
    { size: 'M', chest: 53, length: 72, sleeve: 22 },
    { size: 'L', chest: 56, length: 75, sleeve: 23 },
    { size: 'XL', chest: 60, length: 78, sleeve: 24 },
  ],
};

export const ProductHotspotModal: React.FC<ProductHotspotModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { business } = useQuote();
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'hotspots' | 'medidas' | 'cuidados'>('hotspots');
  const modalContentRef = useRef<HTMLDivElement>(null);

  const hotspots: ProductHotspot[] = product ? getProductHotspots(product) : [];

  // Establecer el primer hotspot activo por defecto cuando se abre el modal
  useEffect(() => {
    if (isOpen && hotspots.length > 0) {
      setActiveHotspotId(hotspots[0].id);
      setActiveTab('hotspots');
      setShowHotspots(true);
    }
  }, [isOpen, product]);

  // Bloqueo de scroll y cierre con tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  // Teléfono verificado oficial: nunca placeholders
  const rawPhone = business?.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+573105634509';
  const cleanPhone = rawPhone.replace(/\D/g, '');

  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `¡Hola Variedades Isaías! Me interesa cotizar y consultar especificaciones técnicas de la prenda: ${product.title} (${product.code}).`
      )}`
    : '#contacto';

  const productHref = `/catalogo/${product.categorySlug || 'ropa'}/${product.slug}`;

  // Tabla de medidas según título
  const titleLower = product.title.toLowerCase();
  const sizeKey = titleLower.includes('oversize')
    ? 'oversize'
    : titleLower.includes('baby')
    ? 'babytee'
    : titleLower.includes('polo')
    ? 'polo'
    : 'default';

  const sizeTable = SIZE_GUIDES[sizeKey] || SIZE_GUIDES.default;
  const imageSrc = product.featuredImage || product.images[0] || '/assets/hero-main.jpg';
  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="hotspot-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Telón de fondo editorial */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#070709]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Contenedor del Modal */}
      <div
        ref={modalContentRef}
        className="relative w-full max-w-5xl bg-[#0F1015] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-300 my-auto flex flex-col max-h-[92vh]"
      >
        {/* Barra superior de control */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/10 bg-[#0C0D10]/95">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E]">
              Hotspot Atelier · Ficha Técnica de Confección
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Alternar visibilidad de pines */}
            <button
              type="button"
              onClick={() => setShowHotspots(!showHotspots)}
              className="text-[10px] font-mono uppercase tracking-wider text-[#9E9EA4] hover:text-[#F4F1EA] px-3 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>{showHotspots ? 'Ocultar Puntos' : 'Mostrar Puntos'}</span>
              <span className="text-[#C8A96E] font-bold">{showHotspots ? '◉' : '○'}</span>
            </button>

            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#9E9EA4] hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Cuerpo del Modal: Doble Columna */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* COLUMNA IZQUIERDA: Imagen Protagonista con Hotspots Interactivos (7 Cols en Desktop) */}
          <div className="lg:col-span-7 relative bg-[#090A0D] flex flex-col justify-center items-center min-h-[360px] sm:min-h-[480px] p-4 sm:p-8 select-none">
            
            {/* Marco de imagen centrado */}
            <div className="relative w-full max-w-md aspect-[3/4] mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#141419]">
              <Image
                src={imageSrc}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              {/* Degradado sutil para contraste de pines */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />

              {/* Render de los pines interactivos */}
              {showHotspots &&
                hotspots.map((h) => {
                  const isActive = activeHotspotId === h.id;
                  return (
                    <div
                      key={h.id}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    >
                      {/* Botón Pin Pulsante */}
                      <button
                        type="button"
                        onClick={() => setActiveHotspotId(isActive ? null : h.id)}
                        onMouseEnter={() => setActiveHotspotId(h.id)}
                        className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 focus:outline-none cursor-pointer ${
                          isActive ? 'scale-110' : 'hover:scale-110'
                        }`}
                        aria-label={`Inspeccionar: ${h.title}`}
                      >
                        {/* Ping radar */}
                        <span
                          className={`absolute inset-0 rounded-full transition-opacity ${
                            isActive ? 'bg-[#C8A96E]/50 animate-ping opacity-75' : 'bg-white/30 animate-pulse'
                          }`}
                        />

                        {/* Núcleo del Pin */}
                        <span
                          className={`relative flex items-center justify-center w-6 h-6 rounded-full font-mono text-[11px] font-bold shadow-lg border transition-all duration-300 ${
                            isActive
                              ? 'bg-[#C8A96E] text-[#0C0D10] border-white ring-4 ring-[#C8A96E]/30 scale-105'
                              : 'bg-[#0C0D10]/90 text-[#F4F1EA] border-[#C8A96E]/60 hover:border-[#C8A96E]'
                          }`}
                        >
                          {h.number}
                        </span>
                      </button>

                      {/* Tooltip flotante posicionado sobre la foto */}
                      {isActive && (
                        <div
                          className={`absolute z-30 w-52 sm:w-60 p-3 rounded-xl bg-[#0F1015]/95 border border-[#C8A96E]/50 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 pointer-events-none ${
                            h.y > 65
                              ? 'bottom-10'
                              : 'top-10'
                          } ${
                            h.x > 60
                              ? 'right-0'
                              : h.x < 40
                              ? 'left-0'
                              : 'left-1/2 -translate-x-1/2'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A96E] font-semibold">
                              {h.badge}
                            </span>
                            <span className="font-mono text-[9px] text-[#8A8A92]">
                              PUNTO #{h.number}
                            </span>
                          </div>
                          <h4 className="font-serif text-xs font-semibold text-[#F4F1EA] mb-1">
                            {h.title}
                          </h4>
                          <p className="font-sans text-[11px] text-[#9E9EA4] leading-snug line-clamp-3">
                            {h.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Micro leyenda inferior de la imagen */}
            <div className="mt-4 flex items-center justify-between w-full max-w-md text-[10px] font-mono uppercase tracking-wider text-[#8A8A92]/80">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
                Pines interactivos
              </span>
              <span>Clic o posar para enfocar</span>
            </div>

          </div>

          {/* COLUMNA DERECHA: Ficha de Especificaciones, Hotspots & CTAs (5 Cols en Desktop) */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between gap-6 bg-[#0F1015]">
            
            <div className="flex flex-col gap-5">
              
              {/* Encabezado del Producto */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
                    {product.tag || 'VALLEDUPAR ATELIER'}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A8A92]">
                    REF: {product.code}
                  </span>
                </div>

                <h3
                  id="hotspot-modal-title"
                  className="font-serif font-normal text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight"
                >
                  {product.title}
                </h3>

                {product.subtitle && (
                  <p className="font-sans text-xs uppercase tracking-wider text-[#9E9EA4] mt-1 font-light">
                    {product.subtitle}
                  </p>
                )}

                <p className="font-sans text-xs text-[#8A8A92] leading-relaxed mt-2 font-light line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Ficha de Material Principal */}
              {product.materialName && (
                <div className="p-3.5 bg-[#14151C] border border-white/10 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C8A96E] font-bold">▪</span>
                    <span className="text-[#F4F1EA] font-medium">{product.materialName}</span>
                  </div>
                  {product.materialSpecs && product.materialSpecs.length > 0 && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8A96E] font-semibold">
                      {product.materialSpecs[0]}
                    </span>
                  )}
                </div>
              )}

              {/* Pestañas de Ficha Técnica */}
              <div className="border-b border-white/10 flex items-center gap-5 text-xs font-mono uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveTab('hotspots')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'hotspots'
                      ? 'text-[#F4F1EA] font-semibold'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>Puntos de Confección ({hotspots.length})</span>
                  {activeTab === 'hotspots' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A96E]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('medidas')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'medidas'
                      ? 'text-[#F4F1EA] font-semibold'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>Medidas (cm)</span>
                  {activeTab === 'medidas' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A96E]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('cuidados')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'cuidados'
                      ? 'text-[#F4F1EA] font-semibold'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>Cuidados</span>
                  {activeTab === 'cuidados' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A96E]" />
                  )}
                </button>
              </div>

              {/* Contenido de la pestaña activa */}
              <div className="min-h-[180px]">
                
                {/* 1. LISTADO SINCRONIZADO DE HOTSPOTS */}
                {activeTab === 'hotspots' && (
                  <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1">
                    {hotspots.map((h) => {
                      const isSelected = activeHotspotId === h.id;
                      return (
                        <button
                          key={h.id}
                          type="button"
                          onClick={() => {
                            setActiveHotspotId(h.id);
                            setShowHotspots(true);
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                            isSelected
                              ? 'bg-[#181A22] border-[#C8A96E] shadow-md'
                              : 'bg-[#12131A] border-white/5 hover:border-white/15'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-[#C8A96E] text-[#0C0D10]'
                                : 'bg-white/10 text-[#8A8A92]'
                            }`}
                          >
                            {h.number}
                          </span>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h5
                                className={`text-xs font-semibold truncate ${
                                  isSelected ? 'text-[#F4F1EA]' : 'text-[#9E9EA4]'
                                }`}
                              >
                                {h.title}
                              </h5>
                              <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A96E]">
                                {h.badge}
                              </span>
                            </div>
                            <p className="font-sans text-[11px] text-[#8A8A92] leading-snug mt-1 line-clamp-2">
                              {h.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 2. TABLA DE MEDIDAS */}
                {activeTab === 'medidas' && (
                  <div className="flex flex-col gap-2">
                    <div className="overflow-x-auto">
                      <table className="w-full text-center text-xs border border-white/10 rounded-xl overflow-hidden">
                        <thead className="bg-[#14151C] text-[#8A8A92] font-mono text-[10px] uppercase">
                          <tr>
                            <th className="py-2 px-2 font-medium">Talla</th>
                            <th className="py-2 px-2 font-medium">Pecho</th>
                            <th className="py-2 px-2 font-medium">Largo</th>
                            <th className="py-2 px-2 font-medium">Manga</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#F4F1EA]/90 font-sans text-xs">
                          {sizeTable.map((row) => (
                            <tr key={row.size} className="hover:bg-white/[0.02]">
                              <td className="py-1.5 px-2 font-bold text-[#C8A96E] font-mono">{row.size}</td>
                              <td className="py-1.5 px-2">{row.chest} cm</td>
                              <td className="py-1.5 px-2">{row.length} cm</td>
                              <td className="py-1.5 px-2">{row.sleeve} cm</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <span className="text-[10px] font-mono text-[#8A8A92] tracking-wider text-right">
                      * Medidas de prenda en plano (tolerancia ±1 cm)
                    </span>
                  </div>
                )}

                {/* 3. RECOMENDACIONES DE CUIDADO */}
                {activeTab === 'cuidados' && (
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#9E9EA4] bg-[#12131A] p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C8A96E]">✓</span>
                      <span>Lavar en frío (&lt;30 °C)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#C8A96E]">✓</span>
                      <span>No usar cloro directo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#C8A96E]">✓</span>
                      <span>Planchar al revés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#C8A96E]">✓</span>
                      <span>Secar a la sombra</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Colores disponibles */}
              {product.customCapabilities.availableColors.length > 0 && (
                <div className="flex items-center gap-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A92]">
                    Variantes:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {product.customCapabilities.availableColors.map((col) => (
                      <span
                        key={col.id}
                        title={col.colorName}
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: col.colorHex }}
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* CTAs Comerciales de Alta Conversión */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              {/* Botón Principal: Ir al configurador de personalización */}
              <Link
                href={productHref}
                onClick={onClose}
                className="flex-1 bg-[#F4F1EA] hover:bg-white text-[#0C0D10] font-sans font-semibold text-xs uppercase tracking-[0.16em] py-3.5 px-4 rounded-full text-center shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Personalizar Prenda</span>
                <span className="text-[#C8A96E]">→</span>
              </Link>

              {/* Botón Secundario: Cotización en WhatsApp con datos reales */}
              <a
                href={waUrl}
                target={cleanPhone ? '_blank' : undefined}
                rel={cleanPhone ? 'noopener noreferrer' : undefined}
                className="flex-1 bg-[#14151C] hover:bg-[#1C1E26] text-[#F4F1EA] border border-white/15 hover:border-[#C8A96E]/50 font-sans font-medium text-xs uppercase tracking-[0.14em] py-3.5 px-4 rounded-full text-center transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span className="text-[#25D366]">●</span>
                <span>Cotizar WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
