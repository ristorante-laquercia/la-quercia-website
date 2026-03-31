import Image from 'next/image'

import { cucinaContent } from '@/lib/contents/cucina'

import { Container } from '@/components/ui/container'
import { DiagonalElement } from '@/components/diagonal-element'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import rootsImage from '@/public/assets/demo/friends-eating-restaurant.jpg'
import localImage from '@/public/assets/demo/side-view-sac-with-meat-fried-potatoeslavash-table-restaurant.jpg'
import kitchenImage from '@/public/assets/demo/chef-cooking-food-restaurant-kitchen.jpg'
import logoAic from '@/public/assets/imgs/logo-aic.png'

export function CucinaRootsSection() {
  const traditionTitleId = 'cucina-tradition-title'
  const territoryTitleId = 'cucina-territory-title'
  const glutenTitleId = 'cucina-gluten-free-title'

  return (
    <section className="relative overflow-hidden bg-lq-senape py-24 lg:py-32">
      <Container className="relative z-10">
        {/* Chapter 1 — Tradition */}
        <RevealGroup
          className="grid grid-cols-1 gap-y-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-x-16"
          stagger={0.2}
          delayChildren={0.12}
          amount={0.18}
        >
          {/* Left: tradition text */}
          <div className="flex flex-col gap-y-6">
            <RevealItem preset="fade-up" distance={20} duration={1}>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-dark/70">
                {cucinaContent.tradition.eyebrow}
              </span>
            </RevealItem>

            <RevealItem preset="fade-up" distance={24} duration={1.05}>
              <h2
                id={traditionTitleId}
                className="font-gabarito text-6xl font-black text-lq-dark lg:text-7xl"
                style={{ letterSpacing: '-0.04em' }}
              >
                {cucinaContent.tradition.title}
              </h2>
            </RevealItem>

            <div className="space-y-4 text-lq-dark">
              {cucinaContent.tradition.paragraphs.map((paragraph, index) => (
                <RevealItem key={paragraph} preset="fade-up" distance={22 + index * 2} duration={1.08 + index * 0.06}>
                  <p>{paragraph}</p>
                </RevealItem>
              ))}
            </div>

            {/* Byline attribution */}
            <RevealItem preset="fade-up" distance={26} duration={1.2}>
              <span className="mt-2 flex items-center gap-3">
                <span className="h-px flex-1 bg-lq-dark/20" />
                <span className="font-gabarito text-xs uppercase tracking-[0.25em] text-lq-dark/40">
                  Tradizione Molisana
                </span>
              </span>
            </RevealItem>
          </div>

          {/* Right: roots image with editorial offset */}
          <RevealItem
            preset="fade-up"
            distance={38}
            duration={1.45}
            className="overflow-hidden rounded-[2rem] shadow-xl lg:translate-y-6 lg:h-full"
          >
            <Image
              src={rootsImage}
              alt="Tavolata nel locale con persone che condividono il pasto"
              placeholder="blur"
              blurDataURL={rootsImage.blurDataURL}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full min-h-72 w-full object-cover lg:min-h-112 "
            />
          </RevealItem>
        </RevealGroup>

        {/* Chapter 2 — Territory + Gluten-Free */}
        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8"
          stagger={0.18}
          delayChildren={0.12}
          amount={0.15}
        >
          {/* Territory card: photo background with gradient overlay */}
          <RevealItem
            preset="fade-up"
            distance={32}
            duration={1.35}
            className="relative min-h-104 overflow-hidden rounded-[2rem] lg:min-h-128 bg-lq-dark lg:p-10"
          >
            <Image
              src={localImage}
              alt="Dettaglio di un piatto servito con cura e ingredienti ricchi"
              placeholder="blur"
              blurDataURL={localImage.blurDataURL}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-linear-to-t from-lq-dark/85 to-lq-dark/50" />

            <div className="flex flex-col gap-3 relative">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-lq-senape">
                {cucinaContent.territory.eyebrow}
              </span>
              <h3 id={territoryTitleId} className="font-gabarito text-3xl font-black tracking-tight text-white lg:text-4xl">
                {cucinaContent.territory.title}
              </h3>
              <div className="mt-1 space-y-2">
                {cucinaContent.territory.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-white">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* Gluten-Free card: dark background */}
          <RevealItem
            preset="fade-up"
            distance={28}
            duration={1.2}
            className="relative flex min-h-104 flex-col overflow-hidden rounded-[2rem] bg-lq-dark p-8 lg:min-h-128 lg:p-10"
          >
            <div className="flex flex-col gap-3 pr-32">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-lq-orange">
                {cucinaContent.glutenFree.eyebrow}
              </span>
              <h3 id={glutenTitleId} className="font-gabarito text-3xl font-black tracking-tight text-white lg:text-4xl">
                {cucinaContent.glutenFree.title}
              </h3>
            </div>

            <p className="relative z-10 mt-5 text-xl leading-relaxed">{cucinaContent.glutenFree.description}</p>

            <Image
              src={logoAic}
              alt="Logo AIC Associazione Italiana Celiachia"
              width={logoAic.width}
              height={logoAic.height}
              placeholder="blur"
              blurDataURL={logoAic.blurDataURL}
              className="h-auto w-80 mx-auto mt-auto"
            />
          </RevealItem>

          {/* Kitchen image: full-width letterbox strip */}
          <RevealItem
            preset="fade-up"
            distance={24}
            duration={1.2}
            className="col-span-1 overflow-hidden rounded-[1.5rem] md:col-span-2"
          >
            <Image
              src={kitchenImage}
              alt="Chef al lavoro in cucina durante la preparazione dei piatti"
              placeholder="blur"
              blurDataURL={kitchenImage.blurDataURL}
              sizes="(max-width: 768px) 100vw, 80vw"
              className="h-36 w-full object-cover object-center lg:h-64"
            />
          </RevealItem>
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-lq-dark" position="bottom" side="left" />
    </section>
  )
}
