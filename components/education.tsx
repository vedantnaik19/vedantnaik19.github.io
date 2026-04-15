import {
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "./typography";

interface EducationItem {
  degree: string;
  university: string;
  year: string;
}

const education: EducationItem[] = [
  {
    degree: "M.Sc. Computer Science",
    university: "University of East Anglia",
    year: "2022",
  },
  {
    degree: "B.Tech. Production Engineering",
    university: "VJTI",
    year: "2018",
  },
];
export function Education() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col gap-6">
        <TypographyMuted>Education</TypographyMuted>

        <div className="flex flex-col gap-8">
          {education.map((item) => (
            <div key={`${item.university}-${item.degree}`}>
              <TypographyH5>{item.degree}</TypographyH5>
              <TypographyLead className="text-base leading-relaxed">
                {item.university}, {item.year}
              </TypographyLead>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
