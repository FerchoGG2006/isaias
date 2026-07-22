'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export const AdminModal: React.FC = () => {
  const { isAdminOpen, setIsAdminOpen } = useCart();

  if (!isAdminOpen) return null;

  return (
    <div className="admin-overlay open">
      <div className="admin-box">
        <div className="admin-head">
          <h3>Panel de Administración</h3>
          <button
            className="mini-btn"
            onClick={() => setIsAdminOpen(false)}
            title="Cerrar panel de administración"
            aria-label="Cerrar panel de administración"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="admin-body">
          <div className="admin-gate">
            <h3>Ingresar Clave</h3>
            <input type="password" placeholder="••••••••" id="adminPass" />
            <button className="btn btn-primary btn-full">Acceder</button>
            <div className="hint">Modo de administración para actualizar precios y catálogo.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
