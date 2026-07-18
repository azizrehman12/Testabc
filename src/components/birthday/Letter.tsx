import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";
import { SectionHeading } from "./SectionHeading";

export function Letter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="A handwritten letter" title="From me, to you" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.92, rotateX: 12 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative mx-auto mt-14 max-w-2xl rounded-2xl px-8 py-12 md:px-14 md:py-16"
        style={{
          background: "linear-gradient(180deg, #fbf5e8, #f3e3c5)",
          color: "#3a2415",
          boxShadow: "0 50px 120px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.6)",
          backgroundImage: "linear-gradient(180deg, #fbf5e8, #f3e3c5), repeating-linear-gradient(transparent 0 27px, rgba(160,90,60,0.15) 27px 28px)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h3 className="font-script text-3xl text-[#7a2638] md:text-4xl">My dearest love,</h3>
        <div className="mt-6 min-h-[14rem] font-script text-xl leading-9 md:text-2xl">
          {inView && (
            <Typewriter
              options={{ delay: 30, cursor: "" }}
              onInit={(tw) => {
                tw.typeString("Life is measured in years, but remembered in moments.")
                  .pauseFor(500).typeString("<br/>")
                  .typeString("And somehow, the moments that carry your presence always feel a little closer to forever.")
                  .pauseFor(500).typeString("<br/>")
                  .typeString("Maybe love isn't about changing someone's world.")
                  .pauseFor(500).typeString("<br/>")
                  .typeString("Maybe it's about helping them see the beauty that was already there.")
                  .pauseFor(500).typeString("<br/><br/>")
                  .typeString("If souls leave fingerprints, you've left yours on mine.")
                  .start();
              }}
            />
          )}
        </div>
        <p className="mt-10 text-right font-script text-2xl text-[#7a2638]">Forever yours ❤</p>
      </motion.div>
    </section>
  );
}