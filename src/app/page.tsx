import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
    </main>
  );
}
