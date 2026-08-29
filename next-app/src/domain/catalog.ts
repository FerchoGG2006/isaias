export type BusinessId = 'variedades-isaias' | 'palacio-sublimacion';

export type ProductAvailability = 'available' | 'quote_only' | 'unavailable';

export type PricingMode = 'fixed' | 'from' | 'quote';

export type TechniqueId = 'dtf' | 'dtf-reflectivo' | 'sublimacion' | 'bordado-3d' | 'estampado';

export type CustomizationCapability =
  | 'color'
  | 'size'
  | 'size_distribution'
  | 'technique'
  | 'quantity'
  | 'design_upload'
  | 'placement'
  | 'notes';

export interface Business {
  id: BusinessId;
  slug: string;
  name: string;
  logo?: string;
  whatsapp: string;
  active: boolean;
}

export interface CatalogCategory {
  id: string;
  businessId: BusinessId;
  slug: string;
  name: string;
  description?: string;
  image?: string;
  active: boolean;
}

export interface Material {
  id: string;
  name: string;
  description?: string;
  specification?: string;
}

export interface Technique {
  id: TechniqueId;
  name: string;
  description: string;
  specification?: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  image?: string;
}

export interface ProductPricing {
  mode: PricingMode;
  amount?: number;
  currency: 'COP';
}

export interface Product {
  id: string;
  businessId: BusinessId;
  categoryId: string;
  slug: string;
  code: string;
  name: string;
  description: string;
  availability: ProductAvailability;
  pricing: ProductPricing;
  materials: Material[];
  techniques: TechniqueId[];
  capabilities: CustomizationCapability[];
  variants: ProductVariant[];
  sizes: string[];
  images: string[];
}

export interface SizeQuantity {
  size: string;
  quantity: number;
}

export interface ProductConfiguration {
  productId: string;
  variantId?: string;
  techniqueId?: TechniqueId;
  quantity: number;
  sizeDistribution?: SizeQuantity[];
  designFileName?: string;
  designFileUrl?: string;
  placement?: string;
  notes?: string;
}

export interface QuoteItem {
  productId: string;
  productName: string;
  configuration: ProductConfiguration;
}

export interface QuoteCustomer {
  name: string;
  phone: string;
  email?: string;
  company?: string;
}

export type QuoteStatus = 'pending' | 'contacted' | 'quoted' | 'approved' | 'rejected' | 'completed';

export interface QuoteRequest {
  id: string;
  businessId: BusinessId;
  customer: QuoteCustomer;
  items: QuoteItem[];
  notes?: string;
  status: QuoteStatus;
  createdAt: string;
}
