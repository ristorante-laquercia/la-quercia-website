import type { Metadata } from 'next'
import { cucinaContent } from '@/lib/contents/cucina'
import { CucinaGallery } from '@/components/(cucina)/cucina-gallery'
import { CucinaIntroSection } from '@/components/(cucina)/cucina-intro-section'
import { CucinaPizzaSection } from '@/components/(cucina)/cucina-pizza-section'
import { CucinaRootsSection } from '@/components/(cucina)/cucina-roots-section'
import { CucinaTechniquesSection } from '@/components/(cucina)/cucina-techniques-section'
import { VideoHero } from '@/components/video-hero'

const BASE_URL = process.env.BASE_URL ?? 'https://www.ristorante-laquercia.it'

export const metadata: Metadata = {
  title: 'La Cucina | La Quercia Ristobirreria – Campobasso',
  description:
    'Scopri la cucina de La Quercia: piatti alla birra artigianale, cavatelli freschi di Annamaria, ingredienti molisani stagionali e cucina certificata AIC senza glutine.',
  alternates: {
    canonical: `${BASE_URL}/cucina`,
  },
  openGraph: {
    title: 'La Cucina | La Quercia Ristobirreria',
    description:
      "Cucina alla birra, tradizione molisana e pizza d'autore. Ingredienti locali, cavatelli live e certificazione AIC per la cucina senza glutine.",
    url: `${BASE_URL}/cucina`,
    siteName: 'La Quercia Ristobirreria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/assets/imgs/cucina/og-image-cucina.png`,
        width: 1200,
        height: 630,
        alt: 'La cucina de La Quercia – piatti alla birra e tradizione molisana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Cucina | La Quercia Ristobirreria',
    description: 'Cucina alla birra, cavatelli live e ingredienti molisani. Certificati AIC dal 2013.',
    images: [`${BASE_URL}/assets/imgs/cucina/og-image-cucina.png`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/cucina`,
      url: `${BASE_URL}/cucina`,
      name: 'La Cucina | La Quercia Ristobirreria',
      description:
        'Cucina alla birra artigianale, cavatelli freschi, ingredienti molisani stagionali e cucina certificata AIC senza glutine.',
      isPartOf: { '@id': BASE_URL },
      breadcrumb: { '@id': `${BASE_URL}/cucina#breadcrumb` },
      inLanguage: 'it-IT',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/cucina#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'La Cucina',
          item: `${BASE_URL}/cucina`,
        },
      ],
    },
    {
      '@type': 'Restaurant',
      '@id': `${BASE_URL}#restaurant`,
      name: 'La Quercia Ristobirreria',
      url: BASE_URL,
      servesCuisine: ['Cucina Molisana', 'Cucina alla Birra', 'Pizza'],
      hasMenu: {
        '@type': 'Menu',
        name: 'Menu La Quercia',
        description: 'Piatti alla birra artigianale, cavatelli freschi, ingredienti molisani stagionali.',
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: 'Cucina alla Birra',
            description: 'Piatti che utilizzano luppolo, malto e birra artigianale come materia prima nobile.',
          },
          {
            '@type': 'MenuSection',
            name: 'Cavatelli Live',
            description: "Cavatelli freschi preparati ogni giorno da Annamaria su un antico tavolo del '900.",
          },
          {
            '@type': 'MenuSection',
            name: "Pizza d'Autore",
            description: 'Pizza artigianale con ingredienti selezionati.',
          },
        ],
      },
    },
  ],
}

export default function CucinaPage() {
  return (
    <main id="main-content" className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD strutturato, nessun input utente
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoHero
        videoSrc="/assets/video/cucina-hero.mp4"
        title={`<h1>${cucinaContent.hero.title}</h1>`}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/60 to-black/78"
      />
      <CucinaIntroSection />
      <CucinaTechniquesSection />
      <CucinaRootsSection />
      <div className="-mt-px">
        <CucinaPizzaSection />
      </div>
      <div className="-mt-px">
        <CucinaGallery />
      </div>
    </main>
  )
}
