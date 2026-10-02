'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { generateFaqSchema } from '@/lib/seo/schema';

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
  badge: string;
}

const FAQS: FaqItemData[] = [
  {
    id: 'faq-minimo-pedido',
    question: '¿Cuál es la cantidad mínima de pedido para confección o personalización?',
    badge: 'Cantidades & Pedidos',
    answer:
      'Producimos desde 1 sola prenda personalizada (ideal para muestras, regalos o uso personal) hasta cientos de unidades para dotaciones empresariales, colegios y eventos masivos. Ofrecemos tarifas y descuentos preferenciales a partir de 12, 50 y 100 prendas.',
  },
  {
    id: 'faq-wilcom-vs-dtf',
    question: '¿Qué diferencia hay entre bordado computarizado Wilcom y estampado DTF?',
    badge: 'Técnicas de Producción',
    answer:
      'El bordado computarizado Wilcom crea un relieve tridimensional de alta elegancia y resistencia extrema con hilos de poliéster brillante sobre polos piqué, chaquetas y gorras. El estampado DTF textil se transfiere a 160°C penetrando la fibra con colores fotográficos nítidos y tacto elástico muy suave, ideal para camisetas en tela piel de durazno o algodón que no se cuartea al estirarse.',
  },
  {
    id: 'faq-aprobacion-diseno',
    question: '¿Cómo funciona la revisión y aprobación del diseño antes de producir?',
    badge: 'Control de Calidad',
    answer:
      'Nunca producimos a ciegas. Una vez recibimos tu logotipo, idea o boceto, nuestro equipo digitaliza el arte y te envía una muestra virtual o montaje digital fidedigno por WhatsApp con las medidas exactas y colores pantone. Solo tras tu aprobación explícita iniciamos el corte o estampación.',
  },
  {
    id: 'faq-tiempos-envios',
    question: '¿Cuáles son los tiempos de entrega y cómo funcionan los envíos?',
    badge: 'Tiempos & Cobertura',
    answer:
      'Para pedidos express o pocas unidades despachamos en 24 a 48 horas. Para pedidos por volumen o dotaciones corporativas el tiempo habitual es de 3 a 5 días hábiles. En Valledupar entregamos en nuestro taller o domicilio directo; para el resto de Colombia despachamos con guías aseguradas por Servientrega, Interrapidísimo o Envia.',
  },
  {
    id: 'faq-medios-pago',
    question: '¿Cuáles son los métodos de pago y el proceso para formalizar mi orden?',
    badge: 'Pagos & Garantía',
    answer:
      'Aceptamos transferencias Bancolombia, Nequi, Daviplata y pago en efectivo en nuestro taller de Valledupar. Se formaliza el pedido con un anticipo del 50% al momento de aprobar el montaje digital, y el 50% restante se liquida al entregar las prendas totalmente terminadas y revisadas.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = generateFaqSchema(
    FAQS.map((f) => ({
      question: f.question,
      answer: f.answer,
    }))
  );

  return (
    <section id="faq" className="wrap py-16 sm:py-24 border-t border-white/10 scroll-mt-20">
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] font-bold">
            Claridad Comercial · Preguntas Frecuentes
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Todo lo que necesitas saber antes de ordenar.
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 font-normal max-w-xl leading-relaxed">
            Resolvemos las dudas más habituales sobre confección, bordados Wilcom, técnicas de estampado y despachos desde Valledupar.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50/90 border-[#00AFEF]/50 shadow-md ring-1 ring-[#00AFEF]/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="text-left">
                    <span className="font-sans font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 text-sm font-bold ${
                      isOpen
                        ? 'rotate-180 bg-[#00AFEF] text-white border-[#00AFEF]'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance */}
        <div className="mt-12 text-center p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs shadow-xs">
          <div className="flex flex-col sm:text-left gap-1">
            <span className="text-slate-900 font-bold text-sm">
              ¿Tienes un requerimiento especial o diseño complejo?
            </span>
            <span className="text-slate-600 font-normal">
              Escríbenos directamente y te respondemos en menos de 15 minutos en horario hábil.
            </span>
          </div>

          <Link
            href="/cotizar"
            className="shrink-0 font-bold bg-[#00AFEF] hover:bg-[#0284C7] text-white px-5 py-2.5 rounded-lg uppercase tracking-wider transition-colors shadow-md text-xs"
          >
            Preguntar al Taller
          </Link>
        </div>

      </div>
    </section>
  );
};
