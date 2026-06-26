import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { HiPlay, HiPause } from "react-icons/hi2";
import { VIDEOS } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

function VideoCard({ video, i }: { video: (typeof VIDEOS)[number]; i: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) { void el.play(); setPlaying(true); }
    else { el.pause(); setPlaying(false); }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (i % 4) * 0.08 }}
      className="glass group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          playsInline
          preload="none"
          onClick={toggle}
          onEnded={() => setPlaying(false)}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/20"
        >
          <span
            className="grid h-16 w-16 place-items-center rounded-full text-white opacity-90 transition group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, oklch(0.86 0.14 35), oklch(0.78 0.16 18))", boxShadow: "0 20px 50px -10px oklch(0.78 0.16 20 / 0.6)" }}
          >
            {playing ? <HiPause className="h-7 w-7" /> : <HiPlay className="h-7 w-7 translate-x-[2px]" />}
          </span>
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-white">{video.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-rose-200/70">A moment to remember</p>
      </div>
    </motion.div>
  );
}

export function VideoGallery() {
  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Cinema reel" title="Our little films" subtitle="Hit play. Live it again." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((v, i) => <VideoCard key={v.title} video={v} i={i} />)}
      </div>
    </section>
  );
}