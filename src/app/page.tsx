import { FloatingHero } from "@/components/FloatingHero";
import { HeaderNav } from "@/components/HeaderNav";
import { ProjectsBento } from "@/components/ProjectsBento";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationTimeline } from "@/components/EducationTimeline";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { AboutMeSection } from "@/components/AboutMeSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <HeaderNav />
      <main>
        <FloatingHero />
        <AboutMeSection />
        <ProjectsBento />
        <EducationTimeline />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

