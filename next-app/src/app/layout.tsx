import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Variedades Isaías — Estudio textil y personalización',
  description:
    'Personalización textil, sublimación, DTF y bordado en Valledupar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
