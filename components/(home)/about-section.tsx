import Link from 'next/link'
import Lineicons from '@lineiconshq/react-lineicons'
import { KnifeFork1Duotone } from '@lineiconshq/free-icons'

import { homeContent } from '@/lib/contents/home'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { AboutRootsBackground } from '@/components/(home)/about-roots-background'

export function AboutSection() {
  const sectionTitleId = 'home-about-title'
  const sectionDescriptionId = 'home-about-description'

  return (
    <section
      className="relative z-20 overflow-visible bg-white py-24 sm:pb-20 lg:py-40"
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescriptionId}
    >
      <AboutRootsBackground />

      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-x-4 gap-y-12 md:gap-y-10 lg:gap-x-10"
          stagger={0.24}
          delayChildren={0.32}
          amount={0.25}
        >
          <div className="flex flex-col space-y-4">
            <div>
              <RevealItem preset="fade-up" duration={1.1} distance={22}>
                <span className="text-lq-orange text-lg font-black">{homeContent.about.subTitle}</span>
              </RevealItem>
              <RevealItem preset="fade-up" duration={1.1} distance={22}>
                <h2 id={sectionTitleId}>{homeContent.about.title}</h2>
              </RevealItem>
            </div>

            <RevealItem preset="fade-up" duration={1.2} distance={24}>
              <div
                id={sectionDescriptionId}
                // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                dangerouslySetInnerHTML={{
                  __html: homeContent.about.description,
                }}
                className="space-y-4 [&_span]:font-bold"
              />
            </RevealItem>

            <RevealItem preset="fade-up" duration={1.2} distance={26}>
              <Button asChild variant={'custom'} color="green" className="mt-4">
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
