'use client';

import { useState } from 'react';
import { QuoteLink } from '@/components/ui/QuoteLink';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/#materiales', label: 'Materiales' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a className="site-nav__brand" href="#inicio" aria-label="Ir al inicio de Variedades Isaías">
        <span className="site-nav__brand-mark" aria-hidden="true">VI</span>
        <span>Variedades Isaías</span>
      </a>

      <button
        className="site-nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>

      <nav id="site-navigation" className={`site-nav__links${open ? ' is-open' : ''}`} aria-label="Navegación principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <QuoteLink className="site-nav__quote" message="Hola, quiero solicitar una cotización para un producto personalizado.">
        Solicitar cotización <span aria-hidden="true">↗</span>
      </QuoteLink>
    </header>
  );
}
