import Image from 'next/image'

import { birreriaContent } from '@/lib/contents/birreria'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

const { logos } = birreriaContent

const logoFileOverrides: Record<string, string> = {
  'La Fucina': 'la fucina',
  Maisel: 'maisel',
  'Malto Lento': 'malto lento',
  "O'Hara's": "o'Hara's",
}

function getLogoPath(name: string): string {
  const suffix = logoFileOverrides[name] ?? name
  return `/assets/imgs/birreria/birrifici/logo_${suffix}.png`
}

export function BirreriaLogosSection() {
  const titleId = 'birreria-logos-title'

  return (
    <section aria-labelledby={titleId} className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Subtle warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 size-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.05) 0%, transparent 65%)',
        }}
      />

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
        <RevealGroup className="mb-12 flex flex-col items-center gap-y-4 text-center" stagger={0.12} amount={0.3}>
          <RevealItem preset="fade-up" distance={16} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{logos.eyebrow}</span>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="font-gabarito text-4xl font-black text-lq-dark lg:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {logos.title}
            </h2>
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-lg">
            {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <TrustedHTML> */}
            <div dangerouslySetInnerHTML={{ __html: logos.description }} className="[&_p]:text-base [&_p]:text-lq-dark/55" />
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-5"
          stagger={0.05}
          delayChildren={0.1}
          amount={0.1}
        >
          {logos.partners.map((name) => (
            <RevealItem key={name} preset="zoom-in" distance={8} duration={0.9}>
              <div
                className="flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-lq-dark/10 bg-(--lq-cream)/30 p-4"
                title={name}
              >
                <div className="relative flex h-14 w-full items-center justify-center">
                  <Image
                    src={getLogoPath(name)}
                    alt={`Logo ${name}`}
                    width={80}
                    height={56}
                    className="h-full w-auto max-w-full object-contain opacity-70"
                  />
                </div>
                <span className="text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-lq-dark/35">
                  {name}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
