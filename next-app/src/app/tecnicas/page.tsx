import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TECHNIQUES } from '@/data/techniques';
import { DEFAULT_WHATSAPP_PHONE, getWhatsAppChatUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Técnicas de Personalización Textil | DTF, Bordado 3D & Sublimación · Valledupar',
  description:
    'Conoce nuestros procesos de producción: DTF textil de alta fidelidad, DTF reflectivo (160°C), bordado 3D computarizado Wilcom y sublimación fotográfica 4K (200°C). Taller especializado en Valledupar.',
};

export default function TecnicasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-800 pt-8 pb-32">
        {/* Editorial Header */}
        <section className="wrap mb-12">
          <div className="mb-4">
            <Breadcrumbs items={[{ label: 'Técnicas de Producción' }]} />
          </div>
          <div className="pb-8 border-b border-slate-200 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] block mb-3 font-bold">
              Procesos Industriales & Artesanales · Valledupar
            </span>
            <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.08]">
              Técnicas de personalización de alta costura y durabilidad.
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
              Cada prenda exige una técnica idónea. Combinamos calibración térmica precisa, digitalización computarizada y tintas de fijación elástica para asegurar estampados que no se cuartean y bordados con relieve imponente.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {TECHNIQUES.map((tech, idx) => (
              <article
                key={tech.id}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:border-[#00AFEF]/50 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                {/* Media Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Number index */}
                  <div className="absolute bottom-4 left-6 font-mono text-xs text-white uppercase tracking-wider font-bold">
                    0{idx + 1} · TÉCNICA TEXTIL
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-6">
                  <div>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-[#0284C7] transition-colors">
                      {tech.name}
                    </h2>
                    <p className="font-sans text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                      {tech.fullDescription}
                    </p>

                    {/* Technical details pill tags */}
                    <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                      {tech.machinery && (
                        <span className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg text-slate-700">
                          Maquinaria: <strong className="text-slate-900">{tech.machinery}</strong>
                        </span>
                      )}
                      <span className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg text-slate-700">
                        Pedido mín: <strong className="text-[#0284C7]">{tech.minUnits} {tech.minUnits === 1 ? 'unidad' : 'unidades'}</strong>
                      </span>
                    </div>

                    {/* Advantages List */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <span className="font-mono text-xs text-slate-900 uppercase tracking-wider font-bold block mb-2.5">
                        Ventajas de Producción:
                      </span>
                      <ul className="space-y-1.5 font-sans text-xs text-slate-600">
                        {tech.advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#00AFEF] font-bold">✓</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fabrics */}
                    <div className="mt-5 font-mono text-[11px] text-slate-500">
                      <span className="text-[#0284C7] font-semibold">Telas recomendadas: </span>
                      <span>{tech.recommendedMaterials.join(' · ')}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <Link
                      href={`/tecnicas/${tech.slug}`}
                      className="font-sans text-xs text-[#0284C7] hover:text-[#0369A1] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Ver Ficha Técnica Completa</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href={`/catalogo`}
                      className="bg-slate-100 hover:bg-[#00AFEF] text-slate-800 hover:text-white font-sans text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-xs"
                    >
                      Ver Prendas
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tailored Quote Banner */}
        <section className="wrap mt-20">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#0284C7] uppercase tracking-wider font-bold block mb-2">
                ¿No estás seguro de cuál técnica conviene a tu proyecto?
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900">
                Te asesoramos directamente según tu tela y diseño.
              </h3>
              <p className="font-sans text-sm text-slate-600 mt-2 max-w-xl font-normal">
                Envíanos tu archivo gráfico por WhatsApp y nuestros técnicos te indicarán si conviene DTF, bordado o sublimación para optimizar costos y resultado final.
              </p>
            </div>
            <a
              href={getWhatsAppChatUrl(
                DEFAULT_WHATSAPP_PHONE,
                'Hola Variedades Isaías, tengo un diseño y quiero asesoría sobre qué técnica es mejor.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-transform hover:scale-105 shrink-0"
            >
              Consultar con un Técnico
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
