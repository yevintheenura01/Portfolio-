import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <div className="relative grid w-full items-center gap-10 rounded-[2rem] border transition-all duration-300 p-10 backdrop-blur-2xl sm:grid-cols-[1.15fr_0.85fr] sm:p-14 dark:border-white/20 dark:bg-slate-900/45 border-green-300 bg-white/60">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full dark:bg-cyan-300/20 bg-green-700/20 blur-3xl" />
        <div className="absolute -bottom-16 right-4 h-48 w-48 rounded-full dark:bg-teal-300/20 bg-blue-300/20 blur-3xl" />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm uppercase tracking-[0.3em] dark:text-cyan-200 text-green-700 transition-colors duration-300"
          >
            Full-Stack Developer | UI/UX Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glitch-title mt-4 max-w-3xl font-display text-5xl font-bold leading-tight dark:text-white text-green-800 sm:text-7xl transition-colors duration-300"
            data-text="Yevin Theenura"
          >
            Yevin Theenura
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-2xl text-xl dark:text-slate-300 text-slate-800 transition-colors duration-300"
          >
            IT undergraduate with expertise in full-stack web development (MERN
            stack), UI/UX design, and graphic design. Passionate about creating
            intuitive applications that solve real-world problems.
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
          className="mx-auto w-full max-w-sm rounded-[1.75rem] border transition-all duration-300 p-4 dark:border-white/20 dark:bg-white/5 border-green-300 bg-white/60"
        >
          <img
            src="/images/profile.jpeg"
            alt="Yevin Theenura"
            className="h-full w-full rounded-[1.25rem] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
