import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import Button from "../components/Button.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function HomePage() {
  const { nextPage } = usePageContext();

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-slate-900/45 p-8 backdrop-blur-2xl sm:p-12">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.28em] text-cyan-200"
          >
            Welcome
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 font-display text-5xl font-bold leading-tight text-white sm:text-6xl"
          >
            Yevin Theenura
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl text-cyan-200"
          >
            Software Engineer | AI/ML Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-xl text-lg text-slate-300"
          >
            Building intelligent, scalable web applications and machine learning
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button onClick={nextPage}>Explore My Work</Button>
            <Button variant="ghost" onClick={nextPage}>
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 rounded-2xl border border-white/20 overflow-hidden"
          >
            <img
              src="/images/profile.png"
              alt="Yevin Theenura"
              className="h-48 w-48 mx-auto object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <p className="text-sm text-slate-400">
              Scroll or Click to Continue
            </p>
            <p className="text-2xl text-cyan-200">↓</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default HomePage;
