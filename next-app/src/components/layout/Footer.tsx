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
    <footer className="bg-[#070708] border-t border-white/10 pt-16 pb-12 text-[#8A8A92]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C8A96E]/40 bg-[#141419] flex items-center justify-center">
                <Image src={business.logoUrl || '/assets/logo-isaias-3.png'} alt={`Logo ${business.name}`} fill sizes="40px" className="object-contain p-1" />
              </div>
              <span className="font-mono font-bold text-base text-[#F4F1EA] uppercase tracking-wider">
                {business.name}
              </span>
            </div>
            <p className="text-xs text-[#8A8A92] leading-relaxed max-w-md font-sans font-light">
              {business.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {business.specialties.map((spec) => (
                <span key={spec} className="font-mono text-[10px] bg-[#141419] text-[#C8A96E] px-2.5 py-1 border border-white/10 rounded-xs">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-2.5 font-sans text-xs">
            <h5 className="font-bold text-[#F4F1EA] uppercase tracking-[0.16em] mb-1">
              Catálogo & Taller
            </h5>
            <Link href="/catalogo" className="hover:text-[#C8A96E] transition-colors">
              Catálogo de Colección
            </Link>
            <Link href="/servicios" className="hover:text-[#C8A96E] transition-colors">
              Servicios de Estampado & Bordado
            </Link>
            <Link href="/tecnicas" className="hover:text-[#C8A96E] transition-colors">
              Técnicas (DTF, Wilcom, Sublimación)
            </Link>
            <Link href="/personaliza" className="hover:text-[#C8A96E] transition-colors">
              ¿Cómo hacer tu pedido?
            </Link>
            <Link href="/cotizar" className="hover:text-[#C8A96E] transition-colors">
              Solicitud de Cotización Formal
            </Link>
            <Link href="/casos" className="hover:text-[#C8A96E] transition-colors">
              Casos de Éxito y Dotaciones
            </Link>
            <Link href="/personaliza#faq" className="hover:text-[#C8A96E] transition-colors">
              Preguntas Frecuentes (FAQ)
            </Link>
            <Link href="/#taller" className="hover:text-[#C8A96E] transition-colors">
              Maquinaria & Taller Propio
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3 font-sans text-xs">
            <h5 className="font-bold text-[#F4F1EA] uppercase tracking-[0.16em] mb-1">
              Ubicación & Atención
            </h5>
            <div className="flex flex-col gap-1 text-[#8A8A92] font-light">
              <span className="text-[#F4F1EA] font-medium">Taller Textil y Estudio:</span>
              <span>{business.streetAddress || 'Calle 16 # 19A - 45'}</span>
              <span>{business.city}, {business.department} · {business.country}</span>
              {business.googleMapsUrl && (
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C8A96E] hover:underline mt-1 font-mono text-[11px]"
                >
                  <svg className="w-3.5 h-3.5 text-[#C8A96E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Ver ubicación en Google Maps</span>
                  <span>↗</span>
                </a>
              )}
            </div>

            <div className="pt-1 border-t border-white/10 flex flex-col gap-1">
              <span className="text-white/80 font-medium">Horario de Taller:</span>
              <span className="text-[#8A8A92] font-light">{business.schedule || 'Lunes a Sábado: 8:00 AM – 6:00 PM'}</span>
            </div>

            {business.whatsappPhone && (
              <p className="text-[#C8A96E] font-medium font-mono text-xs pt-1">
                WhatsApp Directo: {formattedPhone}
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#8A8A92] font-light">
          <span>&copy; {new Date().getFullYear()} {business.name}. Confección y personalización textil en Valledupar · Envíos asegurados a toda Colombia.</span>
          <div className="flex items-center gap-4">
            <Link href="/politica-de-privacidad" className="hover:text-[#C8A96E] underline-offset-4 hover:underline transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-white/20">·</span>
            <span>Habeas Data Ley 1581</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
