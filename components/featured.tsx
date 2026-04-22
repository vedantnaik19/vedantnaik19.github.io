import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Link href={href} className="group block">
      <Card className="bg-card/10 hover:bg-card/50 relative mx-auto w-full max-w-sm py-0 transition-all duration-300">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-contain brightness-90 contrast-95 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0"
            loading="lazy"
          />
        </div>

        <CardHeader className="bg-card/20 hover:bg-card py-3">
          <CardTitle>{title}</CardTitle>
          <TypographyMuted className="text-xs">{subtitle}</TypographyMuted>
        </CardHeader>
      </Card>
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
    <SectionBlock>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FeaturedCard key={i} {...project} />
        ))}
      </div>
      <Link href="/posts" className="nav-link group">
        View all work <ArrowRight className="h-3 w-3" />
      </Link>
    </SectionBlock>
  );
}
