import { chiSiamoContent } from '@/lib/contents/chi-siamo'
import type { GalleryStripItem } from '@/components/ui/gallery-strip'
import { GalleryStrip } from '@/components/ui/gallery-strip'
import imgDettaglioCavatelli from '@/public/assets/imgs/chi-siamo/gallery/dettaglio-di-cavatelli-fatti-in-casa.jpg'
import imgDettaglioPizzaForno from '@/public/assets/imgs/chi-siamo/gallery/dettaglio-pizza-nel-forno-per-la-cottura.jpg'
import imgPersoneDialogano from '@/public/assets/imgs/chi-siamo/gallery/persone-dialogano-davanti-ad-un-bicchiere-di-birra.jpg'
import imgStinco from '@/public/assets/imgs/chi-siamo/gallery/piatto-con-uno-stinco-di-maiale.jpg'
import imgPreparazioneCavatelli from '@/public/assets/imgs/chi-siamo/gallery/preparazione-di-un-piatto-di-cavatelli-alla-birra.jpg'
import imgPulcherioBeerSommelier from '@/public/assets/imgs/chi-siamo/gallery/pulcherio-scutti-beer-sommelier.jpg'
import imgSignoraAnnamaria from '@/public/assets/imgs/chi-siamo/gallery/signora-annamaria-che-impasta.jpg'
import imgTavoloBrinda from '@/public/assets/imgs/chi-siamo/gallery/tavolo-di-persone-brinda.jpg'

const galleryItems: readonly GalleryStripItem[] = [
  { src: imgPulcherioBeerSommelier, alt: 'Pulcherio Scutti Beer Sommelier', flexGrow: 24 },
  { src: imgSignoraAnnamaria, alt: 'Signora Annamaria che impasta', flexGrow: 24 },
  { src: imgDettaglioPizzaForno, alt: 'Dettaglio pizza nel forno per la cottura', flexGrow: 28 },
  { src: imgStinco, alt: 'Piatto con uno stinco di maiale', flexGrow: 32 },
  { src: imgDettaglioCavatelli, alt: 'Dettaglio di cavatelli fatti in casa', flexGrow: 22 },
  { src: imgPersoneDialogano, alt: 'Persone dialogano davanti ad un bicchiere di birra', flexGrow: 30 },
  { src: imgPreparazioneCavatelli, alt: 'Preparazione di un piatto di cavatelli alla birra', flexGrow: 26 },
  { src: imgTavoloBrinda, alt: 'Tavolo di persone brinda', flexGrow: 34 },
]

export function AboutGallery() {
  const titleId = 'about-gallery-title'
  const descriptionId = 'about-gallery-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-cream py-24 lg:py-32"
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
        className="pointer-events-none absolute -left-40 top-1/3 z-0 size-144 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.05) 0%, transparent 65%)',
        }}
      />

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden text-center font-gabarito font-black leading-none text-lq-dark/4"
        style={{ fontSize: 'clamp(5rem, 12vw, 16rem)' }}
      >
        {chiSiamoContent.gallery.eyebrow}
      </span>
      <GalleryStrip items={galleryItems} className="mt-12" />
    </section>
  )
}
