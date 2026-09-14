'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SuccessStory {
  id: string;
  client: string;
  category: string;
  volume: string;
  technique: string;
  fabric: string;
  description: string;
  image: string;
  turnaround: string;
  highlight: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'caso-dotacion-empresarial',
    client: 'Consorcio Minero & Logístico del Cesar',
    category: 'Dotación Empresarial',
    volume: '120 Unidades',
    technique: 'Bordado Computarizado Wilcom 3D',
    fabric: 'Algodón Piqué 240g de Alta Resistencia',
    description:
      'Confección de uniformes corporativos tipo polo con doble costura reforzada y bordado institucional de alta densidad que resiste lavados industriales diarios.',
    image: '/assets/img-25.jpg',
    turnaround: 'Entrega en 4 días hábiles',
    highlight: 'Cero decoloración y bordado con relieve impecable.',
  },
  {
    id: 'caso-promocion-colegio',
    client: 'Promoción Estudiantil Colegio Bilingüe',
    category: 'Camisetas de Promoción & Eventos',
    volume: '85 Unidades',
    technique: 'Estampado DTF Textil Curado a 160°C',
    fabric: 'Piel de Durazno Spandex 220g Fresca',
    description:
      'Camisetas personalizadas con ilustración detallada full color en pecho y espalda. La tela piel de durazno garantiza máxima frescura bajo el clima de Valledupar.',
    image: '/assets/img-22.jpg',
    turnaround: 'Entrega en 3 días hábiles',
    highlight: 'Tacto extra suave y cero sensación plástica.',
  },
  {
    id: 'caso-ciclismo-deportivo',
    client: 'Carrera Atlética & Ciclismo Ruta Vallenata',
    category: 'Ropa Deportiva & Eventos Masivos',
    volume: '250 Camisetas',
    technique: 'Sublimación Fotográfica 4K a 200°C',
    fabric: 'Poliéster Microperforado Dry-Fit',
    description:
      'Prendas transpirables con colores vibrantes integrados a la fibra textil que no tapan los poros del tejido, asegurando secado ultra rápido para deportistas.',
    image: '/assets/img-33.jpg',
    turnaround: 'Producción programada y despachada puntual',
    highlight: 'Resolución fotográfica con fijación permanente.',
  },
  {
    id: 'caso-clinica-medica',
    client: 'Clínica Odontológica & Estética Valledupar',
    category: 'Uniformes Médicos & Quirúrgicos',
    volume: '40 Conjuntos',
    technique: 'Bordado de Logotipo Wilcom en Relieve',
    fabric: 'Tela Antifluido Clororresistente',
    description:
      'Conjuntos quirúrgicos de alta costura confeccionados a medida, con logotipo bordado con hilo de brillo sutil en bolsillo y manga.',
    image: '/assets/img-24.jpg',
    turnaround: 'Entrega escalonada por tallas',
    highlight: 'Ajuste anatómico y durabilidad garantizada.',
  },
];

export const SuccessStoriesSection: React.FC = () => {
  return (
    <section id="casos" className="wrap py-16 sm:py-24 border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8A96E] font-semibold">
              Casos de Éxito · Producción en Valledupar
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
              Proyectos entregados con calidad de taller.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A92] font-light leading-relaxed mt-2">
              Desde pequeñas series personalizadas hasta dotaciones corporativas de cientos de prendas. Conoce algunos de los trabajos confeccionados directamente en nuestras máquinas.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/cotizar"
              className="font-mono text-xs uppercase tracking-wider bg-[#C8A96E] hover:bg-[#dbbe82] text-[#0C0D10] font-bold px-6 py-3.5 rounded-xs transition-colors shadow-lg"
            >
              Cotizar Tu Proyecto →
            </Link>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUCCESS_STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-[#12131A] border border-white/10 hover:border-[#C8A96E]/40 rounded-xs overflow-hidden transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0C0D10]">
                  <Image
                    src={story.image}
                    alt={`Proyecto textil para ${story.client} - Variedades Isaías`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#C8A96E] font-mono text-[11px] px-3 py-1 border border-white/15 rounded-xs">
                    {story.category}
                  </span>

                  {/* Volume Spec */}
                  <span className="absolute bottom-4 right-4 bg-[#14151C]/90 text-[#F4F1EA] font-mono text-[11px] px-3 py-1 border border-white/10 rounded-xs">
                    {story.volume}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col gap-4">
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-[#F4F1EA] group-hover:text-[#C8A96E] transition-colors">
                      {story.client}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="font-mono text-[10px] bg-white/5 text-[#D0CFC9] px-2.5 py-1 border border-white/10 rounded-xs">
                        {story.technique}
                      </span>
                      <span className="font-mono text-[10px] bg-white/5 text-[#D0CFC9] px-2.5 py-1 border border-white/10 rounded-xs">
                        {story.fabric}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#8A8A92] leading-relaxed font-light">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono">
                <span className="text-[#C8A96E] font-medium">
                  {story.highlight}
                </span>
                <span className="text-[#8A8A92]">
                  Tiempo: {story.turnaround}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-[#14151C] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h4 className="font-sans font-bold text-base sm:text-lg text-[#F4F1EA]">
              ¿Tienes una idea o necesitas dotación para tu empresa?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] font-light">
              Te asesoramos con muestras físicas de tela, pruebas de bordado Wilcom y montajes digitales sin compromiso.
            </p>
          </div>
          <Link
            href="/personaliza"
            className="shrink-0 font-sans text-xs uppercase tracking-wider bg-[#1C1E26] hover:bg-[#252833] border border-[#C8A96E]/40 text-[#F4F1EA] hover:text-[#C8A96E] font-semibold px-6 py-3 rounded-xs transition-colors"
          >
            Ver Proceso de Pedido →
          </Link>
        </div>

      </div>
    </section>
  );
};
