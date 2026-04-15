import { motion } from "framer-motion";
import skills from "../data/skills.js";
import { revealUp } from "../utils/helpers.js";

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div {...revealUp()}>
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Capability Snapshot</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.article
            key={group.category}
            {...revealUp(index * 0.08)}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display text-xl text-white">
              <span className="mr-2">{group.icon}</span>
              {group.category}
            </h3>
            <ul className="mt-5 space-y-4 text-slate-300">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-slate-200">
                      {item.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800/90">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.08,
                      }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-teal-300"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
