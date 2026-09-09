import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
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
      <main className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] pt-12 pb-32">
        {/* Editorial Header */}
        <section className="wrap mb-16">
          <div className="pb-8 border-b border-white/10 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8A96E] block mb-3 font-semibold">
              Procesos Industriales & Artesanales · Valledupar
            </span>
            <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight leading-[1.08]">
              Técnicas de personalización de alta costura y durabilidad.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#A0A0A5] mt-4 leading-relaxed">
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
                className="group relative bg-[#141419] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#C8A96E]/50 transition-all duration-300 shadow-xl"
              >
                {/* Media Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-[#141419]/30 to-transparent" />

                  {/* Badge top right */}
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 font-mono text-[11px] text-[#C8A96E] font-semibold">
                    {tech.curingTemperature ? `Curado: ${tech.curingTemperature}` : tech.resolution || 'Proceso Calibrado'}
                  </div>

                  {/* Number index */}
                  <div className="absolute bottom-4 left-6 font-mono text-xs text-[#C8A96E] uppercase tracking-wider font-bold">
                    0{idx + 1} // TÉCNICA TEXTIL
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-6">
                  <div>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                      {tech.name}
                    </h2>
                    <p className="font-sans text-sm text-[#A0A0A5] mt-2.5 leading-relaxed">
                      {tech.fullDescription}
                    </p>

                    {/* Technical details pill tags */}
                    <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                      {tech.machinery && (
                        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[#D0CFC9]">
                          Maquinaria: <strong className="text-[#F4F1EA]">{tech.machinery}</strong>
                        </span>
                      )}
                      <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[#D0CFC9]">
                        Pedido mín: <strong className="text-[#C8A96E]">{tech.minUnits} {tech.minUnits === 1 ? 'unidad' : 'unidades'}</strong>
                      </span>
                    </div>

                    {/* Advantages List */}
                    <div className="mt-6 pt-5 border-t border-white/5">
                      <span className="font-mono text-xs text-[#F4F1EA] uppercase tracking-wider font-semibold block mb-2.5">
                        Ventajas de Producción:
                      </span>
                      <ul className="space-y-1.5 font-sans text-xs text-[#A0A0A5]">
                        {tech.advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C8A96E] font-bold">✓</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fabrics */}
                    <div className="mt-5 font-mono text-[11px] text-[#8A8A92]">
                      <span className="text-[#C8A96E]">Telas recomendadas: </span>
                      <span>{tech.recommendedMaterials.join(' · ')}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <Link
                      href={`/tecnicas/${tech.slug}`}
                      className="font-mono text-xs text-[#C8A96E] hover:text-[#F4F1EA] font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Ver Ficha Técnica Completa</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href={`/catalogo`}
                      className="bg-white/10 hover:bg-[#C8A96E] text-[#F4F1EA] hover:text-[#0C0D10] font-mono text-xs font-semibold px-4 py-2 rounded-lg transition-all"
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
          <div className="bg-[#141419] border border-[#C8A96E]/40 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-wider font-bold block mb-2">
                ¿No estás seguro de cuál técnica conviene a tu proyecto?
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#F4F1EA]">
                Te asesoramos directamente según tu tela y diseño.
              </h3>
              <p className="font-sans text-sm text-[#A0A0A5] mt-2 max-w-xl">
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
              className="bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-sans font-bold text-sm px-8 py-4 rounded-xl shadow-xl transition-transform hover:scale-105 shrink-0"
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
