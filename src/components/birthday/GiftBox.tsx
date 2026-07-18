import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function GiftBox() {
  const [opened, setOpened] = useState(false);

  const confetti = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 800,
        y: -Math.random() * 600 - 100,
        r: Math.random() * 720,
        delay: Math.random() * 0.4,
        color: ["#f4a7b9", "#f9c8d4", "#f3d27a", "#e8b4d4", "#fff"][i % 5],
      })),
    [],
  );

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="A little surprise" title="Open me" subtitle="Click the ribbon. Promise it's worth it." />

      <div className="relative mx-auto mt-16 flex h-[28rem] max-w-xl items-end justify-center">
        {/* Confetti */}
        <AnimatePresence>
          {opened && confetti.map((c) => (
            <motion.span
              key={c.id}
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              animate={{ opacity: 0, x: c.x, y: c.y, rotate: c.r }}
              transition={{ duration: 2.5, delay: c.delay, ease: "easeOut" }}
              className="absolute bottom-32 h-3 w-3 rounded-sm"
              style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
            />
          ))}
        </AnimatePresence>

        {/* The gift */}
        <button
          onClick={() => setOpened(true)}
          aria-label="Open gift"
          className="relative h-56 w-56 cursor-pointer focus:outline-none md:h-64 md:w-64"
        >
          {/* Box base */}
          <motion.div
            animate={{ rotate: opened ? [0, -3, 3, 0] : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-x-0 bottom-0 h-2/3 rounded-xl"
            style={{
              background: "linear-gradient(135deg, oklch(0.55 0.18 18), oklch(0.42 0.16 12))",
              boxShadow: "0 30px 80px -10px oklch(0.4 0.18 18 / 0.7), inset 0 -10px 30px oklch(0 0 0 / 0.3)",
            }}
          />
          {/* Vertical ribbon */}
          <div
            className="absolute inset-y-0 left-1/2 w-7 -translate-x-1/2 rounded-md"
            style={{ background: "linear-gradient(180deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35))" }}
          />
          {/* Lid */}
          <motion.div
            initial={false}
            animate={opened ? { y: -160, rotate: -12, opacity: 0 } : { y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-x-[-6%] top-12 h-20 rounded-xl"
            style={{
              background: "linear-gradient(135deg, oklch(0.62 0.18 18), oklch(0.5 0.16 14))",
              boxShadow: "0 20px 40px -10px oklch(0.4 0.18 18 / 0.7)",
            }}
          >
            <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2" style={{ background: "linear-gradient(90deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35), oklch(0.92 0.10 85))" }} />
            {/* Bow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="relative h-12 w-24">
                <div className="absolute left-0 top-0 h-12 w-12 rotate-[-20deg] rounded-full" style={{ background: "linear-gradient(135deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35))" }} />
                <div className="absolute right-0 top-0 h-12 w-12 rotate-[20deg] rounded-full" style={{ background: "linear-gradient(135deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35))" }} />
                <div className="absolute left-1/2 top-2 h-8 w-4 -translate-x-1/2 rounded" style={{ background: "oklch(0.78 0.16 35)" }} />
              </div>
            </div>
          </motion.div>

          {/* Glowing heart that appears */}
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ scale: 0, y: 40, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], y: -90, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-x-0 bottom-1/2 mx-auto text-7xl text-rose-400"
                style={{ filter: "drop-shadow(0 0 40px oklch(0.78 0.18 18 / 0.95))", animation: "heartbeat 1.4s ease-in-out infinite" }}
              >
                ❤
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mx-auto mt-10 max-w-xl text-center"
          >
            <h3 className="font-display text-3xl text-gold-gradient md:text-4xl">Happy Birthday Maimoona ❤</h3>
            <p className="mt-4 text-white/75">I hope this little surprise reminds you how much you mean to me.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}