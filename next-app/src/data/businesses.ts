import { Business } from '@/domain/catalog';

export const BUSINESSES: Business[] = [
  {
    id: 'variedades-isaias',
    slug: 'variedades-isaias',
    name: 'Variedades Isaías',
    whatsapp: process.env.NEXT_PUBLIC_ISAIAS_WHATSAPP || '573105634509',
    active: true,
  },
  {
    id: 'palacio-sublimacion',
    slug: 'el-palacio-de-la-sublimacion',
    name: 'El Palacio de la Sublimación',
    whatsapp: process.env.NEXT_PUBLIC_PALACIO_WHATSAPP || '573105634509',
    active: true,
  },
];

export const getBusinessById = (id: Business['id']) =>
  BUSINESSES.find((business) => business.id === id);

export const DEFAULT_BUSINESS = BUSINESSES[0];

