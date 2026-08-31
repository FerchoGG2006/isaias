'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/domain';
import { Badge } from '@/components/ui/Badge';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const categorySlug = product.categorySlug || 'ropa';
  const productHref = `/catalogo/${categorySlug}/${product.slug}`;

  // Formato de precio según modalidad
  const renderPricing = () => {
    switch (product.pricing.type) {
      case 'fixed':
        return (
          <div className="flex flex-col items-end">
            <span className="font-mono font-bold text-sm text-[#C8A96E]">
              ${(product.pricing.basePrice || 0).toLocaleString('es-CO')}
            </span>
            <span className="font-mono text-[10px] text-[#A0A0A5]">COP / {product.pricing.unit || 'unidad'}</span>
          </div>
        );
      case 'from':
        return (
          <div className="flex flex-col items-end">
            <span className="font-mono text-[11px] text-[#A0A0A5] uppercase tracking-wider">Desde</span>
            <span className="font-mono font-bold text-sm text-[#C8A96E]">
              ${(product.pricing.basePrice || 0).toLocaleString('es-CO')} COP
            </span>
          </div>
        );
      case 'on_quote':
      default:
        return (
          <div className="flex flex-col items-end">
            <span className="font-mono text-[11px] text-[#C8A96E] font-semibold uppercase tracking-wider bg-black/40 px-2 py-0.5 border border-[#C8A96E]/20 rounded-xs">
              Bajo cotización
            </span>
          </div>
        );
    }
  };

  return (
    <article className="group relative bg-[#181D26]/80 backdrop-blur-xl border border-white/10 hover:border-[#3B82F6]/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/10">
      
      {/* Product Image Container */}
      <Link href={productHref} className="relative aspect-[4/5] w-full overflow-hidden bg-[#141419] block">
        <Image
          src={product.featuredImage || product.images[0] || '/assets/hero-main.jpg'}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Soft Vignette Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-80" />
      </Link>

      {/* Product Information Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2">
          
          <div className="flex items-start justify-between gap-2">
            <Link href={productHref} className="group-hover:text-[#C8A96E] transition-colors">
              <h3 className="font-sans font-bold text-lg text-[#F4F1EA] tracking-tight leading-snug">
                {product.title}
              </h3>
            </Link>
            {renderPricing()}
          </div>

          <p className="text-xs text-[#A0A0A5] leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Material & Specs subtle caption */}
          {product.materialName && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#A0A0A5]/80 pt-1">
              <span className="text-[#C8A96E]">■</span>
              <span>{product.materialName}</span>
              {product.materialSpecs && product.materialSpecs.length > 0 && (
                <span>· {product.materialSpecs.join(', ')}</span>
              )}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-[#A0A0A5] uppercase tracking-widest">
            {product.customCapabilities.availableSizes.length > 1
              ? `${product.customCapabilities.availableSizes.length} tallas`
              : product.customCapabilities.availableSizes[0] || 'Personalizable'}
          </span>

          <Link
            href={productHref}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-bold text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors"
          >
            <span>Configurar</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

    </article>
  );
};
