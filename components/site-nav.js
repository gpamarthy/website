"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export default function SiteNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -45% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-3 z-50">
      <div
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full px-5 py-3 shadow-command backdrop-blur-xl md:px-6"
        style={{
          border: "1px solid var(--border)",
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, transparent), rgba(90, 200, 255, 0.14))"
        }}
      >
        <div className="text-accent flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] md:text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          Command Bar
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] md:gap-4 md:text-xs" aria-label="Primary">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-2.5 py-1 transition ${
                activeId === section.id
                  ? "text-accent"
                  : "text-muted hover:text-accent"
              }`}
              aria-current={activeId === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
