import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { ServiceConfigurator } from '@/components/services/ServiceConfigurator';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-24">
        
        {/* Breadcrumbs */}
        <div className="wrap mb-8">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#A0A0A5]" aria-label="Ruta de navegación">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[#F4F1EA] transition-colors">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-[#C8A96E] truncate">{service.title}</span>
          </nav>
        </div>

        {/* Service Details Layout */}
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Service Visual & Requirements (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Media Container */}
              <div className="relative aspect-[16/11] w-full bg-[#141419] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C8A96E]/30 rounded-xs">
                  {service.tag}
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-[#0e0e11] border border-white/10 rounded-sm p-6 flex flex-col gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C8A96E] font-semibold">
                  CARACTERÍSTICAS DEL SERVICIO
                </span>
                <ul className="flex flex-col gap-2.5 font-mono text-xs text-[#D0CFC9]">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#C8A96E] shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Guidelines */}
              <div className="bg-[#141419] border border-white/10 rounded-sm p-6 flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A0A0A5] font-semibold">
                  REQUISITOS DE LOS ARCHIVOS
                </span>
                <ul className="flex flex-col gap-2 font-mono text-xs text-[#A0A0A5]">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white/40">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: Info & Configurator (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Header Info */}
              <div className="flex flex-col gap-2 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
                    {service.tag}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="font-mono text-xs text-[#A0A0A5]">
                    ENTREGA: <strong className="text-[#F4F1EA]">{service.turnaroundTime}</strong>
                  </span>
                </div>

                <h1 className="font-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-sm text-[#D0CFC9] leading-relaxed mt-2 font-light">
                  {service.fullDescription}
                </p>
              </div>

              {/* Interactive Service Configurator */}
              <ServiceConfigurator service={service} />

            </div>

          </div>
        </div>

      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
