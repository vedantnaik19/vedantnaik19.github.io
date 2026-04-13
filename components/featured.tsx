import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="eager"
          />
        </div>

        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-muted-foreground text-sm">{company}</p>{" "}
        </CardHeader>
      </Card>
    </Link>
  );
}

const projects = [
  {
    title: "E-bike Rental Platform",
    company: "Hover Mobility",
    image: "/images/placeholder.svg",
    href: "/projects/ecommerce",
  },
  {
    title: "AI Tutor",
    company: "BBC",
    image: "/images/placeholder.svg",
    href: "/projects/ai-dashboard",
  },
  {
    title: "CBeebies Apps",
    company: "BBC",
    image: "/images/placeholder.svg",
    href: "/projects/portfolio",
  },
];

export function Featured() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FeaturedCard key={i} {...project} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5 text-xs underline-offset-4 transition-colors hover:underline"
          >
            View all work
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
