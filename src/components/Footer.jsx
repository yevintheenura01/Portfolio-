import { useToast } from "../hooks/useToast.js";
import { Toast, ResumeButton } from "./Toast.jsx";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.08 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.93.84.09-.65.35-1.1.64-1.35-2.22-.26-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.33.1-2.76 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.43.2 2.5.1 2.76.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.59.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 8.75h3.96V21H3V8.75Zm7.25 0H14v1.68h.06c.55-1.05 1.89-2.16 3.9-2.16C22 8.27 23 10.44 23 13.28V21h-3.96v-6.84c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V21h-3.9V8.75Z"
      />
    </svg>
  );
}

function Footer() {
  const { toast, showToast } = useToast();

  return (
    <>
      <Toast message={toast?.message} type={toast?.type} />
      <footer className="mx-auto w-full max-w-7xl px-4 pb-10 pt-14 text-base dark:text-slate-400 text-slate-700 transition-colors duration-300">
        <div className="glass-card flex flex-col gap-6 rounded-[1.75rem] px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="dark:text-white text-slate-800">
              Building intelligent products for real-world impact.
            </p>
            <p className="mt-1 text-xs dark:text-slate-500 text-slate-600">
              © {new Date().getFullYear()} Yevin Theenura
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ResumeButton showToast={showToast} />
            <a
              href="https://github.com/yevintheenura01"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border transition-all duration-300 px-4 py-2 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-green-300 bg-green-100 hover:bg-green-100"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yevin-theenura-01960a223/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border transition-all duration-300 px-4 py-2 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-green-300 bg-green-100 hover:bg-green-100"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
