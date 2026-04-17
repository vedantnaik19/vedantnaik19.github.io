import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CoverProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

export function Cover({
  left,
  right,
  className,
  leftClassName,
  rightClassName,
}: CoverProps) {
  return (
    <section
      className={cn(
        "bg-muted h-[40vh] w-full overflow-hidden md:h-[80vh]",
        className
      )}
    >
      <div className="flex h-full flex-row items-center">
        <div
          className={cn(
            "flex flex-2 items-center justify-end px-6 text-right text-4xl font-extrabold tracking-tight md:px-12 md:text-6xl",
            leftClassName
          )}
        >
          {left}
        </div>

        <div
          className={cn(
            "relative flex h-full flex-3 items-center justify-center py-12",
            rightClassName
          )}
        >
          {right}
        </div>
      </div>
    </section>
  );
}
