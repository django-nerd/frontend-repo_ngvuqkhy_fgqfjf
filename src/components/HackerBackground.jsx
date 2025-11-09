import { useEffect, useRef } from 'react';

// Simple Matrix-style code rain background on a canvas
export default function HackerBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 16);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-/<>[]{}';

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);

    const draw = () => {
      // Background fade for trailing effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.25)'; // slate-950 with alpha
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#22c55e'; // green-500
      ctx.font = '14px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 16;
        const y = drops[i] * 16;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -20);
        }
        drops[i]++;
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    // Prime background
    ctx.fillStyle = 'rgb(2, 6, 23)';
    ctx.fillRect(0, 0, width, height);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />
    </div>
  );
}
