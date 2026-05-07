import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useThemeContext } from "./ThemeProvider.jsx";

function CloseIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    // Show popup after a short delay on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsVisible(false)}
        >
          {/* Welcome Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-max max-w-md px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-300/30"
                  : "bg-gradient-to-br from-white via-slate-50 to-white border border-indigo-300/50"
              }`}
            >
              {/* Glitch Background Effect */}
              <div className="absolute inset-0 opacity-30">
                <div className="glitch-bg absolute inset-0" />
              </div>

              {/* Content */}
              <div className="relative px-6 py-8 sm:px-8 sm:py-10">
                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    theme === "dark"
                      ? "text-slate-400 hover:text-cyan-300 hover:bg-cyan-300/10"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  <CloseIcon />
                </button>

                {/* Main Content */}
                <div className="space-y-4">
                  {/* Glitch Title */}
                  <div className="relative inline-block">
                    <h1 className="glitch-title font-display text-3xl sm:text-4xl font-bold tracking-wider">
                      Welcome
                    </h1>
                  </div>

                  {/* Subtitle */}
                  <p
                    className={`text-sm uppercase tracking-[0.2em] font-semibold ${
                      theme === "dark" ? "text-cyan-300" : "text-indigo-600"
                    }`}
                  >
                    Code × Design × Innovation
                  </p>

                  {/* Description */}
                  <p
                    className={`text-base leading-relaxed mt-4 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    I'm <span className="font-semibold">Yevin Theenura</span>, a
                    passionate Software Engineer building intelligent solutions
                    with AI/ML and modern web technologies.
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "AI/ML", "Web Dev"].map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-bold px-3 py-1 rounded-full border transition-all duration-300 ${
                          theme === "dark"
                            ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
                            : "border-indigo-300/50 bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => setIsVisible(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border ${
                      theme === "dark"
                        ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20"
                        : "border-indigo-400 bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    }`}
                  >
                    Explore My Portfolio
                  </motion.button>
                </div>
              </div>

              {/* Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl pointer-events-none ${
                  theme === "dark"
                    ? "shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]"
                    : "shadow-[inset_0_0_20px_rgba(79,70,229,0.05)]"
                }`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
