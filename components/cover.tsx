import { ReactNode } from "react";
import clsx from "clsx";

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
    <div
      className={clsx(
        "bg-accent hover:bg-accent/95 md:h-[80vh] h-[30vh] w-full overflow-hidden transition-colors",
        className
      )}
    >
      <div className="flex h-full flex-row items-center">
        <div
          className={clsx(
            "text-foreground flex flex-2 items-center justify-end px-4 text-right text-3xl font-bold tracking-tighter md:px-8 md:text-6xl",
            leftClassName
          )}
        >
          {left}
        </div>

        <div
          className={clsx(
            "relative flex h-full flex-5 items-center justify-center py-12",
            rightClassName
          )}
        >
          {right}
        </div>
      </div>
    </div>
  );
}
