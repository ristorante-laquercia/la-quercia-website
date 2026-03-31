import Link from 'next/link'
import Image from 'next/image'

import { esperienzeContent } from '@/lib/contents/esperienze'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import aperibirraImage from '@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg'
import familyImage from '@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg'
import playImage from '@/public/assets/demo/friends-playing-cards-bar.jpg'

const cardImages = [aperibirraImage, familyImage, playImage] as const

export function EsperienzeCardsSection() {
  const titleId = 'esperienze-cards-title'
  const descriptionId = 'esperienze-cards-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-24 text-white lg:py-32"
    >
      {/* Grain texture overlay */}
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
        className="pointer-events-none absolute bottom-0 right-[-0.05em] z-0 select-none font-gabarito font-black leading-none text-white/[0.025]"
        style={{
          fontSize: 'clamp(8rem, 14vw, 18rem)',
          letterSpacing: '-0.04em',
        }}
      >
        ESPERIENZE
      </span>

      <Container className="relative z-10">
        <RevealGroup className="max-w-3xl" stagger={0.12} amount={0.2}>
          <RevealItem preset="fade-up" distance={18} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-senape">
              {esperienzeContent.experiences.eyebrow}
            </span>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2 id={titleId} className="mt-3 font-gabarito text-white" style={{ letterSpacing: '-0.025em' }}>
              {esperienzeContent.experiences.title}
            </h2>
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1}>
            <p id={descriptionId} className="mt-4 text-white/78">
              {esperienzeContent.experiences.description}
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-3"
          stagger={0.18}
          delayChildren={0.12}
          amount={0.15}
        >
          {esperienzeContent.experiences.cards.map((card, index) => (
            <RevealItem key={card.title} preset="fade-up" distance={30} duration={1.15 + index * 0.08}>
              <article className="group relative min-h-128 overflow-hidden rounded-[2rem]">
                <Image
                  src={cardImages[index]}
                  alt={card.imageAlt}
                  placeholder="blur"
                  blurDataURL={cardImages[index].blurDataURL}
                  sizes="(max-width: 1280px) 100vw, 30vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/35" />

                <div className="relative z-10 flex min-h-128 flex-col gap-y-2 p-7 lg:p-8 justify-stretch h-full">
                  <span className="inline-flex w-fit rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xs">
                    {card.kicker}
                  </span>
                  <h3 className="max-w-sm text-4xl font-black text-white">{card.title}</h3>
                  <p className="text-xl font-medium text-white/92">{card.description}</p>
                  <p className="text-lg leading-relaxed text-white/78">{card.details}</p>

                  <div className="pt-2">
                    <Button asChild variant="custom" color="white">
                      <Link href={card.ctaHref}>{card.ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
