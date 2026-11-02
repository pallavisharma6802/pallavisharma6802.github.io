import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = { title: "Work, Pallavi Sharma" };

export default function WorkPage() {
  return (
    <div>
      <PageHeader title="Work" subtitle="Shipped projects, filterable by category. Click a tile for details." />
      <div className="mx-auto max-w-5xl px-6 sm:px-10 pb-20">
        <WorkGrid />
      </div>
    </div>
  );
}
