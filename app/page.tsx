import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-(--navbar-height)">
      <Hero />
    </main>
  );
}
