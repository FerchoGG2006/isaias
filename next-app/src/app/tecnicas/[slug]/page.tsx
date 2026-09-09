import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { TECHNIQUES, getTechniqueById } from '@/data/techniques';
import { PRODUCTS } from '@/data/products';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TECHNIQUES.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const technique = getTechniqueById(slug);

  if (!technique) {
    return { title: 'Técnica no encontrada' };
  }

  return {
    title: `${technique.name} | Ficha Técnica de Personalización · Variedades Isaías`,
    description: `${technique.shortDescription} Maquinaria: ${technique.machinery || 'Especializada'}. Curado: ${technique.curingTemperature || 'Calibrado'}. Taller de confección y estampado en Valledupar.`,
  };
}

export default async function TecnicaDetailPage({ params }: Props) {
  const { slug } = await params;
  const technique = getTechniqueById(slug);

  if (!technique) {
    notFound();
  }

  // Buscar prendas del catálogo que soporten esta técnica
  const compatibleProducts = PRODUCTS.filter((p) =>
    p.customCapabilities?.allowedTechniques?.some(
      (techId) => techId === technique.id || techId === technique.slug
    )
  );

  const cleanPhone = '573105634509';
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `¡Hola Variedades Isaías! Me interesa cotizar una producción con la técnica: ${technique.name}.`
  )}`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] pt-8 pb-32">
        {/* Breadcrumb */}
        <div className="wrap mb-8">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#8A8A92]">
            <Link href="/" className="hover:text-[#C8A96E] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/tecnicas" className="hover:text-[#C8A96E] transition-colors">
              Técnicas
            </Link>
            <span>/</span>
            <span className="text-[#F4F1EA]">{technique.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="wrap mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Media */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#141419] border border-white/10 shadow-2xl">
              <Image
                src={technique.image}
                alt={technique.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-wider font-bold">
                  Proceso Certificado
                </span>
                {technique.curingTemperature && (
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 font-mono text-xs text-[#F4F1EA]">
                    Fijación: {technique.curingTemperature}
                  </span>
                )}
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.2em] font-semibold block mb-2">
                  Especificación de Taller
                </span>
                <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight">
                  {technique.name}
                </h1>
                <p className="font-sans text-base text-[#D0CFC9] mt-4 leading-relaxed">
                  {technique.fullDescription}
                </p>

                {/* Technical Specs Grid */}
                <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-xs">
                  <div className="bg-[#141419] p-4 rounded-xl border border-white/10">
                    <span className="text-[#8A8A92] block text-[11px]">Temperatura / Calibración:</span>
                    <strong className="text-[#C8A96E] text-sm mt-1 block">
                      {technique.curingTemperature || 'Calibrado según tejido'}
                    </strong>
                  </div>

                  <div className="bg-[#141419] p-4 rounded-xl border border-white/10">
                    <span className="text-[#8A8A92] block text-[11px]">Tiraje Mínimo:</span>
                    <strong className="text-[#F4F1EA] text-sm mt-1 block">
                      Desde {technique.minUnits} {technique.minUnits === 1 ? 'unidad' : 'unidades'}
                    </strong>
                  </div>

                  {technique.machinery && (
                    <div className="col-span-2 bg-[#141419] p-4 rounded-xl border border-white/10">
                      <span className="text-[#8A8A92] block text-[11px]">Maquinaria de Precisión:</span>
                      <strong className="text-[#F4F1EA] text-sm mt-1 block font-sans">
                        {technique.machinery}
                      </strong>
                    </div>
                  )}
                </div>

                {/* Advantages */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#C8A96E] font-bold mb-3">
                    Propiedades y Resistencia
                  </h3>
                  <ul className="space-y-2 font-sans text-sm text-[#A0A0A5]">
                    {technique.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C8A96E] font-bold text-base leading-none">✓</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Fabrics */}
                <div className="mt-6 p-4 bg-[#141419]/60 rounded-xl border border-white/5 font-mono text-xs">
                  <span className="text-[#8A8A92] block mb-1">Tejidos recomendados para esta técnica:</span>
                  <span className="text-[#C8A96E] font-medium">
                    {technique.recommendedMaterials.join(' · ')}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-sans font-bold text-sm px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
                  </svg>
                  <span>Cotizar con {technique.name}</span>
                </a>

                <Link
                  href="/catalogo"
                  className="w-full sm:w-auto bg-[#141419] hover:bg-white/10 border border-white/15 text-[#F4F1EA] font-mono text-xs font-semibold px-6 py-4 rounded-xl transition-colors text-center"
                >
                  Explorar Prendas Compatibles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Compatible Products in Catalog */}
        {compatibleProducts.length > 0 && (
          <section className="wrap mt-20 pt-12 border-t border-white/10">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-wider font-semibold">
                  Prendas del Taller
                </span>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA] mt-1">
                  Modelos que soportan {technique.name}
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="font-mono text-xs text-[#C8A96E] hover:underline"
              >
                Ver todo el catálogo →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {compatibleProducts.map((prod) => (
                <EditorialProductItem key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
