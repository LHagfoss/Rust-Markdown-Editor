import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About />
    </main>
  );
}