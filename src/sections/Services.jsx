import { motion } from "framer-motion";
import services from "../data/services.js";
import { revealUp } from "../utils/helpers.js";

function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div {...revealUp()}>
        <p className="section-kicker">Services</p>
        <h2 className="section-title">How I can help on freelance projects</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            {...revealUp(index * 0.08)}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display text-xl text-white">
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </h3>
            <p className="mt-3 text-slate-300">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Services;
