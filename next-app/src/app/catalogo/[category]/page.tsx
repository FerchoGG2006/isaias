import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(categorySlug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] pt-12 pb-32">
        
        {/* 1. MAISON CATEGORY HEADER */}
        <section className="wrap mb-16 sm:mb-24">
          
          {/* Minimal breadcrumb */}
          <div className="flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.25em] text-[#8A8A92] mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <Link href="/catalogo" className="hover:text-[#F4F1EA] transition-colors">
                Colección
              </Link>
              <span>/</span>
              <span className="text-[#C8A96E]">{category.name}</span>
            </div>
            <Link href="/catalogo" className="hover:text-[#F4F1EA] transition-colors hidden sm:block">
              ← Ver Todas las Líneas
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
                  LÍNEA · {category.tag}
                </span>
                <span className="font-serif italic text-sm text-[#8A8A92]">2026</span>
              </div>

              <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tight leading-[1.05]">
                {category.name}
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#8A8A92] max-w-2xl leading-relaxed mt-4 font-light">
                {category.description}
              </p>
            </div>

            {/* Piece counter */}
            <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs uppercase tracking-[0.2em] text-[#8A8A92]">
              <span className="text-[#C8A96E] font-medium">
                [ {products.length} {products.length === 1 ? 'PIEZA' : 'PIEZAS'} ]
              </span>
              <span className="text-[10px] text-[#8A8A92]/70 mt-0.5">
                Valledupar Atelier
              </span>
            </div>
          </div>

          {/* Quick Categories Switcher */}
          <div className="pt-8 flex items-center gap-6 sm:gap-10 overflow-x-auto pb-2 scrollbar-none text-xs uppercase font-sans tracking-[0.2em]">
            <Link
              href="/catalogo"
              className="text-[#8A8A92] hover:text-[#F4F1EA] whitespace-nowrap transition-colors"
            >
              TODAS
            </Link>
            {CATEGORIES.map((cat) => {
              const isActive = cat.slug === categorySlug;
              return (
                <Link
                  key={cat.id}
                  href={`/catalogo/${cat.slug}`}
                  className={`relative py-2 transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-[#F4F1EA] font-semibold'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>{cat.name.toUpperCase()}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A96E]" />
                  )}
                </Link>
              );
            })}
          </div>

        </section>

        {/* 2. EDITORIAL MASONRY GRID */}
        <section className="wrap">
          {products.length === 0 ? (
            <div className="py-24 text-center border-t border-b border-white/10 flex flex-col items-center justify-center">
              <span className="font-serif italic text-2xl text-[#8A8A92] mb-2">
                Piezas en proceso de producción
              </span>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#8A8A92]/70 mb-6 max-w-sm">
                Estamos registrando nuevas prendas de esta línea.
              </p>
              <Link
                href="/catalogo"
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] hover:underline"
              >
                Ver otras líneas de confección ↺
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-16 sm:gap-y-24 items-start">
              {products.map((product, idx) => {
                const patternIdx = idx % 4;
                let colSpan = 'lg:col-span-6';
                let aspect: 'portrait' | 'tall' | 'wide' | 'classic' = 'portrait';

                if (patternIdx === 0) {
                  colSpan = 'lg:col-span-7';
                  aspect = 'portrait';
                } else if (patternIdx === 1) {
                  colSpan = 'lg:col-span-5';
                  aspect = 'tall';
                } else if (patternIdx === 2) {
                  colSpan = 'lg:col-span-5';
                  aspect = 'tall';
                } else {
                  colSpan = 'lg:col-span-7';
                  aspect = 'portrait';
                }

                return (
                  <div key={product.id} className={`${colSpan} w-full`}>
                    <EditorialProductItem
                      product={product}
                      aspect={aspect}
                      priority={idx < 2}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
