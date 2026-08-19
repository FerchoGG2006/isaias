import type { Metadata } from 'next';
import { Anton, Work_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import FloatingGooeyMenu from '@/components/ui/FloatingGooeyMenu';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Variedades Isaías — Sublimación, DTF y Bordado en Valledupar',
  description:
    'Taller de estampados en Valledupar: Sublimación, DTF, bordados y transfer en camisetas, gorras y artículos publicitarios.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${workSans.variable} ${spaceMono.variable}`}>
      <body>
        <CartProvider>
          {children}
          <FloatingGooeyMenu />
        </CartProvider>
      </body>
    </html>
  );
}
