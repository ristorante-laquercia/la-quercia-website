import Image from 'next/image'
import Link from 'next/link'
import { Headphone1Duotone } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import { homeContent } from '@/lib/contents/home'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import bgImage from '@/public/assets/imgs/home/amici-che-brindano.jpg'
import g1 from '@/public/assets/imgs/home/gallery/aperibirra-presso-ristobirreria-la-quercia.jpg'
import g2 from '@/public/assets/imgs/home/gallery/birra-dama.jpg'
import g4 from '@/public/assets/imgs/home/gallery/colazione-dei-campioni-presso-ristobirreria-la-quercia.jpg'
import g5 from '@/public/assets/imgs/home/gallery/freccette.jpg'
import g6 from '@/public/assets/imgs/home/gallery/metro birra.jpg'
import g9 from '@/public/assets/imgs/home/gallery/piatto-di-cavatelli-al-pomodoro.jpg'
import imgPulcherioConBirra from '@/public/assets/imgs/home/gallery/pulcherio-scutti-con-una-birra.jpg'
import g7 from '@/public/assets/imgs/home/gallery/ragazza-che-partecipa-al-drink-and-play.jpg'
import g8 from '@/public/assets/imgs/home/gallery/una-coppia-che-fa-aperitivo-presso-la-quercia.jpg'

const galleryImages = [
  { src: g1, alt: 'Aperitivo presso Ristobirreria La Quercia' },
  { src: g2, alt: 'Birra dama presso Ristobirreria La Quercia' },
  { src: g8, alt: 'Coppia che fa aperitivo presso Ristobirreria La Quercia' },
  { src: g9, alt: 'Piatto di cavatelli al pomodoro presso Ristobirreria La Quercia' },
  { src: g4, alt: 'Colazione dei campioni presso Ristobirreria La Quercia' },
  { src: g5, alt: 'Freccette' },
  { src: g6, alt: 'Il metro di birra' },
  { src: g7, alt: 'Ragazza che partecipa al drink and play presso Ristobirreria La Quercia' },
]

export function EventsSection() {
  const sectionTitleId = 'home-events-title'
  const sectionDescriptionId = 'home-events-description'

  return (
    <section
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescriptionId}
      className="relative z-30 w-full overflow-hidden"
    >
      {/* Background image + overlay */}
      <Image src={bgImage} alt="Gruppo di amici che brinda" fill placeholder="blur" className="object-cover" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-black/65" />

      <Container className="relative z-10 py-32 max-lg:max-w-xl max-lg:mx-auto lg:py-48">
        <RevealGroup className="flex flex-col gap-10 lg:gap-14" stagger={0.2} delayChildren={0.3} amount={0.15}>
          {/* Giant title */}
          <RevealItem preset="fade-up" duration={1.1} distance={24}>
            <h2
              id={sectionTitleId}
              className="text-[clamp(4.5rem,11vw,10.5rem)] leading-none font-gabarito font-black text-white"
            >
              {homeContent.events.title}
            </h2>
          </RevealItem>

          {/* First grid: text + wide photo */}
          <div className="grid grid-cols-1 items-start gap-x-12 gap-y-8 lg:grid-cols-[5fr_7fr]">
            {/* Left: eyebrow + description + CTA */}
            <div className="flex flex-col gap-5 text-white">
              <RevealItem preset="fade-up" duration={1.0} distance={18}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
                  {homeContent.events.kicker}
                </span>
              </RevealItem>
              <RevealItem preset="fade-up" duration={1.2} distance={22}>
                <div
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                  dangerouslySetInnerHTML={{ __html: homeContent.events.description }}
                  id={sectionDescriptionId}
                  className="space-y-4"
                />
              </RevealItem>
              <RevealItem preset="fade-up" duration={1.3} distance={24}>
                <Button asChild variant="custom" color="green" className="mt-2">
                  <Link
                    href={homeContent.events.link.href}
                    aria-label={`${homeContent.events.link.text}: ${homeContent.events.title}`}
                  >
                    <span aria-hidden="true" className="inline-flex">
                      <Lineicons icon={Headphone1Duotone} size={48} color="white" className="size-7" />
                    </span>
                    {homeContent.events.link.text}
                  </Link>
                </Button>
              </RevealItem>
            </div>

            {/* Right: wide landscape photo */}
            <RevealItem preset="fade-up" duration={1.5} distance={32}>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={imgPulcherioConBirra}
                  alt="ulcherio Scutti con una birra"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover object-[20%_20%]"
                />
              </div>
            </RevealItem>
          </div>

          {/* Mini gallery — 8 photos, 4 per row */}
          <RevealItem preset="fade-up" duration={1.4} distance={20}>
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:gap-3 lg:grid-cols-4">
              {galleryImages.map((img, i) => (
                <div
                  key={img.alt}
                  className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  )
}
