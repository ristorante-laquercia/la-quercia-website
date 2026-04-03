import Image from 'next/image'
import { birreriaContent } from '@/lib/contents/birreria'
import { DiagonalElement } from '@/components/diagonal-element'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import selezionePhoto from '@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg'

import pulcherioScuttiImage from '@/public/assets/imgs/pulcherio-scutti.png'

const { selezione } = birreriaContent

export function BirreriaSelezioneSection() {
  const titleId = 'birreria-selezione-title'
  const descriptionId = 'birreria-selezione-description'

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

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-0.05em] z-0 hidden select-none font-gabarito font-black leading-none text-lq-orange/4 lg:block"
        style={{
          fontSize: 'clamp(8rem, 16vw, 20rem)',
          letterSpacing: '-0.04em',
        }}
      >
        BIRRERIA
      </span>

      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-x-16"
          stagger={0.14}
          delayChildren={0.08}
          amount={0.15}
        >
          {/* Left: full text content + photo */}
          <div className="flex flex-col gap-y-8">
            {/* Eyebrow + title */}
            <div className="flex flex-col gap-y-4">
              <RevealItem preset="fade-up" distance={18} duration={1}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{selezione.eyebrow}</span>
              </RevealItem>

              <RevealItem preset="fade-up" distance={22} duration={1.05}>
                <h2
                  id={titleId}
                  className="font-gabarito text-5xl font-black text-lq-dark lg:text-6xl"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {selezione.title}
                </h2>
              </RevealItem>

              <RevealItem preset="fade-up" distance={20} duration={1.06}>
                <div className="h-0.75 w-10 rounded-full bg-lq-orange/50" />
              </RevealItem>
            </div>

            {/* Intro paragraphs */}
            <div id={descriptionId} className="space-y-3 text-lq-dark/75">
              {selezione.paragraphs.map((p, i) => (
                <RevealItem key={i} preset="fade-up" distance={20 + i * 2} duration={1.08 + i * 0.06}>
                  <p
                    className="text-lg leading-relaxed [&_strong]:font-black [&_strong]:text-lq-dark"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: contenuto statico interno, nessun input utente
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                </RevealItem>
              ))}
            </div>

            {/* Photo */}
            <RevealItem preset="fade-up" distance={28} duration={1.2}>
              <div className="relative h-64 overflow-hidden rounded-[1.75rem] shadow-lg sm:h-80 lg:h-72">
                <Image
                  src={selezionePhoto}
                  alt="Birra servita al tavolo in un momento conviviale"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-lq-dark/30 to-transparent" />
              </div>
            </RevealItem>

            {/* Spina + 4 Vie + 5ª via + Bottiglia texts */}
            <div className="space-y-6 text-lq-dark">
              <RevealItem preset="fade-up" distance={18} duration={1.05}>
                <p className="font-gabarito text-xl font-black" style={{ letterSpacing: '-0.02em' }}>
                  {selezione.spinaTitle}
                </p>
              </RevealItem>

              <RevealItem preset="fade-up" distance={20} duration={1.08}>
                <div>
                  <p className="mb-1 text-sm font-black uppercase tracking-[0.18em] text-lq-orange">{selezione.vieLabel}</p>
                  <p
                    className="leading-relaxed text-lq-dark/70 [&_strong]:font-black [&_strong]:text-lq-dark"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: contenuto statico interno, nessun input utente
                    dangerouslySetInnerHTML={{ __html: selezione.vieText }}
                  />
                </div>
              </RevealItem>

              <RevealItem preset="fade-up" distance={20} duration={1.1}>
                <div>
                  <p className="mb-1 text-sm font-black uppercase tracking-[0.18em] text-lq-orange">
                    {selezione.quintaLabel}
                  </p>
                  <p
                    className="leading-relaxed text-lq-dark/70 [&_strong]:font-black [&_strong]:text-lq-dark"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: contenuto statico interno, nessun input utente
                    dangerouslySetInnerHTML={{ __html: selezione.quintaText }}
                  />
                </div>
              </RevealItem>
            </div>
          </div>

          {/* Right: prominent Beer Sommelier card */}
          <RevealItem preset="fade-up" distance={36} duration={1.35} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] bg-lq-dark shadow-2xl">
              {/* Foto Pulcherio */}
              <div className="relative h-80 w-full sm:h-96">
                <Image
                  src={pulcherioScuttiImage}
                  alt="Pulcherio Scutti – Beer Sommelier de La Quercia"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-lq-dark to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-8">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-lq-orange">Beer Sommelier</span>

                <h3
                  className="mt-2 font-gabarito text-4xl font-black text-white lg:text-5xl"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {selezione.sommelier.name}
                </h3>

                <p className="mt-1 font-gabarito text-lg font-semibold italic text-lq-senape">{selezione.sommelier.role}</p>

                <div className="mt-5 h-px bg-white/10" />

                <p className="mt-5 text-base leading-relaxed text-white/65">{selezione.sommelier.description}</p>

                {/* Decorative quote mark */}
                <span
                  aria-hidden
                  className="mt-6 block font-gabarito text-7xl font-black leading-none text-lq-orange/15 select-none"
                >
                  &ldquo;
                </span>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-lq-dark" position="bottom" side="right" />
    </section>
  )
}
