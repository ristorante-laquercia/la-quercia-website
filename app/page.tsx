import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/(home)/about-section'
import { FoodSection } from '@/components/(home)/food-section'
import { BeerSection } from '@/components/(home)/beer-section'
import { EventsSection } from '@/components/(home)/events-section'
import { BookNowBanner } from '@/components/book-now-banner'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen w-full">
      <Hero />
      <AboutSection />
      <FoodSection />
      <BeerSection />
      <EventsSection />
      <BookNowBanner />
    </main>
  )
}
