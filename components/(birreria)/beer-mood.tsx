import Image from 'next/image'
import { birreriaContent } from '@/lib/contents/birreria'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import awwwImg from '@/public/assets/imgs/birreria/AWWW.png'
import chillImg from '@/public/assets/imgs/birreria/CHILL.png'
import sbamImg from '@/public/assets/imgs/birreria/SBAM.png'
import wooooImg from '@/public/assets/imgs/birreria/WOOOW.png'

const { beerMood } = birreriaContent

const cardImages = [chillImg, wooooImg, sbamImg, awwwImg]

const cardBorder = [
  'border-lq-green/30',
  'border-lq-orange/30',
  'border-[oklch(0.72_0.18_330)]/30',
  'border-lq-senape/40',
] as const

const cardBg = ['bg-lq-green/[0.2]', 'bg-lq-orange/[0.2]', 'bg-[oklch(0.55_0.22_330)]/[0.2]', 'bg-lq-senape/[0.4]'] as const

const cardLabel = ['text-lq-green', 'text-lq-orange', 'text-[oklch(0.72_0.18_330)]', 'text-lq-dark'] as const

export function BeerMood() {
  const titleId = 'beer-mood-title'

  return (
    <section aria-labelledby={titleId} className="relative overflow-hidden bg-(--lq-cream) py-24 lg:py-32 lg:pb-24">
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

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
        {/* Section header */}
        <RevealGroup className="mb-16 flex flex-col items-center gap-y-5 text-center" stagger={0.12} amount={0.25}>
          <RevealItem preset="fade-up" distance={16} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{beerMood.eyebrow}</span>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-3xl font-gabarito text-5xl font-black text-(--lq-dark) lg:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {beerMood.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1} className="flex max-w-xl flex-col gap-y-3">
            {beerMood.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-(--lq-dark)/65">
                {p}
              </p>
            ))}
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
          {beerMood.cards.map((card, i) => (
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
                <span className={`font-barlow text-sm font-black ${cardLabel[i]}`}>{card.kicker}</span>
              </div>

              {/* ── Riga 3: descrizione ── */}
              <div className={`flex-1 px-6 pb-7 pt-1 ${cardBg[i]}`}>
                <p className="text-base leading-relaxed text-(--lq-dark)/70">{card.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
