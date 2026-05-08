import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import { useThemeContext } from "./ThemeProvider.jsx";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [progressText, setProgressText] = useState(0);
  const { theme } = useThemeContext();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgressText(Math.round(value * 100));
  });

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 transition-colors duration-300 dark:bg-white/5 bg-slate-200">
        <motion.div
          style={{ scaleX }}
          className={`h-full origin-left shadow-[0_0_24px_rgba(34,211,238,0.65)] ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-100"
              : "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400"
          }`}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
        className="pointer-events-none fixed bottom-6 right-6 z-50 hidden sm:block"
      >
        <div
          className={`glass-card flex items-center gap-3 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
            theme === "dark" ? "text-slate-100" : "text-green-800"
          }`}
        >
          <span
            className={`flex h-3 w-3 rounded-full shadow-[0_0_18px] ${
              theme === "dark"
                ? "bg-cyan-300 shadow-cyan-300"
                : "bg-indigo-500 shadow-indigo-500"
            }`}
          />
          <span
            className={`uppercase tracking-[0.22em] transition-colors duration-300 ${
              theme === "dark" ? "text-slate-400" : "text-green-800"
            }`}
          >
            Scroll
          </span>
          <span
            className={`font-semibold transition-colors duration-300 ${
              theme === "dark" ? "text-cyan-100" : "text-green-700"
            }`}
          >
            {progressText}%
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default ScrollProgress;
