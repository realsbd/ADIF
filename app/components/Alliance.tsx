'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Alliance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
  };
  const lineVariants = {
    hidden: { width: '0%', left: '50%' },
    visible: { width: '100%', left: '0%', transition: { delay: 1.5, duration: 0.8, ease: 'easeOut' } },
  };

  // ── Parallax ──────────────────────────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const textY       = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const photoGridY  = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  // Watermark drifts at a different speed for extra depth
  const watermarkY  = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      id="alliance"
      className="py-[120px] max-[900px]:py-20 bg-blue-deep overflow-hidden relative"
    >
      {/* Huge background watermark — drifts slowly */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-light text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: 240, y: watermarkY }}
        aria-hidden
      >
        AIX
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6 relative z-[2]">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-center">

          {/* Text */}
          <motion.div style={{ y: textY }}>
            <div className="reveal-left">
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
                Strategic Alliance
              </span>

              <div className="relative mb-6">
                <motion.div
                  className="font-serif font-light text-white"
                  style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <motion.span variants={letterVariants}>P</motion.span>
                  <motion.span variants={letterVariants}>o</motion.span>
                  <motion.span variants={letterVariants}>w</motion.span>
                  <motion.span variants={letterVariants}>e</motion.span>
                  <motion.span variants={letterVariants}>r</motion.span>
                  <motion.span variants={letterVariants}>e</motion.span>
                  <motion.span variants={letterVariants}>d</motion.span>
                  <motion.span variants={letterVariants}>&nbsp;</motion.span>
                  <motion.span variants={letterVariants}>b</motion.span>
                  <motion.span variants={letterVariants}>y</motion.span>
                  <motion.span variants={letterVariants}><br /></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">A</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">I</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">X</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">&nbsp;</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">I</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">n</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">v</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">e</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">s</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">t</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">m</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">e</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">n</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">t</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">&nbsp;</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">G</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">r</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">o</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">u</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">p</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-gold">.</em></motion.span>
                </motion.div>

                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold via-blue-mid to-gold"
                />
              </div>

              <p className="text-[16px] leading-[1.85] text-white/60 mb-5">
                Our operational excellence is bolstered by our strategic partnership with AIX Investment Group.
                With over a decade of proven financial leadership and a dual-headquarter presence in Dubai and
                Zurich, AIX provides the institutional weight and high-performance investment vehicles that
                define the ADIF advantage.
              </p>
              <p className="text-[16px] leading-[1.85] text-white/60 mb-5">
                Together, we bring Swiss precision and Dubai&apos;s dynamic growth to the global market,
                offering a level of security and performance that sets a new industry standard.
              </p>
              <div className="mt-8 py-5 px-7 border border-gold/25 inline-block">
                <p className="text-[12px] tracking-[0.1em] uppercase text-white/50">Headquarters</p>
                <strong className="block font-serif text-[18px] font-normal text-white mt-1">Dubai · Zurich</strong>
              </div>
            </div>
          </motion.div>

          {/* Photo grid — drifts at a deeper speed than text */}
          <motion.div style={{ y: photoGridY }}>
            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-3">
                <div className="row-span-2 overflow-hidden rounded-sm group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Photo/Forum 2.jpg" alt="ADIF Forum" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Photo/Racing 1.jpg" alt="ADIF Racing Sponsorship" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Photo/Racing 2.jpg" alt="AIX Investment Group" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
