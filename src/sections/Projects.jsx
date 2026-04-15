import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";
import { revealUp } from "../utils/helpers.js";

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div {...revealUp()}>
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">
          Featured projects that demonstrate real capability
        </h2>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={index * 0.08}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
