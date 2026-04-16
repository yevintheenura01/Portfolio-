import { motion } from "framer-motion";
import services from "../data/services.js";
import { revealUp } from "../utils/helpers.js";

function Services() {
  return (
    <section
      id="services"
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
    >
      <motion.div {...revealUp()}>
        <p className="section-kicker">Services</p>
        <h2 className="section-title text-4xl sm:text-5xl">
          How I can help on freelance projects
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            {...revealUp(index * 0.08)}
            whileHover={{ y: -6 }}
            className="glass-card rounded-[1.75rem] p-8"
          >
            <h3 className="font-display text-2xl dark:text-white text-indigo-900 transition-colors duration-300">
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </h3>
            <p className="mt-4 text-lg leading-8 dark:text-slate-300 text-slate-800 transition-colors duration-300">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Services;
