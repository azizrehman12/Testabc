import { lazy, Suspense } from "react";
import { Hero } from "./Hero";
import { LoveCounter } from "./LoveCounter";
import { Timeline } from "./Timeline";
import { Letter } from "./Letter";
import { Reasons } from "./Reasons";
import { FloatingNotes } from "./FloatingNotes";
import { GiftBox } from "./GiftBox";
import { Fireworks } from "./Fireworks";
import { EasterEggs } from "./EasterEggs";
import { MusicPlayer } from "./MusicPlayer";

const Gallery = lazy(() => import("./Gallery").then((m) => ({ default: m.Gallery })));
const VideoGallery = lazy(() => import("./VideoGallery").then((m) => ({ default: m.VideoGallery })));
const MemoryBook = lazy(() => import("./MemoryBook").then((m) => ({ default: m.MemoryBook })));

const SectionLoader = () => (
  <div className="grid min-h-[40vh] place-items-center text-white/40 text-sm tracking-[0.4em] uppercase">Loading…</div>
);

export function Experience() {
  return (
    <main className="relative">
      <FloatingNotes />
      <EasterEggs />
      <Hero />
      <LoveCounter />
      <Timeline />
      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <VideoGallery />
      </Suspense>
      <Letter />
      <Reasons />
      <GiftBox />
      <Suspense fallback={<SectionLoader />}>
        <MemoryBook />
      </Suspense>
      <Fireworks />
      <footer className="relative z-10 px-6 pb-32 pt-10 text-center">
        <p className="font-script text-2xl text-rose-200">Forever yours ❤</p>
        <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/40">made with love · just for you</p>
      </footer>
      <MusicPlayer autoplay />
    </main>
  );
}