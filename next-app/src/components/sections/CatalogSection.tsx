'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { CategoryId } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');

  const filteredProducts =
    activeCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="wrap">
      <div className="section-head">
        <span className="eyebrow">Productos y Prendas</span>
        <h2>Catálogo de Productos</h2>
        <p>
          Selecciona tu prenda o artículo favorito, elige la opción de tu preferencia y agrégalo al carrito para solicitar tu cotización por WhatsApp.
        </p>
      </div>

      <div className="cat-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="prod-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
