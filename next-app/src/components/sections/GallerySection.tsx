'use client';

import React from 'react';
import Image from 'next/image';

interface LookbookProject {
  id: string;
  tag: string;
  title: string;
  productType: string;
  technique: string;
  context: string;
  aspect: string;
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
    aspect: 'aspect-[3/4]',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
  },
  {
    id: 'project-02',
    tag: 'PROJECT 02',
    title: 'Polo Blanco Cuello Tejido',
    productType: 'Algodón Piqué Pesado',
    technique: 'Bordado Computarizado 3D Wilcom',
    context: 'Dotación institucional de estudio',
    aspect: 'aspect-[16/11]',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
  },
  {
    id: 'project-03',
    tag: 'PROJECT 03',
    title: 'Prenda Deportiva Transpirable',
    productType: 'Poliéster Microfibra Qatar',
    technique: 'Sublimación Fotográfica 4K a 200 °C',
    context: 'Equipamiento deportivo y eventos',
    aspect: 'aspect-[16/11]',
    image: '/assets/telas/qatar/qatar-1.jpg',
  },
  {
    id: 'project-04',
    tag: 'PROJECT 04',
    title: 'Grafismo Reflectivo Cápsula',
    productType: 'Fijación Térmica Curada',
    technique: 'DTF Alta Visibilidad',
    context: 'Colección cápsula de taller',
    aspect: 'aspect-[3/4]',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="wrap py-10 sm:py-14 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-baseline gap-4 mb-1">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E]">
              PRODUCCIÓN REAL
            </span>
          </div>
          <h2 className="font-serif font-normal text-4xl sm:text-6xl text-[#F4F1EA] tracking-tight">
            Proyectos del Atelier.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
            Piezas y trabajos reales confeccionados en nuestro taller de Valledupar.
          </p>
        </div>

        <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-widest self-start md:self-auto font-medium">
          [ PRODUCCIÓN PROPIA ]
        </span>
      </div>

      {/* Asymmetric Project Layouts */}
      <div className="flex flex-col gap-12 sm:gap-16">
        
        {/* Pair 1: Project 01 (Portrait 5 Cols) + Project 02 (Wide Landscape 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Project 01 */}
          <div className="lg:col-span-5 flex flex-col gap-3 group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-white/10 bg-[#141419] group-hover:border-[#C8A96E]/60 transition-all duration-500 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <Image
                src={LOOKBOOK_PROJECTS[0].image}
                alt={LOOKBOOK_PROJECTS[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/30 to-[#0C0D10]/60" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
                <span className="text-[#C8A96E] font-medium uppercase bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
                  {LOOKBOOK_PROJECTS[0].tag}
                </span>
                <span className="bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 text-[#F4F1EA]">Valledupar</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#8A8A92] bg-black/70 px-4 py-2 rounded-xs font-mono">
                <span className="text-[#F4F1EA]">{LOOKBOOK_PROJECTS[0].productType}</span>
                <span className="text-[#C8A96E] font-semibold">Alta Definición</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-normal text-lg text-[#F4F1EA]">{LOOKBOOK_PROJECTS[0].title}</span>
                <span className="text-[#8A8A92] text-xs font-sans">{LOOKBOOK_PROJECTS[0].productType} · {LOOKBOOK_PROJECTS[0].technique}</span>
              </div>
              <span className="text-[#8A8A92] text-xs shrink-0 text-right font-mono">{LOOKBOOK_PROJECTS[0].context}</span>
            </div>
          </div>

          {/* Project 02 */}
          <div className="lg:col-span-7 flex flex-col gap-3 group lg:pl-4">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xs border border-white/10 bg-[#141419] group-hover:border-[#C8A96E]/60 transition-all duration-500 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <Image
                src={LOOKBOOK_PROJECTS[1].image}
                alt={LOOKBOOK_PROJECTS[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/30 to-[#0C0D10]/60" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
                <span className="text-[#C8A96E] font-medium uppercase bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
                  {LOOKBOOK_PROJECTS[1].tag}
                </span>
                <span className="bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 text-[#F4F1EA]">Valledupar</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#8A8A92] bg-black/70 px-4 py-2 rounded-xs font-mono">
                <span className="text-[#F4F1EA]">{LOOKBOOK_PROJECTS[1].productType}</span>
                <span className="text-[#C8A96E] font-semibold">Dotación Empresarial</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-normal text-lg text-[#F4F1EA]">{LOOKBOOK_PROJECTS[1].title}</span>
                <span className="text-[#8A8A92] text-xs font-sans">{LOOKBOOK_PROJECTS[1].productType} · {LOOKBOOK_PROJECTS[1].technique}</span>
              </div>
              <span className="text-[#8A8A92] text-xs shrink-0 text-right font-mono">{LOOKBOOK_PROJECTS[1].context}</span>
            </div>
          </div>

        </div>

        {/* Pair 2: Inverted Layout (Project 03 Wide 7 Cols + Project 04 Portrait 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Project 03 */}
          <div className="lg:col-span-7 flex flex-col gap-3 group lg:pr-4">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xs border border-white/10 bg-[#141419] group-hover:border-[#C8A96E]/60 transition-all duration-500 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <Image
                src={LOOKBOOK_PROJECTS[2].image}
                alt={LOOKBOOK_PROJECTS[2].title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/30 to-[#0C0D10]/60" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
                <span className="text-[#C8A96E] font-medium uppercase bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
                  {LOOKBOOK_PROJECTS[2].tag}
                </span>
                <span className="bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 text-[#F4F1EA]">Valledupar</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#8A8A92] bg-black/70 px-4 py-2 rounded-xs font-mono">
                <span className="text-[#F4F1EA]">{LOOKBOOK_PROJECTS[2].productType}</span>
                <span className="text-[#C8A96E] font-semibold">Sublimación 4K</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-normal text-lg text-[#F4F1EA]">{LOOKBOOK_PROJECTS[2].title}</span>
                <span className="text-[#8A8A92] text-xs font-sans">{LOOKBOOK_PROJECTS[2].productType} · {LOOKBOOK_PROJECTS[2].technique}</span>
              </div>
              <span className="text-[#8A8A92] text-xs shrink-0 text-right font-mono">{LOOKBOOK_PROJECTS[2].context}</span>
            </div>
          </div>

          {/* Project 04 */}
          <div className="lg:col-span-5 flex flex-col gap-3 group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-white/10 bg-[#141419] group-hover:border-[#C8A96E]/60 transition-all duration-500 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <Image
                src={LOOKBOOK_PROJECTS[3].image}
                alt={LOOKBOOK_PROJECTS[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/30 to-[#0C0D10]/60" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#8A8A92] font-mono">
                <span className="text-[#C8A96E] font-medium uppercase bg-black/70 px-3.5 py-1 rounded-xs border border-white/10">
                  {LOOKBOOK_PROJECTS[3].tag}
                </span>
                <span className="bg-black/70 px-3.5 py-1 rounded-xs border border-white/10 text-[#F4F1EA]">Valledupar</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#8A8A92] bg-black/70 px-4 py-2 rounded-xs font-mono">
                <span className="text-[#F4F1EA]">{LOOKBOOK_PROJECTS[3].productType}</span>
                <span className="text-[#C8A96E] font-semibold">Cápsula Reflectiva</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-normal text-lg text-[#F4F1EA]">{LOOKBOOK_PROJECTS[3].title}</span>
                <span className="text-[#8A8A92] text-xs font-sans">{LOOKBOOK_PROJECTS[3].productType} · {LOOKBOOK_PROJECTS[3].technique}</span>
              </div>
              <span className="text-[#8A8A92] text-xs shrink-0 text-right font-mono">{LOOKBOOK_PROJECTS[3].context}</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
