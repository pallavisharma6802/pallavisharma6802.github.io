import { experience } from "@/lib/data";

function PathSegment({ bulgeLeft }: { bulgeLeft: boolean }) {
  const bulgeX = bulgeLeft ? 8 : 48;
  return (
    <svg viewBox="0 0 56 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
      <path d={`M28,0 C ${bulgeX},33 ${bulgeX},67 28,100`} stroke="var(--line)" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="1 10" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <div>
      {experience.map((e, i) => (
        <div key={e.role + e.org} className="grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] gap-x-4 sm:gap-x-6">
          <div className="relative flex flex-col items-center">
            <div className="relative shrink-0 pt-1">
              <span
                className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2"
                style={{ borderColor: "var(--accent)", background: "var(--bg)" }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
              </span>
              {i === 0 && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-2xl select-none" style={{ animation: "bounce-gentle 2s ease-in-out infinite" }}>
                  🐇
                </span>
              )}
            </div>
            {i < experience.length - 1 && (
              <div className="relative flex-1 w-full min-h-[180px]">
                <PathSegment bulgeLeft={i % 2 === 0} />
              </div>
            )}
          </div>

          <article className="reveal rounded-2xl border border-line bg-raised p-5 sm:p-7 mb-10" style={{ animationDelay: `${Math.min(i * 0.05, 0.25)}s` }}>
            {i === 0 && <div className="font-hand text-secondary text-lg mb-1">you are here</div>}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-lg sm:text-xl text-ink">{e.role}</h3>
              {e.employmentType && <span className="font-mono text-xs text-ink-faint">{e.employmentType}</span>}
            </div>
            <div className="text-sm text-ink-soft mt-0.5">{e.org}</div>
            <div className="font-mono text-xs text-ink-faint uppercase tracking-wide mt-1">
              {e.dates} &middot; {e.duration} &middot; {e.location} &middot; {e.workMode}
            </div>

            <div className="mt-4 space-y-3">
              {e.summary.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>

            {e.skills.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.skills.map((s) => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-[var(--bg)] border border-line text-ink-faint">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </article>
        </div>
      ))}
    </div>
  );
}
