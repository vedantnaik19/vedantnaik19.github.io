import { MapPin } from "lucide-react";

import { TypographyH1, TypographyLarge, TypographyMuted } from "./typography";

export function Hero() {
  return (
    <section className="flex w-full flex-1 items-center">
      <div className="flex flex-col gap-y-4">
        <TypographyH1>Vedant Naik</TypographyH1>

        <TypographyLarge className="max-w-2xl">
          Software engineer building scalable systems. Currently building AI
          platforms at the{" "}
          <a
            href="https://www.bbc.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/85 hover:text-foreground underline decoration-current/30 underline-offset-4 transition-colors"
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
