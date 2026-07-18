import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { PLAYLIST } from "@/constants/birthday";
import { HiMusicalNote, HiPlay, HiPause } from "react-icons/hi2";

export function RecordPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const vinylControls = useAnimation();
  const armControls = useAnimation();

  // Load new audio when track index changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const song = PLAYLIST[currentTrackIndex];
    audioRef.current = new Audio(song.src);
    audioRef.current.loop = true;
    if (song.startAt) {
      audioRef.current.currentTime = song.startAt;
    }

    // If it was already playing, auto-play the new song
    if (isPlaying) {
      audioRef.current.play().catch(console.error);
      vinylControls.start({ rotate: 360, transition: { repeat: Infinity, duration: 4, ease: "linear" } });
      armControls.start({ rotate: 32, transition: { duration: 0.5, ease: "easeOut" } }); 
    }

    return () => {
      if (audioRef.current) {
         audioRef.current.pause();
         audioRef.current = null;
      }
    };
  }, [currentTrackIndex]);

  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);

    if (nextState) {
      audioRef.current?.play().catch(console.error);
      vinylControls.start({ rotate: 360, transition: { repeat: Infinity, duration: 4, ease: "linear" } });
      armControls.start({ rotate: 32, transition: { duration: 0.5, ease: "easeOut" } }); 
    } else {
      audioRef.current?.pause();
      vinylControls.stop();
      armControls.start({ rotate: 0, transition: { duration: 0.5, ease: "easeOut" } }); 
    }
  };

  const selectTrack = (index: number) => {
    if (index === currentTrackIndex) {
       togglePlay();
       return;
    }
    // If not currently playing, set to playing so the new track auto-starts
    if (!isPlaying) {
      setIsPlaying(true);
      vinylControls.start({ rotate: 360, transition: { repeat: Infinity, duration: 4, ease: "linear" } });
      armControls.start({ rotate: 32, transition: { duration: 0.5, ease: "easeOut" } }); 
    }
    setCurrentTrackIndex(index);
  };

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Our Song" title="The Record Player" subtitle="Click the needle to play our favorite song." />

      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        
        {/* Record Player Base */}
        <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px] shrink-0 rounded-3xl bg-zinc-900 shadow-[0_40px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
           
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-800 to-black opacity-90" />
           
           {/* Inner metallic rim */}
           <div className="absolute inset-4 rounded-2xl border border-white/5 bg-zinc-900/50" />

           {/* Spinning Vinyl */}
           <motion.div 
             animate={vinylControls}
             className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-full bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.9)] border border-zinc-800 flex items-center justify-center"
           >
              {/* Vinyl grooves */}
              <div className="absolute inset-2 rounded-full border border-white/5" />
              <div className="absolute inset-6 rounded-full border border-white/5" />
              <div className="absolute inset-10 rounded-full border border-white/5" />
              <div className="absolute inset-14 rounded-full border border-white/5" />
              <div className="absolute inset-20 rounded-full border border-white/5" />
              
              {/* Center Label (Picture) */}
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border-[6px] border-rose-900 overflow-hidden bg-rose-500 shadow-inner">
                 <img src="/assets/01.jpeg" alt="Center label" className="h-full w-full object-cover opacity-90 mix-blend-luminosity" />
                 {/* Center hole */}
                 <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900 border border-black shadow-inner" />
                 {/* Metallic Pin */}
                 <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-400" />
              </div>
              
              {/* Vinyl Shine / Reflection */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-white/10 opacity-30 pointer-events-none" />
           </motion.div>

           {/* Tonearm Base */}
           <div className="absolute right-6 top-8 md:right-8 md:top-10 h-16 w-16 rounded-full bg-zinc-800 shadow-2xl border border-zinc-600 flex items-center justify-center z-20">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 border border-zinc-500 shadow-inner flex items-center justify-center">
                 <div className="h-4 w-4 rounded-full bg-zinc-400" />
              </div>
           </div>

           {/* Tonearm (The Needle) */}
           <motion.div
             animate={armControls}
             style={{ originX: 0.5, originY: 0.08 }} // Rotate around the top base
             className="absolute right-12 top-12 md:right-14 md:top-14 h-48 w-4 md:h-56 cursor-pointer z-30 group"
             onClick={togglePlay}
           >
              {/* Arm bar */}
              <div className="absolute left-1/2 top-4 w-3 -translate-x-1/2 h-full bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500 rounded-full shadow-[20px_20px_30px_rgba(0,0,0,0.8)] transition-transform group-hover:scale-105" />
              
              {/* Pivot joint */}
              <div className="absolute top-16 left-1/2 h-6 w-5 -translate-x-1/2 bg-zinc-600 rounded-sm" />

              {/* Needle Head Base */}
              <div className="absolute bottom-0 left-1/2 h-12 w-8 -translate-x-1/2 rounded-t-sm rounded-b-md bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-xl border border-zinc-400 flex flex-col items-center justify-end pb-1">
                 {/* Stylus */}
                 <div className="h-3 w-1.5 bg-rose-600 rounded-sm shadow-sm" />
              </div>
           </motion.div>
        </div>

        {/* Playlist Bar / Menu */}
        <div className="w-full max-w-sm flex flex-col gap-4">
           <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                 <HiMusicalNote className="h-6 w-6 text-rose-300" />
              </div>
              <div className="flex-1 overflow-hidden">
                 <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Now Playing</p>
                 <p className="font-script text-2xl text-rose-200 truncate">{PLAYLIST[currentTrackIndex].title}</p>
              </div>
              <button onClick={togglePlay} className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center shrink-0">
                 {isPlaying ? <HiPause className="h-6 w-6 text-white" /> : <HiPlay className="h-6 w-6 text-white ml-1" />}
              </button>
           </div>

           <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {PLAYLIST.map((song, index) => (
                 <button
                   key={index}
                   onClick={() => selectTrack(index)}
                   className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all text-left group
                     ${index === currentTrackIndex 
                       ? 'bg-rose-500/20 ring-1 ring-rose-500/30' 
                       : 'bg-white/5 hover:bg-white/10'}`}
                 >
                    <div className={`text-sm font-bold ${index === currentTrackIndex ? 'text-rose-300' : 'text-white/40'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                       <p className={`font-display text-lg tracking-wide ${index === currentTrackIndex ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                          {song.title}
                       </p>
                    </div>
                    {index === currentTrackIndex && isPlaying && (
                       <div className="flex items-end gap-1 h-4">
                          <motion.div animate={{ height: [4, 16, 4] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-rose-400 rounded-full" />
                          <motion.div animate={{ height: [8, 12, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-rose-400 rounded-full" />
                          <motion.div animate={{ height: [12, 6, 12] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 bg-rose-400 rounded-full" />
                       </div>
                    )}
                 </button>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
