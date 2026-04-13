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
      <div className="flex flex-col">
        
        <p className="mb-6 text-xs text-muted-foreground">
          Education
        </p>


        <div className="space-y-4">
          {education.map((item) => (
            <div key={`${item.university}-${item.degree}`}>
              <h3 className="text-sm font-medium">
                {item.degree}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.university}, {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}