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
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

      <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
