import { CatalogCategory } from '@/domain/catalog';

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'ropa',
    businessId: 'variedades-isaias',
    slug: 'ropa',
    name: 'Ropa & Moda',
    description: 'Camisetas, hoodies, suéteres y camisas personalizables en algodón peinado y piel de durazno.',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    active: true,
  },
  {
    id: 'cuello-tejido',
    businessId: 'variedades-isaias',
    slug: 'cuello-tejido',
    name: 'Cuello Tejido & Polos',
    description: 'Camisetas polo empresariales con pechera peinada y bordado 3D computarizado Wilcom.',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    active: true,
  },
  {
    id: 'sublimacion',
    businessId: 'palacio-sublimacion',
    slug: 'sublimacion',
    name: 'Sublimación & Mementos',
    description: 'Mugs de cerámica, termos de aluminio 600ml y prendas 100% poliéster Qatar DryFit.',
    image: '/assets/mug.png',
    active: true,
  },
  {
    id: 'dotaciones',
    businessId: 'variedades-isaias',
    slug: 'dotaciones',
    name: 'Dotaciones & Uniformes',
    description: 'Uniformes corporativos e industriales de alta durabilidad para empresas y equipos.',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
    active: true,
  },
  {
    id: 'accesorios',
    businessId: 'variedades-isaias',
    slug: 'accesorios',
    name: 'Gorras & Accesorios',
    description: 'Gorras trucker de malla, gorras dril personalizables con vinilo o bordado.',
    image: '/assets/img-31.jpg',
    active: true,
  },
];

export const getCategoryBySlug = (slug: string) =>
  CATALOG_CATEGORIES.find((cat) => cat.slug === slug);
