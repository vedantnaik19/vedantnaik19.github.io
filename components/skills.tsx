const skills = {
  Languages: ["TypeScript", "Python", "Java", "Kotlin", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Spring Boot", "FastAPI"],
  Architecture: ["Microservices", "Event-Driven Architecture", "API Design"],
  Infrastructure: ["AWS", "CI/CD"],
  Mobile: ["Android", "Flutter"],
};

export function Skills() {
  return (
    <section className="w-full">
      <div className="flex flex-col">
        <p className="text-muted-foreground mb-6 text-xs">Skills</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-sm font-medium">{category}</h3>

              <ul className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">
                    {skill}
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
