export default function Contact() {
  return (
    <section id="contact" className="py-[120px] max-[900px]:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-start">

          {/* Info */}
          <div className="reveal-left">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif font-light text-text-dark mb-9" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}>
              Experience the Future<br />of <em className="italic text-blue-mid">Investment.</em>
            </h2>
            <p className="text-[16px] leading-[1.8] text-text-muted mb-10">
              Ready to elevate your portfolio or expand your business horizons? Contact our specialist team today.
            </p>

            {/* Location */}
            <div className="flex gap-5 mb-7 items-start">
              <div className="w-10 h-10 flex-shrink-0 border border-black/10 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 fill-blue-mid" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.08em] uppercase text-text-muted mb-1">Office Location</p>
                <span className="text-[15px] text-text-dark">AL ZAHRAA TECHNOCENTRE 101, AL Raffa, Dubai, UAE</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 mb-7 items-start">
              <div className="w-10 h-10 flex-shrink-0 border border-black/10 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 fill-blue-mid" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.08em] uppercase text-text-muted mb-1">Email</p>
                <a href="mailto:support@adif-g.ae" className="text-[15px] text-text-dark no-underline hover:text-blue-light transition-colors duration-300">
                  support@adif-g.ae
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right bg-off-white p-12 max-[480px]:p-5 rounded-sm">
            <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-4 mb-0">
              <div className="mb-5">
                <label className="block text-[11px] tracking-[0.15em] uppercase text-text-muted mb-2">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full py-[14px] px-4 border border-black/10 rounded-sm font-sans text-[14px] text-text-dark bg-white outline-none transition-colors duration-300 focus:border-blue-mid" />
              </div>
              <div className="mb-5">
                <label className="block text-[11px] tracking-[0.15em] uppercase text-text-muted mb-2">Company</label>
                <input type="text" placeholder="Company name" className="w-full py-[14px] px-4 border border-black/10 rounded-sm font-sans text-[14px] text-text-dark bg-white outline-none transition-colors duration-300 focus:border-blue-mid" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[11px] tracking-[0.15em] uppercase text-text-muted mb-2">Email Address</label>
              <input type="email" placeholder="your@email.com" className="w-full py-[14px] px-4 border border-black/10 rounded-sm font-sans text-[14px] text-text-dark bg-white outline-none transition-colors duration-300 focus:border-blue-mid" />
            </div>
            <div className="mb-5">
              <label className="block text-[11px] tracking-[0.15em] uppercase text-text-muted mb-2">Inquiry</label>
              <textarea
                placeholder="Tell us how we can help…"
                className="w-full py-[14px] px-4 border border-black/10 rounded-sm font-sans text-[14px] text-text-dark bg-white outline-none transition-colors duration-300 focus:border-blue-mid resize-y min-h-[120px]"
              />
            </div>
            <button
              type="button"
              className="w-full py-4 bg-blue-deep text-white border-none rounded-sm font-sans text-[12px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 hover:bg-blue-mid"
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
