'use client'

import { useWindowSize } from '@uidotdev/usehooks'
import Lineicons from '@lineiconshq/react-lineicons'
import { ScrollDown2Duotone } from '@lineiconshq/free-icons'

export function Hero() {
  const size = useWindowSize()
  const heroTextConfig = (() => {
    const width = size.width ?? 1536

    if (width < 640) {
      return {
        fontSize: '80',
        topY: '45%',
        bottomY: '54%',
        topLetterSpacing: '1',
        bottomLetterSpacing: '0.5',
      }
    }

    if (width < 768) {
      return {
        fontSize: '110',
        topY: '45%',
        bottomY: '56%',
        topLetterSpacing: '2',
        bottomLetterSpacing: '1',
      }
    }

    if (width < 1024) {
      return {
        fontSize: '132',
        topY: '45%',
        bottomY: '60%',
        topLetterSpacing: '3',
        bottomLetterSpacing: '2',
      }
    }

    if (width < 1280) {
      return {
        fontSize: '164',
        topY: '45%',
        bottomY: '62%',
        topLetterSpacing: '4',
        bottomLetterSpacing: '2.5',
      }
    }

    if (width < 1536) {
      return {
        fontSize: '192',
        topY: '45%',
        bottomY: '67%',
        topLetterSpacing: '5',
        bottomLetterSpacing: '3',
      }
    }

    // >= 1536
    return {
      fontSize: '192',
      topY: '45%',
      bottomY: '67%',
      topLetterSpacing: '6',
      bottomLetterSpacing: '3',
    }
  })()
  const heroStackLayout = (() => {
    const viewportHeight = size.height ?? 900
    const viewportWidth = size.width ?? 1536
    const blockCenterY = 52

    // Gap proporzionali alla viewport, ma limitati per evitare estremi.
    const baseLineGapPct = Math.min(Math.max(viewportHeight * 0.012, 10), 22)
    const baseSubtitleGapPct = Math.min(Math.max(viewportHeight * 0.009, 6), 11)

    let lineGapMultiplier = 1
    let subtitleGapMultiplier = 1

    if (viewportWidth < 640) {
      // < 640: distanza maggiore tra QUERCIA e il sottotitolo.
      lineGapMultiplier = 0.9
      subtitleGapMultiplier = 1.2
    } else if (viewportWidth < 768) {
      // 640-767: inizia a distanziare anche LA e QUERCIA.
      lineGapMultiplier = 1.3
      subtitleGapMultiplier = 1.4
    } else if (viewportWidth < 1024) {
      // 768-1023: font 165px, gap proporzionalmente maggiore.
      lineGapMultiplier = 1.6
      subtitleGapMultiplier = 1.4
    } else if (viewportWidth >= 1024 && viewportWidth < 1280) {
      // 1024-1279: font 195px.
      lineGapMultiplier = 2.2
      subtitleGapMultiplier = 1.8
    } else if (viewportWidth >= 1280 && viewportWidth < 1536) {
      // >= 1280-1535px: font 240-260px, spaziatura ampia.
      lineGapMultiplier = 2.2
      subtitleGapMultiplier = 1.6
    } else if (viewportWidth >= 1536) {
      // >= 1536: font 240-260px, spaziatura ampia.
      lineGapMultiplier = 2
      subtitleGapMultiplier = 1.5
    }

    const lineGapPct = baseLineGapPct * lineGapMultiplier
    const subtitleGapPct = baseSubtitleGapPct * subtitleGapMultiplier

    const totalGapPct = lineGapPct + subtitleGapPct
    const topY = blockCenterY - totalGapPct / 2
    const bottomY = topY + lineGapPct
    const subtitleY = bottomY + subtitleGapPct

    return {
      topY: `${topY.toFixed(2)}%`,
      bottomY: `${bottomY.toFixed(2)}%`,
      subtitleY: `${subtitleY.toFixed(2)}%`,
    }
  })()

  return (
    <section className="relative isolate h-dvh min-h-136 w-full overflow-hidden bg-lq-dark">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/assets/video/home-video.mp4" type="video/mp4" />
      </video>

      <h1 className="sr-only">La Quercia</h1>

      <svg
        aria-hidden
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      >
        <title>Overlay texture con testo trasparente</title>
        <defs>
          <mask id="hero-text-cutout">
            <rect width="1200" height="700" fill="white" />
            <text
              x="50%"
              y={heroStackLayout.topY}
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Gabarito, sans-serif"
              fontWeight="900"
              fontSize={heroTextConfig.fontSize}
              letterSpacing={heroTextConfig.topLetterSpacing}
              fill="black"
            >
              LA
            </text>
            <text
              x="50%"
              y={heroStackLayout.bottomY}
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Gabarito, sans-serif"
              fontWeight="900"
              fontSize={heroTextConfig.fontSize}
              letterSpacing={heroTextConfig.bottomLetterSpacing}
              fill="black"
            >
              QUERCIA
            </text>
          </mask>
        </defs>

        <image
          width="1200"
          height="700"
          href="/assets/backgrounds/bg-home-pattern.jpg"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#hero-text-cutout)"
        />
      </svg>

      <p
        className="font-gabarito uppercase font-extrabold pointer-events-none absolute inset-x-0 z-20 -translate-y-1/2 text-center text-2xl tracking-wider text-white md:text-3xl xl:text-4xl 2xl:text-5xl"
        style={{ top: heroStackLayout.subtitleY }}
      >
        Mangia - Bevi - Vivi
      </p>

      <button
        type="button"
        aria-label="Scorri verso il basso"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute inset-x-0 bottom-8 z-20 mx-auto flex w-fit cursor-pointer flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
      >
        <Lineicons icon={ScrollDown2Duotone} size={48} color="currentColor" className="size-8 animate-bounce" />
      </button>
    </section>
  )
}
