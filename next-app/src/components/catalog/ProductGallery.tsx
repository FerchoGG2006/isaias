'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProductGalleryProps {
  images: string[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  title,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const displayImages = images.length > 0 ? images : ['/assets/hero-main.jpg'];
  const activeImage = displayImages[selectedIndex] || displayImages[0];

  // Cerrar lightbox con tecla Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % displayImages.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
      }
    },
    [displayImages.length]
  );

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, handleKeyDown]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image Stage */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative aspect-[4/5] w-full bg-[#141419] border border-white/10 rounded-xs overflow-hidden shadow-2xl cursor-zoom-in select-none"
          title="Click para ampliar e inspeccionar textura"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={activeImage}
                alt={`${title} - Vista ${selectedIndex + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Soft Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Botón flotante para inspección de textura */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#F4F1EA] bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/20 rounded-full shadow-lg">
              <svg className="w-3.5 h-3.5 text-[#C8A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              <span>Ver textura HD</span>
            </span>
          </div>

          {/* Image index counter */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-4 right-4 z-10 font-mono text-xs text-[#A0A0A5] bg-black/70 backdrop-blur-md px-3 py-1 border border-white/10 rounded-xs">
              {selectedIndex + 1} / {displayImages.length}
            </div>
          )}
        </div>

        {/* Thumbnails row */}
        {displayImages.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Galería de imágenes">
            {displayImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-20 h-24 rounded-xs overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  idx === selectedIndex
                    ? 'border-[#C8A96E] scale-105 shadow-md shadow-[#C8A96E]/20'
                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                }`}
              >
                <Image
                  src={img}
                  alt={`${title} miniatura ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL ACCESIBLE */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
            role="dialog"
            aria-modal="true"
            aria-label={`Inspección en alta definición: ${title}`}
          >
            {/* Top Bar: Título y Cerrar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96E]">
                  Inspección de Textura & Confección
                </span>
                <h3 className="font-sans font-bold text-lg text-[#F4F1EA]">
                  {title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="font-mono text-xs text-[#A0A0A5] hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Cerrar</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Central Stage: Gran Formato */}
            <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-h-[80vh] max-w-4xl">
                <Image
                  src={activeImage}
                  alt={`${title} ampliación ${selectedIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Botón previo */}
              {displayImages.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Botón siguiente */}
              {displayImages.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev + 1) % displayImages.length);
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Bottom Bar: Miniaturas y Selector */}
            <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
              {displayImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-14 h-18 rounded-xs overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    idx === selectedIndex
                      ? 'border-[#C8A96E] scale-105'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
