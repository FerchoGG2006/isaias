import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { SERVICES } from '@/data/services';
import { ServiceCard } from '@/components/services/ServiceCard';

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-24">
        
        {/* Breadcrumbs & Header */}
        <div className="wrap mb-12">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#A0A0A5] mb-4">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#C8A96E]">Servicios de Personalización</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold block mb-2">
                TALLER & MAQUILA · VALLEDUPAR
              </span>
              <h1 className="font-sans font-bold text-3xl sm:text-5xl text-[#F4F1EA] tracking-tight">
                Servicios de Estampación & Bordado
              </h1>
              <p className="text-sm sm:text-base text-[#A0A0A5] max-w-2xl leading-relaxed mt-2 font-light">
                ¿Tienes tus propias prendas o necesitas producción por volumen? Atendemos talleres de confección, diseñadores, empresas e instituciones con maquinaria industrial.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/catalogo"
                className="font-mono text-xs text-[#F4F1EA] hover:text-[#C8A96E] bg-[#141419] border border-white/15 px-4 py-2.5 rounded-xs transition-colors"
              >
                Ver Catálogo de Prendas →
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* How it works info banner */}
          <div className="mt-20 bg-[#141419] border border-white/10 rounded-sm p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-2xl font-bold text-[#C8A96E]">01.</span>
                <h4 className="font-sans font-bold text-lg text-[#F4F1EA]">
                  Recepción de Archivos
                </h4>
                <p className="text-xs text-[#A0A0A5] leading-relaxed">
                  Envía tus vectores (PDF, SVG, AI) o imágenes en 300 DPI. Si necesitas vectorización o ponchado Wilcom, nosotros te asistimos.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-2xl font-bold text-[#C8A96E]">02.</span>
                <h4 className="font-sans font-bold text-lg text-[#F4F1EA]">
                  Recepción de Prendas o Suministro
                </h4>
                <p className="text-xs text-[#A0A0A5] leading-relaxed">
                  Trae tus prendas a nuestro punto físico en Valledupar o nosotros te suministramos las bases textiles desde nuestro stock.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-2xl font-bold text-[#C8A96E]">03.</span>
                <h4 className="font-sans font-bold text-lg text-[#F4F1EA]">
                  Procesamiento & Entrega
                </h4>
                <p className="text-xs text-[#A0A0A5] leading-relaxed">
                  Bordado multicabezal o curado DTF a 160 °C con tiempos de entrega de 24 a 72 horas para maquilas ágiles.
                </p>
              </div>
            </div>
          </div>

        </div>

      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
