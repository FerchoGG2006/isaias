import { Technique, TechniqueId } from '@/domain/catalog';

export const TECHNIQUES: Technique[] = [
  {
    id: 'dtf',
    name: 'DTF',
    description: 'Personalización mediante transferencia DTF para diseños detallados y de alto impacto visual.',
  },
  {
    id: 'dtf-reflectivo',
    name: 'DTF Reflectivo',
    description: 'Personalización reflectiva para aplicaciones donde la visibilidad bajo luz es parte del acabado.',
    specification: 'Curado a 160 °C.',
  },
  {
    id: 'sublimacion',
    name: 'Sublimación',
    description: 'Sublimación fotográfica para productos y prendas compatibles.',
    specification: '4K, 200 °C.',
  },
  {
    id: 'bordado-3d',
    name: 'Bordado 3D',
    description: 'Bordado computarizado para una presencia textil de mayor relieve.',
    specification: 'Computarizado Wilcom sobre algodón piqué cuando corresponda.',
  },
  {
    id: 'estampado',
    name: 'Estampado',
    description: 'Personalización textil según el producto, diseño y acabado requerido.',
  },
];

export const getTechnique = (id: TechniqueId) =>
  TECHNIQUES.find((technique) => technique.id === id);

export const SERVICES = [
  {
    id: 'dtf',
    title: 'DTF',
    techniqueId: 'dtf' as TechniqueId,
  },
  {
    id: 'bordado',
    title: 'Bordado',
    techniqueId: 'bordado-3d' as TechniqueId,
  },
  {
    id: 'sublimacion',
    title: 'Sublimación',
    techniqueId: 'sublimacion' as TechniqueId,
  },
  {
    id: 'estampado',
    title: 'Estampado',
    techniqueId: 'estampado' as TechniqueId,
  },
];
