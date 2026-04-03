import Link from 'next/link'
import Image from 'next/image'
import Lineicons from '@lineiconshq/react-lineicons'
import { KnifeFork1Duotone } from '@lineiconshq/free-icons'

import { homeContent } from '@/lib/contents/home'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import sectionImage from '@/public/assets/demo/restaurant-interior-2.jpg'
import friendsImage from '@/public/assets/demo/friends-playing-cards-bar.jpg'

export function AboutSection() {
  const sectionTitleId = 'home-about-title'
  const sectionDescriptionId = 'home-about-description'

  return (
    <section
      className="relative z-20 overflow-hidden bg-white py-24 lg:py-40"
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescriptionId}
    >
      {/* Main content */}
      <Container>
        <RevealGroup
          className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16 xl:gap-20"
          stagger={0.18}
          delayChildren={0.25}
          amount={0.15}
        >
          {/* Left column: stacked images */}
          <div className="flex flex-col gap-3.5">
            <RevealItem preset="fade-up" duration={1.3} distance={28}>
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={sectionImage}
                  alt="Interno del locale La Quercia"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </RevealItem>

            <RevealItem preset="fade-up" duration={1.5} distance={32}>
              <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  src={friendsImage}
                  alt={homeContent.about.images[0].alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </RevealItem>
          </div>

          {/* Right column: narrative content */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-y-2">
              <RevealItem preset="fade-up" duration={1.0} distance={20}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
                  {homeContent.about.subTitle}
                </span>
              </RevealItem>

              <RevealItem preset="fade-up" duration={1.05} distance={22}>
                <h2 id={sectionTitleId}>{homeContent.about.title}</h2>
              </RevealItem>
            </div>

            <RevealItem preset="fade-up" duration={1.15} distance={22}>
              <div
                id={sectionDescriptionId}
                // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                dangerouslySetInnerHTML={{ __html: homeContent.about.description }}
                className="space-y-4
                  [&_span]:font-bold
                  [&>p:last-child]:border-l-[3px]
                  [&>p:last-child]:border-lq-orange
                  [&>p:last-child]:pl-5
                  [&>p:last-child]:bg-(--lq-orange)/4
                  [&>p:last-child]:py-3
                  [&>p:last-child]:rounded-r-lg
                  [&>p:last-child]:mt-2
                  [&>p:last-child]:italic"
              />
            </RevealItem>

            <RevealItem preset="fade-up" duration={1.25} distance={26}>
              <Button asChild variant="custom" color="green">
                <Link href={homeContent.about.link.href}>
                  <Lineicons icon={KnifeFork1Duotone} size={48} color="white" className="size-7" aria-hidden="true" />
                  {homeContent.about.link.text}
                </Link>
              </Button>
            </RevealItem>
          </div>
        </RevealGroup>
      </Container>
    </section>
  )
}
