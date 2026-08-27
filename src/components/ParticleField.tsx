import { useEffect, useRef } from 'react';
import { useThemeContext } from '@/context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isPixel } = useThemeContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = isPixel
      ? ['#00ff41', '#39ff14', '#00e436', '#0eff6b']
      : ['#06b6d4', '#7c3aed', '#d946ef', '#38bdf8'];
    const particles: Particle[] = [];
    let animationId: number;
    let frameCount = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: isPixel ? Math.floor(Math.random() * 3 + 2) : Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    resize();
    for (let i = 0; i < 60; i++) {
      particles.push(createParticle());
    }

    const draw = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const shouldMove = isPixel ? frameCount % 4 === 0 : true;

      particles.forEach((p) => {
        if (shouldMove) {
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;

        if (isPixel) {
          const s = p.size;
          const px = Math.round(p.x / s) * s;
          const py = Math.round(p.y / s) * s;
          ctx.fillRect(px, py, s, s);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.strokeStyle = isPixel ? '#00ff41' : '#06b6d4';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = isPixel ? 1 : 0.5;

            if (isPixel) {
              const x1 = Math.round(p1.x);
              const y1 = Math.round(p1.y);
              const x2 = Math.round(p2.x);
              const y2 = Math.round(p2.y);
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            } else {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isPixel]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
