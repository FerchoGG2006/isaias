import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FaqSection } from '@/components/sections/FaqSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personaliza tu Prenda o Proyecto | Variedades Isaías · Valledupar',
  description: 'Guía de personalización textil: confección en telas frescas, bordado fino computarizado y estampados duraderos en Valledupar.',
};

export default function PersonalizaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-800 pt-12 pb-32">
        <div className="wrap max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs items={[{ label: '¿Cómo Hacer tu Pedido?' }]} />
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-4 max-w-3xl mb-12 sm:mb-16">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.1]">
              ¿Cómo te gustaría <br />
              <span className="text-[#00AFEF]">hacer tu pedido?</span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-1">
              Selecciona una de estas tres alternativas de producción según tus necesidades de confección o maquila:
            </p>
          </div>

          {/* 3 Caminos Editoriales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Camino 1: Prendas de Catálogo */}
            <div className="group bg-white border border-slate-200 hover:border-[#00AFEF]/60 hover:shadow-lg rounded-2xl p-7 flex flex-col justify-between gap-6 transition-all duration-300 shadow-sm">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/assets/telas/ajustadas/ajustada-2.jpg"
                    alt="Prendas de Catálogo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    Prendas Listas para Personalizar
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Camisetas en piel de durazno spandex 220g, polos piqué pesados, gorras y prendas deportivas. Elige tu silueta, color y personalízala.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 pt-4 border-t border-slate-200 font-sans text-xs text-slate-600">
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Tallas completas desde la XS hasta la XXL</span>
                  </li>
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Desde 1 unidad o por volumen con descuento</span>
                  </li>
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Muestra y prueba digital de diseño</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/catalogo"
                className="font-sans text-xs uppercase tracking-wider bg-[#00AFEF] hover:bg-[#0284C7] text-white font-bold py-3.5 px-6 rounded-xl transition-all text-center shadow-md"
              >
                Ver Catálogo de Prendas →
              </Link>
            </div>

            {/* Camino 2: Servicios de Estampación y Maquila */}
            <div className="group bg-white border border-slate-200 hover:border-[#00AFEF]/60 hover:shadow-lg rounded-2xl p-7 flex flex-col justify-between gap-6 transition-all duration-300 shadow-sm">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/assets/telas/reflectivos_ninos/reflectivo-12.jpg"
                    alt="Servicios de Estampado"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    Trae tus Propias Prendas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    ¿Ya compraste tus prendas o manejas tu propia marca? Recibimos tu confección para estampar en DTF o bordar con precisión computarizada.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 pt-4 border-t border-slate-200 font-sans text-xs text-slate-600">
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Impresión DTF por metro lineal continuo</span>
                  </li>
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Bordado 3D computarizado de alta definición</span>
                  </li>
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Entrega ágil en taller de Valledupar</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/servicios"
                className="font-sans text-xs uppercase tracking-wider bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#00AFEF] text-slate-800 hover:text-[#0284C7] font-semibold py-3.5 px-6 rounded-xl transition-all text-center shadow-xs"
              >
                Ver Servicios de Taller →
              </Link>
            </div>

            {/* Camino 3: Dotaciones Empresariales y Eventos */}
            <div className="group bg-white border border-slate-200 hover:border-[#00AFEF]/60 hover:shadow-lg rounded-2xl p-7 flex flex-col justify-between gap-6 transition-all duration-300 shadow-sm">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/assets/telas/cuello_tejido/cuello-6.jpg"
                    alt="Dotaciones para Empresas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    Dotaciones y Empresas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Uniformes institucionales, camisetas para eventos, colegios y empresas con precios especiales por volumen y facturación comercial.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 pt-4 border-t border-slate-200 font-sans text-xs text-slate-600">
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Precios escalonados por docena y centena</span>
                  </li>
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Asesoría personalizada con muestras físicas</span>
                  </li>
                  <li className="flex items-center gap-2 font-normal">
                    <span className="text-[#00AFEF] font-mono text-xs select-none font-bold">—</span>
                    <span>Envíos asegurados a todo el Cesar y Colombia</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/cotizar"
                className="font-sans text-xs uppercase tracking-wider bg-[#00AFEF] hover:bg-[#0284C7] text-white font-bold py-3.5 px-6 rounded-xl transition-all text-center shadow-md"
              >
                Cotizar para Empresa →
              </Link>
            </div>

          </div>

          {/* 5 Preguntas Frecuentes Contextuales */}
          <div className="mt-16">
            <FaqSection />
          </div>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
