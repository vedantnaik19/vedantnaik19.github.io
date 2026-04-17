import { Separator } from "./ui/separator";
import { SectionLabel, TypographyMuted, TypographyP } from "./typography";

const skills = {
  Languages: ["TypeScript", "Python", "Java", "Kotlin", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Spring Boot", "FastAPI"],
  Infrastructure: ["AWS", "CI/CD"],
  Mobile: ["Android", "Flutter"],
};

export function Skills() {
  const skillsEntries = Object.entries(skills);

  return (
    <section className="flex w-full flex-col gap-6">
      <SectionLabel>Skills</SectionLabel>

      <div className="flex flex-col">
        {skillsEntries.map(([category, items], index) => (
          <div key={category}>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-2 sm:items-baseline sm:gap-0">
              <TypographyMuted as="span" className="font-medium">
                {category}
              </TypographyMuted>
              <TypographyP className="text-left text-sm sm:text-right">
                {items.join(", ")}
              </TypographyP>
            </div>
            {index < skillsEntries.length - 1 && (
              <Separator className="opacity-50" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
