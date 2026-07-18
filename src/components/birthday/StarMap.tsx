import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function StarMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background
    const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
    gradient.addColorStop(0, "oklch(0.15 0.10 280)"); // deep purple center
    gradient.addColorStop(1, "oklch(0.05 0.05 260)"); // nearly black edges
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw stars
    const numStars = 400;
    const stars: { x: number; y: number; size: number; opacity: number }[] = [];

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 1.5 + 0.5;
      const opacity = Math.random() * 0.8 + 0.2;
      stars.push({ x, y, size, opacity });

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    }

    // Draw some constellation lines
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    for (let i = 0; i < 30; i++) {
      const start = stars[Math.floor(Math.random() * numStars)];
      const end = stars[Math.floor(Math.random() * numStars)];
      const distance = Math.hypot(start.x - end.x, start.y - end.y);
      if (distance < 120) {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }
    }

    // Draw a subtle coordinate grid
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    for (let r = 50; r < width; r += 50) {
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Draw crosshair lines
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

  }, []);

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Written in the stars" title="The Night We Met" subtitle="September 14, 2025" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto mt-16 flex max-w-3xl flex-col items-center"
      >
        <div className="relative flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden rounded-full border border-white/20 p-2 shadow-[0_0_50px_rgba(139,92,246,0.3)] ring-1 ring-white/10 md:max-w-md">
          <canvas
            ref={canvasRef}
            width={800}
            height={800}
            className="h-full w-full rounded-full object-cover"
          />
          {/* Subtle overlay glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500/10 to-transparent mix-blend-overlay" />
        </div>

        <p className="mt-10 max-w-xl text-center font-display text-xl leading-relaxed text-rose-100/90 md:text-2xl">
          "The exact alignment of the stars on the night my world changed forever."
        </p>
        <p className="mt-4 font-script text-2xl text-rose-400 md:text-3xl">Badin & Islamabad</p>
      </motion.div>
    </section>
  );
}
