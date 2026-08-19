'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MacroViewer } from '@/components/catalog/MacroViewer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { materialStories } from '@/data/materials';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function MaterialExplorer() {
  const root = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !root.current) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-material-story]').forEach((chapter) => {
        const image = chapter.querySelector<HTMLElement>('[data-material-image]');
        const copy = chapter.querySelector<HTMLElement>('[data-material-copy]');
        if (!image || !copy) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: 'top 76%',
            end: 'bottom 35%',
            scrub: 0.7,
          },
        });

        timeline
          .fromTo(image, { scale: 0.92, clipPath: 'inset(10% 8% 10% 8%)' }, { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' })
          .fromTo(copy, { y: 36, opacity: 0.18 }, { y: 0, opacity: 1, ease: 'none' }, 0);
      });
    }, root);

    return () => context.revert();
  }, [reducedMotion]);

  const macroMaterial = materialStories[1];

  return (
    <section id="materiales" ref={root} className="materials">
      <div className="editorial-shell materials__intro">
        <SectionHeading
          index="02"
          eyebrow="Material / 10X"
          title="No solo ves el producto. Puedes ver su calidad."
          copy="Una lectura más lenta de las superficies, los acabados y los procesos que intervienen en cada pieza."
        />
      </div>

      <div className="macro-section editorial-shell">
        <div className="macro-section__copy">
          <span className="technical-label">Material / 10X</span>
          <p>Acércate a la superficie. El visor amplía la misma fotografía para observar la materia sin interrumpir la composición.</p>
          <span className="technical-label">Piel de durazno spandex · 220 g</span>
        </div>
        <MacroViewer image={macroMaterial.image} alt={macroMaterial.alt} />
      </div>

      <div className="materials__stories">
        {materialStories.map((story, index) => (
          <article key={story.id} data-material-story className={`material-story material-story--${index + 1}`}>
            <div data-material-image className="material-story__image">
              <Image src={story.image} alt={story.alt} fill sizes="(max-width: 900px) 100vw, 55vw" className="cover-image" />
            </div>
            <div data-material-copy className="material-story__copy">
              <span className="material-story__number">{story.index}</span>
              <p className="eyebrow">{story.eyebrow}</p>
              <h3>{story.title}</h3>
              <ul className="material-story__points" aria-label={`Aspectos de ${story.title}`}>
                {story.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="material-story__technical">
                {story.technical.map((detail) => <span key={detail}>{detail}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
