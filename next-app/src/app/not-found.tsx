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
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
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
