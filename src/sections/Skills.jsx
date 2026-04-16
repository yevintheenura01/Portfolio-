import { motion } from "framer-motion";
import skills from "../data/skills.js";
import { revealUp } from "../utils/helpers.js";

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <motion.div {...revealUp()}>
        <p className="section-kicker">Skills</p>
        <h2 className="section-title text-4xl sm:text-5xl">
          Capability Snapshot
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.article
            key={group.category}
            {...revealUp(index * 0.08)}
            whileHover={{ y: -6 }}
            className="glass-card rounded-[1.75rem] p-8"
          >
            <h3 className="font-display text-2xl dark:text-white text-slate-900 transition-colors duration-300">
              <span className="mr-2">{group.icon}</span>
              {group.category}
            </h3>
            <ul className="mt-6 space-y-5 dark:text-slate-300 text-slate-800 transition-colors duration-300">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="rounded-full border transition-all duration-300 px-2 py-0.5 text-xs dark:border-white/20 dark:text-slate-200 border-indigo-300 bg-indigo-100 text-indigo-700">
                      {item.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full dark:bg-slate-800/90 bg-slate-200 transition-colors duration-300">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.08,
                      }}
                      className="h-2 rounded-full dark:bg-gradient-to-r dark:from-cyan-300 dark:to-teal-300 from-indigo-500 to-blue-500 bg-gradient-to-r"
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
