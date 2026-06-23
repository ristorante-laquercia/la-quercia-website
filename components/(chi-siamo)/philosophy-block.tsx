import Image from 'next/image'
import { chiSiamoContent } from '@/lib/contents/chi-siamo'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'
import gridImage1 from '@/public/assets/imgs/chi-siamo/gallery/dettaglio-pizza-nel-forno-per-la-cottura.jpg'
import gridImage4 from '@/public/assets/imgs/chi-siamo/gallery/piatto-con-uno-stinco-di-maiale.jpg'
import gridImage3 from '@/public/assets/imgs/chi-siamo/gallery/pulcherio-scutti-beer-sommelier.jpg'
import gridImage2 from '@/public/assets/imgs/chi-siamo/gallery/signora-annamaria-che-impasta.jpg'
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

      {/* Full-width image grid spanning the entire green section */}
      <Container className="mt-8 grid grid-cols-2 gap-2 max-lg:max-w-xl max-lg:mx-auto lg:mt-12 xl:grid-cols-4 lg:gap-3">
        <RevealItem
          preset="fade-up"
          distance={20}
          duration={1.05}
          className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={gridImage1}
            alt="Chef che versa salsa su un piatto"
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </RevealItem>
        <RevealItem
          preset="fade-up"
          distance={22}
          duration={1.1}
          className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={gridImage2}
            alt="Brindisi durante una cena"
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </RevealItem>
        <RevealItem
          preset="fade-up"
          distance={24}
          duration={1.1}
          className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={gridImage3}
            alt="Lasagna italiana servita con insalata di rucola"
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </RevealItem>
        <RevealItem
          preset="fade-up"
          distance={22}
          duration={1.15}
          className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={gridImage4}
            alt="Piatto di carne con patate fritte al ristorante"
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </RevealItem>
      </Container>
    </section>
  )
}
