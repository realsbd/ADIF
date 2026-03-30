'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const statsBarRef = useRef<HTMLDivElement>(null);

  const stats = [
    { num: '2000', suffix: '+', label: 'Satisfied clients' },
    { num: '2.98', suffix: '%', label: 'Avg conversion rate' },
    { num: '150', suffix: '+', label: 'Projects delivered' },
    { num: '24/7', suffix: '', label: 'Support availability' },
  ];

  useEffect(() => {
    // Intersection Observer for reveal animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsBarRef.current) {
      observer.observe(statsBarRef.current);
    }

    return () => {
      if (statsBarRef.current) {
        observer.unobserve(statsBarRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsBarRef.current) return;
      
      const rect = statsBarRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on position in viewport
      const startPoint = windowHeight * 0.7;
      const progress = Math.min(
        Math.max((startPoint - rect.top) / startPoint, 0),
        1
      );
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={statsBarRef}
      className="relative px-4"
      style={{
        // Same background as Hero
        background: 'linear-gradient(to bottom, #03112b, #031836 50%, #122a55)',
        // Floating effect with transform and shadow based on scroll
        transform: `translateY(${scrollProgress * 20}px) scale(${1 - scrollProgress * 0.05})`,
        filter: `blur(${scrollProgress * 2}px)`,
      }}
    >
      {/* Floating container - now with transparent cards inside gradient background */}
      <div 
        className="relative max-w-[1200px] mx-auto px-6 md:px-12 rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          transform: `translateY(${isVisible ? 0 : 50}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-4 md:gap-6">
          {stats.map(({ num, suffix, label }, index) => (
            <div 
              key={label} 
              className="stat-item py-8 px-6 md:px-10 text-center rounded-xl transition-all duration-700 hover:bg-white/5"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div 
                className="font-serif text-[48px] font-light text-white leading-none mb-2 transition-transform duration-500"
                style={{
                  transform: `scale(${isVisible ? 1 : 0.8})`,
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                }}
              >
                {num}
                {suffix && <span className="text-[28px] text-gold">{suffix}</span>}
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div 
          className="absolute w-2 h-2 bg-gold/20 rounded-full transition-all duration-1000"
          style={{
            left: '10%',
            top: '20%',
            transform: `translateY(${scrollProgress * -50}px)`,
            opacity: isVisible ? 1 : 0,
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-gold/30 rounded-full transition-all duration-1000"
          style={{
            left: '80%',
            top: '60%',
            transform: `translateY(${scrollProgress * -30}px)`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms',
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-blue-400/10 rounded-full transition-all duration-1000"
          style={{
            left: '50%',
            top: '30%',
            transform: `translateY(${scrollProgress * -40}px)`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: '400ms',
          }}
        />
      </div>
    </div>
  );
}
