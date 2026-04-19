import { MapPin } from "lucide-react";

import { TypographyH1, TypographyLarge, TypographyMuted } from "./typography";

export function Hero() {
  return (
    <section className="flex min-h-[30vh] w-full items-center lg:min-h-[40vh]">
      <div className="flex flex-col gap-y-4">
        <TypographyH1>Vedant Naik</TypographyH1>

        <TypographyLarge className="max-w-2xl">
          Software engineer building scalable systems. Currently building AI
          platforms at the{" "}
          <span>
            <a
              href="https://www.bbc.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              BBC
            </a>
            .
          </span>
        </TypographyLarge>

        <TypographyMuted className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          Manchester, United Kingdom
        </TypographyMuted>
      </div>
    </section>
  );
}
