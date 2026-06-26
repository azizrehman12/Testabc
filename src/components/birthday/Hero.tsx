import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-300, 300], [6, -6]);
  const ry = useTransform(mx, [-300, 300], [-6, 6]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="font-script text-2xl text-rose-200/90 md:text-3xl"
      >
        For the one I love —
      </motion.p>

      <motion.h1
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="mt-4 text-5xl font-light leading-[1.05] md:text-8xl"
      >
        <span className="text-gold-gradient">Happy Birthday</span>
        <br />
        <span className="font-script text-rose-gradient">my love</span>
        <motion.span
          aria-hidden
          className="ml-3 inline-block"
          style={{ animation: "heartbeat 1.4s ease-in-out infinite" }}
        >
          ❤
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1.4 }}
        className="mt-8 max-w-xl text-base text-white/75 md:text-lg"
      >
        Every second with you has become my favorite memory.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.4 }}
        className="mt-14 flex flex-col items-center text-white/50"
      >
        <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-3 h-10 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(0.92 0.10 35), transparent)" }}
        />
      </motion.div>
    </section>
  );
}