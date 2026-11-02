"use client";

import { useState } from "react";
import { skills } from "@/lib/data";

const HUB_RADIUS = 27;
const SAT_RADIUS = 41;

function polar(cx: number, cy: number, r: number, angle: number) {
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function spreadFor(count: number) {
  return Math.min((140 * Math.PI) / 180, 0.6 + count * 0.3);
}

export default function SkillsGraph() {
  const [active, setActive] = useState<number | null>(null);
  const n = skills.length;

  const hubs = skills.map((group, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const pos = polar(50, 50, HUB_RADIUS, angle);
    return { group, angle, pos };
  });

  const activeHub = active !== null ? hubs[active] : null;
  const satellites =
    activeHub &&
    activeHub.group.items.map((item, j) => {
      const m = activeHub.group.items.length;
      const spread = spreadFor(m);
      const start = activeHub.angle - spread / 2;
      const step = m > 1 ? spread / (m - 1) : 0;
      const satAngle = start + j * step;
      return { item, pos: polar(50, 50, SAT_RADIUS, satAngle) };
    });

  return (
    <div>
      <div className="relative aspect-square w-full max-w-xl mx-auto select-none p-6 sm:p-10">
        <div className="absolute inset-6 sm:inset-10 rounded-full border border-dashed" style={{ borderColor: "var(--line)" }} aria-hidden />
        <div
          className="absolute rounded-full border border-dashed"
          style={{ borderColor: "var(--line)", inset: "calc(16% + 1.5rem)" }}
          aria-hidden
        />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {hubs.map((h, i) => (
            <line
              key={`spoke-${i}`}
              x1={50}
              y1={50}
              x2={h.pos.x}
              y2={h.pos.y}
              stroke={active === i ? "var(--accent)" : "var(--line)"}
              strokeWidth={active === i ? 0.6 : 0.4}
            />
          ))}
          {activeHub &&
            satellites &&
            satellites.map((s, j) => (
              <line key={`sat-line-${j}`} x1={activeHub.pos.x} y1={activeHub.pos.y} x2={s.pos.x} y2={s.pos.y} stroke="var(--accent)" strokeWidth="0.45" opacity={0.6} />
            ))}
        </svg>

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-display text-xs sm:text-sm shadow-md z-10 text-center px-2"
          style={{ width: "16%", height: "16%", background: "var(--ink)", color: "var(--bg)" }}
        >
          Skills
        </div>

        {hubs.map((h, i) => (
          <button
            key={h.group.label}
            onClick={() => setActive(active === i ? null : i)}
            className="reveal absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 flex items-center justify-center text-center font-mono uppercase tracking-wide leading-[1.15] px-1.5 cursor-pointer transition-all hover:scale-105 z-10 shadow-sm"
            style={{
              left: `${h.pos.x}%`,
              top: `${h.pos.y}%`,
              width: "20%",
              height: "20%",
              fontSize: "0.52rem",
              borderColor: "var(--accent)",
              background: active === i ? "var(--accent)" : "var(--bg)",
              color: active === i ? "white" : "var(--ink)",
              animationDelay: `${i * 0.03}s`,
            }}
          >
            {h.group.label}
          </button>
        ))}

        {satellites &&
          satellites.map((s, j) => {
            const t = (s.item.level - 60) / 40;
            return (
              <span
                key={s.item.name}
                title={`${s.item.level}%`}
                className="reveal absolute -translate-x-1/2 -translate-y-1/2 rounded-full border text-center font-display shadow-sm"
                style={{
                  left: `${s.pos.x}%`,
                  top: `${s.pos.y}%`,
                  width: "6.4rem",
                  fontSize: `${0.6 + t * 0.1}rem`,
                  lineHeight: 1.2,
                  padding: `${0.3 + t * 0.12}rem ${0.5}rem`,
                  borderColor: "var(--accent)",
                  background: "var(--bg-raised)",
                  color: "var(--ink)",
                  animationDelay: `${j * 0.03}s`,
                }}
              >
                {s.item.name}
              </span>
            );
          })}
      </div>

      {!activeHub && (
        <p className="text-center text-xs text-ink-faint mt-4 font-hand text-base text-secondary">click a hub to explore</p>
      )}
      {activeHub && (
        <p className="text-center text-xs text-ink-faint mt-4">Node size reflects depth of experience &middot; hover a skill for the number</p>
      )}
    </div>
  );
}
