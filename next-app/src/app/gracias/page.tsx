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
              <span>📍 {isaiasBusiness.address}</span>
              <span className="hidden sm:inline">·</span>
              <span>📞 WhatsApp: +{isaiasBusiness.whatsappPhone}</span>
            </div>

          </div>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
