import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-blue-deep"
    >
      {/* Dubai background animation */}
      <div
        className="absolute inset-0 z-0 bg-[url('/dubai.jpeg')] bg-cover bg-center bg-repeat-x animate-scroll-left"
        style={{
          backgroundSize: 'auto 100vh',
        }}
      />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-blue-deep/20 via-blue-deep/40 to-blue-deep/60" />

      {/* Content */}
      <div className="hero-content relative z-[2] text-center max-w-[860px] px-8">
        <p className="hero-eyebrow font-sans text-[11px] tracking-[0.35em] uppercase text-gold mb-3 mt-10">
          Est. 2024 · Dubai, UAE
        </p>
        <h1 className="hero-title font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(42px,6vw,76px)', lineHeight: 1.1 }}>
          Forging a Legacy of<br />
          <em className="italic text-gold">Global Prosperity</em><br />
          from the Heart of Dubai.
        </h1>
        <p className="hero-subtitle font-serif italic font-light text-white/70 mb-12" style={{ fontSize: 'clamp(16px,2.2vw,22px)' }}>
          Bridging Visionary Ambition with Exceptional Investment Opportunities.
        </p>
        <div className="hero-actions flex gap-4 justify-center flex-wrap">
          <a href="#services" className="inline-block py-[14px] px-10 bg-gold text-blue-deep text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm font-medium transition-all duration-300 hover:bg-gold-hover hover:-translate-y-[2px]">
            Our Services
          </a>
          <a href="#contact" className="inline-block py-[14px] px-10 border border-white/50 text-white text-[12px] tracking-[0.15em] uppercase no-underline rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white">
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px]">
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/80 to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
