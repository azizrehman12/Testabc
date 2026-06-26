import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Type "iloveyou" or "forever", click the moon, click 10 hearts. */
export function EasterEggs() {
  const [buffer, setBuffer] = useState("");
  const [burst, setBurst] = useState<null | "hearts" | "infinity" | "starsRain" | "secret">(null);
  const [heartClicks, setHeartClicks] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      setBuffer((b) => {
        const nb = (b + e.key.toLowerCase()).slice(-20);
        if (nb.endsWith("iloveyou")) setBurst("hearts");
        else if (nb.endsWith("forever")) setBurst("infinity");
        return nb;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (heartClicks >= 10) setBurst("secret");
  }, [heartClicks]);

  useEffect(() => {
    if (!burst) return;
    const t = setTimeout(() => setBurst(null), burst === "starsRain" ? 4500 : 3500);
    return () => clearTimeout(t);
  }, [burst]);

  return (
    <>
      {/* Moon — click for star rain */}
      <button
        onClick={() => setBurst("starsRain")}
        aria-label="Click the moon"
        className="fixed right-6 top-6 z-30 grid h-12 w-12 place-items-center rounded-full text-2xl transition hover:scale-110"
        style={{ background: "radial-gradient(circle at 35% 35%, #fff7d8, #e6cf8a 60%, #b89a4c)", boxShadow: "0 0 40px rgba(255, 230, 160, 0.6)" }}
      >
        🌙
      </button>

      {/* Floating heart — count clicks */}
      <button
        onClick={() => setHeartClicks((c) => c + 1)}
        aria-label="Click the heart"
        className="fixed left-6 top-6 z-30 grid h-12 w-12 place-items-center rounded-full text-2xl transition hover:scale-110"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 18 / 0.4), transparent)", boxShadow: "0 0 30px oklch(0.78 0.18 18 / 0.5)" }}
      >
        ❤
      </button>
      {heartClicks > 0 && heartClicks < 10 && (
        <span className="fixed left-20 top-9 z-30 text-xs uppercase tracking-[0.25em] text-rose-200/70">{heartClicks}/10</span>
      )}

      <AnimatePresence>
        {burst === "hearts" && (
          <motion.div key="hearts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-none fixed inset-0 z-50 grid place-items-center">
            <span className="text-7xl md:text-9xl" style={{ animation: "heartbeat 1.2s ease-in-out infinite" }}>❤❤❤❤❤</span>
          </motion.div>
        )}
        {burst === "infinity" && (
          <motion.div key="inf" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="pointer-events-none fixed inset-0 z-50 grid place-items-center">
            <span className="font-display text-[14rem] text-rose-gradient" style={{ filter: "drop-shadow(0 0 40px oklch(0.78 0.18 18 / 0.8))" }}>∞</span>
          </motion.div>
        )}
        {burst === "starsRain" && (
          <motion.div key="rain" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
                animate={{ y: window.innerHeight + 50, opacity: [0, 1, 0] }}
                transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 1.5, ease: "easeIn" }}
                className="absolute text-yellow-200"
                style={{ fontSize: 10 + Math.random() * 14, filter: "drop-shadow(0 0 6px gold)" }}
              >✦</motion.span>
            ))}
          </motion.div>
        )}
        {burst === "secret" && (
          <motion.div key="secret" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="pointer-events-none fixed inset-0 z-50 grid place-items-center px-6">
            <div className="glass max-w-md rounded-3xl p-8 text-center">
              <p className="font-script text-3xl text-rose-gradient">You found the secret.</p>
              <p className="mt-3 text-sm text-white/80">If hearts could speak, mine would say your name on every beat.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}