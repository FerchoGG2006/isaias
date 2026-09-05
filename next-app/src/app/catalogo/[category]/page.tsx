import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { CategoryProductGrid } from '@/components/catalog/CategoryProductGrid';

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
        
        {/* 1. ENCABEZADO DE LA SUBSECCIÓN */}
        <section className="wrap mb-10 sm:mb-12">
          
          {/* Breadcrumb refinado y legible */}
          <div className="flex items-center justify-between font-sans text-xs text-[#A0A0A5] mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Link href="/catalogo" className="hover:text-[#F4F1EA] transition-colors">
                Catálogo
              </Link>
              <span>/</span>
              <span className="text-[#C8A96E] font-medium">{category.name}</span>
            </div>
            <Link
              href="/catalogo"
              className="hover:text-[#C8A96E] transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>←</span>
              <span>Ver todas las prendas</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] font-semibold">
                  Categoría
                </span>
                <span className="text-white/20">·</span>
                <span className="font-sans text-xs text-[#A0A0A5]">Variedades Isaías</span>
              </div>

              <h1 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight leading-[1.1]">
                {category.name}
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#9E9EA4] max-w-2xl leading-relaxed mt-3 font-light">
                {category.description}
              </p>
            </div>

            {/* Contador de piezas en la subsección */}
            <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs text-[#8A8A92] shrink-0">
              <span className="text-[#C8A96E] font-semibold text-sm">
                {products.length} {products.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
              </span>
              <span className="text-xs text-[#A0A0A5] mt-1">
                ✓ Personalización bajo pedido
              </span>
            </div>
          </div>

          {/* Selector rápido de subsecciones hermanas */}
          <div className="pt-6 flex items-center gap-3 sm:gap-6 overflow-x-auto pb-2 scrollbar-none text-xs font-sans tracking-wide">
            <Link
              href="/catalogo"
              className="text-[#8A8A92] hover:text-[#F4F1EA] whitespace-nowrap transition-colors py-2"
            >
              Ver Todo el Catálogo
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
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A96E]" />
                  )}
                </Link>
              );
            })}
          </div>

        </section>

        {/* 2. RETÍCULA EQUILIBRADA DE 3 COLUMNAS CON PRODUCT HOTSPOT MODAL */}
        <section className="wrap">
          <CategoryProductGrid products={products} categoryName={category.name} />
        </section>

        {/* 3. FOOTER NOTE */}
        <section className="wrap mt-28 sm:mt-36 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 text-xs font-sans text-[#8A8A92]">
            <div className="flex flex-col gap-1 max-w-md">
              <span className="uppercase tracking-[0.2em] text-[#C8A96E] font-medium font-mono">
                Producción Valledupar
              </span>
              <p className="font-light leading-relaxed">
                Toda la línea {category.name} se confecciona y personaliza en nuestro taller de Valledupar con acabados de primera calidad.
              </p>
            </div>

            <div className="flex items-center gap-6 uppercase tracking-[0.16em]">
              <Link
                href="/personaliza"
                className="text-[#F4F1EA] hover:text-[#C8A96E] transition-colors"
              >
                ¿Cómo hacer tu pedido? →
              </Link>
              <Link
                href="/cotizar"
                className="text-[#C8A96E] hover:underline transition-colors"
              >
                Solicitar Cotización →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
