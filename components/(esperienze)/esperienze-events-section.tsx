import Image from 'next/image'
import Link from 'next/link'

import { esperienzeContent } from '@/lib/contents/esperienze'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { DiagonalElement } from '@/components/diagonal-element'

import degustazioneImage from '@/public/assets/demo/italian-lasagne-served-with-rocket-salad.jpg'
import birraImage from '@/public/assets/demo/2151639899.jpg'

const eventImages = [degustazioneImage, birraImage] as const

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function EsperienzeEventsSection() {
  const titleId = 'esperienze-events-title'
  const descriptionId = 'esperienze-events-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-senape py-24 lg:py-32"
    >
      <DiagonalElement className="text-lq-dark" position="top" side="left" />

      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-0.03em] z-0 select-none font-gabarito font-black leading-none text-lq-dark/[0.06]"
        style={{
          fontSize: 'clamp(7rem, 13vw, 17rem)',
          letterSpacing: '-0.04em',
        }}
      >
        EVENTI
      </span>

      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-y-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-x-14"
          stagger={0.16}
          delayChildren={0.12}
          amount={0.18}
        >
          <div className="flex flex-col gap-y-5">
            <RevealItem preset="fade-up" distance={18} duration={1}>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-dark/70">
                {esperienzeContent.events.eyebrow}
              </span>
            </RevealItem>
            <RevealItem preset="fade-up" distance={22} duration={1.05}>
              <h2 id={titleId} className="font-gabarito text-lq-dark" style={{ letterSpacing: '-0.025em' }}>
                {esperienzeContent.events.title}
              </h2>
            </RevealItem>
            <RevealItem preset="fade-up" distance={24} duration={1.1}>
              <p id={descriptionId} className="text-lq-dark/82">
                {esperienzeContent.events.description}
              </p>
            </RevealItem>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-6 xl:grid-cols-2" stagger={0.16} delayChildren={0.18}>
            {esperienzeContent.events.items.map((item, index) => {
              const hrefIsExternal = isExternalHref(item.ctaHref)

              return (
                <RevealItem key={item.title} preset="fade-up" distance={28} duration={1.15 + index * 0.08}>
                  <article className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
                    <div className="relative">
                      <Image
                        src={eventImages[index]}
                        alt={item.imageAlt}
                        placeholder="blur"
                        blurDataURL={eventImages[index].blurDataURL}
                        sizes="(max-width: 1280px) 100vw, 32vw"
                        className="h-72 w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    <div className="flex flex-col gap-y-5 p-7 text-lq-dark">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-lq-green px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                          {item.dateLabel}
                        </span>
                        <span className="rounded-full bg-lq-dark px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                          {item.timeLabel}
                        </span>
                      </div>

                      <h3 className="text-4xl font-black">{item.title}</h3>
                      <p className="text-base leading-relaxed text-lq-dark/82">{item.description}</p>

                      <div className="pt-1">
                        <Button asChild variant="custom" color="green">
                          {hrefIsExternal ? (
                            <a href={item.ctaHref} target="_blank" rel="noopener noreferrer">
                              {item.ctaText}
                            </a>
                          ) : (
                            <Link href={item.ctaHref}>{item.ctaText}</Link>
                          )}
                        </Button>
                      </div>
                    </div>
                  </article>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </RevealGroup>
      </Container>
    </section>
  )
}
