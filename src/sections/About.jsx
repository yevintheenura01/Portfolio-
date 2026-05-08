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
          <p className="section-kicker">Introduction</p>
          <h2 className="section-title text-4xl sm:text-5xl">About Me</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
            I'm a fourth-year IT undergraduate with a GPA of 3.22 from Sri Lanka
            Institute of Information Technology (SLIIT). With expertise in
            full-stack web development (MERN stack), UI/UX design, and a
            background in graphic design, I'm passionate about using technology
            to address real-world challenges through intuitive and scalable
            applications.
          </p>
        </motion.div>

        <motion.div
          {...revealUp(0.15)}
          className="mt-10 grid gap-8 sm:grid-cols-2"
        >
          <div className="glass-card rounded-[1.75rem] p-8">
            <h3 className="font-display text-2xl dark:text-white text-emerald-900 transition-colors duration-300">
              Professional Background
            </h3>
            <p className="mt-4 leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
              Full-stack developer intern at Sri Lanka Telecom PLC with hands-on
              experience in MERN stack development. Previous roles include
              graphic design and data management, bringing a unique perspective
              combining technical expertise with design thinking.
            </p>
          </div>

          <div className="glass-card rounded-[1.75rem] p-8">
            <h3 className="font-display text-2xl dark:text-white text-emerald-900 transition-colors duration-300">
              Core Competencies
            </h3>
            <p className="mt-4 leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
              Full-stack MERN development, responsive UI design, database
              management, UI/UX design principles, and strong problem-solving
              abilities. Proficient in multiple programming languages and design
              tools with proven ability to deliver quality work.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...revealUp(0.3)}
          className="mt-8 glass-card rounded-[1.75rem] p-8"
        >
          <h3 className="font-display text-2xl dark:text-white text-emerald-900 transition-colors duration-300 mb-6">
            My Approach
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold dark:text-white text-emerald-900 transition-colors duration-300">
                  Development Philosophy
                </p>
                <p className="mt-1 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                  Build scalable, user-centric applications that combine
                  technical excellence with intuitive design.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold dark:text-white text-emerald-900 transition-colors duration-300">
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
                <p className="font-semibold dark:text-white text-emerald-900 transition-colors duration-300">
                  Continuous Growth
                </p>
                <p className="mt-1 dark:text-slate-300 text-slate-700 transition-colors duration-300">
                  Dedicated to ongoing learning, currently completing
                  certificates in front-end development and web design while
                  advancing core competencies.
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
