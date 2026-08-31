import { Product } from '@/domain/catalog';

export const DOMAIN_PRODUCTS: Product[] = [
  {
    id: 'ajustada-estampada',
    businessId: 'variedades-isaias',
    categoryId: 'ropa',
    slug: 'camiseta-ajustada-estampada',
    code: 'CAM-AJU-001',
    name: 'Camiseta Ajustada Estampada',
    description: 'Silueta entallada al cuerpo. Tela suave piel de durazno (220g) de alta elasticidad e impresión DTF de alta definición durable.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 38000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'piel-durazno',
        name: 'Piel de Durazno Spandex',
        specification: '220 g/m² - High stretch & ultra-soft finish',
      },
      {
        id: 'algodon-elastano',
        name: 'Algodón Elasticado Peinado',
        specification: '180 g/m² - 95% algodón, 5% elastano',
      },
    ],
    techniques: ['dtf', 'dtf-reflectivo'],
    capabilities: [
      'color',
      'size',
      'size_distribution',
      'technique',
      'quantity',
      'design_upload',
      'notes',
    ],
    variants: [
      { id: 'negro', name: 'Negro Azabache', value: '#111111' },
      { id: 'blanco', name: 'Blanco Marfil', value: '#FFFFFF' },
      { id: 'rojo', name: 'Rojo Carmesí', value: '#C92A2A' },
      { id: 'azul', name: 'Azul Marino', value: '#1864AB' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/assets/telas/ajustadas/ajustada-1.jpg',
      '/assets/telas/ajustadas/ajustada-2.jpg',
    ],
  },
  {
    id: 'polo-cuello-tejido',
    businessId: 'variedades-isaias',
    categoryId: 'cuello-tejido',
    slug: 'polo-cuello-tejido',
    code: 'POL-CUE-002',
    name: 'Camiseta Polo Cuello Tejido',
    description: 'Elegante cuello tejido con ribete contrastado y pechera reforzada. Excelente para representación institucional o corporativa.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 48000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'algodon-pique',
        name: 'Algodón Piqué Tejido 100%',
        specification: '220 g/m² - Estructura de poro cerrado para bordado Wilcom',
      },
    ],
    techniques: ['bordado-3d', 'estampado'],
    capabilities: [
      'color',
      'size',
      'size_distribution',
      'technique',
      'quantity',
      'design_upload',
      'notes',
    ],
    variants: [
      { id: 'azul-marino', name: 'Azul Ejecutivo', value: '#0C2340' },
      { id: 'blanco', name: 'Blanco Empresarial', value: '#FFFFFF' },
      { id: 'negro', name: 'Negro Clásico', value: '#1A1A1A' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/assets/telas/cuello_tejido/cuello-1.jpg',
      '/assets/telas/cuello_tejido/cuello-2.jpg',
    ],
  },
  {
    id: 'polo-corporativa',
    businessId: 'variedades-isaias',
    categoryId: 'dotaciones',
    slug: 'polo-corporativa-premium',
    code: 'DOT-POL-003',
    name: 'Polo Corporativa Premium',
    description: 'Bordado de alta densidad computarizado en pechera o manga. Resistencia comprobada a lavadas frecuentes para entornos exigentes.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 52000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'pique-heavy',
        name: 'Piqué Heavyweight 240g',
        specification: '240 g/m² - Tejido de máxima firmeza',
      },
    ],
    techniques: ['bordado-3d', 'dtf'],
    capabilities: [
      'color',
      'size',
      'size_distribution',
      'technique',
      'quantity',
      'design_upload',
      'notes',
    ],
    variants: [
      { id: 'negro', name: 'Negro Mate', value: '#121212' },
      { id: 'gris-topacio', name: 'Gris Topacio', value: '#4A4A4A' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/assets/telas/cuello_tejido/cuello-2.jpg',
      '/assets/telas/cuello_tejido/cuello-1.jpg',
    ],
  },
  {
    id: 'qatar-deportiva',
    businessId: 'palacio-sublimacion',
    categoryId: 'sublimacion',
    slug: 'camiseta-poliester-qatar',
    code: 'SUB-QAT-004',
    name: 'Camiseta Poliéster Qatar DryFit',
    description: 'Textura microporosa de secado ultra rápido. La sublimación fotográfica 4K a 200 °C se fusiona directamente con la fibra sin rigidez.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 35000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'qatar-dryfit',
        name: 'Poliéster Qatar DryFit 100%',
        specification: '145 g/m² - Transpirabilidad activa y secado acelerado',
      },
    ],
    techniques: ['sublimacion'],
    capabilities: [
      'color',
      'size',
      'size_distribution',
      'technique',
      'quantity',
      'design_upload',
      'notes',
    ],
    variants: [
      { id: 'blanco-sublimable', name: 'Blanco Óptico Sublimable', value: '#FFFFFF' },
      { id: 'neon-amarillo', name: 'Amarillo Neón Deportivo', value: '#D8F328' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/assets/telas/qatar/qatar-1.jpg',
      '/assets/telas/qatar/qatar-2.jpg',
    ],
  },
  {
    id: 'reflectivo-nocturno',
    businessId: 'variedades-isaias',
    categoryId: 'ropa',
    slug: 'camiseta-vinilo-reflectivo',
    code: 'CAM-REF-005',
    name: 'Camiseta Vinilo Reflectivo Nocturno',
    description: 'DTF y vinilo textil reflectivo curado a 160 °C que devuelve destellos de luz intensa en oscuridad. Recomendado para ciclismo y trabajo nocturno.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 42000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'algodon-heavy-black',
        name: 'Algodón Peinado Negro Heavy',
        specification: '200 g/m² - 100% Algodón Premium',
      },
    ],
    techniques: ['dtf-reflectivo'],
    capabilities: [
      'color',
      'size',
      'size_distribution',
      'technique',
      'quantity',
      'design_upload',
      'notes',
    ],
    variants: [{ id: 'negro-noche', name: 'Negro Noche', value: '#080808' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/assets/telas/reflectivos_ninos/reflectivo-4.jpg',
      '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    ],
  },
  {
    id: 'gorra-trucker',
    businessId: 'variedades-isaias',
    categoryId: 'accesorios',
    slug: 'gorra-malla-trucker',
    code: 'ACC-GOR-006',
    name: 'Gorra Malla Trucker Custom',
    description: 'Panel frontal en gomaespuma acolchada sublimable de alta nitidez o frente preparado para bordado en relieve 3D.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 25000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'malla-trucker',
        name: 'Poliéster Trucker + Gomaespuma',
        specification: 'Broche de presión ajustable de 7 posiciones',
      },
    ],
    techniques: ['sublimacion', 'bordado-3d'],
    capabilities: ['color', 'technique', 'quantity', 'design_upload', 'notes'],
    variants: [
      { id: 'negro-blanco', name: 'Negro / Frente Blanco', value: '#000000' },
      { id: 'azul-blanco', name: 'Azul / Frente Blanco', value: '#1D4ED8' },
      { id: 'rojo-blanco', name: 'Rojo / Frente Blanco', value: '#DC2626' },
    ],
    sizes: ['Talla Única Ajustable'],
    images: ['/assets/img-31.jpg'],
  },
  {
    id: 'mug-ceramica',
    businessId: 'palacio-sublimacion',
    categoryId: 'sublimacion',
    slug: 'mug-ceramica-11oz',
    code: 'SUB-MUG-007',
    name: 'Mug de Cerámica Sublimado 11oz',
    description: 'Cerámica AAA brillante apta para microondas y lavavajillas. Transferencia térmicamente curada con fidelidad de color fotográfica.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 18000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'ceramica-aaa',
        name: 'Cerámica Importada AAA',
        specification: '11 onzas / 325 ml con recubrimiento polimérico super brillante',
      },
    ],
    techniques: ['sublimacion'],
    capabilities: ['color', 'technique', 'quantity', 'design_upload', 'notes'],
    variants: [
      { id: 'blanco-puro', name: 'Blanco Clásico', value: '#FFFFFF' },
      { id: 'mug-magico', name: 'Mug Mágico Revelación', value: '#1F2937' },
      { id: 'interior-negro', name: 'Interior & Asa Negro', value: '#111827' },
    ],
    sizes: ['11 oz'],
    images: ['/assets/mug.png'],
  },
  {
    id: 'termo-aluminio',
    businessId: 'palacio-sublimacion',
    categoryId: 'sublimacion',
    slug: 'termo-aluminio-600ml',
    code: 'SUB-TER-008',
    name: 'Termo de Aluminio Deportivo 600ml',
    description: 'Cuerpo liviano ultrarresistente con tapa hermética anti-derrames y mosquetón de transporte. Sublimación envolvente 360°.',
    availability: 'available',
    pricing: {
      mode: 'from',
      amount: 32000,
      currency: 'COP',
    },
    materials: [
      {
        id: 'aluminio-anodizado',
        name: 'Aluminio Grado Alimentario 600ml',
        specification: 'Libre de BPA - Incluye 2 tapas reemplazables',
      },
    ],
    techniques: ['sublimacion'],
    capabilities: ['color', 'technique', 'quantity', 'design_upload', 'notes'],
    variants: [
      { id: 'aluminio-blanco', name: 'Blanco Nieve', value: '#FFFFFF' },
      { id: 'aluminio-plata', name: 'Plateado Metalizado', value: '#E5E7EB' },
    ],
    sizes: ['600 ml'],
    images: ['/assets/bottle.png'],
  },
];

export const getDomainProductBySlug = (slug: string): Product | undefined =>
  DOMAIN_PRODUCTS.find((prod) => prod.slug === slug || prod.id === slug);

export const getDomainProductsByCategory = (categoryId: string): Product[] =>
  DOMAIN_PRODUCTS.filter(
    (prod) => prod.categoryId === categoryId || categoryId === 'todos'
  );
