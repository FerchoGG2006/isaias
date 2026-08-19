import { Technique, ProcessStep } from '@/types';

export const TECHNIQUES: Technique[] = [
  {
    id: 'tech-1',
    title: 'Sublimación',
    description: 'Ideal para poliéster blanco o tonos claros. Se fusiona directamente con la fibra, no se siente al tacto ni se cae con las lavadas.',
    iconSvg: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    id: 'tech-2',
    title: 'DTF Textil',
    description: 'Impresión digital directa a film. Perfecta para algodón de cualquier color (negro, oscuro), con acabados nítidos y elásticos.',
    iconSvg: 'M3 9h18M9 21V9'
  },
  {
    id: 'tech-3',
    title: 'Bordado',
    description: 'Textura elegante y resistencia superior para uniformes, gorras y chaquetas corporativas con acabados tridimensionales.',
    iconSvg: 'm10 15 5-3-5-3v6z'
  },
  {
    id: 'tech-4',
    title: 'Transfer & Vinilo',
    description: 'Excelente para números deportivos, logotipos unicolor y aplicaciones especiales como metalizados o reflectivos.',
    iconSvg: 'M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Diseño o Idea',
    description: 'Nos envías tu logo, foto o idea. Si no la tienes vectorizada, nosotros te ayudamos a prepararla.'
  },
  {
    num: '02',
    title: 'Selección de Prenda',
    description: 'Escoges el tipo de suéter, gorra o mug y la tela adecuada para el acabado deseado.'
  },
  {
    num: '03',
    title: 'Prensa & Estampado',
    description: 'Imprimimos o bordamos tu pedido con calibración de temperatura y presión exacta en nuestro taller.'
  },
  {
    num: '04',
    title: 'Entrega Inmediata',
    description: 'Recoges en nuestro punto físico en Valledupar o te lo enviamos directamente a tu domicilio.'
  }
];

export const GALLERY_IMAGES = [
  '/assets/new_images/media_1786601283456.png',
  '/assets/new_images/media_1786601283492.png',
  '/assets/new_images/media_1786601283558.png',
  '/assets/new_images/media_1786601283727.png',
  '/assets/new_images/media_1786601135223.png',
  '/assets/new_images/media_1786601143574.png'
];

export const MARQUEE_ITEMS = [
  'SUBLIMACIÓN DE ALTA DEFINICIÓN',
  'DTF TEXTIL PREMIUM',
  'BORDADO COMPUTARIZADO',
  'MUGS Y GORRAS PERSONALIZADAS',
  'ENVÍOS A TODO EL CESAR'
];
