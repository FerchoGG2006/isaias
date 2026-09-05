import { Product } from '@/domain';

export interface ProductHotspot {
  id: string;
  number: number;
  x: number; // Porcentaje horizontal (0 - 100)
  y: number; // Porcentaje vertical (0 - 100)
  label: string; // Título corto (e.g. "Cuello & Rib")
  title: string; // Título técnico (e.g. "Cuello Peinado Anti-Deformación")
  description: string; // Detalle técnico verídico
  badge: string; // e.g. "CONFECCIÓN", "DTF 160°C", "SPANDEX 220G", "WILCOM 3D"
  category: 'fabric' | 'technique' | 'finish' | 'fit';
}

/**
 * Hotspots técnicos específicos por silueta o tipología de producto
 * Cumple rigurosamente con las especificaciones verídicas del atelier:
 * - Piel de durazno spandex — 220 g
 * - DTF reflectivo / textil — curado a 160 °C
 * - Bordado 3D computarizado Wilcom — sobre algodón piqué
 * - Sublimación fotográfica — 4K, 200 °C
 */
export const SILHOUETTE_HOTSPOTS: Record<string, ProductHotspot[]> = {
  'ajustada-spandex': [
    {
      id: 'cuello',
      number: 1,
      x: 50,
      y: 16,
      label: 'Cuello & Escote',
      title: 'Cuello Redondo con Doble Pespunte',
      description:
        'Confección con rib peinado de alta densidad y costura reforzada hombro a hombro que mantiene la memoria elástica sin deformarse con el uso continuo.',
      badge: 'CONFECCIÓN',
      category: 'finish',
    },
    {
      id: 'estampado-pecho',
      number: 2,
      x: 50,
      y: 37,
      label: 'Estampado Suave',
      title: 'Estampado Digital de Alta Fidelidad',
      description:
        'Estampación suave fijada con calor que se estira con la prenda sin agrietarse ni perder intensidad de color con los lavados.',
      badge: 'ESTAMPADO SUAVE',
      category: 'technique',
    },
    {
      id: 'tejido-cuerpo',
      number: 3,
      x: 32,
      y: 62,
      label: 'Sustrato Textil',
      title: 'Piel de Durazno Spandex 220 g/m²',
      description:
        'Tejido premium compuesto por 92% microfibra de poliéster y 8% spandex. Tacto aterciopelado ultrasuave, caída fluida y compresión anatómica confortable.',
      badge: 'SPANDEX 220G',
      category: 'fabric',
    },
    {
      id: 'dobladillo',
      number: 4,
      x: 68,
      y: 86,
      label: 'Dobladillo Inferior',
      title: 'Remate Doble Aguja Calibre 40/2',
      description:
        'Costura perimetral reforzada con hilo de alta resistencia a la tracción que asegura estabilidad dimensional tras múltiples lavados en agua fría.',
      badge: 'CONFECCIÓN FINA',
      category: 'finish',
    },
  ],

  'baby-tee': [
    {
      id: 'cuello-mini',
      number: 1,
      x: 50,
      y: 18,
      label: 'Escote Y2K',
      title: 'Cuello Mini Rib Ajustado',
      description:
        'Patrón de silueta noventera con cuello cerrado anatómico elaborado en tejido canalé fino de gran recuperación.',
      badge: 'SILUETA Y2K',
      category: 'fit',
    },
    {
      id: 'pecho-crop',
      number: 2,
      x: 50,
      y: 40,
      label: 'Foco Gráfico',
      title: 'Estampación DTF Full Color',
      description:
        'Impresión de alta resolución fotográfica con tintas ecológicas y curado térmico de precisión para colores vivos y bordes nítidos.',
      badge: 'FULL COLOR',
      category: 'technique',
    },
    {
      id: 'corte-crop',
      number: 3,
      x: 50,
      y: 78,
      label: 'Corte a la Cintura',
      title: 'Largo Crop Estructurado',
      description:
        'Patrón femenino de largo a la pretina con caída firme en piel de durazno spandex de 220 g/m².',
      badge: 'CROP FIT',
      category: 'fit',
    },
  ],

  'polo-pique': [
    {
      id: 'cuello-jacquard',
      number: 1,
      x: 50,
      y: 15,
      label: 'Cuello Tejido',
      title: 'Cuello en Jacquard Peinado',
      description:
        'Tejido plano tupido de alto gramaje con entretela termo-adhesiva que garantiza que las puntas del cuello no se enrollen ni pierdan su posición vertical.',
      badge: 'CUELLO TEJIDO',
      category: 'finish',
    },
    {
      id: 'bordado-fino',
      number: 2,
      x: 40,
      y: 33,
      label: 'Bordado Institucional',
      title: 'Bordado Computarizado en Relieve',
      description:
        'Bordado de alta definición programado puntada a puntada con hilo satinado y acabado fino de gran durabilidad.',
      badge: 'BORDADO EN RELIEVE',
      category: 'technique',
    },
    {
      id: 'tejido-pique',
      number: 3,
      x: 35,
      y: 65,
      label: 'Cuerpo Textil',
      title: 'Algodón Piqué Heavyweight 230 g/m²',
      description:
        'Estructura de nido de abeja tradicional de alto gramaje con excelente transpirabilidad y tratamiento antipilling para uso continuo.',
      badge: 'PIQUÉ 230G',
      category: 'fabric',
    },
    {
      id: 'mangas-rib',
      number: 4,
      x: 82,
      y: 42,
      label: 'Puño de Manga',
      title: 'Rib al Tono con Remate Elástico',
      description:
        'Terminación en tejido de puño con tensión calibrada para un calce impecable en los brazos sin apretar en jornadas laborales.',
      badge: 'CONFORT',
      category: 'finish',
    },
  ],

  'deportivo-qatar': [
    {
      id: 'cuello-dryfit',
      number: 1,
      x: 50,
      y: 17,
      label: 'Sesgo de Cuello',
      title: 'Sesgo Elástico Anatómico',
      description:
        'Costura plana sin roce para máxima comodidad durante entrenamientos de alto impacto.',
      badge: 'DRYFIT',
      category: 'finish',
    },
    {
      id: 'sublimacion-4k',
      number: 2,
      x: 50,
      y: 44,
      label: 'Estampado Transpirable',
      title: 'Estampado Fotográfico sin Tacto',
      description:
        'El color penetra directamente en las fibras de la tela sin dejar capas plásticas: la prenda se siente fresca, ligera y respira al 100%.',
      badge: 'CERO TACTO',
      category: 'technique',
    },
    {
      id: 'tejido-microporoso',
      number: 3,
      x: 30,
      y: 68,
      label: 'Estructura Microporosa',
      title: 'Poliéster Qatar DryFit 160 g/m²',
      description:
        'Micro-perforaciones microscópicas para transporte acelerado del sudor hacia el exterior y secado casi instantáneo.',
      badge: '160 G/M²',
      category: 'fabric',
    },
  ],

  'gorra-trucker': [
    {
      id: 'frontal-3d',
      number: 1,
      x: 50,
      y: 42,
      label: 'Panel Frontal',
      title: 'Frontal Acolchado con Bordado 3D',
      description:
        'Espuma de alta densidad revestida en poliéster con soporte para bordado tridimensional de relieve o sublimación nítida.',
      badge: 'ALTA DENSIDAD',
      category: 'technique',
    },
    {
      id: 'visera-reforzada',
      number: 2,
      x: 50,
      y: 78,
      label: 'Visera Curva',
      title: 'Alma Rígida con 6 Pespuntes',
      description:
        'Estructura polimérica interna indeformable con pespuntes simétricos que mantienen la curvatura ergonómica.',
      badge: 'INDEFORMABLE',
      category: 'finish',
    },
    {
      id: 'malla-trasera',
      number: 3,
      x: 76,
      y: 34,
      label: 'Malla & Ajuste',
      title: 'Malla Transpirable y Broche Snapback',
      description:
        'Malla de nylon de alta ventilación y broche regulable de 7 posiciones para adaptación milimétrica a cualquier talla.',
      badge: 'AJUSTABLE',
      category: 'fit',
    },
  ],

  'mug-ceramica': [
    {
      id: 'acabado-sublimado',
      number: 1,
      x: 50,
      y: 45,
      label: 'Impresión Panorámica',
      title: 'Estampado Fotográfico de Alta Nitidez',
      description:
        'Colores vivos integrados al brillo de la cerámica, resistentes al microondas y a más de 1.000 lavadas sin desgastarse.',
      badge: 'COLOR PERMANENTE',
      category: 'technique',
    },
    {
      id: 'cuerpo-ceramico',
      number: 2,
      x: 65,
      y: 76,
      label: 'Cuerpo Cerámico',
      title: 'Cerámica Grado A de Alta Densidad',
      description:
        'Apta para microondas y lavavajillas. Paredes térmicas que conservan la temperatura de bebidas frías o calientes.',
      badge: 'GRADO A',
      category: 'fabric',
    },
    {
      id: 'asa-ergonomica',
      number: 3,
      x: 22,
      y: 48,
      label: 'Asa Ergonómica',
      title: 'Asa Ergonómica Aislante',
      description:
        'Soldadura cerámica reforzada que previene fracturas y aísla la temperatura del líquido.',
      badge: 'CONFORT',
      category: 'finish',
    },
  ],
};

/**
 * Obtiene los hotspots adecuados para un producto dado, deduciéndolos de su slug,
 * categoría, técnica o silueta.
 */
export function getProductHotspots(product: Product): ProductHotspot[] {
  const slug = product.slug.toLowerCase();
  const cat = (product.categorySlug || product.categoryId || '').toLowerCase();
  const title = product.title.toLowerCase();

  if (slug.includes('baby-tee') || title.includes('baby')) {
    return SILHOUETTE_HOTSPOTS['baby-tee'];
  }

  if (slug.includes('polo') || title.includes('polo') || cat === 'dotaciones') {
    return SILHOUETTE_HOTSPOTS['polo-pique'];
  }

  if (slug.includes('qatar') || slug.includes('deportiv') || title.includes('qatar')) {
    return SILHOUETTE_HOTSPOTS['deportivo-qatar'];
  }

  if (slug.includes('gorra') || cat === 'accesorios') {
    return SILHOUETTE_HOTSPOTS['gorra-trucker'];
  }

  if (slug.includes('mug') || slug.includes('termo') || cat === 'sublimacion') {
    return SILHOUETTE_HOTSPOTS['mug-ceramica'];
  }

  // Por defecto, camiseta ajustada de confección
  return SILHOUETTE_HOTSPOTS['ajustada-spandex'];
}
