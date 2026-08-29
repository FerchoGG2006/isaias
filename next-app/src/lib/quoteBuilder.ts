import {
  Product,
  ProductVariant,
  Service,
  QuoteItem,
  QuoteRequest,
  DesignFileAttachment,
} from '@/domain';

export interface ProductConfigState {
  product: Product;
  selectedVariant?: ProductVariant;
  selectedTechnique?: string;
  selectedPlacements?: string[];
  sizeDistribution: Record<string, number>;
  totalQuantity: number;
  attachment?: DesignFileAttachment;
  notes?: string;
}

export interface ServiceConfigState {
  service: Service;
  selectedTechnique?: string;
  totalQuantity: number;
  garmentType?: string;
  attachment?: DesignFileAttachment;
  notes?: string;
}

/**
 * Calcula el precio unitario efectivo según la cantidad y la escala de descuentos por volumen.
 */
export function calculateUnitPrice(
  basePrice: number | undefined,
  quantity: number,
  bulkDiscounts?: { minQty: number; pricePerUnit: number }[]
): number | undefined {
  if (basePrice === undefined) return undefined;
  if (!bulkDiscounts || bulkDiscounts.length === 0) return basePrice;

  // Ordenar de mayor a menor escala
  const sorted = [...bulkDiscounts].sort((a, b) => b.minQty - a.minQty);
  const matched = sorted.find((tier) => quantity >= tier.minQty);

  return matched ? matched.pricePerUnit : basePrice;
}

/**
 * Construye un QuoteItem validado a partir de la configuración de un producto.
 */
export function buildProductQuoteItem(state: ProductConfigState): QuoteItem {
  const {
    product,
    selectedVariant,
    selectedTechnique,
    selectedPlacements,
    sizeDistribution,
    totalQuantity,
    attachment,
    notes,
  } = state;

  const unitPrice =
    product.pricing.type === 'fixed'
      ? calculateUnitPrice(
          product.pricing.basePrice,
          totalQuantity,
          product.pricing.bulkDiscounts
        )
      : product.pricing.basePrice;

  const estimatedSubtotal =
    unitPrice !== undefined && product.pricing.type === 'fixed'
      ? unitPrice * totalQuantity
      : undefined;

  return {
    id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    type: 'product',
    productId: product.id,
    productSlug: product.slug,
    title: product.title,
    code: product.code,
    image: selectedVariant?.image || product.featuredImage,
    selectedVariant: selectedVariant || product.customCapabilities.availableColors[0],
    selectedTechnique: selectedTechnique || product.customCapabilities.allowedTechniques[0],
    selectedPlacements: selectedPlacements || [product.customCapabilities.allowedPlacements[0]?.label].filter(Boolean),
    sizeDistribution: product.customCapabilities.sizingMode === 'distribution' ? sizeDistribution : undefined,
    totalQuantity: Math.max(1, totalQuantity),
    attachment,
    notes,
    pricingType: product.pricing.type,
    unitPrice,
    estimatedSubtotal,
  };
}

/**
 * Construye un QuoteItem a partir de la configuración de un servicio independiente.
 */
export function buildServiceQuoteItem(state: ServiceConfigState): QuoteItem {
  const { service, selectedTechnique, totalQuantity, garmentType, attachment, notes } = state;

  const unitPrice =
    service.pricing.type === 'from' || service.pricing.type === 'fixed'
      ? calculateUnitPrice(
          service.pricing.basePrice,
          totalQuantity,
          service.pricing.bulkDiscounts
        )
      : undefined;

  const estimatedSubtotal =
    unitPrice !== undefined ? unitPrice * totalQuantity : undefined;

  const fullNotes = [
    garmentType ? `Tipo de prenda proporcionada: ${garmentType}` : '',
    notes || '',
  ]
    .filter(Boolean)
    .join(' · ');

  return {
    id: `service-item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    type: 'service',
    serviceId: service.id,
    serviceSlug: service.slug,
    title: service.title,
    image: service.image,
    selectedTechnique: selectedTechnique || service.techniques[0],
    totalQuantity: Math.max(service.minUnits || 1, totalQuantity),
    attachment,
    notes: fullNotes,
    pricingType: service.pricing.type,
    unitPrice,
    estimatedSubtotal,
  };
}

/**
 * Valida si la suma de la distribución de tallas coincide con la cantidad total requerida.
 */
export function validateSizeDistribution(
  distribution: Record<string, number>,
  expectedTotal: number
): { isValid: boolean; currentSum: number; diff: number } {
  const currentSum = Object.values(distribution).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
  const diff = expectedTotal - currentSum;

  return {
    isValid: currentSum === expectedTotal,
    currentSum,
    diff,
  };
}

/**
 * Abstracción QuoteBuilder para crear un QuoteRequest formal.
 */
export function createQuoteRequest(params: {
  businessId?: string;
  items: QuoteItem[];
  customer?: { name?: string; phone?: string; city?: string; company?: string; email?: string };
  generalNotes?: string;
}): QuoteRequest {
  const businessId = params.businessId || 'isaias';
  const items = params.items;
  const totalUnits = items.reduce((sum, it) => sum + it.totalQuantity, 0);

  const hasUnpriced = items.some((it) => it.estimatedSubtotal === undefined);
  const estimatedTotal = hasUnpriced
    ? undefined
    : items.reduce((sum, it) => sum + (it.estimatedSubtotal || 0), 0);

  return {
    id: `REQ-${Date.now()}`,
    businessId,
    customer: params.customer || {},
    items,
    totalUnits,
    estimatedTotal,
    generalNotes: params.generalNotes,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
  };
}
