export type CatalogCategory =
  | 'dtf'
  | 'sublimacion'
  | 'bordado'
  | 'estampado'
  | 'mugs'
  | 'termos'
  | 'textil';

export type CatalogFilter = 'todos' | CatalogCategory;

export interface EditorialProduct {
  id: string;
  name: string;
  category: CatalogCategory;
  image: string | null;
  alt: string;
  material?: string;
  technique?: string;
  specifications: string[];
  colors: string[];
  featured?: boolean;
}

export interface GalleryEntry {
  id: string;
  title: string;
  category: CatalogCategory;
  image: string;
  alt: string;
  caption: string;
  size: 'portrait' | 'landscape' | 'tall' | 'wide';
  material?: string;
  technique?: string;
  specifications: string[];
}

export const catalogFilters: { id: CatalogFilter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'dtf', label: 'DTF' },
  { id: 'sublimacion', label: 'Sublimación' },
  { id: 'bordado', label: 'Bordado' },
  { id: 'estampado', label: 'Estampado' },
  { id: 'mugs', label: 'Mugs' },
  { id: 'termos', label: 'Termos' },
  { id: 'textil', label: 'Textil' },
];

export const editorialProducts: EditorialProduct[] = [
  {
    id: 'sueter-goku-anime',
    name: 'Suéter Goku Anime',
    category: 'dtf',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
    alt: 'Colección de prendas con gráficos anime personalizados',
    technique: 'DTF',
    specifications: [],
    colors: ['Negro Noche'],
    featured: true,
  },
  {
    id: 'baby-tee-cerezas-y2k',
    name: 'Baby Tee Cerezas Y2K',
    category: 'estampado',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    alt: 'Prenda ajustada personalizada en tono claro',
    material: 'Piel de durazno spandex',
    specifications: ['220 g'],
    colors: ['Rosa Pastel', 'Marfil'],
  },
  {
    id: 'polo-cuello-tejido',
    name: 'Polo Cuello Tejido',
    category: 'bordado',
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    alt: 'Prendas con cuello tejido plegadas sobre un mostrador',
    material: 'Algodón piqué',
    technique: 'Bordado 3D computarizado Wilcom',
    specifications: [],
    colors: ['Marfil', 'Azul Rey', 'Rosa Pastel'],
  },
  {
    id: 'mugs-ceramicos',
    name: 'Mugs Cerámicos',
    category: 'mugs',
    image: '/media/embroidery-workstation.jpeg',
    alt: 'Estación de trabajo real con mugs y materiales de taller',
    technique: 'Sublimación fotográfica',
    specifications: ['4K', '200°C'],
    colors: ['Marfil'],
  },
  {
    id: 'termos',
    name: 'Termos',
    category: 'termos',
    image: null,
    alt: 'Termos personalizados',
    technique: 'Sublimación fotográfica',
    specifications: ['4K', '200°C'],
    colors: [],
  },
];

export const galleryEntries: GalleryEntry[] = [
  {
    id: 'dtf-reflectivo',
    title: 'DTF reflectivo',
    category: 'dtf',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    alt: 'Niño usando una camiseta negra con gráfica personalizada',
    caption: 'Gráfica, contraste y presencia.',
    size: 'portrait',
    technique: 'DTF reflectivo',
    specifications: ['Curado a 160°C'],
  },
  {
    id: 'textile-palette',
    title: 'Textile palette',
    category: 'textil',
    image: '/assets/telas/qatar/qatar-4.jpg',
    alt: 'Prendas plegadas en verde, negro, marfil, terracotta y azul',
    caption: 'El color comienza en la tela.',
    size: 'landscape',
    specifications: [],
  },
  {
    id: 'bordado-maquina',
    title: 'Bordado computarizado',
    category: 'bordado',
    image: '/media/embroidery-machine.jpeg',
    alt: 'Máquina de bordado computarizado en el taller',
    caption: 'La preparación también es parte de la pieza.',
    size: 'tall',
    technique: 'Bordado 3D computarizado Wilcom',
    specifications: [],
  },
  {
    id: 'estampado-ajustado',
    title: 'Prenda personalizada',
    category: 'estampado',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    alt: 'Modelo usando una camiseta rosa personalizada',
    caption: 'Una silueta, un gráfico, una intención.',
    size: 'portrait',
    material: 'Piel de durazno spandex',
    specifications: ['220 g'],
  },
  {
    id: 'sublimacion-workshop',
    title: 'Sublimación fotográfica',
    category: 'sublimacion',
    image: '/media/embroidery-workstation.jpeg',
    alt: 'Operario en una estación real de personalización con materiales de taller',
    caption: 'Del archivo a la superficie.',
    size: 'tall',
    technique: 'Sublimación fotográfica',
    specifications: ['4K', '200°C'],
  },
];

export const textileSwatches = [
  { id: 'negro', name: 'Negro Noche', color: '#121313' },
  { id: 'marfil', name: 'Marfil', color: '#e8e0d1' },
  { id: 'azul', name: 'Azul Rey', color: '#144b9a' },
  { id: 'rosa', name: 'Rosa Pastel', color: '#e7adc0' },
  { id: 'terracotta', name: 'Terracotta', color: '#a65e43' },
];
