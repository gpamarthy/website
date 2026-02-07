"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/operations", label: "Operations" },
  { href: "/briefing", label: "Briefing" },
  { href: "/comms", label: "Comms" },
  { href: "/certifications", label: "Certifications" }
];

export default function CommandBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-white/20 bg-command-bar px-6 py-4 shadow-command backdrop-blur">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          Command Bar
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-900 dark:text-slate-100 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-emerald-300">
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-emerald-300 hover:text-emerald-200 dark:text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle dark mode"
        >
          {mounted ? (theme === "dark" ? "Light Mode" : "Dark Mode") : "Mode"}
        </button>
      </nav>
      <div className="mt-3 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-emerald-300">
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
