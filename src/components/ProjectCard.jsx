import { motion } from "framer-motion";

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group glass-card relative overflow-hidden rounded-[1.75rem] border transition-all duration-300 p-7 dark:border-white/15 dark:bg-white/5 border-emerald-200 bg-white/60"
    >
      <div className="absolute inset-0 -z-10 dark:bg-gradient-to-br dark:from-cyan-300/10 dark:via-transparent dark:to-teal-300/5 bg-gradient-to-br from-indigo-300/10 via-transparent to-blue-300/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-5 overflow-hidden rounded-2xl border transition-all duration-300 dark:border-white/15 dark:bg-slate-900/70 border-emerald-200 bg-slate-100">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="text-xs uppercase tracking-[0.18em] dark:text-cyan-200/80 text-emerald-700/80 transition-colors duration-300">
        Featured Project
      </p>
      <h3 className="mt-2 font-display text-3xl dark:text-white text-slate-900 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="mt-3 text-base leading-7 dark:text-slate-300 text-slate-700 transition-colors duration-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border transition-all duration-300 px-3 py-1 text-xs dark:border-white/20 dark:bg-white/5 dark:text-slate-200 border-emerald-200 bg-emerald-100 text-emerald-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-3 text-sm">
        <a
          href={project.demo}
          className="rounded-full border transition-all duration-300 px-4 py-2 dark:border-cyan-300/30 dark:bg-cyan-300/15 dark:text-cyan-100 dark:hover:bg-cyan-300/25 border-emerald-300 bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
        >
          Live Demo
        </a>
        <a
          href={project.source}
          className="rounded-full border transition-all duration-300 px-4 py-2 dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 border-emerald-200 bg-white/60 text-emerald-700 hover:bg-emerald-100"
        >
          GitHub Repo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
