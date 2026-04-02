import Link from 'next/link'
import Image from 'next/image'
import Lineicons from '@lineiconshq/react-lineicons'
import { Headphone1Duotone } from '@lineiconshq/free-icons'

import { homeContent } from '@/lib/contents/home'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import bgImage from '@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg'
import wideImage from '@/public/assets/demo/restaurant-interior-2.jpg'
import g1 from '@/public/assets/demo/5210.jpg'
import g2 from '@/public/assets/demo/brunette-woman-brown-cap-white-tee-her-friend-stylish-top-smiles-rests-street-cafe.jpg'
import g3 from '@/public/assets/demo/table-set-dinning-table.jpg'
import g4 from '@/public/assets/demo/friends-eating-restaurant.jpg'
import g5 from '@/public/assets/demo/young-woman-eating-pasta-cafe.jpg'
import g6 from '@/public/assets/demo/restaurant-interior.jpg'
import g7 from '@/public/assets/demo/italian-lasagne-served-with-rocket-salad.jpg'
import g8 from '@/public/assets/demo/2151639899.jpg'

const galleryImages = [
  { src: g1, alt: 'Serata al La Quercia' },
  { src: g2, alt: 'Amici al bar La Quercia' },
  { src: g3, alt: 'Tavola apparecchiata al La Quercia' },
  { src: g4, alt: 'Amici a cena al La Quercia' },
  { src: g5, alt: 'Pasta artigianale al La Quercia' },
  { src: g6, alt: 'Interni del La Quercia' },
  { src: g7, alt: 'Lasagna al La Quercia' },
  { src: g8, alt: 'Atmosfera serale al La Quercia' },
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
      <Image src={bgImage} alt="" fill placeholder="blur" className="object-cover" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-black/65" />

      <Container className="relative z-10 py-32 lg:py-48">
        <RevealGroup
          className="flex flex-col gap-10 lg:gap-14"
          stagger={0.2}
          delayChildren={0.3}
          amount={0.15}
        >
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
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 md:grid-cols-[5fr_7fr]">
            {/* Left: eyebrow + description + CTA */}
            <div className="flex flex-col gap-5 text-white">
              <RevealItem preset="fade-up" duration={1.0} distance={18}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
                  Serate &amp; Concerti
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
                  src={wideImage}
                  alt="Atmosfera serale al La Quercia"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </RevealItem>
          </div>

          {/* Mini gallery — 8 photos, 4 per row */}
          <RevealItem preset="fade-up" duration={1.4} distance={20}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:gap-3">
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
