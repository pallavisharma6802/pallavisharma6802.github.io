"use client";

import { useLens } from "@/context/LensContext";
import { useTheme } from "@/context/ThemeContext";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { lens, setLens } = useLens();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <div className="mx-auto max-w-6xl px-6 sm:px-10 flex items-center justify-between h-16">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          Pallavi Sharma
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Portfolio lens"
            className="relative flex items-center rounded-full border border-line bg-raised p-1 font-mono text-[11px] uppercase tracking-wide"
          >
            <button
              onClick={() => setLens("general")}
              className={`relative z-10 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                lens === "general" ? "text-[var(--accent-ink)]" : "text-ink-soft"
              }`}
              style={lens === "general" ? { background: "var(--accent)" } : undefined}
              aria-pressed={lens === "general"}
            >
              General ML
            </button>
            <button
              onClick={() => setLens("healthcare")}
              className={`relative z-10 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                lens === "healthcare" ? "text-white" : "text-ink-soft"
              }`}
              style={lens === "healthcare" ? { background: "var(--healthcare-accent)" } : undefined}
              aria-pressed={lens === "healthcare"}
            >
              Healthcare
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-line text-ink-soft hover:text-accent transition-colors cursor-pointer"
          >
            {theme === "light" ? "☀" : "☾"}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex font-mono text-xs uppercase tracking-wide border border-line rounded-full px-4 py-2 text-ink-soft hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
