import { useState } from "react";
import { motion } from "framer-motion";
import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi2";
import { BUCKET_LIST } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

export function BucketList() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(checked);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setChecked(next);
  };

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Future memories" title="When we finally meet" subtitle="Our very first bucket list together." />

      <div className="mx-auto mt-16 max-w-2xl">
        <ul className="space-y-4">
          {BUCKET_LIST.map((item, i) => {
            const isChecked = checked.has(i);
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass group flex cursor-pointer items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-white/10 ${isChecked ? "opacity-60" : "opacity-100"}`}
                onClick={() => toggle(i)}
              >
                <div className={`text-2xl transition-colors duration-300 ${isChecked ? "text-rose-400" : "text-white/40 group-hover:text-white/60"}`}>
                  {isChecked ? <HiCheckCircle /> : <HiOutlineCheckCircle />}
                </div>
                <span className={`font-display text-lg md:text-xl transition-all duration-300 ${isChecked ? "text-white/60 line-through decoration-rose-400/50" : "text-rose-100"}`}>
                  {item}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
