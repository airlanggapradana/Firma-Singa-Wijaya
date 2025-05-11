import Hero from "@/components/Hero";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 bg-indigo-900">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Law background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="mx-auto h-screen max-w-7xl space-y-7 px-5 py-10">
        <Hero />
      </div>
    </main>
  );
}
