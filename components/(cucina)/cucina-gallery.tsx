import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { cucinaContent } from '@/lib/contents/cucina'

import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import imgCavatelliLuppolo from '@/public/assets/imgs/cucina/gallery/cavatelli-con-luppolo.jpg'
import imgCavatelliTagliere from '@/public/assets/imgs/cucina/gallery/cavatelli-sul-tagliere-in-legno.jpg'
import imgCucinaMolisana from '@/public/assets/imgs/cucina/gallery/cucina-tipica-molisana.jpg'
import imgDettaglioCavatelli from '@/public/assets/imgs/cucina/gallery/dettaglio-di-un-piatto-di-cavatelli-con-sugo.jpg'
import imgDettaglioPizza from '@/public/assets/imgs/cucina/gallery/dettaglio-di-un-tubbbo-di-pizza.jpg'
import imgFilettoLime from '@/public/assets/imgs/cucina/gallery/filetto-lime-e-pepe.jpg'
import imgMaltoAffumicato from '@/public/assets/imgs/cucina/gallery/malto-affumicato-in-un-bicchiere.jpg'
import imgSalumi from '@/public/assets/imgs/cucina/gallery/piatto-di-salumi-serviti-al-tavolo-ad-una-persona.jpg'
import imgPizzaPecorino from '@/public/assets/imgs/cucina/gallery/pizza-che-viene-condita-con-del-pecorino.jpg'
import imgPreparazioneCavatelli from '@/public/assets/imgs/cucina/gallery/preparazione-di-un-piatto-di-cavatelli.jpg'
import imgStincoConPatatine from '@/public/assets/imgs/cucina/gallery/stinco-di-maiale-servito-con-patatine-e-varie-salse.jpg'
import imgTagliereMisto from '@/public/assets/imgs/cucina/gallery/tagliere-misto-con-formaggi.jpg'

type GalleryItem = {
  src: StaticImageData
  alt: string
  /** Peso proporzionale usato come flex-grow per riempire la riga */
  flexGrow: number
  /** Nasconde l'elemento sotto il breakpoint indicato */
  hideBelow?: 'sm' | 'md' | 'lg'
}

type GalleryRow = {
  items: readonly GalleryItem[]
  heightClassName: string
}

const galleryRows: readonly GalleryRow[] = [
  {
    // Riga media: 4 foto — visibili 2 / 3 / 4 per breakpoint
    heightClassName: 'h-[12rem] sm:h-[13rem] md:h-[20rem] lg:h-[24rem]',
    items: [
      { src: imgCavatelliLuppolo, alt: 'Cavatelli con luppolo', flexGrow: 42 },
      { src: imgDettaglioCavatelli, alt: 'Dettaglio di un piatto di cavatelli con sugo', flexGrow: 18 },
      { src: imgPizzaPecorino, alt: 'Pizza che viene condita con del pecorino', flexGrow: 34, hideBelow: 'sm' },
      { src: imgTagliereMisto, alt: 'Tagliere misto con formaggi', flexGrow: 22, hideBelow: 'lg' },
    ],
  },
  {
    // Riga alta: 4 foto — visibili 2 / 3 / 4 per breakpoint
    heightClassName: 'h-[11rem] sm:h-[17rem] md:h-[28rem] lg:h-[34rem]',
    items: [
      { src: imgStincoConPatatine, alt: 'Stinco di maiale servito con patatine e varie salse', flexGrow: 28 },
      { src: imgCucinaMolisana, alt: 'Cucina tipica molisana', flexGrow: 36 },
      { src: imgFilettoLime, alt: 'Filetto lime e pepe', flexGrow: 26, hideBelow: 'sm' },
      { src: imgSalumi, alt: 'Piatto di salumi serviti al tavolo ad una persona', flexGrow: 20, hideBelow: 'lg' },
    ],
  },
  {
    // Riga bassa: 4 foto — visibili 2 / 3 / 4 per breakpoint
    heightClassName: 'h-[12rem] sm:h-[10rem] md:h-[16rem] lg:h-[19rem]',
    items: [
      { src: imgMaltoAffumicato, alt: 'Malto affumicato in un bicchiere', flexGrow: 20 },
      { src: imgCavatelliTagliere, alt: 'Cavatelli sul tagliere in legno', flexGrow: 33 },
      { src: imgDettaglioPizza, alt: 'Dettaglio di un tubo di pizza', flexGrow: 20, hideBelow: 'sm' },
      { src: imgPreparazioneCavatelli, alt: 'Preparazione di un piatto di cavatelli', flexGrow: 28, hideBelow: 'lg' },
    ],
  },
]

export function CucinaGallery() {
  const titleId = 'cucina-gallery-title'
  const descriptionId = 'cucina-gallery-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-24 lg:py-32"
    >
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
        }}
      />

      {/* Radial accent glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 z-0 size-144 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.06) 0%, transparent 65%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 z-0 size-144 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.06) 0%, transparent 65%)',
        }}
      />

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden text-center font-gabarito font-black leading-none text-white/2.5"
        style={{ fontSize: 'clamp(6rem, 14vw, 18rem)' }}
      >
        {cucinaContent.gallery.eyebrow}
      </span>

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
        <RevealGroup className="flex flex-col items-center gap-y-5 text-center" stagger={0.12} amount={0.2}>
          <RevealItem preset="fade-up" distance={18} duration={1}>
            <div className="flex items-center gap-4">
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
                {cucinaContent.gallery.eyebrow}
              </span>
            </div>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-4xl font-gabarito text-5xl text-lq-senape lg:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {cucinaContent.gallery.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-lg">
            <p id={descriptionId} className="text-xl text-white/55">
              {cucinaContent.gallery.description}
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
                  className={cn(
                    'group relative min-w-0 overflow-hidden rounded-xl md:rounded-2xl',
                    item.hideBelow === 'sm' && 'hidden sm:block',
                    item.hideBelow === 'md' && 'hidden md:block',
                    item.hideBelow === 'lg' && 'hidden lg:block',
                  )}
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
