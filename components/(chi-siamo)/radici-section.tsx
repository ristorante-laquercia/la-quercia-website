"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";
import { chiSiamoContent } from "@/lib/contents/chi-siamo";

import { Container } from "@/components/ui/container";

import logoBgWhite from "@/public/assets/svg/logo-white-bg.svg";

export function RadiciSection({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mobileXFirst = useTransform(scrollYProgress, [0, 1], ["18%", "-52%"]);
  const mobileXSecond = useTransform(scrollYProgress, [0, 1], ["-70%", "58%"]);
  const desktopXFirst = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  const desktopXSecond = useTransform(
    scrollYProgress,
    [0, 1],
    ["-200%", "95%"],
  );

  const titleLines =
    Array.from(chiSiamoContent.radici.title.matchAll(/<span>(.*?)<\/span>/g))
      .map((match) => match[1]?.trim())
      .filter(Boolean) ?? [];

  const firstLine = titleLines[0] ?? "Una storia di famiglia";
  const secondLine = titleLines[1] ?? "fermentata con passione.";

  return (
    <section
      ref={sectionRef}
      className={cn(
        "pt-10 pb-64 min-h-120 overflow-x-clip flex flex-col lg:py-24 relative",
        className,
      )}
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-y-10 lg:gap-x-6 lg:items-center">
        <div className="max-md:relative">
          <Image
            src={logoBgWhite}
            alt="Logo Ristobirreria"
            width={1000}
            height={1000}
            className="-translate-x-[45%] -translate-y-1/4 md:translate-y-0 md:mx-auto md:translate-x-0 lg:scale-120 max-w-120 xl:translate-x-0 xl:w-auto xl:scale-100"
          />
          <h2 className="uppercase md:hidden text-lq-green/20 font-black leading-[0.85] text-[clamp(4.2rem,19vw,8.6rem)] tracking-[-0.035em] absolute top-1/2 md:bottom-0">
            <motion.span
              className="block whitespace-nowrap"
              style={{ x: reduceMotion ? "0%" : mobileXFirst }}
            >
              Una storia di famiglia
            </motion.span>
            <motion.span
              className="block whitespace-nowrap"
              style={{ x: reduceMotion ? "0%" : mobileXSecond }}
            >
              fermentata con passione.
            </motion.span>
          </h2>
        </div>

        <div className="[&_p]:text-lq-dark flex flex-col text-center gap-y-10 md:gap-y-4 lg:text-left">
          <p>{chiSiamoContent.radici.descriptionFirstBlock}</p>
          <span className="font-black block text-lq-dark-orange/70 uppercase text-6xl md:mt-6">
            {chiSiamoContent.radici.intraTitle}
          </span>
          <p>{chiSiamoContent.radici.descriptionSecondBlock}</p>
        </div>
      </Container>

      <div className="relative inset-x-0 mt-auto lg:pt-10 xl:pt-24 hidden md:block text-lq-green/20 pointer-events-none select-none overflow-x-clip">
        <div className="relative w-full">
          <h2
            aria-label={`${firstLine} ${secondLine}`}
            className="uppercase font-black leading-[0.85] text-[clamp(6.2rem,14vw,12.5rem)] tracking-[-0.035em]"
          >
            <motion.span
              className="block whitespace-nowrap w-max"
              style={{ x: reduceMotion ? "0%" : desktopXFirst }}
            >
              {firstLine}
            </motion.span>
            <motion.span
              className="block whitespace-nowrap w-max"
              style={{ x: reduceMotion ? "0%" : desktopXSecond }}
            >
              {secondLine}
            </motion.span>
          </h2>
        </div>
      </div>
    </section>
  );
}
