import Image from 'next/image'
import { birreriaContent } from '@/lib/contents/birreria'
import { DiagonalElement } from '@/components/diagonal-element'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import awwwImg from '@/public/assets/imgs/AWWW! .png'
import chillImg from '@/public/assets/imgs/CHILL.png'
import sbamImg from '@/public/assets/imgs/SBAM! .png'
import wooooImg from '@/public/assets/imgs/WOOOO! .png'

const { spillatura } = birreriaContent

const cardImages = [chillImg, wooooImg, sbamImg, awwwImg]

const cardBorder = [
  'border-lq-green/30',
  'border-lq-orange/30',
  'border-[oklch(0.72_0.18_330)]/30',
  'border-lq-senape/30',
] as const

const cardBg = [
  'bg-lq-green/[0.06]',
  'bg-lq-orange/[0.06]',
  'bg-[oklch(0.55_0.22_330)]/[0.06]',
  'bg-lq-senape/[0.07]',
] as const

const cardLabel = ['text-lq-green', 'text-lq-orange', 'text-[oklch(0.72_0.18_330)]', 'text-lq-senape'] as const

export function BirreriaSpillaturaSection() {
  const titleId = 'birreria-spillatura-title'
  const descriptionId = 'birreria-spillatura-description'

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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden select-none overflow-hidden text-center font-gabarito font-black leading-none text-white/[0.025] lg:block"
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
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.06) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
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

        {/*
          Subgrid corretto:
          – Il parent definisce 4 colonne e 3 row-track espliciti (lg).
          – Ogni RevealItem (motion.div) è il grid item: occupa 1 colonna e
            si estende su 3 righe (lg:row-span-3), poi dichiara
            grid-template-rows: subgrid ereditando le 3 misure del parent.
          – I 3 figli diretti si posizionano automaticamente nelle 3 righe,
            allineando immagine / titolo / descrizione tra tutte le card.
          – Su mobile rimane flex-col normale (nessun row-span, nessun subgrid).
        */}
        <RevealGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[16rem_auto_1fr] lg:gap-x-4 lg:gap-y-0"
          stagger={0.1}
          delayChildren={0.05}
          amount={0.12}
        >
          {spillatura.cards.map((card, i) => (
            <RevealItem
              key={card.label}
              preset="fade-up"
              distance={30 + i * 4}
              duration={1.2 + i * 0.05}
              // flex-col su mobile → grid con subgrid su lg
              className={`flex flex-col overflow-hidden rounded-[1.75rem] border ${cardBorder[i]} lg:row-span-3 lg:grid lg:grid-rows-subgrid`}
            >
              {/* ── Riga 1: immagine ── */}
              <div className={`relative h-52 overflow-hidden lg:h-full ${cardBg[i]}`}>
                <Image
                  src={cardImages[i]}
                  alt={card.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${i === 0 ? 'object-top' : 'object-center'}`}
                />
              </div>

              {/* ── Riga 2: titolo ── */}
              <div className={`px-6 pb-2 pt-6 ${cardBg[i]}`}>
                <h3
                  className={`font-gabarito text-3xl font-black lg:text-4xl ${cardLabel[i]}`}
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {card.label}
                </h3>
              </div>

              {/* ── Riga 3: descrizione ── */}
              <div className={`flex-1 px-6 pb-7 pt-1 ${cardBg[i]}`}>
                <p className="text-base leading-relaxed text-white/80">{card.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-(--lq-cream)" position="bottom" side="left" />
    </section>
  )
}
