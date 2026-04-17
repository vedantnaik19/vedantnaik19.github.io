import { SectionLabel, TypographyH4, TypographyMuted } from "./typography";

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
    <section className="flex w-full flex-col gap-6">
      <SectionLabel>Education</SectionLabel>

      <div className="flex flex-col gap-8">
        {education.map((item) => (
          <div key={`${item.university}-${item.degree}`}>
            <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-0">
              <TypographyH4>{item.degree}</TypographyH4>
              <TypographyMuted as="span">{item.year}</TypographyMuted>
            </div>
            <TypographyMuted className="mt-1">
              {item.university}
            </TypographyMuted>
          </div>
        ))}
      </div>
    </section>
  );
}
