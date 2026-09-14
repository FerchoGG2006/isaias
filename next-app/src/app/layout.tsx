import type { Metadata } from 'next';
import { Roboto_Mono, Inter } from 'next/font/google';
import './globals.css';
import { QuoteProvider } from '@/context/QuoteContext';
import { Toast } from '@/components/ui/Toast';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { isaiasBusiness } from '@/config/brand';
import { generateLocalBusinessSchema } from '@/lib/seo/schema';

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
  title: {
    default: 'Variedades Isaías — Confección, Bordados & Estampados en Valledupar',
    template: '%s | Variedades Isaías',
  },
  description:
    'Taller especializado de confección y personalización textil en Valledupar, Cesar: Estampados suaves y duraderos, bordado computarizado fino Wilcom y prendas en telas frescas de alta calidad. Envíos nacionales.',
  keywords: [
    'confección valledupar',
    'estampados valledupar',
    'bordados computarizados cesar',
    'camisetas personalizadas valledupar',
    'sublimacion valledupar',
    'dotaciones empresariales valledupar',
    'bordado wilcom 3d',
    'estampado dtf textil',
    'variedades isaias',
  ],
  authors: [{ name: 'Variedades Isaías' }],
  creator: 'Variedades Isaías',
  publisher: 'Variedades Isaías',
  metadataBase: new URL('https://variedadesisaias.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

const jsonLd = generateLocalBusinessSchema(isaiasBusiness);

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
      <body className="bg-[#0C0D10] text-[#F4F1EA] antialiased selection:bg-[#C8A96E] selection:text-[#0C0D10] pb-16 md:pb-0">
        <GoogleAnalytics />
        <QuoteProvider>
          {children}
          <Toast />
          <MobileStickyBar />
        </QuoteProvider>
      </body>
    </html>
  );
}
