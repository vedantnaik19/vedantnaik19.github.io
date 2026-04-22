import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { SectionLabel } from "./typography";

interface SectionBlockProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

export function SectionBlock({
  children,
  label,
  className,
}: SectionBlockProps) {
  return (
    <section className={cn("flex w-full flex-col gap-6", className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      {children}
    </section>
  );
}
