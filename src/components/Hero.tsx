import Image from "next/image";
import Link from "next/link";
import { bio, profile } from "@/lib/data";
import { Blob, HalfCircle, Sparkle, Squiggle } from "./Blobs";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden">
      <HalfCircle className="hidden sm:block absolute -top-4 right-10 w-20 opacity-70" color="var(--secondary-soft)" />
      <Sparkle className="hidden sm:block absolute top-20 right-[18%] w-6" />
      <Squiggle className="hidden sm:block absolute bottom-10 left-8 w-32 opacity-80" color="var(--accent-soft)" />

      <div className="mx-auto max-w-5xl px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-10 sm:gap-16 items-center relative">
        <div className="reveal relative flex justify-center sm:justify-start">
          <Blob className="absolute -z-10 w-56 sm:w-64 -top-6 -left-6" color="var(--blush)" />
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-[2.2rem] overflow-hidden border-[6px] shadow-xl rotate-[-3deg]" style={{ borderColor: "var(--bg)" }}>
            <Image src={profile.photo} alt={profile.name} width={384} height={384} className="h-full w-full object-cover" priority />
          </div>
          <span
            className="absolute -bottom-3 -right-5 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-wide shadow-md rotate-[6deg] border-2"
            style={{ background: "var(--bg)", borderColor: "var(--secondary)", color: "var(--ink)" }}
          >
            Open to roles
          </span>
        </div>

        <div className="text-center sm:text-left">
          <p className="reveal font-hand text-2xl sm:text-3xl text-secondary -mb-2">Hello, I&apos;m</p>
          <h1 className="reveal font-display font-semibold text-[2.6rem] sm:text-[3.6rem] text-ink leading-[1.05]" style={{ animationDelay: "0.05s" }}>
            Pallavi Sharma
          </h1>
          <p className="reveal mt-2 font-mono text-xs uppercase tracking-[0.15em] text-accent" style={{ animationDelay: "0.1s" }}>
            {profile.title} &middot; {profile.location}
          </p>

          <p className="reveal mt-5 text-base sm:text-lg leading-relaxed text-ink-soft max-w-2xl" style={{ animationDelay: "0.15s" }}>
            {bio.body}
          </p>

          <div className="reveal mt-7 flex flex-wrap items-center justify-center sm:justify-start gap-3" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--ink)" }}
            >
              View Work
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wide transition-transform hover:-translate-y-0.5 border-2"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
