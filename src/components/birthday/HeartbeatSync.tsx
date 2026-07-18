import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { HiHeart } from "react-icons/hi2";

export function HeartbeatSync() {
  const [isHolding, setIsHolding] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const playHeartbeatSound = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return; // Fallback if Web Audio is totally unsupported
      audioCtxRef.current = new AudioContextClass();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const time = ctx.currentTime;
    
    // First deep thump
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    osc1.frequency.setValueAtTime(100, time);
    osc1.frequency.exponentialRampToValueAtTime(40, time + 0.1);
    gain1.gain.setValueAtTime(0, time);
    gain1.gain.linearRampToValueAtTime(0.8, time + 0.02);
    gain1.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    
    osc1.start(time);
    osc1.stop(time + 0.15);

    // Second deep thump
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc2.frequency.setValueAtTime(120, time + 0.25);
    osc2.frequency.exponentialRampToValueAtTime(40, time + 0.4);
    gain2.gain.setValueAtTime(0, time + 0.25);
    gain2.gain.linearRampToValueAtTime(0.8, time + 0.27);
    gain2.gain.exponentialRampToValueAtTime(0.01, time + 0.45);

    osc2.start(time + 0.25);
    osc2.stop(time + 0.5);
  };

  const startHeartbeat = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e) {
       // Optional: e.preventDefault() if needed, but omitted to preserve scrolling
    }
    
    setIsHolding(true);
    pulse();

    intervalRef.current = window.setInterval(() => {
      pulse();
    }, 1200);
  };

  const stopHeartbeat = () => {
    setIsHolding(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const pulse = () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 150, 100]); 
    }
    try {
      playHeartbeatSound();
    } catch (err) {
      console.warn("Audio playback failed", err);
    }
  };

  // Clean up
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Connection" title="Heartbeat Sync" subtitle="Distance cannot stop what is meant to be felt." />

      <div className="mx-auto mt-16 flex flex-col items-center justify-center gap-8">
        <div className="relative">
          {/* Base Button */}
          <motion.div
            className={`relative z-10 grid h-32 w-32 cursor-pointer place-items-center rounded-full bg-gradient-to-br transition-colors duration-500 touch-none select-none ${isHolding ? 'from-rose-500 to-rose-700 shadow-[0_0_50px_rgba(244,63,94,0.6)]' : 'from-rose-900/40 to-black ring-1 ring-rose-500/30'}`}
            onMouseDown={startHeartbeat}
            onMouseUp={stopHeartbeat}
            onMouseLeave={stopHeartbeat}
            onTouchStart={startHeartbeat}
            onTouchEnd={stopHeartbeat}
            animate={isHolding ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } } : { scale: 1 }}
          >
             <HiHeart className={`h-12 w-12 transition-colors duration-300 ${isHolding ? 'text-white' : 'text-rose-500/50'}`} />
          </motion.div>

          {/* Glowing Ripple Effects when held */}
          <AnimatePresence>
            {isHolding && (
               <>
                <motion.div
                  initial={{ opacity: 0.6, scale: 1 }}
                  animate={{ opacity: 0, scale: 2.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 z-0 rounded-full bg-rose-500/40 pointer-events-none"
                />
                <motion.div
                  initial={{ opacity: 0.4, scale: 1 }}
                  animate={{ opacity: 0, scale: 3.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 z-0 rounded-full bg-rose-500/20 pointer-events-none"
                />
               </>
            )}
          </AnimatePresence>
        </div>

        <p className={`font-display text-lg md:text-xl transition-all duration-500 ${isHolding ? 'text-rose-200' : 'text-white/40'}`}>
          {isHolding ? "Feeling my heartbeat..." : "Press and hold to feel my heartbeat"}
        </p>

      </div>
      
      {/* Full screen dark red tint overlay when holding */}
      <AnimatePresence>
         {isHolding && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="pointer-events-none fixed inset-0 z-0 bg-rose-950/10 mix-blend-overlay transition-opacity duration-500"
           />
         )}
      </AnimatePresence>
    </section>
  );
}
