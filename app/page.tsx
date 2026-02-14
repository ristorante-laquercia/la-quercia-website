import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/(home)/about-section";
import { FoodSection } from "@/components/(home)/food-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-(--navbar-height)">
      <Hero />
      <AboutSection />
      <FoodSection />
    </main>
  );
}
