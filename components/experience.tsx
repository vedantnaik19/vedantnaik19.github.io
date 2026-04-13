interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description?: string;
}

const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "BBC, United Kingdom",
    period: "2023 — Present",
    description:
      "Building AI systems used by editorial teams to automate workflows. Previously worked on CBeebies mobile apps used by millions of users.",
  },
  {
    role: "Co-founder & Engineer",
    company: "Hover Mobility, India",
    period: "2020 — 2021",
    description:
      "Led development of an e-bike rental platform from design to launch, scaling to multiple cities before acquisition.",
  },
  {
    role: "Mobile Engineer",
    company: "FilmArtsy, India",
    period: "2019 — 2020",
    description:
      "Built a LinkedIn-like social platform for film industry professionals using Flutter (iOS & Android).",
  },
  {
    role: "Co-founder & Engineer",
    company: "Startup Projects, India",
    period: "2017 — 2019",
    description:
      "Co-founded and built multiple products, including an automated laundry platform and a smart vending system, during and after my bachelor's.",
  },
];

export function Experience() {
  return (
    <section className="w-full">
      <div className="flex flex-col">
        <p className="mb-6 text-xs text-muted-foreground">
          Experience
        </p>
        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.role}
                </h3>
                <span className="text-muted-foreground text-sm">
                  {item.period}
                </span>
              </div>

              <p className="text-muted-foreground text-sm">{item.company}</p>

              {item.description && (
                <p className="text-muted-foreground mt-2 max-w-prose leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
