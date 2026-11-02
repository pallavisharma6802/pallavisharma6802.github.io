import Contact from "./Contact";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <Contact />
      <footer className="border-t border-line py-10">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-faint uppercase tracking-wide">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
