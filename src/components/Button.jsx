import { motion } from "framer-motion";
import { cn } from "../utils/helpers.js";

function Button({
  href = "#",
  onClick,
  children,
  className,
  variant = "primary",
}) {
  const baseClass =
    "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-base font-semibold transition-all duration-300";

  const variants = {
    primary:
      "dark:border-cyan-300/40 dark:bg-cyan-300/15 dark:text-cyan-100 dark:hover:border-cyan-200 dark:hover:bg-cyan-300/25 border-emerald-300 bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
    ghost:
      "dark:border-slate-300/20 dark:bg-white/5 dark:text-slate-200 dark:hover:border-slate-200/40 dark:hover:bg-white/10 border-emerald-200 bg-white/50 text-emerald-700 hover:bg-emerald-100",
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={handleClick}
      className={cn(baseClass, variants[variant], className)}
    >
      {children}
    </motion.a>
  );
}

export default Button;
