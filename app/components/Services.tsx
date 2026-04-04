'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Precision Corporate Structuring',
    desc: 'Sophisticated legal and regulatory navigation for establishing a foothold in Dubai. From license acquisition to optimal legal structuring, we ensure your business is built for growth.',
  },
  {
    num: '02',
    title: 'Strategic Wealth & Banking Solutions',
    desc: 'We simplify the UAE banking journey, leveraging deep institutional relationships to facilitate seamless account opening and bespoke tax optimization.',
  },
  {
    num: '03',
    title: 'Curated Real Estate Portfolios',
    desc: 'Data-driven insights and exclusive access to off-plan and luxury properties, offering both in-person and high-definition virtual tours for our global clientele.',
  },
  {
    num: '04',
    title: 'Market Penetration & Local Partnerships',
    desc: 'Beyond capital, we provide the local intelligence and partnership matching necessary to ensure your brand resonates and leads in the Middle East.',
  },
];

export default function Services() {
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
  // No images — parallax the intro block and cards at slightly different speeds
  const introY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [-8,  8]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      id="services"
      className="py-[120px] max-[900px]:py-20 bg-white overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">

        {/* Intro — floats slightly faster than cards for depth illusion */}
        <motion.div style={{ y: introY }}>
          <div className="reveal max-w-[600px] mb-[72px]">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
              Excellence in Execution
            </span>

            <div className="relative mb-4">
              <motion.div
                className="font-serif font-light text-text-dark"
                style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <motion.span variants={letterVariants}>W</motion.span>
                <motion.span variants={letterVariants}>o</motion.span>
                <motion.span variants={letterVariants}>r</motion.span>
                <motion.span variants={letterVariants}>l</motion.span>
                <motion.span variants={letterVariants}>d</motion.span>
                <motion.span variants={letterVariants}>-</motion.span>
                <motion.span variants={letterVariants}>C</motion.span>
                <motion.span variants={letterVariants}>l</motion.span>
                <motion.span variants={letterVariants}>a</motion.span>
                <motion.span variants={letterVariants}>s</motion.span>
                <motion.span variants={letterVariants}>s</motion.span>
                <motion.span variants={letterVariants}>&nbsp;</motion.span>
                <motion.span variants={letterVariants}>E</motion.span>
                <motion.span variants={letterVariants}>x</motion.span>
                <motion.span variants={letterVariants}>p</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>r</motion.span>
                <motion.span variants={letterVariants}>t</motion.span>
                <motion.span variants={letterVariants}>i</motion.span>
                <motion.span variants={letterVariants}>s</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>&nbsp;</motion.span>
                <motion.span variants={letterVariants}>f</motion.span>
                <motion.span variants={letterVariants}>o</motion.span>
                <motion.span variants={letterVariants}>r</motion.span>
                <motion.span variants={letterVariants}><br /></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">Y</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">o</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">u</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">r</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">&nbsp;</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">G</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">l</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">o</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">b</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">a</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">l</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">&nbsp;</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">S</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">u</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">c</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">c</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">e</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">s</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">s</em></motion.span>
                <motion.span variants={letterVariants}><em className="italic text-blue-mid">.</em></motion.span>
              </motion.div>

              <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold via-blue-mid to-gold"
              />
            </div>

            <p className="text-[16px] leading-[1.8] text-text-muted mt-4">
              From corporate structuring to real estate portfolios — every service is engineered for precision, performance, and lasting value.
            </p>
          </div>
        </motion.div>

        {/* Cards grid — slightly slower parallax creates layered depth with intro */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2px] bg-black/[0.06]"
          style={{ y: cardsY }}
        >
          {services.map(({ num, title, desc }) => (
            <div
              key={num}
              className="service-card relative bg-white px-11 py-12 overflow-hidden transition-colors duration-300 hover:bg-blue-pale cursor-default"
            >
              <div className="font-serif text-[48px] font-light leading-none mb-5 text-black/[0.06] transition-colors duration-300">
                {num}
              </div>
              <div className="font-serif text-[22px] font-normal text-text-dark mb-[14px]">{title}</div>
              <div className="text-[14px] leading-[1.8] text-text-muted">{desc}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
