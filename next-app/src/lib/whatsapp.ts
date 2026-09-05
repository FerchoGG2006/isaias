import { Business, QuoteItem, QuoteRequest } from '@/domain';
import { getBusiness } from '@/data/businesses';

/**
 * Formatea un ítem de cotización individual en texto claro y estructurado.
 */
export function formatQuoteItemText(item: QuoteItem, index?: number): string {
  const parts: string[] = [];

  const prefix = typeof index === 'number' ? `\n📦 *ÍTEM ${index + 1}: ${item.title}*` : `*PRODUCTO:* ${item.title}`;
  parts.push(prefix);

  if (item.code) {
    parts.push(`• *Código:* ${item.code}`);
  }

  parts.push(`• *Cantidad total:* ${item.totalQuantity} ${item.totalQuantity === 1 ? 'unidad' : 'unidades'}`);

  if (item.selectedVariant) {
    parts.push(`• *Color / Variante:* ${item.selectedVariant.colorName}`);
  }

  if (item.selectedTechnique) {
    parts.push(`• *Técnica de personalización:* ${item.selectedTechnique}`);
  }

  if (item.selectedPlacements && item.selectedPlacements.length > 0) {
    parts.push(`• *Ubicación del estampado / bordado:* ${item.selectedPlacements.join(', ')}`);
  }

  if (item.sizeDistribution && Object.keys(item.sizeDistribution).length > 0) {
    const sizeLines = Object.entries(item.sizeDistribution)
      .filter(([, qty]) => qty > 0)
      .map(([size, qty]) => `   - ${size}: ${qty} und.`)
      .join('\n');
    if (sizeLines) {
      parts.push(`• *Distribución de tallas:*\n${sizeLines}`);
    }
  }

  if (item.attachment) {
    parts.push(`• *Archivo de diseño:* Adjunto (${item.attachment.name}, ${(item.attachment.size / 1024).toFixed(1)} KB)`);
  }

  if (item.notes && item.notes.trim()) {
    parts.push(`• *Notas e indicaciones:* ${item.notes.trim()}`);
  }

  if (item.estimatedSubtotal && item.pricingType === 'fixed') {
    parts.push(`• *Valor referencia unitario:* $${(item.unitPrice || 0).toLocaleString('es-CO')} COP`);
    parts.push(`• *Subtotal estimado:* $${item.estimatedSubtotal.toLocaleString('es-CO')} COP`);
  } else {
    parts.push(`• *Modalidad:* Precio bajo cotización / por volumen`);
  }

  return parts.join('\n');
}

/**
 * Genera el mensaje de WhatsApp completo para una solicitud de cotización (QuoteRequest).
 */
export function buildQuoteMessage(quote: QuoteRequest, business?: Business): string {
  const biz = business || getBusiness(quote.businessId);

  const header = [
    `*SOLICITUD DE COTIZACIÓN · ${biz.name.toUpperCase()}*`,
    `Hola, me gustaría solicitar una cotización formal para el siguiente requerimiento:`,
  ].join('\n');

  const customerDetails: string[] = [];
  if (quote.customer.name) customerDetails.push(`• *Cliente:* ${quote.customer.name}`);
  if (quote.customer.company) customerDetails.push(`• *Empresa:* ${quote.customer.company}`);
  if (quote.customer.city) customerDetails.push(`• *Ciudad / Destino:* ${quote.customer.city}`);
  if (quote.customer.phone) customerDetails.push(`• *Teléfono:* ${quote.customer.phone}`);

  const customerSection =
    customerDetails.length > 0
      ? `\n📋 *DATOS DE CONTACTO:*\n${customerDetails.join('\n')}`
      : '';

  const itemsSection = quote.items
    .map((item, idx) => formatQuoteItemText(item, quote.items.length > 1 ? idx : undefined))
    .join('\n\n');

  const totalUnits = quote.items.reduce((sum, it) => sum + it.totalQuantity, 0);

  const summaryParts = [
    `\n──────────────`,
    `📊 *RESUMEN GENERAL:*`,
    `• *Total de prendas / piezas:* ${totalUnits} unidades`,
  ];

  if (quote.estimatedTotal && quote.estimatedTotal > 0) {
    summaryParts.push(`• *Total estimado de referencia:* $${quote.estimatedTotal.toLocaleString('es-CO')} COP`);
  }

  if (quote.generalNotes && quote.generalNotes.trim()) {
    summaryParts.push(`• *Observaciones generales:* ${quote.generalNotes.trim()}`);
  }

  const footer = `\nQuedo atento a su confirmación de precios, tiempos de producción y asesoría. ¡Gracias!`;

  return [header, customerSection, itemsSection, summaryParts.join('\n'), footer]
    .filter(Boolean)
    .join('\n\n');
}

export const DEFAULT_WHATSAPP_PHONE = '573105634509';

/**
 * Obtiene la URL directa de WhatsApp validando la configuración del teléfono.
 */
export function getWhatsAppQuoteUrl(
  quote: QuoteRequest,
  business?: Business
): { url: string; isConfigured: boolean; message: string } {
  const biz = business || getBusiness(quote.businessId);
  const message = buildQuoteMessage(quote, biz);

  const rawPhone = biz.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || DEFAULT_WHATSAPP_PHONE;
  const cleanPhone = rawPhone.replace(/\D/g, '') || DEFAULT_WHATSAPP_PHONE;

  return {
    url: `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`,
    isConfigured: true,
    message,
  };
}

/**
 * Genera enlace rápido de WhatsApp para un solo ítem.
 */
export function getSingleItemWhatsAppUrl(
  item: QuoteItem,
  businessId = 'isaias'
): { url: string; isConfigured: boolean; message: string } {
  const biz = getBusiness(businessId);
  const singleQuote: QuoteRequest = {
    id: `quote-${Date.now()}`,
    businessId: biz.id,
    customer: {},
    items: [item],
    totalUnits: item.totalQuantity,
    estimatedTotal: item.estimatedSubtotal,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
  };

  return getWhatsAppQuoteUrl(singleQuote, biz);
}
