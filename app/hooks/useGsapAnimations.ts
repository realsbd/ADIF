'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: {
      registerPlugin: (...args: unknown[]) => void;
      to: (target: unknown, vars: unknown) => unknown;
      from: (target: unknown, vars: unknown) => unknown;
      utils: { toArray: (selector: string) => unknown[] };
    };
    ScrollTrigger?: unknown;
  }
}

export function useGsapAnimations() {
  useEffect(() => {
    const tryInit = () => {
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        initAnimations();
      } else {
        setTimeout(tryInit, 50);
      }
    };
    tryInit();
  }, []);
}

function initAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  // Nav logo fade in
  gsap.to('.nav-logo', { opacity: 1, duration: 0.8, delay: 0.2 });

  // Hero content stagger
  gsap.to('.hero-eyebrow',  { opacity: 1, y: 0, duration: 1,   ease: 'power3.out', delay: 0.1 });
  gsap.to('.hero-title',    { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.3 });
  gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1,   ease: 'power3.out', delay: 0.55 });
  gsap.to('.hero-actions',  { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.75 });
  gsap.to('.hero-scroll',   { opacity: 1, duration: 0.8, delay: 1.2 });

  // Scroll reveals
  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  document.querySelectorAll('.reveal-left').forEach((el) => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
    });
  });

  document.querySelectorAll('.reveal-right').forEach((el) => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
    });
  });

  // Stagger service cards
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card as Element, {
      opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: (i as number) * 0.1,
      scrollTrigger: { trigger: card as Element, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // Hero parallax on scroll
  gsap.to('.hero-content', {
    y: 80, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  // NOTE: Nav scroll behaviour is now handled in Navbar.tsx via React useState
}
