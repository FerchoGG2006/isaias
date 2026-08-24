'use client';

import React from 'react';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="wrap">
      <div className="about-grid">
        <div className="about-photos">
          <Image
            src="/assets/telas/cuello_tejido/cuello-2.jpg"
            alt="Taller de estampados en Valledupar"
            width={300}
            height={420}
            className="ph-a"
          />
          <Image
            src="/assets/telas/ajustadas/ajustada-3.jpg"
            alt="Detalle de estampado de alta precisión"
            width={240}
            height={200}
            className="ph-b"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Sobre Nosotros</span>
          <h2>Variedades Isaías</h2>
          <div className="quote">&quot;Calidad que resalta en cada fibra, hecha por manos vallenatas.&quot;</div>
          <p>
            Somos un taller familiar dedicado a transformar ideas en ropa y accesorios personalizados de alta calidad. Desde pequeños pedidos individuales hasta grandes dotaciones para empresas locales.
          </p>
          <p>
            Nos respaldan años de experiencia combinando tecnología de estampado directo y técnicas artesanales para ofrecer prendas duraderas al mejor precio del mercado.
          </p>
        </div>
      </div>
    </section>
  );
};
