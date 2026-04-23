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
      <div className="flex flex-col border-b">
        {education.map((item) => (
          <div
            key={`${item.university}-${item.degree}`}
            className="surface-row-hover grid gap-3 border-t py-5 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8 md:px-3"
          >
            <div>
              <TypographyMuted as="span" className="font-mono">
                {item.year}
              </TypographyMuted>
            </div>

            <div className="flex flex-col gap-y-2">
              <TypographyH4>{item.degree}</TypographyH4>
              <TypographyMuted>{item.university}</TypographyMuted>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
