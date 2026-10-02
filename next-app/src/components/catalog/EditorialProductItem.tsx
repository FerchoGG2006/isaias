'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';

interface EditorialProductItemProps {
  product: Product;
  displayImage?: string;
  aspect?: 'portrait' | 'tall' | 'classic' | 'wide';
  priority?: boolean;
  onQuickView?: (product: Product) => void;
}

export const EditorialProductItem: React.FC<EditorialProductItemProps> = ({
  product,
  displayImage,
  aspect = 'portrait',
  priority = false,
  onQuickView,
}) => {
  const productHref = `/catalogo/${product.categorySlug || 'ropa'}/${product.slug}`;

  // Proporción controlada: default aspect-[3/4] para alineación armónica de retícula
  const aspectClass =
    aspect === 'tall'
      ? 'aspect-[2/3]'
      : aspect === 'classic'
      ? 'aspect-square'
      : aspect === 'wide'
      ? 'aspect-[4/3]'
      : 'aspect-[3/4]';

  const imageSrc = displayImage || product.featuredImage || product.images?.[0] || '';
  const hasImage = Boolean(imageSrc && imageSrc.trim() !== '');

  return (
    <article className="group relative flex flex-col justify-between">
      {/* 1. Protagonist Fashion Image Frame (Clean, borderless, seamless) */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-slate-100 block select-none rounded-xl`}>
        {/* Full card link to product customizer */}
        <Link
          href={productHref}
          className="absolute inset-0 z-10"
          aria-label={`Personalizar ${product.title}`}
        >
          {hasImage ? (
            /* Main Clean Image */
            <Image
              src={imageSrc}
              alt={product.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-50">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#0284C7] mb-3 bg-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#0284C7] font-bold">
                Confección en taller
              </span>
              <span className="font-sans text-[10px] text-slate-500 mt-1 font-normal">
                Fotografía en producción
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* 2. Editorial Product Caption (Sin líneas divisorias artificiales) */}
      <div className="pt-3 pb-1 flex flex-col gap-1">
        {/* Title con enlace directo a la ficha del producto */}
        <Link href={productHref} className="block group-hover:text-[#0284C7] transition-colors">
          <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 tracking-tight leading-snug">
            {product.title}
          </h3>
        </Link>

        {/* Material de confección */}
        <p className="font-sans text-xs text-slate-500 line-clamp-1 font-normal">
          {product.materialName ? product.materialName : 'Confección en taller propio'}
        </p>

        {/* Precio visible + Descuento + Acción rápida compacta (Sin línea divisoria superior) */}
        <div className="flex items-center justify-between gap-2 pt-1 mt-0.5">
          <div className="flex items-baseline gap-1.5">
            {product.pricing.type === 'fixed' && product.pricing.basePrice ? (
              <span className="font-mono font-bold text-sm sm:text-base text-[#0284C7]">
                ${product.pricing.basePrice.toLocaleString('es-CO')}
              </span>
            ) : (
              <span className="font-mono text-xs text-[#0284C7] font-bold">
                Bajo cotización
              </span>
            )}
            {product.pricing.bulkDiscounts && product.pricing.bulkDiscounts.length > 0 && (
              <span className="text-[10px] text-slate-400 font-sans">
                (x docena)
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs">
            {onQuickView && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="font-sans text-[11px] text-slate-500 hover:text-[#0284C7] transition-colors cursor-pointer"
                aria-label={`Ver guía de medidas de ${product.title}`}
              >
                Medidas
              </button>
            )}
            <Link
              href={productHref}
              className="font-sans text-xs font-bold text-slate-800 hover:text-[#0284C7] transition-colors flex items-center gap-1 group-hover:underline"
            >
              <span>Personalizar</span>
              <span className="text-[#0284C7]">→</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};
