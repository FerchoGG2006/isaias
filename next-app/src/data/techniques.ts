import { Technique } from '@/domain';

export const TECHNIQUES: Technique[] = [
  {
    id: 'dtf-reflectivo',
    slug: 'dtf-reflectivo',
    name: 'Estampado Reflectivo (Brilla de Noche)',
    shortDescription:
      'Estampado que brilla en la oscuridad cuando le da la luz directa de un carro o el flash del celular.',
    fullDescription:
      'Estampado especial que resalta y brilla intensamente de noche ante las luces o el flash fotográfico. Muy pedido para paseos en moto, bicicleta, ropa de niños, grupos y eventos nocturnos.',
    curingTemperature: '160 °C',
    machinery: 'Plancha térmica de alta presión',
    minUnits: 1,
    iconSvg:
      'M13 10V3L4 14h7v7l9-11h-7z',
    image: '/assets/telas/reflectivos_ninos/reflectivo-1.jpg',
    advantages: [
      'Brilla con las luces en la noche y fotos con flash',
      'Aguanta lavadas continuas sin despegarse',
      'Estira con la tela sin rajarse',
      'Ideal para seguridad en moto o bici',
    ],
    recommendedMaterials: ['Piel de durazno licrada', 'Algodón suave', 'Tela deportiva'],
  },
  {
    id: 'dtf-full-color',
    slug: 'dtf-textil',
    name: 'Estampado DTF a Todo Color',
    shortDescription:
      'Estampado digital a todo color para cualquier diseño, dibujo o foto en cualquier color de tela.',
    fullDescription:
      'Técnica moderna de estampado que permite colocar diseños con muchos colores, sombras o fotografías sobre camisetas de cualquier color (incluso en telas negras). Queda suave al tacto y no se cuartea.',
    curingTemperature: '160 °C',
    machinery: 'Impresora DTF para estampado textil',
    minUnits: 1,
    iconSvg:
      'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    image: '/assets/telas/ajustadas/ajustada-2.jpg',
    advantages: [
      'Colores vivos y fotos con gran detalle',
      'No cobra más por cantidad de colores en el diseño',
      'Tacto suave, no queda acartonado',
      'Sirve sobre camisetas blancas, negras o de cualquier color',
    ],
    recommendedMaterials: ['Algodón 100%', 'Piel de durazno', 'Telas mixtas'],
  },
  {
    id: 'bordado-3d',
    slug: 'bordado-3d',
    name: 'Bordado Computarizado con Relieve',
    shortDescription:
      'Bordado a máquina grueso y duradero para logos en camisetas polo, gorras o uniformes.',
    fullDescription:
      'Bordado hecho con hilos resistentes y realce en relieve para que el logo de tu negocio resalte. Es la opción más duradera para uniformes de trabajo porque dura años sin dañarse con el lavado.',
    resolution: 'Digitalización y ponchado de logo',
    machinery: 'Máquinas bordadoras multicabezal',
    minUnits: 6,
    iconSvg:
      'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    image: '/media/embroidery-machine.jpeg',
    advantages: [
      'Da una presentación seria y duradera a tu negocio',
      'Hilos resistentes que no se decoloran',
      'Dura años intacto ante lavados frecuentes',
      'Ponchado digitalizado a la medida de tu logo',
    ],
    recommendedMaterials: ['Tela piqué para polos', 'Dril para gorras', 'Prendas de dotación'],
  },
  {
    id: 'sublimacion-4k',
    slug: 'sublimacion-4k',
    name: 'Sublimación (Estampado sin Tacto)',
    shortDescription:
      'Estampado a todo color que se absorbe en la tela, no se siente al tacto y no se borra.',
    fullDescription:
      'El estampado se funde directamente con las fibras de la tela o la superficie de tazas y termos. No se siente ninguna capa plástica, no acalora la prenda y los colores se mantienen vivos siempre.',
    curingTemperature: '200 °C',
    resolution: 'Colores fotográficos vivos',
    machinery: 'Planchas térmicas para tela y artículos',
    minUnits: 1,
    iconSvg:
      'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    image: '/assets/telas/qatar/qatar-1.jpg',
    advantages: [
      'Cero sensación al tacto: la prenda sigue fresca y liviana',
      'Colores vivos que no se borran con el sudor ni el sol',
      'No se cuartea ni se despega nunca',
      'Apto para camisetas deportivas, tazas y recuerdos',
    ],
    recommendedMaterials: ['Tela deportiva transpirable', 'Tazas y termos personalizados'],
  },
];

export function getTechniqueById(id: string): Technique | undefined {
  return TECHNIQUES.find((t) => t.id === id || t.slug === id);
}
