import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LookbookProject {
  id: string;
  title: string;
  productType: string;
  technique: string;
  href: string;
  image: string;
}

const LOOKBOOK_PROJECTS: LookbookProject[] = [
  {
    id: 'project-01',
    title: 'Baby Tee Cerezas Y2K',
    productType: 'Piel de durazno 220g · Spandex Crop Fit',
    technique: 'Estampado DTF Textil',
    href: '/catalogo/ropa/baby-tee-ajustada-piel-durazno',
    image: '/assets/img-21.jpg',
  },
  {
    id: 'project-02',
    title: 'Polo Institucional con Bordado 3D',
    productType: 'Algodón Piqué 230g · Cuello tejido',
    technique: 'Bordado computarizado',
    href: '/catalogo/ropa/polo-cuello-tejido-pique',
    image: '/assets/img-4.jpg',
  },
  {
    id: 'project-03',
    title: 'Camiseta Deportiva Qatar Sublimación Total',
    productType: 'Poliéster Qatar DryFit transpirable',
    technique: 'Sublimación 4K Full Print',
    href: '/catalogo/ropa/camiseta-qatar-sublimacion-total',
    image: '/assets/telas/qatar/qatar-1.jpg',
  },
  {
    id: 'project-04',
    title: 'Mug Cerámico 11oz y Mágico',
    productType: 'Cerámica polimerizada · Sublimación 4K',
    technique: 'Sublimación fotográfica 4K',
    href: '/catalogo/sublimacion/mug-ceramico-11oz-sublimado',
    image: '/assets/mug.png',
  },
  {
    id: 'project-05',
    title: 'Camiseta Infantil Reflectiva',
    productType: 'Algodón suave para niños · Seguridad nocturna',
    technique: 'DTF Reflectivo 160 °C',
    href: '/catalogo/ropa/camiseta-infantil-dtf-reflectivo',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  },
  {
    id: 'project-06',
    title: 'Gorra Trucker Malla Personalizada',
    productType: 'Broche snapback regulable · Dril y malla',
    technique: 'Bordado 3D / Sublimación',
    href: '/catalogo/accesorios/gorra-trucker-malla-personalizada',
    image: '/assets/img-3.jpg',
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="wrap py-14 sm:py-20 border-t border-white/10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
            Trabajos y Proyectos Reales.
          </h2>
          <p className="font-sans text-sm text-[#8A8A92] leading-relaxed font-light mt-1">
            Prendas confeccionadas y personalizadas directamente en nuestro taller propio.
          </p>
        </div>

        <Link
          href="/catalogo"
          className="font-sans text-xs uppercase tracking-wider text-[#C8A96E] hover:underline flex items-center gap-1.5 self-start md:self-auto font-semibold"
        >
          <span>Ver catálogo completo</span>
          <span>→</span>
        </Link>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {LOOKBOOK_PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group flex flex-col gap-3.5 bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-4 sm:p-5 transition-all duration-300 shadow-xl"
          >
            {/* Image Frame */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xs bg-[#141419]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute bottom-3 right-3 z-10">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#C8A96E] bg-black/80 backdrop-blur-sm px-3 py-1 rounded-xs border border-[#C8A96E]/30 font-medium">
                  {project.technique}
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <div>
                <h3 className="font-sans font-bold text-lg text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-[#8A8A92] font-light mt-0.5">
                  {project.productType}
                </p>
              </div>

              <span className="font-sans text-xs font-semibold text-[#C8A96E] group-hover:translate-x-1 transition-transform shrink-0">
                Ver prenda →
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};
