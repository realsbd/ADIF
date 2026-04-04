'use client';

import { useEffect, useRef } from 'react';
import { useGsapAnimations } from '@/app/hooks/useGsapAnimations';

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef    = useRef<HTMLDivElement>(null);
  const logoRef   = useRef<HTMLImageElement>(null);
  const labelRef  = useRef<HTMLDivElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);

  useGsapAnimations();

  useEffect(() => {
    const loader = loaderRef.current;
    const bar    = barRef.current;
    const logo   = logoRef.current;
    const label  = labelRef.current;
    const video  = videoRef.current;
    if (!loader || !bar || !logo || !label || !video) return;

    let progress = 0;
    const words = ['Initialising', 'Loading Assets', 'Building Experience', 'Almost Ready'];
    let wi = 0;

    setTimeout(() => {
      logo.style.transition = 'opacity 0.8s';
      logo.style.opacity = '1';
    }, 200);

    const interval = setInterval(() => {
      progress += Math.random() * 8 + 4;
      if (progress >= 100) { 
        progress = 100; 
        clearInterval(interval);
        // Do not hide yet, wait for video to end
      }
      bar.style.width = progress + '%';
      if (progress > wi * 25 + 20 && wi < words.length - 1) {
        wi++;
        label.textContent = words[wi];
      }
    }, 80);

    // Wait for video to end before hiding loader
    video.addEventListener('ended', () => {
      loader.style.transition = 'opacity 0.7s ease';
      loader.style.opacity = '0';
      setTimeout(() => { loader.style.display = 'none'; }, 700);
      // Move video to hero
      const hero = document.getElementById('hero');
      if (hero && video) {
        hero.appendChild(video);
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.zIndex = '-1';
        video.loop = true; // Loop in hero
      }
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="loader"
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-blue-deep flex flex-col items-center justify-center gap-8"
    >
      <video
        ref={videoRef}
        src="/BURJ FINAL REN.mp4"
        autoPlay
        muted
        loop={false}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      ></video>
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
