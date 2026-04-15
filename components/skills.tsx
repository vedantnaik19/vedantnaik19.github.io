import { TypographyMuted, TypographyP, TypographySmall } from "./typography";

const skills = {
  Languages: ["TypeScript", "Python", "Java", "Kotlin", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Spring Boot", "FastAPI"],
  Infrastructure: ["AWS", "CI/CD"],
  Mobile: ["Android", "Flutter"],
};

export function Skills() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col gap-6">
        <TypographyMuted>Skills</TypographyMuted>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-y-3">
              <TypographySmall>{category}</TypographySmall>

              <ul className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <li key={skill}>
                    <TypographyP className="mt-0!">{skill}</TypographyP>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
