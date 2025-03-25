import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import ContentSection from "@/components/home/ContentSection";
import Tjenester from "@/components/home/Tjenester";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Tjenester />
      <About />
      <ContentSection />
    </main>
  );
}