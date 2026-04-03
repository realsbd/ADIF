'use client';

import { motion } from "framer-motion"

export default function Philosophy() {
  // Animation variants for the text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  const lineVariants = {
    hidden: {
      width: "0%",
      left: "50%"
    },
    visible: {
      width: "100%",
      left: "0%",
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="philosophy" className="py-[120px] max-[900px]:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-center">

          {/* Text */}
          <div className="reveal-left">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Genesis
            </span>

            {/* Animated H2 */}
            <div className="relative mb-6">
              <motion.div
                className="font-serif font-light text-text-dark"
                style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.span variants={letterVariants}>A</motion.span>
                <motion.span variants={letterVariants}>&nbsp;</motion.span>
                <motion.span variants={letterVariants}>M</motion.span>
                <motion.span variants={letterVariants}>o</motion.span>
                <motion.span variants={letterVariants}>v</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>m</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>n</motion.span>
                <motion.span variants={letterVariants}>t</motion.span>
                <motion.span variants={letterVariants}>&nbsp;</motion.span>
                <motion.span variants={letterVariants}>B</motion.span>
                <motion.span variants={letterVariants}>o</motion.span>
                <motion.span variants={letterVariants}>r</motion.span>
                <motion.span variants={letterVariants}>n</motion.span>
                <motion.span variants={letterVariants}><br /></motion.span>
                <motion.span variants={letterVariants}>o</motion.span>
                <motion.span variants={letterVariants}>f</motion.span>
                <motion.span variants={letterVariants}>&nbsp;</motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">C</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">o</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">n</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">v</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">i</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">c</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">t</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">i</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">o</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">n</em>
                </motion.span>
                <motion.span variants={letterVariants}>
                  <em className="italic text-blue-mid">.</em>
                </motion.span>
              </motion.div>

              {/* Animated underline */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold via-blue-mid to-gold"
              />
            </div>

            <blockquote className="font-serif italic text-[22px] text-blue-mid border-l-2 border-gold pl-6 my-8 leading-[1.5]">
              &ldquo;Investment can change the world.&rdquo;
            </blockquote>
            <p className="text-[16px] leading-[1.85] text-text-muted mb-5">
              In January 2024, a group of dedicated comrades united by a singular belief formed ADIF GROUP.
              Our corporate philosophy, &ldquo;World Peace and Prosperity,&rdquo; is our operational blueprint.
            </p>
            <p className="text-[16px] leading-[1.85] text-text-muted mb-5">
              By delivering high-performance financial products to our customers, robust business frameworks
              to our agents, and sustainable economic growth to society, we are paving the path toward a
              future where global peace is anchored in shared economic success.
            </p>
          </div>

          {/* Visual */}
          <div className="philosophy-visual reveal-right relative overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Photo/Forum 1.jpg" alt="ADIF Forum" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
