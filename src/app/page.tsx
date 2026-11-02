import Link from "next/link";
import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import WhatIDo from "@/components/WhatIDo";
import AboutFacts from "@/components/AboutFacts";
import CategoryIcon, { categoryGradients } from "@/components/CategoryIcon";
import { experience, projects } from "@/lib/data";

export default function Home() {
  const latest = experience[0];
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <Hero />
      <StatsRow />
      <WhatIDo />

      <section className="py-16 sm:py-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-calligraphic text-3xl sm:text-4xl text-ink">Currently</h2>
            <Link href="/experience" className="font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-accent transition-colors">
              Full experience &rarr;
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-raised p-6 sm:p-7">
            <h3 className="font-display text-lg text-ink">{latest.role}, {latest.org}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{latest.summary[0]}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-calligraphic text-3xl sm:text-4xl text-ink">Selected Work</h2>
            <Link href="/work" className="font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-accent transition-colors">
              All projects &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featured.map((p) => (
              <Link key={p.slug} href="/work" className="group rounded-2xl border border-line overflow-hidden bg-raised hover:shadow-[0_8px_30px_var(--shadow)] transition-shadow">
                <div className="h-28 relative flex items-center justify-between px-4" style={{ background: categoryGradients[p.category] }}>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-white/80 bg-black/20 rounded-full px-2.5 py-1">
                    {p.category}
                  </span>
                  <CategoryIcon category={p.category} className="h-9 w-9 opacity-90" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base text-ink leading-snug">{p.title}</h3>
                  <p className="mt-2 text-xs text-ink-faint">{p.stack.slice(0, 3).join(" · ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AboutFacts />
    </div>
  );
}
