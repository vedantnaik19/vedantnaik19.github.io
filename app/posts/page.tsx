import { Metadata } from "next";
import Link from "next/link";

import {
  SectionLabel,
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of my projects and engineering work.",
};

export default async function PostsPage() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col gap-16 px-6 pt-12 pb-24 md:gap-24 md:pt-20">
      <section className="flex flex-col gap-6">
        <SectionLabel>Posts / Work</SectionLabel>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-4">
                <TypographyH3 className="underline-offset-4 group-hover:underline">
                  {post.title}
                </TypographyH3>

                {post.date && (
                  <TypographyMuted as="span">
                    {post.date.toLocaleDateString()}
                  </TypographyMuted>
                )}
              </div>

              <TypographyP className="mt-2 max-w-prose">
                {post.description}
              </TypographyP>
            </Link>
          ))}

          {posts.length === 0 && (
            <TypographyMuted>No posts yet.</TypographyMuted>
          )}
        </div>
      </section>
    </main>
  );
}
