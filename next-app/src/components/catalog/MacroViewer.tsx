'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

interface MacroViewerProps {
  image: string;
  alt: string;
}

export function MacroViewer({ image, alt }: MacroViewerProps) {
  const root = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0, active: false });
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = lens.current;
    if (!element) return;

    const apply = () => {
      frame.current = null;
      const { x, y, active } = target.current;
      element.style.opacity = active ? '1' : '0';
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      element.style.backgroundPosition = `${x * -9}px ${y * -9}px`;
    };

    const update = () => {
      if (!frame.current) frame.current = requestAnimationFrame(apply);
    };

    const container = root.current;
    if (!container || reducedMotion) return;

    const move = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      target.current = {
        x: Math.min(Math.max(event.clientX - bounds.left, 0), bounds.width),
        y: Math.min(Math.max(event.clientY - bounds.top, 0), bounds.height),
        active: true,
      };
      update();
    };
    const leave = () => {
      target.current.active = false;
      update();
    };

    container.addEventListener('pointermove', move, { passive: true });
    container.addEventListener('pointerleave', leave, { passive: true });
    return () => {
      container.removeEventListener('pointermove', move);
      container.removeEventListener('pointerleave', leave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={root}
      className="macro-viewer"
      style={{ '--macro-image': `url('${image}')` } as React.CSSProperties}
    >
      <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 62vw" className="cover-image" />
      <div ref={lens} className="macro-viewer__lens" aria-hidden="true">
        <span>10X</span>
      </div>
      <div className="macro-viewer__label" aria-hidden="true">
        <span className="macro-viewer__dot" />
        inspección de material
      </div>
    </div>
  );
}
