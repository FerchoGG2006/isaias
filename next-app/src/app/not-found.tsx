import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { isaiasBusiness } from '@/config/brand';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página No Encontrada (404) | Variedades Isaías · Valledupar',
  description: 'La página solicitada no está disponible en nuestro catálogo. Explora nuestras prendas, servicios de bordado y estampados en Valledupar.',
};

export default function NotFound() {
  const waUrl = getWhatsAppChatUrl(
    isaiasBusiness.whatsappPhone,
    '¡Hola Variedades Isaías! Estaba navegando en la web y busco asesoría para una prenda o servicio que no encontré.'
  );

  return (
    <>
      <Header />
      <main className="min-h-[75vh] bg-[#0C0D10] text-[#F4F1EA] flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14151C] border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C8A96E]" />
            <span>ERROR 404 · PIEZA FUERA DE CATÁLOGO</span>
          </div>

          {/* Big Editorial 404 */}
          <h1 className="font-sans font-extrabold text-6xl sm:text-8xl text-white tracking-tighter mb-4">
            4<span className="text-[#C8A96E]">0</span>4
          </h1>

          <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight mb-3">
            La página que buscas no está en el taller.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#8A8A92] max-w-md font-light leading-relaxed mb-10">
            Es posible que el enlace haya cambiado o que la prenda haya sido reubicada. Puedes explorar nuestra colección vigente o escribirnos directamente.
          </p>

          {/* Rescue Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md font-sans text-xs">
            <Link
              href="/catalogo"
              className="bg-[#C8A96E] hover:bg-[#dbbe82] text-[#0C0D10] font-bold py-3.5 px-5 rounded-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>Explorar Catálogo</span>
              <span>→</span>
            </Link>

            <Link
              href="/servicios"
              className="bg-[#14151C] hover:bg-[#1A1C24] border border-white/15 text-[#F4F1EA] hover:text-[#C8A96E] font-medium py-3.5 px-5 rounded-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Bordados & DTF</span>
            </Link>

            <Link
              href="/personaliza"
              className="bg-[#14151C] hover:bg-[#1A1C24] border border-white/15 text-[#F4F1EA] hover:text-[#C8A96E] font-medium py-3.5 px-5 rounded-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>¿Cómo ordenar?</span>
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-bold py-3.5 px-5 rounded-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Asesor WhatsApp</span>
              <span className="text-xs">💬</span>
            </a>
          </div>

          <div className="mt-12 text-[11px] font-mono text-[#8A8A92]">
            Taller Textil Variedades Isaías · Valledupar, Cesar · Colombia
          </div>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
