import { Category } from '@/domain';

export const CATEGORIES: Category[] = [
  {
    id: 'ropa',
    slug: 'ropa',
    businessId: 'isaias',
    name: 'Ropa & Confección',
    subtitle: 'COLECCIÓN TEXTIL & SILUETAS',
    description:
      'Prendas con patrones cuidados: camisetas ajustadas en piel de durazno 220g, polos con cuello tejido y bordado 3D, suéteres y prendas deportivas en poliéster Qatar.',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    tag: 'SPANDEX & ALGODÓN',
    order: 1,
    featured: true,
  },
  {
    id: 'accesorios',
    slug: 'accesorios',
    businessId: 'isaias',
    name: 'Accesorios & Gorras',
    subtitle: 'GORRAS TRUCKER & MEMENTOS',
    description:
      'Gorras de visera curva o plana en dril y malla, preparadas para bordado computarizado 3D de alta definición y sublimación frontal.',
    image: '/assets/img-31.jpg',
    tag: 'BORDADO TRIDIMENSIONAL',
    order: 2,
    featured: true,
  },
  {
    id: 'sublimacion',
    slug: 'sublimacion',
    businessId: 'isaias',
    name: 'Sublimación & Rígidos',
    subtitle: 'MUGS, TERMOS & SUPERFICIES',
    description:
      'Artículos cerámicos, mugs mágicos y termos de aluminio con estampación fotográfica a todo color y gran durabilidad.',
    image: '/assets/mug.png',
    tag: 'COLOR PERMANENTE',
    order: 3,
    featured: true,
  },
  {
    id: 'dotaciones',
    slug: 'dotaciones',
    businessId: 'isaias',
    name: 'Dotaciones & Uniformes',
    subtitle: 'INDUMENTARIA CORPORATIVA',
    description:
      'Polos corporativas en piqué pesado, uniformes empresariales y camisetas con bordado institucional o estampación de alta resistencia.',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    tag: 'DOTACIÓN EMPRESARIAL',
    order: 4,
    featured: true,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
