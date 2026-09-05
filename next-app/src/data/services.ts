import { Service } from '@/domain';

export const SERVICES: Service[] = [
  {
    id: 'dtf-metro',
    slug: 'impresion-dtf-por-metro',
    businessId: 'isaias',
    title: 'Impresión DTF Textil por Metro',
    shortDescription:
      'Impresión digital DTF de 60 cm de ancho por metros lineales para estampadores, marcas y talleres.',
    fullDescription:
      'Servicio de impresión de estampados por metros continuos para aplicar en prendas. Entregamos el transfer listo para aplicar con plancha de calor en camisetas, buzos, gorras o cualquier tela.',
    tag: 'ESTAMPADOS POR METRO',
    iconSvg:
      'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    techniques: ['dtf-full-color', 'dtf-reflectivo'],
    pricing: {
      type: 'from',
      basePrice: 35000,
      unit: 'metro lineal (60cm ancho)',
      bulkDiscounts: [
        { minQty: 5, pricePerUnit: 30000 },
        { minQty: 20, pricePerUnit: 26000 },
      ],
    },
    turnaroundTime: '24 a 48 horas',
    minUnits: 1,
    features: [
      'Ancho útil de 58 cm en film premium mate',
      'Tinta blanca de alta opacidad con excelente elasticidad',
      'Poliamida termofusible de grano fino libre de estática',
      'Listo para estampar con plancha térmica de forma rápida',
    ],
    requirements: [
      'Archivo en formato PDF, PNG (fondo transparente) o AI/SVG',
      'Resolución mínima de 300 DPI al tamaño real de impresión',
      'Modo de color CMYK preferible',
    ],
  },
  {
    id: 'bordado-prendas-cliente',
    slug: 'bordado-computarizado-prendas',
    businessId: 'isaias',
    title: 'Bordado sobre Prendas Propias',
    shortDescription:
      'Trae tus propias camisas, polos, gorras o chalecos y nosotros bordamos tu logotipo con la máxima definición.',
    fullDescription:
      'Si ya compraste tus prendas o uniformes, te hacemos el bordado computarizado de tu logo o escudo con acabados duraderos y relieve fino opcional.',
    tag: 'PRENDAS PROPIAS',
    iconSvg:
      'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    image: '/media/embroidery-machine.jpeg',
    techniques: ['bordado-3d'],
    pricing: {
      type: 'on_quote',
      basePrice: 8000,
      unit: 'prenda (según puntadas y cantidad)',
    },
    turnaroundTime: '3 a 5 días hábiles',
    minUnits: 6,
    features: [
      'Digitalización precisa de tu logotipo puntada a puntada',
      'Hilos de poliéster de alta resistencia y brillo sobrio',
      'Opción de bordado plano de alta densidad o relieve 3D',
      'Muestreo previo de aprobación antes de producción masiva',
    ],
    requirements: [
      'Logotipo en imagen nítida o vector (SVG, AI, PDF)',
      'Prendas limpias y sin empaque individual engorroso',
      'Indicar ubicaciones deseadas (pechera, manga, espalda)',
    ],
  },
  {
    id: 'sublimacion-promocionales',
    slug: 'sublimacion-fotografica-promocionales',
    businessId: 'isaias',
    title: 'Sublimación Textil y Rígidos en Gran Formato',
    shortDescription:
      'Estampado fotográfico y nítido para ropa deportiva, termos, mugs, cojines y artículos promocionales.',
    fullDescription:
      'Servicio de impresión para talleres deportivos, uniformes de fútbol, banderas, manteles publicitarios y artículos como mugs y termos.',
    tag: 'ESTAMPADO & PROMOCIONALES',
    iconSvg:
      'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    image: '/media/embroidery-workstation.jpeg',
    techniques: ['sublimacion-4k'],
    pricing: {
      type: 'from',
      basePrice: 15000,
      unit: 'corte o metro',
    },
    turnaroundTime: '2 a 4 días hábiles',
    minUnits: 10,
    features: [
      'Tintas de sublimación de alta pureza cromática 4K',
      'Penetración molecular sin tacto ni taponamiento de poros',
      'Resistencia total a intemperie, sol y lavado',
    ],
    requirements: [
      'Tejido con mínimo 70% poliéster en tono blanco o claro',
      'Patrones o cortes despiezados si es confección deportiva',
    ],
  },
  {
    id: 'dotaciones-integrales',
    slug: 'dotaciones-empresariales-confeccion',
    businessId: 'isaias',
    title: 'Dotaciones Empresariales e Industriales',
    shortDescription:
      'Solución integral: suministro de tela, patronaje, confección y bordado de uniformes institucionales.',
    fullDescription:
      'Atendemos empresas, clínicas, restaurantes y colegios en Valledupar y la región del Cesar con uniformes corporativos de alto estándar, garantizando reposiciones continuas y tallajes exactos.',
    tag: 'PROYECTOS CORPORATIVOS',
    iconSvg:
      'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    image: '/assets/telas/cuello_tejido/cuello-2.jpg',
    techniques: ['bordado-3d', 'dtf-reflectivo', 'dtf-full-color'],
    pricing: {
      type: 'on_quote',
      unit: 'proyecto integral',
    },
    turnaroundTime: '8 a 15 días hábiles según volumen',
    minUnits: 12,
    features: [
      'Telas certificadas de alta durabilidad (Piqué, Lafayette, Dril)',
      'Escala completa de tallas desde XS hasta 4XL',
      'Facturación institucional y soporte personalizado en Valledupar',
      'Asesoría técnica en selección de materiales según el tipo de trabajo',
    ],
    requirements: [
      'Cantidad estimada de colaboradores o prendas',
      'Tipo de prenda requerida (polos, camisas, delantales, chalecos)',
      'Manual de marca o logotipo en formato vector',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug || s.id === slug);
}
