import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { isaiasBusiness } from '@/config/brand';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¡Gracias por tu Solicitud! | Variedades Isaías · Valledupar',
  description: 'Tu solicitud de cotización ha sido iniciada. Te responderemos en menos de 15 minutos en horario hábil directamente por WhatsApp.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function GraciasPage() {
  const waUrl = getWhatsAppChatUrl(
    isaiasBusiness.whatsappPhone,
    '¡Hola Variedades Isaías! Acabo de enviar mi solicitud desde la web y me gustaría confirmar que la hayan recibido.'
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-32">
        <div className="wrap max-w-4xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Cotización', href: '/cotizar' },
                { label: 'Confirmación de Solicitud' },
              ]}
            />
          </div>

          {/* Main Thank You Card */}
          <div className="bg-[#0C0D10] border border-[#C8A96E]/30 rounded-xs p-8 sm:p-14 shadow-2xl flex flex-col items-center text-center">
            
            {/* Celebration Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C8A96E]/15 border border-[#C8A96E]/40 flex items-center justify-center text-[#C8A96E] text-2xl sm:text-3xl mb-6 shadow-lg shadow-[#C8A96E]/10">
              ✓
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight mb-4">
              ¡Gracias por elegir a <br />
              <span className="text-[#C8A96E]">Variedades Isaías</span>!
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#D0CFC9] max-w-xl font-light leading-relaxed mb-6">
              Tu mensaje y selección de prendas han sido transferidos a nuestro canal oficial de atención en WhatsApp. Ya estamos preparando los detalles para asesorarte.
            </p>

            <div className="font-sans text-xs text-[#8A8A92] mb-10">
              Atención de Lunes a Sábado: 8:00 AM – 6:00 PM · Taller en Valledupar, Cesar
            </div>

            {/* Next Steps 3-Column Visual */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10 border-t border-b border-white/10 py-8">
              <div className="bg-[#12131A] p-4 rounded-xs border border-white/5 flex flex-col gap-1.5">
                <span className="font-mono text-xs font-bold text-[#C8A96E]">PASO 01</span>
                <h2 className="font-sans font-bold text-sm text-[#F4F1EA]">Revisión Técnica</h2>
                <p className="text-xs text-[#8A8A92] font-light leading-snug">
                  Un maestro de taller verifica disponibilidad de tela, colores y viabilidad de bordado Wilcom o DTF.
                </p>
              </div>

              <div className="bg-[#12131A] p-4 rounded-xs border border-white/5 flex flex-col gap-1.5">
                <span className="font-mono text-xs font-bold text-[#C8A96E]">PASO 02</span>
                <h2 className="font-sans font-bold text-sm text-[#F4F1EA]">Montaje Digital</h2>
                <p className="text-xs text-[#8A8A92] font-light leading-snug">
                  Te enviamos por WhatsApp la muestra virtual con medidas y la cotización formal por volumen.
                </p>
              </div>

              <div className="bg-[#12131A] p-4 rounded-xs border border-white/5 flex flex-col gap-1.5">
                <span className="font-mono text-xs font-bold text-[#C8A96E]">PASO 03</span>
                <h2 className="font-sans font-bold text-sm text-[#F4F1EA]">Producción & Envío</h2>
                <p className="text-xs text-[#8A8A92] font-light leading-snug">
                  Iniciamos corte y bordado tras tu visto bueno y despachamos en la fecha acordada con guía asegurada.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center font-sans text-xs uppercase tracking-wider font-semibold">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-bold px-8 py-4 rounded-xs shadow-xl transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Reabrir Chat de WhatsApp</span>
                <span>↗</span>
              </a>

              <Link
                href="/catalogo"
                className="w-full sm:w-auto bg-[#141419] hover:bg-[#1C1C24] border border-white/15 text-[#F4F1EA] hover:text-[#C8A96E] px-8 py-4 rounded-xs transition-colors text-center"
              >
                Seguir Explorando el Catálogo
              </Link>
            </div>

            {/* Direct Contact Reference */}
            <div className="mt-10 text-center font-mono text-[11px] text-[#8A8A92] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#C8A96E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {isaiasBusiness.address}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#25D366] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                </svg>
                WhatsApp: +{isaiasBusiness.whatsappPhone}
              </span>
            </div>

          </div>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
