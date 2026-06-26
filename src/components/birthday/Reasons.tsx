import { motion } from "framer-motion";
import { REASONS } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

export function Reasons() {
  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="50 reasons" title="Why I love you" subtitle="A few of the infinite. The rest I'll tell you in person." />
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {REASONS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, delay: (i % 10) * 0.04 }}
            whileHover={{ y: -4, scale: 1.04 }}
            className="glass relative flex aspect-square flex-col items-center justify-center rounded-2xl p-4 text-center"
          >
            <span className="absolute right-3 top-3 font-display text-xs text-rose-200/60">#{String(i + 1).padStart(2, "0")}</span>
            <span className="text-2xl" aria-hidden>❤</span>
            <p className="mt-2 text-xs leading-snug text-white/85 md:text-sm">{r}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}