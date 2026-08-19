'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ProductLightbox } from '@/components/catalog/ProductLightbox';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { catalogFilters, galleryEntries, type CatalogFilter } from '@/data/catalog';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

export function EditorialGallery() {
  const [filter, setFilter] = useState<CatalogFilter>('todos');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const grid = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const entries = filter === 'todos' ? galleryEntries : galleryEntries.filter((entry) => entry.category === filter);
  const selected = entries.find((entry) => entry.id === selectedId) ?? null;

  useEffect(() => {
    if (reducedMotion || !grid.current) return;
    const items = grid.current.querySelectorAll<HTMLElement>('[data-gallery-entry]');
    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.96, y: 20, clipPath: 'inset(8% 0 8% 0)' },
      { opacity: 1, scale: 1, y: 0, clipPath: 'inset(0% 0 0% 0)', duration: 0.52, stagger: 0.055, ease: 'power3.out', overwrite: 'auto' },
    );
  }, [filter, reducedMotion]);

  const updateFilter = (nextFilter: CatalogFilter) => {
    setSelectedId(null);
    setFilter(nextFilter);
  };

  return (
    <section id="catalogo" className="editorial-gallery">
      <div className="editorial-shell editorial-gallery__heading">
        <SectionHeading
          index="04"
          eyebrow="Collection / 01"
          title="Un catálogo que se lee como una editorial."
          copy="Fotografías reales, procesos y productos ordenados por ritmo, no por una cuadrícula uniforme."
        />
        <div className="gallery-filters" role="toolbar" aria-label="Filtrar catálogo">
          {catalogFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              className={filter === item.id ? 'is-active' : ''}
              onClick={() => updateFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={grid} className="editorial-shell editorial-gallery__grid" aria-live="polite">
        {entries.length > 0 ? entries.map((entry, index) => (
          <button
            key={entry.id}
            type="button"
            data-gallery-entry
            className={`gallery-entry gallery-entry--${entry.size}`}
            onClick={() => setSelectedId(entry.id)}
            aria-label={`Abrir ${entry.title}`}
          >
            <span className="gallery-entry__image">
              <Image src={entry.image} alt={entry.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 42vw" className="cover-image" />
            </span>
            <span className="gallery-entry__meta">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{entry.category}</span>
            </span>
            <span className="gallery-entry__caption">
              <strong>{entry.title}</strong>
              <small>{entry.caption}</small>
            </span>
          </button>
        )) : (
          <div className="gallery-empty" data-gallery-entry>
            <span className="technical-label">Archivo en preparación</span>
            <p>Aún no hay una fotografía real asociada a esta categoría.</p>
          </div>
        )}
      </div>

      <ProductLightbox
        entry={selected}
        entries={entries}
        onClose={() => setSelectedId(null)}
        onNavigate={setSelectedId}
      />
    </section>
  );
}
