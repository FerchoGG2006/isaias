import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { SuccessStoriesSection } from '@/components/sections/SuccessStoriesSection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos de Éxito & Dotaciones Realizadas | Variedades Isaías · Valledupar',
  description:
    'Proyectos textiles completados en Valledupar y el Cesar: Dotaciones corporativas con bordado Wilcom 3D, camisetas para colegios en piel de durazno 220g y uniformes deportivos.',
};

export default function CasosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-12 pb-32">
        <div className="wrap max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Casos de Éxito' }]} />
          </div>

          {/* Section: Casos de Éxito */}
          <SuccessStoriesSection />
        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
