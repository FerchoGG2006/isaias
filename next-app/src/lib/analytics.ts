'use client';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/**
 * Enviar evento genérico a Google Analytics 4
 */
export function trackEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function' && GA_TRACKING_ID) {
    window.gtag('event', action, params);
  }
}

/**
 * Evento cuando un usuario hace clic en cotizar por WhatsApp
 */
export function trackWhatsAppClick(source: string, additionalData?: Record<string, unknown>) {
  trackEvent('whatsapp_click', {
    source,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
}

/**
 * Evento cuando se envía o genera una cotización formal
 */
export function trackQuoteSubmitted(totalUnits: number, estimatedTotal?: number, businessId?: string) {
  trackEvent('quote_submitted', {
    total_units: totalUnits,
    estimated_total: estimatedTotal || 0,
    currency: 'COP',
    business_id: businessId || 'isaias',
  });
}

/**
 * Evento cuando un cliente visualiza un producto o configuración
 */
export function trackProductView(productId: string, productName: string) {
  trackEvent('view_item', {
    item_id: productId,
    item_name: productName,
  });
}
