/**
 * Modelo de Dominio de Catálogo y Cotización Especializada
 * Variedades Isaías & Plataforma Multiempresa
 */

export interface Business {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  city: string;
  department: string;
  country: string;
  address: string;
  whatsappPhone: string;
  email?: string;
  logoUrl: string;
  specialties: string[];
  defaultCurrency: 'COP';
}

export interface Category {
  id: string;
  slug: string;
  businessId: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  order: number;
  featured?: boolean;
}

export interface Material {
  id: string;
  name: string;
  slug: string;
  description: string;
  weight: string; // e.g. '220 g'
  composition: string;
  suitableTechniques: string[];
  image: string;
  alt: string;
  points: string[];
  technicalSpecs: string[];
}

export interface Technique {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  curingTemperature?: string; // e.g. '160 °C', '200 °C'
  resolution?: string; // e.g. '4K'
  machinery?: string; // e.g. 'Wilcom 3D computarizado'
  minUnits: number;
  iconSvg: string;
  image: string;
  advantages: string[];
  recommendedMaterials: string[];
}

export interface ProductVariant {
  id: string;
  colorName: string;
  colorHex: string;
  sku?: string;
  image?: string;
  inStock?: boolean;
}

export interface PlacementOption {
  id: string;
  label: string;
  maxDimensions?: string;
}

export interface CustomizationCapability {
  allowedTechniques: string[]; // Technique IDs
  allowedPlacements: PlacementOption[];
  allowsDesignUpload: boolean;
  allowsNotes: boolean;
  sizingMode: 'distribution' | 'single_quantity' | 'none';
  availableSizes: string[];
  availableColors: ProductVariant[];
  minQuantity: number;
  defaultQuantity: number;
}

export type PricingType = 'fixed' | 'from' | 'on_quote';

export interface ProductPricing {
  type: PricingType;
  basePrice?: number; // COP
  unit?: string; // 'unidad', 'metro', 'par'
  bulkDiscounts?: {
    minQty: number;
    pricePerUnit: number;
  }[];
}

export interface Product {
  id: string;
  slug: string;
  businessId: string;
  categoryId: string;
  categorySlug: string;
  title: string;
  subtitle?: string;
  description: string;
  code: string;
  tag: string;
  pricing: ProductPricing;
  images: string[];
  featuredImage: string;
  materialId?: string;
  materialName?: string;
  materialSpecs?: string[];
  customCapabilities: CustomizationCapability;
  specifications: { label: string; value: string }[];
  featured?: boolean;
  inStock?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  businessId: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tag: string;
  iconSvg: string;
  image: string;
  techniques: string[];
  pricing: ProductPricing;
  turnaroundTime: string;
  minUnits: number;
  features: string[];
  requirements: string[];
}

export interface QuoteCustomer {
  name?: string;
  phone?: string;
  city?: string;
  company?: string;
  email?: string;
}

export interface DesignFileAttachment {
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
}

export interface QuoteItem {
  id: string;
  type: 'product' | 'service';
  productId?: string;
  productSlug?: string;
  serviceId?: string;
  serviceSlug?: string;
  title: string;
  code?: string;
  image?: string;
  selectedVariant?: ProductVariant;
  selectedTechnique?: string;
  selectedPlacements?: string[];
  sizeDistribution?: Record<string, number>;
  totalQuantity: number;
  attachment?: DesignFileAttachment;
  notes?: string;
  pricingType: PricingType;
  unitPrice?: number;
  estimatedSubtotal?: number;
}

export type QuoteStatus =
  | 'PENDING'
  | 'CONTACTED'
  | 'QUOTED'
  | 'APPROVED'
  | 'REJECTED'
  | 'COMPLETED';

export interface QuoteRequest {
  id: string;
  businessId: string;
  customer: QuoteCustomer;
  items: QuoteItem[];
  totalUnits: number;
  estimatedTotal?: number;
  generalNotes?: string;
  status: QuoteStatus;
  createdAt: string;
}
