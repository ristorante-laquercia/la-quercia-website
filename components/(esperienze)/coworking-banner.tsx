import Link from 'next/link'
import Image from 'next/image'

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
      className="relative isolate min-h-[34rem] overflow-hidden lg:min-h-[42rem]"
    >
      <Image
        src={coworkingImage}
        alt="Sala del locale pronta per incontri, riunioni e coworking"
        placeholder="blur"
        blurDataURL={coworkingImage.blurDataURL}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/55 to-black/35" />

      <Container className="relative z-10 flex min-h-[34rem] items-center py-20 lg:min-h-[42rem]">
        <RevealGroup className="w-full max-w-3xl" stagger={0.12} delayChildren={0.12} amount={0.2}>
          <div className="rounded-[2rem] border border-white/20 bg-white/12 p-8 text-white backdrop-blur-md md:p-10 lg:p-12">
            <RevealItem preset="fade-up" distance={18} duration={1}>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-senape">
                {esperienzeContent.coworking.eyebrow}
              </span>
            </RevealItem>

            <RevealItem preset="fade-up" distance={22} duration={1.05}>
              <h2 id={titleId} className="mt-4 text-white">
                {esperienzeContent.coworking.title}
              </h2>
            </RevealItem>

            <div id={descriptionId} className="mt-6 space-y-4 text-white/86">
              {esperienzeContent.coworking.paragraphs.map((paragraph, index) => (
                <RevealItem key={paragraph} preset="fade-up" distance={24 + index * 2} duration={1.08 + index * 0.08}>
                  <p>{paragraph}</p>
                </RevealItem>
              ))}
            </div>

            <div className="mt-7 mb-1 h-px w-full bg-white/12" />

            <RevealGroup className="mt-0 flex flex-wrap gap-3" stagger={0.08} delayChildren={0.18}>
              {esperienzeContent.coworking.highlights.map((highlight) => (
                <RevealItem key={highlight} preset="fade-up" distance={18} duration={0.9}>
                  <span className="inline-flex rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    {highlight}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealItem preset="fade-up" distance={22} duration={1.1}>
              <div className="mt-8">
                <Button asChild variant="custom" color="white">
                  <Link href={esperienzeContent.coworking.ctaHref}>{esperienzeContent.coworking.ctaText}</Link>
                </Button>
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </Container>
    </section>
  )
}
