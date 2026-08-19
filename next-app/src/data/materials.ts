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

export const materialStories: MaterialStory[] = [
  {
    id: 'dtf',
    index: '01',
    title: 'DTF reflectivo',
    eyebrow: 'Materia en movimiento',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    alt: 'Camiseta negra infantil con estampado gráfico personalizado',
    points: ['Textura', 'Definición', 'Acabado', 'Reflejo'],
    technical: ['DTF reflectivo', 'Curado a 160°C'],
  },
  {
    id: 'piel-durazno',
    index: '02',
    title: 'Piel de durazno spandex',
    eyebrow: 'Superficie y caída',
    image: '/assets/telas/ajustadas/ajustada-1.jpg',
    alt: 'Modelo usando una camiseta rosa personalizada',
    points: ['Textura', 'Superficie', 'Acabado'],
    technical: ['Piel de durazno spandex', '220 g'],
  },
  {
    id: 'bordado',
    index: '03',
    title: 'Bordado 3D',
    eyebrow: 'Construcción de puntada',
    image: '/media/embroidery-machine.jpeg',
    alt: 'Máquina de bordado computarizado en el taller',
    points: ['Volumen', 'Relieve', 'Puntadas', 'Textura'],
    technical: ['Bordado 3D', 'Computarizado Wilcom', 'Sobre algodón piqué'],
  },
];
