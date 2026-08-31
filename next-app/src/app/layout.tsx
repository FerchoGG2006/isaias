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
  title: 'Variedades Isaías — Confección, DTF y Bordado en Valledupar',
  description:
    'Taller especializado de confección y personalización textil en Valledupar, Cesar: Estampado DTF curado a 160 °C, bordado computarizado 3D Wilcom, sublimación 4K y prendas en piel de durazno spandex 220g.',
  keywords: [
    'confección valledupar',
    'estampado dtf valledupar',
    'bordados computarizados cesar',
    'camisetas personalizadas valledupar',
    'sublimacion valledupar',
    'dotaciones empresariales',
    'variedades isaias',
  ],
  authors: [{ name: 'Variedades Isaías' }],
  creator: 'Variedades Isaías',
  publisher: 'Variedades Isaías',
  metadataBase: new URL('https://variedadesisaias.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Variedades Isaías — Confección, DTF y Bordado en Valledupar',
    description:
      'Catálogo editorial de confección y personalización textil bajo pedido. Despachos locales en Valledupar y envíos nacionales asegurados.',
    url: 'https://variedadesisaias.com',
    siteName: 'Variedades Isaías',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Variedades Isaías — Confección y Personalización en Valledupar',
    description:
      'Taller textil especializado: DTF, Bordado Wilcom 3D y Sublimación fotográfica con envíos a todo Colombia.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Variedades Isaías',
  description:
    'Taller y estudio de confección y personalización textil en Valledupar, Cesar. Especialistas en estampado DTF térmico, bordado computarizado Wilcom y sublimación.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valledupar',
    addressRegion: 'Cesar',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.4631,
    longitude: -73.2532,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'COP',
  paymentAccepted: 'Efectivo, Transferencia Bancaria, Nequi, Daviplata',
  areaServed: [
    {
      '@type': 'City',
      name: 'Valledupar',
    },
    {
      '@type': 'Country',
      name: 'Colombia',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${workSans.variable} ${spaceMono.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#12151C] text-[#FFFFFF] antialiased selection:bg-[#3B82F6] selection:text-[#FFFFFF]">
        <CartProvider>
          {children}
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
