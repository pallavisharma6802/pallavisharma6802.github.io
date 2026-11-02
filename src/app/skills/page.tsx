import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SkillsGrid from "@/components/SkillsGrid";

export const metadata: Metadata = { title: "Skills, Pallavi Sharma" };

export default function SkillsPage() {
  return (
    <div>
      <PageHeader title="Skills" subtitle="Filter by category to see where the depth is." />
      <div className="mx-auto max-w-5xl px-6 sm:px-10 pb-20">
        <SkillsGrid />
      </div>
    </div>
  );
}
