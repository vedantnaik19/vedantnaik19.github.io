import { posts } from "@/lib/posts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of my projects and engineering work.",
};

export default async function PostsPage() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col p-6 pb-24">
      <p className="text-muted-foreground mt-12 mb-8 text-xs">Posts / Work</p>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group flex flex-col"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight underline-offset-4 group-hover:underline">
                {post.title}
              </h3>

              <span className="text-muted-foreground text-sm">
                {post.date.toLocaleDateString()}
              </span>
            </div>

            <p className="text-muted-foreground mt-2 max-w-prose leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="text-muted-foreground text-sm">No posts yet.</p>
        )}
      </div>
    </main>
  );
}
