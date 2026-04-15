import { motion } from "framer-motion";
import { cn } from "../utils/helpers.js";

function Button({ href, children, className, variant = "primary" }) {
  const baseClass =
    "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors";

  const variants = {
    primary:
      "border-cyan-300/40 bg-cyan-300/15 text-cyan-100 hover:border-cyan-200 hover:bg-cyan-300/25",
    ghost:
      "border-slate-300/20 bg-white/5 text-slate-200 hover:border-slate-200/40 hover:bg-white/10",
  };

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={cn(baseClass, variants[variant], className)}
    >
      {children}
    </motion.a>
  );
}

export default Button;
