import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col gap-24 p-6 pb-24">
      <Hero />
      <Featured />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
}
