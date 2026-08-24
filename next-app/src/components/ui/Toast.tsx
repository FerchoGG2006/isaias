'use client';

import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

interface ToastProps {
  message?: string;
  visible?: boolean;
  onClose?: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const cartContext = useCart();

  const message = props.message ?? cartContext.toastMessage ?? '';
  const visible = props.visible ?? Boolean(cartContext.toastMessage);
  const onClose = props.onClose ?? (() => {});
  const duration = props.duration ?? 2500;

  useEffect(() => {
    if (!visible || !onClose) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast-snackbar ${visible ? 'show' : ''}`} role="status" aria-live="polite">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span>{message}</span>
    </div>
  );
};

