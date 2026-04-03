import Image from 'next/image'

import { cucinaContent } from '@/lib/contents/cucina'

import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import diningImage from '@/public/assets/demo/restaurant-interior-2.jpg'
import dishImage from '@/public/assets/demo/side-view-spaghetti-with-greens-ricotta-cheese-round-white-plate.jpg'
import atmosphereImage from '@/public/assets/demo/friends-eating-restaurant.jpg'

export function CucinaIntroSection() {
  const titleId = 'cucina-intro-title'
  const descriptionId = 'cucina-intro-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
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
        className="pointer-events-none absolute bottom-0 right-[-0.05em] z-0 hidden select-none font-gabarito text-[clamp(10rem,18vw,22rem)] font-black leading-none text-lq-orange/4.5 lg:block"
        style={{ letterSpacing: '-0.04em' }}
      >
        TRADIZIONE
      </span>

      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-x-14"
          stagger={0.16}
          delayChildren={0.12}
          amount={0.2}
        >
          <div className="flex flex-col gap-y-6">
            <RevealItem preset="fade-up" distance={20} duration={1}>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">
                {cucinaContent.intro.eyebrow}
              </span>
            </RevealItem>

            <RevealItem preset="fade-up" distance={24} duration={1.05}>
              <h2 id={titleId} className="max-w-3xl font-gabarito text-lq-dark" style={{ letterSpacing: '-0.025em' }}>
                {cucinaContent.intro.title}
              </h2>
            </RevealItem>

            <div id={descriptionId} className="space-y-4 text-lq-dark">
              {cucinaContent.intro.paragraphs.map((paragraph, index) => (
                <RevealItem key={paragraph} preset="fade-up" distance={22 + index * 2} duration={1.1 + index * 0.08}>
                  <p>{paragraph}</p>
                </RevealItem>
              ))}
            </div>

            <RevealItem preset="fade-up" distance={28} duration={1.25}>
              <blockquote className="mt-4 border-l-[3px] border-lq-orange/50 pl-5">
                <p className="font-gabarito text-xl font-light italic text-lq-dark/55" style={{ letterSpacing: '0.01em' }}>
                  &rdquo;Non usiamo la birra come nota aromatica — la trattiamo come una materia prima nobile.&rdquo;
                </p>
              </blockquote>
            </RevealItem>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:h-full lg:grid-rows-2">
            <RevealItem
              preset="fade-up"
              distance={36}
              duration={1.5}
              className="relative overflow-hidden rounded-[1.75rem] shadow-lg lg:row-span-2 lg:h-full"
            >
              <Image
                src={diningImage}
                alt="Interno del locale con tavoli apparecchiati"
                placeholder="blur"
                blurDataURL={diningImage.blurDataURL}
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
                src={dishImage}
                alt="Piatto della cucina della casa impiattato con cura"
                placeholder="blur"
                blurDataURL={dishImage.blurDataURL}
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
                alt="Persone sedute al tavolo durante un momento conviviale"
                placeholder="blur"
                blurDataURL={atmosphereImage.blurDataURL}
                sizes="(max-width: 768px) 45vw, 20vw"
                className="h-full min-h-56 w-full object-cover lg:min-h-full"
              />
            </RevealItem>
          </div>
        </RevealGroup>
      </Container>
    </section>
  )
}
