import type { Metadata } from 'next'
import { esperienzeContent } from '@/lib/contents/esperienze'
import { CoworkingBanner } from '@/components/(esperienze)/coworking-banner'
import { EsperienzeCardsSection } from '@/components/(esperienze)/esperienze-cards-section'
import { EsperienzeEventsSection } from '@/components/(esperienze)/esperienze-events-section'
import { EsperienzeGallery } from '@/components/(esperienze)/esperienze-gallery'
import { EsperienzeIntroSection } from '@/components/(esperienze)/esperienze-intro-section'
import { VideoHero } from '@/components/video-hero'

const BASE_URL = process.env.BASE_URL ?? 'https://www.ristorante-laquercia.it'

export const metadata: Metadata = {
  title: 'Esperienze | La Quercia Ristobirreria – Aperitivo, Cene e Coworking',
  description:
    'Apertibirra, birra a caduta il venerdì, cene degustazione con Beer Sommelier, Drink & Play e spazio coworking gratuito. Vivi ogni momento a La Quercia come vuoi tu.',
  alternates: {
    canonical: `${BASE_URL}/esperienze`,
  },
  openGraph: {
    title: 'Esperienze | La Quercia Ristobirreria',
    description:
      "Dall'aperitivo al dopocena: Apertibirra, cene degustazione guidate dal Beer Sommelier, freccette & giochi, eventi speciali e spazio coworking gratuito a Termoli.",
    url: `${BASE_URL}/esperienze`,
    siteName: 'La Quercia Ristobirreria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/assets/imgs/esperienze/og-image-esperienze.png`,
        width: 1200,
        height: 630,
        alt: 'Le esperienze de La Quercia – aperitivo, cene degustazione e coworking a Termoli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esperienze | La Quercia Ristobirreria',
    description: "Ama, Degusta, Vivi: dall'Apertibirra al Drink & Play, ogni momento a La Quercia ha il suo ritmo.",
    images: [`${BASE_URL}/assets/imgs/esperienze/og-image-esperienze.png`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/esperienze`,
      url: `${BASE_URL}/esperienze`,
      name: 'Esperienze | La Quercia Ristobirreria',
      description:
        'Apertibirra, cene degustazione con Beer Sommelier, Drink & Play e coworking gratuito. Vivi ogni momento a La Quercia.',
      isPartOf: { '@id': `${BASE_URL}#website` },
      breadcrumb: { '@id': `${BASE_URL}/esperienze#breadcrumb` },
      inLanguage: 'it-IT',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/esperienze#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Esperienze', item: `${BASE_URL}/esperienze` },
      ],
    },
  ],
}

export default function EsperienzePage() {
  return (
    <main id="main-content" className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD strutturato, nessun input utente
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoHero
        videoSrc="/assets/video/esperienze.mp4"
        title={`<h1>${esperienzeContent.hero.title}</h1>`}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/58 to-black/78"
      />
      <EsperienzeIntroSection />
      <EsperienzeCardsSection />
      <EsperienzeEventsSection />
      <CoworkingBanner />
      <EsperienzeGallery />
    </main>
  )
}
