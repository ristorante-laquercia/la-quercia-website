'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

import { cn } from '@/lib/utils'
import { chiSiamoContent } from '@/lib/contents/chi-siamo'

import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

import logoBgWhite from '@/public/assets/svg/logo.svg'

export function RadiciSection({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const mobileXFirst = useTransform(scrollYProgress, [0, 1], ['18%', '-52%'])
  const mobileXSecond = useTransform(scrollYProgress, [0, 1], ['-70%', '58%'])
  const desktopXFirst = useTransform(scrollYProgress, [0, 1], ['50%', '-30%'])
  const desktopXSecond = useTransform(scrollYProgress, [0, 1], ['-200%', '95%'])

  const titleLines =
    Array.from(chiSiamoContent.radici.title.matchAll(/<span>(.*?)<\/span>/g))
      .map((match) => match[1]?.trim())
      .filter(Boolean) ?? []

  const firstLine = titleLines[0] ?? 'Una storia di famiglia'
  const secondLine = titleLines[1] ?? 'fermentata con passione.'

  return (
    <section
      ref={sectionRef}
      className={cn('pt-10 pb-64 min-h-120 overflow-x-clip flex flex-col lg:py-24 relative bg-(--lq-cream)', className)}
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Watermark "1989" */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-0.05em] z-0 hidden select-none font-gabarito text-[clamp(10rem,18vw,22rem)] font-black leading-none text-lq-orange/4 lg:block"
        style={{ letterSpacing: '-0.04em' }}
      >
        1989
      </span>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-y-10 lg:gap-x-6 lg:items-center">
        <div className="max-md:relative">
          <Image
            src={logoBgWhite}
            alt="Logo Ristobirreria"
            width={1000}
            height={1000}
            className="-translate-x-[45%] -translate-y-1/4 md:translate-y-0 md:mx-auto md:translate-x-0 max-w-120 lg:max-w-150 lg:-translate-x-1/4 xl:translate-x-0 xl:w-auto xl:max-w-120 relative z-50"
          />
          <h2 className="uppercase md:hidden text-lq-green/20 font-black leading-[0.85] text-[clamp(4.2rem,19vw,8.6rem)] tracking-[-0.035em] absolute top-1/2 md:bottom-0">
            <motion.span className="block whitespace-nowrap" style={{ x: reduceMotion ? '0%' : mobileXFirst }}>
              Una storia di famiglia
            </motion.span>
            <motion.span className="block whitespace-nowrap" style={{ x: reduceMotion ? '0%' : mobileXSecond }}>
              fermentata con passione.
            </motion.span>
          </h2>
        </div>

        <RevealGroup
          className="[&_p]:text-lq-dark flex flex-col text-center gap-y-4 lg:text-left"
          stagger={0.16}
          delayChildren={0.12}
          amount={0.2}
        >
          <RevealItem preset="fade-up" distance={20} duration={1}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-lq-green/40 bg-lq-green/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-lq-green">
              <span className="h-1.5 w-1.5 rounded-full bg-lq-green" aria-hidden="true" />
              Dal 1989
            </span>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.08}>
            <span className="font-black block text-lq-dark-orange/70 uppercase text-6xl -mt-2">
              {chiSiamoContent.radici.intraTitle}
            </span>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <div className="h-0.75 w-10 rounded-full bg-lq-orange/50 mx-auto lg:mx-0" />
          </RevealItem>
          <RevealItem preset="fade-up" distance={24} duration={1.1}>
            <p>{chiSiamoContent.radici.descriptionFirstBlock}</p>
          </RevealItem>
          <RevealItem preset="fade-up" distance={22} duration={1.1}>
            <p>{chiSiamoContent.radici.descriptionSecondBlock}</p>
          </RevealItem>
        </RevealGroup>
      </Container>

      <div className="relative inset-x-0 mt-auto lg:pt-10 xl:pt-24 hidden md:block text-lq-green/20 pointer-events-none select-none overflow-x-clip">
        <div className="relative w-full">
          <h2
            aria-label={`${firstLine} ${secondLine}`}
            className="uppercase font-black leading-[0.85] text-[clamp(6.2rem,14vw,12.5rem)] tracking-[-0.035em]"
          >
            <motion.span className="block whitespace-nowrap w-max" style={{ x: reduceMotion ? '0%' : desktopXFirst }}>
              {firstLine}
            </motion.span>
            <motion.span className="block whitespace-nowrap w-max" style={{ x: reduceMotion ? '0%' : desktopXSecond }}>
              {secondLine}
            </motion.span>
          </h2>
        </div>
      </div>
    </section>
  )
}
