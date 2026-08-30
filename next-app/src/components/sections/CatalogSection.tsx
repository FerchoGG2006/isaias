'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <section id="catalogo" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.32em] font-semibold">
            03 / ARCHIVO 026
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter">
            THE COLLECTION
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D0CFC9] leading-relaxed font-normal">
            &ldquo;Prendas hechas para llevar tus ideas.&rdquo;
          </p>
        </div>

        {/* Minimal Category Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs uppercase tracking-widest">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              activeCategory === 'todos'
                ? 'text-[#C8A96E] border-b border-[#C8A96E] font-bold'
                : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
            }`}
          >
            [ Todo ]
          </button>
          {CATEGORIES.slice(0, 3).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat.slug
                  ? 'text-[#C8A96E] border-b border-[#C8A96E] font-bold'
                  : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              [ {cat.name.split(' ')[0]} ]
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Maison Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Large Dominant Lookbook Piece (7 Cols) */}
        {filteredProducts[0] && (
          <div className="lg:col-span-7 flex flex-col gap-6 group">
            <Link
              href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#141419] rounded-xs block border border-white/5 group-hover:border-[#C8A96E]/40 transition-all duration-700"
            >
              <Image
                src={filteredProducts[0].featuredImage || filteredProducts[0].images[0] || '/assets/hero-main.jpg'}
                alt={filteredProducts[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E]">
                  {filteredProducts[0].tag || 'PIEL DE DURAZNO SPANDEX · 220G'}
                </span>
                <Link
                  href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
                  className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors"
                >
                  {filteredProducts[0].title}
                </Link>
                <span className="font-mono text-xs text-[#A0A0A5]">
                  Técnicas: {filteredProducts[0].customCapabilities?.allowedTechniques?.map(t => t.toUpperCase()).join(' · ') || 'DTF · Bordado 3D Wilcom'}
                </span>
              </div>

              <Link
                href={`/catalogo/${filteredProducts[0].categorySlug || 'ropa'}/${filteredProducts[0].slug}`}
                className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA] group-hover:text-[#C8A96E] font-bold flex items-center gap-2 transition-colors shrink-0"
              >
                <span>Ver Pieza</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Secondary Asymmetric Column (5 Cols, 2 Stacked Pieces) */}
        <div className="lg:col-span-5 flex flex-col gap-14">
          {filteredProducts.slice(1, 3).map((prod) => (
            <div key={prod.id} className="flex flex-col gap-4 group">
              <Link
                href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#141419] rounded-xs block border border-white/5 group-hover:border-[#C8A96E]/40 transition-all duration-700"
              >
                <Image
                  src={prod.featuredImage || prod.images[0] || '/assets/hero-main.jpg'}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </Link>

              <div className="flex items-baseline justify-between gap-4 font-mono text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A96E]">{prod.tag}</span>
                  <Link
                    href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                    className="font-sans font-bold text-lg text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors"
                  >
                    {prod.title}
                  </Link>
                  <span className="text-[#A0A0A5] text-[11px]">{prod.materialSpecs?.[0] || 'Confección en taller'}</span>
                </div>

                <Link
                  href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
                  className="text-[#F4F1EA] group-hover:text-[#C8A96E] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Ver</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Catalog Link Strip */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <span className="text-[#A0A0A5]">Archivo completo disponible para personalización y pedidos institucionales.</span>
        <Link
          href="/catalogo"
          className="text-[#C8A96E] hover:text-[#F4F1EA] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
        >
          <span>Ver todas las prendas del catálogo (12+)</span>
          <span>→</span>
        </Link>
      </div>

    </section>
  );
};


