import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import { useState } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3, ease: "easeIn" } },
};

function ContactPage() {
  const { prevPage } = usePageContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          className="w-full max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-white sm:text-6xl"
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg text-cyan-200"
          >
            I'm open to opportunities and collaborations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="mailto:yevintheenura.dev@gmail.com"
              className="group relative overflow-hidden rounded-full border border-cyan-300/40 bg-cyan-300/15 px-6 py-2 text-cyan-100 transition-all hover:bg-cyan-300/25 hover:scale-105"
            >
              <span className="relative z-10">📧 Email</span>
            </a>
            <a
              href="tel:+94771234567"
              className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 text-slate-100 transition-all hover:bg-white/10 hover:scale-105"
            >
              <span className="relative z-10">📱 Phone</span>
            </a>
            <a
              href="https://github.com/yevintheenura01"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 text-slate-100 transition-all hover:bg-white/10 hover:scale-105"
            >
              <span className="relative z-10">💻 GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 text-slate-100 transition-all hover:bg-white/10 hover:scale-105"
            >
              <span className="relative z-10">💼 LinkedIn</span>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="mt-10 glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-200/50 focus:outline-none transition-all"
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-200/50 focus:outline-none transition-all"
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-200/50 focus:outline-none transition-all md:col-span-2"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-6 py-3 font-semibold text-cyan-100 transition-all hover:bg-cyan-300/25"
            >
              {submitted ? "Message Sent! 🎉" : "Send Message"}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex gap-3"
          >
            <button
              onClick={prevPage}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition-all hover:bg-white/10 hover:scale-105"
            >
              ← Back
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center text-sm text-slate-400"
          >
            Thank you for visiting my portfolio. I look forward to connecting
            with you!
          </motion.p>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default ContactPage;
