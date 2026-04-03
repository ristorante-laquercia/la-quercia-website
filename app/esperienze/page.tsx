import { VideoHero } from '@/components/video-hero'
import { EsperienzeIntroSection } from '@/components/(esperienze)/esperienze-intro-section'
import { EsperienzeCardsSection } from '@/components/(esperienze)/esperienze-cards-section'
import { EsperienzeEventsSection } from '@/components/(esperienze)/esperienze-events-section'
import { CoworkingBanner } from '@/components/(esperienze)/coworking-banner'
import { EsperienzeGallery } from '@/components/(esperienze)/esperienze-gallery'

import { esperienzeContent } from '@/lib/contents/esperienze'

export default function EsperienzePage() {
  return (
    <main id="main-content" className="w-full overflow-x-clip">
      <VideoHero
        videoSrc="/assets/demo/0_Friends_People_3840x2160.mp4"
        fallbackVideoSrc="/assets/demo/6038167_People_Friends_1920x1080.mp4"
        title={`<h1>${esperienzeContent.hero.title}</h1>`}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/58 to-black/78"
      />
      <EsperienzeIntroSection />
      <EsperienzeCardsSection />
      <EsperienzeEventsSection />
      <CoworkingBanner />
      <EsperienzeGallery />
    </main>
  )
}
