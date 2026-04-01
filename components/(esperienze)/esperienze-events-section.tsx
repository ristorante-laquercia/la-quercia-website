import Image from "next/image";
import Link from "next/link";
import Lineicons from "@lineiconshq/react-lineicons";
import { HatChef3Duotone, InstagramOutlined } from "@lineiconshq/free-icons";

import { esperienzeContent } from "@/lib/contents/esperienze";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { DiagonalElement } from "@/components/diagonal-element";

import degustazioneImage from "@/public/assets/demo/italian-lasagne-served-with-rocket-salad.jpg";
import birraImage from "@/public/assets/demo/2151639899.jpg";

const eventImages = [degustazioneImage, birraImage] as const;
const eventIcons = [HatChef3Duotone, InstagramOutlined] as const;

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function EsperienzeEventsSection() {
  const titleId = "esperienze-events-title";
  const descriptionId = "esperienze-events-description";

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-senape pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <DiagonalElement className="text-lq-dark" position="top" side="left" />

      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-0.03em] z-0 select-none font-gabarito font-black leading-none text-lq-dark/6"
        style={{
          fontSize: "clamp(7rem, 13vw, 17rem)",
          letterSpacing: "-0.04em",
        }}
      >
        EVENTI
      </span>

      <Container className="relative z-10">
        <RevealGroup
          className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-x-14"
          stagger={0.16}
          delayChildren={0.12}
          amount={0.18}
        >
          {/* Section header */}
          <div className="flex flex-col gap-y-5 lg:pt-2">
            <RevealItem preset="fade-up" distance={18} duration={1}>
              <span className="text-xs font-black uppercase tracking-[0.26em] text-lq-dark/60">
                {esperienzeContent.events.eyebrow}
              </span>
            </RevealItem>
            <RevealItem preset="fade-up" distance={22} duration={1.05}>
              <h2
                id={titleId}
                className="font-gabarito text-lq-dark"
                style={{ letterSpacing: "-0.025em" }}
              >
                {esperienzeContent.events.title}
              </h2>
            </RevealItem>
            <RevealItem preset="fade-up" distance={24} duration={1.1}>
              <p id={descriptionId} className="leading-relaxed text-lq-dark/75">
                {esperienzeContent.events.description}
              </p>
            </RevealItem>
          </div>

          {/*
            Subgrid cards:
            - outer grid defines 4 named row tracks: [image | title | description(1fr) | cta]
            - each RevealItem (motion.div) spans all 4 rows and inherits them via subgrid
            - the motion.div IS the visual card (bg, radius, shadow, overflow-hidden)
            - <article> uses xl:contents — semantically present, layout-transparent
            - all 4 content elements map 1:1 to the shared row tracks → perfect cross-card alignment
          */}
          <RevealGroup
            className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:grid-rows-[auto_auto_1fr_auto] xl:gap-x-5 xl:gap-y-0"
            stagger={0.14}
            delayChildren={0.18}
          >
            {esperienzeContent.events.items.map((item, index) => {
              const hrefIsExternal = isExternalHref(item.ctaHref);
              const icon = eventIcons[index];

              return (
                <RevealItem
                  key={item.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] xl:row-span-4 xl:grid xl:grid-rows-subgrid xl:gap-0"
                  preset="fade-up"
                  distance={26}
                  duration={1.12 + index * 0.07}
                >
                  <article className="xl:contents">
                    {/* Row 1 — cinematic image with frosted metadata chips */}
                    <div className="relative h-64 shrink-0">
                      <Image
                        src={eventImages[index]}
                        alt={item.imageAlt}
                        placeholder="blur"
                        blurDataURL={eventImages[index].blurDataURL}
                        sizes="(max-width: 1280px) 100vw, 32vw"
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="rounded-[0.3rem] border border-white/22 bg-black/28 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          {item.dateLabel}
                        </span>
                        <span className="rounded-[0.3rem] border border-white/22 bg-black/28 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          {item.timeLabel}
                        </span>
                      </div>
                    </div>

                    {/* Row 2 — title */}
                    <h3
                      className="px-6 pt-5 pb-1 font-gabarito text-3xl leading-tight text-lq-dark"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {item.title}
                    </h3>

                    {/* Row 3 — description (1fr, stretches to align CTA across cards) */}
                    <p className="px-6 pt-3 pb-2 text-sm leading-relaxed text-lq-dark/72">
                      {item.description}
                    </p>

                    {/* Row 4 — CTA, pinned to the same baseline on every card */}
                    <div className="px-6 pb-6 pt-2">
                      <Button asChild variant="custom" color="dark">
                        {hrefIsExternal ? (
                          <a
                            href={item.ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Lineicons
                              icon={icon}
                              size={48}
                              color="white"
                              className="size-6"
                              aria-hidden="true"
                            />
                            {item.ctaText}
                          </a>
                        ) : (
                          <Link href={item.ctaHref}>
                            <Lineicons
                              icon={icon}
                              size={48}
                              color="white"
                              className="size-6"
                              aria-hidden="true"
                            />
                            {item.ctaText}
                          </Link>
                        )}
                      </Button>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </RevealGroup>
      </Container>
    </section>
  );
}
