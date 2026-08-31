import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personaliza tu Prenda o Proyecto | Variedades Isaías · Valledupar',
  description: 'Guía de personalización textil: confección en piel de durazno spandex 220g, DTF reflectivo a 160 °C, bordado 3D Wilcom y sublimación 4K en Valledupar.',
};

export default function PersonalizaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-12 pb-32">
        <div className="wrap max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <nav className="font-mono text-xs text-[#A0A0A5] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">INICIO</Link>
            <span>/</span>
            <span className="text-[#C8A96E]">PERSONALIZA</span>
          </nav>

          {/* Editorial Page Header */}
          <div className="flex flex-col gap-4 max-w-3xl mb-16 sm:mb-24">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#C8A96E] font-semibold">
              HUB DE PERSONALIZACIÓN · ATELIER VALLEDUPAR
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-tighter leading-none">
              ¿CÓMO QUIERES <br />
              <span className="text-[#C8A96E] font-serif italic font-normal">CREAR TU PIEZA?</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#D0CFC9] leading-relaxed font-light mt-2">
              Selecciona tu camino: confecciona sobre nuestras siluetas seleccionadas, contrata servicios de maquila técnica o cotiza dotaciones en volumen.
            </p>
          </div>

          {/* 3 Main Personalization Pathways */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Pathway 1: Prendas de Catálogo */}
            <div className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-8 flex flex-col justify-between gap-8 transition-all duration-500 shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                  <Image
                    src="/assets/telas/ajustadas/ajustada-2.jpg"
                    alt="Prendas de Catálogo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-[#C8A96E] bg-black/80 backdrop-blur-md px-3 py-1 border border-[#C8A96E]/30 rounded-xs">
                    01 · DESDE CERO
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C8A96E]">Siluetas en Taller</span>
                  <h2 className="font-sans font-bold text-2xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                    Personalizar Prenda de Catálogo
                  </h2>
                  <p className="text-sm text-[#A0A0A5] leading-relaxed font-light">
                    Elige una prenda (Camiseta Spandex 220g, Polo Piqué, Baby Tee, Gorra), selecciona tu color, técnica, curva de tallas y sube tu diseño.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-4 border-t border-white/10 font-mono text-xs text-[#D0CFC9]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Piel de durazno spandex 220g</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Distribución de tallas S a XXL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Desde 1 unidad hasta 500+</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/catalogo"
                className="font-mono text-xs uppercase tracking-[0.2em] bg-[#F4F1EA] text-[#070708] hover:bg-[#C8A96E] hover:text-[#070708] font-bold py-3.5 px-6 rounded-xs transition-all text-center"
              >
                Explorar Siluetas →
              </Link>
            </div>

            {/* Pathway 2: Servicios de Maquila */}
            <div className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-8 flex flex-col justify-between gap-8 transition-all duration-500 shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                  <Image
                    src="/assets/telas/reflectivos_ninos/reflectivo-12.jpg"
                    alt="Servicios de Maquila"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-[#C8A96E] bg-black/80 backdrop-blur-md px-3 py-1 border border-[#C8A96E]/30 rounded-xs">
                    02 · MAQUILA & IMPRESIÓN
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C8A96E]">Servicios Directos</span>
                  <h2 className="font-sans font-bold text-2xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                    Estampación & Maquila
                  </h2>
                  <p className="text-sm text-[#A0A0A5] leading-relaxed font-light">
                    ¿Tienes tus propias prendas o necesitas rollos de impresión? Solicita DTF por metro lineal curado a 160°C, bordado Wilcom o sublimación 4K.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-4 border-t border-white/10 font-mono text-xs text-[#D0CFC9]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>DTF por metro continuo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Ponchado matricial Wilcom 3D</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Recepción de tela o prenda armada</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/servicios"
                className="font-mono text-xs uppercase tracking-[0.2em] bg-[#141419] hover:bg-[#1a1a22] border border-white/15 hover:border-[#C8A96E]/50 text-[#F4F1EA] hover:text-[#C8A96E] font-semibold py-3.5 px-6 rounded-xs transition-all text-center"
              >
                Ver Maquila y Técnicas →
              </Link>
            </div>

            {/* Pathway 3: Dotaciones Corporativas & Volumen */}
            <div className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-8 flex flex-col justify-between gap-8 transition-all duration-500 shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                  <Image
                    src="/assets/telas/cuello_tejido/cuello-6.jpg"
                    alt="Dotaciones Corporativas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-[#C8A96E] bg-black/80 backdrop-blur-md px-3 py-1 border border-[#C8A96E]/30 rounded-xs">
                    03 · EMPRESAS & VOLUMEN
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C8A96E]">Equipos & Eventos</span>
                  <h2 className="font-sans font-bold text-2xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                    Dotaciones & Producción Masiva
                  </h2>
                  <p className="text-sm text-[#A0A0A5] leading-relaxed font-light">
                    Asesoría integral para empresas, uniformes institucionales, merchandising de eventos y colecciones con facturación y tiempos garantizados.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-4 border-t border-white/10 font-mono text-xs text-[#D0CFC9]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Asesoría textil y muestras físicas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Descuentos escalonados por escala</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C8A96E]">✓</span>
                    <span>Despacho a todo el país</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/cotizar"
                className="font-mono text-xs uppercase tracking-[0.2em] bg-[#C8A96E] hover:bg-[#dbbe82] text-[#070708] font-bold py-3.5 px-6 rounded-xs transition-all text-center"
              >
                Iniciar Cotización Empresarial →
              </Link>
            </div>

          </div>

          {/* Technical Quality Seal */}
          <div className="mt-20 p-8 sm:p-12 bg-[#0b0b0e] border border-white/10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-8 font-mono text-xs">
            <div className="flex flex-col gap-2">
              <span className="text-[#C8A96E] uppercase tracking-widest font-bold">ESTÁNDAR TÉCNICO VERIFICADO</span>
              <p className="text-[#A0A0A5] max-w-xl font-light">
                Curado térmico exacto a 160 °C para DTF elástico, ponchado matricial Wilcom 3D sobre piqué y sublimación fotográfica 4K a 200 °C.
              </p>
            </div>
            <Link
              href="/#materiales"
              className="text-[#F4F1EA] hover:text-[#C8A96E] underline uppercase tracking-wider shrink-0 transition-colors"
            >
              Inspeccionar materiales en 10X →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
