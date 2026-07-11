import { motion } from "framer-motion";
import certifications from "../data/certifications.js";
import { revealUp } from "../utils/helpers.js";

function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <div className="w-full">
        <motion.div {...revealUp()}>
          <p className="section-kicker">Chapter 05</p>
          <h2 className="section-title text-4xl sm:text-5xl">
            Continuous Learning
          </h2>
          <p className="mt-4 max-w-3xl text-lg dark:text-slate-300 text-slate-700 transition-colors duration-300">
            Courses and certifications I've completed to continuously improve my
            technical and professional skills.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              {...revealUp(index * 0.08)}
              className="glass-card rounded-[1.75rem] p-8 overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full dark:bg-cyan-300/10 bg-green-700/15 blur-2xl group-hover:blur-lg transition-all duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl dark:text-white text-green-800 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm dark:text-cyan-200 text-green-700 transition-colors duration-300">
                      {cert.issuer}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-widest dark:text-slate-400 text-slate-500 transition-colors duration-300">
                      Completed {cert.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-base leading-6 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                  {cert.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full px-3 py-1 text-xs font-medium dark:bg-white/5 dark:text-slate-300 dark:border dark:border-white/10 bg-green-100/60 text-green-800 border border-green-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
