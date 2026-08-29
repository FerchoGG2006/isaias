import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

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
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-24">
        
        {/* Breadcrumbs & Category Intro */}
        <div className="wrap mb-12">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#A0A0A5] mb-4">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-[#F4F1EA] transition-colors">
              Catálogo
            </Link>
            <span>/</span>
            <span className="text-[#C8A96E]">{category.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-2">
                COLECCIÓN · {category.tag}
              </span>
              <h1 className="font-sans font-bold text-3xl sm:text-5xl text-[#F4F1EA] tracking-tight">
                {category.name}
              </h1>
              <p className="text-sm sm:text-base text-[#A0A0A5] max-w-2xl leading-relaxed mt-2 font-light">
                {category.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/catalogo"
                className="font-mono text-xs text-[#F4F1EA] hover:text-[#C8A96E] bg-[#141419] border border-white/15 px-4 py-2.5 rounded-xs transition-colors"
              >
                ← Ver todo el catálogo
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="wrap">
          {products.length === 0 ? (
            <div className="bg-[#0e0e11] border border-white/10 rounded-sm p-12 text-center flex flex-col items-center justify-center my-8">
              <h3 className="font-sans font-bold text-xl text-[#F4F1EA] mb-2">
                Prendas de esta categoría en preparación
              </h3>
              <p className="font-mono text-xs text-[#A0A0A5] max-w-md mb-5">
                Estamos digitalizando las fotografías reales de esta línea. Puedes solicitar cotización personalizada directamente.
              </p>
              <Link
                href="/catalogo"
                className="font-mono text-xs uppercase tracking-wider bg-[#C8A96E] text-[#070708] font-bold px-6 py-3 rounded-xs"
              >
                Ver otras categorías
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Other Categories Bar */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-6">
              OTRAS CATEGORÍAS DISPONIBLES
            </h3>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.filter((c) => c.slug !== categorySlug).map((otherCat) => (
                <Link
                  key={otherCat.id}
                  href={`/catalogo/${otherCat.slug}`}
                  className="font-mono text-xs uppercase tracking-wider bg-[#141419] hover:bg-[#1f1f26] border border-white/10 hover:border-[#C8A96E] text-[#D0CFC9] hover:text-[#F4F1EA] px-4 py-2.5 rounded-xs transition-all"
                >
                  {otherCat.name} →
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
