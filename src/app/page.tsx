import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import ContentSection from "@/components/home/ContentSection";
import Tjenester from "@/components/home/Tjenester";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cecilie Skogstad - Gestaltterapeut",
  description: "Offisiell nettside for Cecilie Skogstad, gestaltterapeut. Tilbyr samtaleterapi og veiledning for personlig vekst og selvforståelse.",
};

export default async function Home() {

  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Tjenester />
      <About />
      <ContentSection />
    
    </main>
  );
}