import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

function MouseSpotlight() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(280px at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.16), rgba(236, 72, 153, 0.1) 35%, transparent 70%)`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 hidden md:block"
      style={{ background }}
    />
  );
}

export default MouseSpotlight;
