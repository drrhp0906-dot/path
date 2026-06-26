"use client";

import { useEffect, useRef } from "react";

/**
 * StarfieldBackground — animated cosmic background.
 * Renders a fixed-position <canvas> with drifting stars, slow nebula
 * gradients, and occasional shooting stars. Sits behind all content
 * (pointer-events: none, z-index: -10).
 */
interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
  hue: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = [
  { h: 45 }, // gold
  { h: 280 }, // magenta/violet
  { h: 160 }, // emerald
  { h: 200 }, // cyan
  { h: 0 },   // white
];

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Build stars — density scales with viewport area, capped for perf.
    const starCount = Math.min(180, Math.max(60, Math.floor((width * height) / 14000)));
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const c = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.2,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.004,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        hue: c.h,
      };
    });

    const shootingStars: ShootingStar[] = [];
    let nextShoot = Math.random() * 6000 + 3000;

    let last = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      ctx.clearRect(0, 0, width, height);

      // Soft nebula gradients (re-painted each frame for depth)
      const grad1 = ctx.createRadialGradient(
        width * 0.8,
        height * -0.1,
        0,
        width * 0.8,
        height * -0.1,
        Math.max(width, height) * 0.6
      );
      grad1.addColorStop(0, "rgba(217, 70, 239, 0.10)");
      grad1.addColorStop(1, "rgba(217, 70, 239, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * -0.05,
        height * 0.2,
        0,
        width * -0.05,
        height * 0.2,
        Math.max(width, height) * 0.55
      );
      grad2.addColorStop(0, "rgba(251, 191, 36, 0.08)");
      grad2.addColorStop(1, "rgba(251, 191, 36, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Stars
      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
        const alpha = s.baseAlpha * (0.55 + 0.45 * Math.sin(s.twinklePhase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle =
          s.hue === 0
            ? `rgba(255, 255, 255, ${alpha})`
            : `hsla(${s.hue}, 90%, 70%, ${alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor =
          s.hue === 0
            ? `rgba(255, 255, 255, ${alpha * 0.8})`
            : `hsla(${s.hue}, 90%, 70%, ${alpha * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Shooting stars
      nextShoot -= dt;
      if (nextShoot <= 0) {
        nextShoot = Math.random() * 8000 + 4000;
        shootingStars.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.3,
          len: Math.random() * 140 + 80,
          speed: Math.random() * 4 + 4,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
          life: 0,
          maxLife: 800,
        });
      }
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.life += dt;
        sh.x += Math.cos(sh.angle) * sh.speed * (dt / 16);
        sh.y += Math.sin(sh.angle) * sh.speed * (dt / 16);
        const t = sh.life / sh.maxLife;
        const alpha = Math.max(0, 1 - t);
        const tx = sh.x - Math.cos(sh.angle) * sh.len;
        const ty = sh.y - Math.sin(sh.angle) * sh.len;
        const g = ctx.createLinearGradient(sh.x, sh.y, tx, ty);
        g.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        g.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        if (sh.life >= sh.maxLife || sh.x > width + 100 || sh.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background: "transparent" }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
