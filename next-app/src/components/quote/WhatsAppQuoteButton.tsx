'use client';

import React from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { useQuote } from '@/context/QuoteContext';

export interface WhatsAppQuoteButtonProps extends Omit<ButtonProps, 'onClick'> {
  customMessage?: string;
  onBeforeOpen?: () => boolean | void;
}

export const WhatsAppQuoteButton: React.FC<WhatsAppQuoteButtonProps> = ({
  children = 'Solicitar Cotización por WhatsApp',
  customMessage,
  onBeforeOpen,
  variant = 'wa',
  size = 'lg',
  className = '',
  ...props
}) => {
  const { getWhatsAppUrl, business } = useQuote();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onBeforeOpen) {
      const shouldProceed = onBeforeOpen();
      if (shouldProceed === false) return;
    }

    if (customMessage) {
      const rawPhone = business.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
      const cleanPhone = rawPhone.replace(/\D/g, '');
      if (cleanPhone) {
        window.open(
          `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage)}`,
          '_blank',
          'noopener,noreferrer'
        );
        return;
      }
    }

    const { url, isConfigured } = getWhatsAppUrl();
    if (isConfigured) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
      leftIcon={
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.02c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.27-5.04-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.25 1.62 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
        </svg>
      }
      {...props}
    >
      {children}
    </Button>
  );
};
