import Link from "next/link";
import { Separator } from "./ui/separator";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className=" w-full border-t py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-sm">
            Open to opportunities and collaborations.
          </p>

          <div className="text-muted-foreground flex items-center gap-4 text-sm font-medium">
            <Link
              href="mailto:vedantnaik19@gmail.com"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs underline-offset-4 transition-colors hover:underline"
            >
              <Mail size={14} /> vedantnaik19@gmail.com
            </Link>
            <Link
              href="https://github.com/vedantnaik19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5 text-xs underline-offset-4 transition-colors hover:underline"
            >
              GitHub <ArrowUpRight size={14} />
            </Link>
            <Link
              href="https://linkedin.com/in/vedantnaik19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5 text-xs underline-offset-4 transition-colors hover:underline"
            >
              LinkedIn <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
