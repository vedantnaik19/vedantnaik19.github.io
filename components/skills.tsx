import { SectionBlock } from "./section-block";
import { TypographyMuted } from "./typography";

const skills = {
  Languages: ["TypeScript", "Python", "Java", "Kotlin", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Spring Boot", "FastAPI"],
  Infrastructure: ["AWS", "CI/CD"],
  Mobile: ["Android", "Flutter"],
  AI: ["LlamaIndex", "LangChain"],
};

export function Skills() {
  const skillsEntries = Object.entries(skills);

  return (
    <SectionBlock label="Skills">
      <div className="surface-card bg-border grid gap-px p-px sm:grid-cols-2 lg:grid-cols-3">
        {skillsEntries.map(([category, items]) => (
          <div
            key={category}
            className="surface-row-hover bg-background/95 p-4 sm:min-h-32"
          >
            <TypographyMuted
              as="span"
              className="font-mono text-xs tracking-widest uppercase"
            >
              {category}
            </TypographyMuted>

            <p className="text-foreground/90 mt-5 max-w-sm font-mono text-sm leading-7">
              {items.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
