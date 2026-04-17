import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col gap-16 px-6 pt-12 pb-24 md:gap-24 md:pt-20">
      <Hero />
      <Featured />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
}
