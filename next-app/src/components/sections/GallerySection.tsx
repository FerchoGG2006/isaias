'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/data/content';

export const GallerySection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollPos = trackRef.current.scrollLeft;
    const itemWidth = 250 + 16; // width + gap
    const idx = Math.round(scrollPos / itemWidth);
    setActiveIndex(idx);
  };

  const scrollToItem = (index: number) => {
    if (!trackRef.current) return;
    const itemWidth = 250 + 16;
    trackRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) scrollToItem(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < GALLERY_IMAGES.length - 1) scrollToItem(activeIndex + 1);
  };

  return (
    <section id="galeria" className="wrap">
      <div className="section-head">
        <span className="eyebrow">Trabajos Recientes</span>
        <h2>Galería del Taller</h2>
        <p>Echa un vistazo a algunos de los proyectos más recientes entregados a nuestros clientes en Valledupar.</p>
      </div>

      <div className="gallery-wrap">
        <div className="gallery-track" ref={trackRef} onScroll={handleScroll}>
          {GALLERY_IMAGES.map((imgUrl, idx) => (
            <div key={idx} className={`gallery-item ${idx === activeIndex ? 'active' : ''}`}>
              <Image
                src={imgUrl}
                alt={`Proyecto ${idx + 1}`}
                width={250}
                height={340}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <div className="gallery-nav">
          <button className="gnav-btn" onClick={handlePrev} title="Anterior" aria-label="Anterior proyecto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="gnav-btn" onClick={handleNext} title="Siguiente" aria-label="Siguiente proyecto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="gallery-dots">
          {GALLERY_IMAGES.map((_, idx) => (
            <div
              key={idx}
              className={`gdot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToItem(idx)}
            />
          ))}
        </div>

        <div className="gallery-hint">Desliza o usa las flechas para explorar</div>
      </div>
    </section>
  );
};
