export type Lens = "general" | "healthcare";

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  /** longer origin story, rendered instead of / before blurb when present */
  story?: string;
  metrics: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  lens: Lens | "both";
  featured?: boolean;
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
  lens: Lens | "both";
}

export interface SkillGroup {
  label: string;
  items: string[];
}
