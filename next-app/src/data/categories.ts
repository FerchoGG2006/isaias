import { Category } from '@/domain';

export const CATEGORIES: Category[] = [
  {
    id: 'ropa',
    slug: 'ropa',
    businessId: 'isaias',
    name: 'Camisetas & Ropa',
    subtitle: 'CAMISETAS, POLOS Y PRENDAS DE DIARIO',
    description:
      'Camisetas licradas en piel de durazno suave, camisetas tipo polo con cuello tejido, camisetas deportivas frescas y prendas cómodas para el día a día en Valledupar.',
    image: '/assets/img-21.jpg',
    tag: 'CAMISETAS Y POLOS',
    order: 1,
    featured: true,
  },
  {
    id: 'accesorios',
    slug: 'accesorios',
    businessId: 'isaias',
    name: 'Gorras & Accesorios',
    subtitle: 'GORRAS BORDADAS Y ESTAMPADAS',
    description:
      'Gorras de malla frescas y gorras cerradas personalizadas con el logo de tu empresa, negocio o evento, bordadas con relieve o estampadas.',
    image: '/assets/img-3.jpg',
    tag: 'GORRAS CON TU LOGO',
    order: 2,
    featured: true,
  },
  {
    id: 'sublimacion',
    slug: 'sublimacion',
    businessId: 'isaias',
    name: 'Sublimación & Estampados',
    subtitle: 'ESTAMPADOS A TODO COLOR',
    description:
      'Estampados que no se caen ni se borran con las lavadas, en camisetas deportivas, tazas, termos y recuerdos personalizados.',
    image: '/assets/telas/qatar/qatar-1.jpg',
    tag: 'A TODO COLOR',
    order: 3,
    featured: true,
  },
  {
    id: 'dotaciones',
    slug: 'dotaciones',
    businessId: 'isaias',
    name: 'Dotaciones & Uniformes',
    subtitle: 'UNIFORMES PARA EMPRESAS Y NEGOCIOS',
    description:
      'Camisetas polo resistentes, gorras y combos de uniforme completos para el personal de tu empresa, restaurante, taller o almacén.',
    image: '/assets/img-4.jpg',
    tag: 'UNIFORMES COMPLETOS',
    order: 4,
    featured: true,
  },
  {
    id: 'merchandising',
    slug: 'merchandising',
    businessId: 'isaias',
    name: 'Publicidad & Eventos',
    subtitle: 'ARTÍCULOS PERSONALIZADOS PARA MARCAS',
    description:
      'Gorras, camisetas para eventos, termos y artículos publicitarios para promocionar tu marca o celebrar actividades en Valledupar.',
    image: '/assets/img-3.jpg',
    tag: 'PUBLICIDAD Y EVENTOS',
    order: 5,
    featured: true,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
