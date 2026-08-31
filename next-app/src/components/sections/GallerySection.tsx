'use client';

import React from 'react';

interface LookbookProject {
  id: string;
  tag: string;
  title: string;
  productType: string;
  technique: string;
  context: string;
  aspect: string;
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
  },
  {
    id: 'project-02',
    tag: 'PROJECT 02',
    title: 'Polo Blanco Cuello Tejido',
    productType: 'Algodón Piqué Pesado',
    technique: 'Bordado Computarizado 3D Wilcom',
    context: 'Dotación institucional de estudio',
    aspect: 'aspect-[16/11]',
  },
  {
    id: 'project-03',
    tag: 'PROJECT 03',
    title: 'Prenda Deportiva Transpirable',
    productType: 'Poliéster Microfibra Qatar',
    technique: 'Sublimación Fotográfica 4K a 200 °C',
    context: 'Equipamiento deportivo y eventos',
    aspect: 'aspect-[16/11]',
  },
  {
    id: 'project-04',
    tag: 'PROJECT 04',
    title: 'Grafismo Reflectivo Cápsula',
    productType: 'Fijación Térmica Curada',
    technique: 'DTF Alta Visibilidad',
    context: 'Colección cápsula de taller',
    aspect: 'aspect-[3/4]',
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="wrap py-24 sm:py-32 border-t border-[#94A3B8]/15 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight">
            Proyectos Realizados
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Piezas y trabajos reales confeccionados en nuestro taller de Valledupar.
          </p>
        </div>

        <span className="text-xs text-[#E5A910] uppercase tracking-wider self-start md:self-auto font-semibold">
          Producción Propia
        </span>
      </div>

      {/* Asymmetric Project Layouts */}
      <div className="flex flex-col gap-12 sm:gap-16">
        
        {/* Pair 1: Project 01 (Portrait 5 Cols) + Project 02 (Wide Landscape 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Project 01 */}
          <div className="lg:col-span-5 flex flex-col gap-3 group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="text-[#E5A910] font-semibold uppercase">
                  {LOOKBOOK_PROJECTS[0].tag}
                </span>
                <span>Valledupar</span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
                <div className="w-16 h-16 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-3 bg-[#181D26]/80 group-hover:border-[#3B82F6] transition-colors shadow-md">
                  <svg className="w-7 h-7 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl text-[#FFFFFF] font-bold">{LOOKBOOK_PROJECTS[0].title}</span>
                <span className="font-sans text-xs text-[#94A3B8] mt-1">{LOOKBOOK_PROJECTS[0].technique}</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-[#94A3B8]/15 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>{LOOKBOOK_PROJECTS[0].productType}</span>
                <span className="text-[#3B82F6] font-semibold">Alta Definición</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-lg text-[#FFFFFF]">{LOOKBOOK_PROJECTS[0].title}</span>
                <span className="text-[#94A3B8] text-xs font-sans">{LOOKBOOK_PROJECTS[0].productType} · {LOOKBOOK_PROJECTS[0].technique}</span>
              </div>
              <span className="text-[#94A3B8] text-xs shrink-0 text-right">{LOOKBOOK_PROJECTS[0].context}</span>
            </div>
          </div>

          {/* Project 02 */}
          <div className="lg:col-span-7 flex flex-col gap-3 group lg:pl-4">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] group-hover:border-[#E5A910]/60 transition-all duration-400 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-radial from-[#E5A910]/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="text-[#E5A910] font-semibold uppercase">
                  {LOOKBOOK_PROJECTS[1].tag}
                </span>
                <span>Valledupar</span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
                <div className="w-16 h-16 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-3 bg-[#181D26]/80 group-hover:border-[#E5A910] transition-colors shadow-md">
                  <svg className="w-7 h-7 text-[#E5A910]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl text-[#FFFFFF] font-bold">{LOOKBOOK_PROJECTS[1].title}</span>
                <span className="font-sans text-xs text-[#94A3B8] mt-1">{LOOKBOOK_PROJECTS[1].technique}</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-[#94A3B8]/15 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>{LOOKBOOK_PROJECTS[1].productType}</span>
                <span className="text-[#E5A910] font-semibold">Dotación Empresarial</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-lg text-[#FFFFFF]">{LOOKBOOK_PROJECTS[1].title}</span>
                <span className="text-[#94A3B8] text-xs font-sans">{LOOKBOOK_PROJECTS[1].productType} · {LOOKBOOK_PROJECTS[1].technique}</span>
              </div>
              <span className="text-[#94A3B8] text-xs shrink-0 text-right">{LOOKBOOK_PROJECTS[1].context}</span>
            </div>
          </div>

        </div>

        {/* Pair 2: Inverted Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Project 03 */}
          <div className="lg:col-span-7 flex flex-col gap-3 group lg:pr-4">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="text-[#3B82F6] font-semibold uppercase">
                  {LOOKBOOK_PROJECTS[2].tag}
                </span>
                <span>Valledupar</span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
                <div className="w-16 h-16 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-3 bg-[#181D26]/80 group-hover:border-[#3B82F6] transition-colors shadow-md">
                  <svg className="w-7 h-7 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl text-[#FFFFFF] font-bold">{LOOKBOOK_PROJECTS[2].title}</span>
                <span className="font-sans text-xs text-[#94A3B8] mt-1">{LOOKBOOK_PROJECTS[2].technique}</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-[#94A3B8]/15 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>{LOOKBOOK_PROJECTS[2].productType}</span>
                <span className="text-[#3B82F6] font-semibold">Deportivo 4K</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-lg text-[#FFFFFF]">{LOOKBOOK_PROJECTS[2].title}</span>
                <span className="text-[#94A3B8] text-xs font-sans">{LOOKBOOK_PROJECTS[2].productType} · {LOOKBOOK_PROJECTS[2].technique}</span>
              </div>
              <span className="text-[#94A3B8] text-xs shrink-0 text-right">{LOOKBOOK_PROJECTS[2].context}</span>
            </div>
          </div>

          {/* Project 04 */}
          <div className="lg:col-span-5 flex flex-col gap-3 group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#181D26] via-[#12151C] to-[#0E1016] group-hover:border-[#3B82F6]/60 transition-all duration-400 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="text-[#E5A910] font-semibold uppercase">
                  {LOOKBOOK_PROJECTS[3].tag}
                </span>
                <span>Valledupar</span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
                <div className="w-16 h-16 rounded-full border border-[#94A3B8]/20 flex items-center justify-center mb-3 bg-[#181D26]/80 group-hover:border-[#3B82F6] transition-colors shadow-md">
                  <svg className="w-7 h-7 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl text-[#FFFFFF] font-bold">{LOOKBOOK_PROJECTS[3].title}</span>
                <span className="font-sans text-xs text-[#94A3B8] mt-1">{LOOKBOOK_PROJECTS[3].technique}</span>
              </div>

              <div className="relative z-10 pt-3 border-t border-[#94A3B8]/15 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>{LOOKBOOK_PROJECTS[3].productType}</span>
                <span className="text-[#3B82F6] font-semibold">Alta Visibilidad</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-xs pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-lg text-[#FFFFFF]">{LOOKBOOK_PROJECTS[3].title}</span>
                <span className="text-[#94A3B8] text-xs font-sans">{LOOKBOOK_PROJECTS[3].productType} · {LOOKBOOK_PROJECTS[3].technique}</span>
              </div>
              <span className="text-[#94A3B8] text-xs shrink-0 text-right">{LOOKBOOK_PROJECTS[3].context}</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};


