import { motion } from "framer-motion";
import { useLoveCounter } from "@/hooks/useLoveCounter";
import { TOGETHER_SINCE } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

function Tile({ value, label }: { value: number; label: string }) {
  return (
    <div className="glass flex min-w-[6rem] flex-col items-center rounded-2xl px-5 py-6 md:min-w-[8rem]">
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-display text-4xl text-gold-gradient md:text-6xl"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs">{label}</span>
    </div>
  );
}

export function LoveCounter() {
  const t = useLoveCounter(TOGETHER_SINCE);
  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Our forever" title="We have spent" subtitle="…together, and counting." />
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <Tile value={t.days} label="Days" />
        <Tile value={t.hours} label="Hours" />
        <Tile value={t.minutes} label="Minutes" />
        <Tile value={t.seconds} label="Seconds" />
      </div>
      <p className="mt-10 text-center font-script text-2xl text-rose-200/90">…and every one of them ❤</p>
    </section>
  );
}