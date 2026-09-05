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
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Camisetas y tops',
    tag: 'TELA FRESCA',
  },
  {
    id: 'cat-sublimacion',
    name: 'MUGS & SUBLIMACIÓN',
    shortName: 'SUBLIMACIÓN',
    subtitle: 'Pocillos, termos y detalles que no se borran',
    image: '/assets/telas/qatar/qatar-1.jpg',
    href: '/catalogo/sublimacion',
    itemCount: 'Regalos y empresas',
    tag: 'COLOR PERMANENTE',
  },
  {
    id: 'cat-bordados',
    name: 'POLOS & BORDADOS',
    shortName: 'BORDADOS',
    subtitle: 'Camisas polo con bordado fino y elegante',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Puntada de precisión',
    tag: 'ACABADO ELEGANTE',
  },
  {
    id: 'cat-dotaciones',
    name: 'DOTACIONES & UNIFORMES',
    shortName: 'DOTACIONES',
    subtitle: 'Uniformes resistentes para empresas y negocios',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
    href: '/catalogo/dotaciones',
    itemCount: 'Venta por docena',
    tag: 'ALTA DURABILIDAD',
  },
  {
    id: 'cat-accesorios',
    name: 'ACCESORIOS & GORRAS',
    shortName: 'ACCESORIOS',
    subtitle: 'Gorras bordadas o estampadas a tu gusto',
    image: '/assets/img-31.jpg',
    href: '/catalogo/accesorios',
    itemCount: 'Ajustables y cómodas',
    tag: 'PERSONALIZABLE',
  },
];

// 3 Large Feature Collections with direct routes
const EDITORIAL_COLLECTIONS = [
  {
    id: 'new-arrivals',
    title: 'Novedades & Siluetas',
    subtitle: 'Prendas suaves listas para estampar',
    buttonText: 'VER PRENDAS',
    href: '/catalogo/ropa',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    overlayBg: 'from-black/80 via-black/40 to-black/70',
    btnClass: 'bg-[#F4F1EA] text-[#070708] hover:bg-[#C8A96E] hover:text-[#070708]',
  },
  {
    id: 'best-sellers',
    title: 'Los Más Vendidos',
    subtitle: 'Polos en algodón con bordado fino',
    buttonText: 'EXPLORAR FAVORITOS',
    href: '/catalogo',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    overlayBg: 'from-amber-950/80 via-black/50 to-black/80',
    btnClass: 'bg-[#C8A96E] text-[#070708] hover:bg-[#E5C282] hover:scale-105',
  },
  {
    id: 'special-collections',
    title: 'Colecciones & Dotaciones',
    subtitle: 'Uniformes y dotaciones empresariales',
    buttonText: 'COTIZAR SERVICIOS',
    href: '/servicios',
    image: '/assets/telas/qatar/qatar-2.jpg',
    overlayBg: 'from-red-950/80 via-black/50 to-black/80',
    btnClass: 'bg-black/60 border border-[#C8A96E] text-[#F4F1EA] hover:bg-[#C8A96E] hover:text-[#070708]',
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
    <section id="catalogo" className="w-full bg-[#070708] text-[#F4F1EA] py-10 sm:py-14 border-t border-white/10 scroll-mt-20">
      
      {/* SECTION 1: EXPLORAR POR CATEGORÍA (INTERACTIVE HORIZONTAL CAROUSEL) */}
      <div className="wrap max-w-7xl mx-auto mb-10 sm:mb-14">
        
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] font-semibold block mb-2">
              VARIEDADES ISAÍAS · LÍNEAS DE PRODUCCIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F4F1EA] tracking-tight">
              Explorar por Categoría
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] font-light mt-2 max-w-md">
              Desliza horizontalmente para conocer las líneas de producción y acceder a cada catálogo.
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
            <Link
              key={cat.id}
              href={cat.href}
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

                {/* Direct Action */}
                <div className="pt-2 border-t border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-widest bg-[#C8A96E] group-hover:bg-[#E5C282] text-[#070708] font-bold px-4 py-2.5 rounded-xs shadow-lg transition-colors block text-center">
                    Explorar Categoría →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 2: 3 LARGE EDITORIAL FEATURED CARDS */}
      <div className="wrap max-w-7xl mx-auto mb-10 sm:mb-14">
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

                {/* Direct Link CTA Button */}
                <Link
                  href={col.href}
                  className={`inline-block font-sans font-bold text-xs uppercase tracking-[0.2em] px-7 py-4 rounded-xs transition-all duration-300 shadow-2xl cursor-pointer ${col.btnClass}`}
                >
                  {col.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: DELEGATED FULL CATALOG GATEWAY */}
      <div className="wrap max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C8A96E] font-semibold">
              CATÁLOGO DIGITAL DEDICADO
            </span>
            <span className="font-mono text-xs text-[#8A8A92]">[ TODAS LAS SILUETAS & FICHAS ]</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
            Explora la Colección Completa en el Catálogo.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#8A8A92] font-light max-w-xl leading-relaxed">
            Accede a todas las siluetas registradas, especificaciones de telas (piel de durazno 220g, piqué y dry-fit), distribución de tallas de S a XXL y cotiza en tiempo real.
          </p>
        </div>

        <Link
          href="/catalogo"
          className="font-mono text-xs uppercase tracking-[0.25em] bg-[#C8A96E] hover:bg-[#E5C282] text-[#070708] font-bold px-8 py-4.5 rounded-xs shadow-2xl transition-all duration-300 self-start md:self-auto shrink-0 text-center"
        >
          Ver Catálogo Completo →
        </Link>
      </div>

    </section>
  );
};
