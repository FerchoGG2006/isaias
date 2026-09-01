import { Business } from '@/domain';

export const BUSINESSES: Record<string, Business> = {
  isaias: {
    id: 'isaias',
    name: 'Variedades Isaías',
    slug: 'variedades-isaias',
    tagline: 'Estudio de Personalización Textil, Bordados & Sublimación',
    description:
      'Taller y estudio especializado en personalización textil en Valledupar: DTF reflectivo curado a 160 °C, bordado 3D computarizado Wilcom sobre algodón piqué, sublimación fotográfica 4K a 200 °C y confección en piel de durazno spandex 220g.',
    city: 'Valledupar',
    department: 'Cesar',
    country: 'Colombia',
    address: 'Valledupar, Cesar · Colombia',
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') || '',
    email: 'contacto@variedadesisaias.com',
    logoUrl: '/assets/logo-isaias-3.png',
    specialties: [
      'Piel de durazno spandex 220g',
      'DTF reflectivo curado a 160 °C',
      'Bordado 3D Wilcom',
      'Sublimación 4K 200 °C',
      'Dotaciones empresariales',
    ],
    defaultCurrency: 'COP',
  },
  palacio: {
    id: 'palacio',
    name: 'El Palacio de la Sublimación',
    slug: 'el-palacio-de-la-sublimacion',
    tagline: 'Especialistas en Sublimación 4K, Mugs & Merchandising',
    description:
      'Soluciones en artículos promocionales, tazas cerámicas, botellas térmicas y sublimación textil deportiva en gran formato.',
    city: 'Valledupar',
    department: 'Cesar',
    country: 'Colombia',
    address: 'Valledupar, Cesar · Colombia',
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') || '',
    email: 'contacto@elpalaciodelasublimacion.com',
    logoUrl: '/assets/logo-palacio.png',
    specialties: [
      'Sublimación fotográfica 4K',
      'Mugs cerámicos y mágicos',
      'Termos de aluminio',
      'Merchandising corporativo',
    ],
    defaultCurrency: 'COP',
  },
};

export const DEFAULT_BUSINESS_ID = 'isaias';

export function getBusiness(id = DEFAULT_BUSINESS_ID): Business {
  return BUSINESSES[id] || BUSINESSES[DEFAULT_BUSINESS_ID];
}
