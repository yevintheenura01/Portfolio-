import { AnimatePresence } from "framer-motion";
import { PageProvider, usePageContext } from "./context/PageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import PageIndicator from "./components/PageIndicator.jsx";
import useKeyboardNavigation from "./hooks/useKeyboardNavigation.js";
import HeroPage from "./pages/HeroPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function AppContent() {
  const { currentPage } = usePageContext();
  useKeyboardNavigation();

  const pages = [
    <HeroPage key="hero" />,
    <AboutPage key="about" />,
    <SkillsPage key="skills" />,
    <ProjectsPage key="projects" />,
    <ExperiencePage key="experience" />,
    <ServicesPage key="services" />,
    <ContactPage key="contact" />,
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto text-slate-100 bg-slate-950">
      <Navbar />
      <AnimatePresence mode="wait">{pages[currentPage]}</AnimatePresence>
      <PageIndicator />
    </div>
  );
}

function App() {
  return (
    <PageProvider>
      <AppContent />
    </PageProvider>
  );
}

export default App;
