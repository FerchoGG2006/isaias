import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, CATALOG_CATEGORIES } from '@/data/categories';
import { getDomainProductsByCategory } from '@/data/catalogProducts';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATALOG_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getDomainProductsByCategory(category.id);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-16">
      <div className="wrap space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/catalogo" className="hover:text-white transition">
            Catálogo
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="border-b border-neutral-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            {category.name}
          </h1>
          {category.description && (
            <p className="max-w-2xl text-sm text-neutral-400">
              {category.description}
            </p>
          )}
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12 text-center space-y-4">
            <p className="text-sm text-neutral-400">
              No hay productos registrados en esta categoría aún.
            </p>
            <Link
              href="/catalogo"
              className="inline-block rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black hover:bg-amber-400 transition"
            >
              Volver al catálogo completo
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const mainImage = product.images[0] || '/assets/telas/ajustadas/ajustada-1.jpg';

              return (
                <div
                  key={product.id}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden flex flex-col justify-between transition hover:border-neutral-700"
                >
                  <div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={mainImage}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md border border-neutral-700 px-2.5 py-1 rounded text-[10px] font-bold text-amber-400">
                        {product.code}
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-neutral-800/60 mt-3 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase text-neutral-500 font-semibold">
                        Precio
                      </span>
                      <span className="text-sm font-bold text-amber-400">
                        ${product.pricing.amount?.toLocaleString('es-CO')} COP
                      </span>
                    </div>
                    <Link
                      href={`/catalogo/${category.slug}/${product.slug}`}
                      className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-500 hover:text-black transition"
                    >
                      Configurar
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
