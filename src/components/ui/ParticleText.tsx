"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
  delay: number;
  color: string;
}

interface ParticleTextProps {
  text: string;
  className?: string;
  particleColor?: string;
  particleSize?: number;
  gap?: number;
  mouseRadius?: number;
}

export function ParticleText({
  text,
  className = "",
  particleColor = "rgba(255, 255, 255, 0.9)",
  particleSize = 2,
  gap = 4,
  mouseRadius = 80,
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();

      // 1:1 pixel ratio — no DPR scaling, avoids transform accumulation bugs
      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.clearRect(0, 0, rect.width, rect.height);

      let fontSize = Math.min(rect.width * 0.2, rect.height * 0.3, 160);
      ctx.font = `700 ${fontSize}px "Oswald", sans-serif`;

      const measured = ctx.measureText(text);
      if (measured.width > rect.width * 0.85) {
        fontSize *= (rect.width * 0.85) / measured.width;
        ctx.font = `700 ${fontSize}px "Oswald", sans-serif`;
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      ctx.fillText(text, rect.width / 2, rect.height / 2);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const particles: Particle[] = [];

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          if (data[index + 3] > 30) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 150;
            particles.push({
              x: x + Math.cos(angle) * distance,
              y: y + Math.sin(angle) * distance,
              targetX: x,
              targetY: y,
              originX: x,
              originY: y,
              size: particleSize,
              alpha: 0,
              vx: 0,
              vy: 0,
              delay: Math.random() * 800,
              color: particleColor,
            });
          }
        }
      }

      ctx.clearRect(0, 0, rect.width, rect.height);
      particlesRef.current = particles;
      startTimeRef.current = performance.now();
    },
    [text, particleColor, particleSize, gap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initParticles(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const handleResize = () => {
      initParticles(canvas);
    };

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const elapsed = now - startTimeRef.current;

      ctx.clearRect(0, 0, rect.width, rect.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const progress = Math.max(0, Math.min(1, (elapsed - p.delay) / 1200));
        const ease = 1 - Math.pow(1 - progress, 3);

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.vx += ((dx / dist) * force * 25) * 0.08;
          p.vy += ((dy / dist) * force * 25) * 0.08;
        }

        p.vx += (p.targetX - p.x) * 0.04;
        p.vy += (p.targetY - p.y) * 0.04;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        if (progress < 1) {
          const scatterX = p.originX + Math.cos(p.delay) * 300;
          const scatterY = p.originY + Math.sin(p.delay) * 300;
          p.x = scatterX + (p.targetX - scatterX) * ease;
          p.y = scatterY + (p.targetY - scatterY) * ease;
        }

        if (progress >= 1) {
          p.x += Math.sin(now * 0.001 + i * 0.1) * 0.5;
          p.y += Math.cos(now * 0.0008 + i * 0.15) * 0.5;
        }

        p.alpha = ease;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles, mouseRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
      aria-label={text}
      role="img"
    />
  );
}
