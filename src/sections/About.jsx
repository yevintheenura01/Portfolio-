import { motion } from "framer-motion";
import { revealUp } from "../utils/helpers.js";

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div
        {...revealUp()}
        className="glass-card rounded-3xl p-8 sm:p-10"
      >
        <p className="section-kicker">About</p>
        <h2 className="section-title">About Me</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
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
