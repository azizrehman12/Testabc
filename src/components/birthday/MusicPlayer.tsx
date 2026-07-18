import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlay, HiPause, HiForward, HiBackward, HiSpeakerWave, HiSpeakerXMark, HiQueueList, HiXMark } from "react-icons/hi2";
import { PLAYLIST } from "@/constants/birthday";

let globalPlayTrigger: (() => void) | null = null;

export function triggerMusicPlay() {
  if (globalPlayTrigger) {
    globalPlayTrigger();
  }
}

export function MusicPlayer({ autoplay = false, visible = true }: { autoplay?: boolean; visible?: boolean }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [openList, setOpenList] = useState(false);

  const track = PLAYLIST[idx];

  useEffect(() => {
    globalPlayTrigger = () => {
      const el = ref.current;
      if (!el) return;
      el.play().then(() => setPlaying(true)).catch((err) => console.log("Autoplay check:", err));
    };
    return () => {
      globalPlayTrigger = null;
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = volume;
    el.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (autoplay) {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) el.play().then(() => setPlaying(true));
    else { el.pause(); setPlaying(false); }
  };

  const next = () => setIdx((i) => (i + 1) % PLAYLIST.length);
  const prev = () => setIdx((i) => (i - 1 + PLAYLIST.length) % PLAYLIST.length);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => setProgress(el.duration ? el.currentTime / el.duration : 0);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", next);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", next);
    };
  }, []);

  // when the track changes, autoplay
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.load();
    if (playing) el.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 transition-all duration-700 ${visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-12"}`}>
      <motion.div
        layout
        className="glass flex w-full max-w-2xl items-center gap-3 rounded-full px-3 py-2 md:gap-4 md:px-5 md:py-3"
      >
        <audio ref={ref} src={track.src} preload="metadata" />
        <button onClick={prev} aria-label="Previous" className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white">
          <HiBackward className="h-5 w-5" />
        </button>
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-11 w-11 place-items-center rounded-full text-white"
          style={{ background: "linear-gradient(135deg, oklch(0.86 0.14 35), oklch(0.78 0.16 18))", boxShadow: "0 10px 30px -10px oklch(0.78 0.16 20 / 0.7)" }}
        >
          {playing ? <HiPause className="h-5 w-5" /> : <HiPlay className="h-5 w-5 translate-x-[1px]" />}
        </button>
        <button onClick={next} aria-label="Next" className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white">
          <HiForward className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm text-white md:text-base">{track.title}</p>
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full transition-[width] duration-300" style={{ width: `${progress * 100}%`, background: "linear-gradient(90deg, oklch(0.92 0.10 85), oklch(0.78 0.16 18))" }} />
          </div>
        </div>

        <button onClick={() => setMuted((m) => !m)} aria-label={muted ? "Unmute" : "Mute"} className="hidden h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white md:grid">
          {muted ? <HiSpeakerXMark className="h-5 w-5" /> : <HiSpeakerWave className="h-5 w-5" />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
          className="hidden w-24 accent-rose-300 md:block"
        />
        <button onClick={() => setOpenList((o) => !o)} aria-label="Playlist" className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white">
          {openList ? <HiXMark className="h-5 w-5" /> : <HiQueueList className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {openList && (
            <motion.ul
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="glass absolute bottom-16 right-2 w-64 rounded-2xl p-2"
            >
              {PLAYLIST.map((t, i) => (
                <li key={t.title}>
                  <button
                    onClick={() => { setIdx(i); setOpenList(false); setPlaying(true); }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${i === idx ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
                  >
                    <span className="truncate">{t.title}</span>
                    {i === idx && playing && <span className="ml-2 text-rose-300">♪</span>}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}