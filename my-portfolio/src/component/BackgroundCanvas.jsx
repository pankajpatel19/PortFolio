import React, { useEffect, useRef } from "react";

/**
 * AuroraBackground — A full-screen canvas that renders:
 *  1. A base dark gradient
 *  2. Animated floating color aurora orbs (cyan, purple, violet, indigo, teal)
 *  3. A twinkling star field
 *  4. A mouse-reactive particle mesh on top
 */
const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: null, y: null };

    // ─── Aurora orbs ──────────────────────────────────────────────────────────
    const orbs = [
      { ox: 0.15, oy: 0.3, r: 380, color: [6, 182, 212], speed: 0.00022, phase: 0, dx: 110, dy: 80 },     // cyan
      { ox: 0.8,  oy: 0.15, r: 420, color: [168, 85, 247], speed: 0.00018, phase: 2.1, dx: 130, dy: 90 },  // purple
      { ox: 0.5,  oy: 0.75, r: 340, color: [99, 102, 241], speed: 0.00025, phase: 4.2, dx: 100, dy: 70 },  // indigo
      { ox: 0.05, oy: 0.7,  r: 290, color: [20, 184, 166], speed: 0.00030, phase: 1.5, dx: 90, dy: 60 },   // teal
      { ox: 0.88, oy: 0.65, r: 360, color: [139, 92, 246], speed: 0.00020, phase: 3.8, dx: 120, dy: 85 },  // violet
      { ox: 0.45, oy: 0.1,  r: 310, color: [59, 130, 246], speed: 0.00028, phase: 5.5, dx: 95, dy: 65 },   // blue
    ];

    // ─── Star field ────────────────────────────────────────────────────────────
    const STAR_COUNT = 160;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.004 + 0.001,
    }));

    // ─── Particle mesh ─────────────────────────────────────────────────────────
    const PARTICLE_COUNT = Math.min(55, Math.floor((width * height) / 22000));
    const CONNECTION_DIST = 115;

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.8 + 0.7;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const f = (140 - dist) / 140;
            this.x += (dx / dist) * f * 0.4;
            this.y += (dy / dist) * f * 0.4;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148, 226, 255, 0.55)";
        ctx.fill();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    // ─── Event listeners ───────────────────────────────────────────────────────
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = null; mouse.y = null; };
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    // ─── Main render loop ──────────────────────────────────────────────────────
    const draw = () => {
      const now = Date.now();

      // 1. Base: deep dark gradient
      const base = ctx.createLinearGradient(0, 0, 0, height);
      base.addColorStop(0, "#020617");    // slate-950
      base.addColorStop(0.5, "#030b1a"); // near-black blue tint
      base.addColorStop(1, "#050311");   // near-black purple tint
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      // 2. Aurora orbs — layered additive blending
      ctx.globalCompositeOperation = "lighter";
      orbs.forEach((orb) => {
        const cx = orb.ox * width  + Math.sin(now * orb.speed + orb.phase) * orb.dx;
        const cy = orb.oy * height + Math.cos(now * orb.speed * 0.75 + orb.phase) * orb.dy;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        grad.addColorStop(0,   `rgba(${orb.color.join(",")}, 0.14)`);
        grad.addColorStop(0.4, `rgba(${orb.color.join(",")}, 0.05)`);
        grad.addColorStop(1,   `rgba(${orb.color.join(",")}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });
      ctx.globalCompositeOperation = "source-over";

      // 3. Subtle horizontal aurora wave strip (top-center)
      const waveGrad = ctx.createLinearGradient(0, 0, width, height * 0.4);
      waveGrad.addColorStop(0,   "rgba(6, 182, 212, 0.03)");
      waveGrad.addColorStop(0.3, "rgba(168, 85, 247, 0.04)");
      waveGrad.addColorStop(0.6, "rgba(99, 102, 241, 0.03)");
      waveGrad.addColorStop(1,   "rgba(20, 184, 166, 0.02)");
      ctx.fillStyle = waveGrad;
      ctx.fillRect(0, 0, width, height * 0.45);

      // 4. Star field with twinkle
      stars.forEach((s) => {
        const twinkle = (Math.sin(now * s.speed + s.phase) + 1) / 2; // 0→1
        const alpha = s.alpha * (0.4 + twinkle * 0.6);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${alpha})`;
        ctx.fill();
      });

      // 5. Particle mesh
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(148, 226, 255, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 6. Fine grid overlay
      ctx.strokeStyle = "rgba(255,255,255,0.018)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -10 }}
    />
  );
};

export default BackgroundCanvas;
