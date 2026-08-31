'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export const Footer: React.FC = () => {
  const { setIsAdminOpen, business } = useQuote();

  const formattedPhone = business.whatsappPhone
    ? `+${business.whatsappPhone.slice(0, 2)} ${business.whatsappPhone.slice(2, 5)} ${business.whatsappPhone.slice(5, 8)} ${business.whatsappPhone.slice(8)}`
    : 'Disponible vía chat';

  return (
    <footer className="bg-[#070708] border-t border-white/10 pt-16 pb-12 text-[#D0CFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C8A96E]/40">
                <Image src={business.logoUrl || '/assets/logo-isaias.png'} alt={`Logo ${business.name}`} fill className="object-cover" />
              </div>
              <span className="font-mono font-bold text-base text-[#F4F1EA] uppercase tracking-wider">
                {business.name}
              </span>
            </div>
            <p className="text-xs text-[#A0A0A5] leading-relaxed max-w-md font-sans">
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
          <div className="flex flex-col gap-3 font-mono text-xs">
            <h5 className="font-bold text-[#F4F1EA] uppercase tracking-[0.2em] mb-1">
              Catálogo & Taller
            </h5>
            <Link href="/catalogo" className="hover:text-[#C8A96E] transition-colors">
              Catálogo de Prendas
            </Link>
            <Link href="/personaliza" className="hover:text-[#C8A96E] transition-colors">
              Personaliza tu Pieza
            </Link>
            <Link href="/servicios" className="hover:text-[#C8A96E] transition-colors">
              Servicios de Maquila
            </Link>
            <Link href="/cotizar" className="hover:text-[#C8A96E] transition-colors">
              Solicitud de Cotización
            </Link>
            <Link href="/#materiales" className="hover:text-[#C8A96E] transition-colors">
              Explorador de Materiales (10X)
            </Link>
            <Link href="/#galeria" className="hover:text-[#C8A96E] transition-colors">
              Archivo de Proyectos
            </Link>
            <Link href="/#taller" className="hover:text-[#C8A96E] transition-colors">
              Sobre Nuestro Taller
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <h5 className="font-bold text-[#F4F1EA] uppercase tracking-[0.2em] mb-1">
              Ubicación & Atención
            </h5>
            <p className="text-[#A0A0A5]">Valledupar, Cesar · Colombia</p>
            <p className="text-[#A0A0A5]">Atención: Lunes a Sábado</p>
            {business.whatsappPhone ? (
              <p className="text-[#C8A96E] font-bold">
                WhatsApp: {formattedPhone}
              </p>
            ) : (
              <p className="text-[#A0A0A5]">Cotizaciones directas vía web y punto físico</p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A0A0A5]">
          <span>&copy; {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</span>
          <button
            className="hover:text-[#C8A96E] underline cursor-pointer text-[11px]"
            onClick={() => setIsAdminOpen(true)}
          >
            Acceso Taller / Admin
          </button>
        </div>
      </div>
    </footer>
  );
};
