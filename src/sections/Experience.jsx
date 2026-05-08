import { motion } from "framer-motion";
import experience from "../data/experience.js";
import { revealUp } from "../utils/helpers.js";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <motion.div {...revealUp()}>
        <p className="section-kicker">Experience / Education</p>
        <h2 className="section-title text-4xl sm:text-5xl">
          Learning path and growth highlights
        </h2>
      </motion.div>

      <div className="mt-10 space-y-5">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            {...revealUp(index * 0.08)}
            className="glass-card rounded-[1.75rem] p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl dark:text-white text-emerald-900 transition-colors duration-300">
                {item.role}
              </h3>
              <p className="text-base dark:text-cyan-200 text-emerald-600 transition-colors duration-300">
                {item.period}
              </p>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <p className="text-lg dark:text-slate-300 text-slate-700 transition-colors duration-300">
                {item.company}
              </p>
              <span className="rounded-full border transition-all duration-300 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/5 dark:text-slate-200 border-emerald-200 bg-emerald-100 text-emerald-700">
                {item.type}
              </span>
            </div>
            <p className="mt-4 max-w-4xl text-lg leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
              {item.summary}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
