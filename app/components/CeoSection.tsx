'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CeoSection() {
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
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY  = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      id="ceo"
      className="py-[120px] max-[900px]:py-20 bg-off-white overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-center">

          {/* Photo */}
          <div
            className="ceo-photo reveal-left relative overflow-hidden rounded-sm"
            style={{ aspectRatio: '4/5' }}
          >
            <motion.div className="w-full h-full" style={{ y: imageY, scale: 1.15 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Photo/CEO.jpg"
                alt="Alexander Oi — CEO, ADIF GROUP"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>

          {/* Text */}
          <motion.div style={{ y: textY }}>
            <div className="reveal-right">
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
                Leadership
              </span>

              <div className="relative mb-6">
                <motion.div
                  className="font-serif font-light text-text-dark"
                  style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <motion.span variants={letterVariants}>T</motion.span>
                  <motion.span variants={letterVariants}>r</motion.span>
                  <motion.span variants={letterVariants}>a</motion.span>
                  <motion.span variants={letterVariants}>n</motion.span>
                  <motion.span variants={letterVariants}>s</motion.span>
                  <motion.span variants={letterVariants}>f</motion.span>
                  <motion.span variants={letterVariants}>o</motion.span>
                  <motion.span variants={letterVariants}>r</motion.span>
                  <motion.span variants={letterVariants}>m</motion.span>
                  <motion.span variants={letterVariants}>i</motion.span>
                  <motion.span variants={letterVariants}>n</motion.span>
                  <motion.span variants={letterVariants}>g</motion.span>
                  <motion.span variants={letterVariants}>&nbsp;</motion.span>
                  <motion.span variants={letterVariants}>G</motion.span>
                  <motion.span variants={letterVariants}>l</motion.span>
                  <motion.span variants={letterVariants}>o</motion.span>
                  <motion.span variants={letterVariants}>b</motion.span>
                  <motion.span variants={letterVariants}>a</motion.span>
                  <motion.span variants={letterVariants}>l</motion.span>
                  <motion.span variants={letterVariants}><br /></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">P</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">e</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">r</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">s</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">p</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">e</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">c</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">t</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">i</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">v</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">e</em></motion.span>
                  <motion.span variants={letterVariants}><em className="italic text-blue-mid">s</em></motion.span>
                </motion.div>

                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold via-blue-mid to-gold"
                />
              </div>

              <p className="text-[16px] leading-[1.85] text-text-muted mb-5">
                My journey began in Ukraine and has traversed the globe, a path that allowed me to master
                six languages — English, Japanese, Spanish, Russian, Ukrainian, and Arabic.
              </p>
              <p className="text-[16px] leading-[1.85] text-text-muted mb-5">
                While my travels enriched my cultural understanding, they also exposed me to the stark
                reality of the &ldquo;opportunity gap.&rdquo; I saw firsthand how a lack of financial
                literacy creates a cycle of inequality.
              </p>
              <p className="text-[16px] leading-[1.85] text-text-muted mb-5">
                I established ADIF to be the antidote to this disparity. Our mission is to democratize
                financial success by bringing the world&apos;s best investment solutions, including the
                renowned AIX funds, to a global audience.
              </p>

              <div className="mt-9 pt-7 border-t border-black/[0.08]">
                <div className="font-serif text-[22px] text-text-dark">Alexander Oi</div>
                <div className="text-[12px] tracking-[0.15em] uppercase text-gold mt-1">CEO, ADIF GROUP</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
