import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import services from "../data/services.js";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function ServicesPage() {
  const { nextPage } = usePageContext();

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-white sm:text-6xl"
          >
            Services & Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg text-cyan-200"
          >
            How I can help with your projects
          </motion.p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)",
                }}
                className="group glass-card relative overflow-hidden rounded-2xl p-8 transition-all"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-300/5 to-teal-300/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-4 text-5xl"
                >
                  {service.icon}
                </motion.div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-300">{service.description}</p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-center text-sm font-medium text-cyan-200"
                >
                  Freelance Available
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-3"
          >
            <button
              onClick={nextPage}
              className="rounded-full border border-cyan-300/35 bg-cyan-300/15 px-6 py-3 font-semibold text-cyan-100 transition-all hover:bg-cyan-300/25 hover:scale-105"
            >
              Next: Contact
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default ServicesPage;
