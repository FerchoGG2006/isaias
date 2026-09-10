'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface LiveMockupPreviewProps {
  productImage: string;
  productTitle: string;
  logoUrl?: string;
  fileName?: string;
  onRemoveLogo?: () => void;
}

type PlacementMode = 'center' | 'pocket' | 'full';

export const LiveMockupPreview: React.FC<LiveMockupPreviewProps> = ({
  productImage,
  productTitle,
  logoUrl,
  fileName,
  onRemoveLogo,
}) => {
  const [placement, setPlacement] = useState<PlacementMode>('center');
  const [logoScale, setLogoScale] = useState<number>(30); // Porcentaje de ancho relativo (15 a 55)
  const [blendMode, setBlendMode] = useState<boolean>(true); // Modo fundido realista

  if (!logoUrl) return null;

  // Coordenadas calculadas según el área habitual de estampado
  const getPlacementStyle = () => {
    switch (placement) {
      case 'pocket': // Pechera izquierda (lado del corazón)
        return {
          top: '34%',
          left: '62%',
          transform: 'translate(-50%, -50%)',
          width: `${logoScale * 0.7}%`,
        };
      case 'full': // Estampado completo frontal
        return {
          top: '44%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${logoScale * 1.3}%`,
        };
      case 'center': // Pecho centro estándar
      default:
        return {
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${logoScale}%`,
        };
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-[#0B0C10] border border-[#C8A96E]/30 rounded-xl shadow-2xl mt-3 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Header del Mockup */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-mono text-[11px] text-[#C8A96E] uppercase tracking-wider font-bold">
            Simulador de Estampado en Vivo
          </span>
        </div>
        {onRemoveLogo && (
          <button
            type="button"
            onClick={onRemoveLogo}
            className="text-[11px] font-mono text-[#A0A0A5] hover:text-red-400 transition-colors"
          >
            Quitar logo ✕
          </button>
        )}
      </div>

      {/* Stage visual del Mockup (Prenda con logo superpuesto) */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-lg overflow-hidden bg-[#14151C] border border-white/10 select-none shadow-inner flex items-center justify-center">
        {/* Foto de la prenda base */}
        <Image
          src={productImage || '/assets/hero-main.jpg'}
          alt={`Mockup de ${productTitle}`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-center pointer-events-none brightness-95"
        />

        {/* Capa de iluminación y sombra para realismo textil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Logo / Diseño Superpuesto */}
        <div
          className="absolute transition-all duration-300 pointer-events-none z-10 flex items-center justify-center"
          style={getPlacementStyle()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt="Diseño del cliente"
            className={`max-w-full max-h-full object-contain filter drop-shadow-md transition-all ${
              blendMode ? 'mix-blend-multiply contrast-110' : ''
            }`}
          />
        </div>

        {/* Marca de agua referencial */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-[#A0A0A5] bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded">
          <span>Vista previa referencial</span>
          <span className="text-[#C8A96E] font-bold">Taller Valledupar</span>
        </div>
      </div>

      {/* Controles del Simulador */}
      <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10 font-sans text-xs">
        
        {/* Ubicación del estampado */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[#A0A0A5] font-medium text-[11px]">Ubicación del diseño:</span>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <button
              type="button"
              onClick={() => setPlacement('center')}
              className={`px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                placement === 'center'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#14151C] text-[#8A8A92] border-white/10 hover:border-white/25'
              }`}
            >
              Pecho Centro
            </button>
            <button
              type="button"
              onClick={() => setPlacement('pocket')}
              className={`px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                placement === 'pocket'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#14151C] text-[#8A8A92] border-white/10 hover:border-white/25'
              }`}
            >
              Pechera Izq.
            </button>
            <button
              type="button"
              onClick={() => setPlacement('full')}
              className={`px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                placement === 'full'
                  ? 'bg-[#C8A96E] text-[#0C0D10] font-bold border-[#C8A96E]'
                  : 'bg-[#14151C] text-[#8A8A92] border-white/10 hover:border-white/25'
              }`}
            >
              Frente Amplio
            </button>
          </div>
        </div>

        {/* Tamaño / Escala del logo */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[#A0A0A5] font-medium text-[11px] shrink-0">Tamaño del logo:</span>
          <div className="flex items-center gap-2 flex-grow max-w-[200px]">
            <input
              type="range"
              min="18"
              max="50"
              value={logoScale}
              onChange={(e) => setLogoScale(parseInt(e.target.value, 10))}
              className="w-full accent-[#C8A96E] cursor-pointer"
            />
            <span className="font-mono text-[10px] text-[#C8A96E] w-8 text-right">
              {logoScale}%
            </span>
          </div>
        </div>

        {/* Ajuste de fundido realista */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-[#8A8A92]">
            Archivo: <strong className="text-[#F4F1EA]">{fileName || 'Cargado'}</strong>
          </span>
          <button
            type="button"
            onClick={() => setBlendMode(!blendMode)}
            className="text-[10px] font-mono text-[#C8A96E] hover:underline cursor-pointer"
          >
            {blendMode ? '✓ Efecto tela activo' : 'Modo original'}
          </button>
        </div>

      </div>

    </div>
  );
};
