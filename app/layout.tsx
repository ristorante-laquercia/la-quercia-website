import '@/styles/globals.css'

import type { Metadata } from 'next'
import { barlow, gabarito } from '@/lib/fonts'
import { Footer } from '@/components/(footer)/footer'
import { Header } from '@/components/(header)/header'

export const metadata: Metadata = {
  title: {
    default: 'La Quercia – Ristobirreria a Termoli | Cucina alla Birra',
    template: '%s | La Quercia Ristobirreria',
  },
  description:
    'La Quercia è una Ristobirreria a Termoli: cavatelli fatti a mano, cucina alla birra con malto e luppolo, pizza artigianale e selezione guidata da Beer Sommelier.',
  openGraph: {
    images: [{ url: '/assets/imgs/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/imgs/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="overflow-y-auto no-scrollbar">
      <body className={`${barlow.variable} ${gabarito.variable} antialiased `}>
        <a href="#main-content" className="skip-to-content">
          Salta al contenuto principale
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
