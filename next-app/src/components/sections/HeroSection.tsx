'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export const HeroSection: React.FC = () => {
  const { whatsappPhone } = useCart();

  const waUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    '¡Hola Variedades Isaías! Me gustaría solicitar información y cotización de sus servicios textiles.'
  )}`;

  return (
    <section id="inicio" className="relative w-full h-[90vh] min-h-[580px] bg-[#070708] overflow-hidden text-[#F4F1EA] flex items-center justify-center">
      
      {/* 1. HERO BACKGROUND IMAGE (SHIFTED LOWER FOR BETTER FRAMING) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-main.jpg"
          alt="Variedades Isaías - Taller de personalización textil en Valledupar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Soft Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/50 to-[#070708]/40" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* 2. CENTERED LOGOS SHOWCASE (ABSOLUTAMENTE TODOS LOS LOGOS) */}
      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Main Full Logos Composition (Palacio y Variedades Isaías - Absolutamente Todos) */}
          <div className="relative w-full max-w-2xl h-56 sm:h-72 md:h-80 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform hover:scale-[1.02] duration-500">
            <Image
              src="/assets/logos-todos.png"
              alt="Logos Oficiales Palacio y Variedades Isaías"
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Subtitle Badge */}
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold bg-black/70 backdrop-blur-md px-6 py-2.5 border border-[#C8A96E]/40 rounded-full shadow-2xl">
            VALLEDUPAR · ESTUDIO DE PERSONALIZACIÓN TEXTIL & BORDADOS
          </span>

          {/* Clean Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C8A96E] hover:bg-[#d8b87a] text-[#070708] font-mono font-bold text-xs tracking-[0.16em] uppercase px-8 py-4 shadow-2xl transition-all rounded-sm"
            >
              <svg className="w-4 h-4 fill-current text-[#070708]" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              Cotizar por WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#C8A96E] text-[#F4F1EA] hover:text-[#C8A96E] font-mono font-semibold text-xs tracking-[0.16em] uppercase px-7 py-4 bg-black/60 backdrop-blur-md transition-all rounded-sm"
            >
              Ver Catálogo
            </motion.a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};





