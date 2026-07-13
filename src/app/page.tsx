import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { NewsSection } from "@/components/NewsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="sr-only">Sara Ghasvarianjahromi&apos;s Academic Portfolio</h1>
      
      <HomeSection />
      <AboutSection />
      <NewsSection />
      <ResearchSection />
      <PublicationsSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}
