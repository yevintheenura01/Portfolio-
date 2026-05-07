import { motion } from "framer-motion";
import reflections from "../data/reflections.js";
import { revealUp } from "../utils/helpers.js";

function ReflectiveJournal() {
  return (
    <section
      id="reflections"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <div className="w-full">
        <motion.div {...revealUp()}>
          <p className="section-kicker">Personal Growth</p>
          <h2 className="section-title text-4xl sm:text-5xl">
            Reflective Journal - PPW Learning
          </h2>
          <p className="mt-4 max-w-3xl text-lg dark:text-slate-300 text-slate-700 transition-colors duration-300">
            My reflections on what I've learned in the Preparing for
            Professional World module and how it will shape my career.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {reflections.map((reflection, index) => (
            <motion.article
              key={reflection.title}
              {...revealUp(index * 0.08)}
              className="glass-card rounded-[1.75rem] p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full dark:bg-cyan-400 bg-indigo-600 flex-shrink-0 flex-grow-0" />
                <div className="flex-1">
                  <h3 className="font-display text-xl dark:text-white text-indigo-900 transition-colors duration-300">
                    {reflection.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                    {reflection.description}
                  </p>
                  <div className="mt-4 rounded-lg dark:bg-white/5 bg-indigo-100/40 p-3 border transition-all duration-300 dark:border-white/10 border-indigo-200">
                    <p className="text-sm font-semibold dark:text-cyan-200 text-indigo-600 transition-colors duration-300">
                      Key Learning:
                    </p>
                    <p className="mt-1 text-sm dark:text-slate-300 text-slate-700 transition-colors duration-300">
                      {reflection.key_learning}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReflectiveJournal;
