'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/domain';
import { EditorialProductItem } from '@/components/catalog/EditorialProductItem';
import { ProductHotspotModal } from '@/components/catalog/ProductHotspotModal';

interface CategoryProductGridProps {
  products: Product[];
  categoryName: string;
}

export const CategoryProductGrid: React.FC<CategoryProductGridProps> = ({
  products,
  categoryName,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (products.length === 0) {
    return (
      <div className="py-24 text-center border-t border-b border-white/10 flex flex-col items-center justify-center">
        <span className="font-serif italic text-2xl text-[#8A8A92] mb-2">
          Piezas en proceso de producción
        </span>
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#8A8A92]/70 mb-6 max-w-sm">
          Estamos registrando nuevas prendas de la línea {categoryName}.
        </p>
        <Link
          href="/catalogo"
          className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8A96E] hover:underline"
        >
          Ver otras líneas de confección ↺
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Retícula Editorial Equilibrada de 3 Columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
        {products.map((product, idx) => (
          <div key={product.id} className="w-full">
            <EditorialProductItem
              product={product}
              aspect="portrait"
              priority={idx < 3}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          </div>
        ))}
      </div>

      {/* Product Hotspot Modal para Inspección de Detalles */}
      <ProductHotspotModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};
