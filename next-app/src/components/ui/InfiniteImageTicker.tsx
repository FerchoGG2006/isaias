'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Rich collections of photos from all categories
const ROW_1_IMAGES = [
  '/assets/telas/ajustadas/ajustada-1.jpg',
  '/assets/telas/cuello_tejido/cuello-1.jpg',
  '/assets/telas/qatar/qatar-1.jpg',
  '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  '/assets/new_images/media_1786601135223.png',
  '/assets/img-1.jpg',
  '/assets/img-2.jpg',
  '/assets/telas/reflectivos_ninos/reflectivo-10.jpg',
  '/assets/new_images/media_1786601143574.png',
  '/assets/telas/cuello_tejido/cuello-5.jpg',
  '/assets/img-10.jpg',
  '/assets/telas/ajustadas/ajustada-3.jpg',
];

const ROW_2_IMAGES = [
  '/assets/new_images/media_1786601283456.png',
  '/assets/telas/reflectivos_ninos/reflectivo-15.jpg',
  '/assets/telas/qatar/qatar-3.jpg',
  '/assets/img-15.jpg',
  '/assets/new_images/media_1786601148524.png',
  '/assets/telas/ajustadas/ajustada-6.jpg',
  '/assets/telas/cuello_tejido/cuello-3.jpg',
  '/assets/new_images/media_1786601283492.png',
  '/assets/telas/reflectivos_ninos/reflectivo-28.jpg',
  '/assets/img-25.jpg',
  '/assets/new_images/media_1786601283727.png',
  '/assets/telas/reflectivos_ninos/reflectivo-20.jpg',
];

export const InfiniteImageTicker: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (!container || !row1 || !row2) return;

    const ctx = gsap.context(() => {
      // GSAP ScrollTrigger Scrub to accelerate loop on scroll
      gsap.to(row1, {
        xPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(row2, {
        xPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="full-width-ticker-section">
      <div className="ticker-header wrap">
        <span className="eyebrow">✦ Catálogo Visual en Movimiento</span>
        <h2>Muestrario de Trabajos Entregados</h2>
        <p>Decenas de prendas estampadas con sublimación, DTF y bordados para nuestros clientes en Valledupar.</p>
      </div>

      {/* 100vw Full-Bleed Ticker Containers */}
      <div className="ticker-viewport">
        {/* Row 1: Leftward infinite scroll */}
        <div className="ticker-row-wrap">
          <div ref={row1Ref} className="ticker-track row-left">
            {[...ROW_1_IMAGES, ...ROW_1_IMAGES].map((src, i) => (
              <div key={i} className="ticker-item item-portrait">
                <Image src={src} alt={`Muestra ${i}`} fill style={{ objectFit: 'cover' }} sizes="300px" />
                <div className="ticker-badge">VALLEDUPAR</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward infinite scroll */}
        <div className="ticker-row-wrap">
          <div ref={row2Ref} className="ticker-track row-right">
            {[...ROW_2_IMAGES, ...ROW_2_IMAGES].map((src, i) => (
              <div key={i} className="ticker-item item-landscape">
                <Image src={src} alt={`Muestra ${i}`} fill style={{ objectFit: 'cover' }} sizes="360px" />
                <div className="ticker-badge cyan">EDICIÓN PREMIUM</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
