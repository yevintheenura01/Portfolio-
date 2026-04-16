export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function revealUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.22 },
    transition: { duration: 0.55, ease: "easeOut", delay },
  };
}
