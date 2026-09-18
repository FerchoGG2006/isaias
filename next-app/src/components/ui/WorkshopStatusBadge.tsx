'use client';

import React, { useState, useEffect } from 'react';

export interface WorkshopStatusBadgeProps {
  variant?: 'compact' | 'full' | 'inline';
  className?: string;
}

interface WorkshopState {
  isOpen: boolean;
  label: string;
  sublabel: string;
}

function getColombiaWorkshopState(): WorkshopState {
  try {
    // Calcular hora actual en Colombia (UTC-5) de forma robusta
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Bogota',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });

    const parts = formatter.formatToParts(now);
    let weekday = '';
    let hour = 0;

    parts.forEach((p) => {
      if (p.type === 'weekday') weekday = p.value; // Mon, Tue, Wed, Thu, Fri, Sat, Sun
      if (p.type === 'hour') hour = parseInt(p.value, 10);
    });

    // Lunes a Sábado (Mon, Tue, Wed, Thu, Fri, Sat) entre 8 AM y 6 PM (18:00)
    const isWorkday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].includes(weekday);
    const isWorkHours = hour >= 8 && hour < 18;
    const isOpen = isWorkday && isWorkHours;

    if (isOpen) {
      return {
        isOpen: true,
        label: 'Taller y asesores en línea',
        sublabel: 'Respuesta promedio en < 15 min',
      };
    } else {
      return {
        isOpen: false,
        label: 'Taller en descanso',
        sublabel: 'Deja tu mensaje y te responderemos a primera hora (8:00 AM)',
      };
    }
  } catch {
    // Fallback seguro
    return {
      isOpen: true,
      label: 'Taller y asesores en línea',
      sublabel: 'Respuesta promedio en < 15 min',
    };
  }
}

export const WorkshopStatusBadge: React.FC<WorkshopStatusBadgeProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const [status, setStatus] = useState<WorkshopState>({
    isOpen: true,
    label: 'Taller y asesores en línea',
    sublabel: 'Respuesta promedio en < 15 min',
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setStatus(getColombiaWorkshopState());
    setHasMounted(true);

    const interval = setInterval(() => {
      setStatus(getColombiaWorkshopState());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (variant === 'inline') {
    return (
      <span
        suppressHydrationWarning
        className={`inline-flex items-center gap-1.5 text-[11px] font-sans ${
          status.isOpen ? 'text-[#25D366]' : 'text-[#C8A96E]'
        } ${className}`}
      >
        <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-[#25D366] animate-pulse' : 'bg-[#C8A96E]'}`} />
        <span>{status.isOpen ? 'En línea ahora' : 'Taller en descanso'}</span>
      </span>
    );
  }

  if (variant === 'full') {
    return (
      <div
        suppressHydrationWarning
        className={`p-3 rounded-xl border transition-all ${
          status.isOpen
            ? 'bg-[#121A15] border-[#25D366]/30 text-[#F4F1EA]'
            : 'bg-[#17161E] border-[#C8A96E]/30 text-[#D0CFC9]'
        } ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">{status.isOpen ? '🟢' : '🌙'}</span>
          <span className="font-sans font-bold text-xs">
            {status.label}
          </span>
        </div>
        <p className="font-sans text-[11px] text-[#A0A0A5] mt-1 pl-6">
          {status.sublabel}
        </p>
      </div>
    );
  }

  // Variant compact (default para botones y configuradores)
  return (
    <div
      suppressHydrationWarning
      className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg border text-center transition-all ${
        status.isOpen
          ? 'bg-[#0E1511] border-[#25D366]/20 text-[#A0E0B0]'
          : 'bg-[#14151C] border-[#C8A96E]/25 text-[#E0D5B5]'
      } ${className}`}
    >
      <span className="text-xs shrink-0">{status.isOpen ? '🟢' : '🌙'}</span>
      <span className="font-sans text-[11px] font-medium leading-tight">
        <strong className={status.isOpen ? 'text-[#25D366]' : 'text-[#C8A96E]'}>
          {status.label}
        </strong>{' '}
        · {status.sublabel}
      </span>
    </div>
  );
};
