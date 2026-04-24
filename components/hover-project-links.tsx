import { Globe, Smartphone } from "lucide-react";

import { ExternalLink } from "./external-link";

export function HoverProjectLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <ExternalLink
        href="https://play.google.com/store/apps/details?id=co.auter.hover&hl=en_GB"
        icon={Smartphone}
        variant="cta"
      >
        App
      </ExternalLink>
      <ExternalLink
        href="https://www.hover-mobility.com/"
        icon={Globe}
        variant="cta"
      >
        Website
      </ExternalLink>
    </div>
  );
}
