import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDomainProductBySlug, DOMAIN_PRODUCTS } from '@/data/catalogProducts';
import { getCategoryBySlug } from '@/data/categories';
import { ProductConfigurator } from '@/components/product/ProductConfigurator';

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DOMAIN_PRODUCTS.map((prod) => ({
    category: prod.categoryId,
    slug: prod.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category: categorySlug, slug: productSlug } = await params;
  const product = getDomainProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!product) {
    notFound();
  }

  const mainImage = product.images[0] || '/assets/telas/ajustadas/ajustada-1.jpg';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
      <div className="wrap space-y-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/catalogo" className="hover:text-white transition">
            Catálogo
          </Link>
          <span>/</span>
          <Link
            href={`/catalogo/${categorySlug}`}
            className="hover:text-white transition"
          >
            {category?.name || categorySlug}
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{product.name}</span>
        </nav>

        {/* Header de Producto / Galería Superior */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-neutral-800 pb-10">
          {/* Main Photo Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded text-xs font-bold text-amber-400 font-mono">
                {product.code}
              </div>
            </div>

            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-20 w-20 flex-shrink-0 rounded-lg border border-neutral-800 overflow-hidden bg-neutral-900"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Vista ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details & Specifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                <span>Garantía de Calidad Textil</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications Box */}
            {product.materials.length > 0 && (
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                  Sustrato & Material Verificado
                </h3>
                <div className="space-y-2">
                  {product.materials.map((mat) => (
                    <div key={mat.id} className="text-xs text-neutral-200">
                      <span className="font-bold text-white block">{mat.name}</span>
                      {mat.specification && (
                        <span className="text-neutral-400">{mat.specification}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price reference */}
            <div className="flex items-baseline space-x-3 pt-2">
              <span className="text-xs uppercase text-neutral-400 font-semibold">
                Precio base desde:
              </span>
              <span className="text-2xl font-black text-amber-400">
                ${product.pricing.amount?.toLocaleString('es-CO')} COP
              </span>
              <span className="text-xs text-neutral-500">/ unidad</span>
            </div>
          </div>
        </div>

        {/* Master Product Configurator Section */}
        <section className="space-y-6 pt-4">
          <div className="border-l-2 border-amber-500 pl-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-200">
              Personalización & Cotización
            </h2>
            <p className="text-xs text-neutral-400">
              Selecciona variantes, distribuye tallas y adjunta tu diseño para calcular tu orden.
            </p>
          </div>

          <ProductConfigurator product={product} />
        </section>
      </div>
    </div>
  );
}
