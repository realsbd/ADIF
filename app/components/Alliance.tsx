export default function Alliance() {
  return (
    <section id="alliance" className="py-[120px] max-[900px]:py-20 bg-blue-deep relative overflow-hidden">
      {/* Huge background watermark text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-light text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: 240 }}
        aria-hidden
      >
        AIX
      </div>

      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6 relative z-[2]">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-center">

          {/* Text */}
          <div className="reveal-left">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
              Strategic Alliance
            </span>
            <h2 className="font-serif font-light text-white mb-6" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}>
              Powered by<br />
              <em className="italic text-gold">AIX Investment Group.</em>
            </h2>
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
            {/* HQ tag */}
            <div className="mt-8 py-5 px-7 border border-gold/25 inline-block">
              <p className="text-[12px] tracking-[0.1em] uppercase text-white/50">Headquarters</p>
              <strong className="block font-serif text-[18px] font-normal text-white mt-1">Dubai · Zurich</strong>
            </div>
          </div>

          {/* Photo grid */}
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

        </div>
      </div>
    </section>
  );
}
