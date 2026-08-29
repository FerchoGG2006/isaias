'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/ui/ProductCard';

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') {
      return PRODUCTS.slice(0, 6);
    }
    return PRODUCTS.filter(
      (p) => p.categorySlug === activeCategory || p.categoryId === activeCategory
    ).slice(0, 6);
  }, [activeCategory]);

  return (
    <section id="catalogo" className="wrap py-20 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.25em] font-semibold">
            <span className="opacity-60">03</span>
            <span>/</span>
            <span>PRENDAS & SILUETAS EN ESTUDIO</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
            Muestrario de Confección & Catálogo
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Prendas confeccionadas con materias primas seleccionadas, listas para configurar con tu logotipo o diseño personalizado.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <Link
            href="/catalogo"
            className="font-mono text-xs uppercase tracking-wider text-[#070708] bg-[#C8A96E] hover:bg-[#dbbe82] font-bold px-5 py-3 rounded-xs shadow-lg transition-all"
          >
            Ver Catálogo Completo (12+) →
          </Link>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <button
          onClick={() => setActiveCategory('todos')}
          className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-xs border transition-all shrink-0 cursor-pointer ${
            activeCategory === 'todos'
              ? 'bg-[#F4F1EA] text-[#070708] border-[#F4F1EA] font-bold'
              : 'bg-[#121216] text-[#A0A0A5] border-white/10 hover:border-white/25 hover:text-[#F4F1EA]'
          }`}
        >
          Todas las prendas ({PRODUCTS.length})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.slug)}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-xs border transition-all shrink-0 cursor-pointer ${
              activeCategory === cat.slug
                ? 'bg-[#C8A96E] text-[#070708] border-[#C8A96E] font-bold'
                : 'bg-[#121216] text-[#A0A0A5] border-white/10 hover:border-white/25 hover:text-[#F4F1EA]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Structured Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Category Links Footer Strip */}
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A0A0A5]">
        <span>¿Necesitas un volumen mayor para tu empresa o evento?</span>
        <Link href="/servicios/dotaciones-empresariales-confeccion" className="text-[#C8A96E] hover:underline font-semibold">
          Cotizar Dotaciones Empresariales →
        </Link>
      </div>

    </section>
  );
};
