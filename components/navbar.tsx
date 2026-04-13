"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

export function Navbar() {
  return (
    <nav className="bg-background/80 sticky top-0 z-50 w-full border-b border-border/40 py-2 backdrop-blur-md">
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter"
          aria-label="Vedant Naik - Home"
        >
          व न
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/blogs">Blogs</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/contact">Contact</Link>}
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
