import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ExperienceSection from "@/components/ExperienceSection";

export const metadata: Metadata = { title: "Experience, Pallavi Sharma" };

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader title="Experience" subtitle="Six roles, one thread: solving real problems across research, healthcare, and industry." />
      <div className="mx-auto max-w-4xl px-6 sm:px-10 pb-20">
        <ExperienceSection />
      </div>
    </div>
  );
}
