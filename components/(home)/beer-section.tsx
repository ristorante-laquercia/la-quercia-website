import Link from "next/link";
import Image from "next/image";

import { homeContent } from "@/lib/contents/home";

import { BeerSteinDuotoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import demoImage from "@/public/assets/demo/2151639899.jpg";
import sectionBackground from "@/public/assets/backgrounds/beer-pattern.png";

export function BeerSection() {
  return (
    <section className="relative overflow-visible bg-lq-orange">
      <Container className="relative z-0 py-24 md:pt-20 md:pb-10">
        <RevealGroup
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 md:gap-x-10 md:-mt-20"
          stagger={0.24}
          delayChildren={0.32}
          amount={0.25}
        >
          <div className="flex flex-col space-y-4 md:py-20 lg:py-32">
            <RevealItem preset="fade-up" duration={1.1} distance={22}>
              <h2>{homeContent.beer.title}</h2>
            </RevealItem>
            <RevealItem preset="fade-up" duration={1.2} distance={24}>
              <div
                // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                dangerouslySetInnerHTML={{
                  __html: homeContent.beer.description,
                }}
                className="space-y-4"
              />
            </RevealItem>
            <RevealItem preset="fade-up" duration={1.2} distance={26}>
              <Button asChild variant={"custom"} color="green" className="mt-4">
                <Link href={homeContent.beer.link.href}>
                  <BeerSteinDuotoneIcon className="size-6" />
                  {homeContent.beer.link.text}
                </Link>
              </Button>
            </RevealItem>
          </div>

          <div className="photo-offset grid">
            <div className="photo-card md:transform-[translateY(-80px)] lg:transform-[translateY(-120px)]">
              <RevealItem preset="fade-up" duration={1.8} distance={40}>
                <Image
                  src={demoImage}
                  alt={homeContent.beer.images[0].alt}
                  placeholder="blur"
                  blurDataURL={demoImage.blurDataURL}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="size-full max-w-lg m-auto object-cover rounded shadow-lg"
                />
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}

/*     <DiagonalSection
      className="bg-lq-orange relative lg:py-20"
      cutClassName="bg-lq-orange"
    ></DiagonalSection>
 */

{
  /*       <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 opacity-10 md:h-64 bg-repeat"
        style={{
          backgroundImage: `url(${sectionBackground.src})`,
          backgroundPosition: "bottom center",
          backgroundSize: "200px 200px",
        }}
      />
 */
}
