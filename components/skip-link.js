export default function SkipLink() {
  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
    >
      Skip to content
    </a>
  );
}
