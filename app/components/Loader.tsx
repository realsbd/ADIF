'use client';

import { useEffect, useRef } from 'react';
import { useGsapAnimations } from '@/app/hooks/useGsapAnimations';

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef    = useRef<HTMLDivElement>(null);
  const logoRef   = useRef<HTMLImageElement>(null);
  const labelRef  = useRef<HTMLDivElement>(null);

  useGsapAnimations();

  useEffect(() => {
    const loader = loaderRef.current;
    const bar    = barRef.current;
    const logo   = logoRef.current;
    const label  = labelRef.current;
    if (!loader || !bar || !logo || !label) return;

    let progress = 0;
    const words = ['Initialising', 'Loading Assets', 'Building Experience', 'Almost Ready'];
    let wi = 0;

    setTimeout(() => {
      logo.style.transition = 'opacity 0.8s';
      logo.style.opacity = '1';
    }, 200);

    const interval = setInterval(() => {
      progress += Math.random() * 8 + 4;
      if (progress >= 100) { progress = 100; clearInterval(interval); }
      bar.style.width = progress + '%';
      if (progress > wi * 25 + 20 && wi < words.length - 1) {
        wi++;
        label.textContent = words[wi];
      }
      if (progress >= 100) {
        setTimeout(() => {
          loader.style.transition = 'opacity 0.7s ease';
          loader.style.opacity = '0';
          setTimeout(() => { loader.style.display = 'none'; }, 700);
        }, 400);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="loader"
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-blue-deep flex flex-col items-center justify-center gap-8"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="loader-logo"
        ref={logoRef}
        src="/logo.avif"
        alt="ADIF GROUP"
        className="w-[220px] opacity-0"
      />
      {/* Progress bar */}
      <div className="w-[180px] h-px bg-white/[0.15]">
        <div
          id="loader-bar"
          ref={barRef}
          className="h-px w-0 bg-gold transition-[width] duration-[50ms] linear"
        />
      </div>
      <div
        id="loader-label"
        ref={labelRef}
        className="font-sans text-[11px] tracking-[0.25em] text-white/45 uppercase"
      >
        Initialising
      </div>
    </div>
  );
}
