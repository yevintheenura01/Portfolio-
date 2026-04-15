import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import experience from "../data/experience.js";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function ExperiencePage() {
  const { nextPage } = usePageContext();

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="flex min-h-screen flex-col items-center justify-start px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-white sm:text-6xl"
          >
            Education & Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg text-cyan-200"
          >
            Learning path and achievements
          </motion.p>

          <div className="mt-12 space-y-4">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.role}
                  </h3>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {item.period}
                  </motion.span>
                </div>

                <p className="text-lg text-cyan-100">{item.company}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="mt-2 flex gap-2"
                >
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {item.type}
                  </span>
                </motion.div>

                <p className="mt-3 text-slate-300">{item.summary}</p>
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
              Next: Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default ExperiencePage;
