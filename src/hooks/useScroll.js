import { useState } from "react";
import {
  useMotionValueEvent,
  useScroll as useFramerScroll,
} from "framer-motion";

function useScroll() {
  const { scrollY } = useFramerScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrolled(value > 24);
  });

  return { isScrolled };
}

export default useScroll;
