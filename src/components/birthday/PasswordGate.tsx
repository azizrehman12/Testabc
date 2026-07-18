import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { HiLockClosed, HiLockOpen } from "react-icons/hi2";

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
          animate={{ rotate: unlocking ? [0, -12, 0] : 0, scale: unlocking ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1.4 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, oklch(0.65 0.25 10), oklch(0.40 0.20 15))",
            boxShadow: "0 20px 50px -10px oklch(0.55 0.25 10 / 0.8), inset 0 2px 0 oklch(1 0 0 / 0.4)",
            border: "1px solid oklch(0.80 0.18 80 / 0.3)"
          }}
        >
          {unlocking ? <HiLockOpen className="h-10 w-10 text-rose-100" /> : <HiLockClosed className="h-10 w-10 text-rose-100" />}
        </motion.div>

        <h2 className="font-display text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-rose-200 drop-shadow-sm">A Little Secret</h2>
        <p className="mt-3 text-sm text-rose-100/70 font-light tracking-wide">Whisper the password only we know.</p>

        <input
          autoFocus
          type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(null); }}
          placeholder="Enter Our Secret Password ❤"
          className="mt-8 w-full rounded-full border border-rose-500/30 bg-rose-950/20 px-6 py-4 text-center text-rose-50 placeholder-rose-200/40 outline-none transition-all focus:border-rose-400/60 focus:bg-rose-950/40 focus:ring-4 focus:ring-rose-500/10"
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