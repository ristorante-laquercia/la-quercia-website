import { esperienzeContent } from '@/lib/contents/esperienze'
import { Container } from '@/components/ui/container'
import type { GalleryStripItem } from '@/components/ui/gallery-strip'
import { GalleryStrip } from '@/components/ui/gallery-strip'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import imgAperibirraQuattroRagazzi from '@/public/assets/imgs/esperienze/gallery/aperibirra-con-quattro-ragazzi.jpg'
import imgAperitivoAperibirra from '@/public/assets/imgs/esperienze/gallery/aperitivo aperibirra.jpg'
import imgColazioneDettaglioPersone from '@/public/assets/imgs/esperienze/gallery/colazione-dei-campioni-dettaglio-con-persone-che-dialogano.jpg'
import imgDueBicchieriBirra from '@/public/assets/imgs/esperienze/gallery/due-bicchieri-di-birra-in-primo-piano.jpg'
import imgDueRagazzeRidono from '@/public/assets/imgs/esperienze/gallery/due-ragazze-ridono-mentre-bevono-della-birra.jpg'
import imgGiocoFreccette from '@/public/assets/imgs/esperienze/gallery/gioco-delle-freccette.jpg'
import imgBeerGarden from '@/public/assets/imgs/esperienze/gallery/il-beer-garden-della-ristobirreria-la-quercia.jpg'
import imgColazioneCampioni from '@/public/assets/imgs/esperienze/gallery/la-colazione-dei-campioni.jpg'
import imgColazioneDettaglio from '@/public/assets/imgs/esperienze/gallery/la-colazione-dei-campioni-un-dettaglio.jpg'
import imgRagazzaFacendoAperitivo from '@/public/assets/imgs/esperienze/gallery/ragazza-che-sta-facendo un aperitivo.jpg'
import imgRagazzaMangiaAperibirra from '@/public/assets/imgs/esperienze/gallery/ragazza-mentre-mangia-durante-un-aperibirra.jpg'
import imgTavolaApparecchiata from '@/public/assets/imgs/esperienze/gallery/tavola-apparecchiata-un-dettaglio.jpg'
import imgTavoloDueBicchieri from '@/public/assets/imgs/esperienze/gallery/tavolo-con-due-bicchieri-per-un-aperitivo.jpg'
import imgBicchiereSprite from '@/public/assets/imgs/esperienze/gallery/un-bicchiere-con-dello-spritz-pronto-per-essere-servito.jpg'
import imgDettaglioPastoColazione from '@/public/assets/imgs/esperienze/gallery/un-dettaglio-del-pasto-durante-la-colazione-dei-campioni.jpg'

const galleryItems: readonly GalleryStripItem[] = [
  { src: imgAperibirraQuattroRagazzi, alt: 'aperibirra-con-quattro-ragazzi', flexGrow: 30 },
  { src: imgDueRagazzeRidono, alt: 'due-ragazze-ridono-mentre-bevono-della-birra', flexGrow: 24 },
  { src: imgRagazzaMangiaAperibirra, alt: 'ragazza-mentre-mangia-durante-un-aperibirra', flexGrow: 22 },
  { src: imgBeerGarden, alt: 'il-beer-garden-della-ristobirreria-la-quercia', flexGrow: 32 },
  { src: imgTavoloDueBicchieri, alt: 'tavolo-con-due-bicchieri-per-un-aperitivo', flexGrow: 18 },
  { src: imgColazioneCampioni, alt: 'la-colazione-dei-campioni', flexGrow: 36 },
  { src: imgAperitivoAperibirra, alt: 'aperitivo aperibirra', flexGrow: 28 },
  { src: imgRagazzaFacendoAperitivo, alt: 'ragazza-che-sta-facendo un aperitivo', flexGrow: 24 },
  { src: imgGiocoFreccette, alt: 'gioco-delle-freccette', flexGrow: 20 },
  { src: imgDueBicchieriBirra, alt: 'due-bicchieri-di-birra-in-primo-piano', flexGrow: 20 },
  { src: imgBicchiereSprite, alt: 'un-bicchiere-con-dello-spritz-pronto-per-essere-servito', flexGrow: 18 },
  { src: imgTavolaApparecchiata, alt: 'tavola-apparecchiata-un-dettaglio', flexGrow: 24 },
  { src: imgColazioneDettaglioPersone, alt: 'colazione-dei-campioni-dettaglio-con-persone-che-dialogano', flexGrow: 28 },
  { src: imgColazioneDettaglio, alt: 'la-colazione-dei-campioni-un-dettaglio', flexGrow: 20 },
  { src: imgDettaglioPastoColazione, alt: 'un-dettaglio-del-pasto-durante-la-colazione-dei-campioni', flexGrow: 26 },
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden text-center font-gabarito font-black leading-none text-lq-dark/4"
        style={{ fontSize: 'clamp(6rem, 14vw, 18rem)' }}
      >
        {esperienzeContent.gallery.eyebrow}
      </span>

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
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

      <GalleryStrip items={galleryItems} className="mt-12" />
    </section>
  )
}
