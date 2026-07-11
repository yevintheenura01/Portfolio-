import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import CareerDevelopmentPlan from "../sections/CareerDevelopmentPlan.jsx";
import Experience from "../sections/Experience.jsx";
import Certifications from "../sections/Certifications.jsx";
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <CareerDevelopmentPlan />
      <Contact />
    </>
  );
}

export default Home;
