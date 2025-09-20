// src/components/ConfettiBurst.tsx
import confetti, { CreateTypes } from 'canvas-confetti';
import { useEffect, useRef } from 'react';

type Props = {
  /** si true dispara solo al montar */
  autoFire?: boolean;
  /** duración total de la ráfaga en ms */
  duration?: number;
};

export default function ConfettiBurst({ autoFire = true, duration = 1200 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<CreateTypes | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true, // adapta al viewport
      useWorker: false, // deshabilitado para evitar el error de transferControlToOffscreen
    });
    confettiRef.current = myConfetti;

    let raf = 0;
    let start: number | null = null;

    const shoot = (t: number) => {
      if (start === null) start = t;
      const elapsed = t - start;
      const progress = elapsed / duration;

      // 2 chorros laterales + partículas sueltas
      myConfetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.2 },
        scalar: 1.1,
        ticks: 200,
        colors: ['#6D4AFF', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'],
      });
      myConfetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.2 },
        scalar: 1.1,
        ticks: 200,
        colors: ['#6D4AFF', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'],
      });
      myConfetti({
        particleCount: 3,
        spread: 360,
        startVelocity: 35,
        origin: { x: 0.5, y: 0.25 },
        scalar: 0.9,
      });

      if (progress < 1) {
        raf = requestAnimationFrame(shoot);
      }
    };

    if (autoFire) raf = requestAnimationFrame(shoot);

    return () => {
      cancelAnimationFrame(raf);
      // limpiar canvas y resetear confetti
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
      // resetear la referencia de confetti
      confettiRef.current = null;
    };
  }, [autoFire, duration]);

  return (
    <div className='pointer-events-none fixed inset-0 z-50'>
      <canvas ref={canvasRef} className='w-full h-full' />
    </div>
  );
}
