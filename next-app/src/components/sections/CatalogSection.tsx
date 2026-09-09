'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useQuote } from '@/context/QuoteContext';

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
    tag: 'TELA FRESCA',
  },
  {
    id: 'cat-sublimacion',
    name: 'MUGS & SUBLIMACIÓN',
    shortName: 'SUBLIMACIÓN',
    subtitle: 'Pocillos, termos y detalles que no se borran',
    image: '/assets/mug.png',
    href: '/catalogo/sublimacion',
    itemCount: 'Regalos y empresas',
    tag: 'COLOR PERMANENTE',
  },
  {
    id: 'cat-bordados',
    name: 'POLOS & BORDADOS',
    shortName: 'BORDADOS',
    subtitle: 'Camisas polo con bordado fino y elegante',
    image: '/assets/img-22.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Puntada de precisión',
    tag: 'ACABADO ELEGANTE',
  },
  {
    id: 'cat-dotaciones',
    name: 'DOTACIONES & UNIFORMES',
    shortName: 'DOTACIONES',
    subtitle: 'Uniformes resistentes para empresas y negocios',
    image: '/assets/img-4.jpg',
    href: '/catalogo/dotaciones',
    itemCount: 'Venta por docena',
    tag: 'ALTA DURABILIDAD',
  },
  {
    id: 'cat-accesorios',
    name: 'ACCESORIOS & GORRAS',
    shortName: 'ACCESORIOS',
    subtitle: 'Gorras bordadas o estampadas a tu gusto',
    image: '/assets/img-3.jpg',
    href: '/catalogo/accesorios',
    itemCount: 'Ajustables y cómodas',
    tag: 'PERSONALIZABLE',
  },
];

const PALACIO_CATEGORY_CARDS = [
  {
    id: 'cat-sublimacion',
    name: 'MUGS & POCILLOS',
    shortName: 'MUGS',
    subtitle: 'Cerámicos, mágicos termosensibles y personalizados',
    image: '/assets/mug.png',
    href: '/catalogo/sublimacion',
    itemCount: 'Estampado 4K',
    tag: 'COLOR PERMANENTE',
  },
  {
    id: 'cat-termos',
    name: 'TERMOS & HIDRATACIÓN',
    shortName: 'TERMOS',
    subtitle: 'Botellas de aluminio herméticas con mosquetón',
    image: '/assets/bottle.png',
    href: '/catalogo/sublimacion',
    itemCount: 'Deportivos 600ml',
    tag: 'ALUMINIO ANODIZADO',
  },
  {
    id: 'cat-deportiva',
    name: 'INDUMENTARIA DEPORTIVA',
    shortName: 'FULL PRINT',
    subtitle: 'Camisetas deportivas con sublimación total 100%',
    image: '/assets/telas/qatar/qatar-1.jpg',
    href: '/catalogo/ropa',
    itemCount: 'Ciclismo & Fútbol',
    tag: 'SUBLIMACIÓN TOTAL',
  },
  {
    id: 'cat-gorras',
    name: 'GORRAS TRUCKER',
    shortName: 'GORRAS',
    subtitle: 'Frente blanco sublimable y visera curva con broche',
    image: '/assets/img-3.jpg',
    href: '/catalogo/accesorios',
    itemCount: 'Ajustables',
    tag: 'PERSONALIZABLES',
  },
  {
    id: 'cat-merch',
    name: 'MERCHANDISING CORPORATIVO',
    shortName: 'EMPRESAS',
    subtitle: 'Kits y regalos empresariales para eventos y marcas',
    image: '/assets/img-4.jpg',
    href: '/catalogo/dotaciones',
    itemCount: 'Precios por volumen',
    tag: 'ALTA FIDELIDAD',
  },
];

export const CatalogSection: React.FC = () => {
  const { businessId } = useQuote();
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPalacio = businessId === 'palacio';
  const cards = isPalacio ? PALACIO_CATEGORY_CARDS : CATEGORY_CARDS;

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="w-full bg-[#070708] text-[#F4F1EA] py-14 sm:py-20 border-t border-white/10 scroll-mt-20">
      
      {/* EXPLORAR POR CATEGORÍA */}
      <div className="wrap max-w-7xl mx-auto">
        
        {/* Header with Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F1EA] tracking-tight">
              {isPalacio ? 'Colección El Palacio de la Sublimación' : 'Explorar por Categoría'}
            </h2>
            <p className="font-sans text-sm text-[#8A8A92] font-light mt-2 max-w-md">
              {isPalacio
                ? 'Mugs, botellas térmicas, uniformes deportivos full print y artículos promocionales con impresión fotográfica que nunca se borra.'
                : 'Selecciona una categoría para ver modelos, telas y opciones de personalización.'}
            </p>
          </div>

          {/* Controls & Direct Link to Full Catalog */}
          <div className="flex items-center gap-4">
            <Link
              href="/catalogo"
              className="hidden sm:inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#C8A96E] hover:underline font-semibold"
            >
              <span>Ver todo el catálogo</span>
              <span>→</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full bg-[#141419] border border-white/15 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] flex items-center justify-center transition-all shadow-md cursor-pointer"
                title="Anterior"
                aria-label="Categoría anterior"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full bg-[#141419] border border-white/15 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] flex items-center justify-center transition-all shadow-md cursor-pointer"
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
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 -mx-2 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {cards.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[3/4] shrink-0 snap-start rounded-xs overflow-hidden border border-white/10 hover:border-[#C8A96E] transition-all duration-500 shadow-xl flex flex-col justify-end p-6 sm:p-7 cursor-pointer bg-[#0e0e11]"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors duration-300" />


              {/* Card Bottom Content */}
              <div className="relative z-10 flex flex-col justify-end w-full">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight leading-tight group-hover:text-[#C8A96E] transition-colors">
                  {cat.name}
                </h3>

                <p className="font-sans text-xs text-[#D0CFC9] leading-relaxed font-light mt-1.5 mb-4">
                  {cat.subtitle}
                </p>

                {/* Direct Action */}
                <div className="pt-2 border-t border-white/10">
                  <span className="font-sans text-xs uppercase tracking-wider bg-[#C8A96E] group-hover:bg-[#B8985D] text-[#0C0D10] font-bold px-4 py-2.5 rounded-xs transition-colors block text-center shadow-md">
                    Ver prendas →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Clean Direct Access to Full Catalog */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-[#F4F1EA] tracking-tight">
              ¿Buscas un producto o modelo en específico?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] font-light mt-1">
              Explora nuestro catálogo completo con filtros por prenda, colores y tallas.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="font-sans text-xs uppercase tracking-[0.16em] bg-[#C8A96E] hover:bg-[#B8985D] text-[#0C0D10] font-bold px-7 py-3.5 rounded-xs shadow-lg transition-all self-start sm:self-auto shrink-0 text-center"
          >
            Ver Catálogo Completo →
          </Link>
        </div>

      </div>

    </section>
  );
};
