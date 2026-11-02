import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreSkills from './components/CoreSkills';
import ToolsPlatforms from './components/ToolsPlatforms';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import HireMeCta from './components/HireMeCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onViewProjects={scrollToProjects}
          onWorkTogether={scrollToContact}
        />
        <About />
        <CoreSkills />
        <ToolsPlatforms />
        <ProjectsSection />
        <ExperienceEducation />
        <Certifications />
        <HireMeCta onContactClick={scrollToContact} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
