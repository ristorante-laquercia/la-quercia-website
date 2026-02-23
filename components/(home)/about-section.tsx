import Image from "next/image";
import Link from "next/link";
import Lineicons from "@lineiconshq/react-lineicons";
import { KnifeFork1Duotone } from "@lineiconshq/free-icons";

import { homeContent } from "@/lib/contents/home";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import demoImage1 from "@/public/assets/demo/friends-playing-cards-bar.jpg";
import demoImage2 from "@/public/assets/demo/representation-jesus-from-christianity-religion-modern-time.jpg";

export function AboutSection() {
  return (
    <section className="relative z-20 overflow-visible bg-white py-24 sm:pb-20 lg:py-40">
      <Container>
        <RevealGroup
          className="grid grid-cols-1 gap-x-4 gap-y-12 md:gap-y-10 lg:gap-x-10"
          stagger={0.24}
          delayChildren={0.32}
          amount={0.25}
        >
          <div className="flex flex-col space-y-4">
            <RevealItem preset="fade-up" duration={1.1} distance={22}>
              <h2>{homeContent.about.title}</h2>
            </RevealItem>
            <RevealItem preset="fade-up" duration={1.2} distance={24}>
              <div
                // biome-ignore lint/security/noDangerouslySetInnerHtml: secure content
                dangerouslySetInnerHTML={{
                  __html: homeContent.about.description,
                }}
                className="space-y-4"
              />
            </RevealItem>
            <RevealItem preset="fade-up" duration={1.2} distance={26}>
              <Button asChild variant={"custom"} color="green" className="mt-4">
                <Link href={homeContent.about.link.href}>
                  <Lineicons
                    icon={KnifeFork1Duotone}
                    size={48}
                    color="white"
                    className="size-7"
                  />

                  {homeContent.about.link.text}
                </Link>
              </Button>
            </RevealItem>
          </div>
          {/*           <div className="photo-offset relative z-30 grid grid-cols-2 items-start gap-6 md:gap-10">
            <div className="photo-card relative z-40 transform-[translateY(clamp(2rem,8vw,6rem))] md:transform-[translateY(clamp(0rem,0.7vw,0.5rem))]">
              <RevealItem preset="fade-up" duration={1.8} distance={40}>
                <Image
                  src={demoImage1}
                  alt={homeContent.about.images[0].alt}
                  placeholder="blur"
                  blurDataURL={demoImage1.blurDataURL}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="size-full object-cover rounded shadow-lg"
                />
              </RevealItem>
            </div>
            <div className="photo-card relative z-40 transform-[translateY(clamp(3.5rem,11vw,8rem))] md:transform-[translateY(10%)]">
              <RevealItem preset="fade-up" duration={2} distance={46}>
                <Image
                  src={demoImage2}
                  alt={homeContent.about.images[1].alt}
                  placeholder="blur"
                  blurDataURL={demoImage2.blurDataURL}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="size-full object-cover rounded shadow-lg"
                />
              </RevealItem>
            </div>
          </div>
 */}{" "}
        </RevealGroup>
      </Container>
    </section>
  );
}
