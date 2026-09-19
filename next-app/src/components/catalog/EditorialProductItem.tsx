'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';

interface EditorialProductItemProps {
  product: Product;
  displayImage?: string;
  imageIndex?: number;
  totalImages?: number;
  aspect?: 'portrait' | 'tall' | 'classic' | 'wide';
  priority?: boolean;
  onQuickView?: (product: Product) => void;
}

export const EditorialProductItem: React.FC<EditorialProductItemProps> = ({
  product,
  displayImage,
  imageIndex,
  totalImages,
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

  const imageSrc = displayImage || product.featuredImage || product.images[0] || '/assets/hero-main.jpg';

  return (
    <article className="group relative flex flex-col justify-between">
      {/* 1. Protagonist Fashion Image Frame (Sin intercambio de imagen en hover) */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#141419] block select-none rounded-xs border border-white/10 group-hover:border-[#C8A96E]/50 transition-colors duration-300`}>
        {/* Full card link to product customizer */}
        <Link
          href={productHref}
          className="absolute inset-0 z-10"
          aria-label={`Personalizar ${product.title}`}
        >
          {/* Main Clean Image */}
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />

          {/* Discreet Bottom Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/60 via-transparent to-transparent opacity-60" />

          {/* Badge sutil de vista si tiene múltiples imágenes */}
          {typeof imageIndex === 'number' && typeof totalImages === 'number' && totalImages > 1 && (
            <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
              <span className="bg-[#0C0D10]/80 backdrop-blur-md text-[#A0A0A5] text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10">
                {imageIndex + 1}/{totalImages}
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* 2. Editorial Product Caption */}
      <div className="pt-3 pb-1 flex flex-col gap-1">
        {/* Title con enlace directo a la ficha del producto */}
        <Link href={productHref} className="block group-hover:text-[#C8A96E] transition-colors">
          <h3 className="font-sans font-bold text-base sm:text-lg text-[#F4F1EA] tracking-tight leading-snug">
            {product.title}
          </h3>
        </Link>

        {/* Material y acabado en una sola línea sutil */}
        <p className="font-sans text-xs text-[#A0A0A5] line-clamp-1">
          {product.materialName ? product.materialName : 'Confección en taller propio'}
        </p>

        {/* Precio visible + Descuento + Acción rápida compacta */}
        <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-white/10 mt-1">
          <div className="flex items-baseline gap-1.5">
            {product.pricing.type === 'fixed' && product.pricing.basePrice ? (
              <span className="font-mono font-bold text-sm sm:text-base text-[#C8A96E]">
                ${product.pricing.basePrice.toLocaleString('es-CO')}
              </span>
            ) : (
              <span className="font-mono text-xs text-[#C8A96E] font-medium">
                Bajo cotización
              </span>
            )}
            {product.pricing.bulkDiscounts && product.pricing.bulkDiscounts.length > 0 && (
              <span className="text-[10px] text-[#8A8A92] font-sans">
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
                className="font-sans text-[11px] text-[#8A8A92] hover:text-[#C8A96E] transition-colors cursor-pointer"
                aria-label={`Ver guía de medidas de ${product.title}`}
              >
                Medidas
              </button>
            )}
            <Link
              href={productHref}
              className="font-sans text-xs font-semibold text-[#F4F1EA] hover:text-[#C8A96E] transition-colors flex items-center gap-1 group-hover:underline"
            >
              <span>Personalizar</span>
              <span className="text-[#C8A96E]">→</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};
