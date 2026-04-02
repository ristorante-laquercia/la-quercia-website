import Link from 'next/link'
import Image from 'next/image'
import Lineicons from '@lineiconshq/react-lineicons'
import { Telephone3Duotone } from '@lineiconshq/free-icons'

import { esperienzeContent } from '@/lib/contents/esperienze'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import coworkingImage from '@/public/assets/demo/restaurant-interior-2.jpg'

export function CoworkingBanner() {
  const titleId = 'esperienze-coworking-title'
  const descriptionId = 'esperienze-coworking-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative isolate min-h-152 overflow-hidden lg:min-h-216"
    >
      <Image
        src={coworkingImage}
        alt="Sala del locale pronta per incontri, riunioni e coworking"
        placeholder="blur"
        blurDataURL={coworkingImage.blurDataURL}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Bottom-to-top gradient for legibility */}
      <div className="absolute inset-0 bg-linear-to-t from-black/92 via-black/52 to-black/8" />
      {/* Subtle left edge vignette */}
      <div className="absolute inset-0 bg-linear-to-r from-black/25 to-transparent" />
      {/* Soft radial mask behind the right-column text */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at 100% 100%, rgba(0,0,0,0.78) 0%, transparent 100%)',
        }}
      />

      <Container className="relative z-10 flex min-h-152 flex-col justify-end pb-16 pt-32 lg:min-h-216 lg:pb-20">
        <RevealGroup stagger={0.1} delayChildren={0.1} amount={0.15}>
          {/* Two-column editorial split */}
          <div className="grid grid-cols-1 items-end gap-y-10 lg:grid-cols-[1fr_1px_1fr]">
            {/* Left: eyebrow + display title */}
            <div className="lg:pr-14 xl:pr-16">
              <RevealItem preset="fade-up" distance={14} duration={0.85}>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-lq-senape">
                  {esperienzeContent.coworking.eyebrow}
                </span>
              </RevealItem>

              <RevealItem preset="fade-up" distance={28} duration={1.1}>
                <h2 id={titleId} className="mt-4 font-gabarito text-4xl text-white md:text-6xl lg:text-7xl xl:text-8xl">
                  {esperienzeContent.coworking.title}
                  <span className="block">{esperienzeContent.coworking.subTitle}</span>
                </h2>
              </RevealItem>
            </div>

            {/* Vertical rule — lg+ only */}
            <div aria-hidden className="hidden self-stretch bg-white/18 lg:block" />

            {/* Right: body copy + CTA */}
            <div id={descriptionId} className="lg:pl-14 xl:pl-20">
              <div className="space-y-4 text-base leading-relaxed text-white">
                {esperienzeContent.coworking.paragraphs.map((paragraph, index) => (
                  <RevealItem key={paragraph} preset="fade-up" distance={20 + index * 3} duration={1 + index * 0.07}>
                    <p>{paragraph}</p>
                  </RevealItem>
                ))}
              </div>

              <RevealItem preset="fade-up" distance={18} duration={1.06}>
                <div className="mt-9">
                  <Button asChild variant="custom" color="green">
                    <Link href={esperienzeContent.coworking.ctaHref}>
                      <Lineicons icon={Telephone3Duotone} size={48} color="white" className="size-7" aria-hidden="true" />

                      {esperienzeContent.coworking.ctaText}
                    </Link>
                  </Button>
                </div>
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </Container>
    </section>
  )
}
