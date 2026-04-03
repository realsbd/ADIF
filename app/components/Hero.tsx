'use client';

import { useState, useEffect, useRef } from 'react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setMediaFullyExpanded(false);
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let isScrolling = false;

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

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent;
      touchStartY = touchEvent.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e: Event) => {
      const touchEvent = e as TouchEvent;
      if (!touchEvent.touches[0]) return;

      const touchY = touchEvent.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        return;
      } else if (!mediaFullyExpanded) {
        touchEvent.preventDefault();

        // Only handle if this is a significant vertical scroll
        if (Math.abs(deltaY) > 10 && !isScrolling) {
          isScrolling = true;
        }

        if (isScrolling) {
          const scrollDelta = deltaY * 0.001;
          const newProgress = Math.min(
            Math.max(scrollProgress + scrollDelta, 0),
            1
          );
          setScrollProgress(newProgress);

          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
          }
        }
      }
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('wheel', handleWheel, {
        passive: false,
      });
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [scrollProgress, mediaFullyExpanded]);

  // Calculate transform values based on scroll progress
  const textTranslateX = scrollProgress * 15; // 0 to 15vw
  const contentOpacity = 1 - scrollProgress * 1.5;
  const contentScale = 1 - scrollProgress * 0.3;
  const contentBlur = scrollProgress * 10;

  // Title words for split animation
  const titleFirstWord = 'Forging a Legacy of';
  const titleRest = 'a Legacy of Global Prosperity from the Heart of Dubai.';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-blue-deep"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#03112b] via-blue-deep to-[#122a55] transition-opacity duration-100"
        style={{ opacity: 1 - scrollProgress * 0.8 }}
      />

      {/* Dark vignette overlay */}
      <div 
        className="absolute inset-0 z-1 bg-gradient-to-b from-blue-deep/20 via-blue-deep/40 to-blue-deep/60 transition-opacity duration-100"
        style={{ opacity: 1 - scrollProgress * 0.5 }}
      />

      {/* Particle Canvas */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-100"
        style={{ opacity: 1 - scrollProgress }}
      >
        <ParticleCanvas />
      </div>

      {/* Content with scroll-based transformations */}
      <div 
        className="hero-content relative z-[2] text-center max-w-[860px] px-8 transition-all duration-75"
        style={{ 
          opacity: Math.max(0, contentOpacity),
          transform: `scale(${contentScale}) blur(${contentBlur}px)`,
        }}
      >
        {/* First word slides from left */}
        <p 
          className="hero-eyebrow font-sans text-[11px] tracking-[0.35em] uppercase text-gold mb-3 mt-10 transition-transform duration-75"
          style={{ transform: `translateX(-${textTranslateX}vw)` }}
        >
          Est. 2024 · Dubai, UAE
        </p>
        
        <h1 
          className="hero-title font-serif font-light text-white mb-5 transition-transform duration-75"
          style={{ 
            fontSize: 'clamp(42px,6vw,76px)', 
            lineHeight: 1.1,
            transform: `translateX(-${textTranslateX}vw)` 
          }}
        >
          {titleFirstWord}
        </h1>
        
        <h1 
          className="hero-title font-serif font-light text-white mb-5 transition-transform duration-75"
          style={{ 
            fontSize: 'clamp(42px,6vw,76px)', 
            lineHeight: 1.1,
            transform: `translateX(${textTranslateX}vw)` 
          }}
        >
          <em className="italic text-gold">Global Prosperity</em>
        </h1>

        <h1 
          className="hero-title font-serif font-light text-white mb-5 transition-transform duration-75"
          style={{ 
            fontSize: 'clamp(42px,6vw,76px)', 
            lineHeight: 1.1,
            transform: `translateX(-${textTranslateX * 0.5}vw)` 
          }}
        >
          from the Heart of Dubai.
        </h1>
        
        <p 
          className="hero-subtitle font-serif italic font-light text-white/70 mb-12 transition-transform duration-75"
          style={{ 
            fontSize: 'clamp(16px,2.2vw,22px)',
            transform: `translateX(${textTranslateX * 0.7}vw)` 
          }}
        >
          Bridging Visionary Ambition with Exceptional Investment Opportunities.
        </p>
        
        <div 
          className="hero-actions flex gap-4 justify-center flex-wrap transition-transform duration-75"
          style={{ transform: `translateY(${scrollProgress * 100}px)` }}
        >
          <a href="#services" className="inline-block py-[14px] px-10 bg-gold text-blue-deep text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm font-medium transition-all duration-300 hover:bg-gold-hover hover:-translate-y-[2px]">
            Our Services
          </a>
          <a href="#contact" className="inline-block py-[14px] px-10 border border-white/50 text-white text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white">
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Scroll indicator with fade out on scroll */}
      <div 
        className="hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] transition-opacity duration-100"
        style={{ opacity: 1 - scrollProgress * 3 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/80 to-transparent animate-scroll-pulse" />
      </div>

      {/* Expanded content area that appears when fully scrolled */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        style={{ 
          opacity: scrollProgress >= 0.9 ? 1 : 0,
          pointerEvents: scrollProgress >= 0.9 ? 'auto' : 'none',
        }}
      >
        <div className="text-center">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            style={{ transform: `translateX(${scrollProgress >= 0.9 ? 0 : 20}px)` }}
          >
            Welcome to ADIF
          </h2>
          <p className="text-xl text-white/70 max-w-2xl">
            Your gateway to exceptional investment opportunities in Dubai and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
