import Link from "next/link";

import { ArrowRight, Mail, MapPin } from "lucide-react";

import {
  SectionLabel,
  TypographyH1,
  TypographyLarge,
  TypographyMuted,
} from "./typography";

export function Hero() {
  return (
    <section className="grid min-h-72 w-full flex-1 gap-8 border-b py-10 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end md:py-14">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-3">
          <SectionLabel>Software Engineer</SectionLabel>
          <TypographyH1>Vedant Naik</TypographyH1>
        </div>

        <TypographyLarge className="text-muted-foreground max-w-2xl">
          Currently building AI-powered platforms at the{" "}
          <a
            href="https://www.bbc.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            BBC
          </a>
          .
        </TypographyLarge>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link href="/posts" className="cta-link group">
            View work
            <ArrowRight className="motion-icon h-3 w-3 group-hover:translate-x-0.5" />
          </Link>
          <Link href="#contact" className="cta-link cta-link-secondary">
            <Mail className="h-3 w-3" />
            Contact
          </Link>
        </div>
      </div>

      <div className="surface-card grid self-end">
        <div className="grid grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col gap-2 border-r p-4 md:border-r-0 md:border-b">
            <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
              Based in
            </TypographyMuted>
            <TypographyMuted className="text-foreground flex items-center gap-1 font-mono text-sm">
              <MapPin className="h-3 w-3" />
              Manchester, UK
            </TypographyMuted>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
              Focus
            </TypographyMuted>
            <TypographyMuted className="text-foreground font-mono text-sm">
              AI, Full-stack, Android
            </TypographyMuted>
          </div>
        </div>
      </div>
    </section>
  );
}
