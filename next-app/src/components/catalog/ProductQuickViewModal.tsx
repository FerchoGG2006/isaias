'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';
import { useQuote } from '@/context/QuoteContext';

interface ProductQuickViewModalProps {
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

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { business } = useQuote();

  if (!isOpen || !product) return null;

  const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const cleanPhone = rawPhone.replace(/\D/g, '');

  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `¡Hola Variedades Isaías! Me interesa consultar la disponibilidad y cotizar la prenda: ${product.title}.`
      )}`
    : '#contacto';

  const productHref = `/catalogo/${product.categorySlug || 'ropa'}/${product.slug}`;

  // Determine size guide key
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container (Apple Style Rounded-3xl) */}
      <div className="relative w-full max-w-3xl bg-[#181D26] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
          aria-label="Cerrar vista previa"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image (5 Cols) */}
          <div className="md:col-span-5 relative aspect-[4/5] md:aspect-auto min-h-[280px] bg-[#12151C]">
            <Image
              src={imageSrc}
              alt={product.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181D26] via-transparent to-transparent md:hidden" />
          </div>

          {/* Right Column: Specs & Sizing (7 Cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
            
            <div className="flex flex-col gap-4">
              
              {/* Header */}
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
                  {product.tag || 'Confección en Valledupar'}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light mt-1">
                  {product.description}
                </p>
              </div>

              {/* Material Spec Chip */}
              {product.materialName && (
                <div className="p-3 bg-[#12151C] border border-white/10 rounded-2xl flex items-center justify-between text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3B82F6] font-bold">■</span>
                    <span className="text-white font-medium">{product.materialName}</span>
                  </div>
                  {product.materialSpecs && (
                    <span className="text-[#E5A910] font-semibold">{product.materialSpecs[0]}</span>
                  )}
                </div>
              )}

              {/* Colors Swatches */}
              {product.customCapabilities.availableColors.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#94A3B8] font-medium">Colores Disponibles:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {product.customCapabilities.availableColors.map((col) => (
                      <div
                        key={col.id}
                        className="flex items-center gap-1.5 px-3 py-1 bg-[#12151C] border border-white/10 rounded-full text-xs text-white"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-white/30"
                          style={{ backgroundColor: col.colorHex }}
                        />
                        <span className="text-[11px]">{col.colorName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Chart in Centimeters */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-semibold">Tabla de Medidas (cm):</span>
                  <span className="text-[#94A3B8] text-[11px]">Medidas aproximadas</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-center text-xs border border-white/10 rounded-xl overflow-hidden">
                    <thead className="bg-[#12151C] text-[#94A3B8]">
                      <tr>
                        <th className="py-1.5 px-2 font-medium">Talla</th>
                        <th className="py-1.5 px-2 font-medium">Pecho (Ancho)</th>
                        <th className="py-1.5 px-2 font-medium">Largo</th>
                        <th className="py-1.5 px-2 font-medium">Manga</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/90">
                      {sizeTable.map((row) => (
                        <tr key={row.size} className="hover:bg-white/[0.02]">
                          <td className="py-1.5 px-2 font-bold text-[#3B82F6]">{row.size}</td>
                          <td className="py-1.5 px-2">{row.chest} cm</td>
                          <td className="py-1.5 px-2">{row.length} cm</td>
                          <td className="py-1.5 px-2">{row.sleeve} cm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Garment Care Rules */}
              <div className="flex flex-col gap-1.5 pt-2 text-[11px] text-[#94A3B8]">
                <span className="font-semibold text-white">Recomendaciones de Cuidado:</span>
                <ul className="grid grid-cols-2 gap-1 text-[11px]">
                  <li>✓ Lavar con agua fría (&lt;30°C)</li>
                  <li>✓ No aplicar cloro directo</li>
                  <li>✓ Planchar al revés</li>
                  <li>✓ Secar a la sombra</li>
                </ul>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/10">
              <Link
                href={productHref}
                onClick={onClose}
                className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full text-center shadow-lg shadow-[#3B82F6]/25 hover:scale-[1.02] transition-all"
              >
                Personalizar Esta Prenda →
              </Link>
              
              <a
                href={waUrl}
                target={cleanPhone ? '_blank' : undefined}
                rel={cleanPhone ? 'noopener noreferrer' : undefined}
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full text-center shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Consultar en WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
