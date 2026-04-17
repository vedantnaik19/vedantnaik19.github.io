import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Construction } from "lucide-react";

import { TypographyP } from "@/components/typography";
import { posts } from "@/lib/posts";

const post = posts.find((p) => p.slug === "003");

export const metadata: Metadata = {
  title: post?.title,
  description: post?.description,
};

export default function Page() {
  if (!post) notFound();

  return (
    <main className="container mx-auto flex w-full flex-1 flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
      <div className="bg-muted flex h-16 w-16 items-center justify-center">
        <Construction className="text-muted-foreground h-8 w-8" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <TypographyP className="text-muted-foreground max-w-125">
          I&apos;m currently documenting this project. Check back soon for a
          full deep dive into the engineering, design, and outcome of this work.
        </TypographyP>
      </div>
    </main>
  );
}
