import Image from 'next/image'
import { AboutGallery } from '@/components/(chi-siamo)/about-gallery'
import { chiSiamoContent } from '@/lib/contents/chi-siamo'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import mainImage from '@/public/assets/imgs/chi-siamo/gruppo-di-persone-sorridenti.jpg'

const titleId = 'chi-siamo-philosophy-title'
const descriptionId = 'chi-siamo-philosophy-description'

export function PhilosophyBlock() {
  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="bg-lq-green text-center py-24 lg:py-32 xl:py-40"
    >
      <Container className="grid grid-cols-1 max-lg:max-w-xl max-lg:mx-auto lg:grid-cols-2 lg:gap-x-14">
        <RevealGroup className="flex flex-col gap-y-8 lg:text-left" stagger={0.16} delayChildren={0.12} amount={0.2}>
          <RevealItem preset="fade-up" distance={20} duration={1}>
            <h2 id={titleId}>{chiSiamoContent.filosofia.title}</h2>
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1}>
            <div
              id={descriptionId}
              //biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
              dangerouslySetInnerHTML={{
                __html: chiSiamoContent.filosofia.description,
              }}
              className="space-y-8 relative z-10"
            />
          </RevealItem>
        </RevealGroup>

        <RevealItem
          preset="fade-up"
          distance={28}
          duration={1.2}
          className="mt-12 overflow-hidden rounded-xl md:rounded-2xl lg:mt-0 lg:max-h-160"
        >
          <Image
            src={mainImage}
            alt="Persone che si godono una serata alla Quercia"
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="size-full object-cover"
          />
        </RevealItem>
      </Container>

      <AboutGallery />
    </section>
  )
}
