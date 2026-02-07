"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      className="btn-secondary inline-flex items-center !px-4 !py-2 !text-xs"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={currentTheme === "dark"}
    >
      {mounted ? (currentTheme === "dark" ? "Light Mode" : "Dark Mode") : "Mode"}
    </button>
  );
}
