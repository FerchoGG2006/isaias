'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') {
      return PRODUCTS.slice(0, 4);
    }
    return PRODUCTS.filter(
      (p) => p.categorySlug === activeCategory || p.categoryId === activeCategory
    ).slice(0, 4);
  }, [activeCategory]);

  return (
    <section id="catalogo" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header with Category Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Catálogo de Prendas
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Siluetas y artículos listos para estampar, bordar o personalizar a tu medida.
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-medium">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-5 py-2.5 rounded-full transition-all cursor-pointer ${
              activeCategory === 'todos'
                ? 'bg-[#3B82F6] text-[#FFFFFF] font-semibold shadow-md shadow-[#3B82F6]/25'
                : 'text-[#94A3B8] hover:text-[#FFFFFF] bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/15'
            }`}
          >
            Todos
          </button>
          {CATEGORIES.slice(0, 3).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.slug
                  ? 'bg-[#3B82F6] text-[#FFFFFF] font-semibold shadow-md shadow-[#3B82F6]/25'
                  : 'text-[#94A3B8] hover:text-[#FFFFFF] bg-[#181D26] hover:bg-[#202734] border border-[#94A3B8]/15'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Luxury Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Dominant Lookbook Piece (7 Cols) */}
        {filteredProducts[0] && (
          <div className="lg:col-span-7 flex flex-col gap-5 group">
            <Link
              href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl block border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-2xl"
            >
              <div className="absolute inset-0 bg-radial from-[#3B82F6]/15 via-transparent to-transparent opacity-80" />

              {/* Center Silhouette Icon / Visual Anchor */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="w-16 h-16 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-[#3B82F6] transition-all bg-[#181D26]/80 backdrop-blur-sm shadow-md">
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-bold">
                  {filteredProducts[0].title}
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-1.5 max-w-sm font-light">
                  Silueta de confección local lista para estampar tu marca o diseño.
                </span>
              </div>

              {/* Bottom Spec Footer within frame */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#12151C] via-[#12151C]/80 to-transparent flex items-center justify-between text-xs text-[#94A3B8]">
                <span>220G SPANDEX</span>
                <span className="text-[#E5A910] font-semibold">DISPONIBLE BAJO PEDIDO</span>
              </div>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">
                  {filteredProducts[0].tag || 'Piel de Durazno Spandex · 220g'}
                </span>
                <Link
                  href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
                  className="font-serif font-bold text-2xl sm:text-3xl text-[#FFFFFF] group-hover:text-[#3B82F6] transition-colors"
                >
                  {filteredProducts[0].title}
                </Link>
                <span className="font-sans text-xs text-[#94A3B8]">
                  Personalizable con Estampado DTF o Bordado Computarizado 3D
                </span>
              </div>

              <Link
                href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
                className="text-xs uppercase tracking-wider text-[#FFFFFF] bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all shrink-0 shadow-md shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:scale-[1.02]"
              >
                <span>Personalizar Prenda</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Secondary Column (5 Cols, 2 Stacked Pieces) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {filteredProducts.slice(1, 3).map((prod) => (
            <div key={prod.id} className="flex flex-col gap-3 group">
              <Link
                href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl block border border-white/10 bg-gradient-to-b from-[#181D26] to-[#12151C] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-xl"
              >
                <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <div className="w-12 h-12 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-2 group-hover:border-[#3B82F6] transition-colors bg-[#181D26]/70 shadow-sm">
                    <svg className="w-5 h-5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="font-serif text-xl text-[#FFFFFF] font-bold">
                    {prod.title}
                  </span>
                  <span className="font-sans text-xs text-[#94A3B8] mt-1 font-light">
                    Tallas completas y colores a elección
                  </span>
                </div>
              </Link>

              <div className="flex items-center justify-between gap-4 text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold">{prod.tag}</span>
                  <Link
                    href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                    className="font-serif font-bold text-xl text-[#FFFFFF] group-hover:text-[#3B82F6] transition-colors"
                  >
                    {prod.title}
                  </Link>
                </div>

                <Link
                  href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                  className="text-[#3B82F6] hover:text-[#FFFFFF] uppercase tracking-wider font-semibold text-xs inline-flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Ver detalle</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Catalog Link Strip */}
      <div className="mt-14 sm:mt-16 pt-6 border-t border-[#94A3B8]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <span className="text-[#94A3B8]">Catálogo completo disponible para pedidos personales y empresariales.</span>
        <Link
          href="/catalogo"
          className="text-[#3B82F6] hover:text-[#FFFFFF] font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
        >
          <span>Ver todas las prendas del catálogo (12+)</span>
          <span>→</span>
        </Link>
      </div>

    </section>
  );
};
