'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FeatureCard } from '@/components/ui/feature-card';

// ── inline SVG icons ─────────────────────────────────────────────────────────
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

// ── data ──────────────────────────────────────────────────────────────────────
const stats = [
  {
    icon: <UsersIcon />,
    title: '2000+ Satisfied Clients',
    description: 'A growing community of investors who trust ADIF to deliver consistent, world-class results.',
  },
  {
    icon: <TrendingUpIcon />,
    title: '2.98% Avg Conversion Rate',
    description: 'Industry-leading performance driven by data-informed strategy and precision execution.',
  },
  {
    icon: <BriefcaseIcon />,
    title: '150+ Projects Delivered',
    description: 'From early-stage ventures to landmark developments — delivered on time, on vision.',
  },
  {
    icon: <ClockIcon />,
    title: '24/7 Support Availability',
    description: 'Our dedicated team is always on hand, ensuring every client receives uninterrupted guidance.',
  },
];

// ── animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

// ── component ─────────────────────────────────────────────────────────────────
export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger animation once when 20 % of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6"
      style={{
        background: 'linear-gradient(to bottom, #03112b, #031836 50%, #122a55)',
      }}
    >
      {/* Section heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
          By the Numbers
        </p>
        <h2 className="font-serif font-light text-white text-3xl md:text-4xl">
          Trusted Performance, Proven Results
        </h2>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <FeatureCard
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle floating particles (preserved from original) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 rounded-full bg-gold/20 top-[20%] left-[10%] animate-pulse" />
        <div className="absolute w-1 h-1 rounded-full bg-gold/30 top-[60%] left-[80%] animate-pulse [animation-delay:400ms]" />
        <div className="absolute w-3 h-3 rounded-full bg-blue-light/10 top-[30%] left-[50%] animate-pulse [animation-delay:800ms]" />
      </div>
    </section>
  );
}
