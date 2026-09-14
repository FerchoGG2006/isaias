import { Business } from '@/domain';

export function generateLocalBusinessSchema(business: Business) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://variedadesisaias.com';

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ClothingStore'],
    '@id': `${siteUrl}/#localbusiness`,
    name: business.name,
    alternateName: 'Variedades Isaías Valledupar',
    url: siteUrl,
    logo: `${siteUrl}${business.logoUrl}`,
    image: [
      `${siteUrl}/assets/hero-main.jpg`,
      `${siteUrl}/media/embroidery-machine.jpeg`,
      `${siteUrl}${business.logoUrl}`,
    ],
    description: business.description,
    telephone: `+${business.whatsappPhone}`,
    email: business.email || 'contacto@variedadesisaias.com',
    priceRange: '$$',
    currenciesAccepted: 'COP',
    paymentAccepted: 'Efectivo, Transferencia Bancolombia, Nequi, Daviplata',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress || 'Calle 16 # 19A - 45',
      addressLocality: business.city,
      addressRegion: business.department,
      postalCode: '200001',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.46314,
      longitude: -73.25322,
    },
    hasMap: business.googleMapsUrl || 'https://maps.google.com/?q=Calle+16+%23+19A+-+45,+Valledupar,+Cesar,+Colombia',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Valledupar',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Cesar',
      },
      {
        '@type': 'Country',
        name: 'Colombia',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
      bestRating: '5',
      worstRating: '1',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bordado Computarizado Wilcom 3D',
          description: 'Bordado de alta definición y puntada en relieve sobre prendas corporativas y uniformes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Estampado DTF Textil',
          description: 'Técnica de transferencia digital directa con curado a 160°C de tacto elástico y suave.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sublimación Fotográfica 4K',
          description: 'Termofijación a 200°C sobre telas de poliéster, mugs cerámicos y botellas térmicas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Confección en Tela Fresca Piel de Durazno',
          description: 'Prendas confeccionadas en 220g para alta transpirabilidad y confort en clima cálido.',
        },
      },
    ],
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbsSchema(items: BreadcrumbItem[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://variedadesisaias.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
