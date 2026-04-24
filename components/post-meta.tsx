import { Post } from "@/lib/posts";

import { Badge } from "./ui/badge";

export function PostMeta({ post }: { post: Post }) {
  return (
    <section className="flex flex-wrap items-center gap-2 text-sm">
      {post.category && (
        <Badge variant="secondary" className="px-2 py-0.5">
          {post.category}
        </Badge>
      )}
    </section>
  );
}
