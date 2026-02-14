import Link from "next/link";
import Image from "next/image";
import Lineicons from "@lineiconshq/react-lineicons";
import { Pizza2Duotone } from "@lineiconshq/free-icons";

import { homeContent } from "@/lib/contents/home";

import { Button } from "@/components/ui/button";
import { DiagonalSection } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

import demoImage1 from "@/public/assets/demo/friends-playing-cards-bar.jpg";

export function FoodSection() {
  return (
    <DiagonalSection
      className="bg-lq-dark-orange"
      diagonalSide="left"
      cutClassName="bg-background"
    >
      <RevealGroup
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10"
        stagger={0.24}
        delayChildren={0.32}
        amount={0.25}
      >
        <div className="grid grid-cols-1 space-y-4">
          <RevealItem preset="fade-up" duration={1.1} distance={22}>
            <h2>{homeContent.food.title}</h2>
          </RevealItem>
          <RevealItem preset="fade-up" duration={1.2} distance={24}>
            <p>{homeContent.food.description}</p>
          </RevealItem>
          <RevealItem
            preset="fade-up"
            duration={1.2}
            distance={26}
            className="mt-2"
          >
            <Button asChild variant={"custom"} color="green">
              <Link href={homeContent.about.link.href}>
                <Lineicons
                  icon={Pizza2Duotone}
                  size={48}
                  color="white"
                  className="size-7"
                />

                {homeContent.food.link.text}
              </Link>
            </Button>
          </RevealItem>
        </div>

        <div className="photo-offset grid">
          <div className="photo-card">
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
        </div>
      </RevealGroup>
    </DiagonalSection>
  );
}
