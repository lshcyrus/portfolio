import AboutSection from "./components/sections/AboutSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import ContactCTASection from "./components/sections/ContactCTASection";
import EducationSection from "./components/sections/EducationSection";
import ExperiencePreviewSection from "./components/sections/ExperiencePreviewSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsPreviewSection from "./components/sections/ProjectsPreviewSection";
import SkillsSection from "./components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencePreviewSection />
      <ProjectsPreviewSection />
      <EducationSection />
      <ActivitiesSection />
      <ContactCTASection />
    </>
  );
}
