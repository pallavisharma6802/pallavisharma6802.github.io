"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { profile } from "@/lib/data";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <div className="mx-auto max-w-5xl px-6 sm:px-10 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-lg tracking-tight text-ink">
          Pallavi Sharma
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative pb-1 transition-colors"
                style={{ color: isActive ? "var(--accent)" : "var(--ink-soft)" }}
              >
                {l.label}
                {isActive && <span className="absolute left-0 right-0 -bottom-[1px] h-[2px]" style={{ background: "var(--accent)" }} />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex font-mono text-xs uppercase tracking-wide border border-line rounded-full px-4 py-2 text-ink-soft hover:border-accent hover:text-accent transition-colors"
          >
            Contact
          </a>

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
