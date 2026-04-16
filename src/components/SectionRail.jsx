import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useThemeContext } from "./ThemeProvider.jsx";

const sectionItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function SectionRail() {
  const [activeId, setActiveId] = useState("hero");
  const { theme } = useThemeContext();

  const ids = useMemo(() => sectionItems.map((item) => item.id), []);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { threshold: [0.35, 0.6, 0.85] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <aside className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="glass-card rounded-2xl px-3 py-4 transition-all duration-300">
        <ul className="space-y-3">
          {sectionItems.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="pointer-events-auto flex items-center gap-3"
                >
                  <motion.span
                    animate={{
                      width: isActive ? 26 : 12,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? theme === "dark"
                          ? "bg-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
                          : "bg-indigo-500 shadow-[0_0_14px_rgba(79,70,229,0.7)]"
                        : theme === "dark"
                          ? "bg-slate-500"
                          : "bg-slate-400"
                    }`}
                  />
                  <span
                    className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive
                        ? theme === "dark"
                          ? "text-cyan-100"
                          : "text-indigo-600"
                        : theme === "dark"
                          ? "text-slate-400"
                          : "text-slate-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")} {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default SectionRail;
