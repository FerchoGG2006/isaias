'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QuoteLink } from '@/components/ui/QuoteLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { editorialProducts, textileSwatches } from '@/data/catalog';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function ProductStage() {
  const [activeId, setActiveId] = useState(editorialProducts[0].id);
  const stage = useRef<HTMLElement>(null);
  const imageWrap = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const activeProduct = editorialProducts.find((product) => product.id === activeId) ?? editorialProducts[0];

  useEffect(() => {
    if (reducedMotion || !stage.current) return;
    const context = gsap.context(() => {
      gsap.from('[data-stage-reveal]', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: stage.current, start: 'top 76%' },
      });
    }, stage);
    return () => context.revert();
  }, [reducedMotion]);

  const chooseProduct = (id: string) => {
    if (id === activeId) return;
    if (reducedMotion) {
      setActiveId(id);
      return;
    }

    gsap.timeline()
      .to([imageWrap.current, content.current], { opacity: 0, y: 12, duration: 0.2, ease: 'power2.in' })
      .add(() => setActiveId(id))
      .fromTo([imageWrap.current, content.current], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.48, stagger: 0.06, ease: 'power3.out' });
  };

  return (
    <section id="coleccion" ref={stage} className="product-stage">
      <div className="editorial-shell product-stage__heading" data-stage-reveal>
        <SectionHeading
          index="03"
          eyebrow="Product stage"
          title="Una pieza ocupa el escenario."
          copy="Elige una categoría y observa cómo la composición cambia alrededor de ella."
          inverse
        />
      </div>

      <div className="editorial-shell product-stage__layout">
        <div ref={imageWrap} className="product-stage__visual" data-stage-reveal>
          {activeProduct.image ? (
            <Image key={activeProduct.image} src={activeProduct.image} alt={activeProduct.alt} fill sizes="(max-width: 900px) 100vw, 54vw" className="cover-image" />
          ) : (
            <div className="product-stage__missing">
              <span>Archivo visual</span>
              <strong>En preparación</strong>
              <p>Esta pieza está disponible para cotización; su fotografía real aún no está asociada al catálogo.</p>
            </div>
          )}
          <span className="product-stage__image-index" aria-hidden="true">{String(editorialProducts.findIndex((product) => product.id === activeProduct.id) + 1).padStart(2, '0')}</span>
        </div>

        <div ref={content} className="product-stage__content" data-stage-reveal>
          <p className="eyebrow">{activeProduct.category}</p>
          <h3>{activeProduct.name}</h3>
          <dl className="product-stage__details">
            {activeProduct.material ? <><dt>Material</dt><dd>{activeProduct.material}</dd></> : null}
            {activeProduct.technique ? <><dt>Técnica</dt><dd>{activeProduct.technique}</dd></> : null}
            {activeProduct.specifications.length > 0 ? <><dt>Especificaciones</dt><dd>{activeProduct.specifications.join(' · ')}</dd></> : null}
          </dl>
          <QuoteLink className="text-link text-link--light" message={`Hola, quiero solicitar una cotización para ${activeProduct.name}.`}>
            Solicitar cotización <span aria-hidden="true">↗</span>
          </QuoteLink>
        </div>

        <div className="product-stage__selector" data-stage-reveal role="tablist" aria-label="Productos destacados">
          {editorialProducts.map((product, index) => (
            <button
              key={product.id}
              type="button"
              role="tab"
              aria-selected={product.id === activeProduct.id}
              className={product.id === activeProduct.id ? 'is-active' : ''}
              onClick={() => chooseProduct(product.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{product.name}</span>
            </button>
          ))}
        </div>
      </div>

      <FabricSwatches />
    </section>
  );
}

function FabricSwatches() {
  const [selected, setSelected] = useState(textileSwatches[0].id);
  const active = textileSwatches.find((swatch) => swatch.id === selected) ?? textileSwatches[0];

  return (
    <div className="editorial-shell textile-palette">
      <div className="textile-palette__heading">
        <span className="technical-label">Textile palette</span>
        <p>{active.name}</p>
      </div>
      <div className="textile-palette__swatches" role="radiogroup" aria-label="Paleta de textiles">
        {textileSwatches.map((swatch) => (
          <button
            key={swatch.id}
            type="button"
            role="radio"
            aria-checked={swatch.id === selected}
            aria-label={swatch.name}
            className={swatch.id === selected ? 'is-selected' : ''}
            onClick={() => setSelected(swatch.id)}
          >
            <span style={{ '--swatch-color': swatch.color } as React.CSSProperties} aria-hidden="true" />
            <small>{swatch.name}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
