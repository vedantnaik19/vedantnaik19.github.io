import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col gap-12 px-6 pt-8 pb-24 md:gap-20 md:pt-16">
      <Hero />
      <Featured />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
}
