import Link from 'next/link'
import Image from 'next/image'
import Lineicons from '@lineiconshq/react-lineicons'
import { Pizza2Duotone } from '@lineiconshq/free-icons'

import { homeContent } from '@/lib/contents/home'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { DiagonalElement } from '@/components/diagonal-element'

import bgImage from '@/public/assets/demo/restaurant-interior.jpg'
import chefImage from '@/public/assets/demo/chef-cooking-food-restaurant-kitchen.jpg'

export function FoodSection() {
  const sectionTitleId = 'home-food-title'
  const sectionDescriptionId = 'home-food-description'

  return (
    <section
      className="relative z-30 overflow-hidden"
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescriptionId}
    >
      <Image src={bgImage} alt="" fill placeholder="blur" className="object-cover" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-r from-black/90 via-black/65 to-black/25"
      />

      <Container className="relative z-10 py-32 lg:py-48">
        <RevealGroup className="flex flex-col gap-6 lg:gap-8" stagger={0.22} delayChildren={0.3} amount={0.2}>
          {/* Giant title */}
          <RevealItem preset="fade-up" duration={1.1} distance={24}>
            <h2
              id={sectionTitleId}
              className="text-[clamp(4.5rem,11vw,10.5rem)] leading-none font-gabarito font-black text-white"
            >
              {homeContent.food.title}
            </h2>
          </RevealItem>

          {/* Bottom row: description + image */}
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
            <div className="flex flex-col gap-5 text-white">
              {/* Eyebrow */}
              <RevealItem preset="fade-up" duration={1.0} distance={18}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">La nostra cucina</span>
              </RevealItem>

              <RevealItem preset="fade-up" duration={1.2} distance={22}>
                <div
                  id={sectionDescriptionId}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                  dangerouslySetInnerHTML={{
                    __html: homeContent.food.description,
                  }}
                  className="space-y-4"
                />
              </RevealItem>
              <RevealItem preset="fade-up" duration={1.3} distance={24}>
                <Button asChild variant="custom" color="green" className="mt-2">
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

            <RevealItem preset="fade-up" duration={1.5} distance={36} className="self-end">
              <div className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl lg:max-w-sm">
                <Image
                  src={chefImage}
                  alt={homeContent.food.images[0].alt}
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

      <DiagonalElement position="bottom" className="text-lq-senape md:h-20" />
    </section>
  )
}
