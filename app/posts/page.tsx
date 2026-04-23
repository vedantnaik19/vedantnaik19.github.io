import { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { PostCover } from "@/components/post-cover";
import {
  SectionLabel,
  TypographyH2,
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
  const orderedPosts = posts;
  const categoryCount = new Set(orderedPosts.map((post) => post.category)).size;

  return (
    <main
      id="main-content"
      className="container mx-auto flex max-w-5xl flex-1 scroll-mt-20 flex-col gap-12 px-6 pt-8 pb-24 md:pt-16"
    >
      <div className="mx-auto flex w-full max-w-5xl">
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

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="grid gap-8 border-b py-8 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end md:gap-12">
          <div className="flex flex-col gap-3">
            <SectionLabel>Archive</SectionLabel>
            <TypographyH2>{title}</TypographyH2>
            <TypographyLarge className="text-muted-foreground max-w-2xl">
              {description}
            </TypographyLarge>
          </div>

          <div className="surface-card grid p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
                  Entries
                </TypographyMuted>
                <span className="font-mono text-2xl font-semibold">
                  {orderedPosts.length.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
                  Types
                </TypographyMuted>
                <span className="font-mono text-2xl font-semibold">
                  {categoryCount.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </header>

        {orderedPosts.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orderedPosts.map((post) => (
              <li key={post.slug}>
                <article className="surface-card surface-card-hover group relative flex h-full flex-col overflow-hidden">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="focus-ring absolute inset-0 z-10"
                  >
                    <span className="sr-only">View {post.title}</span>
                  </Link>

                  <PostCover
                    src={post.heroImage}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />

                  <div className="flex flex-1 flex-col justify-between gap-5 p-3">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-foreground/90 group-hover:text-foreground font-mono text-sm font-medium tracking-[-0.01em] underline-offset-4 transition-colors duration-300 ease-out group-hover:underline">
                            {post.title}
                          </h3>
                          <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
                            {post.category}
                          </TypographyMuted>
                        </div>
                        <ArrowRight className="motion-icon text-muted-foreground mt-0.5 h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5" />
                      </div>

                      <TypographyP className="text-muted-foreground line-clamp-3 text-sm leading-6">
                        {post.description}
                      </TypographyP>
                    </div>

                    <div>
                      <TypographyMuted className="font-mono text-xs tracking-widest uppercase">
                        {post.timeline}
                      </TypographyMuted>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="surface-card flex min-h-52 items-center justify-center p-8 text-center">
            <TypographyMuted>No posts yet.</TypographyMuted>
          </div>
        )}
      </section>
    </main>
  );
}
