import { motion } from "framer-motion";
import { revealUp } from "../utils/helpers.js";

function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <motion.div
        {...revealUp()}
        className="glass-card w-full rounded-[2rem] p-10 sm:p-14"
      >
        <p className="section-kicker">About</p>
        <h2 className="section-title text-4xl sm:text-5xl">About Me</h2>
        <p className="mt-6 max-w-4xl text-lg leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
          I am an IT undergraduate passionate about building AI-powered
          applications and modern web systems. I enjoy solving real-world
          problems using machine learning and scalable backend technologies. My
          current focus is AI/ML and web development, with a long-term goal of
          working remotely for a global technology company.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
