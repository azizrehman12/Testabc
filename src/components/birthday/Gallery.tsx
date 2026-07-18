import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { HiHeart, HiOutlineHeart, HiOutlineArrowDownTray, HiOutlineShare } from "react-icons/hi2";
import { useState } from "react";
import { GALLERY } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [faves, setFaves] = useState<Record<number, boolean>>({});

  const toggleFave = (id: number) => setFaves((m) => ({ ...m, [id]: !m[id] }));

  const share = async (src: string, caption: string) => {
    const data = { title: "Our memory", text: caption, url: src };
    if (navigator.share) { try { await navigator.share(data); } catch { } }
    else { try { await navigator.clipboard.writeText(src); } catch { } }
  };

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Memory gallery" title="Frames that all belongs to you" subtitle="Tap any frame to step inside the moment." />

      <PhotoProvider maskOpacity={0.92} bannerVisible={false}>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 8) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: i % 5 === 0 ? "3 / 4" : "1 / 1" }}
            >
              <PhotoView src={img.src}>
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full cursor-zoom-in object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </PhotoView>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-rose-300/60 group-hover:[box-shadow:0_0_40px_oklch(0.78_0.16_18/0.35)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent px-3 py-3 opacity-0 transition group-hover:opacity-100">
                <button onClick={() => toggleFave(img.id)} aria-label="Favorite" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-rose-400/60">
                  {faves[img.id] ? <HiHeart className="h-4 w-4" /> : <HiOutlineHeart className="h-4 w-4" />}
                </button>
                <div className="flex gap-2">
                  <a href={img.src} download className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20" aria-label="Download">
                    <HiOutlineArrowDownTray className="h-4 w-4" />
                  </a>
                  <button onClick={() => share(img.src, img.caption)} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20" aria-label="Share">
                    <HiOutlineShare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}