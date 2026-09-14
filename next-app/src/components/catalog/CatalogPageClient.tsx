'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { ProductHotspotModal } from '@/components/catalog/ProductHotspotModal';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';
import { Product } from '@/domain';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const EDITORIAL_FILTERS = [
  { id: 'todos', label: 'Todas las Prendas' },
  { id: 'ropa', label: 'Camisetas & Ropa' },
  { id: 'accesorios', label: 'Gorras & Accesorios' },
  { id: 'sublimacion', label: 'Mugs & Sublimación' },
  { id: 'dotaciones', label: 'Dotaciones de Trabajo' },
];

export const CatalogPageClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const allProducts = PRODUCTS;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      todos: allProducts.length,
    };
    EDITORIAL_FILTERS.forEach((f) => {
      if (f.id !== 'todos') {
        counts[f.id] = allProducts.filter((p) => {
          return p.categorySlug === f.id || p.categoryId === f.id;
        }).length;
      }
    });
    return counts;
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (activeCategory !== 'todos') {
        const matchesCat =
          product.categorySlug === activeCategory || product.categoryId === activeCategory;
        if (!matchesCat) return false;
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          product.title.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          product.code.toLowerCase().includes(q) ||
          product.tag.toLowerCase().includes(q);

        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [allProducts, activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-28">
      
      {/* 1. CABECERA EDITORIAL Y MIGAS DE PAN */}
      <section className="wrap mb-8 sm:mb-10">
        <div className="mb-4">
          <Breadcrumbs items={[{ label: 'Catálogo de Prendas' }]} />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.1]">
              Catálogo de Prendas & Dotaciones
            </h1>
            <p className="font-sans text-sm text-[#A0A0A5] mt-2 max-w-xl font-light">
              Prendas confeccionadas con telas de alto rendimiento, estampados suaves DTF y bordado fino Wilcom para uso diario y dotaciones empresariales en Valledupar.
            </p>
          </div>

          <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs text-[#8A8A92]">
            <span className="font-semibold text-sm text-[#C8A96E]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
            </span>
            <span className="text-xs text-[#A0A0A5] mt-1 font-light">
              Pedidos individuales y al por mayor · Envíos a todo el país
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
                  onClick={() => setActiveCategory(f.id)}
                  className={`pb-2.5 flex items-center gap-2 whitespace-nowrap transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-[#C8A96E] font-semibold'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>{f.label}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                    isActive
                      ? 'bg-[#C8A96E]/25 text-[#C8A96E]'
                      : 'bg-white/5 text-[#8A8A92]'
                  }`}>
                    {count}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A96E]" />
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
              className="w-full bg-[#141419] border border-white/15 text-[#F4F1EA] pl-9 pr-4 py-2 rounded-lg font-sans text-xs outline-none transition-colors placeholder:text-[#8A8A92] focus:border-[#C8A96E]"
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

      {/* 3. RETÍCULA EDITORIAL DE PRODUCTOS */}
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
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="bg-[#141419] border border-white/15 hover:border-[#C8A96E] text-[#F4F1EA] font-sans text-xs px-6 py-2.5 rounded-xs transition-colors cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <EditorialProductItem
                key={product.id}
                product={product}
                onQuickView={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. FOOTER CALLOUT SOBRE EL TALLER */}
      <section className="wrap mt-20">
        <div className="p-8 sm:p-10 bg-[#12131A] border border-white/10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-xl">
            <h3 className="font-sans font-bold text-lg text-[#F4F1EA]">
              ¿Buscas una confección personalizada o uniforme específico?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] font-light">
              Producimos sobre pedido a partir de 1 unidad con asesoría directa en telas, bordado Wilcom 3D y DTF textil en Valledupar.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/personaliza"
              className="font-sans text-xs font-semibold uppercase tracking-wider bg-[#C8A96E] hover:bg-[#dbbe82] text-[#0C0D10] px-6 py-3.5 rounded-xs transition-colors shadow-lg"
            >
              ¿Cómo ordenar? →
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de Detalle de Producto / Hotspots */}
      <ProductHotspotModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </main>
  );
};
