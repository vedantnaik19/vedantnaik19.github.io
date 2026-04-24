import Image from "next/image";

import { cn } from "@/lib/utils";

interface PostCoverProps {
  src: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}

export function PostCover({ src, sizes, className, priority }: PostCoverProps) {
  return (
    <div
      className={cn(
        "bg-card/10 relative aspect-video w-full overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className="motion-media object-contain p-3 opacity-85 grayscale group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}
