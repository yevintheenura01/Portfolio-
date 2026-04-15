import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import projects from "../data/projects.js";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function ProjectsPage() {
  const { nextPage } = usePageContext();

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="flex min-h-screen flex-col items-center justify-start px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-white sm:text-6xl"
          >
            Featured Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg text-cyan-200"
          >
            Building real-world solutions with impact
          </motion.p>

          <div className="mt-12 space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01, y: -4 }}
                className="group glass-card relative overflow-hidden rounded-2xl p-6 md:flex items-center gap-6"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-300/10 via-transparent to-teal-300/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="md:flex-1">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.demo}
                      className="rounded-full border border-cyan-300/40 bg-cyan-300/15 px-4 py-2 text-sm font-medium text-cyan-100 transition-all hover:bg-cyan-300/25"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.source}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-all hover:bg-white/10"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 md:w-48 flex-shrink-0">
                  <div className="aspect-video overflow-hidden rounded-xl border border-white/15 bg-slate-900/70">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-3"
          >
            <button
              onClick={nextPage}
              className="rounded-full border border-cyan-300/35 bg-cyan-300/15 px-6 py-3 font-semibold text-cyan-100 transition-all hover:bg-cyan-300/25 hover:scale-105"
            >
              Next: Experience
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default ProjectsPage;
