import Image from "next/image";

import { cucinaContent } from "@/lib/contents/cucina";

import { Container } from "@/components/ui/container";
import { DiagonalElement } from "@/components/diagonal-element";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import rootsImage from "@/public/assets/demo/friends-eating-restaurant.jpg";
import localImage from "@/public/assets/demo/side-view-sac-with-meat-fried-potatoeslavash-table-restaurant.jpg";
import kitchenImage from "@/public/assets/demo/chef-cooking-food-restaurant-kitchen.jpg";
import logoAic from "@/public/assets/imgs/logo-aic.webp";

export function CucinaRootsSection() {
  const traditionTitleId = "cucina-tradition-title";
  const territoryTitleId = "cucina-territory-title";
  const glutenTitleId = "cucina-gluten-free-title";

  return (
    <section className="relative overflow-hidden bg-lq-senape py-24 lg:py-32">
      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1fr_0.9fr] lg:gap-x-14"
          stagger={0.16}
          delayChildren={0.12}
          amount={0.18}
        >
          <div className="flex flex-col gap-y-12">
            <div>
              <RevealItem preset="fade-up" distance={20} duration={1}>
                <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-dark/70">
                  {cucinaContent.tradition.eyebrow}
                </span>
              </RevealItem>
              <RevealItem preset="fade-up" distance={24} duration={1.05}>
                <h2 id={traditionTitleId} className="mt-3 text-lq-dark">
                  {cucinaContent.tradition.title}
                </h2>
              </RevealItem>
            </div>

            <div className="space-y-4 text-lq-dark">
              {cucinaContent.tradition.paragraphs.map((paragraph, index) => (
                <RevealItem
                  key={paragraph}
                  preset="fade-up"
                  distance={22 + index * 2}
                  duration={1.08 + index * 0.06}
                >
                  <p>{paragraph}</p>
                </RevealItem>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <RevealItem
                preset="fade-up"
                distance={30}
                duration={1.25}
                className="rounded-[1.75rem] bg-white/55 px-6 py-20 backdrop-blur-xs"
              >
                <div className="flex items-start justify-between gap-2 flex-col">
                  <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-green">
                    {cucinaContent.territory.eyebrow}
                  </span>
                  <h3
                    id={territoryTitleId}
                    className="text-4xl font-black text-lq-dark"
                  >
                    {cucinaContent.territory.title}
                  </h3>
                </div>

                <div className="mt-4 space-y-4 text-lq-dark/90">
                  {cucinaContent.territory.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </RevealItem>

              <RevealItem
                preset="fade-up"
                distance={34}
                duration={1.3}
                className="rounded-[1.75rem] bg-white px-6 py-20 text-lq-dark relative"
              >
                <Image
                  src={logoAic}
                  alt="Logo AIC Associazione Italiana Celiachia"
                  width={localImage.width}
                  height={localImage.height}
                  className="h-auto w-40 shrink-0 md:w-42 top-4 right-4 absolute"
                />

                <div className="flex items-start justify-between gap-2 flex-col">
                  <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange/80">
                    {cucinaContent.glutenFree.eyebrow}
                  </span>
                  <h3 id={glutenTitleId} className="text-4xl font-black">
                    {cucinaContent.glutenFree.title}
                  </h3>
                </div>

                <p className="mt-4 text-lq-dark/82">
                  {cucinaContent.glutenFree.description}
                </p>
              </RevealItem>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <RevealItem
              preset="fade-up"
              distance={38}
              duration={1.45}
              className="col-span-2 overflow-hidden rounded-[2rem] shadow-lg"
            >
              <Image
                src={rootsImage}
                alt="Tavolata nel locale con persone che condividono il pasto"
                placeholder="blur"
                blurDataURL={rootsImage.blurDataURL}
                sizes="(max-width: 768px) 100vw, 38vw"
                className="h-full min-h-80 w-full object-cover"
              />
            </RevealItem>

            <RevealItem
              preset="fade-up"
              distance={32}
              duration={1.35}
              className="col-span-2 md:col-span-1 overflow-hidden rounded-[1.5rem] shadow-lg"
            >
              <Image
                src={localImage}
                alt="Dettaglio di un piatto servito con cura e ingredienti ricchi"
                placeholder="blur"
                blurDataURL={localImage.blurDataURL}
                sizes="(max-width: 768px) 100vw, 18vw"
                className="h-full min-h-64 w-full object-cover"
              />
            </RevealItem>

            <RevealItem
              preset="fade-up"
              distance={28}
              duration={1.2}
              className="col-span-2 md:col-span-1 overflow-hidden rounded-[1.5rem] shadow-lg"
            >
              <Image
                src={kitchenImage}
                alt="Chef al lavoro in cucina durante la preparazione dei piatti"
                placeholder="blur"
                blurDataURL={kitchenImage.blurDataURL}
                sizes="(max-width: 768px) 100vw, 18vw"
                className="h-full min-h-64 w-full object-cover"
              />
            </RevealItem>
          </div>
        </RevealGroup>
      </Container>

      <DiagonalElement className="text-white" position="bottom" side="left" />
    </section>
  );
}
