import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { isaiasBusiness } from '@/config/brand';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | Variedades Isaías · Valledupar',
  description:
    'Términos de contratación, producción textil personalizada, tiempos de confección, garantías de estampados y políticas de entrega de Variedades Isaías.',
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-32">
        <div className="wrap max-w-4xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Términos y Condiciones' },
              ]}
            />
          </div>

          {/* Document Header */}
          <header className="pb-8 border-b border-white/10 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14151C] border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-mono mb-4">
              <span>PRODUCCIÓN BAJO PEDIDO · MARCO LEGAL COLOMBIA (LEY 1480 DE 2011)</span>
            </div>
            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.15]">
              Términos y Condiciones de Servicio y Producción
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] mt-3 font-mono">
              Última actualización: Enero de {new Date().getFullYear()} · Valledupar, Cesar, Colombia
            </p>
          </header>

          {/* Document Body */}
          <article className="prose prose-invert max-w-none text-xs sm:text-sm text-[#D0CFC9] leading-relaxed font-light flex flex-col gap-8">
            
            {/* Sección 1 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                1. Naturaleza de los Servicios y Modelo de Producción
              </h2>
              <p className="mb-2">
                <strong>{isaiasBusiness.name}</strong> opera como un taller de confección textil artesanal y personalizado con sede física en la ciudad de Valledupar, Cesar. Las prendas, estampados (DTF textil, sublimación continua) y bordados computarizados Wilcom se fabrican bajo especificaciones suministradas o acordadas con el cliente.
              </p>
              <p className="text-[#A0A0A5]">
                Al solicitar una cotización o aprobar una orden de producción por cualquiera de nuestros canales oficiales (portal web, WhatsApp oficial o atención en taller), el cliente declara conocer y aceptar plenamente los presentes términos.
              </p>
            </section>

            {/* Sección 2 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                2. Cotizaciones, Precios y Validez Comercial
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-[#D0CFC9]">
                <li>
                  <strong>Valores referenciales del catálogo:</strong> Los precios expuestos en el catálogo web son orientativos y aplican para configuraciones base. El valor definitivo se confirma formalmente en la cotización según complejidad del diseño, cantidad total de puntadas de bordado, dimensiones del estampado y volumen de piezas.
                </li>
                <li>
                  <strong>Vigencia de las cotizaciones:</strong> Toda cotización formal emitida tiene una vigencia estándar de 15 días calendario, sujeta a disponibilidad de inventario de tela y variaciones en materias primas textiles.
                </li>
                <li>
                  <strong>Descuentos por volumen:</strong> Las tarifas preferenciales por docena o producción empresarial aplican cuando la orden se produce en un único tiraje y bajo los mismos parámetros técnicos de confección.
                </li>
              </ul>
            </section>

            {/* Sección 3 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                3. Aprobación de Muestra Virtual y Producción
              </h2>
              <p className="mb-3">
                Para garantizar fidelidad absoluta con las expectativas del cliente:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 bg-[#141419] border border-white/5 rounded-xs">
                  <h3 className="font-sans font-bold text-xs uppercase text-[#C8A96E] mb-1">Muestra previa obligatoria</h3>
                  <p className="text-xs text-[#A0A0A5]">
                    Antes de estampar o bordar la producción total, se genera una muestra visual digital o prueba física de bordado para aprobación expresa del cliente vía WhatsApp o correo.
                  </p>
                </div>
                <div className="p-4 bg-[#141419] border border-white/5 rounded-xs">
                  <h3 className="font-sans font-bold text-xs uppercase text-[#C8A96E] mb-1">Responsabilidad de artes</h3>
                  <p className="text-xs text-[#A0A0A5]">
                    El cliente es responsable de verificar ortografía, colores corporativos y dimensiones en la muestra virtual. Una vez aprobada, inicia el corte y estampación.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 4 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                4. Tiempos de Entrega y Envíos
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-[#D0CFC9]">
                <li>
                  <strong>Tiempos de confección:</strong> Los tiempos habituales de taller oscilan entre 2 a 5 días hábiles para pedidos individuales o pequeños, y entre 5 a 12 días hábiles para dotaciones o volúmenes industriales, contados a partir de la confirmación del anticipo y la aprobación del diseño.
                </li>
                <li>
                  <strong>Entregas locales:</strong> Disponibles para retiro directo en el taller en Valledupar o mediante mensajería local urbana con cobro contraentrega.
                </li>
                <li>
                  <strong>Envíos nacionales:</strong> Despachamos a toda Colombia mediante transportadoras reconocidas (Inter Rapidísimo, Servientrega, Envía o Coordinadora) con número de guía rastreable y seguro de mercancía.
                </li>
              </ul>
            </section>

            {/* Sección 5 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                5. Garantía de Calidad y Derecho al Retracto
              </h2>
              <p className="mb-3">
                Conforme al Estatuto del Consumidor en Colombia (Ley 1480 de 2011, Art. 47 numeral 3):
              </p>
              <div className="p-4 bg-[#14151C] border border-[#C8A96E]/20 rounded-xs mb-3 text-xs">
                <p className="text-[#C8A96E] font-medium mb-1">Excepción al derecho de retracto en bienes confeccionados a medida:</p>
                <p className="text-[#A0A0A5]">
                  Las prendas personalizadas, estampadas con nombres/logos propios o cortadas a medidas solicitadas por el consumidor están legalmente exceptuadas del derecho de retracto general, salvo que presenten defectos de fabricación demostrables.
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-[#D0CFC9]">
                <li>
                  <strong>Garantía de fabricación:</strong> Si una prenda presenta costuras defectuosas, desprendimiento prematuro de estampado DTF o error atribuible al taller frente a la muestra aprobada, el cliente tiene hasta 30 días calendario para solicitar corrección, reposición o arreglo sin costo adicional.
                </li>
                <li>
                  <strong>Cuidado textil:</strong> La garantía no cubre deterioro por uso indebido de blanqueadores clorados, planchado directo sobre estampados o lavado a temperaturas incompatibles con telas elastizadas.
                </li>
              </ul>
            </section>

            {/* Sección 6 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                6. Propiedad Intelectual de Diseños y Logotipos
              </h2>
              <p>
                El cliente garantiza contar con la titularidad, licencia o autorización de uso de las marcas, logotipos, emblemas institucionales y diseños gráficos que suministra para producción. <strong>{isaiasBusiness.name}</strong> actúa de buena fe como prestador de servicios de estampación y manufactura.
              </p>
            </section>

            {/* Sección 7 */}
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                7. Canal de Atención y PQR
              </h2>
              <p className="mb-2">
                Para formular preguntas, peticiones, quejas o reclamos (PQR) respecto a órdenes en curso:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-[#A0A0A5]">
                <li><strong>Taller y Atención:</strong> {isaiasBusiness.streetAddress || 'Calle 16 # 19A - 45'}, Valledupar, Cesar.</li>
                <li><strong>Línea Telefónica y WhatsApp:</strong> +{isaiasBusiness.whatsappPhone}</li>
                <li><strong>Correo Electrónico:</strong> {isaiasBusiness.email || 'contacto@variedadesisaias.com'}</li>
              </ul>
            </section>

          </article>
        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
