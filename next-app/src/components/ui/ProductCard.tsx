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
            <span className="font-mono font-bold text-xs text-[#C8A96E]">
              ${(product.pricing.basePrice || 0).toLocaleString('es-CO')}
            </span>
            <span className="text-[10px] text-[#8A8A92] uppercase font-sans">COP / {product.pricing.unit || 'unidad'}</span>
          </div>
        );
      case 'from':
        return (
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#8A8A92] uppercase tracking-wider font-sans">Desde</span>
            <span className="font-mono font-bold text-xs text-[#C8A96E]">
              ${(product.pricing.basePrice || 0).toLocaleString('es-CO')} COP
            </span>
          </div>
        );
      case 'on_quote':
      default:
        return (
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#C8A96E] uppercase font-mono tracking-wider font-medium">
              Bajo Cotización
            </span>
          </div>
        );
    }
  };

  return (
    <article className="group relative bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/50 rounded-xs overflow-hidden flex flex-col transition-all duration-300 shadow-xl">
      
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141419] block">
        <Link href={productHref} className="absolute inset-0">
          <Image
            src={product.featuredImage || product.images[0] || '/assets/hero-main.jpg'}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent opacity-75" />
        </Link>

        {/* Quick View Button on Image */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 z-10 text-[10px] font-mono uppercase tracking-widest text-[#F4F1EA] bg-black/70 hover:bg-black/90 backdrop-blur-md px-3 py-1 rounded-xs border border-white/15 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
          >
            Ficha ↗
          </button>
        )}
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2">
          
          <div className="flex items-start justify-between gap-2">
            <Link href={productHref} className="group-hover:text-[#C8A96E] transition-colors">
              <h3 className="font-serif font-normal text-lg text-[#F4F1EA] tracking-tight leading-snug">
                {product.title}
              </h3>
            </Link>
            {renderPricing()}
          </div>

          <p className="text-xs text-[#8A8A92] leading-relaxed line-clamp-2 font-light">
            {product.description}
          </p>

          {/* Material & Specs subtle caption */}
          {product.materialName && (
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#C8A96E] pt-1 uppercase tracking-wider">
              <span>▪</span>
              <span>{product.materialName}</span>
              {product.materialSpecs && product.materialSpecs.length > 0 && (
                <span className="text-[#8A8A92]">· {product.materialSpecs.join(', ')}</span>
              )}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] text-[#8A8A92] uppercase tracking-wider">
            {product.customCapabilities.availableSizes.length > 1
              ? `${product.customCapabilities.availableSizes.length} TALLAS`
              : product.customCapabilities.availableSizes[0] || 'PERSONALIZABLE'}
          </span>

          <Link
            href={productHref}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[#070708] bg-[#C8A96E] hover:bg-[#dbbe82] px-3.5 py-1.5 rounded-xs transition-all font-bold"
          >
            <span>Configurar</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>

    </article>
  );
};
