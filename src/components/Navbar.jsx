import { motion } from "framer-motion";
import { cn } from "../utils/helpers.js";
import { useThemeContext } from "./ThemeProvider.jsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// Sun Icon
function SunIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Moon Icon
function MoonIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-3xl border px-6 py-4 md:px-8 md:py-5 transition-colors duration-300",
          "dark:border-white/20 dark:bg-slate-950/80 dark:shadow-glass dark:backdrop-blur-xl",
          "border-indigo-200 bg-white/85 shadow-lg backdrop-blur-lg",
        )}
      >
        <a
          href="#hero"
          className="font-display text-2xl tracking-wide dark:text-white text-indigo-900 transition-colors hover:dark:text-cyan-200 hover:text-indigo-600"
        >
          YN Portfolio
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium dark:text-slate-200 text-slate-900 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:dark:text-cyan-200 hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-2 rounded-full transition-colors duration-300",
              "dark:text-yellow-300 dark:hover:bg-yellow-300/10",
              "text-indigo-600 hover:bg-indigo-100",
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </motion.button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="rounded-full border transition-all duration-300 px-5 py-2.5 text-sm font-semibold dark:border-cyan-300/40 dark:bg-cyan-300/15 dark:text-cyan-100 dark:hover:bg-cyan-300/25 border-indigo-400 bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          >
            Contact
          </a>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
