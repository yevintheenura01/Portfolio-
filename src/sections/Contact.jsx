import { motion } from "framer-motion";
import { revealUp } from "../utils/helpers.js";

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div
        {...revealUp()}
        className="glass-card rounded-3xl p-8 sm:p-10"
      >
        <p className="section-kicker">Contact</p>
        <h2 className="section-title max-w-2xl">
          Let us connect for opportunities
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          I am open to internships, remote roles, and freelance collaborations
          in web development and AI/ML projects.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
          <a
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10"
            href="mailto:yevintheenura.dev@gmail.com"
          >
            Email
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10"
            href="tel:+94771234567"
          >
            Phone
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10"
            href="https://github.com/yevintheenura01"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <form
          className="mt-8 grid gap-4 md:grid-cols-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-200/50 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-200/50 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={5}
            required
            className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-200/50 focus:outline-none md:col-span-2"
          />
          <button
            type="submit"
            className="rounded-full border border-cyan-300/35 bg-cyan-300/15 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/25 md:col-span-2 md:justify-self-start"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
