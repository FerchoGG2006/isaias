import { Business } from '@/domain/catalog';

export const BUSINESSES: Business[] = [
  {
    id: 'variedades-isaias',
    slug: 'variedades-isaias',
    name: 'Variedades Isaías',
    whatsapp: '',
    active: true,
  },
  {
    id: 'palacio-sublimacion',
    slug: 'el-palacio-de-la-sublimacion',
    name: 'El Palacio de la Sublimación',
    whatsapp: '',
    active: true,
  },
];

export const getBusinessById = (id: Business['id']) =>
  BUSINESSES.find((business) => business.id === id);
