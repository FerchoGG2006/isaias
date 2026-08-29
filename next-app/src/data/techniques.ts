import { Technique } from '@/domain';

export const TECHNIQUES: Technique[] = [
  {
    id: 'dtf-reflectivo',
    slug: 'dtf-reflectivo',
    name: 'DTF Reflectivo',
    shortDescription:
      'Estampado directo a film con acabado de alta reflectividad lumínica, curado a 160 °C.',
    fullDescription:
      'Impresión digital con microesferas retrorreflectivas integradas que reaccionan a la luz directa. Ideal para prendas urbanas, ciclistas, línea infantil y marcas con identidad nocturna.',
    curingTemperature: '160 °C',
    machinery: 'Prensa térmica neumática calibrada',
    minUnits: 1,
    iconSvg:
      'M13 10V3L4 14h7v7l9-11h-7z',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    advantages: [
      'Reflejo intenso ante faros y flashes nocturnos',
      'Curado técnico uniforme a 160 °C',
      'Excelente elasticidad en mezclas spandex y algodón',
      'Resistencia a lavados repetidos',
    ],
    recommendedMaterials: ['Piel de durazno spandex 220g', 'Algodón peinado', 'Poliéster térmico'],
  },
  {
    id: 'dtf-full-color',
    slug: 'dtf-textil',
    name: 'DTF Textil Full Color',
    shortDescription:
      'Impresión digital en film de alta resolución para todo tipo de colores y texturas de tela.',
    fullDescription:
      'Permite plasmar ilustraciones complejas, sombras y degradados fotográficos sobre telas de cualquier color (incluso negro profundo) con base blanca opaca y fijación elástica.',
    curingTemperature: '160 °C',
    machinery: 'Plotter industrial DTF 60cm con polimerizador',
    minUnits: 1,
    iconSvg:
      'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    advantages: [
      'Gama cromática ilimitada con degradados suaves',
      'Sin costos de matrices por color',
      'Tacto suave sin rigidez en el textil',
      'Fidelidad milimétrica de trazos finos',
    ],
    recommendedMaterials: ['Algodón 100%', 'Piel de durazno', 'Mezclas de poliéster/algodón'],
  },
  {
    id: 'bordado-3d',
    slug: 'bordado-3d',
    name: 'Bordado 3D Computarizado',
    shortDescription:
      'Bordado tridimensional de alta densidad programado en Wilcom sobre algodón piqué o dril.',
    fullDescription:
      'Puntadas de altísima densidad con inserción de espuma de microcélulas para lograr relieve visual y táctil sobrio. La técnica insignia para dotaciones ejecutivas y gorras estructuradas.',
    resolution: 'Digitalización Wilcom ES',
    machinery: 'Bordadora industrial multicabezal computarizada',
    minUnits: 6,
    iconSvg:
      'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    image: '/media/embroidery-machine.jpeg',
    advantages: [
      'Elegancia institucional y volumen táctil',
      'Hilos de poliéster trilobal de alta resistencia',
      'Indeleble al paso de los años y lavados industriales',
      'Matricería y ponchado digitalizado a medida',
    ],
    recommendedMaterials: ['Algodón piqué', 'Dril 100%', 'Gabardina', 'Poliéster pesado'],
  },
  {
    id: 'sublimacion-4k',
    slug: 'sublimacion-4k',
    name: 'Sublimación Fotográfica 4K',
    shortDescription:
      'Fusión molecular de color a 200 °C directa en la fibra sin tacto ni peso.',
    fullDescription:
      'Transferencia térmica donde la tinta se convierte en gas a 200 °C y penetra directamente la fibra del poliéster o el recubrimiento polimérico de tazas y termos. Cero sensación al tacto.',
    curingTemperature: '200 °C',
    resolution: '4K Ultra HD',
    machinery: 'Calandra térmica continua & prensas para cilindros',
    minUnits: 1,
    iconSvg:
      'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    image: '/assets/telas/qatar/qatar-1.jpg',
    advantages: [
      'Cero tacto: la tela mantiene su caída y transpirabilidad',
      'Colores fotográficos intensos y saturados',
      'Inmune a la decoloración por sudor y sol',
      'Apto para superficies rígidas polimerizadas',
    ],
    recommendedMaterials: ['Poliéster Qatar DryFit', 'Cerámica polimerizada', 'Aluminio'],
  },
];

export function getTechniqueById(id: string): Technique | undefined {
  return TECHNIQUES.find((t) => t.id === id || t.slug === id);
}
