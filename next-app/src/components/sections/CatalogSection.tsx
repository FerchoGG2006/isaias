'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/ui/ProductCard';

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeCategory === 'todos'
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.categorySlug === activeCategory || p.categoryId === activeCategory);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="wrap py-16 sm:py-24 border-t border-white/10">
      
      {/* ========================================================================= */}
      {/* SECCIÓN EDITORIAL: EXPLORAR POR CATEGORÍA */}
      {/* ========================================================================= */}
      <div className="mb-20">
        
        {/* Editorial Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/20 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#F4F1EA]">
          <h2 className="font-bold tracking-[0.22em] text-[#F4F1EA]">
            EXPLORAR POR CATEGORÍA
          </h2>

          <span className="hidden md:inline text-[#A0A0A5] tracking-[0.25em]">
            VALLEDUPAR · ESTUDIO TEXTIL
          </span>

          <div className="flex items-center gap-4 text-[#A0A0A5]">
            <Link href="/catalogo" className="hidden sm:inline text-[11px] text-[#C8A96E] hover:underline">
              Ver catálogo completo →
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollSlider('left')}
                className="hover:text-[#C8A96E] transition-colors font-bold px-1"
                aria-label="Diapositiva anterior"
              >
                &lt;
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="hover:text-[#C8A96E] transition-colors font-bold px-1"
                aria-label="Siguiente diapositiva"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Category Cards Carousel Track */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveCategory(item.slug);
                document.getElementById('grid-productos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative min-w-[290px] sm:min-w-[380px] md:min-w-[440px] h-[500px] sm:h-[560px] bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/50 rounded-sm overflow-hidden flex flex-col justify-end cursor-pointer select-none transition-all duration-500 shadow-2xl"
            >
              {/* Full Bleed Background Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 290px, 440px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:via-black/50 transition-colors" />

              {/* Top Spec Tag */}
              <div className="absolute top-5 left-5 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30 rounded-xs">
                {item.tag}
              </div>

              {/* Category Headline */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-3">
                <span className="font-mono text-[10px] text-[#C8A96E] uppercase tracking-[0.22em] font-semibold">
                  {item.subtitle}
                </span>
                
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight group-hover:text-[#C8A96E] transition-colors leading-tight">
                  {item.name}
                </h3>

                <p className="text-xs text-[#D0CFC9] leading-relaxed line-clamp-2 max-w-md font-light opacity-90">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  <span>Ver colección</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MAIN CATALOG PRODUCT GRID */}
      {/* ========================================================================= */}
      <div id="grid-productos" className="pt-12 border-t border-white/10">
        
        {/* Product Catalog Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
              PRENDAS & PIEZAS EN ESTUDIO
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-bold text-[#F4F1EA] tracking-tight uppercase">
              Muestrario de Productos
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/catalogo"
              className="font-mono text-xs text-[#F4F1EA] hover:text-[#C8A96E] uppercase tracking-widest bg-[#141419] px-4 py-2.5 border border-white/15 hover:border-[#C8A96E] rounded-xs transition-all"
            >
              Abrir Catálogo Completo ↗
            </Link>
          </div>
        </div>

        {/* Active Category Reset Banner */}
        {activeCategory !== 'todos' && (
          <div className="flex items-center justify-between gap-4 mb-6 font-mono text-xs text-[#A0A0A5] uppercase tracking-widest bg-[#0e0e11] px-5 py-3 border border-[#C8A96E]/40 rounded-sm">
            <span>FILTRADO POR CATEGORÍA: <strong className="text-[#C8A96E]">{activeCategory.toUpperCase()}</strong></span>
            <button
              onClick={() => setActiveCategory('todos')}
              className="text-[#F4F1EA] hover:text-[#C8A96E] underline cursor-pointer"
            >
              MOSTRAR TODAS LAS PRENDAS
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

    </section>
  );
};
