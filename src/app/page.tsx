import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-10 flex-1 flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
