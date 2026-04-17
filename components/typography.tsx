import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-5xl font-extrabold tracking-tight", className)}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-4xl font-extrabold tracking-tight", className)}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-foreground/90 text-2xl font-bold tracking-tight",
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
        "text-foreground/90 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-foreground/80 leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-foreground/80 text-xl leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-foreground/80 text-sm leading-none font-medium",
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
    <p className={cn("text-muted-foreground text-sm font-medium", className)}>
      {children}
    </p>
  );
}
