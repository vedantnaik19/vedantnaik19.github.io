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
import { Separator } from "@/components/ui/separator";
import { posts } from "@/lib/posts";

const title = "Projects & Blogs";
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
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col gap-12 px-6 pt-8 pb-24 md:gap-20 md:pt-16">
      {/* Breadcrumb */}

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects & Blogs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <section className="flex flex-col gap-10">
        <header className="flex max-w-2xl flex-col gap-2">
          <TypographyH2 className="text-3xl font-bold tracking-tight">
            {title}
          </TypographyH2>

          <TypographyLarge className="text-muted-foreground">
            {description}
          </TypographyLarge>
        </header>

        {/* Posts List */}
        <ul className="flex w-full max-w-3xl flex-col gap-3">
          {orderedPosts.map((post, index) => (
            <li key={post.slug} className="flex flex-col gap-3">
              <article className="group relative flex w-full flex-col gap-x-8 overflow-hidden sm:flex-row">
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
                    className="bg-muted/50 object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-4">
                  <PostMeta post={post} />

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

              {index < orderedPosts.length - 1 && (
                <Separator className="bg-border my-6 h-px" />
              )}
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
