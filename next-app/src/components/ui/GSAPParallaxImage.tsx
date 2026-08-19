'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GSAPParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  speed?: number; // Parallax speed/intensity
  expandOnScroll?: boolean; // Smooth image expansion effect
}

export const GSAPParallaxImage: React.FC<GSAPParallaxImageProps> = ({
  src,
  alt,
  width = 600,
  height = 400,
  className = '',
  speed = 0.2,
  expandOnScroll = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const imgWrapper = imgRef.current;

    if (!container || !imgWrapper) return;

    const ctx = gsap.context(() => {
      if (expandOnScroll) {
        // Smooth scale expansion as element enters viewport
        gsap.fromTo(
          container,
          { scale: 0.92, opacity: 0.85 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 0.5,
            },
          }
        );
      }

      // Parallax movement of internal image
      gsap.fromTo(
        imgWrapper,
        { yPercent: -speed * 30, scale: 1.15 },
        {
          yPercent: speed * 30,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [speed, expandOnScroll]);

  return (
    <div
      ref={containerRef}
      className={`gsap-parallax-container ${className}`}
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <div ref={imgRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
