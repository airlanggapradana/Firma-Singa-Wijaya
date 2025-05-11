import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto max-w-7xl space-y-7 px-5 py-10">
        <Hero />
      </div>
    </main>
  );
}
