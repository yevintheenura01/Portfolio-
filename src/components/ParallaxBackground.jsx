import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const driftA = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const driftB = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const driftC = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: driftA }}
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-[110px]"
      />
      <motion.div
        style={{ y: driftB }}
        className="absolute right-[-6rem] top-[28%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-300/15 blur-[120px]"
      />
      <motion.div
        style={{ y: driftC }}
        className="absolute left-[30%] top-[62%] h-72 w-72 rounded-full bg-emerald-300/18 blur-[100px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.09),transparent_35%),radial-gradient(circle_at_75%_35%,rgba(244,114,182,0.1),transparent_30%),radial-gradient(circle_at_60%_75%,rgba(16,185,129,0.08),transparent_32%)]" />
    </div>
  );
}

export default ParallaxBackground;
