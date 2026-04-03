import type { Metadata } from 'next'

import { birreriaContent } from '@/lib/contents/birreria'

import { VideoHero } from '@/components/video-hero'
import { BirreriabirrificiSection } from '@/components/(birreria)/birreria-birrifici-section'
import { BirreriaConnectSection } from '@/components/(birreria)/birreria-connect-section'
import { BirreriaGallery } from '@/components/(birreria)/birreria-gallery'
import { BirreriaLogosSection } from '@/components/(birreria)/birreria-logos-section'
import { BirreriaSelezioneSection } from '@/components/(birreria)/birreria-selezione-section'
import { BirreriaSpillaturaSection } from '@/components/(birreria)/birreria-spillatura-section'

const BASE_URL = process.env.BASE_URL ?? 'https://www.ristorante-laquercia.it'

export const metadata: Metadata = {
  title: 'La Birreria | La Quercia Ristobirreria – Campobasso',
  description:
    'Scopri la birreria de La Quercia: selezione di birre artigianali alla spina, birrifici Ferdinand e Augustiner, spillatura professionale con Beer Sommelier.',
  alternates: {
    canonical: `${BASE_URL}/birreria`,
  },
  openGraph: {
    title: 'La Birreria | La Quercia Ristobirreria',
    description:
      'Birre artigianali alla spina, selezione internazionale in bottiglia e lattina. Spillatura guidata dal Beer Sommelier Pulcherio Scutti.',
    url: `${BASE_URL}/birreria`,
    siteName: 'La Quercia Ristobirreria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/assets/og/birreria.jpg`,
        width: 1200,
        height: 630,
        alt: 'La birreria de La Quercia – birre artigianali alla spina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Birreria | La Quercia Ristobirreria',
    description: 'Birre alla spina, Ferdinand, Augustiner e un Beer Sommelier che ti guida nella scelta.',
    images: [`${BASE_URL}/assets/og/birreria.jpg`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/birreria`,
      url: `${BASE_URL}/birreria`,
      name: 'La Birreria | La Quercia Ristobirreria',
      description:
        'Birre artigianali alla spina, selezione internazionale in bottiglia e lattina. Spillatura guidata dal Beer Sommelier.',
      isPartOf: { '@id': BASE_URL },
      breadcrumb: { '@id': `${BASE_URL}/birreria#breadcrumb` },
      inLanguage: 'it-IT',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/birreria#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'La Birreria',
          item: `${BASE_URL}/birreria`,
        },
      ],
    },
  ],
}

export default function BirreriaPage() {
  return (
    <main id="main-content" className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD strutturato, nessun input utente
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoHero
        videoSrc="/assets/demo/0_Friends_People_3840x2160.mp4"
        fallbackVideoSrc="/assets/demo/6038167_People_Friends_1920x1080.mp4"
        title={`<h1>${birreriaContent.hero.title}</h1>`}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/58 to-black/78"
      />
      <BirreriaSelezioneSection />
      <BirreriaSpillaturaSection />
      <BirreriabirrificiSection />
      <BirreriaLogosSection />
      <BirreriaGallery />
      <BirreriaConnectSection />
    </main>
  )
}
