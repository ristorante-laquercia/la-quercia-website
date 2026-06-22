import type { Metadata } from 'next'

import { VideoHero } from '@/components/video-hero'
import { PurposeContactList } from '@/components/(contatti)/purpose-contact-list'
import { ContactFormContainer } from '@/components/(contatti)/contact-form-container'

const BASE_URL = process.env.BASE_URL ?? 'https://www.ristorante-laquercia.it'

export const metadata: Metadata = {
  title: 'Contatti | La Quercia Ristobirreria – Prenota o Scrivici',
  description:
    'Prenota un tavolo, richiedi spazio coworking o invia il tuo CV. Contattaci per qualsiasi esigenza: siamo a Termoli e rispondiamo il prima possibile.',
  alternates: {
    canonical: `${BASE_URL}/contatti`,
  },
  openGraph: {
    title: 'Contatti | La Quercia Ristobirreria',
    description:
      'Prenota un tavolo a La Quercia, richiedi il nostro spazio coworking gratuito o mettiti in contatto con noi. A Termoli, sempre pronti ad accoglierti.',
    url: `${BASE_URL}/contatti`,
    siteName: 'La Quercia Ristobirreria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/assets/imgs/contatti/og-image-contatti.png`,
        width: 1200,
        height: 630,
        alt: 'Contatta La Quercia Ristobirreria a Termoli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contatti | La Quercia Ristobirreria',
    description: 'Prenota, scrivi o vieni a trovarci. La Quercia Ristobirreria a Termoli.',
    images: [`${BASE_URL}/assets/imgs/contatti/og-image-contatti.png`],
  },
}

export default function ContattiPage() {
  return (
    <main id="main-content" className="w-full overflow-x-clip">
      <VideoHero
        videoSrc="/assets/video/apparecchiare-tavola.mp4"
        title={'<h1>Ci vediamo a La Quercia</h1>'}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/60 to-black/78"
      />
      <PurposeContactList />
      <ContactFormContainer />
    </main>
  )
}
