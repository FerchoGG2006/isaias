import { getBusiness } from '@/data/businesses';

export const isaiasBusiness = getBusiness('isaias');

export const brand = {
  name: isaiasBusiness.name,
  city: `${isaiasBusiness.city}, ${isaiasBusiness.department} · ${isaiasBusiness.country}`,
  whatsappPhone: isaiasBusiness.whatsappPhone,
};

export function quoteHref(message = 'Hola, quiero solicitar una cotización.') {
  if (!brand.whatsappPhone) return '#contacto';

  return `https://wa.me/${brand.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
