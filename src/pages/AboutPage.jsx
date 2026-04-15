import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function AboutPage() {
  const { nextPage } = usePageContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl font-bold text-white sm:text-6xl"
          >
            About Me
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-lg text-cyan-200"
          >
            Who I am and what drives me
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 glass-card rounded-3xl p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I am an IT undergraduate passionate about building AI-powered
              applications and modern web systems. I enjoy solving real-world
              problems using machine learning and scalable backend technologies.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-200">
                  Education
                </h3>
                <p className="mt-2 text-slate-300">
                  BSc in Information Technology (2022 - Present)
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Focused on software engineering and machine learning
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-200">
                  Career Goal
                </h3>
                <p className="mt-2 text-slate-300">
                  Remote Position at Global Tech Company
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Building scalable solutions that impact millions
                </p>
              </motion.div>
            </div>

            <p className="mt-8 text-slate-300">
              My current focus is on AI/ML and web development, with expertise
              in React, Python, and Node.js. I'm driven by the opportunity to
              solve complex problems and create elegant, user-focused solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex gap-3">
            <button
              onClick={nextPage}
              className="rounded-full border border-cyan-300/35 bg-cyan-300/15 px-6 py-3 font-semibold text-cyan-100 transition-all hover:bg-cyan-300/25 hover:scale-105"
            >
              Next: Skills
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default AboutPage;
