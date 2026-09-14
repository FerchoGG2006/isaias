import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { SERVICES } from '@/data/services';
import { ServiceCard } from '@/components/services/ServiceCard';

import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Servicios de Estampado & Bordado Computarizado en Valledupar | Variedades Isaías',
  description:
    'Maquila y servicios de producción textil en Valledupar: DTF textil de alta definición, bordado computarizado Wilcom y sublimación 4K para marcas, empresas y talleres.',
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-24">
        
        {/* Breadcrumbs & Header */}
        <div className="wrap mb-12">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: 'Servicios de Taller' },
              ]}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.1]">
                Servicios de Estampación & Bordado
              </h1>
              <p className="text-sm sm:text-base text-[#A0A0A5] max-w-2xl leading-relaxed mt-2 font-light">
                ¿Tienes tus propias prendas o necesitas producción por volumen? Atendemos talleres de confección, diseñadores, empresas e instituciones con maquinaria industrial.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/catalogo"
                className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] hover:text-[#C8A96E] bg-[#141419] border border-white/15 px-5 py-3 rounded-xs transition-colors font-medium"
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
        </div>

      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
