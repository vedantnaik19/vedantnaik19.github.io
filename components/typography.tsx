import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-mono text-4xl leading-[0.98] font-semibold tracking-[-0.04em] text-balance md:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-mono text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance md:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-foreground/90 font-mono text-2xl leading-tight font-semibold tracking-[-0.025em] text-balance",
        "md:text-3xl",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "text-foreground/90 font-mono text-xl leading-snug font-semibold tracking-[-0.03em] text-balance",
        "md:text-2xl",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({ children, className }: TypographyProps) {
  return (
    <h5
      className={cn(
        "text-foreground/90 font-mono text-lg leading-snug font-semibold tracking-[-0.025em] text-balance",
        "md:text-xl",
        className
      )}
    >
      {children}
    </h5>
  );
}

export function TypographyH6({ children, className }: TypographyProps) {
  return (
    <h6
      className={cn(
        "text-foreground/90 font-mono text-base leading-snug font-semibold tracking-[-0.02em] text-balance",
        className
      )}
    >
      {children}
    </h6>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-foreground/90 text-base leading-7 tracking-[-0.01em]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-foreground/90 text-xl leading-8 tracking-[-0.025em] text-pretty",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm leading-6 font-medium tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
}
export function TypographyXSmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground font-mono text-xs leading-5 tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyMuted({
  children,
  className,
  as: Component = "p",
}: TypographyProps & { as?: "p" | "span" | "small" }) {
  return (
    <Component
      className={cn("text-muted-foreground text-sm leading-6", className)}
    >
      {children}
    </Component>
  );
}

export function SectionLabel({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground font-mono text-[0.7rem] leading-5 font-medium tracking-[0.22em] uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
