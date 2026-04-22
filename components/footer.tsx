import { Mail } from "lucide-react";

import { ExternalLink } from "./external-link";
import { TypographyMuted } from "./typography";

export function Footer() {
  return (
    <footer id="contact" className="bg-background/85 w-full border-t py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8">
          <TypographyMuted>Let&apos;s connect.</TypographyMuted>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-medium tracking-wide">
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
    </footer>
  );
}
