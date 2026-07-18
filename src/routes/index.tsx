import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { OpeningGate } from "@/components/birthday/OpeningGate";
import { PasswordGate } from "@/components/birthday/PasswordGate";
import { ParticleField } from "@/components/birthday/Particles";
import { Experience } from "@/components/birthday/Experience";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Surprise For You ❤" },
      { name: "description", content: "A private, cinematic birthday surprise — made with love." },
      { name: "theme-color", content: "#1a0a18" },
      { property: "og:title", content: "A Surprise For You ❤" },
      { property: "og:description", content: "A private, cinematic birthday surprise — made with love." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  type Stage = "opening" | "password" | "experience";
  const [stage, setStage] = useState<Stage>("opening");

  // Persist unlock so a refresh doesn't restart the cinematic gate.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bday:unlocked") === "1") setStage("experience");
    else if (sessionStorage.getItem("bday:begun") === "1") setStage("password");
  }, []);

  const begin = () => {
    sessionStorage.setItem("bday:begun", "1");
    setStage("password");
  };

  const unlock = () => {
    sessionStorage.setItem("bday:unlocked", "1");
    setStage("experience");
  };

  const logout = () => {
    sessionStorage.removeItem("bday:unlocked");
    sessionStorage.removeItem("bday:begun");
    setStage("opening");
  };

  return (
    <div className="relative min-h-screen">
      {stage !== "opening" && <ParticleField density={stage === "experience" ? 1.2 : 0.7} />}

      <AnimatePresence mode="wait">
        {stage === "opening" && <OpeningGate key="opening" onBegin={begin} />}
        {stage === "password" && (
          <motion.div key="password" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <PasswordGate onUnlock={unlock} />
          </motion.div>
        )}
        {stage === "experience" && (
          <motion.div key="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <Experience />
          </motion.div>
        )}
      </AnimatePresence>

      {stage === "experience" && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={logout}
          className="fixed top-6 right-24 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-all hover:bg-white/20 hover:text-white active:scale-95"
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <HiArrowRightOnRectangle className="h-4 w-4" />
          <span>Logout</span>
        </motion.button>
      )}
    </div>
  );
}
