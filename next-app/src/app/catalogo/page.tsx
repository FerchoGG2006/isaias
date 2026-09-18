import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { CatalogPageClient } from '@/components/catalog/CatalogPageClient';
import { PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Catálogo de Prendas, Dotaciones & Personalización Textil | Variedades Isaías · Valledupar',
  description:
    'Colección de camisetas en tela piel de durazno 220g, polos piqué, gorras y artículos publicitarios con bordado computarizado Wilcom y estampado DTF en Valledupar. Precios de taller.',
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <CatalogPageClient initialProducts={PRODUCTS} />
      <Footer />
      <QuoteDrawer />
    </>
  );
}
