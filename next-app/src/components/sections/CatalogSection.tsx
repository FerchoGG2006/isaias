'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CategoryId } from '@/types';

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
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-play interval for Stone Island category slider
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        // Reset to start if reached near the end
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="catalogo" className="wrap py-16 sm:py-24 border-t border-white/10">
      
      {/* ========================================================================= */}
      {/* STONE ISLAND EXACT COMPRAR POR CATEGORÍA SECTION */}
      {/* ========================================================================= */}
      <div className="mb-8">
        
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
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="hidden sm:inline text-[11px] hover:text-[#F4F1EA] cursor-pointer transition-colors font-semibold"
            >
              {isPaused ? '▶ REANUDAR' : '|| PAUSAR'}
            </button>
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

        {/* Stone Island Category Cards Track - 0 GAP between columns */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex items-stretch gap-0 overflow-x-auto pb-4 scrollbar-none scroll-smooth"
        >
          {FEATURED_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="group relative min-w-[290px] sm:min-w-[380px] md:min-w-[440px] h-[520px] sm:h-[580px] bg-[#0e0e11] border-r border-white/10 overflow-hidden flex flex-col justify-end cursor-pointer select-none transition-transform duration-500"
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

    </section>
  );
};


