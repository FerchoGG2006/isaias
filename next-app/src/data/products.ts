import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Camiseta Básica Personalizada',
    category: 'sueteres',
    price: 35000,
    description: 'Ideal para eventos, promocionales o diseño personal. Disponible en múltiples colores.',
    tag: 'Sublimación / DTF',
    image: '/assets/img-11.jpg',
    optionsLabel: 'Tela',
    options: ['Poliéster 100% (Sublimación)', 'Algodón 100% (DTF)', 'Piel de Durazno']
  },
  {
    id: 'prod-2',
    title: 'Hoodie / Buzo con Capota',
    category: 'sueteres',
    price: 75000,
    description: 'Excelente calidad de tela perchada, abrigado y con estampado de máxima resolución.',
    tag: 'DTF / Bordado',
    image: '/assets/img-12.jpg',
    optionsLabel: 'Tela',
    options: ['Algodón Perchado Heavy', 'Poliéster Térmico']
  },
  {
    id: 'prod-3',
    title: 'Gorra Malla / Trucker',
    category: 'gorras',
    price: 25000,
    description: 'Frente acolchado blanco especial para sublimar o bordado frontal 3D.',
    tag: 'Bordado / DTF',
    image: '/assets/img-13.jpg',
    optionsLabel: 'Modelo',
    options: ['Trucker Malla', 'Dril Cerrada']
  },
  {
    id: 'prod-4',
    title: 'Mug de Cerámica 11oz',
    category: 'mugs',
    price: 18000,
    description: 'Apto para microondas. Colores vivos y durabilidad garantizada.',
    tag: 'Sublimación',
    image: '/assets/img-14.jpg',
    optionsLabel: 'Estilo',
    options: ['Blanco Clásico', 'Mágico Cambio de Color', 'Interior Color']
  },
  {
    id: 'prod-5',
    title: 'Camiseta Tipo Polo Corporativa',
    category: 'sueteres',
    price: 45000,
    description: 'Ideal para uniformes de empresas y dotación. Elegante bordado en pechera o manga.',
    tag: 'Bordado',
    image: '/assets/img-15.jpg',
    optionsLabel: 'Tela',
    options: ['Algodón Piqué 100%', 'Poliéster Piqué']
  },
  {
    id: 'prod-6',
    title: 'Termo de Aluminio 600ml',
    category: 'mugs',
    price: 32000,
    description: 'Ligero, resistente y sublimado de punta a punta. Ideal para ciclismo y gym.',
    tag: 'Sublimación',
    image: '/assets/img-16.jpg',
    optionsLabel: 'Color',
    options: ['Blanco Brillante', 'Plateado Metalizado']
  }
];
