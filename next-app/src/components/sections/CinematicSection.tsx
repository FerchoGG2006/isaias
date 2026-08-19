'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const CinematicSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const imageFrame = imageFrameRef.current;
    const img = imageRef.current;
    const text = overlayTextRef.current;
    const eyebrow = eyebrowRef.current;

    if (!container || !imageFrame || !img || !text || !eyebrow) return;

    const ctx = gsap.context(() => {
      // Timeline pinned to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Expand image frame from rounded box to full screen
      tl.fromTo(
        imageFrame,
        {
          width: '70%',
          height: '55vh',
          borderRadius: '32px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        },
        {
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          ease: 'power2.inOut',
        },
        0
      );

      // 2. Parallax scale the image inside the frame
      tl.fromTo(
        img,
        { scale: 1.3 },
        { scale: 1.0, ease: 'power2.inOut' },
        0
      );

      // 3. Eyebrow fade out then main title fade in
      tl.fromTo(
        eyebrow,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -30, ease: 'power1.out' },
        0.1
      );

      tl.fromTo(
        text,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, ease: 'power2.out' },
        0.4
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="cinematic-container">
      {/* Pre-expand header indicator */}
      <div className="cinematic-header">
        <span ref={eyebrowRef} className="eyebrow cinematic-eyebrow">
          ✦ Experiencia Cinematográfica · Taller Isaías
        </span>
      </div>

      {/* Expanding Frame */}
      <div ref={imageFrameRef} className="cinematic-frame">
        <Image
          ref={imageRef}
          src="/assets/new_images/media_1786601283456.png"
          alt="Proceso de prensado e impresión textil en alta definición"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="cinematic-overlay" />

        {/* Text Revealed On Expansion */}
        <div ref={overlayTextRef} className="cinematic-text-wrap">
          <span className="cinematic-tag">BORDADO • SUBLIMACIÓN • DTF</span>
          <h2>ARTE TEXTIL DE ALTA PRECISIÓN</h2>
          <p>
            Cada prenda se prensa con calibración térmica exacta para lograr colores vívidos, bordados tridimensionales y una durabilidad garantizada lavada tras lavada.
          </p>
          <a href="#catalogo" className="btn btn-primary cinematic-btn">
            Explorar Colección
          </a>
        </div>
      </div>
    </section>
  );
};
