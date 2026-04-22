import { AriaAttributes, ComponentType, ReactNode } from "react";

import { ArrowUpRightIcon, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  icon?:
    | LucideIcon
    | ComponentType<{
        className?: string;
        "aria-hidden"?: AriaAttributes["aria-hidden"];
      }>;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  icon: Icon,
  className,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("nav-link", className)}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      <span>{children}</span>
      <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}
