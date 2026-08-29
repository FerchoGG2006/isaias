'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/ui/ProductCard';
import { CatalogFilterBar } from '@/components/catalog/CatalogFilterBar';

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [activeTechnique, setActiveTechnique] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Filtro de categoría
      if (activeCategory !== 'todos') {
        const matchesCat =
          product.categorySlug === activeCategory || product.categoryId === activeCategory;
        if (!matchesCat) return false;
      }

      // Filtro de técnica
      if (activeTechnique !== 'todos') {
        const matchesTech = product.customCapabilities.allowedTechniques.some(
          (t) => t === activeTechnique
        );
        if (!matchesTech) return false;
      }

      // Filtro de búsqueda textual
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
  }, [activeCategory, activeTechnique, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-24">
        
        {/* Breadcrumb & Hero Header */}
        <div className="wrap mb-10">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#A0A0A5] mb-4">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#C8A96E]">Catálogo General</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-2">
                VARIEDADES ISAÍAS · VALLEDUPAR
              </span>
              <h1 className="font-sans font-bold text-3xl sm:text-5xl text-[#F4F1EA] tracking-tight">
                Catálogo de Confección & Personalización
              </h1>
              <p className="text-sm sm:text-base text-[#A0A0A5] max-w-2xl leading-relaxed mt-2 font-light">
                Selecciona una prenda o accesorio, configura sus variantes de color, tallas y técnicas autorizadas, y genera tu solicitud de cotización formal.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/servicios"
                className="font-mono text-xs text-[#D0CFC9] hover:text-[#C8A96E] bg-[#141419] border border-white/15 px-4 py-2.5 rounded-xs transition-colors"
              >
                ¿Tienes prendas propias? Ver Servicios →
              </Link>
            </div>
          </div>
        </div>

        {/* Filter Bar & Grid */}
        <div className="wrap">
          <CatalogFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            activeTechnique={activeTechnique}
            onTechniqueChange={setActiveTechnique}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            totalResults={filteredProducts.length}
          />

          {filteredProducts.length === 0 ? (
            <div className="bg-[#0e0e11] border border-white/10 rounded-sm p-12 text-center flex flex-col items-center justify-center my-8">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#C8A96E] mb-3 font-mono text-xl">
                ✕
              </div>
              <h3 className="font-sans font-bold text-xl text-[#F4F1EA] mb-1">
                No encontramos productos con los filtros seleccionados
              </h3>
              <p className="font-mono text-xs text-[#A0A0A5] max-w-md mb-5 leading-relaxed">
                Prueba buscando otro término o restablece los filtros para ver la colección completa.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('todos');
                  setActiveTechnique('todos');
                  setSearchQuery('');
                }}
                className="font-mono text-xs uppercase tracking-wider bg-[#C8A96E] text-[#070708] font-bold px-6 py-3 rounded-xs cursor-pointer hover:bg-[#d8b87a] transition-all"
              >
                Restablecer Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Quick Categories Navigation Grid */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-6">
              EXPLORAR POR LÍNEAS DE PRODUCTO
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/catalogo/${cat.slug}`}
                  className="group bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/50 p-4 rounded-xs transition-all flex flex-col justify-between gap-3 hover:shadow-lg"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#A0A0A5] group-hover:text-[#C8A96E] block mb-1">
                      {cat.tag}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                      {cat.name}
                    </h4>
                  </div>
                  <span className="font-mono text-xs text-[#A0A0A5] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
