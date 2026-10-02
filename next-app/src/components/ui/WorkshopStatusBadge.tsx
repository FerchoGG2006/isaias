'use client';

import React, { useSyncExternalStore } from 'react';

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

    // Lunes a Sábado entre 8 AM y 6 PM (18:00)
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
    return {
      isOpen: true,
      label: 'Taller y asesores en línea',
      sublabel: 'Respuesta promedio en < 15 min',
    };
  }
}

let cachedSnapshot = '';
let cachedState: WorkshopState = {
  isOpen: true,
  label: 'Taller y asesores en línea',
  sublabel: 'Respuesta promedio en < 15 min',
};

function getSnapshot(): WorkshopState {
  const current = getColombiaWorkshopState();
  const serialized = `${current.isOpen}-${current.label}-${current.sublabel}`;
  if (serialized !== cachedSnapshot) {
    cachedSnapshot = serialized;
    cachedState = current;
  }
  return cachedState;
}

const SERVER_STATE: WorkshopState = {
  isOpen: true,
  label: 'Taller y asesores en línea',
  sublabel: 'Respuesta promedio en < 15 min',
};

function getServerSnapshot(): WorkshopState {
  return SERVER_STATE;
}

function subscribe(callback: () => void): () => void {
  const interval = setInterval(callback, 60000);
  return () => clearInterval(interval);
}

export const WorkshopStatusBadge: React.FC<WorkshopStatusBadgeProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (variant === 'inline') {
    return (
      <span
        suppressHydrationWarning
        className={`inline-flex items-center gap-1.5 text-[11px] font-sans font-medium ${
          status.isOpen ? 'text-emerald-700' : 'text-amber-800'
        } ${className}`}
      >
        <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
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
            ? 'bg-emerald-50 border-emerald-200 text-slate-900 shadow-xs'
            : 'bg-amber-50 border-amber-200 text-slate-900 shadow-xs'
        } ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">{status.isOpen ? '🟢' : '🌙'}</span>
          <span className="font-sans font-bold text-xs">
            {status.label}
          </span>
        </div>
        <p className="font-sans text-[11px] text-slate-600 mt-1 pl-6">
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
          ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950 shadow-xs'
          : 'bg-amber-50/90 border-amber-200 text-amber-950 shadow-xs'
      } ${className}`}
    >
      <span className="text-xs shrink-0">{status.isOpen ? '🟢' : '🌙'}</span>
      <span className="font-sans text-[11px] font-medium leading-tight">
        <strong className={status.isOpen ? 'text-emerald-700 font-bold' : 'text-amber-800 font-bold'}>
          {status.label}
        </strong>{' '}
        · {status.sublabel}
      </span>
    </div>
  );
};
