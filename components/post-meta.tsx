import { Post } from "@/lib/posts";

import { Badge } from "./ui/badge";

export function PostMeta({ post }: { post: Post }) {
  const dateLabel = post.date?.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="flex flex-wrap items-center gap-2 text-sm">
      {post.category && (
        <Badge variant="secondary" className="px-2 py-0.5 text-xs font-medium">
          {post.category}
        </Badge>
      )}

      {post.category && dateLabel && (
        <span className="text-muted-foreground">•</span>
      )}

      {dateLabel && (
        <span className="text-muted-foreground">Updated {dateLabel}</span>
      )}
    </section>
  );
}
