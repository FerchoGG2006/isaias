import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { getMaterialById } from '@/data/materials';
import { ProductGallery } from '@/components/catalog/ProductGallery';
import { ProductConfigurator } from '@/components/configurator/ProductConfigurator';
import { ProductCard } from '@/components/ui/ProductCard';

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    category: p.categorySlug || 'ropa',
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category: categorySlug, slug: productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(categorySlug) || getCategoryBySlug(product.categorySlug);
  const material = product.materialId ? getMaterialById(product.materialId) : undefined;

  // Productos relacionados de la misma categoría (excluyendo el actual)
  const relatedProducts = PRODUCTS.filter(
    (p) => (p.categorySlug === categorySlug || p.categoryId === product.categoryId) && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-24">
        
        {/* Breadcrumbs */}
        <div className="wrap mb-8">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#A0A0A5]" aria-label="Ruta de navegación">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-[#F4F1EA] transition-colors">
              Catálogo
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/catalogo/${category.slug}`} className="hover:text-[#F4F1EA] transition-colors">
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#C8A96E] truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </nav>
        </div>

        {/* Product Main Container */}
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Media Gallery & Technical Specs (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <ProductGallery
                images={product.images}
                title={product.title}
                tag={product.tag}
              />

              {/* Technical Specifications Table */}
              {product.specifications.length > 0 && (
                <div className="bg-[#0e0e11] border border-white/10 rounded-sm p-6 flex flex-col gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C8A96E] font-semibold">
                    ESPECIFICACIONES TÉCNICAS
                  </span>

                  <dl className="flex flex-col divide-y divide-white/5 font-mono text-xs">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                        <dt className="text-[#A0A0A5]">{spec.label}</dt>
                        <dd className="text-[#F4F1EA] font-semibold text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Authorized Material Fact Card */}
              {material && (
                <div className="bg-[#141419] border border-[#C8A96E]/30 rounded-sm p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8A96E] font-bold">
                      MATERIA PRIMA · {material.weight}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#C8A96E]" />
                  </div>

                  <h4 className="font-sans font-bold text-base text-[#F4F1EA]">
                    {material.name}
                  </h4>

                  <p className="text-xs text-[#A0A0A5] leading-relaxed">
                    {material.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 font-mono text-[10px] text-[#C8A96E]">
                    {material.points.map((pt) => (
                      <span key={pt} className="bg-black/50 px-2 py-0.5 border border-white/10 rounded-xs">
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Info & Interactive Configurator (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Product Info Header */}
              <div className="flex flex-col gap-2 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
                    {product.tag}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="font-mono text-xs text-[#A0A0A5]">
                    CÓDIGO: <strong className="text-[#F4F1EA]">{product.code}</strong>
                  </span>
                </div>

                <h1 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight leading-tight">
                  {product.title}
                </h1>

                {product.subtitle && (
                  <span className="font-mono text-xs text-[#A0A0A5] tracking-wider">
                    {product.subtitle}
                  </span>
                )}

                <p className="text-sm text-[#D0CFC9] leading-relaxed mt-2 font-light">
                  {product.description}
                </p>
              </div>

              {/* Central Interactive Configurator */}
              <ProductConfigurator product={product} />

            </div>

          </div>

          {/* RELATED PRODUCTS SECTION */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-1">
                    MÁS EN ESTA CATEGORÍA
                  </span>
                  <h3 className="font-sans font-bold text-2xl text-[#F4F1EA] tracking-tight">
                    Prendas Relacionadas
                  </h3>
                </div>

                <Link
                  href={`/catalogo/${categorySlug}`}
                  className="font-mono text-xs uppercase tracking-wider text-[#C8A96E] hover:underline"
                >
                  Ver toda la categoría →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}

        </div>

      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
