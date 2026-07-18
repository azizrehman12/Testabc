import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { MEMORY_BOOK } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

export function MemoryBook() {
  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Memory book" title="Turn the page" subtitle="A little book of us. Flip through gently — these pages are alive." />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="mx-auto mt-14 max-w-5xl"
      >
        <Swiper
          modules={[EffectCreative, Keyboard, Pagination]}
          effect="creative"
          grabCursor
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          creativeEffect={{
            prev: { translate: ["-105%", 0, -200], rotate: [0, -15, 0], opacity: 0 },
            next: { translate: ["105%", 0, -200], rotate: [0, 15, 0], opacity: 0 },
          }}
          loop
          className="!pb-12"
        >
          {MEMORY_BOOK.map((p, i) => (
            <SwiperSlide key={i}>
              <div
                className="grid overflow-hidden rounded-3xl md:grid-cols-2 ring-1 ring-white/15 relative group md:backdrop-blur-md"
                style={{
                  background: "linear-gradient(135deg, oklch(0.22 0.12 320 / 0.85), oklch(0.15 0.08 290 / 0.98))",
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
              >
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                  {/* Seamless fade out to the background color */}
                  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-[oklch(0.15_0.08_290)]" />
                  {/* Subtle warm glow over the image */}
                  <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay" />
                </div>
                <div className="flex flex-col justify-center p-10 md:p-14 relative z-10 bg-gradient-to-t md:bg-gradient-to-r from-[oklch(0.15_0.08_290)] via-[oklch(0.15_0.08_290)/0.8] to-transparent">
                  <span className="text-xs uppercase tracking-[0.4em] text-rose-300 font-bold tracking-widest">{p.date}</span>
                  <h3 className="mt-4 font-display text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-rose-200 drop-shadow-sm">{p.title}</h3>
                  <p className="mt-5 font-script text-[1.6rem] leading-relaxed text-rose-100/90 font-light drop-shadow-sm">{p.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}