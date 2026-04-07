'use client';

import { useState, useCallback, useEffect } from 'react';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  const light = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = useCallback(() => setMobileOpen((v) => !v), []);
  const close  = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <MobileNav open={mobileOpen} onClose={close} />

      <nav
        id="mainNav"
        className={[
          'fixed top-0 left-0 right-0 z-[100] px-12 h-[72px] flex items-center justify-between',
          'transition-all duration-[400ms]',
          light
            ? 'bg-white/[0.92] backdrop-blur-[16px] shadow-[0_1px_0_rgba(0,0,0,0.07)]'
            : '',
        ].join(' ')}
      >
        {/* Logo — links back to homepage */}
        <a href="/" aria-label="ADIF GROUP — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="nav-logo h-12 transition-all duration-[400ms]"
            src={light ? '/logo.avif' : '/logo_adif.PNG'}
            alt="ADIF GROUP"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none">
          {[
            ['/#philosophy', 'Philosophy'],
            ['/#ceo',        'Leadership'],
            ['/#services',   'Services'],
            ['/#alliance',   'Alliance'],
            ['/blog',        'Insights'],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className={[
                  'text-[13px] tracking-[0.08em] uppercase no-underline transition-colors duration-300',
                  light ? 'text-text-dark hover:text-blue-light' : 'text-white/85 hover:text-gold',
                ].join(' ')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/#contact"
          className={[
            'hidden md:inline-block text-[12px] tracking-[0.1em] uppercase py-[10px] px-6 rounded-sm transition-all duration-300 no-underline',
            light
              ? 'border border-blue-mid text-blue-mid hover:bg-blue-mid hover:text-white'
              : 'border border-white/50 text-white hover:bg-white/[0.12] hover:border-white',
          ].join(' ')}
        >
          Get in Touch
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${light ? 'bg-text-dark' : 'bg-white'}`} />
          <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${light ? 'bg-text-dark' : 'bg-white'}`} />
          <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${light ? 'bg-text-dark' : 'bg-white'}`} />
        </button>
      </nav>
    </>
  );
}
