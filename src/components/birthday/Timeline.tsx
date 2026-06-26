import { motion } from "framer-motion";
import { TIMELINE } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Our story" title="A timeline of us" subtitle="Every moment a chapter, every chapter a heartbeat." />

      <div className="mt-16 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ol className="mx-auto flex w-max gap-6 px-4 md:gap-10">
          {TIMELINE.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
              className="glass group relative w-[78vw] max-w-[340px] shrink-0 overflow-hidden rounded-3xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-md">
                  {item.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-rose-gradient">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}