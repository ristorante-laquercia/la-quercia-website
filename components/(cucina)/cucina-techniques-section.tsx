import Image from 'next/image'

import { cucinaContent } from '@/lib/contents/cucina'

import { Container } from '@/components/ui/container'
import { DiagonalElement } from '@/components/diagonal-element'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import techniqueImage from '@/public/assets/demo/cook-pouring-sauce-plate-with-salad.jpg'
import backgroundTexture from '@/public/assets/backgrounds/blackboard-texture.jpg'

export function CucinaTechniquesSection() {
  const titleId = 'cucina-techniques-title'
  const descriptionId = 'cucina-techniques-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-28 text-white lg:py-36"
    >
      {/* Blackboard texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-18 mix-blend-screen"
        style={{
          backgroundImage: `url(${backgroundTexture.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* Radial accent glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 z-0 size-160 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.8559 0.1143 85.04 / 0.07) 0%, transparent 70%)',
        }}
      />

      <DiagonalElement className="text-white" position="top" side="left" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-14">
          {/* Left: sticky atmospheric image panel */}
          <RevealItem
            preset="fade-up"
            distance={36}
            duration={1.5}
            className="relative overflow-hidden lg:sticky lg:top-[calc(var(--navbar-height,4rem)+2rem)] lg:self-start min-h-96 lg:h-full"
          >
            <Image
              src={techniqueImage}
              alt="Preparazione di un piatto con finitura di salsa e dettagli gastronomici"
              placeholder="blur"
              blurDataURL={techniqueImage.blurDataURL}
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="h-full min-h-96 w-full rounded-[2rem] object-cover lg:min-h-128"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-linear-to-t from-black/80 via-black/10 to-transparent" />

            {/* Vertical label */}
            <div aria-hidden className="absolute bottom-8 left-7 flex flex-col items-center gap-3">
              <span className="block h-12 w-px bg-lq-senape/40" />
              <span
                className="font-gabarito text-xs font-black uppercase tracking-[0.3em] text-lq-senape/70"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                L&apos;Innovazione
              </span>
            </div>
          </RevealItem>

          {/* Right: header + editorial technique list */}
          <RevealGroup className="flex flex-col gap-y-6" stagger={0.12} delayChildren={0.12} amount={0.18}>
            <RevealItem preset="fade-up" distance={20} duration={1}>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-senape">
                {cucinaContent.innovation.eyebrow}
              </span>
            </RevealItem>

            <RevealItem preset="fade-up" distance={24} duration={1.05}>
              <h2 id={titleId} className="max-w-3xl font-gabarito text-white" style={{ letterSpacing: '-0.025em' }}>
                {cucinaContent.innovation.title}
              </h2>
            </RevealItem>

            <RevealItem preset="fade-up" distance={24} duration={1.1}>
              <p id={descriptionId} className="max-w-3xl text-white/80">
                {cucinaContent.innovation.intro}
              </p>
            </RevealItem>

            {/* Technique cards */}
            <RevealGroup className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2" stagger={0.1} delayChildren={0.2}>
              {cucinaContent.innovation.techniques.map((item) => (
                <RevealItem
                  key={item.title}
                  preset="fade-up"
                  distance={20}
                  duration={1.1}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xs transition-colors duration-300 hover:bg-white/8"
                >
                  {/* SVG placeholder — sostituire con l'SVG dell'ingrediente */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-3 right-3 h-20 w-20 select-none opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.13]"
                  >
                    <svg
                      role="graphics-symbol"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="40" y1="4" x2="40" y2="76" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="4" y1="40" x2="76" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>
                  </div>

                  <h3 className="font-gabarito text-xl font-black tracking-tight text-lq-senape">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
