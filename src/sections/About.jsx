import { motion } from "framer-motion";
import { revealUp } from "../utils/helpers.js";

function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <div className="w-full">
        <motion.div
          {...revealUp()}
          className="glass-card rounded-[2rem] p-10 sm:p-14"
        >
          <p className="section-kicker">Chapter 01</p>
          <h2 className="section-title text-4xl sm:text-5xl">
            Where I Started
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
            I'm a fourth-year IT undergraduate with a GPA of 3.22 from Sri Lanka
            Institute of Information Technology (SLIIT). My main focus is
            full-stack engineering with the MERN stack, supported by growing
            hands-on work in AI/ML. I enjoy building reliable systems that can
            solve real user and business problems at scale.
          </p>
        </motion.div>

        <motion.div
          {...revealUp(0.15)}
          className="mt-10 grid gap-8 sm:grid-cols-2"
        >
          <div className="glass-card rounded-[1.75rem] p-8">
            <h3 className="font-display text-2xl dark:text-white text-green-800 transition-colors duration-300">
              Professional Background
            </h3>
            <p className="mt-4 leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
              Full-stack developer intern at Sri Lanka Telecom PLC with hands-on
              experience in MERN stack development. Previous roles include data
              management and design work, which strengthened execution,
              communication, and delivery under real project constraints.
            </p>
          </div>

          <div className="glass-card rounded-[1.75rem] p-8">
            <h3 className="font-display text-2xl dark:text-white text-green-800 transition-colors duration-300">
              Core Competencies
            </h3>
            <p className="mt-4 leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
              Full-stack MERN development, API design, database management,
              clean frontend implementation, and practical AI/ML exploration.
              Proficient in multiple programming languages with a strong
              problem-solving mindset.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...revealUp(0.3)}
          className="mt-8 glass-card rounded-[1.75rem] p-8"
        >
          <h3 className="font-display text-2xl dark:text-white text-green-800 transition-colors duration-300 mb-6">
            My Approach
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold dark:text-white text-green-800 transition-colors duration-300">
                  Development Philosophy
                </p>
                <p className="mt-1 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                  Build scalable applications with strong architecture,
                  maintainable code, and measurable product impact.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold dark:text-white text-green-800 transition-colors duration-300">
                  Soft Skills Strength
                </p>
                <p className="mt-1 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                  Strong communication, teamwork, adaptability, and
                  problem-solving abilities developed through diverse
                  professional experiences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-semibold dark:text-white text-green-800 transition-colors duration-300">
                  Continuous Growth
                </p>
                <p className="mt-1 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                  Dedicated to continuous learning in system design, cloud-ready
                  full-stack delivery, and applied AI/ML.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
