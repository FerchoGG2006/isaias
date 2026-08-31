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

  // Aspect ratio mapping for editorial masonry rhythm
  const aspectClass =
    aspect === 'tall'
      ? 'aspect-[3/4] sm:aspect-[2/3]'
      : aspect === 'wide'
      ? 'aspect-[4/3] sm:aspect-[16/10]'
      : aspect === 'classic'
      ? 'aspect-[1/1]'
      : 'aspect-[3/4]';

  // Format techniques list (e.g., "DTF · BORDADO 3D")
  const techniqueNames = product.customCapabilities.allowedTechniques
    .map((techId) => {
      const found = TECHNIQUES.find((t) => t.id === techId || t.slug === techId);
      return found ? found.name.replace('Estampado ', '').replace(' Textil', '').replace(' Computarizado', '') : techId;
    })
    .slice(0, 3)
    .join(' · ');

  // Material summary
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
      {/* 1. Protagonist Fashion Image Frame */}
      <Link
        href={productHref}
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#141419] block`}
      >
        {/* Primary Image */}
        <Image
          src={image1}
          alt={product.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-center transition-all duration-700 ease-out ${
            image2 && isHovered ? 'opacity-0 scale-[1.02]' : 'opacity-100 group-hover:scale-[1.02]'
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
              isHovered ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Discreet Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Action Overlay: VER PIEZA */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] font-medium text-[#F4F1EA] bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <span>Ver Pieza</span>
            <span className="text-[#C8A96E]">→</span>
          </span>
        </div>

        {/* Quick View Button on Image top-right */}
        {onQuickView && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute top-4 right-4 z-20 text-[10px] uppercase tracking-widest text-[#F4F1EA] bg-black/60 hover:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            title="Ver Ficha Técnica"
          >
            Ficha & Medidas
          </button>
        )}
      </Link>

      {/* 2. Editorial Product Caption */}
      <div className="pt-4 pb-2 flex flex-col gap-1">
        
        {/* Title */}
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
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#C8A96E] font-medium mt-0.5">
            {techniqueNames}
          </p>
        )}

      </div>
    </article>
  );
};
