import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/domain';
import { Badge } from '@/components/ui/Badge';

export interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const serviceHref = `/servicios/${service.slug}`;

  const renderPricing = () => {
    switch (service.pricing.type) {
      case 'fixed':
        return (
          <span className="font-mono font-bold text-sm text-[#C8A96E]">
            ${(service.pricing.basePrice || 0).toLocaleString('es-CO')} COP / {service.pricing.unit}
          </span>
        );
      case 'from':
        return (
          <div className="flex flex-col items-end">
            <span className="font-mono text-[10px] text-[#A0A0A5] uppercase">Desde</span>
            <span className="font-mono font-bold text-sm text-[#C8A96E]">
              ${(service.pricing.basePrice || 0).toLocaleString('es-CO')} COP
            </span>
          </div>
        );
      case 'on_quote':
      default:
        return (
          <span className="font-mono text-xs text-[#C8A96E] uppercase bg-black/40 px-2.5 py-1 border border-[#C8A96E]/20 rounded-xs">
            Bajo cotización
          </span>
        );
    }
  };

  return (
    <article className="group bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/50 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96E]/10">
      {/* Service Header / Media */}
      <Link href={serviceHref} className="relative aspect-[16/10] w-full overflow-hidden bg-[#141419] block">
        <div className="absolute top-3.5 left-3.5 z-10">
          <Badge variant="gold" size="sm">
            {service.tag}
          </Badge>
        </div>

        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/40 to-transparent" />
      </Link>

      {/* Service Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <Link href={serviceHref} className="group-hover:text-[#C8A96E] transition-colors">
              <h3 className="font-sans font-bold text-xl text-[#F4F1EA] tracking-tight">
                {service.title}
              </h3>
            </Link>
            {renderPricing()}
          </div>

          <p className="text-xs text-[#A0A0A5] leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-[11px] text-[#A0A0A5]">
            <div>
              <span className="text-[#F4F1EA] font-semibold">Entrega: </span>
              <span>{service.turnaroundTime}</span>
            </div>
            <div>
              <span className="text-[#F4F1EA] font-semibold">Mínimo: </span>
              <span>{service.minUnits} {service.minUnits === 1 ? 'unidad' : 'unidades'}</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#C8A96E]">
            {service.features.length} especificaciones técnicas
          </span>

          <Link
            href={serviceHref}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-bold text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors"
          >
            <span>Cotizar servicio</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
