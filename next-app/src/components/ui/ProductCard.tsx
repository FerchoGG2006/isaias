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
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      optionSelected: selectedOption,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="group relative bg-[#0e0e11] border border-white/10 hover:border-[#C8A96E]/50 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96E]/10">
      
      {/* 1. PRODUCT MEDIA CONTAINER WITH SHOPIFY HOVER EFFECT */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141419]">
        {/* Category / Fabric Badge */}
        <span className="absolute top-3 left-3 z-10 font-mono text-[10px] uppercase tracking-widest text-[#C8A96E] bg-[#070708]/90 backdrop-blur-md px-3 py-1 border border-[#C8A96E]/30 rounded-xs">
          {product.tag}
        </span>

        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
        />
        
        {/* Soft Vignette Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. PRODUCT BODY & OPTIONS */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-sans font-bold text-lg text-[#F4F1EA] tracking-tight leading-snug group-hover:text-[#C8A96E] transition-colors">
              {product.title}
            </h3>
            <span className="font-mono font-bold text-sm text-[#C8A96E] whitespace-nowrap pt-0.5">
              ${product.price.toLocaleString('es-CO')}
            </span>
          </div>

          <p className="text-xs text-[#A0A0A5] leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Fabric Specification Selector */}
        <div className="flex flex-col gap-3 pt-1 border-t border-white/5">
          <div className="flex items-center justify-between font-mono text-[11px] text-[#A0A0A5]">
            <span className="uppercase tracking-wider">{product.fabricLabel}:</span>
          </div>

          <select
            className="w-full bg-[#16161d] text-[#F4F1EA] border border-white/15 focus:border-[#C8A96E] font-mono text-xs px-3 py-2 rounded-xs outline-none transition-colors cursor-pointer"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            title={`Seleccionar ${product.fabricLabel.toLowerCase()}`}
            aria-label={`Seleccionar ${product.fabricLabel.toLowerCase()}`}
          >
            {product.fabrics.map((opt, idx) => (
              <option key={idx} value={opt.label} className="bg-[#0e0e11] text-[#F4F1EA]">
                {opt.label}
              </option>
            ))}
          </select>

          {/* Quick Add CTA */}
          <button
            onClick={handleAdd}
            className={`w-full font-mono text-xs uppercase tracking-widest font-bold py-3 transition-all duration-300 rounded-xs flex items-center justify-center gap-2 ${
              added
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                : 'bg-[#F4F1EA] hover:bg-[#C8A96E] text-[#070708] shadow-md hover:shadow-xl'
            }`}
          >
            {added ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Añadido a Cotización
              </>
            ) : (
              <>
                <span>Añadir a Cotización</span>
                <span className="text-base leading-none">+</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};

