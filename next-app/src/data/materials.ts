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
    name: 'Tela Piel de Durazno Licrada',
    slug: 'piel-de-durazno',
    description:
      'Tela licrada muy suave al tacto y fresca para el calor. Estira cómodamente con el cuerpo sin deformarse, no se arruga y deja los estampados con colores vivos y excelente definición.',
    weight: '220 g',
    composition: 'Tela suave licrada (Poliéster con Spandex)',
    suitableTechniques: ['dtf-full-color', 'dtf-reflectivo', 'sublimacion-4k'],
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    alt: 'Camiseta en tela piel de durazno licrada',
    points: ['Tacto muy suave', 'Estira con el cuerpo', 'No se arruga', 'Fresca y liviana'],
    technicalSpecs: ['Gramaje de 220 g', 'Elasticidad cómoda', 'Acabado suave'],
  },
  {
    id: 'algodon-pique-heavy',
    name: 'Tela Piqué para Polos',
    slug: 'algodon-pique',
    description:
      'Tela gruesa y resistente con la textura tradicional de camiseta polo. Es la mejor base para bordar el logo de tu empresa o negocio porque no se deforma ni se motosea con las lavadas.',
    weight: '230 g',
    composition: 'Algodón piqué resistente de alta durabilidad',
    suitableTechniques: ['bordado-3d', 'dtf-full-color'],
    image: '/assets/telas/cuello_tejido/cuello-1.jpg',
    alt: 'Cuello tejido y pechera en tela piqué para polos',
    points: ['Tela gruesa y resistente', 'Ideal para bordar logos', 'Aguanta trabajo diario', 'Colores firmes'],
    technicalSpecs: ['Gramaje de 230 g', 'Pechera y cuello reforzados', 'Firme para bordado'],
  },
  {
    id: 'poliester-qatar-dryfit',
    name: 'Tela Deportiva Fresca (Secado Rápido)',
    slug: 'poliester-qatar',
    description:
      'Tela deportiva liviana y transpirable que seca muy rápido. Ideal para hacer deporte, jugar fútbol o trabajar bajo el sol de Valledupar. El estampado queda fundido en la tela y nunca se borra.',
    weight: '160 g',
    composition: 'Tela deportiva microporosa',
    suitableTechniques: ['sublimacion-4k', 'dtf-reflectivo'],
    image: '/assets/telas/qatar/qatar-1.jpg',
    alt: 'Camiseta deportiva en tela fresca con estampado',
    points: ['Secado rápido', 'No pesa ni acalora', 'Transpirable', 'El estampado no se borra'],
    technicalSpecs: ['Tela liviana de 160 g', 'No destiñe', 'Secado rápido'],
  },
  {
    id: 'algodon-peinado-100',
    name: 'Algodón Suave y Fresco',
    slug: 'algodon-peinado',
    description:
      'Tela de algodón suave, fresca y cómoda al cuerpo. No da calor ni pica, perfecta para camisetas de uso diario, eventos y para prendas de niños.',
    weight: '200 g',
    composition: '100% Algodón suave',
    suitableTechniques: ['dtf-reflectivo', 'dtf-full-color', 'bordado-3d'],
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    alt: 'Camiseta de algodón suave con estampado',
    points: ['100% Algodón', 'Tacto suave', 'No pica ni acalora', 'Estampado duradero'],
    technicalSpecs: ['Gramaje de 180 a 200 g', 'Algodón peinado', 'Resistente a lavadas'],
  },
  {
    id: 'gorra-trucker',
    name: 'Gorra de Malla Ajustable',
    slug: 'gorra-trucker',
    description:
      'Gorra clásica con frente acolchado y malla trasera que deja pasar el aire para no acalorar la cabeza. Con broche ajustable en la parte trasera.',
    weight: 'Liviana',
    composition: 'Frente acolchado + Malla trasera fresca',
    suitableTechniques: ['bordado-3d', 'sublimacion-4k', 'dtf-full-color'],
    image: '/assets/img-3.jpg',
    alt: 'Gorra de malla personalizada',
    points: ['Broche ajustable', 'Malla fresca', 'Frente firme para logo', 'Uso diario y eventos'],
    technicalSpecs: ['Talla única ajustable', 'Visera curva', 'Broche snapback'],
  },
];

export const materialStories: MaterialStory[] = [
  {
    id: 'dtf',
    index: '01',
    title: 'Estampado Reflectivo',
    eyebrow: 'Brilla en la oscuridad',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    alt: 'Camiseta con estampado reflectivo que brilla de noche',
    points: ['Brillo nocturno', 'Colores nítidos', 'Buen acabado', 'No se cae al lavar'],
    technical: ['Estampado reflectivo', 'Aguanta lavadas', 'Flexible con la tela'],
  },
  {
    id: 'piel-durazno',
    index: '02',
    title: 'Piel de Durazno Licrada',
    eyebrow: 'Suave y fresca',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    alt: 'Prenda confeccionada en tela piel de durazno licrada',
    points: ['Tacto muy suave', 'Estira cómodo', 'Fresca para el calor'],
    technical: ['Tela licrada', '220 g', 'No se deforma'],
  },
  {
    id: 'bordado',
    index: '03',
    title: 'Bordado de Logos',
    eyebrow: 'Duradero y elegante',
    image: '/media/embroidery-machine.jpeg',
    alt: 'Máquina bordadora para camisetas polo y gorras',
    points: ['Bordado con relieve', 'Hilos resistentes', 'Para polos y gorras'],
    technical: ['Bordado a máquina', 'Acabado fino', 'Ideal para empresas'],
  },
];

export function getMaterialById(id: string): Material | undefined {
  return MATERIALS.find((m) => m.id === id || m.slug === id);
}
