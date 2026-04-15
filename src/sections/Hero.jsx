import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[86vh] w-full max-w-6xl items-center px-4 pb-14 pt-20"
    >
      <div className="relative grid w-full items-center gap-8 rounded-3xl border border-white/20 bg-slate-900/45 p-8 backdrop-blur-2xl sm:grid-cols-[1.2fr_0.8fr] sm:p-12">
        <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-14 right-4 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.28em] text-cyan-200"
          >
            Software Engineer | AI/ML Enthusiast
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            Yevin Theenura
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-slate-300"
          >
            I build intelligent, scalable web applications and machine learning
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="mx-auto w-full max-w-xs rounded-3xl border border-white/20 bg-white/5 p-3"
        >
          <img
            src="/images/profile.jpeg"
            alt="Yevin Theenura"
            className="h-full w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
