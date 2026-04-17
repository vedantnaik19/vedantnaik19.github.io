import { ArrowUpRight, Mail } from "lucide-react";

import { TypographyMuted } from "./typography";

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8">
          <TypographyMuted>Let&apos;s connect.</TypographyMuted>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a href="mailto:vedantnaik19@gmail.com" className="nav-link">
              <Mail size={14} /> vedantnaik19@gmail.com
            </a>

            <a
              href="https://github.com/vedantnaik19"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link group"
            >
              GitHub{" "}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="https://linkedin.com/in/vedantnaik19"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link group"
            >
              LinkedIn{" "}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
