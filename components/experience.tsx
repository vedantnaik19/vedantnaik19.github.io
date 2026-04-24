import { SectionBlock } from "./section-block";
import { TypographyH4, TypographyMuted, TypographyP } from "./typography";

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
    <SectionBlock label="Experience">
      <div className="flex flex-col border-b">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="surface-row-hover grid gap-3 border-t py-6 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8 md:px-3"
          >
            <div>
              <TypographyMuted as="span" className="font-mono">
                {item.period}
              </TypographyMuted>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-0">
                <TypographyH4>{item.role}</TypographyH4>
              </div>

              <TypographyMuted>{item.company}</TypographyMuted>

              {item.description && (
                <TypographyP className="text-muted-foreground mt-2 max-w-prose">
                  {item.description}
                </TypographyP>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
