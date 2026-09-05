import { Material } from '@/domain';

export interface MaterialStory {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  points: string[];
  technical: string[];
}

export const MATERIALS: Material[] = [
  {
    id: 'piel-durazno-220g',
    name: 'Piel de Durazno Spandex',
    slug: 'piel-de-durazno',
    description:
      'Tejido de microfibra cepillada con elastano de 220 g/m². Ofrece un tacto aterciopelado sumamente suave, caída fluida y memoria elástica que abraza la silueta sin deformarse.',
    weight: '220 g',
    composition: '92% Poliéster microfibra, 8% Spandex',
    suitableTechniques: ['dtf-full-color', 'dtf-reflectivo', 'sublimacion-4k'],
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    alt: 'Detalle de tejido piel de durazno spandex 220g en prenda confeccionada',
    points: ['Tacto aterciopelado', 'Caída fluida', 'Memoria elástica 220 g/m²', 'Antiarrugas'],
    technicalSpecs: ['Gramaje: 220 g/m²', 'Elasticidad bidireccional', 'Acabado peach skin'],
  },
  {
    id: 'algodon-pique-heavy',
    name: 'Algodón Piqué Premium',
    slug: 'algodon-pique',
    description:
      'Estructura de nido de abeja tejida en hilo peinado resistente. La base predilecta para bordados computarizados en relieve gracias a su firmeza estructural.',
    weight: '230 g',
    composition: '100% Algodón peinado o 65/35 Polialgodón',
    suitableTechniques: ['bordado-3d', 'dtf-full-color'],
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    alt: 'Cuello tejido y pechera en tejido de algodón piqué',
    points: ['Estructura firme', 'Tejido nido de abeja', 'Soporte para bordado denso', 'Frescura'],
    technicalSpecs: ['Gramaje: 230 g/m²', 'Pechera reforzada', 'Cuello tejido con elasticidad'],
  },
  {
    id: 'poliester-qatar-dryfit',
    name: 'Poliéster Qatar DryFit',
    slug: 'poliester-qatar',
    description:
      'Malla técnica microporosa de absorción y secado rápido. Diseñada para estampados fotográficos nítidos sin perder su ligereza ni transpirabilidad.',
    weight: '160 g',
    composition: '100% Poliéster técnico microporoso',
    suitableTechniques: ['sublimacion-4k', 'dtf-reflectivo'],
    image: '/assets/telas/qatar/qatar-1.jpg',
    alt: 'Textura de poliéster Qatar deportivo con sublimación',
    points: ['Secado rápido', 'Cero tacto, tela fresca', 'Microporos transpirables', 'Ligereza'],
    technicalSpecs: ['Gramaje: 160 g/m²', 'Color permanente al lavado', 'Tratamiento dry fit'],
  },
  {
    id: 'algodon-peinado-100',
    name: 'Algodón Peinado Heavyweight',
    slug: 'algodon-peinado',
    description:
      'Algodón hilado en anillo de tacto compacto y superficie suave libre de impurezas. Asegura un acabado perfecto para estampados reflectivos y a color.',
    weight: '200 g',
    composition: '100% Algodón hilado en anillo',
    suitableTechniques: ['dtf-reflectivo', 'dtf-full-color', 'bordado-3d'],
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    alt: 'Prenda en algodón peinado con estampado reflectivo',
    points: ['Superficie ultra lisa', 'Hipoalergénico suave', 'Estampado resistente', 'Confort'],
    technicalSpecs: ['Gramaje: 200 g/m²', 'Hilos compactados', 'Preencogido'],
  },
];

export const materialStories: MaterialStory[] = [
  {
    id: 'dtf',
    index: '01',
    title: 'DTF reflectivo',
    eyebrow: 'Materia en movimiento',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    alt: 'Camiseta negra infantil con estampado gráfico reflectivo personalizado',
    points: ['Textura', 'Definición', 'Acabado', 'Reflejo nocturno'],
    technical: ['Estampado reflectivo', 'Alta durabilidad', 'Elasticidad alta'],
  },
  {
    id: 'piel-durazno',
    index: '02',
    title: 'Piel de durazno spandex',
    eyebrow: 'Superficie y caída',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    alt: 'Modelo usando prenda personalizada en piel de durazno spandex',
    points: ['Textura aterciopelada', 'Superficie uniforme', 'Caída anatómica'],
    technical: ['Piel de durazno spandex', '220 g', 'Memoria elástica'],
  },
  {
    id: 'bordado',
    index: '03',
    title: 'Bordado Computarizado',
    eyebrow: 'Construcción de puntada',
    image: '/media/embroidery-machine.jpeg',
    alt: 'Máquina de bordado computarizado en el taller de confección',
    points: ['Volumen tridimensional', 'Relieve táctil', 'Puntadas de alta densidad'],
    technical: ['Bordado computarizado', 'Relieve fino', 'Sobre algodón piqué'],
  },
];

export function getMaterialById(id: string): Material | undefined {
  return MATERIALS.find((m) => m.id === id || m.slug === id);
}
