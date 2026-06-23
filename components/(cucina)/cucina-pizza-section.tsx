import Image from 'next/image'
import { cucinaContent } from '@/lib/contents/cucina'
import { DiagonalElement } from '@/components/diagonal-element'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import bgImage from '@/public/assets/imgs/cucina/pizza-con-fave-e-speck.jpg'

export function CucinaPizzaSection() {
  const titleId = 'cucina-pizza-title'

  return (
    <section aria-labelledby={titleId} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Ghost watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-4 right-0 font-gabarito font-black leading-none tracking-tighter text-lq-dark/4"
        style={{ fontSize: 'clamp(6rem, 22vw, 22rem)' }}
      >
        PIZZA
      </span>

      <Container className="relative z-10 max-lg:max-w-xl max-lg:mx-auto">
        <RevealGroup
          className="grid grid-cols-1 gap-y-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-20 lg:items-start"
          stagger={0.15}
          delayChildren={0.1}
          amount={0.15}
        >
          {/* Left: heading block */}
          <div className="flex flex-col gap-y-6">
            <RevealItem preset="fade-up" distance={20} duration={1}>
              <h2
                id={titleId}
                className="font-gabarito text-5xl font-black text-lq-dark lg:text-[3.5rem] xl:text-6xl"
                style={{ letterSpacing: '-0.04em' }}
              >
                {cucinaContent.pizza.title}
              </h2>
            </RevealItem>

            <RevealItem
              preset="fade-up"
              distance={28}
              duration={1.15}
              className="overflow-hidden rounded-[1.75rem] shadow-lg"
            >
              <Image
                src={bgImage}
                alt="Pizza con fave e speck"
                placeholder="blur"
                blurDataURL={bgImage.blurDataURL}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-72 w-full object-cover object-center lg:h-80"
              />
            </RevealItem>
          </div>

          {/* Right: paragraphs with dividers */}
          <div className="divide-y divide-lq-dark/10">
            {cucinaContent.pizza.paragraphs.map((paragraph, index) => (
              <RevealItem
                key={paragraph}
                preset="fade-up"
                distance={20 + index * 3}
                duration={1.05 + index * 0.07}
                className="py-5 first:pt-0 last:pb-0"
              >
                <p className="text-lg leading-relaxed text-lq-dark/75">{paragraph}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-lq-dark" position="bottom" side="right" />
    </section>
  )
}
