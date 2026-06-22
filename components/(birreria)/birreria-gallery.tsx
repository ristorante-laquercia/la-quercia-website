import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { birreriaContent } from '@/lib/contents/birreria'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import imgAperitivoAperibirra from '@/public/assets/imgs/birreria/gallery/aperitivo-aperibirra.jpg'
import imgAssortimentoFrigorifero from '@/public/assets/imgs/birreria/gallery/assortimento-del-frigorifero-della-ristobirreria-la-quercia.jpg'
import imgBanconeBirreria from '@/public/assets/imgs/birreria/gallery/bancone-birreria-ristobirreria-la-quercia.jpg'
import imgBoccaleBirra from '@/public/assets/imgs/birreria/gallery/boccale-di-birra-appena-riempito-e-pronto-per-essere-servito.jpg'
import imgCocktailBirraDettaglio from '@/public/assets/imgs/birreria/gallery/cocktail-birra-un-dettaglio.jpg'
import imgCocktailBirra from '@/public/assets/imgs/birreria/gallery/cocktail-birra.jpg'
import imgDettaglioWall from '@/public/assets/imgs/birreria/gallery/dettaglio-del-wall-con-le-birre-del-mese.jpg'
import imgDettaglioAperibirra from '@/public/assets/imgs/birreria/gallery/dettaglio-di-un-aperibirra.jpg'
import imgDettaglioMensola from '@/public/assets/imgs/birreria/gallery/dettaglio-di-una-mensola-con-lattine-di-birra.jpg'
import imgSalaPrincipale from '@/public/assets/imgs/birreria/gallery/la-sala-principale-della-ristobirreria-la-quercia.jpg'
import imgPulcherioBirraDucato from '@/public/assets/imgs/birreria/gallery/pulcherio-scutti-che-ha-appena-preparato-una-birra-del-ducato.jpg'
import imgPulcherioConBirra from '@/public/assets/imgs/birreria/gallery/pulcherio-scutti-con-una-birra.jpg'
import imgScaffaleBirre from '@/public/assets/imgs/birreria/gallery/scaffale-con-delle-birre.jpg'
import imgUomoCocktail from '@/public/assets/imgs/birreria/gallery/uomo-che-prepara-un-cocktail-con-la-birra.jpg'

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
      { src: imgBanconeBirreria, alt: 'bancone-birreria-ristobirreria-la-quercia', flexGrow: 34 },
      { src: imgSalaPrincipale, alt: 'la-sala-principale-della-ristobirreria-la-quercia', flexGrow: 30 },
      { src: imgAperitivoAperibirra, alt: 'aperitivo-aperibirra', flexGrow: 24 },
      { src: imgDettaglioAperibirra, alt: 'dettaglio-di-un-aperibirra', flexGrow: 20 },
    ],
  },
  {
    heightClassName: 'h-[11rem] sm:h-[17rem] md:h-[28rem] lg:h-[34rem]',
    items: [
      { src: imgPulcherioBirraDucato, alt: 'pulcherio-scutti-che-ha-appena-preparato-una-birra-del-ducato', flexGrow: 28 },
      { src: imgPulcherioConBirra, alt: 'pulcherio-scutti-con-una-birra', flexGrow: 24 },
      { src: imgCocktailBirra, alt: 'cocktail-birra', flexGrow: 36 },
      { src: imgUomoCocktail, alt: 'uomo-che-prepara-un-cocktail-con-la-birra', flexGrow: 20 },
    ],
  },
  {
    heightClassName: 'h-[6rem] sm:h-[10rem] md:h-[16rem] lg:h-[19rem]',
    items: [
      { src: imgBoccaleBirra, alt: 'boccale-di-birra-appena-riempito-e-pronto-per-essere-servito', flexGrow: 18 },
      { src: imgCocktailBirraDettaglio, alt: 'cocktail-birra-un-dettaglio', flexGrow: 20 },
      { src: imgDettaglioWall, alt: 'dettaglio-del-wall-con-le-birre-del-mese', flexGrow: 28 },
      { src: imgDettaglioMensola, alt: 'dettaglio-di-una-mensola-con-lattine-di-birra', flexGrow: 18 },
      { src: imgScaffaleBirre, alt: 'scaffale-con-delle-birre', flexGrow: 24 },
      { src: imgAssortimentoFrigorifero, alt: 'assortimento-del-frigorifero-della-ristobirreria-la-quercia', flexGrow: 32 },
    ],
  },
]

export function BirreriaGallery() {
  const titleId = 'birreria-gallery-title'
  const descriptionId = 'birreria-gallery-description'

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
        style={{ fontSize: 'clamp(5rem, 12vw, 16rem)' }}
      >
        {birreriaContent.gallery.eyebrow}
      </span>

      <Container className="relative z-10">
        <RevealGroup className="flex flex-col items-center gap-y-5 text-center" stagger={0.12} amount={0.2}>
          <RevealItem preset="fade-up" distance={18} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
              {birreriaContent.gallery.eyebrow}
            </span>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-4xl font-gabarito text-5xl text-lq-dark lg:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {birreriaContent.gallery.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-lg">
            <p id={descriptionId} className="text-xl text-lq-dark/55">
              {birreriaContent.gallery.description}
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
