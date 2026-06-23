import Image from 'next/image'

import { birreriaContent } from '@/lib/contents/birreria'

import { DiagonalElement } from '@/components/diagonal-element'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import logoAugustiner from '@/public/assets/imgs/birreria/icona_Augustiner.png'
import logoFerdinand from '@/public/assets/imgs/birreria/icona_Birrificio_Ferdinand.png'

const { spillatura, birrifici } = birreriaContent

const breweryMeta = [
  {
    key: 'ferdinand' as const,
    flag: '🇨🇿',
    flagLabel: 'Repubblica Ceca',
    accentColor: 'text-lq-orange',
    accentBgLight: 'bg-lq-orange/8',
    accentBorder: 'border-lq-orange/20',
    logoBg: 'bg-lq-orange/10',
    cardBg: 'bg-lq-orange/[0.06]',
    cardBorderClass: 'border-lq-orange/15',
    logo: logoFerdinand,
  },
  {
    key: 'augustiner' as const,
    flag: '🇩🇪',
    flagLabel: 'Germania',
    accentColor: 'text-lq-senape',
    accentBgLight: 'bg-lq-senape/8',
    accentBorder: 'border-lq-senape/20',
    logoBg: 'bg-lq-senape/10',
    cardBg: 'bg-lq-senape/[0.06]',
    cardBorderClass: 'border-lq-senape/15',
    logo: logoAugustiner,
  },
]

export function BirreriaSpillaturaSection() {
  const titleId = 'birreria-spillatura-title'
  const descriptionId = 'birreria-spillatura-description'
  const birrificiTitleId = 'birreria-birrifici-title'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-24 pb-40 lg:py-32 lg:pb-52"
    >
      {/* Grain texture */}
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden select-none overflow-hidden text-center font-gabarito font-black leading-none text-white/2.5 lg:block"
        style={{
          fontSize: 'clamp(5rem, 12vw, 16rem)',
          letterSpacing: '-0.03em',
        }}
      >
        SPILLATURA
      </span>

      {/* Warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-240 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.06) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
        {/* Spillatura section header */}
        <RevealGroup className="mb-16 flex flex-col items-center gap-y-5 text-center" stagger={0.12} amount={0.25}>
          <RevealItem preset="fade-up" distance={16} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{spillatura.eyebrow}</span>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-3xl font-gabarito text-5xl font-black text-white lg:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {spillatura.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-xl">
            <p
              id={descriptionId}
              className="text-lg leading-relaxed text-white/65 [&_strong]:font-black [&_strong]:text-white"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: contenuto statico interno, nessun input utente
              dangerouslySetInnerHTML={{ __html: spillatura.description }}
            />
          </RevealItem>
        </RevealGroup>

        {/* Birrifici section header */}
        <RevealGroup
          className="mb-14 mt-24 flex flex-col items-center gap-y-4 text-center lg:mt-32"
          stagger={0.12}
          amount={0.25}
        >
          <RevealItem preset="fade-up" distance={16} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{birrifici.eyebrow}</span>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={birrificiTitleId}
              className="max-w-2xl font-gabarito text-5xl font-black text-white lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {birrifici.title}
            </h2>
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-xl">
            <p className="text-lg text-white/60">{birrifici.description}</p>
          </RevealItem>
        </RevealGroup>

        {/*
          Subgrid: il parent ha 2 colonne e 5 row-track (1 header + 4 feature).
          Ogni RevealItem (motion.div) occupa 5 righe e usa grid-rows-subgrid.
          La <ul> usa md:contents → i 4 <li> diventano figli diretti del motion.div
          e si posizionano automaticamente nelle righe 2-5, allineandosi
          con le stesse righe dell'altra card.
        */}
        <RevealGroup
          className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto] lg:gap-x-6 lg:gap-y-2"
          stagger={0.14}
          delayChildren={0.1}
          amount={0.15}
        >
          {breweryMeta.map((meta, idx) => {
            const brewery = birrifici[meta.key]
            return (
              <RevealItem
                key={meta.key}
                preset="fade-up"
                distance={32 + idx * 4}
                duration={1.3 + idx * 0.1}
                className={`overflow-hidden rounded-[2rem] border shadow-xl
                  flex flex-col
                  md:row-span-5 md:grid md:grid-rows-subgrid
                  ${meta.cardBg} ${meta.cardBorderClass}`}
              >
                {/* ── Riga 1: header card ── */}
                <div className="border-b border-white/8 p-7 lg:p-8">
                  <div className="flex flex-col items-start justify-between lg:gap-4 lg:flex-row lg:items-center">
                    {/* Logo + nome */}
                    <div className="flex items-start lg:items-center gap-4">
                      <div
                        className={`relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/8 ${meta.logoBg}`}
                        title={`Logo ${brewery.name} (placeholder)`}
                      >
                        <Image
                          src={meta.logo.src}
                          alt={brewery.name}
                          fill
                          placeholder="blur"
                          blurDataURL={meta.logo.blurDataURL}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span
                          className={`text-xs font-black uppercase tracking-[0.2em] leading-4 block ${meta.accentColor}`}
                        >
                          {brewery.eyebrow}
                        </span>
                        <h3
                          className="mt-0.5 font-gabarito text-2xl font-black text-white lg:text-3xl"
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {brewery.name}
                        </h3>
                      </div>
                    </div>
                    {/* Bandiera */}
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="text-3xl leading-none" role="img" aria-label={meta.flagLabel}>
                        {meta.flag}
                      </span>
                    </div>
                  </div>
                  <p className={`mt-2 font-gabarito text-lg font-semibold italic ${meta.accentColor}/70`}>
                    {brewery.tagline}
                  </p>
                  <p className="mt-2 text-base text-white/60">{brewery.description}</p>
                </div>

                {/*
                  ul con md:contents → i li escono dal ul e diventano
                  figli diretti del motion.div partecipando al subgrid.
                  Su mobile: flex-col normale con gap e padding.
                */}
                <ul className="flex flex-col gap-6 p-5 md:contents lg:p-6">
                  {brewery.features.map((f) => (
                    <li
                      key={f.title}
                      className={`flex gap-3 rounded-xl border px-4 py-3.5
                        ${meta.accentBorder} ${meta.accentBgLight}
                        md:mx-5 md:self-start md:last:mb-5`}
                    >
                      {/* Decoratore custom: linea accent verticale */}
                      <span
                        className={`mt-0.5 h-full w-0.5 shrink-0 self-stretch rounded-full ${meta.accentColor} opacity-40`}
                      />
                      <div>
                        <p className="font-gabarito font-black text-white">{f.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-white/65">{f.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-(--lq-cream)" position="bottom" side="left" />
    </section>
  )
}
