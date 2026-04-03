import Image from 'next/image'

import { birreriaContent } from '@/lib/contents/birreria'
import { DiagonalElement } from '@/components/diagonal-element'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import logoAugustiner from '@/public/assets/imgs/birrifici/augustiner.png'
import logoFerdinand from '@/public/assets/imgs/birrifici/ferdinand.png'

const { birrifici } = birreriaContent

const breweryMeta = [
  {
    key: 'ferdinand' as const,
    flag: '🇨🇿',
    flagLabel: 'Repubblica Ceca',
    accentColor: 'text-lq-orange',
    accentBgLight: 'bg-lq-orange/8',
    accentBorder: 'border-lq-orange/20',
    logoBg: 'bg-lq-orange/10',
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
    logo: logoAugustiner,
  },
]

export function BirreriabirrificiSection() {
  const titleId = 'birreria-birrifici-title'

  return (
    <section aria-labelledby={titleId} className="relative overflow-hidden bg-(--lq-cream) py-24 lg:py-32">
      {/* Grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <RevealGroup className="mb-14 flex flex-col gap-y-4" stagger={0.12} amount={0.25}>
          <RevealItem preset="fade-up" distance={16} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{birrifici.eyebrow}</span>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-2xl font-gabarito text-5xl font-black text-lq-dark lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {birrifici.title}
            </h2>
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-xl">
            <p className="text-lg text-lq-dark/60">{birrifici.description}</p>
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
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto] md:gap-x-6 md:gap-y-2"
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
                className="overflow-hidden rounded-[2rem] bg-lq-dark shadow-xl
                  flex flex-col
                  md:row-span-5 md:grid md:grid-rows-subgrid"
              >
                {/* ── Riga 1: header card ── */}
                <div className="border-b border-white/8 p-7 lg:p-8">
                  <div className="flex items-center justify-between gap-4">
                    {/* Logo + nome */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/8 relative overflow-hidden ${meta.logoBg}`}
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
                        <span className={`text-xs font-black uppercase tracking-[0.2em] ${meta.accentColor}`}>
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
                <ul className="flex flex-col gap-2 p-5 md:contents lg:p-6">
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

      <DiagonalElement className="text-white" position="bottom" side="right" />
    </section>
  )
}
