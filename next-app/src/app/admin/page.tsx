'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useQuote } from '@/context/QuoteContext';
import { PRODUCTS } from '@/data/products';
import { TECHNIQUES } from '@/data/techniques';

export default function AdminDashboardPage() {
  const {
    quoteItems,
    totalUnits,
    estimatedTotal,
    business,
    businessId,
    setBusinessId,
    customPhone,
    setCustomPhone,
    showToast,
  } = useQuote();

  const [phoneInput, setPhoneInput] = useState(customPhone || business.whatsappPhone || '573105634509');
  const [activeTab, setActiveTab] = useState<'resumen' | 'whatsapp' | 'catalogo'>('resumen');

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomPhone(phoneInput);
    showToast('✓ Teléfono de WhatsApp actualizado correctamente');
  };

  const isaiasProducts = PRODUCTS.filter((p) => p.businessId === 'isaias');
  const palacioProducts = PRODUCTS.filter((p) => p.businessId === 'palacio');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070709] text-[#F4F1EA] pt-8 pb-28">
        
        {/* Encabezado del Panel Administrativo */}
        <div className="wrap max-w-7xl mx-auto mb-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-xs text-[#8A8A92] mb-4">
            <Link href="/" className="hover:text-[#F4F1EA] transition-colors">INICIO</Link>
            <span>/</span>
            <span className="text-[#C8A96E]">PANEL DE GESTIÓN DEL TALLER</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-wider font-semibold">
                  Módulo de Operaciones & Despachos
                </span>
              </div>
              <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight">
                Panel Interno del Taller
              </h1>
              <p className="font-sans text-sm text-[#8A8A92] mt-1 font-light max-w-xl">
                Control de pedidos, distribución multiempresa y configuración de líneas comerciales para Valledupar.
              </p>
            </div>

            {/* Alternador rápido de empresa para pruebas */}
            <div className="flex flex-col sm:items-end gap-2">
              <span className="text-[11px] font-mono text-[#8A8A92] uppercase">Marca Activa en Sesión:</span>
              <div className="flex items-center bg-[#14151C] p-1 rounded-full border border-white/15">
                <button
                  type="button"
                  onClick={() => setBusinessId('isaias')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    businessId === 'isaias'
                      ? 'bg-[#C8A96E] text-[#0C0D10] shadow-md'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  Variedades Isaías
                </button>
                <button
                  type="button"
                  onClick={() => setBusinessId('palacio')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    businessId === 'palacio'
                      ? 'bg-[#C8A96E] text-[#0C0D10] shadow-md'
                      : 'text-[#8A8A92] hover:text-[#F4F1EA]'
                  }`}
                >
                  El Palacio
                </button>
              </div>
            </div>
          </div>

          {/* Navegación por Pestañas del Panel */}
          <div className="flex items-center gap-4 sm:gap-8 pt-6 border-b border-white/5 font-sans text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setActiveTab('resumen')}
              className={`pb-3 font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'resumen'
                  ? 'border-[#C8A96E] text-[#F4F1EA]'
                  : 'border-transparent text-[#8A8A92] hover:text-[#F4F1EA]'
              }`}
            >
              Métricas & Cotizaciones Activas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('whatsapp')}
              className={`pb-3 font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'border-[#C8A96E] text-[#F4F1EA]'
                  : 'border-transparent text-[#8A8A92] hover:text-[#F4F1EA]'
              }`}
            >
              Líneas de WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('catalogo')}
              className={`pb-3 font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'catalogo'
                  ? 'border-[#C8A96E] text-[#F4F1EA]'
                  : 'border-transparent text-[#8A8A92] hover:text-[#F4F1EA]'
              }`}
            >
              Inventario Multiempresa
            </button>
          </div>

        </div>

        {/* CONTENIDO DE LA PESTAÑA: RESUMEN Y MÉTRICAS */}
        {activeTab === 'resumen' && (
          <div className="wrap max-w-7xl mx-auto flex flex-col gap-10">
            
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Piezas en Cotización */}
              <div className="bg-[#121318] border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-3 shadow-xl">
                <span className="font-mono text-xs text-[#8A8A92] uppercase tracking-wider">
                  Piezas en Bandeja
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-sans font-extrabold text-4xl text-[#F4F1EA]">
                    {totalUnits}
                  </span>
                  <span className="font-mono text-xs text-[#C8A96E]">unidades</span>
                </div>
                <span className="text-[11px] text-[#8A8A92]">
                  {quoteItems.length} {quoteItems.length === 1 ? 'modelo configurado' : 'modelos configurados'}
                </span>
              </div>

              {/* Card 2: Valor Estimado */}
              <div className="bg-[#121318] border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-3 shadow-xl">
                <span className="font-mono text-xs text-[#8A8A92] uppercase tracking-wider">
                  Pipeline Comercial
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono font-bold text-2xl text-[#C8A96E]">
                    ${(estimatedTotal || 0).toLocaleString('es-CO')}
                  </span>
                  <span className="font-mono text-xs text-[#8A8A92]">COP</span>
                </div>
                <span className="text-[11px] text-[#8A8A92]">
                  Valor bruto preliminar
                </span>
              </div>

              {/* Card 3: Variedades Isaías */}
              <div className="bg-[#121318] border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-3 shadow-xl">
                <span className="font-mono text-xs text-[#8A8A92] uppercase tracking-wider">
                  Variedades Isaías
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-sans font-bold text-3xl text-[#F4F1EA]">
                    {isaiasProducts.length}
                  </span>
                  <span className="font-mono text-xs text-[#C8A96E]">modelos</span>
                </div>
                <span className="text-[11px] text-[#8A8A92]">
                  Confección, DTF & Bordado
                </span>
              </div>

              {/* Card 4: El Palacio */}
              <div className="bg-[#121318] border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-3 shadow-xl">
                <span className="font-mono text-xs text-[#8A8A92] uppercase tracking-wider">
                  El Palacio
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-sans font-bold text-3xl text-[#F4F1EA]">
                    {palacioProducts.length}
                  </span>
                  <span className="font-mono text-xs text-[#C8A96E]">artículos</span>
                </div>
                <span className="text-[11px] text-[#8A8A92]">
                  Mugs, Termos & Sublimación
                </span>
              </div>

            </div>

            {/* Fila de Contenido: Cotizaciones Actuales y Técnicas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Columna Izquierda: Ítems Activos (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-sans font-bold text-xl text-[#F4F1EA]">
                    Bandeja de Cotización Activa en el Dispositivo
                  </h2>
                  <Link
                    href="/cotizar"
                    className="font-mono text-xs text-[#C8A96E] hover:underline"
                  >
                    Ver página de cotización →
                  </Link>
                </div>

                {quoteItems.length === 0 ? (
                  <div className="bg-[#121318] border border-white/10 rounded-xl p-8 text-center text-xs text-[#8A8A92]">
                    No hay prendas en la bandeja de cotización en este momento.
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {quoteItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className="bg-[#121318] border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#C8A96E] w-6">
                            0{idx + 1}
                          </span>
                          <div className="flex flex-col">
                            <strong className="text-sm text-[#F4F1EA] font-sans">
                              {item.title}
                            </strong>
                            <span className="text-xs text-[#8A8A92] font-mono">
                              {item.selectedTechnique} · {item.totalQuantity} und. · {item.selectedVariant?.colorName || 'Estándar'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#C8A96E] font-bold">
                            {item.estimatedSubtotal
                              ? `$${item.estimatedSubtotal.toLocaleString('es-CO')} COP`
                              : 'A convenir'}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                            Pendiente
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Columna Derecha: Técnicas Activas del Taller (5 Cols) */}
              <div className="lg:col-span-5 bg-[#121318] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                <h3 className="font-sans font-bold text-lg text-[#F4F1EA]">
                  Técnicas de Producción Habilitadas
                </h3>
                <div className="flex flex-col gap-3">
                  {TECHNIQUES.map((tech) => (
                    <div
                      key={tech.id}
                      className="p-3 bg-[#0B0C10] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex flex-col">
                        <strong className="text-[#F4F1EA]">{tech.name}</strong>
                        <span className="text-[11px] text-[#8A8A92]">
                          {tech.curingTemperature ? `Curado: ${tech.curingTemperature}` : tech.resolution || 'Calibrado'}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#C8A96E] bg-[#C8A96E]/10 px-2 py-0.5 rounded border border-[#C8A96E]/20">
                        Mín. {tech.minUnits} und.
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* PESTAÑA: CONFIGURACIÓN DE WHATSAPP */}
        {activeTab === 'whatsapp' && (
          <div className="wrap max-w-3xl mx-auto">
            <div className="bg-[#121318] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h2 className="font-sans font-bold text-2xl text-[#F4F1EA]">
                  Configuración del Número de WhatsApp
                </h2>
                <p className="text-xs text-[#8A8A92] mt-1 font-light leading-relaxed">
                  Modifica la línea telefónica que recibe las cotizaciones generadas por los clientes. Este cambio se aplica de inmediato sin requerir nuevo despliegue.
                </p>
              </div>

              <form onSubmit={handleSavePhone} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-[#C8A96E] uppercase">
                    Número de WhatsApp con código de país (Ej: 573105634509):
                  </label>
                  <input
                    type="text"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full bg-[#0B0C10] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3.5 rounded-xl font-mono text-sm outline-none"
                  />
                  <span className="text-[11px] text-[#8A8A92]">
                    Número actual configurado en sesión: <strong>+{business.whatsappPhone}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-[#0C0D10] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    Guardar Número Operativo
                  </button>

                  <a
                    href={`https://wa.me/${business.whatsappPhone}?text=Prueba%20de%20conexión%20desde%20el%20panel%20del%20taller`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#14151C] hover:bg-[#1C1E26] border border-white/15 text-[#F4F1EA] text-xs font-mono px-5 py-3.5 rounded-xl transition-colors text-center"
                  >
                    Probar Enlace WhatsApp ↗
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* PESTAÑA: INVENTARIO MULTIEMPRESA */}
        {activeTab === 'catalogo' && (
          <div className="wrap max-w-7xl mx-auto flex flex-col gap-6">
            <h2 className="font-sans font-bold text-2xl text-[#F4F1EA]">
              Inventario Registrado ({PRODUCTS.length} productos en catálogo)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#121318] border border-white/10 rounded-xl p-4 flex gap-4 items-center"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/10">
                    <Image
                      src={prod.featuredImage || prod.images[0] || '/assets/hero-main.jpg'}
                      alt={prod.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold ${
                        prod.businessId === 'palacio' ? 'bg-[#C8A96E]/20 text-[#C8A96E]' : 'bg-white/10 text-white'
                      }`}>
                        {prod.businessId === 'palacio' ? 'El Palacio' : 'Isaías'}
                      </span>
                      <h4 className="font-sans font-bold text-sm text-[#F4F1EA] mt-1 leading-snug">
                        {prod.title}
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-[#C8A96E] mt-1">
                      {prod.pricing.basePrice ? `$${prod.pricing.basePrice.toLocaleString('es-CO')} COP` : 'Bajo cotización'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
