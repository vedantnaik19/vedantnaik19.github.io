import { ArrowUpRightIcon, Globe, Smartphone } from "lucide-react";

// TODO: Make this reusuable
export function ProjectLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href="https://play.google.com/store/apps/details?id=co.auter.hover&hl=en_GB"
        target="_blank"
        className="nav-link"
        rel="noopener noreferrer"
      >
        <Smartphone className="mr-0.5 h-3.5 w-3.5" aria-hidden="true" /> App
        <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
      </a>
      <a
        href="https://www.hover-mobility.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <Globe className="mr-0.5 h-3.5 w-3.5" aria-hidden="true" /> Website
        <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
      </a>
    </div>
  );
}
