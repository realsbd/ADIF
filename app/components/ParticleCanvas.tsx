'use client';

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let animId: number;

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      x = 0; y = 0; size = 0; speedX = 0; speedY = 0; alpha = 0; life = 0; maxLife = 0;

      constructor() { this.reset(); }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.2 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.2 - 0.15;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.life = 0;
        this.maxLife = Math.random() * 400 + 200;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        if (this.y < -5 || this.life > this.maxLife) this.reset();
      }

      draw() {
        if (!ctx) return;
        const t = this.life / this.maxLife;
        const a = this.alpha * (t < 0.1 ? t / 0.1 : t > 0.85 ? (1 - t) / 0.15 : 1);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${a})`;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      const p = new Particle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}
