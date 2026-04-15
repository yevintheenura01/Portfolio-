import { motion } from "framer-motion";

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group glass-card relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-5"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-300/10 via-transparent to-teal-300/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">
        Featured Project
      </p>
      <h3 className="mt-2 font-display text-2xl text-white">{project.title}</h3>
      <p className="mt-3 text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3 text-sm">
        <a
          href={project.demo}
          className="rounded-full border border-cyan-300/30 bg-cyan-300/15 px-4 py-2 text-cyan-100 transition-colors hover:bg-cyan-300/25"
        >
          Live Demo
        </a>
        <a
          href={project.source}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-slate-100 transition-colors hover:bg-white/10"
        >
          GitHub Repo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
