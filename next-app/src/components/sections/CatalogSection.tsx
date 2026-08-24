'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { CategoryId } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';

interface FeaturedCategoryItem {
  id: CategoryId;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

const FEATURED_CATEGORIES: FeaturedCategoryItem[] = [
  {
    id: 'ajustadas',
    title: 'Telas Ajustadas & Spandex',
    subtitle: 'COLECCIÓN SPANDEX 220G',
    description: 'Una selección de prendas de ajuste anatómico en tela piel de durazno 220g, caracterizada por su suavidad sedosa y caída fluida.',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    tag: 'SPANDEX 220 G/M²',
  },
  {
    id: 'cuello_tejido',
    title: 'Polos & Cuello Tejido',
    subtitle: 'BORDADO 3D COMPUTARIZADO',
    description: 'Polos de algodón piqué con acabados empresariales, pechera reinforced y bordados tridimensionales de alta densidad Wilcom.',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    tag: 'WILCOM 3D BORDADO',
  },
  {
    id: 'qatar',
    title: 'Poliéster Qatar & Deportivo',
    subtitle: 'SUBLIMACIÓN 4K EN 200°C',
    description: 'Prendas en tela microporosa de secado rápido con estampado por sublimación 4K curada a 200 °C directa en la fibra.',
    image: '/assets/telas/qatar/qatar-1.jpg',
    tag: 'SUBLIMACIÓN 4K DRYFIT',
  },
  {
    id: 'reflectivos_ninos',
    title: 'DTF Reflectivo & Línea Infantil',
    subtitle: 'CURADO TÉRMICO A 160°C',
    description: 'Estampados de alta definición con capacidad reflectiva térmica curados a 160 °C para alta visibilidad y durabilidad.',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    tag: 'DTF REFLECTIVO 160°C',
  },
];

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="wrap py-16 sm:py-24 border-t border-white/10">
      
      {/* ========================================================================= */}
      {/* STONE ISLAND EXACT COMPRAR POR CATEGORÍA SECTION */}
      {/* ========================================================================= */}
      <div className="mb-20">
        
        {/* Stone Island Header Bar (Three-Column Clean Monospace Bar) */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/20 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#F4F1EA]">
          {/* Left Title */}
          <h2 className="font-bold tracking-[0.22em] text-[#F4F1EA]">
            COMPRAR POR CATEGORÍA
          </h2>

          {/* Center Season Tag */}
          <span className="hidden md:inline text-[#A0A0A5] tracking-[0.25em]">
            VALLEDUPAR_ATELIER &apos;026
          </span>

          {/* Right Pause & Slider Controls */}
          <div className="flex items-center gap-4 text-[#A0A0A5]">
            <span className="hidden sm:inline text-[11px] hover:text-[#F4F1EA] cursor-pointer">
              || PAUSAR
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollSlider('left')}
                className="hover:text-[#C8A96E] transition-colors font-bold px-1"
                aria-label="Diapositiva anterior"
              >
                &lt;
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="hover:text-[#C8A96E] transition-colors font-bold px-1"
                aria-label="Siguiente diapositiva"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Stone Island Category Cards Track */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {FEATURED_CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveCategory(item.id);
                document.getElementById('grid-productos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative min-w-[290px] sm:min-w-[380px] md:min-w-[440px] h-[520px] sm:h-[580px] bg-[#0e0e11] overflow-hidden flex flex-col justify-end cursor-pointer select-none transition-transform duration-500"
            >
              {/* Full Bleed Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 290px, 440px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Stone Island Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/40 transition-colors" />

              {/* Top Spec Tag */}
              <div className="absolute top-5 left-5 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30">
                {item.tag}
              </div>

              {/* Overlaid Category Headline matching Stone Island screenshot */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-3">
                <span className="font-mono text-[10px] text-[#C8A96E] uppercase tracking-[0.22em] font-semibold">
                  {item.subtitle}
                </span>
                
                <h3 className="font-mono font-bold text-2xl sm:text-3xl text-[#F4F1EA] uppercase tracking-wider group-hover:text-[#C8A96E] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-[#D0CFC9] leading-relaxed line-clamp-2 max-w-md font-light opacity-90">
                  {item.description}
                </p>

                <div className="pt-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  <span>COMPRAR AHORA</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MAIN CATALOG PRODUCT GRID (SEPARATED PRODUCT SECTION) */}
      {/* ========================================================================= */}
      <div id="grid-productos" className="pt-12 border-t border-white/10">
        
        {/* Product Catalog Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
              PRENDAS & PRODUCTOS EN INVENTARIO
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-bold text-[#F4F1EA] tracking-tight uppercase">
              CATÁLOGO DE PRODUCTOS
            </h3>
          </div>

          <div className="font-mono text-xs text-[#A0A0A5] uppercase tracking-widest bg-[#0e0e11] px-4 py-2 border border-white/10 rounded-sm self-start sm:self-auto">
            MOSTRANDO <span className="text-[#C8A96E] font-bold">{filteredProducts.length}</span> PRENDAS
          </div>
        </div>

        {/* Active Category Reset Banner */}
        {activeCategory !== 'todos' && (
          <div className="flex items-center justify-between gap-4 mb-6 font-mono text-xs text-[#A0A0A5] uppercase tracking-widest bg-[#0e0e11] px-5 py-3 border border-[#C8A96E]/40 rounded-sm">
            <span>FILTRADO POR CATEGORÍA: <strong className="text-[#C8A96E]">{activeCategory.toUpperCase()}</strong></span>
            <button
              onClick={() => setActiveCategory('todos')}
              className="text-[#F4F1EA] hover:text-[#C8A96E] underline cursor-pointer"
            >
              VER TODAS LAS PRENDAS (RESET)
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

    </section>
  );
};


