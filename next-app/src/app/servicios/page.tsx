import React from 'react';
import Link from 'next/link';
import { TECHNIQUES } from '@/data/services';

export const metadata = {
  title: 'Servicios de Personalización — Variedades Isaías',
  description: 'Servicios de producción textil bajo pedido: Estampado DTF, Bordado 3D computarizado y Sublimación 4K para tus prendas o materiales.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-16">
      <div className="wrap space-y-10">
        {/* Header */}
        <div className="border-b border-neutral-800 pb-8 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>Servicios de Producción</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Servicios en Prendas Propias
          </h1>
          <p className="max-w-2xl text-base text-neutral-400">
            ¿Ya tienes tus propias prendas o sustratos? Cotiza nuestros servicios de impresión DTF, bordado computarizado Wilcom o sublimación de alto rendimiento sin necesidad de comprar el textil.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNIQUES.map((tech) => (
            <div
              key={tech.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    {tech.id}
                  </span>
                  {tech.specification && (
                    <span className="text-[10px] bg-amber-950/80 text-amber-300 border border-amber-800/60 px-2 py-0.5 rounded font-mono">
                      {tech.specification}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-white">{tech.name}</h2>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Producción por volumen</span>
                <Link
                  href={`/servicios/${tech.id}`}
                  className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black hover:bg-amber-400 transition"
                >
                  Cotizar Servicio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
