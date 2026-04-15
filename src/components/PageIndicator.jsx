import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContext.jsx";

function PageIndicator() {
  const { pages, currentPage, goToPage } = usePageContext();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 pointer-events-auto">
      {pages.map((page, index) => (
        <motion.button
          key={page}
          onClick={() => goToPage(index)}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`h-3 rounded-full transition-all ${
            index === currentPage
              ? "w-8 bg-cyan-400"
              : "w-3 bg-slate-500 hover:bg-slate-300"
          }`}
          title={page.charAt(0).toUpperCase() + page.slice(1)}
        />
      ))}
    </div>
  );
}

export default PageIndicator;
