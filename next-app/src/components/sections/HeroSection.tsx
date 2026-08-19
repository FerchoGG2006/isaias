'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { QuoteLink } from '@/components/ui/QuoteLink';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const imageLayer = useRef<HTMLDivElement>(null);
  const copyLayer = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !root.current) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      timeline
        .to(imageLayer.current, { scale: 1.09, yPercent: 8, ease: 'none' }, 0)
        .to(copyLayer.current, { yPercent: -20, opacity: 0.28, ease: 'none' }, 0);
    }, root);

    return () => context.revert();
  }, [reducedMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !imageLayer.current || window.matchMedia('(pointer: fine)').matches === false) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(imageLayer.current, {
      x: x * 16,
      y: y * 12,
      duration: 0.9,
      overwrite: 'auto',
      ease: 'power3.out',
    });
  };

  return (
    <section id="inicio" ref={root} className="hero" onPointerMove={handlePointerMove}>
      <div ref={imageLayer} className="hero__image" aria-hidden="true">
        <Image
          src="/assets/telas/ajustadas/ajustada-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="cover-image"
        />
      </div>
      <div className="hero__wash" aria-hidden="true" />
      <div ref={copyLayer} className="hero__content editorial-shell">
        <p className="eyebrow">Estudio textil · Valledupar</p>
        <h1>
          Hecho para
          <em> mirar de cerca.</em>
        </h1>
        <p className="hero__summary">
          Personalización textil y productos personalizados con la materia, el color y el detalle en primer plano.
        </p>
        <div className="hero__actions">
          <QuoteLink className="button button--light" message="Hola, quiero solicitar una cotización para una prenda personalizada.">
            Solicitar cotización <span aria-hidden="true">↗</span>
          </QuoteLink>
          <a className="text-link text-link--light" href="#materiales">
            Explorar materiales <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="hero__footer editorial-shell" aria-label="Detalles de la colección">
        <span>01 / 06</span>
        <span>Personalización que se siente material.</span>
      </div>
    </section>
  );
}
