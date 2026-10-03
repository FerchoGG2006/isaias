'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const Footer: React.FC = () => {
  const { business } = useQuote();

  const formattedPhone = business.whatsappPhone
    ? `+${business.whatsappPhone.slice(0, 2)} ${business.whatsappPhone.slice(2, 5)} ${business.whatsappPhone.slice(5, 8)} ${business.whatsappPhone.slice(8)}`
    : 'Disponible vía chat';

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                <Image src={business.logoUrl || '/assets/logo-isaias-3.png'} alt={`Logo ${business.name}`} fill sizes="44px" className="object-contain" />
              </div>
              <span className="font-mono font-bold text-base text-slate-900 uppercase tracking-wider">
                {business.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md font-sans font-normal">
              {business.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-2.5 font-sans text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-[0.16em] mb-1">
              Catálogo & Taller
            </h5>
            <Link href="/catalogo" className="hover:text-[#0284C7] transition-colors">
              Catálogo de Colección
            </Link>
            <Link href="/servicios" className="hover:text-[#0284C7] transition-colors">
              Servicios de Estampado & Bordado
            </Link>
            <Link href="/tecnicas" className="hover:text-[#0284C7] transition-colors">
              Técnicas (DTF, Wilcom, Sublimación)
            </Link>
            <Link href="/personaliza" className="hover:text-[#0284C7] transition-colors">
              ¿Cómo hacer tu pedido?
            </Link>
            <Link href="/cotizar" className="hover:text-[#0284C7] transition-colors">
              Solicitud de Cotización Formal
            </Link>
            <Link href="/personaliza#faq" className="hover:text-[#0284C7] transition-colors">
              Preguntas Frecuentes (FAQ)
            </Link>
            <Link href="/#taller" className="hover:text-[#0284C7] transition-colors">
              Maquinaria & Taller Propio
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3 font-sans text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-[0.16em] mb-1">
              Ubicación & Atención
            </h5>
            <div className="flex flex-col gap-1 text-slate-600 font-normal">
              <span className="text-slate-900 font-bold">Taller Textil y Estudio:</span>
              <span>{business.streetAddress || 'Calle 16 # 19A - 45'}</span>
              <span>{business.city}, {business.department} · {business.country}</span>
              {business.googleMapsUrl && (
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#0284C7] hover:underline mt-1 font-mono text-[11px] font-bold"
                >
                  <svg className="w-3.5 h-3.5 text-[#0284C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Ver ubicación en Google Maps</span>
                  <span>↗</span>
                </a>
              )}
            </div>

            <div className="pt-1 border-t border-slate-200 flex flex-col gap-1">
              <span className="text-slate-900 font-bold">Horario de Taller:</span>
              <span className="text-slate-600 font-normal">{business.schedule || 'Lunes a Sábado: 8:00 AM – 6:00 PM'}</span>
            </div>

            {business.whatsappPhone && (
              <p className="text-[#0284C7] font-bold font-mono text-xs pt-1">
                WhatsApp Directo: {formattedPhone}
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500 font-normal">
          <span suppressHydrationWarning>&copy; {new Date().getFullYear()} {business.name}. Confección y personalización textil en Valledupar · Envíos asegurados a toda Colombia.</span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/terminos-y-condiciones" className="hover:text-[#0284C7] underline-offset-4 hover:underline transition-colors">
              Términos y Condiciones
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/politica-de-privacidad" className="hover:text-[#0284C7] underline-offset-4 hover:underline transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-slate-300">·</span>
            <span>Habeas Data Ley 1581</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
