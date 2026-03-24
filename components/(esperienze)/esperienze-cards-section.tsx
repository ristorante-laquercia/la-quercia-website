import Link from "next/link";
import Image from "next/image";

import { esperienzeContent } from "@/lib/contents/esperienze";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import aperibirraImage from "@/public/assets/demo/young-couple-drinking-wine-having-fun-lunch-bar-focus-is-man.jpg";
import familyImage from "@/public/assets/demo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner.jpg";
import playImage from "@/public/assets/demo/friends-playing-cards-bar.jpg";

const cardImages = [aperibirraImage, familyImage, playImage] as const;

export function EsperienzeCardsSection() {
  const titleId = "esperienze-cards-title";
  const descriptionId = "esperienze-cards-description";

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-24 text-white lg:py-32"
    >
      <Container className="relative z-10">
        <RevealGroup className="max-w-3xl" stagger={0.12} amount={0.2}>
          <RevealItem preset="fade-up" distance={18} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-senape">
              {esperienzeContent.experiences.eyebrow}
            </span>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2 id={titleId} className="mt-3 text-white">
              {esperienzeContent.experiences.title}
            </h2>
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1}>
            <p id={descriptionId} className="mt-4 text-white/78">
              {esperienzeContent.experiences.description}
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-3"
          stagger={0.18}
          delayChildren={0.12}
          amount={0.15}
        >
          {esperienzeContent.experiences.cards.map((card, index) => (
            <RevealItem
              key={card.title}
              preset="fade-up"
              distance={30}
              duration={1.15 + index * 0.08}
            >
              <article className="group relative min-h-128 overflow-hidden rounded-[2rem]">
                <Image
                  src={cardImages[index]}
                  alt={card.imageAlt}
                  placeholder="blur"
                  blurDataURL={cardImages[index].blurDataURL}
                  sizes="(max-width: 1280px) 100vw, 30vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/35" />

                <div className="relative z-10 flex min-h-128 flex-col gap-y-2 p-7 lg:p-8 justify-stretch h-full">
                  <span className="inline-flex w-fit rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xs">
                    {card.kicker}
                  </span>
                  <h3 className="max-w-sm text-4xl font-black text-white">
                    {card.title}
                  </h3>
                  <p className="text-xl font-medium text-white/92">
                    {card.description}
                  </p>
                  <p className="text-lg leading-relaxed text-white/78">
                    {card.details}
                  </p>

                  <div className="pt-2">
                    <Button asChild variant="custom" color="white">
                      <Link href={card.ctaHref}>{card.ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
