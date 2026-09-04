'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { PRODUCTS } from '@/data/products';
import { ProductQuickViewModal } from '@/components/catalog/ProductQuickViewModal';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';
import { Product } from '@/domain';

const EDITORIAL_FILTERS = [
  { id: 'todos', label: 'TODAS' },
  { id: 'ropa', label: 'ROPA' },
  { id: 'accesorios', label: 'ACCESORIOS' },
  { id: 'sublimacion', label: 'SUBLIMACIÓN' },
  { id: 'dotaciones', label: 'DOTACIONES' },
];

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Filter by category
      if (activeCategory !== 'todos') {
        const matchesCat =
          product.categorySlug === activeCategory || product.categoryId === activeCategory;
        if (!matchesCat) return false;
      }

      // Filter by textual search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          product.title.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          product.code.toLowerCase().includes(q) ||
          product.tag.toLowerCase().includes(q) ||
          (product.materialName && product.materialName.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] pt-12 pb-32">
        
        {/* 1. MAISON EDITORIAL HEADER */}
        <section className="wrap mb-16 sm:mb-24">
          
          {/* Top minimal breadcrumb */}
          <div className="flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.25em] text-[#8A8A92] mb-8 sm:mb-12">
            <span>Variedades Isaías · Atelier</span>
            <span>Valledupar · Colombia</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
                  COLLECTION
                </span>
                <span className="font-serif italic text-sm text-[#8A8A92]">2026</span>
              </div>

              <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tight leading-[1.05]">
                Piezas para hacerlas tuyas.
              </h1>
            </div>

            {/* Discreet piece counter */}
            <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs uppercase tracking-[0.2em] text-[#8A8A92]">
              <span className="text-[#C8A96E] font-medium">
                [ {filteredProducts.length} {filteredProducts.length === 1 ? 'PIEZA' : 'PIEZAS'} ]
              </span>
              <span className="text-[10px] text-[#8A8A92]/70 mt-0.5">
                Producción bajo pedido
              </span>
            </div>
          </div>

          {/* 2. MINIMALIST TYPOGRAPHIC FILTERS & DISCRETE SEARCH */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Typographic Navigation Filter Tabs */}
            <nav
              className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-2 scrollbar-none text-xs uppercase font-sans tracking-[0.2em]"
              aria-label="Filtro de colecciones"
            >
              {EDITORIAL_FILTERS.map((f) => {
                const isActive = activeCategory === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveCategory(f.id)}
                    className={`relative py-2 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#F4F1EA] font-semibold'
                        : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                    }`}
                  >
                    <span>{f.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A96E]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Discrete Minimalist Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar pieza o material..."
                className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A96E] text-[#F4F1EA] pl-6 pr-6 py-1.5 font-sans text-xs outline-none transition-colors placeholder:text-[#8A8A92]/50"
              />
              <svg
                className="w-3.5 h-3.5 text-[#8A8A92] absolute left-0 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#8A8A92] hover:text-white text-xs cursor-pointer font-sans"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

        </section>

        {/* 3. EDITORIAL LOOKBOOK MASONRY COMPOSITION */}
        <section className="wrap">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center border-t border-b border-white/10 flex flex-col items-center justify-center">
              <span className="font-serif italic text-2xl text-[#8A8A92] mb-2">
                No se encontraron piezas registradas
              </span>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#8A8A92]/70 mb-6 max-w-sm">
                Prueba con otro término de búsqueda o restablece la colección.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                }}
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] hover:underline cursor-pointer"
              >
                Ver toda la colección ↺
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-16 sm:gap-y-24 items-start">
              {filteredProducts.map((product, idx) => {
                // Editorial Masonry Pacing Logic
                // Alternate spans and aspect ratios for magazine lookbook rhythm
                const patternIdx = idx % 6;
                let colSpan = 'lg:col-span-4';
                let aspect: 'portrait' | 'tall' | 'wide' | 'classic' = 'portrait';

                if (patternIdx === 0) {
                  colSpan = 'lg:col-span-7';
                  aspect = 'portrait';
                } else if (patternIdx === 1) {
                  colSpan = 'lg:col-span-5';
                  aspect = 'tall';
                } else if (patternIdx === 2) {
                  colSpan = 'lg:col-span-4';
                  aspect = 'portrait';
                } else if (patternIdx === 3) {
                  colSpan = 'lg:col-span-4';
                  aspect = 'tall';
                } else if (patternIdx === 4) {
                  colSpan = 'lg:col-span-4';
                  aspect = 'portrait';
                } else if (patternIdx === 5) {
                  colSpan = 'lg:col-span-12';
                  aspect = 'wide';
                }

                return (
                  <div key={product.id} className={`${colSpan} w-full`}>
                    <EditorialProductItem
                      product={product}
                      aspect={aspect}
                      priority={idx < 2}
                      onQuickView={(p) => setSelectedProduct(p)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 4. FOOTER NOTE & BESPOKE PRODUCTION */}
        <section className="wrap mt-28 sm:mt-40 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 text-xs font-sans text-[#8A8A92]">
            <div className="flex flex-col gap-1 max-w-md">
              <span className="uppercase tracking-[0.2em] text-[#C8A96E] font-medium">
                Atelier Textil & Personalización
              </span>
              <p className="font-light leading-relaxed">
                Todas las piezas son producidas bajo demanda con curado térmico de 160 °C y bordado matricial Wilcom en nuestro taller de Valledupar.
              </p>
            </div>

            <div className="flex items-center gap-6 uppercase tracking-[0.16em]">
              <Link
                href="/servicios"
                className="text-[#F4F1EA] hover:text-[#C8A96E] transition-colors"
              >
                ¿Prendas Propias? Ver Maquila →
              </Link>
              <Link
                href="/cotizar"
                className="text-[#C8A96E] hover:underline transition-colors"
              >
                Cotización Formal →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />

      {/* Quick View Modal with Size Guide in CM */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
