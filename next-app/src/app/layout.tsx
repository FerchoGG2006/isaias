import type { Metadata } from 'next';
import { Anton, Work_Sans, Space_Mono, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Toast } from '@/components/ui/Toast';

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Variedades Isaías — Sublimación, DTF y Bordado 3D en Valledupar',
  description:
    'Taller y estudio de personalización textil en Valledupar: Sublimación 4K, DTF reflectivo curado a 160 °C, bordado 3D Wilcom y piel de durazno spandex 220g.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${workSans.variable} ${spaceMono.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#12151C] text-[#FFFFFF] antialiased selection:bg-[#3B82F6] selection:text-[#FFFFFF]">
        <CartProvider>
          {children}
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}


