import { education, toolLogos } from "@/lib/data";
import SkillsGraph from "./SkillsGraph";

export default function SkillsGrid() {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-5">Tools &amp; Platforms</h3>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-14">
        {toolLogos.map((t) => (
          <div
            key={t.name}
            title={t.name}
            className="reveal aspect-square rounded-2xl border border-line bg-raised flex items-center justify-center p-3 hover:shadow-[0_6px_20px_var(--shadow)] transition-shadow"
          >
            {t.textOnly ? (
              <span className="font-display font-semibold text-sm text-center leading-tight" style={{ color: `#${t.color}` }}>
                {t.name}
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} className="h-full w-full object-contain" loading="lazy" />
            )}
          </div>
        ))}
      </div>

      <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-5">Skill Graph</h3>
      <SkillsGraph />

      <div className="mt-16 pt-10 border-t border-line">
        <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-5">Education</h3>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.degree} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-lg text-ink">{e.degree}</span>
              <span className="text-sm text-ink-soft">{e.org}</span>
              <span className="font-mono text-xs text-ink-faint uppercase tracking-wide ml-auto">{e.dates}, {e.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
