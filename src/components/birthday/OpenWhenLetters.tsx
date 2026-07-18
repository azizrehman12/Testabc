import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OPEN_WHEN_LETTERS } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";
import { HiEnvelope, HiEnvelopeOpen } from "react-icons/hi2";

export function OpenWhenLetters() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Secret Notes" title="Open When..." subtitle="Digital letters for the moments you need me." />

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        {OPEN_WHEN_LETTERS.map((letter, i) => {
          const isOpen = openId === letter.id;
          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div 
                className={`glass group cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ${isOpen ? "ring-1 ring-rose-400/50" : "hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10"}`}
                onClick={() => setOpenId(isOpen ? null : letter.id)}
              >
                <div className="flex items-center gap-4 p-6">
                  <div className={`text-3xl transition-colors duration-300 ${isOpen ? "text-rose-400" : "text-white/60 group-hover:text-rose-300"}`}>
                    {isOpen ? <HiEnvelopeOpen /> : <HiEnvelope />}
                  </div>
                  <h3 className="font-display text-xl text-rose-100">{letter.title}</h3>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="h-px w-full bg-white/10 mb-4" />
                        <p className="font-script text-xl leading-relaxed text-rose-50/90 md:text-2xl">
                          {letter.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
