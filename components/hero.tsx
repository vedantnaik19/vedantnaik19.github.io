import { MapPin } from "lucide-react";
import Link from "next/link";
import { TypographyH1, TypographyLead } from "./typography";

export function Hero() {
  return (
    <section className="flex min-h-[40vh] w-full items-center">
      <div className="mt-36 flex flex-col gap-y-4">
        <TypographyH1>Vedant Naik</TypographyH1>

        <TypographyLead className="max-w-2xl text-2xl leading-relaxed">
          Software engineer building scalable systems. Currently building AI
          platforms at the{" "}
          <a
            href="https://www.bbc.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-2xl underline"
          >
            BBC
          </a>
          .
        </TypographyLead>

        <span className="text-muted-foreground flex items-center gap-1 text-sm">
          <MapPin className="h-3 w-3" />
          Manchester, United Kingdom
        </span>
      </div>
    </section>
  );
}
