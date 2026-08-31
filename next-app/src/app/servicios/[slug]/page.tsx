import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TECHNIQUES, getTechnique } from '@/data/services';
import { ProductConfigurator } from '@/components/product/ProductConfigurator';
import { Product, TechniqueId } from '@/domain/catalog';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TECHNIQUES.map((tech) => ({
    slug: tech.id,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const technique = getTechnique(slug as TechniqueId);

  if (!technique) {
    notFound();
  }

  // Create a virtual Service product to leverage the master ProductConfigurator!
  const serviceProduct: Product = {
    id: `servicio-${technique.id}`,
    businessId: 'variedades-isaias',
    categoryId: 'servicios',
    slug: technique.id,
    code: `SRV-${technique.id.toUpperCase()}`,
    name: `Servicio de ${technique.name} (Prenda Propia)`,
    description: technique.description,
    availability: 'available',
    pricing: {
      mode: 'quote',
      currency: 'COP',
    },
    materials: [
      {
        id: 'prenda-cliente',
        name: 'Prenda o Sustrato del Cliente',
        specification: 'El cliente suministra las prendas físicas para producción',
      },
    ],
    techniques: [technique.id],
    capabilities: [
      'size',
      'size_distribution',
      'technique',
      'quantity',
      'design_upload',
      'notes',
    ],
    variants: [],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/assets/telas/cuello_tejido/cuello-2.jpg'],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
      <div className="wrap space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/servicios" className="hover:text-white transition">
            Servicios
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{technique.name}</span>
        </nav>

        {/* Service Header */}
        <div className="border-b border-neutral-800 pb-8 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>Servicio de Producción en Prenda Externa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Cotizar Servicio de {technique.name}
          </h1>
          <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
            {technique.description}{' '}
            {technique.specification && `(${technique.specification})`}
          </p>
        </div>

        {/* Configurator */}
        <div className="space-y-6">
          <div className="border-l-2 border-amber-500 pl-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-200">
              Detalles del Servicio a Cotizar
            </h2>
            <p className="text-xs text-neutral-400">
              Ingresa el número de piezas, adjunta el logo y especifica detalles de colocación.
            </p>
          </div>

          <ProductConfigurator product={serviceProduct} />
        </div>
      </div>
    </div>
  );
}
