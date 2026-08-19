const configuredPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '');

export const brand = {
  name: 'Variedades Isaías',
  city: 'Valledupar, Cesar · Colombia',
  whatsappPhone: configuredPhone ?? '',
};

export function quoteHref(message = 'Hola, quiero solicitar una cotización.') {
  if (!brand.whatsappPhone) return '#contacto';

  return `https://wa.me/${brand.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
