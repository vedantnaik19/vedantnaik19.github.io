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
        "font-mono text-4xl font-bold tracking-tight md:text-5xl",
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
        "font-mono text-3xl font-bold tracking-tight md:text-4xl",
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
        "text-foreground/90 font-mono text-2xl font-semibold tracking-tight",
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
        "text-foreground/90 font-mono text-xl font-semibold tracking-tight",
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
        "text-foreground/90 font-mono text-lg font-semibold tracking-tight",
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
        "text-foreground/90 font-mono text-base font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h6>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-foreground text-base leading-7", className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-foreground text-xl leading-8", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm font-medium tracking-wide",
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
        "text-muted-foreground font-mono text-xs tracking-wide",
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
    <Component className={cn("text-muted-foreground text-sm", className)}>
      {children}
    </Component>
  );
}

export function SectionLabel({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground font-mono text-xs font-medium tracking-widest uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
