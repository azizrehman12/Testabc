import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { getMoonPhase, MoonData, MoonPhase } from "@/lib/moon";

const MOON_MEANINGS: Record<MoonPhase, { meaning: string; prediction: string; symbol: string }> = {
  "New Moon": {
    symbol: "🌑",
    meaning: "A new beginning, full of infinite potential and quiet magic.",
    prediction: "Your love is a universe still being born — every day adds new stars to your shared sky.",
  },
  "Waxing Crescent": {
    symbol: "🌒",
    meaning: "A seed of intention, a soul stepping into the light with quiet courage.",
    prediction: "Your story is still growing, reaching toward something more beautiful than words can hold.",
  },
  "First Quarter": {
    symbol: "🌓",
    meaning: "A spirit of strength and decisive action, halfway to their full brilliance.",
    prediction: "The best chapters of your love are being written now — and they are extraordinary.",
  },
  "Waxing Gibbous": {
    symbol: "🌔",
    meaning: "A soul almost overflowing with light, refining and perfecting their gifts.",
    prediction: "Everything you are building together is on the edge of becoming magnificent.",
  },
  "Full Moon": {
    symbol: "🌕",
    meaning: "A soul born at peak brilliance — luminous, magnetic, and impossible to ignore.",
    prediction: "You were destined to meet. Two full souls, shining at the same frequency across the miles.",
  },
  "Waning Gibbous": {
    symbol: "🌖",
    meaning: "A generous and wise soul, radiating wisdom and warmth to everyone around them.",
    prediction: "The love you share will only deepen with time — ripening like the moon after its peak.",
  },
  "Last Quarter": {
    symbol: "🌗",
    meaning: "A soul of deep reflection and quiet transformation, releasing what no longer serves.",
    prediction: "Your love is a safe harbor — a place where both of you can become your truest selves.",
  },
  "Waning Crescent": {
    symbol: "🌘",
    meaning: "A dreamer and healer, carrying the wisdom of a thousand quiet nights.",
    prediction: "You found each other in the in-between — and that is where the most magical things live.",
  },
};

interface MoonVisualProps {
  data: MoonData;
  label: string;
  dateStr: string;
  delay?: number;
}

function renderMoonShadow(phase: number) {
  const rx = Math.abs(Math.cos(phase * Math.PI * 2)) * 50;
  const isCrescent = phase < 0.25 || phase > 0.75;

  if (phase < 0.03 || phase > 0.97) return null; // New Moon – fully dark, no path needed
  if (phase > 0.47 && phase < 0.53) return null;  // Full Moon – fully lit

  if (phase < 0.5) {
    if (isCrescent) {
      return <path d={`M 50 0 A 50 50 0 0 0 50 100 A ${rx} 50 0 0 0 50 0`} fill="rgba(10,10,15,0.9)" />;
    } else {
      return <path d={`M 50 0 A 50 50 0 0 0 50 100 A ${rx} 50 0 0 1 50 0`} fill="rgba(10,10,15,0.9)" />;
    }
  } else {
    if (isCrescent) {
      return <path d={`M 50 0 A 50 50 0 0 1 50 100 A ${rx} 50 0 0 1 50 0`} fill="rgba(10,10,15,0.9)" />;
    } else {
      return <path d={`M 50 0 A 50 50 0 0 1 50 100 A ${rx} 50 0 0 0 50 0`} fill="rgba(10,10,15,0.9)" />;
    }
  }
}

function MoonVisual({ data, label, dateStr, delay = 0 }: MoonVisualProps) {
  const info = MOON_MEANINGS[data.phaseName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      className="flex flex-col items-center gap-6 text-center w-full max-w-[300px]"
    >
      {/* Moon Visual */}
      <div
        className={`relative h-44 w-44 md:h-52 md:w-52 rounded-full overflow-hidden ring-1 ring-white/20 group cursor-pointer
          ${data.phaseName === "New Moon" ? "bg-zinc-900 shadow-[0_0_40px_rgba(255,255,255,0.05)]" : "bg-white shadow-[0_0_60px_rgba(255,255,255,0.25)]"}`}
      >
        {data.phaseName !== "New Moon" && (
          <div
            className="absolute inset-0 bg-zinc-200 bg-cover mix-blend-luminosity opacity-90 transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80')" }}
          />
        )}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-90">
          {renderMoonShadow(data.phaseValue)}
        </svg>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/10 to-transparent mix-blend-overlay" />
      </div>

      {/* Phase Name + Label */}
      <div className="glass px-6 py-5 rounded-2xl w-full flex flex-col gap-2">
        <p className="text-2xl">{info.symbol}</p>
        <h3 className="font-display text-xl md:text-2xl text-rose-100">{label}</h3>
        <p className="font-script text-xl text-rose-300">{dateStr}</p>
        <div className="h-px w-full bg-white/10 my-1" />
        <p className="text-xs uppercase tracking-[0.2em] text-violet-300 font-semibold">{data.phaseName}</p>
      </div>

      {/* Meaning */}
      <div className="glass px-6 py-4 rounded-2xl w-full text-left flex flex-col gap-3">
        <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">What it means</p>
        <p className="text-sm text-rose-100/80 leading-relaxed italic">"{info.meaning}"</p>
        <div className="h-px w-full bg-white/10" />
        <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">What it predicts</p>
        <p className="text-sm text-violet-200/90 leading-relaxed">"{info.prediction}"</p>
      </div>
    </motion.div>
  );
}

export function MoonPhases() {
  const herMoon = getMoonPhase(new Date("2006-07-19T12:00:00"));
  const hisMoon = getMoonPhase(new Date("2003-12-31T12:00:00"));
  const metMoon = getMoonPhase(new Date("2025-09-14T12:00:00"));

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading
        eyebrow="Celestial Alignment"
        title="Written in the Moon"
        subtitle="Three moons. Three dates. One universe that conspired to bring us together."
      />

      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-center gap-12 md:flex-row md:items-start md:gap-8 lg:gap-10">
        <MoonVisual data={herMoon} label="The Day You Were Born" dateStr="July 19, 2006" delay={0} />
        <MoonVisual data={metMoon} label="The Night We Met" dateStr="September 14, 2025" delay={0.2} />
        <MoonVisual data={hisMoon} label="The Day I Was Born" dateStr="December 31, 2003" delay={0.4} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mx-auto mt-20 max-w-2xl text-center font-script text-2xl text-rose-200/80 md:text-3xl leading-relaxed"
      >
        "The universe does not make mistakes. Every moon, every star, every quiet night was leading us here."
      </motion.p>
    </section>
  );
}
