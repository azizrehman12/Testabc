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
                className="grid overflow-hidden rounded-3xl md:grid-cols-2"
                style={{
                  background: "linear-gradient(180deg, #fbf5e8, #efdcb8)",
                  color: "#3a2415",
                  boxShadow: "0 60px 140px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                <div className="relative aspect-[4/5] md:aspect-auto">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#efdcb8]" />
                </div>
                <div className="flex flex-col justify-center p-10 md:p-14">
                  <span className="text-xs uppercase tracking-[0.4em] text-[#7a2638]/80">{p.date}</span>
                  <h3 className="mt-4 font-display text-4xl text-[#7a2638]">{p.title}</h3>
                  <p className="mt-4 font-script text-2xl leading-relaxed">{p.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}