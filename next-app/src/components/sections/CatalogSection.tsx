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
      return PRODUCTS.slice(0, 5);
    }
    return PRODUCTS.filter(
      (p) => p.categorySlug === activeCategory || p.categoryId === activeCategory
    ).slice(0, 5);
  }, [activeCategory]);

  const mainHeroProduct = filteredProducts[0] || PRODUCTS[0];
  const secondaryProducts = filteredProducts.slice(1);

  return (
    <section id="catalogo" className="wrap py-24 border-t border-white/10">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">02</span>
            <span>/</span>
            <span>THE COLLECTION · ARCHIVO 026</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            Prendas para Hacerlas Tuyas
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Siluetas confeccionadas con materias primas seleccionadas, listas para configurar con tu diseño o logotipo.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-3.5 py-1.5 rounded-xs transition-colors cursor-pointer ${
              activeCategory === 'todos'
                ? 'text-[#C8A96E] border-b-2 border-[#C8A96E] font-bold'
                : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
            }`}
          >
            [ Todo ]
          </button>
          {CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat.slug
                  ? 'text-[#C8A96E] border-b-2 border-[#C8A96E] font-bold'
                  : 'text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              [ {cat.name.split(' ')[0]} ]
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Editorial Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Dominant Hero Product (7 Cols) */}
        {mainHeroProduct && (
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Link
              href={`/catalogo/${mainHeroProduct.categorySlug || 'ropa'}/${mainHeroProduct.slug}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-[#141419] border border-white/10 hover:border-[#C8A96E]/50 transition-all duration-500 block shadow-2xl"
            >
              <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30 rounded-xs">
                {mainHeroProduct.tag}
              </div>

              <Image
                src={mainHeroProduct.featuredImage || mainHeroProduct.images[0] || '/assets/hero-main.jpg'}
                alt={mainHeroProduct.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent opacity-80" />
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex flex-col gap-1 max-w-lg">
                <span className="font-mono text-xs text-[#A0A0A5]">CÓDIGO: {mainHeroProduct.code}</span>
                <Link
                  href={`/catalogo/${mainHeroProduct.categorySlug || 'ropa'}/${mainHeroProduct.slug}`}
                  className="font-sans font-bold text-2xl text-[#F4F1EA] hover:text-[#C8A96E] transition-colors"
                >
                  {mainHeroProduct.title}
                </Link>
                <p className="text-xs sm:text-sm text-[#A0A0A5] leading-relaxed font-light">
                  {mainHeroProduct.description}
                </p>
              </div>

              <Link
                href={`/catalogo/${mainHeroProduct.categorySlug || 'ropa'}/${mainHeroProduct.slug}`}
                className="font-mono text-xs uppercase tracking-wider text-[#070708] bg-[#C8A96E] hover:bg-[#dbbe82] font-bold px-5 py-3 rounded-xs shrink-0 transition-all text-center"
              >
                Configurar Pieza →
              </Link>
            </div>
          </div>
        )}

        {/* Secondary Masonry Column (5 Cols, 2x2 Grid) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {secondaryProducts.map((prod) => (
            <Link
              key={prod.id}
              href={`/catalogo/${prod.categorySlug || 'ropa'}/${prod.slug}`}
              className="group flex flex-col gap-3 bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/40 rounded-sm p-4 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden bg-[#141419]">
                <Image
                  src={prod.featuredImage || prod.images[0] || '/assets/hero-main.jpg'}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-wider text-[#C8A96E] bg-black/80 px-2 py-0.5 border border-[#C8A96E]/30 rounded-xs">
                  {prod.tag}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-sans font-bold text-sm text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors truncate">
                  {prod.title}
                </h4>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#A0A0A5]">
                  <span>{prod.materialSpecs?.[0] || 'Confección'}</span>
                  <span className="text-[#C8A96E] font-semibold group-hover:translate-x-0.5 transition-transform">Ver →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Direct Link to full catalog */}
      <div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        <span className="text-[#A0A0A5]">Explora nuestro archivo completo de piezas y complementos.</span>
        <Link
          href="/catalogo"
          className="text-[#C8A96E] hover:text-[#F4F1EA] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
        >
          <span>Ver todo el catálogo (12+ siluetas)</span>
          <span>→</span>
        </Link>
      </div>

    </section>
  );
};

