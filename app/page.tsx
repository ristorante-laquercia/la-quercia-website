import type { Metadata } from 'next'
import { AboutSection } from '@/components/(home)/about-section'
import { BeerSection } from '@/components/(home)/beer-section'
import { EventsSection } from '@/components/(home)/events-section'
import { FoodSection } from '@/components/(home)/food-section'
import { BookNowBanner } from '@/components/book-now-banner'
import { Hero } from '@/components/hero'

const BASE_URL = process.env.BASE_URL ?? 'https://www.ristorante-laquercia.it/'

export const metadata: Metadata = {
  title: 'La Quercia – Ristobirreria a Termoli | Cucina alla Birra',
  description:
    'La Quercia è una Ristobirreria a Termoli: cavatelli fatti a mano, cucina alla birra con malto e luppolo, pizza artigianale e una selezione guidata da un Beer Sommelier.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'La Quercia – Ristobirreria a Termoli',
    description:
      'Cavatelli live dal 1989, cucina alla birra con ingredienti molisani e una birreria guidata dal Beer Sommelier Pulcherio. Più di un ristorante: un luogo da vivere.',
    url: BASE_URL,
    siteName: 'La Quercia Ristobirreria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/assets/imgs/home/og-image-home.png`,
        width: 1200,
        height: 630,
        alt: 'La Quercia Ristobirreria – cucina alla birra e cavatelli live a Termoli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Quercia – Ristobirreria a Termoli',
    description: 'Cavatelli live, cucina alla birra e Beer Sommelier. Nati sotto una grande quercia, a Termoli.',
    images: [`${BASE_URL}/assets/imgs/home/og-image-home.png`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}#website`,
      url: BASE_URL,
      name: 'La Quercia Ristobirreria',
      inLanguage: 'it-IT',
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}#webpage`,
      url: BASE_URL,
      name: 'La Quercia – Ristobirreria a Termoli | Cucina alla Birra',
      description:
        'La Quercia è una Ristobirreria a Termoli: cavatelli fatti a mano, cucina alla birra con malto e luppolo, pizza artigianale e selezione guidata da Beer Sommelier.',
      isPartOf: { '@id': `${BASE_URL}#website` },
      about: { '@id': `${BASE_URL}#restaurant` },
      inLanguage: 'it-IT',
    },
    {
      '@type': 'Restaurant',
      '@id': `${BASE_URL}#restaurant`,
      name: 'La Quercia Ristobirreria',
      url: BASE_URL,
      image: `${BASE_URL}/assets/imgs/home/og-image-home.png`,
      description:
        'Ristobirreria nata sotto una grande quercia. Cavatelli fatti a mano da Annamaria dal 1989, cucina alla birra con malto e luppolo, e una selezione guidata dal Beer Sommelier Pulcherio.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Termoli',
        addressRegion: 'CB',
        addressCountry: 'IT',
      },
      servesCuisine: ['Cucina Molisana', 'Cucina alla Birra', 'Pizza'],
      email: 'info@ristorante-laquercia.it',
      sameAs: ['https://www.facebook.com/laquerciatermoli', 'https://www.instagram.com/laquerciatermoli/'],
    },
  ],
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen w-full">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD strutturato, nessun input utente
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <FoodSection />
      <BeerSection />
      <EventsSection />
      <BookNowBanner />
    </main>
  )
}
