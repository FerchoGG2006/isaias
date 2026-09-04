'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';
import { TECHNIQUES } from '@/data/techniques';

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

  // Proporción uniforme recomendada: aspect-[3/4] para evitar retículas desalineadas
  const aspectClass = 'aspect-[3/4]';

  // Formato de técnicas autorizadas (e.g., "DTF · BORDADO 3D")
  const techniqueNames = product.customCapabilities.allowedTechniques
    .map((techId) => {
      const found = TECHNIQUES.find((t) => t.id === techId || t.slug === techId);
      return found ? found.name.replace('Estampado ', '').replace(' Textil', '').replace(' Computarizado', '') : techId;
    })
    .slice(0, 3)
    .join(' · ');

  // Resumen de composición y material verídico
  const materialSummary = [
    product.materialName ? product.materialName.toUpperCase() : '',
    product.materialSpecs && product.materialSpecs.length > 0 ? product.materialSpecs[0].toUpperCase() : '',
  ]
    .filter(Boolean)
    .join(' · ');

  const image1 = product.featuredImage || product.images[0] || '/assets/hero-main.jpg';
  const image2 = product.images.length > 1 ? product.images[1] : null;

  return (
    <article
      className="group relative flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Protagonist Fashion Image Frame (Abre el Product Hotspot Modal al hacer clic) */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          if (onQuickView) onQuickView(product);
        }}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onQuickView) {
            e.preventDefault();
            onQuickView(product);
          }
        }}
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#141419] block cursor-pointer select-none group/frame`}
        aria-label={`Ver ficha técnica y hotspots de ${product.title}`}
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

        {/* Badge superior: Indicador de Hotspots */}
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C8A96E]/40 text-[#C8A96E] text-[10px] font-mono tracking-wider shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
          <span>Hotspots</span>
        </div>

        {/* Overlay interactivo en Hover: Invita a explorar los puntos técnicos */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/95 via-black/20 to-transparent opacity-0 group-hover/frame:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-5 z-10">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] font-medium text-[#F4F1EA] bg-[#0C0D10]/85 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-xl">
            <span className="flex items-center gap-2">
              <span className="text-[#C8A96E] font-bold">⊕</span>
              <span>Ver Hotspots</span>
            </span>
            <span className="text-[#C8A96E]">Ficha →</span>
          </div>
        </div>
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

        {/* Material Specs */}
        {materialSummary && (
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#9E9EA4] font-light">
            {materialSummary}
          </p>
        )}

        {/* Allowed Techniques */}
        {techniqueNames && (
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#C8A96E]/90 font-medium">
            {techniqueNames}
          </p>
        )}

        {/* Enlace de acción rápida: Personalizar y Hotspot */}
        <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10 mt-1">
          <Link
            href={productHref}
            className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#F4F1EA] hover:text-[#C8A96E] transition-colors flex items-center gap-1.5 group-hover:underline"
          >
            <span>Personalizar Prenda</span>
            <span className="text-[#C8A96E]">→</span>
          </Link>

          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A92] hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              [ Hotspots ]
            </button>
          )}
        </div>

      </div>
    </article>
  );
};
