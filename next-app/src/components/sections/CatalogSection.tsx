'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/domain';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';
import { ProductQuickViewModal } from '@/components/catalog/ProductQuickViewModal';

// Category Cards for the Interactive Horizontal Carousel
const CATEGORY_CARDS = [
  {
    id: 'cat-ropa',
    categoryTarget: 'ropa',
    name: 'ROPA & CAMISETAS',
    shortName: 'ROPA',
    subtitle: 'Siluetas entalladas & Piel de Durazno 220g',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    href: '/catalogo/ropa',
    itemCount: '12 siluetas registradas',
    tag: 'SPANDEX 220 G/M²',
  },
  {
    id: 'cat-sublimacion',
    categoryTarget: 'sublimacion',
    name: 'SUBLIMACIÓN 4K',
    shortName: 'SUBLIMACIÓN',
    subtitle: 'Mugs, Termos de Aluminio & Full Print',
    image: '/assets/telas/qatar/qatar-1.jpg',
    href: '/catalogo/sublimacion',
    itemCount: '8 artículos disponibles',
    tag: 'CURADO A 200 °C',
  },
  {
    id: 'cat-bordados',
    categoryTarget: 'ropa',
    name: 'BORDADOS WILCOM 3D',
    shortName: 'BORDADOS',
    subtitle: 'Polos Algodón Piqué 230g & Alta Densidad',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Matricial Wilcom',
    tag: 'WILCOM MULTICABEZAL',
  },
  {
    id: 'cat-dotaciones',
    categoryTarget: 'dotaciones',
    name: 'DOTACIONES CORPORATIVAS',
    shortName: 'DOTACIONES',
    subtitle: 'Uniformes Empresariales & Equipos',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
    href: '/catalogo/dotaciones',
    itemCount: 'Lafayette & Piqué',
    tag: 'SOLIDEZ INDUSTRIAL',
  },
  {
    id: 'cat-accesorios',
    categoryTarget: 'accesorios',
    name: 'ACCESORIOS & GORRAS',
    shortName: 'ACCESORIOS',
    subtitle: 'Gorras Trucker Snapback & Merch',
    image: '/assets/img-31.jpg',
    href: '/catalogo/accesorios',
    itemCount: 'Gorras & Merchandising',
    tag: 'SNAPBACK AJUSTABLE',
  },
  {
    id: 'cat-materiales',
    categoryTarget: 'todos',
    name: 'TELAS & MATERIALES',
    shortName: 'MATERIALES',
    subtitle: 'Materia Prima Inspeccionada en Taller',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    href: '/#materiales',
    itemCount: 'Taller Valledupar',
    tag: 'INSPECCIÓN 10X',
  },
];

// 3 Large Feature Collections with translated Spanish texts and functional colored CTAs
const EDITORIAL_COLLECTIONS = [
  {
    id: 'new-arrivals',
    title: 'Novedades & Siluetas',
    subtitle: 'Piel de Durazno Spandex 220g',
    buttonText: 'VER ÚLTIMAS SILUETAS',
    href: '/catalogo/ropa',
    categoryTarget: 'ropa',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    overlayBg: 'from-black/80 via-black/40 to-black/70',
    btnClass: 'bg-[#F4F1EA] text-[#070708] hover:bg-[#C8A96E] hover:text-[#070708]',
  },
  {
    id: 'best-sellers',
    title: 'Los Más Vendidos',
    subtitle: 'Polos Algodón Piqué & Bordado Wilcom',
    buttonText: 'EXPLORAR FAVORITOS',
    href: '/catalogo',
    categoryTarget: 'todos',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    overlayBg: 'from-amber-950/80 via-black/50 to-black/80',
    btnClass: 'bg-[#C8A96E] text-[#070708] hover:bg-[#E5C282] hover:scale-105',
  },
  {
    id: 'special-collections',
    title: 'Colecciones & Dotaciones',
    subtitle: 'Dotaciones Empresariales & Sublimación 4K',
    buttonText: 'COTIZAR SERVICIOS',
    href: '/servicios',
    categoryTarget: 'dotaciones',
    image: '/assets/telas/qatar/qatar-2.jpg',
    overlayBg: 'from-red-950/80 via-black/50 to-black/80',
    btnClass: 'bg-black/60 border border-[#C8A96E] text-[#F4F1EA] hover:bg-[#C8A96E] hover:text-[#070708]',
  },
];

const EDITORIAL_FILTERS = [
  { id: 'todos', label: 'TODAS' },
  { id: 'ropa', label: 'ROPA' },
  { id: 'accesorios', label: 'ACCESORIOS' },
  { id: 'sublimacion', label: 'SUBLIMACIÓN' },
  { id: 'dotaciones', label: 'DOTACIONES' },
];

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (activeCategory !== 'todos') {
      list = list.filter(
        (p) => p.categorySlug === activeCategory || p.categoryId === activeCategory
      );
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          (p.materialName && p.materialName.toLowerCase().includes(q))
      );
    }

    return list.slice(0, 6);
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (categoryTarget: string) => {
    setActiveCategory(categoryTarget);
    const target = document.getElementById('lookbook-grid');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="w-full bg-[#070708] text-[#F4F1EA] py-20 sm:py-28 border-t border-white/10 scroll-mt-20">
      
      {/* SECTION 1: EXPLORAR POR CATEGORÍA (INTERACTIVE HORIZONTAL CAROUSEL) */}
      <div className="wrap max-w-7xl mx-auto mb-24 sm:mb-32">
        
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A96E] font-semibold block mb-2">
              COLECCIÓN ATELIER 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F4F1EA] tracking-tight">
              Explorar por Categoría
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] font-light mt-2 max-w-md">
              Desliza horizontalmente para explorar las categorías del catálogo y filtrar las prendas.
            </p>
          </div>

          {/* Carousel Scroll Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              className="w-11 h-11 rounded-full bg-[#141419] border border-white/15 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
              title="Anterior"
              aria-label="Categoría anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              className="w-11 h-11 rounded-full bg-[#141419] border border-white/15 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
              title="Siguiente"
              aria-label="Siguiente categoría"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-2 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {CATEGORY_CARDS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.categoryTarget)}
              className="group relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[3/4] shrink-0 snap-start rounded-xs overflow-hidden border border-white/10 hover:border-[#C8A96E] transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 sm:p-8 cursor-pointer bg-[#0e0e11]"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100 contrast-[1.05]"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-500" />

              {/* Card Top Tag */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A96E] bg-black/80 backdrop-blur-md px-3 py-1 border border-[#C8A96E]/40 rounded-xs">
                  {cat.tag}
                </span>
                <span className="font-mono text-[10px] text-[#F4F1EA] bg-black/60 px-2.5 py-0.5 rounded-xs border border-white/10">
                  {cat.itemCount}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 flex flex-col justify-end w-full">
                <span className="font-mono text-[10px] text-[#C8A96E] uppercase tracking-widest font-semibold block mb-1">
                  {cat.shortName}
                </span>

                <h3 className="font-sans font-extrabold text-2xl text-[#F4F1EA] tracking-tight leading-tight group-hover:text-[#C8A96E] transition-colors">
                  {cat.name}
                </h3>

                <p className="font-sans text-xs text-[#D0CFC9] leading-relaxed font-light mt-1 mb-4">
                  {cat.subtitle}
                </p>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(cat.categoryTarget);
                    }}
                    className="font-mono text-[11px] uppercase tracking-widest bg-[#C8A96E] hover:bg-[#E5C282] text-[#070708] font-bold px-4 py-2.5 rounded-xs shadow-lg transition-colors flex-1 text-center"
                  >
                    Ver Piezas ↓
                  </button>

                  <Link
                    href={cat.href}
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[11px] text-[#F4F1EA] hover:text-[#C8A96E] bg-black/50 hover:bg-black/80 border border-white/15 px-3 py-2.5 rounded-xs transition-colors"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: 3 LARGE EDITORIAL FEATURED CARDS (SPANISH & WORKING COLORED BUTTONS) */}
      <div className="wrap max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EDITORIAL_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="group relative min-h-[460px] sm:min-h-[520px] w-full rounded-xs overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center justify-end p-8 text-center"
            >
              {/* Background Portrait Image */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-[1.05]"
              />

              {/* Dark Vignetting Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${col.overlayBg} transition-opacity duration-500`} />

              {/* Centered Editorial Overlay Content */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full my-auto text-center px-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-2 drop-shadow-md">
                  {col.subtitle}
                </span>

                <h3 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight mb-6 drop-shadow-lg leading-tight">
                  {col.title}
                </h3>

                {/* Fully Functional Colored CTA Button */}
                <Link
                  href={col.href}
                  onClick={() => {
                    if (col.categoryTarget !== 'todos') {
                      setActiveCategory(col.categoryTarget);
                    }
                  }}
                  className={`inline-block font-sans font-bold text-xs uppercase tracking-[0.2em] px-7 py-4 rounded-xs transition-all duration-300 shadow-2xl cursor-pointer ${col.btnClass}`}
                >
                  {col.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: EDITORIAL LOOKBOOK CATALOG SHOWCASE WITH FILTERS */}
      <div id="lookbook-grid" className="wrap max-w-7xl mx-auto pt-16 border-t border-white/10 scroll-mt-24">
        
        {/* Header Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
                ATELIER · CATÁLOGO LOOKBOOK
              </span>
              <span className="font-serif italic text-sm text-[#8A8A92]">2026</span>
            </div>

            <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight leading-[1.05]">
              Piezas en Confección.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-3 max-w-xl">
              Siluetas y artículos de alta calidad listos para personalizar con estampación DTF o bordado Wilcom.
            </p>
          </div>

          <div className="flex flex-col lg:items-end text-left lg:text-right font-sans text-xs uppercase tracking-[0.2em] text-[#8A8A92] shrink-0">
            <span className="text-[#C8A96E] font-medium">
              [ {filteredProducts.length} DE {PRODUCTS.length} PIEZAS REGISTRADAS ]
            </span>
            <Link
              href="/catalogo"
              className="text-[11px] text-[#F4F1EA] hover:text-[#C8A96E] transition-colors mt-2 underline underline-offset-4 decoration-[#C8A96E]/50"
            >
              Ver Colección Completa →
            </Link>
          </div>
        </div>

        {/* Minimalist Typographic Filters & Search */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <nav
            className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-2 scrollbar-none text-xs uppercase font-sans tracking-[0.2em]"
            aria-label="Filtros de catálogo"
          >
            {EDITORIAL_FILTERS.map((f) => {
              const isActive = activeCategory === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveCategory(f.id)}
                  className={`relative py-2 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#F4F1EA] font-semibold'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>{f.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A96E]" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar prenda o material..."
              className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A96E] text-[#F4F1EA] pl-6 pr-6 py-1.5 font-sans text-xs outline-none transition-colors placeholder:text-[#8A8A92]/50"
            />
            <svg
              className="w-3.5 h-3.5 text-[#8A8A92] absolute left-0 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#8A8A92] hover:text-white text-xs cursor-pointer font-sans"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Editorial Masonry Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center border-t border-b border-white/10 flex flex-col items-center justify-center">
            <span className="font-serif italic text-2xl text-[#8A8A92] mb-2">
              No se encontraron prendas para la categoría seleccionada
            </span>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#8A8A92]/70 mb-6 max-w-sm">
              Prueba con otro término o limpia los filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] hover:underline cursor-pointer"
            >
              Ver toda la selección ↺
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-16 items-start">
            {filteredProducts.map((product, idx) => {
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
                    onQuickView={(p) => setSelectedProduct(p)}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Link */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs uppercase tracking-[0.18em]">
          <span className="text-[#8A8A92]">
            Producción bajo demanda · Valledupar Atelier
          </span>
          <Link
            href="/catalogo"
            className="text-[#C8A96E] hover:underline transition-colors flex items-center gap-2"
          >
            <span>Explorar la colección completa ({PRODUCTS.length} piezas)</span>
            <span>→</span>
          </Link>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
};
