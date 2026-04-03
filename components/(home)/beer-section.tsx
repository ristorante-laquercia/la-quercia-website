import Image from 'next/image'
import Link from 'next/link'

import { BeerSteinDuotoneIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { homeContent } from '@/lib/contents/home'
import bgImage from '@/public/assets/demo/restaurant-interior-2.jpg'
import friendsImage from '@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg'

export function BeerSection() {
  const sectionTitleId = 'home-beer-title'
  const sectionDescriptionId = 'home-beer-description'

  return (
    <section
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescriptionId}
      className="relative z-40 overflow-hidden"
    >
      {/* Background photo */}
      <Image src={bgImage} alt="" fill placeholder="blur" className="object-cover object-center" aria-hidden />

      {/* Senape mask: solid on mobile, fades to transparent right on desktop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 max-md:bg-lq-senape md:bg-linear-to-r md:from-lq-senape md:from-35% md:to-transparent"
      />

      {/* Top fade to cover the seam with food section's diagonal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-1 h-16 bg-linear-to-b from-lq-senape to-transparent md:h-20 lg:h-24"
      />

      <Container className="relative z-10 py-32 lg:py-48">
        <RevealGroup className="flex flex-col gap-6 lg:gap-8" stagger={0.22} delayChildren={0.3} amount={0.2}>
          {/* Giant title */}
          <RevealItem preset="fade-up" duration={1.1} distance={24}>
            <h2
              id={sectionTitleId}
              className="text-[clamp(4.5rem,11vw,10.5rem)] leading-none font-gabarito font-black text-lq-dark"
            >
              {homeContent.beer.title}
            </h2>
          </RevealItem>

          {/* Bottom row: description + photo */}
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
            {/* Left: eyebrow + description + CTA */}
            <div className="flex flex-col gap-5">
              <RevealItem preset="fade-up" duration={1.0} distance={18}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-dark/70">Birreria</span>
              </RevealItem>

              <RevealItem preset="fade-up" duration={1.2} distance={22}>
                <div
                  id={sectionDescriptionId}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                  dangerouslySetInnerHTML={{
                    __html: homeContent.beer.description,
                  }}
                  className="space-y-4 text-lq-dark"
                />
              </RevealItem>

              <RevealItem preset="fade-up" duration={1.3} distance={24}>
                <Button asChild variant="custom" color="green" className="mt-2">
                  <Link
                    href={homeContent.beer.link.href}
                    aria-label={`${homeContent.beer.link.text}: ${homeContent.beer.title}`}
                  >
                    <BeerSteinDuotoneIcon className="size-6" />
                    {homeContent.beer.link.text}
                  </Link>
                </Button>
              </RevealItem>
            </div>

            {/* Right: single portrait photo */}
            <RevealItem preset="fade-up" duration={1.5} distance={36} className="self-end">
              <div className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl lg:max-w-sm">
                <Image
                  src={friendsImage}
                  alt="Amici che brindano al locale La Quercia"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </Container>
    </section>
  )
}
