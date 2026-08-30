'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LookbookProject {
  id: string;
  tag: string;
  title: string;
  productType: string;
  technique: string;
  context: string;
  image: string;
}

const LOOKBOOK_PROJECTS: LookbookProject[] = [
  {
    id: 'project-01',
    tag: 'PROJECT 01',
    title: 'Silueta Ajustada Negra',
    productType: 'Camiseta Piel de Durazno 220g',
    technique: 'DTF Reflectivo a 160 °C',
    context: 'Línea de moda personal · Valledupar',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
  },
  {
    id: 'project-02',
    tag: 'PROJECT 02',
    title: 'Polo Blanco Cuello Tejido',
    productType: 'Algodón Piqué Pesado',
    technique: 'Bordado Computarizado 3D Wilcom',
    context: 'Dotación institucional de estudio',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
  },
  {
    id: 'project-03',
    tag: 'PROJECT 03',
    title: 'Prenda Deportiva Transpirable',
    productType: 'Poliéster Microfibra Qatar',
    technique: 'Sublimación Fotográfica 4K a 200 °C',
    context: 'Equipamiento deportivo y eventos',
    image: '/assets/telas/qatar/qatar-3.jpg',
  },
  {
    id: 'project-04',
    tag: 'PROJECT 04',
    title: 'Grafismo Reflectivo Infantil',
    productType: 'Fijación Térmica Curada',
    technique: 'DTF Alta Visibilidad',
    context: 'Colección cápsula de taller',
    image: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg',
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
    <section id="galeria" className="wrap py-28 sm:py-36 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.32em] font-semibold">
            07 / ARCHIVO VISUAL
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter">
            LOOKBOOK & PROJECTS
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D0CFC9] leading-relaxed font-normal">
            &ldquo;Proyectos reales materializados en nuestro taller de Valledupar.&rdquo;
          </p>
        </div>

        <span className="font-mono text-xs text-[#A0A0A5] uppercase tracking-widest self-start md:self-auto">
          EDICIÓN 026
        </span>
      </div>

      {/* Asymmetric Maison Project Layouts */}
      <div className="flex flex-col gap-20 sm:gap-28">
        
        {/* Pair 1: Project 01 (Large Portrait 5 Cols) + Project 02 (Wide Landscape 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Project 01 */}
          <div
            className="lg:col-span-5 flex flex-col gap-4 group cursor-pointer"
            onClick={() => setLightboxSrc(LOOKBOOK_PROJECTS[0].image)}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#141419] border border-white/5 group-hover:border-[#C8A96E]/50 transition-all duration-700 shadow-2xl">
              <Image
                src={LOOKBOOK_PROJECTS[0].image}
                alt={LOOKBOOK_PROJECTS[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[#C8A96E] font-bold tracking-[0.25em] text-[11px]">{LOOKBOOK_PROJECTS[0].tag}</span>
                <span className="font-sans font-bold text-xl text-[#F4F1EA]">{LOOKBOOK_PROJECTS[0].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{LOOKBOOK_PROJECTS[0].productType} · {LOOKBOOK_PROJECTS[0].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0 text-right">{LOOKBOOK_PROJECTS[0].context}</span>
            </div>
          </div>

          {/* Project 02 */}
          <div
            className="lg:col-span-7 flex flex-col gap-4 group cursor-pointer lg:pl-6"
            onClick={() => setLightboxSrc(LOOKBOOK_PROJECTS[1].image)}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#141419] border border-white/5 group-hover:border-[#C8A96E]/50 transition-all duration-700 shadow-2xl">
              <Image
                src={LOOKBOOK_PROJECTS[1].image}
                alt={LOOKBOOK_PROJECTS[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[#C8A96E] font-bold tracking-[0.25em] text-[11px]">{LOOKBOOK_PROJECTS[1].tag}</span>
                <span className="font-sans font-bold text-xl text-[#F4F1EA]">{LOOKBOOK_PROJECTS[1].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{LOOKBOOK_PROJECTS[1].productType} · {LOOKBOOK_PROJECTS[1].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0 text-right">{LOOKBOOK_PROJECTS[1].context}</span>
            </div>
          </div>

        </div>

        {/* Pair 2: Inverted Layout: Project 03 (Wide Landscape 7 Cols) + Project 04 (Portrait 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Project 03 */}
          <div
            className="lg:col-span-7 flex flex-col gap-4 group cursor-pointer lg:pr-6"
            onClick={() => setLightboxSrc(LOOKBOOK_PROJECTS[2].image)}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#141419] border border-white/5 group-hover:border-[#C8A96E]/50 transition-all duration-700 shadow-2xl">
              <Image
                src={LOOKBOOK_PROJECTS[2].image}
                alt={LOOKBOOK_PROJECTS[2].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[#C8A96E] font-bold tracking-[0.25em] text-[11px]">{LOOKBOOK_PROJECTS[2].tag}</span>
                <span className="font-sans font-bold text-xl text-[#F4F1EA]">{LOOKBOOK_PROJECTS[2].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{LOOKBOOK_PROJECTS[2].productType} · {LOOKBOOK_PROJECTS[2].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0 text-right">{LOOKBOOK_PROJECTS[2].context}</span>
            </div>
          </div>

          {/* Project 04 */}
          <div
            className="lg:col-span-5 flex flex-col gap-4 group cursor-pointer"
            onClick={() => setLightboxSrc(LOOKBOOK_PROJECTS[3].image)}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#141419] border border-white/5 group-hover:border-[#C8A96E]/50 transition-all duration-700 shadow-2xl">
              <Image
                src={LOOKBOOK_PROJECTS[3].image}
                alt={LOOKBOOK_PROJECTS[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex items-start justify-between gap-4 font-mono text-xs pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[#C8A96E] font-bold tracking-[0.25em] text-[11px]">{LOOKBOOK_PROJECTS[3].tag}</span>
                <span className="font-sans font-bold text-xl text-[#F4F1EA]">{LOOKBOOK_PROJECTS[3].title}</span>
                <span className="text-[#A0A0A5] text-[11px]">{LOOKBOOK_PROJECTS[3].productType} · {LOOKBOOK_PROJECTS[3].technique}</span>
              </div>
              <span className="text-[#A0A0A5] text-[11px] shrink-0 text-right">{LOOKBOOK_PROJECTS[3].context}</span>
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
            className="absolute top-6 right-6 text-[#A0A0A5] hover:text-[#F4F1EA] p-3 rounded-full bg-black/60 border border-white/10 transition-colors cursor-pointer"
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


