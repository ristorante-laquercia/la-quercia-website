import { VideoHero } from '@/components/video-hero'
import { RadiciSection } from '@/components/(chi-siamo)/radici-section'
import { PresentSection } from '@/components/(chi-siamo)/present-section'
import { PhilosophyBlock } from '@/components/(chi-siamo)/philosophy-block'

export default function ChiSiamoPage() {
  return (
    <main className="w-full">
      <VideoHero videoSrc="/assets/video/chi-siamo-hero.mp4" title={'<h1>Radici profonde,<br/ > nuovi orizzonti.</h1>'} />
      <RadiciSection />
      <PresentSection />
      <PhilosophyBlock />
    </main>
  )
}
