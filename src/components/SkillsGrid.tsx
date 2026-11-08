import { education } from "@/lib/data";
import SkillsGraph from "./SkillsGraph";
import SkillsJourney from "./SkillsJourney";

export default function SkillsGrid() {
  return (
    <div>
      <SkillsJourney />
      <h3 id="toolkit" className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-5">Browse the full toolkit</h3>
      <SkillsGraph />
      <p className="mt-6 text-sm leading-relaxed text-ink-soft"><span className="font-medium text-ink">Working with teams:</span> Cross-functional collaboration · Stakeholder communication · Technical documentation · Agile · Jira</p>

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
