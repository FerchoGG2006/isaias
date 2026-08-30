'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface EditorialProject {
  id: string;
  num: string;
  title: string;
  technique: string;
  material: string;
  location: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}

const EDITORIAL_PROJECTS: EditorialProject[] = [
  {
    id: 'proj-1',
    num: 'WORK / 01',
    title: 'Camiseta Spandex Negra',
    technique: 'DTF Reflectivo 160°C',
    material: 'Piel de Durazno 220g',
    location: 'Valledupar · 2026',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    aspect: 'tall',
  },
  {
    id: 'proj-2',
    num: 'WORK / 02',
    title: 'Polo Blanco Cuello Tejido',
    technique: 'Bordado Computarizado 3D Wilcom',
    material: 'Algodón Piqué Pesado',
    location: 'Estudio Textil Isaías',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
    aspect: 'wide',
  },
  {
    id: 'proj-3',
    num: 'WORK / 03',
    title: 'Estampado Reflectivo Infantil',
    technique: 'DTF Alta Visibilidad',
    material: 'Fijación Térmica Curada',
    location: 'Producción Local',
    image: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg',
    aspect: 'tall',
  },
  {
    id: 'proj-4',
    num: 'WORK / 04',
    title: 'Textura Qatar Transpirable',
    technique: 'Sublimación 4K 200°C',
    material: 'Poliéster Microfibra Deportiva',
    location: 'Maquila Valledupar',
    image: '/assets/telas/qatar/qatar-3.jpg',
    aspect: 'wide',
  },
];

export const GallerySection: React.FC = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxSrc(null);
      }
    };
    if (lightboxSrc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxSrc]);

  return (
    <section id="galeria" className="wrap py-24 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.28em] font-semibold">
            <span className="opacity-60">05</span>
            <span>/</span>
            <span>PROYECTOS · ARCHIVO DE TALLER (WORK / 026)</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
            Archivo Visual de Proyectos
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
            Fotografías reales capturadas directamente en nuestro estudio en Valledupar. Piezas producidas y entregadas.
          </p>
        </div>

        <span className="font-mono text-xs text-[#A0A0A5] uppercase tracking-widest self-start md:self-auto">
          EDICIÓN 2026
        </span>
      </div>

      {/* Editorial Spacious Asymmetric Showcase */}
      <div className="flex flex-col gap-16 lg:gap-24">
        
        {/* Row 1: Split Tall + Wide with Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Work 01 (5 Cols) */}
          <div
            className="lg:col-span-5 flex flex-col gap-4 group cursor-pointer"
            onClick={() => setLightboxSrc(EDITORIAL_PROJECTS[0].image)}
          >
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-[#141419] border border-white/10 group-hover:border-[#C8A96E]/50 transition-all duration-500 shadow-2xl">
              <Image
                src={EDITORIAL_PROJECTS[0].image}
                alt={EDITORIAL_PROJECTS[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#C8A96E] font-bold tracking-widest text-[11px]">{EDITORIAL_PROJECTS[0].num}</span>
                <span className="font-sans font-bold text-base text-[#F4F1EA]">{EDITORIAL_PROJECTS[0].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{EDITORIAL_PROJECTS[0].material} · {EDITORIAL_PROJECTS[0].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0">{EDITORIAL_PROJECTS[0].location}</span>
            </div>
          </div>

          {/* Work 02 (7 Cols) */}
          <div
            className="lg:col-span-7 flex flex-col gap-4 group cursor-pointer lg:pl-6"
            onClick={() => setLightboxSrc(EDITORIAL_PROJECTS[1].image)}
          >
            <div className="relative aspect-[16/11] w-full rounded-sm overflow-hidden bg-[#141419] border border-white/10 group-hover:border-[#C8A96E]/50 transition-all duration-500 shadow-2xl">
              <Image
                src={EDITORIAL_PROJECTS[1].image}
                alt={EDITORIAL_PROJECTS[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#C8A96E] font-bold tracking-widest text-[11px]">{EDITORIAL_PROJECTS[1].num}</span>
                <span className="font-sans font-bold text-base text-[#F4F1EA]">{EDITORIAL_PROJECTS[1].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{EDITORIAL_PROJECTS[1].material} · {EDITORIAL_PROJECTS[1].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0">{EDITORIAL_PROJECTS[1].location}</span>
            </div>
          </div>

        </div>

        {/* Row 2: Inverted Wide + Tall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Work 04 (7 Cols) */}
          <div
            className="lg:col-span-7 flex flex-col gap-4 group cursor-pointer lg:pr-6"
            onClick={() => setLightboxSrc(EDITORIAL_PROJECTS[3].image)}
          >
            <div className="relative aspect-[16/11] w-full rounded-sm overflow-hidden bg-[#141419] border border-white/10 group-hover:border-[#C8A96E]/50 transition-all duration-500 shadow-2xl">
              <Image
                src={EDITORIAL_PROJECTS[3].image}
                alt={EDITORIAL_PROJECTS[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#C8A96E] font-bold tracking-widest text-[11px]">{EDITORIAL_PROJECTS[3].num}</span>
                <span className="font-sans font-bold text-base text-[#F4F1EA]">{EDITORIAL_PROJECTS[3].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{EDITORIAL_PROJECTS[3].material} · {EDITORIAL_PROJECTS[3].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0">{EDITORIAL_PROJECTS[3].location}</span>
            </div>
          </div>

          {/* Work 03 (5 Cols) */}
          <div
            className="lg:col-span-5 flex flex-col gap-4 group cursor-pointer"
            onClick={() => setLightboxSrc(EDITORIAL_PROJECTS[2].image)}
          >
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-[#141419] border border-white/10 group-hover:border-[#C8A96E]/50 transition-all duration-500 shadow-2xl">
              <Image
                src={EDITORIAL_PROJECTS[2].image}
                alt={EDITORIAL_PROJECTS[2].title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#C8A96E] font-bold tracking-widest text-[11px]">{EDITORIAL_PROJECTS[2].num}</span>
                <span className="font-sans font-bold text-base text-[#F4F1EA]">{EDITORIAL_PROJECTS[2].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{EDITORIAL_PROJECTS[2].material} · {EDITORIAL_PROJECTS[2].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0">{EDITORIAL_PROJECTS[2].location}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Inspección de proyecto"
        >
          <button
            className="absolute top-6 right-6 text-[#A0A0A5] hover:text-[#F4F1EA] p-3 rounded-full bg-black/60 border border-white/10 transition-colors"
            onClick={() => setLightboxSrc(null)}
            aria-label="Cerrar modal (Esc)"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt="Fotografía ampliada del proyecto"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};

