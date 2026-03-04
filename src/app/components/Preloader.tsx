import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Count from 0 to 100 over ~1.8s
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(100);
        // Pause at 100 then exit
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-neutral-950 flex flex-col items-center justify-center transition-all duration-700 ${
        leaving ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Logo */}
      <div className="text-4xl tracking-[0.3em] font-semibold mb-16 overflow-hidden">
        <span
          className={`block transition-all duration-700 delay-200 ${
            leaving ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          CREATIVE
        </span>
      </div>

      {/* Counter */}
      <div className="relative w-64">
        <div className="flex justify-between text-xs text-neutral-600 mb-2">
          <span>Loading</span>
          <span className="text-amber-400 tabular-nums">{count}%</span>
        </div>
        {/* Progress bar */}
        <div className="h-px bg-neutral-800 w-full">
          <div
            className="h-full bg-amber-400 transition-none"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </div>
  );
}
