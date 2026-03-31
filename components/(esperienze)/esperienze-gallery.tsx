import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { esperienzeContent } from '@/lib/contents/esperienze'

import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import galleryImage1 from '@/public/assets/demo/brunette-woman-brown-cap-white-tee-her-friend-stylish-top-smiles-rests-street-cafe.jpg'
import galleryImage2 from '@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg'
import galleryImage3 from '@/public/assets/demo/friends-playing-cards-bar.jpg'
import galleryImage4 from '@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg'
import galleryImage5 from '@/public/assets/demo/young-woman-eating-pasta-cafe.jpg'
import galleryImage6 from '@/public/assets/demo/restaurant-interior.jpg'
import galleryImage7 from '@/public/assets/demo/table-set-dinning-table.jpg'
import galleryImage8 from '@/public/assets/demo/toast-dinner.jpg'
import galleryImage9 from '@/public/assets/demo/restaurant-interior-2.jpg'
import galleryImage10 from '@/public/assets/demo/2151639899.jpg'
import galleryImage11 from '@/public/assets/demo/chef-cooking-food-restaurant-kitchen.jpg'

type GalleryItem = {
  src: StaticImageData
  alt: string
  flexGrow: number
}

type GalleryRow = {
  items: readonly GalleryItem[]
  heightClassName: string
}

const galleryRows: readonly GalleryRow[] = [
  {
    heightClassName: 'h-[8rem] sm:h-[13rem] md:h-[20rem] lg:h-[24rem]',
    items: [
      {
        src: galleryImage1,
        alt: 'Persone sedute in un momento conviviale',
        flexGrow: 36,
      },
      {
        src: galleryImage2,
        alt: "Coppia che brinda e sorride durante l'aperitivo",
        flexGrow: 22,
      },
      {
        src: galleryImage3,
        alt: 'Amici che giocano a carte nel locale',
        flexGrow: 30,
      },
      {
        src: galleryImage9,
        alt: 'Spazio interno adatto a incontri e momenti di vita',
        flexGrow: 20,
      },
    ],
  },
  {
    heightClassName: 'h-[11rem] sm:h-[17rem] md:h-[28rem] lg:h-[34rem]',
    items: [
      {
        src: galleryImage4,
        alt: 'Brindisi serale tra amici durante una ricorrenza',
        flexGrow: 42,
      },
      {
        src: galleryImage6,
        alt: 'Sala interna del ristorante pronta ad accogliere gli ospiti',
        flexGrow: 22,
      },
      {
        src: galleryImage5,
        alt: 'Momento rilassato al tavolo durante una pausa al locale',
        flexGrow: 30,
      },
    ],
  },
  {
    heightClassName: 'h-[6rem] sm:h-[10rem] md:h-[16rem] lg:h-[19rem]',
    items: [
      {
        src: galleryImage7,
        alt: 'Tavolo apparecchiato con atmosfera serale',
        flexGrow: 28,
      },
      {
        src: galleryImage8,
        alt: 'Dettaglio di brindisi durante il dopocena',
        flexGrow: 20,
      },
      {
        src: galleryImage10,
        alt: 'Birra servita al tavolo durante una serata speciale',
        flexGrow: 38,
      },
      {
        src: galleryImage11,
        alt: 'Chef al lavoro in cucina durante la preparazione dei piatti',
        flexGrow: 18,
      },
      {
        src: galleryImage3,
        alt: 'Giochi e convivialità nella serata del dopocena',
        flexGrow: 24,
      },
    ],
  },
]

export function EsperienzeGallery() {
  const titleId = 'esperienze-gallery-title'
  const descriptionId = 'esperienze-gallery-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Soft warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 z-0 size-144 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.04) 0%, transparent 65%)',
        }}
      />

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden text-center font-gabarito font-black leading-none text-lq-dark/[0.04]"
        style={{ fontSize: 'clamp(6rem, 14vw, 18rem)' }}
      >
        {esperienzeContent.gallery.eyebrow}
      </span>

      <Container className="relative z-10">
        <RevealGroup className="flex flex-col items-center gap-y-5 text-center" stagger={0.12} amount={0.2}>
          <RevealItem preset="fade-up" distance={18} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
              {esperienzeContent.gallery.eyebrow}
            </span>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-4xl font-gabarito text-5xl text-lq-dark lg:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {esperienzeContent.gallery.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-lg">
            <p id={descriptionId} className="text-xl text-lq-dark/55">
              {esperienzeContent.gallery.description}
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-10 mb-0" stagger={0} amount={0.3}>
          <RevealItem preset="fade-up" distance={10} duration={1.2}>
            <div className="h-px w-full bg-linear-to-r from-lq-orange/20 via-lq-orange/40 to-lq-orange/20" />
          </RevealItem>
        </RevealGroup>
      </Container>

      <div className="mt-12 space-y-2 md:space-y-2.5">
        {galleryRows.map((row, rowIndex) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: righe di layout stabili
          <div key={rowIndex} className="px-2 md:px-2.5">
            <div className={`flex gap-2 md:gap-2.5 ${row.heightClassName}`}>
              {row.items.map((item) => (
                <div
                  key={item.alt}
                  className="group relative min-w-0 overflow-hidden rounded-xl md:rounded-2xl"
                  style={{ flexGrow: item.flexGrow }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={item.src.blurDataURL}
                    sizes="(max-width: 768px) 40vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
