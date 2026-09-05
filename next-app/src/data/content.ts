import { ProcessStep, FAQItem } from '@/types';
export { TECHNIQUES } from './techniques';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Idea, Logo o Foto',
    description:
      'Nos envías tu diseño, logo o foto desde el celular. En nuestro taller nos encargamos de prepararlo y adaptarlo para que tu prenda quede impecable.',
  },
  {
    num: '02',
    title: 'Selección de Prenda & Tela',
    description:
      'Eliges la prenda ideal: tela fresca piel de durazno, polo en piqué para uniformes o poliéster deportivo transpirable.',
  },
  {
    num: '03',
    title: 'Bordado, Estampado & Confección',
    description:
      'Procesamos tus prendas en Valledupar con acabados finos y duraderos: estampados suaves al tacto, colores vivos y bordados computarizados de alta definición.',
  },
  {
    num: '04',
    title: 'Control de Calidad & Entrega',
    description:
      'Inspeccionamos cada costura, puntada y acabado. Recoges directamente en nuestro punto físico en Valledupar o enviamos a todo el Cesar y Colombia.',
  },
];

export const GALLERY_IMAGES = [
  '/assets/telas/ajustadas/ajustada-1.jpg',
  '/assets/telas/cuello_tejido/cuello-1.jpg',
  '/assets/telas/qatar/qatar-1.jpg',
  '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
  '/assets/telas/ajustadas/ajustada-2.jpg',
  '/assets/telas/cuello_tejido/cuello-2.jpg',
];

export const MARQUEE_ITEMS = [
  'CONFECCIÓN EN TELAS FRESCAS',
  'ESTAMPADOS SUAVES Y DURADEROS',
  'BORDADOS COMPUTARIZADOS FINOS',
  'ESTAMPADOS FOTOGRÁFICOS A COLOR',
  'DOTACIONES EMPRESARIALES EN VALLEDUPAR',
  'DESPACHOS A TODO EL CESAR',
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Puedo llevar mis propias prendas para bordar o estampar?',
    answer:
      'Sí, puedes traer tus propias prendas, uniformes o camisetas compradas. Te realizamos el bordado computarizado o estampado de tu logo o escudo desde 6 unidades.',
  },
  {
    question: '¿Cuál es la cantidad mínima para solicitar una cotización?',
    answer:
      'En prendas individuales de catálogo y artículos como mugs o termos atendemos desde 1 unidad. Para bordados institucionales y dotaciones corporativas el mínimo sugerido es de 6 unidades.',
  },
  {
    question: '¿Cómo funciona la distribución de tallas?',
    answer:
      'En nuestro configurador puedes indicar exactamente cuántas unidades necesitas de cada talla (S, M, L, XL, etc.) y nuestro sistema validará automáticamente que la suma coincida con la cantidad total.',
  },
  {
    question: '¿Hacen envíos fuera de Valledupar?',
    answer:
      'Sí, realizamos envíos a todos los municipios del Cesar (Aguachica, Codazzi, Bosconia, La Paz) y a nivel nacional a través de empresas de transporte certificadas.',
  },
];
