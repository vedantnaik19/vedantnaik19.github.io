import { MapPin } from "lucide-react";
import { TypographyH1, TypographyLarge, TypographyMuted } from "./typography";

export function Hero() {
  return (
    <section className="flex min-h-[40vh] w-full items-start pt-16 md:pt-36">
      <div className="flex flex-col gap-y-4">
        <TypographyH1>Vedant Naik</TypographyH1>

        <TypographyLarge className="max-w-2xl">
          Software engineer building scalable systems. Currently building AI
          platforms at the{" "}
          <a
            href="https://www.bbc.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            BBC
          </a>
          .
        </TypographyLarge>

        <TypographyMuted className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          Manchester, United Kingdom
        </TypographyMuted>
      </div>
    </section>
  );
}
