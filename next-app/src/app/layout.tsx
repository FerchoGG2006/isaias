import type { Metadata } from 'next';
import { Roboto_Mono, Inter } from 'next/font/google';
import './globals.css';
import { QuoteProvider } from '@/context/QuoteContext';
import { Toast } from '@/components/ui/Toast';

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Variedades Isaías — Confección, Bordados & Estampados en Valledupar',
  description:
    'Taller especializado de confección y personalización textil en Valledupar, Cesar: Estampados suaves y duraderos, bordado computarizado fino y prendas en telas frescas de alta calidad.',
  keywords: [
    'confección valledupar',
    'estampados valledupar',
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
    title: 'Variedades Isaías — Confección, Bordados & Estampados en Valledupar',
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
      'Taller textil especializado: Confección, bordados de alta definición y estampados fotográficos con envíos a todo Colombia.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Variedades Isaías',
  description:
    'Taller y estudio de confección y personalización textil en Valledupar, Cesar. Especialistas en estampados duraderos, bordados finos y dotaciones empresariales.',
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
    <html lang="es" className={`${robotoMono.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0C0D10] text-[#F4F1EA] antialiased selection:bg-[#C8A96E] selection:text-[#0C0D10]">
        <QuoteProvider>
          {children}
          <Toast />
        </QuoteProvider>
      </body>
    </html>
  );
}
