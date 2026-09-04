'use client';

import React, { useEffect } from 'react';
import { useQuote } from '@/context/QuoteContext';

interface ToastProps {
  message?: string;
  visible?: boolean;
  onClose?: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const quoteContext = useQuote();

  const message = props.message ?? quoteContext.toastMessage ?? '';
  const visible = props.visible ?? Boolean(quoteContext.toastMessage);
  const duration = props.duration ?? 2500;
  const propOnClose = props.onClose;

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      if (propOnClose) {
        propOnClose();
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, propOnClose]);

  if (!visible || !message) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#141419] border border-[#C8A96E] text-[#F4F1EA] px-5 py-3.5 rounded-sm shadow-2xl font-mono text-xs animate-in slide-in-from-bottom duration-300"
      role="status"
      aria-live="polite"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
      <span>{message}</span>
    </div>
  );
};
