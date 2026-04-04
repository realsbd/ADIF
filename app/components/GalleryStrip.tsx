'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryItems = [
  { src: '/Photo/Forum 1.jpg',  alt: 'ADIF Forum',       caption: '3rd ADIF Forum' },
  { src: '/Photo/Forum 2.jpg',  alt: 'ADIF Forum Stage', caption: 'Forum Leadership' },
  { src: '/Photo/Racing 1.jpg', alt: 'AIX Racing',        caption: 'AIX Racing Sponsorship' },
  { src: '/Photo/Racing 2.jpg', alt: 'ADIF on Track',     caption: 'Brand on the Grid' },
  { src: '/Photo/CEO.jpg',      alt: 'Alexander Oi',      caption: 'CEO Alexander Oi' },
];

export default function GalleryStrip() {
  // ── Parallax ──────────────────────────────────────────────────────────────
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const headerY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const stripY  = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <div ref={sectionRef} id="gallery" className="bg-off-white py-20 overflow-hidden">

      {/* Header — drifts faster than the strip for depth */}
      <motion.div className="px-12 max-[900px]:px-6 mb-8" style={{ y: headerY }}>
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
          Presence &amp; Impact
        </span>
        <h3 className="font-serif font-light text-text-dark text-[32px]">
          ADIF in <em className="italic text-blue-mid">Action</em>
        </h3>
      </motion.div>

      {/* Scrollable strip — slight drift reinforces the parallax on section entry */}
      <motion.div
        id="galleryTrack"
        className="no-scrollbar flex gap-4 overflow-x-auto px-12 max-[900px]:px-6"
        style={{ y: stripY }}
      >
        {galleryItems.map(({ src, alt, caption }, i) => (
          <motion.div
            key={src}
            className="group flex-none w-[380px] max-[900px]:w-[280px] overflow-hidden rounded-sm relative"
            style={{ aspectRatio: '16/10' }}
            // Staggered entrance from below as section scrolls into view
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-blue-deep/80 to-transparent text-white text-[12px] tracking-[0.1em] uppercase translate-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {caption}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
