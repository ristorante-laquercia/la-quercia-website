import Image from 'next/image'

import { esperienzeContent } from '@/lib/contents/esperienze'

import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { DiagonalElement } from '@/components/diagonal-element'

import introImage from '@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg'
import detailImage from '@/public/assets/demo/toast-dinner.jpg'
import atmosphereImage from '@/public/assets/demo/table-set-dinning-table.jpg'

export function EsperienzeIntroSection() {
  const titleId = 'esperienze-intro-title'
  const descriptionId = 'esperienze-intro-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-(--lq-cream) py-24 lg:py-32"
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Decorative display word */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-0.05em] z-0 hidden select-none font-gabarito text-[clamp(10rem,18vw,22rem)] font-black leading-none text-lq-orange/[0.04] lg:block"
        style={{ letterSpacing: '-0.04em' }}
      >
        ESPERIENZE
      </span>

      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-x-14"
          stagger={0.16}
          delayChildren={0.12}
          amount={0.2}
        >
          {/* Left: images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:h-full lg:grid-rows-2">
            <RevealItem
              preset="fade-up"
              distance={36}
              duration={1.5}
              className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:row-span-2 lg:h-full"
            >
              <Image
                src={introImage}
                alt="Brindisi tra amici durante una serata alla Quercia"
                placeholder="blur"
                blurDataURL={introImage.blurDataURL}
                sizes="(max-width: 768px) 45vw, 26vw"
                className="h-full min-h-80 w-full object-cover lg:min-h-full"
              />
            </RevealItem>

            <RevealItem
              preset="fade-up"
              distance={42}
              duration={1.7}
              arriveY={0}
              className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:h-full"
            >
              <Image
                src={detailImage}
                alt="Dettaglio di brindisi e atmosfera serale"
                placeholder="blur"
                blurDataURL={detailImage.blurDataURL}
                sizes="(max-width: 768px) 45vw, 20vw"
                className="h-full min-h-64 w-full object-cover lg:min-h-full"
              />
            </RevealItem>

            <RevealItem
              preset="fade-up"
              distance={28}
              duration={1.35}
              className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:h-full"
            >
              <Image
                src={atmosphereImage}
                alt="Tavolo apparecchiato pronto per l'aperitivo"
                placeholder="blur"
                blurDataURL={atmosphereImage.blurDataURL}
                sizes="(max-width: 768px) 45vw, 20vw"
                className="h-full min-h-56 w-full object-cover lg:min-h-full"
              />
            </RevealItem>
          </div>

          {/* Right: text */}
          <div className="flex flex-col gap-y-6">
            <RevealItem preset="fade-up" distance={20} duration={1}>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
                {esperienzeContent.intro.eyebrow}
              </span>
            </RevealItem>

            <RevealItem preset="fade-up" distance={24} duration={1.05}>
              <h2 id={titleId} className="max-w-3xl font-gabarito text-lq-dark" style={{ letterSpacing: '-0.025em' }}>
                {esperienzeContent.intro.title}
              </h2>
            </RevealItem>

            <RevealItem preset="fade-up" distance={22} duration={1.08}>
              <div className="h-[3px] w-10 rounded-full bg-lq-orange/50" />
            </RevealItem>

            <div id={descriptionId} className="space-y-4 text-lq-dark">
              {esperienzeContent.intro.paragraphs.map((paragraph, index) => (
                <RevealItem key={paragraph} preset="fade-up" distance={22 + index * 2} duration={1.1 + index * 0.08}>
                  <p>{paragraph}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-lq-dark" position="bottom" side="right" />
    </section>
  )
}
