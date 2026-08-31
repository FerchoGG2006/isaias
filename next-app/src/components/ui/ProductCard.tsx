'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';

export interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const categorySlug = product.categorySlug || 'ropa';
  const productHref = `/catalogo/${categorySlug}/${product.slug}`;

  // Formato de precio según modalidad
  const renderPricing = () => {
    switch (product.pricing.type) {
      case 'fixed':
        return (
          <div className="flex flex-col items-end">
            <span className="font-bold text-sm text-[#E5A910]">
              ${(product.pricing.basePrice || 0).toLocaleString('es-CO')}
            </span>
            <span className="text-[10px] text-[#94A3B8]">COP / {product.pricing.unit || 'unidad'}</span>
          </div>
        );
      case 'from':
        return (
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Desde</span>
            <span className="font-bold text-sm text-[#E5A910]">
              ${(product.pricing.basePrice || 0).toLocaleString('es-CO')} COP
            </span>
          </div>
        );
      case 'on_quote':
      default:
        return (
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-[#3B82F6] font-semibold">
              Bajo cotización
            </span>
          </div>
        );
    }
  };

  return (
    <article className="group relative bg-[#181D26]/90 backdrop-blur-xl border border-white/10 hover:border-[#3B82F6]/50 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/10">
      
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#12151C] block">
        <Link href={productHref} className="absolute inset-0">
          <Image
            src={product.featuredImage || product.images[0] || '/assets/hero-main.jpg'}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181D26] via-transparent to-transparent opacity-80" />
        </Link>

        {/* Quick View Button on Image */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 z-10 text-[11px] font-medium text-white bg-black/60 hover:bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
          >
            Ficha & Medidas ↗
          </button>
        )}
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2">
          
          <div className="flex items-start justify-between gap-2">
            <Link href={productHref} className="group-hover:text-[#3B82F6] transition-colors">
              <h3 className="font-serif font-bold text-lg text-[#FFFFFF] tracking-tight leading-snug">
                {product.title}
              </h3>
            </Link>
            {renderPricing()}
          </div>

          <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2 font-light">
            {product.description}
          </p>

          {/* Material & Specs subtle caption */}
          {product.materialName && (
            <div className="flex items-center gap-1.5 text-[11px] text-[#94A3B8] pt-1">
              <span className="text-[#3B82F6]">■</span>
              <span>{product.materialName}</span>
              {product.materialSpecs && product.materialSpecs.length > 0 && (
                <span>· {product.materialSpecs.join(', ')}</span>
              )}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <span className="text-[11px] text-[#94A3B8]">
            {product.customCapabilities.availableSizes.length > 1
              ? `${product.customCapabilities.availableSizes.length} tallas`
              : product.customCapabilities.availableSizes[0] || 'Personalizable'}
          </span>

          <Link
            href={productHref}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded-full transition-all shadow-md shadow-[#3B82F6]/20 hover:scale-[1.02]"
          >
            <span>Configurar</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>

    </article>
  );
};
