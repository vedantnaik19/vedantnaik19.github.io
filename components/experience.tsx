import {
  TypographyH5,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "./typography";

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
      <div className="flex w-full flex-col gap-6">
        <TypographyMuted>Experience</TypographyMuted>

        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`}>
              <div className="flex items-baseline justify-between">
                <TypographyH5>{item.role}</TypographyH5>
                <TypographyLead className="text-base leading-relaxed">{item.period}</TypographyLead>
              </div>

              <TypographyLead className="text-base leading-relaxed">
                {item.company}
              </TypographyLead>

              {item.description && (
                <TypographyP className="mt-4! max-w-prose">
                  {item.description}
                </TypographyP>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
