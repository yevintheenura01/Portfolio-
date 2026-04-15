import { motion } from "framer-motion";
import experience from "../data/experience.js";
import { revealUp } from "../utils/helpers.js";

function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div {...revealUp()}>
        <p className="section-kicker">Experience / Education</p>
        <h2 className="section-title">Learning path and growth highlights</h2>
      </motion.div>

      <div className="mt-8 space-y-4">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            {...revealUp(index * 0.08)}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-xl text-white">{item.role}</h3>
              <p className="text-sm text-cyan-200">{item.period}</p>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <p className="text-slate-300">{item.company}</p>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200">
                {item.type}
              </span>
            </div>
            <p className="mt-3 text-slate-300">{item.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
