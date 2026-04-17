"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-50 w-full border-b px-6 py-4">
      <div className="container mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="hover:text-foreground/80 text-xl font-bold tracking-tighter transition-opacity"
          aria-label="Vedant Naik - Home"
        >
          व न
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/posts">Work</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="#contact">Contact</Link>}
              />
            </NavigationMenuItem>
            <Separator orientation="vertical" className="m-2" />
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
