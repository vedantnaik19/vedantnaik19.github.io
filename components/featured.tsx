import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypographyMuted, TypographyP, TypographySmall } from "./typography";

interface FeaturedCardProps {
  title: string;
  company: string;
  image: string;
  href: string;
}

function FeaturedCard({ title, company, image, href }: FeaturedCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="hover:bg-muted relative mx-auto w-full max-w-sm pt-0 transition-all duration-300">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover brightness-90 contrast-95 grayscale transition duration-300 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0"
            loading="eager"
          />
        </div>

        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <TypographyMuted className="text-xs">{company}</TypographyMuted>
        </CardHeader>
      </Card>
    </Link>
  );
}

const projects = [
  {
    title: "E-bike Rental Platform",
    company: "Hover Mobility",
    image: "/assets/001/cover.webp",
    href: "/posts/001",
  },
  {
    title: "AI Tutor",
    company: "BBC",
    image: "/images/placeholder.svg",
    href: "#",
  },
  {
    title: "CBeebies Apps",
    company: "BBC",
    image: "/images/placeholder.svg",
    href: "#",
  },
];

export function Featured() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col gap-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FeaturedCard key={i} {...project} />
          ))}
        </div>
        <Link
          href="/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-sm"
        >
          View all work <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
