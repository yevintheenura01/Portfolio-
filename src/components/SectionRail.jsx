import { motion } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);
  const { theme } = useThemeContext();

  const ids = useMemo(() => sectionItems.map((item) => item.id), []);

  // Load saved position from localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem("sectionRailPosition");
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition));
      } catch (e) {
        setPosition({ x: 20, y: 20 });
      }
    }
  }, []);

  // Save position to localStorage
  useEffect(() => {
    localStorage.setItem("sectionRailPosition", JSON.stringify(position));
  }, [position]);

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

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setDragOffset({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    };

    const handleTouchMove = (e) => {
      if (e.touches.length !== 1) return;
      setPosition({
        x: e.touches[0].clientX - dragOffset.x,
        y: e.touches[0].clientY - dragOffset.y,
      });
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragOffset]);

  return (
    <motion.aside
      ref={dragRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="pointer-events-none fixed z-40 hidden xl:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "none",
      }}
    >
      <div
        className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
          isDragging ? "cursor-grabbing opacity-85 shadow-lg" : "cursor-grab"
        }`}
      >
        {/* Drag Handle */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="pointer-events-auto flex items-center justify-between bg-gradient-to-r dark:from-slate-700/50 dark:to-slate-800/50 from-slate-100 to-slate-50 px-3 py-2 transition-all duration-200"
        >
          <span
            className={`text-xs font-bold uppercase tracking-wider ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}
          >
            ☰ Menu
          </span>
          <span
            className={`text-xs transition-colors duration-300 ${
              isDragging
                ? theme === "dark"
                  ? "text-cyan-300"
                  : "text-indigo-600"
                : theme === "dark"
                  ? "text-slate-500"
                  : "text-slate-400"
            }`}
          >
            ⋮⋮
          </span>
        </div>

        {/* Menu Items */}
        <ul className="pointer-events-auto space-y-0.5 px-2 py-3">
          {sectionItems.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 rounded px-2 py-1.5 transition-all duration-200 hover:bg-white/10 active:scale-95"
                >
                  <motion.span
                    animate={{
                      width: isActive ? 12 : 6,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? theme === "dark"
                          ? "bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                          : "bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.5)]"
                        : theme === "dark"
                          ? "bg-slate-600"
                          : "bg-slate-300"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold transition-colors duration-300 ${
                      isActive
                        ? theme === "dark"
                          ? "text-cyan-200"
                          : "text-indigo-600"
                        : theme === "dark"
                          ? "text-slate-400"
                          : "text-slate-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.aside>
  );
}

export default SectionRail;
