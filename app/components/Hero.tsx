'use client';

import { useState, useEffect, useRef } from 'react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile / touch device once on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(pointer: coarse)').matches ||
          window.innerWidth < 768
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setScrollProgress(0);
    setMediaFullyExpanded(false);
  }, []);

  // ─── Desktop: custom scroll-lock animation ────────────────────────────────
  useEffect(() => {
    if (isMobile) return; // skip on mobile – let native scroll handle it

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (mediaFullyExpanded && wheelEvent.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        return;
      } else if (!mediaFullyExpanded) {
        wheelEvent.preventDefault();
        const scrollDelta = wheelEvent.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
        }
      }
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress, mediaFullyExpanded, isMobile]);

  // ─── Calculate transform values based on scroll progress ─────────────────
  const textTranslateX = scrollProgress * 15;
  const contentOpacity = 1 - scrollProgress * 1.5;
  const contentScale = 1 - scrollProgress * 0.3;
  const contentBlur = scrollProgress * 10;

  const titleFirstWord = 'Forging a Legacy of';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-blue-deep"
      style={{
        backgroundImage: 'url(/bk0006.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#03112b]/80 via-blue-deep/60 to-[#122a55]/80 transition-opacity duration-100"
        style={{ opacity: isMobile ? 1 : 1 - scrollProgress * 0.8 }}
      />

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 z-1 bg-gradient-to-b from-blue-deep/20 via-blue-deep/40 to-blue-deep/60 transition-opacity duration-100"
        style={{ opacity: isMobile ? 1 : 1 - scrollProgress * 0.5 }}
      />

      {/* Particle Canvas */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-100"
        style={{ opacity: isMobile ? 1 : 1 - scrollProgress }}
      >
        <ParticleCanvas />
      </div>

      {/* Content */}
      <div
        className="hero-content relative z-[2] text-center max-w-[860px] px-8 transition-all duration-75"
        style={{
          opacity: isMobile ? 1 : Math.max(0, contentOpacity),
          transform: isMobile
            ? 'none'
            : `scale(${contentScale}) blur(${contentBlur}px)`,
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-eyebrow font-sans text-[11px] tracking-[0.35em] uppercase text-gold mb-3 mt-10 transition-transform duration-75"
          style={{
            transform: isMobile ? 'none' : `translateX(-${textTranslateX}vw)`,
          }}
        >
          Est. 2024 · Dubai, UAE
        </p>

        <h1
          className="hero-title font-serif font-light text-white mb-5 transition-transform duration-75"
          style={{
            fontSize: 'clamp(28px,6vw,54px)',
            lineHeight: 1.1,
            transform: isMobile ? 'none' : `translateX(-${textTranslateX}vw)`,
          }}
        >
          {titleFirstWord}
        </h1>

        <h1
          className="hero-title font-serif font-light text-white mb-5 transition-transform duration-75"
          style={{
            fontSize: 'clamp(28px,6vw,54px)',
            lineHeight: 1.1,
            transform: isMobile ? 'none' : `translateX(${textTranslateX}vw)`,
          }}
        >
          <em className="italic text-gold">Global Prosperity</em>
        </h1>

        <h1
          className="hero-title font-serif font-light text-white mb-5 transition-transform duration-75"
          style={{
            fontSize: 'clamp(28px,6vw,54px)',
            lineHeight: 1.1,
            transform: isMobile
              ? 'none'
              : `translateX(-${textTranslateX * 0.5}vw)`,
          }}
        >
          from the Heart of Dubai.
        </h1>

        <p
          className="hero-subtitle font-serif italic font-light text-white/70 mb-12 transition-transform duration-75"
          style={{
            fontSize: 'clamp(16px,2.2vw,22px)',
            transform: isMobile
              ? 'none'
              : `translateX(${textTranslateX * 0.7}vw)`,
          }}
        >
          Bridging Visionary Ambition with Exceptional Investment Opportunities.
        </p>

        {/* <div
          className="hero-actions flex gap-4 justify-center flex-wrap transition-transform duration-75"
          style={{
            transform: isMobile ? 'none' : `translateY(${scrollProgress * 100}px)`,
          }}
        >
          <a
            href="#services"
            className="inline-block py-[14px] px-10 bg-gold text-blue-deep text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm font-medium transition-all duration-300 hover:bg-gold-hover hover:-translate-y-[2px]"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-block py-[14px] px-10 border border-white/50 text-white text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white"
          >
            Start a Conversation
          </a>
          <a
            href="https://www.aixinvestment.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-[14px] px-10 border border-gold text-gold text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm transition-all duration-300 hover:bg-gold hover:text-blue-deep"
          >
            AIX Investment →
          </a>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] transition-opacity duration-100"
        style={{ opacity: isMobile ? 1 : 1 - scrollProgress * 3 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/80 to-transparent animate-scroll-pulse" />
      </div>

    </section>
  );
}
