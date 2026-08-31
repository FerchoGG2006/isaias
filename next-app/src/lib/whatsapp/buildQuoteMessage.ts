import { Product, ProductConfiguration, BusinessId } from '@/domain/catalog';
import { getBusinessById, DEFAULT_BUSINESS } from '@/data/businesses';
import { getTechnique } from '@/data/services';

export interface BuildQuoteMessageOptions {
  product: Product;
  config: ProductConfiguration;
  businessId?: BusinessId;
}

export function buildQuoteMessage({
  product,
  config,
  businessId = product.businessId,
}: BuildQuoteMessageOptions): { text: string; url: string; phone: string } {
  const business = getBusinessById(businessId) || DEFAULT_BUSINESS;
  const phone = business.whatsapp.replace(/[^0-9]/g, '');

  const techniqueObj = config.techniqueId ? getTechnique(config.techniqueId) : undefined;
  const techniqueName = techniqueObj ? techniqueObj.name : 'Por definir';

  const selectedVariant = config.variantId
    ? product.variants.find((v) => v.id === config.variantId)?.name
    : undefined;

  let message = `¡Hola! Me gustaría solicitar una cotización.\n\n`;
  message += `📌 *Producto:* ${product.name} (${product.code})\n`;
  message += `🏢 *Marca:* ${business.name}\n`;
  message += `📊 *Cantidad:* ${config.quantity} unidad(es)\n`;

  if (selectedVariant) {
    message += `🎨 *Color / Variante:* ${selectedVariant}\n`;
  }

  message += `⚙️ *Técnica solicitada:* ${techniqueName}\n`;

  if (config.sizeDistribution && config.sizeDistribution.length > 0) {
    message += `\n👕 *Distribución de Tallas:*\n`;
    config.sizeDistribution.forEach((item) => {
      if (item.quantity > 0) {
        message += `  - Talla ${item.size}: ${item.quantity} ud(s)\n`;
      }
    });
  }

  if (config.placement) {
    message += `📍 *Ubicación:* ${config.placement}\n`;
  }

  if (config.designFileName) {
    message += `📎 *Archivo de Diseño:* ${config.designFileName} (adjunto en chat)\n`;
  }

  if (config.notes) {
    message += `📝 *Notas:* ${config.notes}\n`;
  }

  message += `\n---\n*Enviado desde el catálogo digital de ${business.name}*`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return { text: message, url, phone };
}
