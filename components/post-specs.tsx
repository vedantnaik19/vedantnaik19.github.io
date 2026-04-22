import { Briefcase, Calendar, Hammer, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";
import { TypographyXSmall } from "./typography";

export interface PostSpecsProps {
  timeline: string;
  role: string;
  tools: string;
}

function Value({ value }: { value: string }) {
  const items = value.split(",").map((v) => v.trim());

  if (items.length === 1) {
    return <span>{items[0]}</span>;
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Badge key={item} className="font-medium" variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  );
}

function SpecItem({
  icon: Icon,
  label,
  value,
  monoValue = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  monoValue?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground flex items-center gap-2">
        <Icon className="h-3 w-3" />
        <TypographyXSmall>{label}</TypographyXSmall>
      </div>

      <div
        className={cn(
          "text-foreground text-sm leading-relaxed font-medium",
          monoValue && "font-mono"
        )}
      >
        <Value value={value} />
      </div>
    </div>
  );
}

export function PostSpecs({ timeline, role, tools }: PostSpecsProps) {
  return (
    <div className="border-y py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <SpecItem icon={Calendar} label="Timeline" value={timeline} monoValue />
        <SpecItem icon={Briefcase} label="Role" value={role} />
        <SpecItem icon={Hammer} label="Tools" value={tools} />
      </div>
    </div>
  );
}
