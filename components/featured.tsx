import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { PostCover } from "./post-cover";
import { SectionBlock } from "./section-block";
import { TypographyMuted } from "./typography";

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

function FeaturedCard({ title, subtitle, image, href }: FeaturedCardProps) {
  return (
    <Link href={href} className="focus-ring group block">
      <article className="surface-card surface-card-hover relative flex w-full flex-col overflow-hidden">
        <PostCover
          src={image}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />

        <div className="flex flex-col gap-1 p-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-foreground/90 group-hover:text-foreground font-mono text-sm font-medium tracking-[-0.01em] underline-offset-4 transition-colors duration-300 ease-out group-hover:underline">
              {title}
            </h3>
            <ArrowRight className="motion-icon text-muted-foreground mt-0.5 h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5" />
          </div>
          <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
            {subtitle}
          </TypographyMuted>
        </div>
      </article>
    </Link>
  );
}

const projects = [
  {
    title: "E-bike Rental Platform",
    subtitle: "Hover Mobility",
    image: "/assets/001/cover.webp",
    href: "/posts/001",
  },
  {
    title: "Multimodal AI Tutor",
    subtitle: "BBC",
    image: "/assets/002/cover.webp",
    href: "/posts/002",
  },
  {
    title: "Social Media App",
    subtitle: "FilmArtsy",
    image: "/assets/003/cover.webp",
    href: "/posts/003",
  },
];

export function Featured() {
  return (
    <SectionBlock label="Featured Work" className="lg:flex-1 lg:justify-center">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <FeaturedCard key={project.href} {...project} />
        ))}
      </div>
      <Link href="/posts" className="cta-link cta-link-secondary group w-fit">
        View all work
        <ArrowRight className="motion-icon h-3 w-3 group-hover:translate-x-0.5" />
      </Link>
    </SectionBlock>
  );
}
