import { motion } from "framer-motion";
import careerPlan, { careerGoals } from "../data/careerPlan.js";
import { revealUp } from "../utils/helpers.js";

function CareerDevelopmentPlan() {
  return (
    <section
      id="career-plan"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <div className="w-full">
        <motion.div {...revealUp()}>
          <p className="section-kicker">Future Path</p>
          <h2 className="section-title text-4xl sm:text-5xl">
            Career Development Plan
          </h2>
          <p className="mt-4 max-w-3xl text-lg dark:text-slate-300 text-slate-700 transition-colors duration-300">
            A strategic roadmap for my professional growth over the next 5
            years.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {careerPlan.map((phase, index) => (
            <motion.article
              key={phase.phase}
              {...revealUp(index * 0.1)}
              className="glass-card rounded-[1.75rem] p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6 mb-6">
                <div>
                  <h3 className="font-display text-2xl dark:text-white text-emerald-900 transition-colors duration-300">
                    {phase.phase}
                  </h3>
                  <p className="mt-2 text-sm dark:text-cyan-200 text-emerald-600 transition-colors duration-300">
                    {phase.timeline}
                  </p>
                </div>
                <div className="flex items-center justify-center h-12 w-12 rounded-full dark:bg-cyan-400/20 bg-emerald-600/15 flex-shrink-0">
                  <span className="text-lg font-bold dark:text-cyan-300 text-emerald-700">
                    {index + 1}
                  </span>
                </div>
              </div>
              <ul className="space-y-3">
                {phase.objectives.map((objective) => (
                  <li
                    key={objective}
                    className="flex items-start gap-3 text-base leading-6 dark:text-slate-300 text-slate-700 transition-colors duration-300"
                  >
                    <span className="text-emerald-600 dark:text-cyan-400 mt-1 font-bold">
                      ✓
                    </span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div {...revealUp(0.4)} className="mt-12">
          <div className="glass-card rounded-[1.75rem] p-8 grid sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm uppercase tracking-widest dark:text-cyan-200 text-emerald-600 transition-colors duration-300 font-semibold">
                Short Term (6 mo)
              </p>
              <p className="mt-3 text-lg font-semibold dark:text-white text-emerald-900 transition-colors duration-300">
                {careerGoals.shortTerm}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm uppercase tracking-widest dark:text-cyan-200 text-emerald-600 transition-colors duration-300 font-semibold">
                Medium Term (2-3 yr)
              </p>
              <p className="mt-3 text-lg font-semibold dark:text-white text-emerald-900 transition-colors duration-300">
                {careerGoals.mediumTerm}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm uppercase tracking-widest dark:text-cyan-200 text-emerald-600 transition-colors duration-300 font-semibold">
                Long Term (5 yr)
              </p>
              <p className="mt-3 text-lg font-semibold dark:text-white text-emerald-900 transition-colors duration-300">
                {careerGoals.longTerm}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...revealUp(0.5)} className="mt-8">
          <div className="glass-card rounded-[1.75rem] p-8">
            <p className="text-sm uppercase tracking-widest dark:text-cyan-200 text-emerald-600 transition-colors duration-300 font-semibold">
              Target Roles
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {careerGoals.targetRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border transition-all duration-300 px-4 py-2 text-sm font-medium dark:border-cyan-200/30 dark:bg-cyan-400/10 dark:text-cyan-200 border-emerald-200 bg-emerald-100 text-emerald-700"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerDevelopmentPlan;
