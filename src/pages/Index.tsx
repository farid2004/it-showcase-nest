import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FormationSection from "@/components/FormationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ObjectifsSection from "@/components/ObjectifsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FormationSection />
      <SkillsSection />
      <ProjectsSection />
      <ObjectifsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
