import { motion } from "framer-motion";
import useScroll from "../hooks/useScroll.js";
import { cn } from "../utils/helpers.js";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const { isScrolled } = useScroll();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 md:px-6",
          isScrolled
            ? "border-white/20 bg-slate-950/80 shadow-glass backdrop-blur-xl"
            : "border-white/10 bg-slate-950/45 backdrop-blur-lg",
        )}
      >
        <a
          href="#hero"
          className="font-display text-lg tracking-wide text-white"
        >
          YN Portfolio
        </a>

        <div className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
