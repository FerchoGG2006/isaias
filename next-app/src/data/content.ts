import { ProcessStep, FAQItem } from '@/types';
export { TECHNIQUES } from './techniques';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Idea, Logo o Vector',
    description:
      'Nos envías tu diseño, logo o boceto. Si no lo tienes vectorizado, en nuestro taller digitalizamos y preparamos los ponchados para bordado o archivos DTF a 300 DPI.',
  },
  {
    num: '02',
    title: 'Selección de Prenda & Tejido',
    description:
      'Eliges la silueta deseada: piel de durazno 220g para suavidad, piqué heavy para polos institucionales o poliéster Qatar para rendimiento deportivo.',
  },
  {
    num: '03',
    title: 'Curado, Bordado o Fusión 4K',
    description:
      'Procesamos tus prendas en Valledupar con parámetros térmicos calibrados: DTF a 160 °C, calandrado 4K a 200 °C o bordado Wilcom de alta densidad.',
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
  'PIEL DE DURAZNO SPANDEX 220G',
  'DTF REFLECTIVO CURADO A 160 °C',
  'BORDADO 3D WILCOM',
  'SUBLIMACIÓN FOTOGRÁFICA 4K 200 °C',
  'DOTACIONES EMPRESARIALES EN VALLEDUPAR',
  'DESPACHOS A TODO EL CESAR',
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Puedo llevar mis propias prendas para bordar o estampar?',
    answer:
      'Sí, contamos con servicio de maquila para prendas proporcionadas por el cliente. Realizamos ponchados Wilcom y bordado computarizado o DTF desde 6 unidades.',
  },
  {
    question: '¿Cuál es la cantidad mínima para solicitar una cotización?',
    answer:
      'En prendas individuales de catálogo y artículos de sublimación atendemos desde 1 unidad. Para bordado 3D Wilcom y dotaciones corporativas el mínimo sugerido es de 6 unidades.',
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
