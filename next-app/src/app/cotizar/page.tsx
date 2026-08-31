import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuotePageContent } from '@/components/quote/QuotePageContent';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cotización en Línea | Variedades Isaías · Valledupar',
  description: 'Revisa y envía tu solicitud de cotización personalizada para prendas, estampados DTF y bordados directamente a nuestro taller en Valledupar por WhatsApp.',
};

export default function CotizarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-12 pb-32">
        <QuotePageContent />
      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
