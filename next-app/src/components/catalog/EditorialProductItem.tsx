'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';

interface EditorialProductItemProps {
  product: Product;
  aspect?: 'portrait' | 'tall' | 'classic' | 'wide';
  priority?: boolean;
  onQuickView?: (product: Product) => void;
}

export const EditorialProductItem: React.FC<EditorialProductItemProps> = ({
  product,
  aspect = 'portrait',
  priority = false,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
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

  const image1 = product.featuredImage || product.images[0] || '/assets/hero-main.jpg';
  const image2 = product.images.length > 1 ? product.images[1] : null;

  return (
    <article
      className="group relative flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Protagonist Fashion Image Frame (Clic navega directamente a la ficha/configurador) */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#141419] block select-none group/frame`}>
        {/* Full card link to product customizer */}
        <Link
          href={productHref}
          className="absolute inset-0 z-10"
          aria-label={`Personalizar ${product.title}`}
        >
          {/* Primary Image */}
          <Image
            src={image1}
            alt={product.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover object-center transition-all duration-700 ease-out ${
              image2 && isHovered ? 'opacity-0 scale-[1.03]' : 'opacity-100 group-hover/frame:scale-[1.03]'
            }`}
          />

          {/* Secondary Image on Hover if available */}
          {image2 && (
            <Image
              src={image2}
              alt={`${product.title} vista alterna`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover object-center transition-all duration-700 ease-out ${
                isHovered ? 'opacity-100 scale-[1.03]' : 'opacity-0 scale-100'
              }`}
            />
          )}

          {/* Discreet Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/80 via-transparent to-transparent opacity-60 group-hover/frame:opacity-40 transition-opacity duration-500" />

          {/* Overlay interactivo en Hover: Invita a personalizar */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/95 via-black/20 to-transparent opacity-0 group-hover/frame:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-5">
            <div className="flex items-center justify-between font-sans text-xs font-medium text-[#F4F1EA] bg-[#0C0D10]/85 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-xl">
              <span className="flex items-center gap-2">
                <span className="text-[#C8A96E] font-bold">✦</span>
                <span>Ver prenda</span>
              </span>
              <span className="text-[#C8A96E] font-semibold">Pedir o Cotizar →</span>
            </div>
          </div>
        </Link>
      </div>

      {/* 2. Editorial Product Caption */}
      <div className="pt-4 pb-2 flex flex-col gap-1.5">
        
        {/* Tag de colección / procedencia */}
        {product.tag && (
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#C8A96E] font-medium">
            {product.tag}
          </span>
        )}

        {/* Title con enlace directo a la ficha del producto */}
        <Link href={productHref} className="block group-hover:text-[#C8A96E] transition-colors">
          <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#F4F1EA] tracking-tight leading-snug">
            {product.title}
          </h3>
        </Link>

        {/* Precio visible y transparente para clientes adultos */}
        <div className="flex items-baseline gap-2 pt-0.5">
          {product.pricing.type === 'fixed' && product.pricing.basePrice ? (
            <span className="font-mono font-bold text-sm sm:text-base text-[#C8A96E]">
              ${product.pricing.basePrice.toLocaleString('es-CO')} COP
            </span>
          ) : (
            <span className="font-mono text-xs text-[#C8A96E] font-medium">
              Precio bajo cotización
            </span>
          )}
          {product.pricing.bulkDiscounts && product.pricing.bulkDiscounts.length > 0 && (
            <span className="text-[11px] text-[#A0A0A5] font-sans">
              (precio especial por docena)
            </span>
          )}
        </div>

        {/* Material en lenguaje claro y fresco */}
        <p className="font-sans text-xs text-[#B5B5BC]">
          {product.materialName ? `Tela: ${product.materialName}` : 'Confección suave y resistente'}
        </p>

        {/* Técnica en lenguaje claro */}
        <p className="font-sans text-[11px] text-[#C8A96E] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
          <span>Personalizable con estampado o bordado</span>
        </p>

        {/* Enlace de acción rápida: Personalizar y Medidas */}
        <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10 mt-1">
          <Link
            href={productHref}
            className="font-sans text-xs font-semibold text-[#F4F1EA] hover:text-[#C8A96E] transition-colors flex items-center gap-1.5 group-hover:underline"
          >
            <span>Elegir Talla y Cotizar</span>
            <span className="text-[#C8A96E]">→</span>
          </Link>

          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="font-sans text-xs text-[#A0A0A5] hover:text-[#C8A96E] transition-colors cursor-pointer underline underline-offset-2"
              aria-label={`Ver guía de medidas de ${product.title}`}
            >
              Guía de medidas
            </button>
          )}
        </div>

      </div>
    </article>
  );
};
