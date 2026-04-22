import { SectionBlock } from "./section-block";
import { TypographyH4, TypographyMuted } from "./typography";

interface EducationItem {
  degree: string;
  university: string;
  year: string;
}

const education: EducationItem[] = [
  {
    degree: "M.Sc. Computer Science",
    university: "University of East Anglia",
    year: "2021 — 2022",
  },
  {
    degree: "B.Tech. Production Engineering",
    university: "VJTI",
    year: "2014 — 2018",
  },
];
export function Education() {
  return (
    <SectionBlock label="Education">
      <div className="flex flex-col gap-12">
        {education.map((item) => (
          <div
            key={`${item.university}-${item.degree}`}
            className="flex flex-col gap-y-2"
          >
            <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-0">
              <TypographyH4>{item.degree}</TypographyH4>
              <TypographyMuted as="span" className="font-mono">
                {item.year}
              </TypographyMuted>
            </div>
            <TypographyMuted>{item.university}</TypographyMuted>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
