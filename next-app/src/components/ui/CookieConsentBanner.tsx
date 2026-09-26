'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya tomó una decisión previa
    const consent = localStorage.getItem('vi_cookie_consent');
    if (!consent) {
      // Pequeño retardo para no interferir con la carga inicial
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vi_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('vi_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Consentimiento de cookies"
      role="region"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#12131A]/95 backdrop-blur-xl border border-[#C8A96E]/30 p-5 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="flex flex-col gap-3 font-sans text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#C8A96E] font-semibold text-xs tracking-wider uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
            <span>Privacidad y Cookies</span>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            className="text-[#8A8A92] hover:text-[#F4F1EA] text-sm p-1 cursor-pointer transition-colors"
            aria-label="Cerrar aviso de cookies"
          >
            ✕
          </button>
        </div>

        <p className="text-[#D0CFC9] leading-relaxed font-light">
          Utilizamos cookies esenciales y analíticas anónimas para optimizar tu experiencia en el catálogo y facilitar tus cotizaciones textiles.{' '}
          <Link
            href="/politica-de-privacidad"
            className="text-[#C8A96E] hover:underline underline-offset-2 font-normal"
          >
            Conoce nuestra Política de Privacidad
          </Link>.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 bg-[#C8A96E] hover:bg-[#dbbe82] text-[#0C0D10] font-bold py-2.5 px-3 rounded-lg text-center transition-all cursor-pointer shadow-md text-xs uppercase tracking-wider"
          >
            Aceptar todas
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-[#A0A0A5] hover:text-[#F4F1EA] py-2.5 px-3 rounded-lg text-center transition-all cursor-pointer text-xs font-medium"
          >
            Solo esenciales
          </button>
        </div>
      </div>
    </aside>
  );
};
