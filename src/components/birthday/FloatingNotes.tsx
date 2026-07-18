import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FLOATING_NOTES } from "@/constants/birthday";

type Note = { id: number; text: string; x: number; duration: number };

export function FloatingNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    let id = 0;
    const spawn = () => {
      setNotes((cur) => [
        ...cur.slice(-6),
        { id: ++id, text: FLOATING_NOTES[Math.floor(Math.random() * FLOATING_NOTES.length)], x: 5 + Math.random() * 90, duration: 9 + Math.random() * 6 },
      ]);
    };
    const t = setInterval(spawn, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      <AnimatePresence>
        {notes.map((n) => (
          <motion.span
            key={n.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: [0, 0.9, 0.9, 0], y: -window.innerHeight * 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: n.duration, ease: "easeOut" }}
            onAnimationComplete={() => setNotes((c) => c.filter((x) => x.id !== n.id))}
            className="absolute bottom-0 font-script text-xl text-rose-200/80 md:text-2xl drop-shadow-sm will-change-transform"
            style={{ left: `${n.x}%`, transform: "translateZ(0)" }}
          >
            {n.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}