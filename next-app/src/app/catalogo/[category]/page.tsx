import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
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

const CATEGORY_TECH_HIGHLIGHTS: Record<string, string[]> = {
  ropa: [
    'Piel de durazno spandex — 220 g',
    'DTF curado a 160 °C',
    'Bordado Wilcom 3D',
    'Sublimación 4K 200 °C',
  ],
  accesorios: [
    'Bordado Wilcom 3D en relieve',
    'Visera con 6 pespuntes reforzados',
    'Malla transpirable de alto flujo',
  ],
  sublimacion: [
    'Sublimación fotográfica 4K a 200 °C',
    'Cerámica Grado A microondas & lavavajillas',
    'Aluminio anodizado grado alimentario',
  ],
  dotaciones: [
    'Algodón piqué heavyweight 230 g/m²',
    'Tratamiento antipilling de alto tráfico',
    'Bordado institucional matricial',
  ],
  merchandising: [
    'Termofijación de alta fidelidad',
    'Producción ágil por volumen',
    'Despacho desde Valledupar',
  ],
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(categorySlug);
  const techHighlights = CATEGORY_TECH_HIGHLIGHTS[categorySlug] || [
    'Confección bajo pedido',
    'Atelier Valledupar',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] pt-12 pb-32">
        
        {/* 1. ENCABEZADO EDITORIAL DE LA SUBSECCIÓN */}
        <section className="wrap mb-12 sm:mb-16">
          
          {/* Breadcrumb refinado */}
          <div className="flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.25em] text-[#8A8A92] mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <Link href="/catalogo" className="hover:text-[#F4F1EA] transition-colors">
                Catálogo
              </Link>
              <span>/</span>
              <span className="text-[#C8A96E]">{category.name}</span>
            </div>
            <Link
              href="/catalogo"
              className="hover:text-[#F4F1EA] transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>←</span>
              <span>Ver Catálogo Completo</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
                  LÍNEA · {category.tag}
                </span>
                <span className="font-serif italic text-sm text-[#8A8A92]">Atelier 2026</span>
              </div>

              <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tight leading-[1.05]">
                {category.name}
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#9E9EA4] max-w-2xl leading-relaxed mt-4 font-light">
                {category.description}
              </p>

              {/* Badges de especificaciones técnicas autorizadas del taller */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {techHighlights.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14151C] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#C8A96E]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8A96E]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Contador de piezas en la subsección */}
            <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs uppercase tracking-[0.2em] text-[#8A8A92] shrink-0">
              <span className="text-[#C8A96E] font-medium font-mono">
                [ {products.length} {products.length === 1 ? 'PIEZA' : 'PIEZAS'} ]
              </span>
              <span className="text-[10px] text-[#8A8A92]/70 mt-0.5">
                Personalización bajo demanda
              </span>
            </div>
          </div>

          {/* Selector rápido de subsecciones hermanas */}
          <div className="pt-8 flex items-center gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-none text-xs uppercase font-sans tracking-[0.18em]">
            <Link
              href="/catalogo"
              className="text-[#8A8A92] hover:text-[#F4F1EA] whitespace-nowrap transition-colors py-2"
            >
              TODAS LAS LÍNEAS
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
                Toda la línea {category.name} se confecciona y personaliza con maquinaria Wilcom computarizada y prensas térmicas de precisión.
              </p>
            </div>

            <div className="flex items-center gap-6 uppercase tracking-[0.16em]">
              <Link
                href="/personaliza"
                className="text-[#F4F1EA] hover:text-[#C8A96E] transition-colors"
              >
                Configurador General →
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
      <AdminModal />
    </>
  );
}
