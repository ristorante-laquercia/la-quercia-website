import { VideoHero } from '@/components/video-hero'
import { RadiciSection } from '@/components/(chi-siamo)/radici-section'
import { PresentSection } from '@/components/(chi-siamo)/present-section'
import { PhilosophyBlock } from '@/components/(chi-siamo)/philosophy-block'

export default function ChiSiamoPage() {
  return (
    <main className="w-full">
      <VideoHero
        videoSrc="/assets/video/chi-siamo-hero.mp4"
        title={'<h1>Radici profonde,<br/ > nuovi orizzonti.</h1>'}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/60 to-black/78"
      />
      <RadiciSection />
      <PresentSection />
      <PhilosophyBlock />
    </main>
  )
}
