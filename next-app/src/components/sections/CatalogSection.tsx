'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Category Cards for the Interactive Horizontal Carousel
const CATEGORY_CARDS = [
  {
    id: 'cat-ropa',
    name: 'CAMISETAS & ROPA',
    shortName: 'ROPA',
    subtitle: 'Telas suaves, frescas y de excelente horma',
    image: '/assets/img-21.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Camisetas y tops',
  },
  {
    id: 'cat-bordados',
    name: 'POLOS & BORDADOS',
    shortName: 'BORDADOS',
    subtitle: 'Camisetas polo en tela piqué con logo bordado duradero',
    image: '/assets/img-4.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Bordado con relieve',
  },
  {
    id: 'cat-sublimacion',
    name: 'DEPORTIVAS & SUBLIMACIÓN',
    shortName: 'SUBLIMACIÓN',
    subtitle: 'Prendas deportivas frescas y estampados que no se borran',
    image: '/assets/telas/qatar/qatar-1.jpg',
    href: '/catalogo/sublimacion',
    itemCount: 'A todo color',
  },
  {
    id: 'cat-dotaciones',
    name: 'DOTACIONES & UNIFORMES',
    shortName: 'DOTACIONES',
    subtitle: 'Prendas resistentes para empresas y negocios',
    image: '/assets/img-22.jpg',
    href: '/catalogo/dotaciones',
    itemCount: 'Venta por docena y mayor',
  },
  {
    id: 'cat-accesorios',
    name: 'ACCESORIOS & GORRAS',
    shortName: 'ACCESORIOS',
    subtitle: 'Gorras bordadas o estampadas a tu gusto',
    image: '/assets/img-3.jpg',
    href: '/catalogo/accesorios',
    itemCount: 'Ajustables y cómodas',
  },
];

export const CatalogSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="w-full bg-white text-slate-900 py-14 sm:py-20 border-t border-slate-200 scroll-mt-20">
      
      {/* EXPLORAR POR CATEGORÍA */}
      <div className="wrap max-w-7xl mx-auto">
        
        {/* Header with Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Explorar por Categoría
            </h2>
            <p className="font-sans text-sm text-slate-600 font-normal mt-2 max-w-md">
              Selecciona una categoría para ver modelos disponibles, telas de confección y técnicas de personalización.
            </p>
          </div>

          {/* Controls & Direct Link to Full Catalog */}
          <div className="flex items-center gap-4">
            <Link
              href="/catalogo"
              className="hidden sm:inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider hover:underline font-bold text-[#0284C7]"
            >
              <span>Ver todo el catálogo</span>
              <span>→</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#00AFEF] hover:border-[#00AFEF] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title="Anterior"
                aria-label="Categoría anterior"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#00AFEF] hover:border-[#00AFEF] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title="Siguiente"
                aria-label="Siguiente categoría"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 -mx-2 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {CATEGORY_CARDS.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative w-[220px] sm:w-[250px] md:w-[270px] aspect-[4/5] shrink-0 snap-start rounded-xl overflow-hidden border border-slate-200 hover:border-[#00AFEF] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-end p-5 cursor-pointer bg-slate-900"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={`Prendas y confección textil en ${cat.name} - Variedades Isaías Valledupar`}
                fill
                sizes="(max-width: 768px) 220px, 270px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent group-hover:from-slate-950/98 transition-colors duration-300" />

              {/* Card Bottom Content */}
              <div className="relative z-10 flex flex-col justify-end w-full">
                <h3 className="font-sans font-bold text-base sm:text-lg text-white tracking-tight leading-tight group-hover:text-[#00AFEF] transition-colors drop-shadow-sm">
                  {cat.name}
                </h3>

                <p className="font-sans text-xs text-slate-200 leading-relaxed font-normal mt-1 mb-3 line-clamp-2 drop-shadow-sm">
                  {cat.subtitle}
                </p>

                {/* Direct Action */}
                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-sans">
                  <span className="uppercase tracking-wider text-[#00AFEF] group-hover:underline font-bold inline-flex items-center gap-1">
                    Ver colección →
                  </span>
                  <span className="text-slate-300 text-[10px] hidden sm:inline font-medium">
                    {cat.itemCount}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
};
