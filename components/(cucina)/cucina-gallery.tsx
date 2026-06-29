import { cucinaContent } from '@/lib/contents/cucina'
import { Container } from '@/components/ui/container'
import type { GalleryStripItem } from '@/components/ui/gallery-strip'
import { GalleryStrip } from '@/components/ui/gallery-strip'
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
import imgPulcherioPreparaPiatto from '@/public/assets/imgs/cucina/gallery/pulcherio-scutti-mentre-prepara-un-piatto-di-carne.jpg'
import imgStinco from '@/public/assets/imgs/cucina/gallery/stinco-di-maiale.jpg'
import imgStincoConPatatine from '@/public/assets/imgs/cucina/gallery/stinco-di-maiale-servito-con-patatine-e-varie-salse.jpg'
import imgTagliereMisto from '@/public/assets/imgs/cucina/gallery/tagliere-misto-con-formaggi.jpg'

const galleryItems: readonly GalleryStripItem[] = [
  { src: imgCavatelliLuppolo, alt: 'Cavatelli con luppolo', flexGrow: 42 },
  { src: imgDettaglioCavatelli, alt: 'Dettaglio di un piatto di cavatelli con sugo', flexGrow: 18 },
  { src: imgPizzaPecorino, alt: 'Pizza che viene condita con del pecorino', flexGrow: 34 },
  { src: imgTagliereMisto, alt: 'Tagliere misto con formaggi', flexGrow: 22 },
  { src: imgStincoConPatatine, alt: 'Stinco di maiale servito con patatine e varie salse', flexGrow: 28 },
  { src: imgCucinaMolisana, alt: 'Cucina tipica molisana', flexGrow: 36 },
  { src: imgFilettoLime, alt: 'Filetto lime e pepe', flexGrow: 26 },
  { src: imgSalumi, alt: 'Piatto di salumi serviti al tavolo ad una persona', flexGrow: 20 },
  {
    src: imgPulcherioPreparaPiatto,
    alt: 'Pulcherio Scutti mentre prepara un piatto di carne',
    flexGrow: 14,
  },
  { src: imgMaltoAffumicato, alt: 'Malto affumicato in un bicchiere', flexGrow: 20 },
  { src: imgCavatelliTagliere, alt: 'Cavatelli sul tagliere in legno', flexGrow: 33 },
  { src: imgDettaglioPizza, alt: 'Dettaglio di un tubo di pizza', flexGrow: 20 },
  { src: imgPreparazioneCavatelli, alt: 'Preparazione di un piatto di cavatelli', flexGrow: 28 },
  { src: imgStinco, alt: 'Stinco di maiale', flexGrow: 36 },
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

      <GalleryStrip items={galleryItems} className="mt-12" />
    </section>
  )
}
