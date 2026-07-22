'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export const Footer: React.FC = () => {
  const { setIsAdminOpen } = useCart();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <Image src="/assets/img-1.jpg" alt="Logo Isaías" width={34} height={34} />
              <span>Variedades Isaías</span>
            </div>
            <p>
              Taller de sublimación, DTF y bordados en Valledupar. Estampados duraderos y diseño personalizado para eventos y empresas.
            </p>
          </div>
          <div>
            <h5>Navegación</h5>
            <a href="#tecnicas">Técnicas</a>
            <a href="#galeria">Galería</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#nosotros">Nosotros</a>
          </div>
          <div>
            <h5>Contacto</h5>
            <p>Valledupar, Cesar - Colombia</p>
            <p>Atención: Lunes a Sábado</p>
            <p>WhatsApp: +57 300 000 0000</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 Variedades Isaías. Todos los derechos reservados.</span>
          <button className="admin-link" onClick={() => setIsAdminOpen(true)}>
            Acceso Admin
          </button>
        </div>
      </div>
    </footer>
  );
};
