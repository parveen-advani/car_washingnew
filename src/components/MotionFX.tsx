import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Thin gold scroll progress bar pinned to the top of the viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 bg-gradient-aqua"
      aria-hidden
    />
  );
}

/** Soft gold spotlight that follows the cursor — adds liveliness without noise */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    if (!mq.matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[55] h-[420px] w-[420px] rounded-full"
      animate={{ x: pos.x - 210, y: pos.y - 210 }}
      transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.6 }}
      style={{
        background:
          "radial-gradient(circle, oklch(0.78 0.16 80 / 0.10) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

/** Editorial marquee ticker — like a stock-ticker between sections */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-ink/40 py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground"
          >
            <span className="text-foreground/90">{t}</span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
