'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const FullWidthShowcaseBanner: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const bgImg = bgImgRef.current;
    const content = contentRef.current;

    if (!section || !bgImg || !content) return;

    const ctx = gsap.context(() => {
      // Smooth GSAP Scrub for full-bleed background expansion
      gsap.fromTo(
        bgImg,
        { scale: 1.25, yPercent: -15 },
        {
          scale: 1.0,
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        content,
        { y: 60, opacity: 0.3 },
        {
          y: -20,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'center center',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="full-width-showcase-section">
      <div ref={bgImgRef} className="full-width-bg-wrap">
        <Image
          src="/assets/new_images/media_1786601283456.png"
          alt="Estampado Textil de Alta Definición"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="full-width-overlay" />
      </div>

      <div ref={contentRef} className="full-width-content wrap">
        <span className="full-width-eyebrow">TECNOLOGÍA DE PRENSA TÉRMICA Y DTF</span>
        <h2>PRODUCCIÓN DE ALTA VOLUMETRÍA Y DETALLE ÚNICO</h2>
        <p>
          Impresión directa a film y sublimación fotográfica sobre cualquier tipo de tela. Garantizamos fijación profunda que no se agrieta ni se decolora.
        </p>
        <div className="full-width-stats">
          <div className="stat-item">
            <span className="stat-val">+1.000</span>
            <span className="stat-lbl">Prendas Entregadas</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">100%</span>
            <span className="stat-lbl">Hecho en Valledupar</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">24-48h</span>
            <span className="stat-lbl">Tiempo Récord</span>
          </div>
        </div>
      </div>
    </section>
  );
};
