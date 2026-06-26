import { useMemo } from "react";

/**
 * Ambient particle field: aurora glows, twinkling stars, drifting petals & hearts.
 * Pure CSS-driven for buttery 60fps; no React state churn.
 */
export function ParticleField({ density = 1 }: { density?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: Math.floor(60 * density) }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
      })),
    [density],
  );

  const petals = useMemo(
    () =>
      Array.from({ length: Math.floor(18 * density) }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 18,
        hue: ["#f9c8d4", "#f4a7b9", "#e8b4d4", "#d4a5c9"][i % 4],
      })),
    [density],
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: Math.floor(10 * density) }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 25,
        duration: 22 + Math.random() * 14,
        size: 14 + Math.random() * 14,
      })),
    [density],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Aurora glows */}
      <div
        className="absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.16 18 / 0.35), transparent 70%)",
          animation: "aurora 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[55vmax] w-[55vmax] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.10 300 / 0.35), transparent 70%)",
          animation: "aurora 18s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.86 0.14 85 / 0.22), transparent 70%)",
          animation: "aurora 22s ease-in-out infinite",
        }}
      />

      {/* Stars */}
      {stars.map((s) => (
        <span
          key={`s-${s.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: `0 0 ${s.size * 3}px oklch(1 0 0 / 0.7)`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Petals */}
      {petals.map((p) => (
        <span
          key={`p-${p.id}`}
          className="absolute bottom-0 rounded-[50%_20%_50%_20%]"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 0.7,
            background: `radial-gradient(circle at 30% 30%, ${p.hue}, transparent 80%)`,
            opacity: 0.7,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Hearts */}
      {hearts.map((h) => (
        <span
          key={`h-${h.id}`}
          className="absolute bottom-0 text-rose-300/70"
          style={{
            left: `${h.x}%`,
            fontSize: h.size,
            animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
            filter: "drop-shadow(0 0 6px oklch(0.78 0.16 18 / 0.7))",
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}