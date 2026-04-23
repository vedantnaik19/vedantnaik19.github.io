import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { TypographyH4, TypographyMuted } from "@/components/typography";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { posts } from "@/lib/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export const dynamicParams = false;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const orderedPosts = posts;
  const currentIndex = orderedPosts.findIndex((p) => p.slug === slug);
  const newerPost = currentIndex > 0 ? orderedPosts[currentIndex - 1] : null;
  const olderPost =
    currentIndex >= 0 && currentIndex < orderedPosts.length - 1
      ? orderedPosts[currentIndex + 1]
      : null;

  try {
    const { default: PostContent } = await import(`@/content/${slug}.mdx`);

    return (
      <main
        id="main-content"
        className="container mx-auto flex max-w-5xl flex-1 scroll-mt-20 flex-col gap-10 px-6 pt-8 pb-24 md:gap-12 md:pt-16"
      >
        <div className="mx-auto flex w-full max-w-5xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/">Home</Link>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={<Link href="/posts">Projects & Writing</Link>}
                />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <article className="flex w-full flex-col py-8 md:py-10">
          <PostContent />
        </article>

        {(newerPost || olderPost) && (
          <nav
            aria-label="Post navigation"
            className="grid gap-4 border-t pt-8 md:grid-cols-2 md:pt-10"
          >
            {newerPost ? (
              <Link
                href={`/posts/${newerPost.slug}`}
                className="surface-card surface-card-hover focus-ring group flex min-h-32 flex-col justify-between gap-6 p-5"
              >
                <TypographyMuted className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                  <ArrowLeft className="motion-icon h-3 w-3 group-hover:-translate-x-0.5" />
                  Previous
                </TypographyMuted>
                <TypographyH4 className="text-lg md:text-xl">
                  {newerPost.title}
                </TypographyH4>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}

            {olderPost ? (
              <Link
                href={`/posts/${olderPost.slug}`}
                className="surface-card surface-card-hover focus-ring group flex min-h-32 flex-col justify-between gap-6 p-5 text-left md:text-right"
              >
                <TypographyMuted className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase md:justify-end">
                  Next
                  <ArrowRight className="motion-icon h-3 w-3 group-hover:translate-x-0.5" />
                </TypographyMuted>
                <TypographyH4 className="text-lg md:text-xl">
                  {olderPost.title}
                </TypographyH4>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}
          </nav>
        )}
      </main>
    );
  } catch (error) {
    console.error(`Failed to load MDX for slug: ${slug}`, error);
    notFound();
  }
}
