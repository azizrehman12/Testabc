import { motion } from "framer-motion";
import { useMemo } from "react";

/** Lightweight CSS firework bursts. No canvas — pure motion. */
export function Fireworks() {
  const bursts = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 20 + Math.random() * 40,
        delay: i * 1.1,
        color: ["#f4a7b9", "#f3d27a", "#fff5cf", "#e8b4d4", "#ffd166", "#ffb4c2"][i % 6],
      })),
    [],
  );

  return (
    <section className="relative z-10 overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        {bursts.map((b) => (
          <motion.div
            key={b.id}
            className="absolute"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: b.delay, repeat: Infinity, repeatDelay: 5 }}
          >
            {Array.from({ length: 24 }).map((_, k) => {
              const angle = (k / 24) * Math.PI * 2;
              const dist = 140 + Math.random() * 60;
              return (
                <motion.span
                  key={k}
                  className="absolute h-1.5 w-1.5 rounded-full"
                  style={{ background: b.color, boxShadow: `0 0 12px ${b.color}` }}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0 }}
                  transition={{ duration: 1.6, delay: b.delay, repeat: Infinity, repeatDelay: 5, ease: "easeOut" }}
                />
              );
            })}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="font-display text-6xl md:text-8xl"
        >
          <span className="text-gold-gradient">Happy</span>{" "}
          <span className="text-rose-gradient">Birthday</span>
        </motion.h2>
        <p className="mt-6 font-script text-3xl text-rose-200">…my forever ❤</p>

        {/* Lanterns */}
        <div className="pointer-events-none absolute inset-x-0 -top-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-6 w-5 rounded-full"
              style={{
                left: `${10 + i * 11}%`,
                background: "radial-gradient(circle at 50% 40%, #ffd58a, #c46a2b)",
                boxShadow: "0 0 30px rgba(255,200,120,0.8)",
              }}
              animate={{ y: [0, -200, -400], opacity: [0, 1, 0] }}
              transition={{ duration: 8 + i, delay: i * 0.6, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}