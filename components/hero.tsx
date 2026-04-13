import { MapPin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex min-h-[40vh] w-full items-center">
      <div className="mt-12 flex flex-col">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Vedant Naik</h1>

          <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
            Software engineer building scalable systems. Currently building AI
            platforms at the{" "}
            <Link
              href="https://www.bbc.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground font-medium underline underline-offset-4 transition-colors"
            >
              BBC
            </Link>
            .
          </p>

          <p className="text-muted-foreground flex items-center gap-1 text-sm">
            <MapPin className="h-3 w-3" />
            Manchester, United Kingdom
          </p>
        </div>
      </div>
    </section>
  );
}
