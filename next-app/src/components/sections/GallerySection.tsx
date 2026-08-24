'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItemData {
  src: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

const RICH_GALLERY_ITEMS: GalleryItemData[] = [
  { src: '/assets/telas/ajustadas/ajustada-2.jpg', title: 'Camiseta Spandex Negra', category: 'Ajustadas', aspect: 'portrait' },
  { src: '/assets/telas/cuello_tejido/cuello-2.jpg', title: 'Polo Blanco Cuello Tejido', category: 'Cuello Tejido', aspect: 'landscape' },
  { src: '/assets/telas/reflectivos_ninos/reflectivo-12.jpg', title: 'DTF Infantil Personaje', category: 'Niños & Reflectivos', aspect: 'square' },
  { src: '/assets/telas/qatar/qatar-3.jpg', title: 'Textura Qatar Transpirable', category: 'Poliéster Qatar', aspect: 'portrait' },
  { src: '/assets/telas/ajustadas/ajustada-4.jpg', title: 'Estampado DTF en Taller', category: 'Proceso Directo', aspect: 'landscape' },
  { src: '/assets/telas/reflectivos_ninos/reflectivo-4.jpg', title: 'Reflectivo Nocturno Alta Visibilidad', category: 'Niños & Reflectivos', aspect: 'square' },
  { src: '/assets/telas/cuello_tejido/cuello-6.jpg', title: 'Bordado Corporativo Verde', category: 'Cuello Tejido', aspect: 'portrait' },
  { src: '/assets/img-12.jpg', title: 'Detalle de Sublimación Full Color', category: 'Sublimación', aspect: 'portrait' },
  { src: '/assets/telas/reflectivos_ninos/reflectivo-28.jpg', title: 'Seguridad Vial Reflectiva', category: 'Reflectivos', aspect: 'landscape' },
];

export const GallerySection: React.FC = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="galeria" className="wrap">
      <div className="section-head">
        <span className="eyebrow">Muestrario de Diseños</span>
        <h2>Galería de Diseños y Acabados</h2>
        <p>Explora la variedad de formatos, estampados y bordados entregados a nuestros clientes.</p>
      </div>

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
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="gallery-card-overlay">
              <span className="cat-pill">{item.category}</span>
              <h4>{item.title}</h4>
              <span className="zoom-hint">🔍 Clic para ampliar</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-backdrop" />
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt="Proyecto ampliado"
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
