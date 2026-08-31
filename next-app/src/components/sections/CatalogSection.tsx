'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { Product } from '@/domain';
import { ProductQuickViewModal } from '@/components/catalog/ProductQuickViewModal';

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (activeCategory !== 'todos') {
      list = list.filter(
        (p) => p.categorySlug === activeCategory || p.categoryId === activeCategory
      );
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          (p.materialName && p.materialName.toLowerCase().includes(q))
      );
    }

    return list.slice(0, 4);
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalogo" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Catálogo de Prendas
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Siluetas y artículos listos para estampar, bordar o personalizar a tu medida.
          </p>
        </div>

        {/* Search Input Bar (Apple Style Rounded-Full) */}
        <div className="relative w-full lg:w-80 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar prenda, tela o técnica..."
            className="w-full bg-[#181D26] hover:bg-[#202734] focus:bg-[#181D26] border border-white/15 focus:border-[#3B82F6] text-white pl-10 pr-9 py-2.5 text-xs rounded-full outline-none transition-all placeholder:text-[#94A3B8]/60 shadow-sm"
          />
          <svg
            className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-medium">
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
        {CATEGORIES.slice(0, 4).map((cat) => (
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

      {/* Luxury Editorial Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center text-[#94A3B8] bg-[#181D26]/60 rounded-3xl border border-white/10">
          <p className="text-sm">No encontramos prendas que coincidan con &ldquo;{searchQuery}&rdquo;.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('todos');
            }}
            className="mt-3 text-xs text-[#3B82F6] hover:underline font-semibold"
          >
            Ver todas las prendas ↺
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Dominant Lookbook Piece (7 Cols) */}
          {filteredProducts[0] && (
            <div className="lg:col-span-7 flex flex-col gap-5 group">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl block border border-white/10 bg-[#12151C] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-2xl">
                
                {/* Real Product Image */}
                <Image
                  src={filteredProducts[0].featuredImage || filteredProducts[0].images[0] || '/assets/telas/ajustadas/ajustada-1.jpg'}
                  alt={filteredProducts[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/30 to-transparent" />

                {/* Bottom Spec Footer within frame */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#12151C] via-[#12151C]/90 to-transparent flex items-center justify-between text-xs text-[#94A3B8] z-10">
                  <span className="font-semibold text-white">{filteredProducts[0].materialSpecs?.[0] || '220G SPANDEX'}</span>
                  <button
                    onClick={() => setSelectedProduct(filteredProducts[0])}
                    className="text-[#E5A910] hover:text-white font-semibold cursor-pointer transition-colors bg-black/50 px-3.5 py-1.5 rounded-full border border-white/10"
                  >
                    Ver Ficha & Medidas ↗
                  </button>
                </div>
              </div>

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

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setSelectedProduct(filteredProducts[0])}
                    className="text-xs uppercase tracking-wider text-[#94A3B8] hover:text-white bg-[#181D26] hover:bg-[#202734] border border-white/15 px-4 py-3.5 rounded-full font-medium transition-all cursor-pointer"
                  >
                    Ficha Técnica
                  </button>
                  <Link
                    href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
                    className="text-xs uppercase tracking-wider text-[#FFFFFF] bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:scale-[1.02]"
                  >
                    <span>Personalizar</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Column (5 Cols, 2 Stacked Pieces) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {filteredProducts.slice(1, 3).map((prod) => (
              <div key={prod.id} className="flex flex-col gap-3 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl block border border-white/10 bg-[#12151C] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-xl">
                  
                  {/* Real Product Image */}
                  <Image
                    src={prod.featuredImage || prod.images[0] || '/assets/img-1.jpg'}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/20 to-transparent" />

                  {/* Quick View Trigger on frame */}
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="absolute bottom-3 right-3 z-20 text-[11px] font-medium text-white bg-black/60 hover:bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 transition-colors cursor-pointer"
                  >
                    Ver Medidas ↗
                  </button>
                </div>

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

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="text-[#94A3B8] hover:text-white uppercase tracking-wider font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Ficha
                    </button>
                    <Link
                      href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                      className="text-[#3B82F6] hover:text-[#FFFFFF] uppercase tracking-wider font-semibold text-xs inline-flex items-center gap-1 transition-colors shrink-0"
                    >
                      <span>Configurar</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

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

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
};
