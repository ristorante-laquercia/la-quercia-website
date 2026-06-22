import Image from 'next/image'

import { chiSiamoContent } from '@/lib/contents/chi-siamo'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import { DiagonalElement } from '@/components/diagonal-element'

import sectionBackground from '@/public/assets/backgrounds/pizza-bg.png'

export function PresentSection() {
  const titleId = 'chi-siamo-present-title'
  const descriptionId = 'chi-siamo-present-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden grid grid-cols-1 bg-lq-dark lg:grid-cols-2"
    >
      <DiagonalElement position="top" side="right" className="text-(--lq-cream)" />
      <div className="relative min-h-88 w-full overflow-hidden md:min-h-120 lg:min-h-full lg:py-24">
        <video
          className="absolute inset-0 size-full object-cover rounded-tr-2xl"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/assets/video/impiattamento-cavatelli.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative flex justify-center px-8 pt-24 pb-32 text-center md:py-32 max-lg:max-w-xl max-lg:mx-auto lg:px-14 lg:text-left lg:py-44">
        <Image
          src={sectionBackground.src}
          alt="Sfondo della sezione con elementi ed ingredienti tipici della pizza"
          aria-hidden="true"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-25"
        />
        <RevealGroup
          className="relative z-10 flex w-full max-w-150 flex-col gap-y-6"
          stagger={0.18}
          delayChildren={0.1}
          amount={0.2}
        >
          <RevealItem preset="fade-up" distance={20} duration={1}>
            <h2 id={titleId} className="font-gabarito text-lq-orange/80 uppercase">
              {chiSiamoContent.present.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1}>
            <div
              id={descriptionId}
              //biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
              dangerouslySetInnerHTML={{
                __html: chiSiamoContent.present.description,
              }}
              className="space-y-8"
            />
          </RevealItem>
        </RevealGroup>
      </div>

      <DiagonalElement position="bottom" side="right" className="text-lq-green" />
    </section>
  )
}
