'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(product.fabrics[0]?.label || '');
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      optionSelected: selectedOption,
    });
  };

  return (
    <div className="prod-card">
      <div className="prod-media">
        <span className="prod-tag">{product.tag}</span>
        <Image src={product.image} alt={product.title} width={300} height={375} style={{ objectFit: 'cover' }} />
      </div>
      <div className="prod-body">
        <h4>{product.title}</h4>
        <p className="desc">{product.description}</p>
        <select
          className="tela-select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          title={`Seleccionar ${product.fabricLabel.toLowerCase()}`}
          aria-label={`Seleccionar ${product.fabricLabel.toLowerCase()}`}
        >
          {product.fabrics.map((opt, idx) => (
            <option key={idx} value={opt.label}>
              {product.fabricLabel}: {opt.label}
            </option>
          ))}
        </select>
        <div className="prod-foot">
          <span className="price">${product.price.toLocaleString('es-CO')} COP</span>
          <button className="add-btn" onClick={handleAdd}>
            Añadir +
          </button>
        </div>
      </div>
    </div>
  );
};
