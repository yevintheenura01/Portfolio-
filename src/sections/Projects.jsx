import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";
import { revealUp } from "../utils/helpers.js";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <motion.div {...revealUp()}>
        <p className="section-kicker">Projects</p>
        <h2 className="section-title text-4xl sm:text-5xl">
          Featured projects that demonstrate real capability
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
