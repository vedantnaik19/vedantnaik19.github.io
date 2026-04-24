import { Mail } from "lucide-react";

import { ExternalLink } from "./external-link";
import { SectionLabel, TypographyH4, TypographyMuted } from "./typography";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-background/85 w-full scroll-mt-20 border-t py-12 md:py-16"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="py-8">
          <div className="flex flex-col gap-5">
            <SectionLabel>Contact</SectionLabel>
            <div className="flex flex-col gap-3">
              <TypographyH4>Let&apos;s connect.</TypographyH4>
              <TypographyMuted className="max-w-lg">
                Reach out about engineering roles or software projects.
              </TypographyMuted>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:vedantnaik19@gmail.com" className="nav-link">
                <Mail className="h-3 w-3" /> vedantnaik19@gmail.com
              </a>

              <ExternalLink
                href="https://github.com/vedantnaik19"
                className="group"
              >
                GitHub
              </ExternalLink>

              <ExternalLink
                href="https://linkedin.com/in/vedantnaik19"
                className="group"
              >
                LinkedIn
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
