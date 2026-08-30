'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="taller" className="wrap py-24 border-t border-white/10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Workshop Real Imagery (6 Cols) */}
        <div className="lg:col-span-6 relative aspect-[4/5] rounded-sm overflow-hidden bg-[#141419] border border-white/10 shadow-2xl">
          <Image
            src="/assets/telas/ajustadas/ajustada-4.jpg"
            alt="Taller y confección real en Valledupar"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-black/30" />

          <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-[#F4F1EA] bg-black/80 backdrop-blur-md p-4 border border-white/10 rounded-xs flex items-center justify-between">
            <span className="text-[#C8A96E] font-bold uppercase tracking-wider">TALLER ACTIVO · VALLEDUPAR</span>
            <span className="text-[#A0A0A5] text-[11px]">CALIBRACIÓN WILCOM 3D</span>
          </div>
        </div>

        {/* Right Column: Editorial Manifesto (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold">
              06 / RAÍZ & OFICIO · MADE IN VALLEDUPAR
            </span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight leading-[1.05]">
              MADE IN <br />
              <span className="text-[#C8A96E] font-serif italic font-normal">VALLEDUPAR.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:text-base text-[#D0CFC9] leading-relaxed font-light">
            <p className="text-[#F4F1EA] font-medium">
              Una idea. Una máquina. Una prenda bien hecha.
            </p>
            <p>
              Desde Valledupar transformamos diseños en piezas textiles que se pueden vestir, obsequiar, comercializar y recordar. Sin intermediarios, con control directo sobre cada metro de tela, curva térmica de curado y densidad de puntada.
            </p>
          </div>

          {/* 3 Authentic Craft Pillars */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="flex flex-col gap-1">
              <span className="text-[#C8A96E] font-bold text-sm">LOCAL</span>
              <span className="text-[#A0A0A5] text-[11px]">Valledupar, Cesar</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#C8A96E] font-bold text-sm">OFICIO</span>
              <span className="text-[#A0A0A5] text-[11px]">Bordado & Estampación</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#C8A96E] font-bold text-sm">ESCALA</span>
              <span className="text-[#A0A0A5] text-[11px]">Unidad → Producción</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4F1EA] hover:text-[#C8A96E] transition-colors"
            >
              <span>Conoce nuestra ubicación física en Valledupar</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

