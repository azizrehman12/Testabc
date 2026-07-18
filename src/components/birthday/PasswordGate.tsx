import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { HiLockClosed, HiLockOpen } from "react-icons/hi2";
import { triggerMusicPlay } from "./MusicPlayer";

const ANSWERS = ["happybithdaymahmoona", "happybirthdaymahmoona"];
const normalize = (v: string) => v.toLowerCase().replace(/\s+/g, "").trim();

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [unlocking, setUnlocking] = useState(false);
  const controls = useAnimationControls();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ANSWERS.includes(normalize(value))) {
      triggerMusicPlay();
      setUnlocking(true);
      setError(null);
      setTimeout(onUnlock, 1800);
    } else {
      setError("That's not our secret.");
      controls.start({ x: [0, -12, 12, -10, 10, -6, 6, 0], transition: { duration: 0.6 } });
    }
  };

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
      <motion.form
        onSubmit={submit}
        animate={controls}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="glass relative w-full max-w-md rounded-3xl p-10 text-center"
      >
        <motion.div
          animate={{ rotate: unlocking ? [0, -12, 0] : 0, scale: unlocking ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1.4 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, oklch(0.86 0.14 35), oklch(0.78 0.16 18))",
            boxShadow: "0 20px 50px -10px oklch(0.78 0.16 20 / 0.6)",
          }}
        >
          {unlocking ? <HiLockOpen className="h-9 w-9 text-white" /> : <HiLockClosed className="h-9 w-9 text-white" />}
        </motion.div>

        <h2 className="font-display text-3xl text-rose-gradient">A Little Secret</h2>
        <p className="mt-2 text-sm text-white/70">Whisper the password only we know.</p>

        <input
          autoFocus
          type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(null); }}
          placeholder="Enter Our Secret Password ❤"
          className="mt-6 w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-white placeholder-white/50 outline-none transition focus:border-rose/60 focus:bg-white/10"
          aria-label="Secret password"
        />

        {error && (
          <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-rose-300">
            💔 Oops ❤ {error}
          </motion.p>
        )}

        <button type="submit" className="btn-luxury mt-7 w-full text-sm uppercase tracking-[0.25em]">
          {unlocking ? "Opening…" : "Unlock"}
        </button>

        <p className="mt-5 text-xs text-white/40">Hint: a wish, then the words I call you</p>
      </motion.form>
    </div>
  );
}