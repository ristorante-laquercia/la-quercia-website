import type { Metadata } from 'next'
import { PhilosophyBlock } from '@/components/(chi-siamo)/philosophy-block'
import { PresentSection } from '@/components/(chi-siamo)/present-section'
import { RadiciSection } from '@/components/(chi-siamo)/radici-section'
import { VideoHero } from '@/components/video-hero'

const BASE_URL = process.env.BASE_URL ?? 'https://www.ristorante-laquercia.it'

export const metadata: Metadata = {
  title: 'Chi Siamo | La Quercia Ristobirreria – La nostra storia dal 1989',
  description:
    'Dal 1989 sotto una grande quercia a Termoli: la storia di Antonio e Annamaria, i cavatelli fatti a mano, la svolta birraria di Pulcherio e la filosofia che ci guida ogni giorno.',
  alternates: {
    canonical: `${BASE_URL}/chi-siamo`,
  },
  openGraph: {
    title: 'Chi Siamo | La Quercia Ristobirreria',
    description:
      'Radici profonde dal 1989 e nuovi orizzonti: i cavatelli live di Annamaria, la passione birraria di Pulcherio Beer Sommelier e una filosofia di accoglienza autentica.',
    url: `${BASE_URL}/chi-siamo`,
    siteName: 'La Quercia Ristobirreria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/assets/imgs/chi-siamo/og-image-about.png`,
        width: 1200,
        height: 630,
        alt: 'La storia de La Quercia – famiglia, tradizione e birra artigianale a Termoli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Siamo | La Quercia Ristobirreria',
    description: 'Dal 1989 sotto una grande quercia: cavatelli live, birra artigianale e una famiglia che ci mette tutto.',
    images: [`${BASE_URL}/assets/imgs/chi-siamo/og-image-about.png`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/chi-siamo`,
      url: `${BASE_URL}/chi-siamo`,
      name: 'Chi Siamo | La Quercia Ristobirreria',
      description:
        'Dal 1989 sotto una grande quercia a Termoli: la storia di Antonio e Annamaria, i cavatelli fatti a mano e la svolta birraria di Pulcherio Beer Sommelier.',
      isPartOf: { '@id': `${BASE_URL}#website` },
      breadcrumb: { '@id': `${BASE_URL}/chi-siamo#breadcrumb` },
      inLanguage: 'it-IT',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/chi-siamo#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Chi Siamo', item: `${BASE_URL}/chi-siamo` },
      ],
    },
  ],
}

export default function ChiSiamoPage() {
  return (
    <main id="main-content" className="w-full">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD strutturato, nessun input utente
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoHero
        videoSrc="/assets/video/chi-siamo-hero.mp4"
        title={'<h1>Radici profonde,<br/ > nuovi orizzonti.</h1>'}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/60 to-black/78"
      />
      <RadiciSection />
      <PresentSection />
      <div className="-mt-px">
        <PhilosophyBlock />
      </div>
    </main>
  )
}
