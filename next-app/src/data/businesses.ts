import { Business } from '@/domain';

export const BUSINESSES: Record<string, Business> = {
  isaias: {
    id: 'isaias',
    name: 'Variedades Isaías',
    slug: 'variedades-isaias',
    tagline: 'Estudio de Personalización Textil, Bordados & Sublimación',
    description:
      'Taller especializado en confección y personalización textil en Valledupar: estampados suaves de alta fidelidad, bordado fino computarizado, prendas en telas frescas y dotaciones empresariales.',
    city: 'Valledupar',
    department: 'Cesar',
    country: 'Colombia',
    address: 'Valledupar, Cesar · Colombia',
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') || '573105634509',
    email: 'contacto@variedadesisaias.com',
    logoUrl: '/assets/logo-isaias-3.png',
    specialties: [
      'Confección en tela fresca piel de durazno',
      'Estampado reflectivo de alta visibilidad',
      'Bordado computarizado en relieve',
      'Estampados fotográficos a todo color',
      'Dotaciones empresariales y uniformes',
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
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') || '573105634509',
    email: 'contacto@elpalaciodelasublimacion.com',
    logoUrl: '/assets/logo-palacio.png?v=3',
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
