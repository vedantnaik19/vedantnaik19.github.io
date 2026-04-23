"use client";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="motion-media rotate-0 dark:scale-0 dark:-rotate-90" />

      <Moon className="motion-media absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
