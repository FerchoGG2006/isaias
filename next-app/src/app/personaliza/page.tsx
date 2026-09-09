import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { getBusiness } from '@/data/businesses';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personaliza tu Prenda o Proyecto | Variedades Isaías · Valledupar',
  description: 'Guía de personalización textil: confección en telas frescas, bordado fino computarizado y estampados duraderos en Valledupar.',
};

export default function PersonalizaPage() {
  const business = getBusiness('isaias');
  const cleanPhone = (business.whatsappPhone || '573105634509').replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `¡Hola ${business.name}! Me gustaría recibir asesoría directa para un pedido personalizado.`
  )}`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-12 pb-32">
        <div className="wrap max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <nav className="font-mono text-xs text-[#8A8A92] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">INICIO</Link>
            <span>/</span>
            <span className="text-[#C8A96E]">PERSONALIZA</span>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col gap-4 max-w-3xl mb-12 sm:mb-16">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.1]">
              ¿Cómo te gustaría <br />
              <span className="text-[#C8A96E]">hacer tu pedido?</span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#8A8A92] leading-relaxed font-light mt-1">
              Selecciona una de estas tres alternativas de producción según tus necesidades de confección o maquila:
            </p>
          </div>

          {/* Banner de Asesoría Directa por WhatsApp */}
          <div className="mb-12 p-5 sm:p-6 bg-[#0E1015] border border-[#25D366]/40 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center shrink-0 text-[#25D366]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                </svg>
              </div>
              <div>
                <h2 className="font-sans font-bold text-base sm:text-lg text-[#F4F1EA]">
                  ¿Prefieres que te asesoremos directamente?
                </h2>
                <p className="font-sans text-xs text-[#8A8A92] leading-relaxed font-light">
                  Si tienes una foto en tu celular o dudas con las tallas, escríbenos a WhatsApp. Un asesor de taller te atiende de inmediato.
                </p>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-mono text-xs uppercase tracking-wider font-bold py-3 px-5 rounded-xs shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Escribir por WhatsApp</span>
              <span>→</span>
            </a>
          </div>

          {/* 3 Caminos Editoriales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Camino 1: Prendas de Catálogo */}
            <div className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-7 flex flex-col justify-between gap-6 transition-all duration-300 shadow-xl">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                  <Image
                    src="/assets/telas/ajustadas/ajustada-2.jpg"
                    alt="Prendas de Catálogo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                    Prendas Listas para Personalizar
                  </h3>
                  <p className="text-xs text-[#8A8A92] leading-relaxed font-light">
                    Camisetas en piel de durazno spandex 220g, polos piqué pesados, gorras y prendas deportivas. Elige tu silueta, color y personalízala.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-3 border-t border-white/10 font-sans text-xs text-[#D0CFC9]">
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Tallas completas desde la XS hasta la XXL</span>
                  </li>
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Desde 1 unidad o por volumen con descuento</span>
                  </li>
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Muestra y prueba digital de diseño</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/catalogo"
                className="font-mono text-xs uppercase tracking-wider bg-[#F4F1EA] text-[#070708] hover:bg-[#C8A96E] hover:text-[#070708] font-bold py-3.5 px-6 rounded-xs transition-all text-center shadow-md"
              >
                Ver Catálogo de Prendas →
              </Link>
            </div>

            {/* Camino 2: Servicios de Estampación y Maquila */}
            <div className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-7 flex flex-col justify-between gap-6 transition-all duration-300 shadow-xl">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                  <Image
                    src="/assets/telas/reflectivos_ninos/reflectivo-12.jpg"
                    alt="Servicios de Estampado"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                    Trae tus Propias Prendas
                  </h3>
                  <p className="text-xs text-[#8A8A92] leading-relaxed font-light">
                    ¿Ya compraste tus prendas o manejas tu propia marca? Recibimos tu confección para estampar en DTF o bordar con precisión computarizada.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-3 border-t border-white/10 font-sans text-xs text-[#D0CFC9]">
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Impresión DTF por metro lineal continuo</span>
                  </li>
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Bordado 3D computarizado de alta definición</span>
                  </li>
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Entrega ágil en taller de Valledupar</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/servicios"
                className="font-mono text-xs uppercase tracking-wider bg-[#141419] hover:bg-[#1a1a22] border border-white/15 hover:border-[#C8A96E]/50 text-[#F4F1EA] hover:text-[#C8A96E] font-semibold py-3.5 px-6 rounded-xs transition-all text-center"
              >
                Ver Servicios de Taller →
              </Link>
            </div>

            {/* Camino 3: Dotaciones Empresariales y Eventos */}
            <div className="group bg-[#0b0b0e] border border-white/10 hover:border-[#C8A96E]/60 rounded-xs p-7 flex flex-col justify-between gap-6 transition-all duration-300 shadow-xl">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#141419] border border-white/5">
                  <Image
                    src="/assets/telas/cuello_tejido/cuello-6.jpg"
                    alt="Dotaciones para Empresas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                    Dotaciones y Empresas
                  </h3>
                  <p className="text-xs text-[#8A8A92] leading-relaxed font-light">
                    Uniformes institucionales, camisetas para eventos, colegios y empresas con precios especiales por volumen y facturación comercial.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-3 border-t border-white/10 font-sans text-xs text-[#D0CFC9]">
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Precios escalonados por docena y centena</span>
                  </li>
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Asesoría personalizada con muestras físicas</span>
                  </li>
                  <li className="flex items-center gap-2 font-light">
                    <span className="text-[#C8A96E] font-mono">✓</span>
                    <span>Envíos asegurados a todo el Cesar y Colombia</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/cotizar"
                className="font-mono text-xs uppercase tracking-wider bg-[#C8A96E] hover:bg-[#dbbe82] text-[#070708] font-bold py-3.5 px-6 rounded-xs transition-all text-center shadow-md"
              >
                Cotizar para Empresa →
              </Link>
            </div>

          </div>

          {/* Sello de Confianza y Calidad Local */}
          <div className="mt-16 p-6 sm:p-8 bg-[#0E1015] border border-white/10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.2em] font-semibold">
                PRODUCCIÓN LOCAL · VALLEDUPAR
              </span>
              <p className="font-sans text-sm text-[#8A8A92] max-w-xl font-light leading-relaxed">
                Estampado DTF de fijación térmica que no se cuartea, bordados finos y confección en telas frescas de primera calidad.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] hover:text-[#C8A96E] shrink-0 transition-colors"
            >
              Conocer taller y ubicación →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
