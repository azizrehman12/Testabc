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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050005] overflow-hidden"
    >
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-rose-900/15 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: stage >= 1 ? 1 : 0, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="mb-12 relative z-10"
        style={{ animation: stage >= 1 ? "heartbeat 1.6s ease-in-out infinite" : "none" }}
      >
        <div className="relative">
           <HiHeart className="h-16 w-16 md:h-20 md:w-20 text-rose-500 relative z-10" />
           <div className="absolute inset-0 bg-rose-500 blur-xl opacity-60 rounded-full" />
        </div>
      </motion.div>

      <AnimatePresence>
        {stage >= 2 && (
          <motion.div
            key="type"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full px-6 flex justify-center relative z-10"
          >
            <div 
              className="font-script text-4xl md:text-5xl lg:text-6xl text-center max-w-[90vw]"
              style={{ 
                color: "#ffc2d1", 
                textShadow: "0 0 20px rgba(255, 194, 209, 0.4), 0 0 40px rgba(255, 194, 209, 0.1)",
                lineHeight: "1.5",
                padding: "10px" // Prevents cursive font cutoff
              }}
            >
              <Typewriter
                options={{ delay: 55, cursor: "❤", deleteSpeed: 30 }}
                onInit={(tw) => {
                  tw.typeString("Every star in the sky led me to you...")
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
            className="btn-luxury mt-16 text-sm md:text-base uppercase tracking-[0.4em] relative z-10"
          >
            Begin Your Surprise
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}