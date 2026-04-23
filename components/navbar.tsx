"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const isWorkActive = pathname.startsWith("/posts");

  return (
    <nav className="bg-background/85 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="group focus-ring -ml-2 inline-flex h-14 items-center gap-3 px-2 font-mono transition-colors duration-300 ease-out"
          aria-label="Vedant Naik - Home"
        >
          <span className="surface-card surface-card-hover inline-flex h-8 w-8 items-center justify-center text-sm font-semibold tracking-tight">
            वे
          </span>
          <span className="text-muted-foreground hidden text-xs font-medium tracking-wide sm:inline">
            Vedant Naik
          </span>
        </Link>

        <NavigationMenu className="flex-none">
          <NavigationMenuList className="surface-card gap-0">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                data-active={isWorkActive || undefined}
                render={<Link href="/posts">Work</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="#contact">Contact</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem className="border-l">
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
