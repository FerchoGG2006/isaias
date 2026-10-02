import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { getMaterialById } from '@/data/materials';
import { ProductGallery } from '@/components/catalog/ProductGallery';
import { ProductConfigurator } from '@/components/configurator/ProductConfigurator';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';
import { TrustGuaranteeCard } from '@/components/ui/TrustGuaranteeCard';

import { getBusiness } from '@/data/businesses';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const business = getBusiness(product.businessId);

  const primaryImg = product.featuredImage || product.images?.[0] || '/assets/logo-isaias-3.png';

  return {
    title: `${product.title} | ${business.name} · Valledupar`,
    description: product.description,
    openGraph: {
      title: `${product.title} — ${business.name}`,
      description: product.description,
      images: [
        {
          url: primaryImg,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      siteName: business.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [primaryImg],
    },
  };
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

  const business = getBusiness(product.businessId);
  const primaryImg = product.featuredImage || product.images?.[0] || '/assets/logo-isaias-3.png';

  // Schema.org Product Rich Snippet
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: (product.images.length > 0 ? product.images : [primaryImg]).map((img) =>
      img.startsWith('http') ? img : `https://variedadesisaias.com${img}`
    ),
    description: product.description,
    sku: product.code || product.id,
    mpn: product.code || product.id,
    brand: {
      '@type': 'Brand',
      name: business.name,
    },
    category: category?.name || 'Prendas y Personalización',
    offers: {
      '@type': 'Offer',
      url: `https://variedadesisaias.com/catalogo/${categorySlug}/${productSlug}`,
      priceCurrency: 'COP',
      price: product.pricing.basePrice || 0,
      priceValidUntil: '2026-12-31',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: business.name,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white text-slate-900 pt-6 sm:pt-8 pb-28 lg:pb-16">
        
        {/* Breadcrumbs */}
        <div className="wrap mb-8">
          <Breadcrumbs
            items={[
              { label: 'Catálogo', href: '/catalogo' },
              ...(category ? [{ label: category.name, href: `/catalogo/${category.slug}` }] : []),
              { label: product.title },
            ]}
          />
        </div>

        {/* Product Main Container */}
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Media Gallery & Technical Specs (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <ProductGallery
                images={product.images}
                title={product.title}
              />

              {/* Technical Specifications Table */}
              {product.specifications.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#0284C7] font-bold">
                    Detalles y Cuidado de la Prenda
                  </span>

                  <dl className="flex flex-col divide-y divide-slate-100 font-sans text-xs">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                        <dt className="text-slate-600 font-medium">{spec.label}</dt>
                        <dd className="text-slate-900 font-bold text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Authorized Material Fact Card */}
              {material && (
                <div className="bg-cyan-50/40 border border-[#00AFEF]/30 rounded-xl p-6 flex flex-col gap-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#0284C7] font-bold">
                      Tela & Composición
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#00AFEF]" />
                  </div>

                  <h4 className="font-sans font-bold text-base text-slate-900">
                    {material.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {material.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/80 font-sans text-xs">
                    {material.points.map((pt) => (
                      <span key={pt} className="bg-white px-2.5 py-1 border border-slate-200 rounded-lg text-slate-700 font-medium shadow-xs">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Info & Interactive Configurator (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Product Info Header */}
              <div className="flex flex-col gap-2 pb-6 border-b border-slate-200">
                <h1 className="font-sans font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  {product.title}
                </h1>

                {/* Precio destacado y visible de inmediato para clientes */}
                <div className="flex flex-wrap items-baseline gap-3 pt-1">
                  {product.pricing.type === 'fixed' && product.pricing.basePrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono font-bold text-2xl sm:text-3xl text-[#0284C7]">
                        ${product.pricing.basePrice.toLocaleString('es-CO')} COP
                      </span>
                      <span className="text-xs text-slate-500 font-sans">
                        / unidad
                      </span>
                    </div>
                  ) : (
                    <span className="font-mono text-base text-[#0284C7] font-bold">
                      Precio de taller bajo cotización
                    </span>
                  )}
                </div>

                {product.subtitle && (
                  <span className="font-mono text-xs text-slate-500 tracking-wider">
                    {product.subtitle}
                  </span>
                )}

                <p className="text-sm text-slate-700 leading-relaxed mt-1 font-normal">
                  {product.description}
                </p>
              </div>

              {/* Central Interactive Configurator */}
              <ProductConfigurator product={product} />

              {/* Bloque de Garantía y Confianza en 3 Pasos */}
              <TrustGuaranteeCard className="mt-2" />

            </div>

          </div>

          {/* RELATED PRODUCTS SECTION */}
          {relatedProducts.length > 0 && (
            <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                    Prendas Relacionadas
                  </h3>
                </div>

                <Link
                  href={`/catalogo/${categorySlug}`}
                  className="font-mono text-xs uppercase tracking-wider text-[#0284C7] hover:underline font-bold"
                >
                  Ver toda la categoría →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((relProduct) => (
                  <EditorialProductItem key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}

        </div>

      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
