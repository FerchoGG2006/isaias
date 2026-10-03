import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { ServiceConfigurator } from '@/components/services/ServiceConfigurator';

import { Metadata } from 'next';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Servicios de Personalización · Valledupar`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — Estampado & Bordado en Valledupar`,
      description: service.shortDescription,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      siteName: 'Variedades Isaías',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.shortDescription,
      images: [service.image],
    },
  };
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
      <main className="min-h-screen bg-white text-slate-800 pt-8 pb-24">
        
        {/* Breadcrumbs */}
        <div className="wrap mb-8">
          <nav className="flex items-center gap-2 font-mono text-xs text-slate-500" aria-label="Ruta de navegación">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-slate-900 transition-colors">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-[#0284C7] font-semibold truncate">{service.title}</span>
          </nav>
        </div>

        {/* Service Details Layout */}
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Service Visual & Requirements (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Media Container */}
              <div className="relative aspect-[16/11] w-full bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Service Features */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
                <span className="font-sans text-xs uppercase tracking-wider text-[#0284C7] font-bold">
                  Características del servicio
                </span>
                <ul className="flex flex-col gap-2.5 font-sans text-xs text-slate-600">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#00AFEF] font-mono text-xs select-none shrink-0 font-bold">—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Guidelines */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-3 shadow-xs">
                <span className="font-sans text-xs uppercase tracking-wider text-slate-900 font-bold">
                  Requisitos de los archivos
                </span>
                <ul className="flex flex-col gap-2 font-sans text-xs text-slate-600">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: Info & Configurator (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Header Info */}
              <div className="flex flex-col gap-2 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#0284C7] font-bold">
                    {service.tag}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-sans text-xs text-slate-600">
                    Entrega: <strong className="text-slate-900">{service.turnaroundTime}</strong>
                  </span>
                </div>

                <h1 className="font-sans font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed mt-2 font-normal">
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
    </>
  );
}
