import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PostMeta } from "@/components/post-meta";
import {
  TypographyH2,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { posts } from "@/lib/posts";

const title = "Projects & Writing";
const description =
  "A collection of my projects, case studies, and engineering work.";

export const metadata: Metadata = {
  title,
  description,
};

export default function PostsPage() {
  const orderedPosts = [...posts].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return b.date.getTime() - a.date.getTime();
  });

  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col gap-12 px-6 pt-8 pb-24 md:pt-16">
      {/* Breadcrumb */}

      <div className="mx-auto flex w-full max-w-3xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects & Writing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-12">
        <header className="flex flex-col gap-2">
          <TypographyH2>{title}</TypographyH2>

          <TypographyLarge className="text-muted-foreground">
            {description}
          </TypographyLarge>
        </header>

        {/* Posts List */}
        <ul className="divide-border flex w-full flex-col divide-y">
          {orderedPosts.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0 last:pb-0">
              <article className="group relative flex w-full flex-col gap-4 overflow-hidden sm:flex-row sm:gap-8">
                <Link
                  href={`/posts/${post.slug}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View {post.title}</span>
                </Link>

                {/* Image */}
                <div className="relative aspect-video w-full shrink-0 overflow-hidden sm:w-64">
                  <Image
                    src={post.heroImage}
                    alt={`${post.title} hero image`}
                    fill
                    sizes="(max-width: 639px) 100vw, 16rem"
                    className="bg-card/10 group-hover:bg-card/50 object-contain opacity-85 transition-all duration-300 ease-out group-hover:opacity-100"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-4">
                  <PostMeta showUpdated={false} post={post} />

                  <div className="flex flex-col gap-2">
                    <TypographyH4 className="group-hover:underline">
                      {post.title}
                    </TypographyH4>

                    <TypographyP className="line-clamp-2">
                      {post.description}
                    </TypographyP>
                  </div>
                </div>
              </article>

            </li>
          ))}

          {/* Empty State */}
          {orderedPosts.length === 0 && (
            <li className="py-16 text-center">
              <TypographyMuted>No posts yet.</TypographyMuted>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}
