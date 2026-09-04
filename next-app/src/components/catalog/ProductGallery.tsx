'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProductGalleryProps {
  images: string[];
  title: string;
  tag?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  title,
  tag,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayImages = images.length > 0 ? images : ['/assets/hero-main.jpg'];
  const activeImage = displayImages[selectedIndex] || displayImages[0];

  return (
    <div className="flex flex-col gap-4 sticky top-24">
      {/* Main Image Stage */}
      <div className="relative aspect-[4/5] w-full bg-[#141419] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
        {tag && (
          <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30 rounded-xs">
            {tag}
          </div>
        )}

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
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

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
  );
};
