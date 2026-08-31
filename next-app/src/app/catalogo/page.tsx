import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATALOG_CATEGORIES } from '@/data/categories';
import { DOMAIN_PRODUCTS } from '@/data/catalogProducts';
import { TECHNIQUES } from '@/data/services';

export const metadata = {
  title: 'Catálogo Digital — Variedades Isaías',
  description: 'Catálogo especializado en personalización textil, estampados DTF, bordados 3D y sublimación de alta resolución.',
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-16">
      <div className="wrap space-y-12">
        {/* Header Editorial */}
        <div className="border-b border-neutral-800 pb-8 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>Catálogo Especializado</span>
            <span>•</span>
            <span>Edición 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-white">
            Catálogo & Sustratos
          </h1>
          <p className="max-w-2xl text-base text-neutral-400">
            Explora nuestra línea de prendas de vestir, sublimables y dotaciones listas para ser personalizadas mediante DTF, bordado computarizado o sublimación fotográfica.
          </p>
        </div>

        {/* Categorías Principales */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-200 border-l-2 border-amber-500 pl-3">
            Categorías Comerciales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATALOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/catalogo/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-950/20"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-900 relative">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                      Sin imagen
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                </div>
                <div className="p-5 space-y-2 relative">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-amber-400 group-hover:translate-x-1 transition">
                    Ver sustratos →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Productos Destacados */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-200 border-l-2 border-amber-500 pl-3">
              Todos los Productos
            </h2>
            <span className="text-xs text-neutral-500 font-mono">
              {DOMAIN_PRODUCTS.length} productos disponibles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {DOMAIN_PRODUCTS.map((product) => {
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
                      <div className="pt-1 flex flex-wrap gap-1">
                        {product.techniques.map((tId) => (
                          <span
                            key={tId}
                            className="bg-neutral-800 text-neutral-300 text-[10px] px-2 py-0.5 rounded font-mono uppercase"
                          >
                            {tId}
                          </span>
                        ))}
                      </div>
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
                      href={`/catalogo/${product.categoryId}/${product.slug}`}
                      className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-500 hover:text-black transition"
                    >
                      Configurar
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sección de Técnicas */}
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 space-y-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-200">
            Técnicas de Producción Disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECHNIQUES.map((tech) => (
              <div
                key={tech.id}
                className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950 space-y-2"
              >
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block font-mono">
                  {tech.id}
                </span>
                <h3 className="text-sm font-bold text-white">{tech.name}</h3>
                <p className="text-xs text-neutral-400">{tech.description}</p>
                {tech.specification && (
                  <span className="inline-block text-[10px] bg-amber-950/60 text-amber-300 border border-amber-800/50 px-2 py-0.5 rounded">
                    {tech.specification}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
