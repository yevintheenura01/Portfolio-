import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import skills from "../data/skills.js";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function SkillsPage() {
  const { nextPage } = usePageContext();

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-white sm:text-6xl"
          >
            Technical Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg text-cyan-200"
          >
            Tools and technologies I master
          </motion.p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + groupIndex * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="font-display text-2xl font-bold text-white">
                  <span className="mr-2">{group.icon}</span>
                  {group.category}
                </h3>

                <div className="mt-6 space-y-5">
                  {group.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-slate-200">
                          {item.name}
                        </span>
                        <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-2 py-0.5 text-xs font-semibold text-cyan-200">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{
                            delay: 0.3 + index * 0.08,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 shadow-lg shadow-cyan-400/50"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
              Next: Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default SkillsPage;
