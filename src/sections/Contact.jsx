import { motion } from "framer-motion";
import { revealUp } from "../utils/helpers.js";
import { ResumeButton } from "../components/Toast.jsx";
import { useToast } from "../hooks/useToast.js";
import { Toast } from "../components/Toast.jsx";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.25l8 5.33 8-5.33V7H4Zm16 10V9.6l-7.45 4.97a1 1 0 0 1-1.1 0L4 9.6V17h16Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10 21 3 14 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.24 1l-2.22 2.3Z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.08 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.93.84.09-.65.35-1.1.64-1.35-2.22-.26-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.33.1-2.76 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.43.2 2.5.1 2.76.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.59.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 8.75h3.96V21H3V8.75Zm7.25 0H14v1.68h.06c.55-1.05 1.89-2.16 3.9-2.16C22 8.27 23 10.44 23 13.28V21h-3.96v-6.84c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V21h-3.9V8.75Z"
      />
    </svg>
  );
}

function Contact() {
  const { toast, showToast } = useToast();

  return (
    <>
      <Toast message={toast?.message} type={toast?.type} />
      <section
        id="contact"
        className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20"
      >
        <motion.div
          {...revealUp()}
          className="glass-card w-full rounded-[2rem] p-10 sm:p-14"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title max-w-2xl text-4xl sm:text-5xl">
            Let us connect for opportunities
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 dark:text-slate-300 text-slate-700 transition-colors duration-300">
            I am open to internships, remote roles, and freelance collaborations
            in web development and AI/ML projects.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            <ResumeButton showToast={showToast} />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 text-base dark:text-slate-200 text-slate-700 transition-colors duration-300">
            <a
              className="flex items-center gap-3 rounded-2xl border transition-all duration-300 px-5 py-4 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-indigo-300 bg-indigo-100 hover:bg-indigo-200"
              href="mailto:yevintheenura.dev@gmail.com"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full dark:bg-cyan-300/15 dark:text-cyan-200 bg-indigo-200 text-indigo-600 transition-all duration-300">
                <MailIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] dark:text-slate-400 text-slate-600 transition-colors duration-300">
                  Email
                </span>
                <span className="block text-sm dark:text-slate-100 text-slate-900 transition-colors duration-300">
                  don.yevin.dev@gmail.com
                </span>
              </span>
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border transition-all duration-300 px-5 py-4 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-indigo-300 bg-indigo-100 hover:bg-indigo-200"
              href="tel:+94776283842"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full dark:bg-cyan-300/15 dark:text-cyan-200 bg-indigo-200 text-indigo-600 transition-all duration-300">
                <PhoneIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] dark:text-slate-400 text-slate-600 transition-colors duration-300">
                  Phone
                </span>
                <span className="block text-sm dark:text-slate-100 text-slate-900 transition-colors duration-300">
                  +94 77 628 3842
                </span>
              </span>
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border transition-all duration-300 px-5 py-4 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-indigo-300 bg-indigo-100 hover:bg-indigo-200"
              href="https://github.com/yevintheenura01"
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full dark:bg-cyan-300/15 dark:text-cyan-200 bg-indigo-200 text-indigo-600 transition-all duration-300">
                <GithubIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] dark:text-slate-400 text-slate-600 transition-colors duration-300">
                  GitHub
                </span>
                <span className="block text-sm dark:text-slate-100 text-slate-900 transition-colors duration-300">
                  @yevintheenura01
                </span>
              </span>
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border transition-all duration-300 px-5 py-4 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-indigo-300 bg-indigo-100 hover:bg-indigo-200"
              href="https://www.linkedin.com/in/yevin-theenura-01960a223/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full dark:bg-cyan-300/15 dark:text-cyan-200 bg-indigo-200 text-indigo-600 transition-all duration-300">
                <LinkedinIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] dark:text-slate-400 text-slate-600 transition-colors duration-300">
                  LinkedIn
                </span>
                <span className="block text-sm dark:text-slate-100 text-slate-900 transition-colors duration-300">
                  Yevin Theenura
                </span>
              </span>
            </a>
          </div>

          <form
            className="mt-10 grid gap-5 md:grid-cols-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="rounded-xl border transition-all duration-300 px-5 py-4 dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-cyan-200/50 border-indigo-300 bg-white text-slate-900 placeholder:text-slate-500 focus:border-indigo-500/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="rounded-xl border transition-all duration-300 px-5 py-4 dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-cyan-200/50 border-indigo-300 bg-white text-slate-900 placeholder:text-slate-500 focus:border-indigo-500/50 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="rounded-xl border transition-all duration-300 px-5 py-4 dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-cyan-200/50 border-indigo-300 bg-white text-slate-900 placeholder:text-slate-500 focus:border-indigo-500/50 focus:outline-none md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-full border transition-all duration-300 px-6 py-3 text-base font-semibold dark:border-cyan-300/35 dark:bg-cyan-300/15 dark:text-cyan-100 dark:hover:bg-cyan-300/25 border-indigo-400 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 md:col-span-2 md:justify-self-start"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
