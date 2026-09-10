'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { PRODUCTS } from '@/data/products';
import { ProductHotspotModal } from '@/components/catalog/ProductHotspotModal';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';
import { Product } from '@/domain';
import { useQuote } from '@/context/QuoteContext';

const EDITORIAL_FILTERS = [
  { id: 'todos', label: 'Todas las Prendas' },
  { id: 'ropa', label: 'Camisetas & Ropa' },
  { id: 'accesorios', label: 'Gorras & Accesorios' },
  { id: 'sublimacion', label: 'Mugs & Sublimación' },
  { id: 'dotaciones', label: 'Dotaciones de Trabajo' },
];

export default function CatalogoPage() {
  const { businessId } = useQuote();
  const isPalacio = businessId === 'palacio';

  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtro de productos pertenecientes a la empresa activa
  const tenantProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.businessId === businessId);
  }, [businessId]);

  // Contador de productos por categoría para las pestañas
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      todos: tenantProducts.length,
    };
    EDITORIAL_FILTERS.forEach((f) => {
      if (f.id !== 'todos') {
        counts[f.id] = tenantProducts.filter((p) => {
          return p.categorySlug === f.id || p.categoryId === f.id;
        }).length;
      }
    });
    return counts;
  }, [tenantProducts]);

  const filteredProducts = useMemo(() => {
    return tenantProducts.filter((product) => {
      // Filtrar por categoría
      if (activeCategory !== 'todos') {
        const matchesCat =
          product.categorySlug === activeCategory || product.categoryId === activeCategory;
        if (!matchesCat) return false;
      }

      // Filtrar por texto de búsqueda
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
  }, [tenantProducts, activeCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] pt-12 pb-32">
        
        {/* 1. FRESH EDITORIAL HEADER */}
        <section className="wrap mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.1]">
                {isPalacio
                  ? 'Catálogo El Palacio de la Sublimación'
                  : 'Catálogo Variedades Isaías'}
              </h1>
              <p className="font-sans text-sm text-[#A0A0A5] mt-2 max-w-xl">
                {isPalacio
                  ? 'Mugs cerámicos y mágicos, termos de aluminio, indumentaria deportiva full print y artículos con estampado fotográfico permanente 4K.'
                  : 'Ropa, polos en piqué Wilcom, baby tees y dotaciones de excelente confección local en Valledupar.'}
              </p>
            </div>

            {/* Contador y garantía de servicio */}
            <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs text-[#8A8A92]">
              <span className={`font-semibold text-sm ${isPalacio ? 'text-[#FF6B00]' : 'text-[#C8A96E]'}`}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
              </span>
              <span className="text-xs text-[#A0A0A5] mt-1">
                ✓ Pedidos individuales y al por mayor · Envíos a todo el país
              </span>
            </div>
          </div>

          {/* 2. NAVEGACIÓN Y FILTROS POR SUBSECCIÓN CON CONTADORES */}
          <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            
            {/* Pestañas de Subsecciones */}
            <nav
              className="flex items-center gap-3 sm:gap-6 overflow-x-auto pb-2 scrollbar-none text-xs font-sans tracking-wide"
              aria-label="Filtro de colecciones"
            >
              {EDITORIAL_FILTERS.map((f) => {
                const isActive = activeCategory === f.id;
                const count = categoryCounts[f.id] || 0;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveCategory(f.id)}
                    className={`relative py-2 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? 'text-[#F4F1EA] font-semibold'
                        : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                    }`}
                  >
                    <span>{f.label}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                      isActive
                        ? isPalacio
                          ? 'bg-[#FF6B00]/25 text-[#FF6B00]'
                          : 'bg-[#C8A96E]/25 text-[#C8A96E]'
                        : 'bg-white/5 text-[#8A8A92]'
                    }`}>
                      {count}
                    </span>
                    {isActive && (
                      <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isPalacio ? 'bg-[#FF6B00]' : 'bg-[#C8A96E]'}`} />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Búsqueda minimalista y fresca */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre o material..."
                className={`w-full bg-[#141419] border border-white/15 text-[#F4F1EA] pl-9 pr-4 py-2 rounded-lg font-sans text-xs outline-none transition-colors placeholder:text-[#8A8A92] ${
                  isPalacio ? 'focus:border-[#FF6B00]' : 'focus:border-[#C8A96E]'
                }`}
              />
              <svg
                className="w-4 h-4 text-[#8A8A92] absolute left-3 top-1/2 -translate-y-1/2"
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

        {/* 3. RETÍCULA EDITORIAL EQUILIBRADA DE 3 COLUMNAS */}
        <section className="wrap">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center border-t border-b border-white/10 flex flex-col items-center justify-center">
              <span className="font-sans font-medium text-xl text-[#8A8A92] mb-2">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
              {filteredProducts.map((product, idx) => (
                <div key={product.id} className="w-full">
                  <EditorialProductItem
                    product={product}
                    aspect="portrait"
                    priority={idx < 3}
                    onQuickView={(p) => setSelectedProduct(p)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 4. FOOTER NOTE & BESPOKE PRODUCTION */}
        <section className="wrap mt-28 sm:mt-36 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 text-xs font-sans text-[#8A8A92]">
            <div className="flex flex-col gap-1 max-w-md">
              <span className="uppercase tracking-[0.16em] text-[#C8A96E] font-medium font-sans text-xs">
                Confección Local & Personalización
              </span>
              <p className="font-light leading-relaxed text-[#A0A0A5]">
                Prendas confeccionadas con telas de excelente durabilidad, estampados duraderos y bordados de alta definición en Valledupar.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-sans">
              <Link
                href="/servicios"
                className="text-[#C8A96E] hover:underline transition-colors font-medium flex items-center gap-1.5"
              >
                <span>¿Ya tienes tus prendas? Te las estampamos o bordamos</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <QuoteDrawer />

      {/* Product Hotspot Modal Interactivo sobre Fotografía */}
      <ProductHotspotModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
