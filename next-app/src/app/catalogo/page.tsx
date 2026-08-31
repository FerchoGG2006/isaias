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
import { ProductQuickViewModal } from '@/components/catalog/ProductQuickViewModal';
import { Product } from '@/domain';

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [activeTechnique, setActiveTechnique] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      <main className="min-h-screen bg-[#12151C] text-[#FFFFFF] pt-8 pb-24">
        
        {/* Breadcrumb & Hero Header */}
        <div className="wrap mb-10">
          <nav className="flex items-center gap-2 text-xs text-[#94A3B8] mb-4 font-medium">
            <Link href="/" className="hover:text-[#FFFFFF] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#3B82F6]">Catálogo General</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold block mb-2">
                VARIEDADES ISAÍAS · VALLEDUPAR
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#FFFFFF] tracking-tight">
                Catálogo de Confección & Personalización
              </h1>
              <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed mt-2 font-light">
                Selecciona una prenda o accesorio, revisa sus medidas y acabados, y solicita tu cotización con estampado DTF, bordado 3D o sublimación.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/servicios"
                className="text-xs font-semibold text-[#FFFFFF] hover:text-[#3B82F6] bg-[#181D26] hover:bg-[#202734] border border-white/15 px-5 py-3 rounded-full transition-all shadow-sm"
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
            <div className="bg-[#181D26]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center justify-center my-8 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#E5A910] mb-3 text-xl font-bold">
                ✕
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#FFFFFF] mb-1">
                No encontramos prendas con esos filtros
              </h3>
              <p className="text-xs text-[#94A3B8] max-w-md mb-6 leading-relaxed font-light">
                Prueba buscando otro término o restablece los filtros para ver la colección completa.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('todos');
                  setActiveTechnique('todos');
                  setSearchQuery('');
                }}
                className="text-xs uppercase tracking-wider bg-[#3B82F6] text-[#FFFFFF] font-semibold px-7 py-3.5 rounded-full cursor-pointer hover:bg-[#2563EB] transition-all shadow-md shadow-[#3B82F6]/25"
              >
                Restablecer Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          )}

          {/* Quick Categories Navigation Grid */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-wider text-[#E5A910] font-semibold mb-6">
              Explorar por Líneas de Producto
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/catalogo/${cat.slug}`}
                  className="group bg-[#181D26]/80 backdrop-blur-xl border border-white/10 hover:border-[#3B82F6]/60 p-5 rounded-2xl transition-all flex flex-col justify-between gap-3 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div>
                    <span className="text-[10px] text-[#94A3B8] group-hover:text-[#3B82F6] block mb-1 uppercase font-semibold">
                      {cat.tag}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#FFFFFF] group-hover:text-[#3B82F6] transition-colors">
                      {cat.name}
                    </h4>
                  </div>
                  <span className="text-xs text-[#94A3B8] group-hover:translate-x-1 transition-transform">
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

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
