import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { HiHeart } from "react-icons/hi2";

/**
 * Cinematic black-screen opening. Heartbeat → fade-in → typewriter → CTA.
 */
export function OpeningGate({ onBegin }: { onBegin: () => void }) {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 900);
    const t2 = setTimeout(() => setStage(2), 2200);
    const t3 = setTimeout(() => setStage(3), 6800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: stage >= 1 ? 1 : 0, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="mb-10 text-rose-400"
        style={{ animation: "heartbeat 1.6s ease-in-out infinite", filter: "drop-shadow(0 0 40px oklch(0.78 0.18 18 / 0.9))" }}
      >
        <HiHeart className="h-20 w-20" />
      </motion.div>

      <AnimatePresence>
        {stage >= 2 && (
          <motion.div
            key="type"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl"
          >
            <div className="font-script text-3xl md:text-5xl" style={{ color: "oklch(0.95 0.04 80)" }}>
              <Typewriter
                options={{ delay: 55, cursor: "❤", deleteSpeed: 30 }}
                onInit={(tw) => {
                  tw.typeString("Someone made something very special just for you...")
                    .pauseFor(1200)
                    .deleteAll(20)
                    .typeString("My Beautiful Girl ❤")
                    .start();
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage >= 3 && (
          <motion.button
            key="cta"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onClick={onBegin}
            className="btn-luxury mt-16 text-base uppercase tracking-[0.3em] md:text-lg"
          >
            Begin Your Surprise
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}