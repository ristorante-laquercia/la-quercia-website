import Image from 'next/image'
import Link from 'next/link'
import { HatChef3Duotone, InstagramOutlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import { esperienzeContent } from '@/lib/contents/esperienze'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import drinkPlayImage from '@/public/assets/imgs/esperienze/ragazzo-che-sta-partecipando-ad-un-drink-and-play.jpg'
import babyAperitivoImage from '@/public/assets/imgs/esperienze/un-dettaglio-di-una-scacchiera-durante-una-partita.jpg'
import aperibirraImage from '@/public/assets/imgs/esperienze/una-ragazza-mora-beve-una-birra.jpg'

type ExperienceCard = {
  kicker: string
  title: string
  description: string
  details?: string
  ctaText: string
  ctaHref: string
  imageAlt?: string
  video?: string
}

const cardImages = [aperibirraImage, babyAperitivoImage, drinkPlayImage] as const
const cardIcons = [HatChef3Duotone, HatChef3Duotone, InstagramOutlined] as const
const cards = esperienzeContent.experiences.cards as readonly ExperienceCard[]

export function EsperienzeCardsSection() {
  const titleId = 'esperienze-cards-title'
  const descriptionId = 'esperienze-cards-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-24 text-white lg:py-36"
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
        className="pointer-events-none absolute bottom-0 right-[-0.05em] z-0 select-none font-gabarito font-black leading-none text-white/2.5"
        style={{
          fontSize: 'clamp(8rem, 14vw, 18rem)',
          letterSpacing: '-0.04em',
        }}
      >
        {esperienzeContent.experiences.eyebrow}
      </span>

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-x-12 lg:items-start xl:block">
        {/* Section header — editorial split: big title left, description right */}
        <RevealGroup
          className="flex flex-col gap-y-6 xl:flex-row lg:items-end lg:justify-between lg:gap-x-16"
          stagger={0.1}
          delayChildren={0.08}
          amount={0.2}
        >
          <div>
            <RevealItem preset="fade-up" distance={16} duration={0.95}>
              <span className="inline-flex items-center gap-2.5 text-[0.65rem] font-black uppercase tracking-[0.3em] text-lq-senape">
                <span aria-hidden className="block h-px w-5 bg-lq-senape/60" />
                {esperienzeContent.experiences.eyebrow}
              </span>
            </RevealItem>

            <RevealItem preset="fade-up" distance={28} duration={1.1}>
              <h2
                id={titleId}
                className="mt-5 max-w-3xl font-gabarito text-white"
                style={{
                  fontSize: 'clamp(3.25rem, 5.5vw, 7.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.93,
                }}
              >
                {esperienzeContent.experiences.title}
              </h2>
            </RevealItem>
          </div>

          <RevealItem preset="fade-left" distance={32} duration={1.1}>
            <div
              id={descriptionId}
              className="max-w-sm border-l-2 border-lq-orange/40 pl-5 lg:pb-2 lg:max-w-full xl:max-w-sm"
            >
              <p className="text-xl leading-relaxed text-white/85">{esperienzeContent.experiences.description}</p>
            </div>
          </RevealItem>
        </RevealGroup>

        {/*
          Subgrid card grid — 5 named row tracks:
            [image(22rem) | tag(auto) | title(auto) | body(1fr) | cta(auto)]
          Each RevealItem spans all 5 rows and becomes the subgrid container.
          <article xl:contents> is layout-transparent; its 5 direct children
          land exactly on the shared row tracks → perfect cross-card alignment.
        */}
        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-y-6 xl:grid-cols-3 xl:grid-rows-[22rem_auto_auto_1fr_auto] xl:gap-x-5 xl:gap-y-0"
          stagger={0.16}
          delayChildren={0.1}
          amount={0.12}
        >
          {cards.map((card, index) => (
            <RevealItem
              key={card.title}
              className="overflow-hidden rounded-2xl ring-1 ring-white/10 xl:row-span-5 xl:grid xl:grid-rows-subgrid xl:gap-0"
              preset="fade-up"
              distance={30}
              duration={1.1 + index * 0.08}
            >
              <article className="xl:contents">
                {/* Row 1 — video or image (22rem track on xl, 16:9 / h-72 on mobile) */}
                <div className={`relative shrink-0 xl:h-auto ${card.video ? 'aspect-video xl:aspect-auto' : 'h-72'}`}>
                  {card.video ? (
                    <video
                      src={card.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={cardImages[index]}
                      alt={card.imageAlt ?? ''}
                      placeholder="blur"
                      blurDataURL={cardImages[index].blurDataURL}
                      sizes="(max-width: 1280px) 100vw, 30vw"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  {/* subtle bottom vignette */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>

                {/* Row 2 — refined category label */}
                <div className="bg-white px-7 pt-7">
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-lq-orange">
                    <span aria-hidden className="block h-px w-3.5 bg-lq-orange/55" />
                    {card.kicker}
                  </span>
                </div>

                {/* Row 3 — title */}
                <h3 className="bg-white px-7 pt-1 font-gabarito text-4xl text-lq-dark" style={{ letterSpacing: '-0.02em' }}>
                  {card.title}
                </h3>

                {/* Row 4 — description + details (1fr keeps CTA pinned to same baseline) */}
                <div className="space-y-3 bg-white px-7 pt-2 pb-2">
                  <p className="text-sm font-medium leading-snug text-lq-dark/80">{card.description}</p>
                  <p className="text-lg leading-relaxed text-lq-dark/75">{card.details}</p>
                </div>

                {/* Row 5 — CTA, aligned to the same baseline across all cards */}
                <div className="bg-white px-7 pb-7 pt-5">
                  <Button asChild variant="custom" color="senape">
                    <Link href={card.ctaHref}>
                      <Lineicons icon={cardIcons[index]} size={48} color="#3d3b28" className="size-6" aria-hidden="true" />
                      {card.ctaText}
                    </Link>
                  </Button>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
