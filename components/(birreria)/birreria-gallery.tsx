import { birreriaContent } from '@/lib/contents/birreria'
import { Container } from '@/components/ui/container'
import type { GalleryStripItem } from '@/components/ui/gallery-strip'
import { GalleryStrip } from '@/components/ui/gallery-strip'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import imgAperitivoAperibirra from '@/public/assets/imgs/birreria/gallery/aperitivo-aperibirra.jpg'
import imgAssortimentoFrigorifero from '@/public/assets/imgs/birreria/gallery/assortimento-del-frigorifero-della-ristobirreria-la-quercia.jpg'
import imgBanconeBirreria from '@/public/assets/imgs/birreria/gallery/bancone-birreria-ristobirreria-la-quercia.jpg'
import imgBirraRossa from '@/public/assets/imgs/birreria/gallery/birra-rossa-in-un-boccale-tenuta-in-mano.jpg'
import imgBoccaleBirra from '@/public/assets/imgs/birreria/gallery/boccale-di-birra-appena-riempito-e-pronto-per-essere-servito.jpg'
import imgBoccaliRiempimento from '@/public/assets/imgs/birreria/gallery/boccali-di-birra-durante-la-fase-di-riempimento.jpg'
import imgDettaglioWall from '@/public/assets/imgs/birreria/gallery/dettaglio-del-wall-con-le-birre-del-mese.jpg'
import imgDettaglioAperibirra from '@/public/assets/imgs/birreria/gallery/dettaglio-di-un-aperibirra.jpg'
import imgDettaglioMensola from '@/public/assets/imgs/birreria/gallery/dettaglio-di-una-mensola-con-lattine-di-birra.jpg'
import imgSalaPrincipale from '@/public/assets/imgs/birreria/gallery/la-sala-principale-della-ristobirreria-la-quercia.jpg'
import imgPulcherioBirraDucato from '@/public/assets/imgs/birreria/gallery/pulcherio-scutti-che-ha-appena-preparato-una-birra-del-ducato.jpg'
import imgPulcherioCartello from '@/public/assets/imgs/birreria/gallery/pulcherio-scutti-con-cartello-chiedere-una-birra-piccola-e-immorale.jpg'
import imgScaffaleBirre from '@/public/assets/imgs/birreria/gallery/scaffale-con-delle-birre.jpg'
import imgTreBoccali from '@/public/assets/imgs/birreria/gallery/tre-boccali-di-birra-su-un-bancone.jpg'

const galleryItems: readonly GalleryStripItem[] = [
  { src: imgBanconeBirreria, alt: 'Bancone birreria La Quercia', flexGrow: 34 },
  { src: imgSalaPrincipale, alt: 'La sala principale della ristobirreria La Quercia', flexGrow: 30 },
  { src: imgAperitivoAperibirra, alt: 'Aperitivo aperibirra', flexGrow: 24 },
  { src: imgDettaglioAperibirra, alt: 'Dettaglio di un aperibirra', flexGrow: 20 },
  { src: imgPulcherioBirraDucato, alt: 'Pulcherio Scutti con una birra del Ducato', flexGrow: 28 },
  { src: imgPulcherioCartello, alt: "Pulcherio Scutti con cartello 'Chiedere una birra piccola è immorale'", flexGrow: 28 },
  { src: imgBirraRossa, alt: 'Birra rossa in un boccale tenuta in mano', flexGrow: 24 },
  { src: imgBoccaliRiempimento, alt: 'Boccali di birra durante la fase di riempimento', flexGrow: 20 },
  { src: imgBoccaleBirra, alt: 'Boccale di birra appena riempito', flexGrow: 18 },
  { src: imgTreBoccali, alt: 'Tre boccali di birra su un bancone', flexGrow: 26 },
  { src: imgDettaglioWall, alt: 'Dettaglio del wall con le birre del mese', flexGrow: 28 },
  { src: imgDettaglioMensola, alt: 'Dettaglio di una mensola con lattine di birra', flexGrow: 18 },
  { src: imgScaffaleBirre, alt: 'Scaffale con delle birre', flexGrow: 24 },
  { src: imgAssortimentoFrigorifero, alt: 'Assortimento del frigorifero della ristobirreria La Quercia', flexGrow: 32 },
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden text-center font-gabarito font-black leading-none text-lq-dark/4"
        style={{ fontSize: 'clamp(5rem, 12vw, 16rem)' }}
      >
        {birreriaContent.gallery.eyebrow}
      </span>

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
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

      <GalleryStrip items={galleryItems} className="mt-12" />
    </section>
  )
}
