import Link from 'next/link'
import Image from 'next/image'
import Lineicons from '@lineiconshq/react-lineicons'
import { Pizza2Duotone } from '@lineiconshq/free-icons'

import { homeContent } from '@/lib/contents/home'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { DiagonalElement } from '@/components/diagonal-element'

import demoImage1 from '@/public/assets/demo/friends-playing-cards-bar.jpg'
import demoImage2 from '@/public/assets/demo/restaurant-interior.jpg'

export function FoodSection() {
  const sectionTitleId = 'home-food-title'
  const sectionDescriptionId = 'home-food-description'

  return (
    <section
      className="relative z-30 overflow-visible"
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescriptionId}
    >
      <Image src={demoImage2.src} alt="" fill className="size-full object-cover" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-black/70" />

      <Container className="relative z-10 overflow-visible py-40 md:pt-20">
        <RevealGroup
          className="grid grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-2 md:gap-x-10"
          stagger={0.24}
          delayChildren={0.32}
          amount={0.25}
        >
          <div className="flex flex-col space-y-4 text-white md:py-20 lg:py-40">
            <RevealItem preset="fade-up" duration={1.1} distance={22}>
              <h2 id={sectionTitleId}>{homeContent.food.title}</h2>
            </RevealItem>
            <RevealItem preset="fade-up" duration={1.2} distance={24}>
              <div
                id={sectionDescriptionId}
                // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                dangerouslySetInnerHTML={{
                  __html: homeContent.food.description,
                }}
                className="space-y-4"
              />
            </RevealItem>
            <RevealItem preset="fade-up" duration={1.2} distance={26}>
              <Button asChild variant={'custom'} color="green" className="mt-4">
                <Link
                  href={homeContent.food.link.href}
                  aria-label={`${homeContent.food.link.text} - ${homeContent.food.title}`}
                >
                  <Lineicons icon={Pizza2Duotone} size={48} color="white" className="size-7" aria-hidden="true" />

                  {homeContent.food.link.text}
                </Link>
              </Button>
            </RevealItem>
          </div>

          <div className="photo-offset relative z-20 grid">
            <div className="photo-card relative z-30 -translate-y-20 md:-translate-y-28 lg:-translate-y-40">
              <RevealItem preset="fade-up" duration={1.8} distance={40}>
                <Image
                  src={demoImage1}
                  alt={homeContent.food.images[0].alt}
                  placeholder="blur"
                  blurDataURL={demoImage1.blurDataURL}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="size-full max-w-lg mx-auto object-cover rounded shadow-lg"
                />
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </Container>

      <DiagonalElement position="bottom" className="text-lq-senape md:h-20" />
    </section>
  )
}
