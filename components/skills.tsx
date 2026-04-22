import { SectionBlock } from "./section-block";
import { TypographyMuted, TypographyP } from "./typography";

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
    <SectionBlock label="Skills">
      <div className="flex flex-col gap-2">
        {skillsEntries.map(([category, items]) => (
          <div key={category}>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-2 sm:items-baseline sm:gap-0">
              <TypographyMuted as="span" className="font-medium">
                {category}
              </TypographyMuted>
              <TypographyP className="text-left text-sm sm:text-right">
                {items.join(", ")}
              </TypographyP>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
