'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { GalleryEntry } from '@/data/catalog';
import { QuoteLink } from '@/components/ui/QuoteLink';

interface ProductLightboxProps {
  entry: GalleryEntry | null;
  entries: GalleryEntry[];
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function ProductLightbox({ entry, entries, onClose, onNavigate }: ProductLightboxProps) {
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!entry) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      const currentIndex = entries.findIndex((item) => item.id === entry.id);
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && currentIndex > 0) onNavigate(entries[currentIndex - 1].id);
      if (event.key === 'ArrowRight' && currentIndex < entries.length - 1) onNavigate(entries[currentIndex + 1].id);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [entry, entries, onClose, onNavigate]);

  if (!entry) return null;

  const currentIndex = entries.findIndex((item) => item.id === entry.id);
  const previous = entries[currentIndex - 1];
  const next = entries[currentIndex + 1];

  return (
    <div className="lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialog} className="lightbox__dialog" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" tabIndex={-1}>
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="Cerrar vista ampliada">×</button>
        <div className="lightbox__image">
          <Image src={entry.image} alt={entry.alt} fill sizes="100vw" className="cover-image" priority />
        </div>
        <div className="lightbox__content">
          <span className="technical-label">{entry.category}</span>
          <h2 id="lightbox-title">{entry.title}</h2>
          <p>{entry.caption}</p>
          <dl>
            {entry.material ? <><dt>Material</dt><dd>{entry.material}</dd></> : null}
            {entry.technique ? <><dt>Técnica</dt><dd>{entry.technique}</dd></> : null}
            {entry.specifications.length > 0 ? <><dt>Especificaciones</dt><dd>{entry.specifications.join(' · ')}</dd></> : null}
          </dl>
          <QuoteLink className="button button--dark" message={`Hola, quiero solicitar una cotización relacionada con ${entry.title}.`}>
            Solicitar cotización <span aria-hidden="true">↗</span>
          </QuoteLink>
        </div>
        <div className="lightbox__navigation" aria-label="Navegación de galería">
          <button type="button" onClick={() => previous && onNavigate(previous.id)} disabled={!previous} aria-label="Producto anterior">←</button>
          <span>{String(currentIndex + 1).padStart(2, '0')} / {String(entries.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => next && onNavigate(next.id)} disabled={!next} aria-label="Producto siguiente">→</button>
        </div>
      </div>
    </div>
  );
}
