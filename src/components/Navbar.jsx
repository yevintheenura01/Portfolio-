import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";
import { cn } from "../utils/helpers.js";

function Navbar() {
  const {
    currentPage,
    goToPage,
    pages,
    prevPage,
    nextPage,
    isFirstPage,
    isLastPage,
  } = usePageContext();

  const pageLabels = {
    0: "Home",
    1: "About",
    2: "Skills",
    3: "Projects",
    4: "Experience",
    5: "Services",
    6: "Contact",
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 md:px-6",
          "border-white/20 bg-slate-950/80 shadow-glass backdrop-blur-xl",
        )}
      >
        <button
          onClick={() => goToPage(0)}
          className="font-display text-lg tracking-wide text-white hover:text-cyan-200 transition-colors"
        >
          YN Portfolio
        </button>

        <div className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
          {pages.map((page, index) => (
            <button
              key={page}
              onClick={() => goToPage(index)}
              className={cn(
                "transition-colors capitalize",
                index === currentPage
                  ? "text-cyan-200 font-semibold"
                  : "hover:text-cyan-200",
              )}
            >
              {pageLabels[index]}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevPage}
            disabled={isFirstPage}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              isFirstPage
                ? "border-slate-600/50 bg-slate-900/50 text-slate-500 cursor-not-allowed"
                : "border-white/20 bg-white/5 text-slate-100 hover:bg-white/10",
            )}
          >
            ← Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            disabled={isLastPage}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              isLastPage
                ? "border-slate-600/50 bg-slate-900/50 text-slate-500 cursor-not-allowed"
                : "border-cyan-300/40 bg-cyan-300/15 text-cyan-100 hover:bg-cyan-300/25",
            )}
          >
            Next →
          </motion.button>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
