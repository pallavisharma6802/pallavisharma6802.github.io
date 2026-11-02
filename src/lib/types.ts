export interface Project {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  /** longer origin story, rendered instead of / before blurb when present */
  story?: string;
  metrics: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  org: string;
  category: string;
  employmentType: string;
  location: string;
  workMode: string;
  dates: string;
  duration: string;
  /** narrative paragraphs, in her own voice */
  summary: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}
