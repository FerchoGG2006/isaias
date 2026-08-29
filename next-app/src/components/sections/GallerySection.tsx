'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItemData {
  src: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

const RICH_GALLERY_ITEMS: GalleryItemData[] = [
  { src: '/assets/telas/ajustadas/ajustada-2.jpg', title: 'Camiseta Spandex Negra', category: 'Ajustadas 220g', aspect: 'portrait' },
  { src: '/assets/telas/cuello_tejido/cuello-2.jpg', title: 'Polo Blanco Cuello Tejido', category: 'Algodón Piqué', aspect: 'landscape' },
  { src: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg', title: 'DTF Infantil Personaje', category: 'DTF Reflectivo 160°C', aspect: 'square' },
  { src: '/assets/telas/qatar/qatar-3.jpg', title: 'Textura Qatar Transpirable', category: 'Poliéster Qatar', aspect: 'portrait' },
  { src: '/assets/telas/ajustadas/ajustada-4.jpg', title: 'Estampado DTF en Taller', category: 'Proceso Directo', aspect: 'landscape' },
  { src: '/assets/telas/reflectivos_ninos/reflectivo-4.jpg', title: 'Reflectivo Nocturno Alta Visibilidad', category: 'DTF Reflectivo', aspect: 'square' },
  { src: '/assets/telas/cuello_tejido/cuello-6.jpg', title: 'Bordado Corporativo Verde', category: 'Bordado Wilcom 3D', aspect: 'portrait' },
  { src: '/assets/img-12.jpg', title: 'Detalle de Sublimación Full Color', category: 'Sublimación 4K 200°C', aspect: 'portrait' },
  { src: '/assets/telas/reflectivos_ninos/reflectivo-28.jpg', title: 'Seguridad Vial Reflectiva', category: 'Seguridad Industrial', aspect: 'landscape' },
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
    <section id="galeria" className="wrap py-20 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#C8A96E] uppercase tracking-[0.25em] font-semibold">
          <span className="opacity-60">04</span>
          <span>/</span>
          <span>ARCHIVO VISUAL & ACABADOS</span>
        </div>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
          Galería de Trabajos Realizados
        </h2>
        <p className="text-sm sm:text-base text-[#A0A0A5] leading-relaxed font-light mt-1">
          Fotografías reales capturadas directamente en nuestro estudio en Valledupar. Haz clic en cualquier pieza para inspeccionar el acabado.
        </p>
      </div>

      {/* Masonry / Grid */}
      <div className="rich-gallery-grid">
        {RICH_GALLERY_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className={`gallery-card aspect-${item.aspect}`}
            onClick={() => setLightboxSrc(item.src)}
            role="button"
            tabIndex={0}
            aria-label={`Ver ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={item.aspect === 'landscape' ? 600 : 400}
              height={item.aspect === 'portrait' ? 500 : 350}
              className="object-cover w-full h-full"
            />
            <div className="gallery-card-overlay">
              <span className="cat-pill">{item.category}</span>
              <h4>{item.title}</h4>
              <span className="zoom-hint">🔍 Clic para ampliar</span>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-backdrop" />
          <button
            className="lightbox-close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Cerrar modal (Esc)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt="Fotografía ampliada del taller"
              width={900}
              height={1100}
              style={{ objectFit: 'contain', maxHeight: '85vh', width: 'auto' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
