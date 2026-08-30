'use client';

import React, { useState, useEffect } from 'react';
import { useQuote } from '@/context/QuoteContext';
import { Button } from '@/components/ui/Button';

export const AdminModal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    customPhone,
    setCustomPhone,
    businessId,
    setBusinessId,
    showToast,
  } = useQuote();

  const [phoneInput, setPhoneInput] = useState(() => customPhone);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAdminOpen(false);
      }
    };
    if (isAdminOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isAdminOpen, setIsAdminOpen]);

  if (!isAdminOpen) return null;

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomPhone(phoneInput);
    showToast('✓ Teléfono de WhatsApp actualizado correctamente');
    setIsAdminOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsAdminOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-title"
    >
      <div
        className="w-full max-w-md bg-[#0e0e11] border border-white/15 rounded-sm p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-[#F4F1EA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8A96E]" />
            <h3 id="admin-title" className="font-sans font-bold text-lg text-[#F4F1EA] tracking-tight">
              Ajustes de Taller & Cotización
            </h3>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="text-[#A0A0A5] hover:text-[#F4F1EA] p-1.5 rounded-xs transition-colors"
            title="Cerrar modal"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Multi-business selector */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wider text-[#A0A0A5]">
            Unidad de Negocio Activa:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setBusinessId('isaias');
                showToast('✓ Negocio activo: Variedades Isaías');
              }}
              className={`px-3 py-2.5 rounded-xs border font-mono text-xs transition-all ${
                businessId === 'isaias'
                  ? 'bg-[#1a1a22] border-[#C8A96E] text-[#F4F1EA] font-bold shadow-md'
                  : 'bg-[#141419] border-white/10 text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              Variedades Isaías
            </button>

            <button
              type="button"
              onClick={() => {
                setBusinessId('palacio');
                showToast('✓ Negocio activo: El Palacio de la Sublimación');
              }}
              className={`px-3 py-2.5 rounded-xs border font-mono text-xs transition-all ${
                businessId === 'palacio'
                  ? 'bg-[#1a1a22] border-[#C8A96E] text-[#F4F1EA] font-bold shadow-md'
                  : 'bg-[#141419] border-white/10 text-[#A0A0A5] hover:text-[#F4F1EA]'
              }`}
            >
              El Palacio Sublimación
            </button>
          </div>
        </div>

        {/* WhatsApp Phone Config */}
        <form onSubmit={handleSavePhone} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-phone" className="font-mono text-xs uppercase tracking-wider text-[#A0A0A5]">
              Número de WhatsApp para Cotizaciones (con indicativo):
            </label>
            <input
              id="admin-phone"
              type="tel"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              placeholder="Ej: 573001234567"
              className="w-full bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] p-3 font-mono text-xs rounded-xs outline-none transition-colors placeholder:text-[#A0A0A5]/40"
            />
            <span className="font-mono text-[10px] text-[#A0A0A5]">
              Guarda el número directo donde los clientes enviarán las solicitudes generadas por el cotizador.
            </span>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setIsAdminOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="gold"
              size="md"
            >
              Guardar Configuración
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
