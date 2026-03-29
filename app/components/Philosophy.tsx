export default function Philosophy() {
  return (
    <section id="philosophy" className="py-[120px] max-[900px]:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-center">

          {/* Text */}
          <div className="reveal-left">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Genesis
            </span>
            <h2 className="font-serif font-light text-text-dark mb-6" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}>
              A Movement Born<br />of <em className="italic text-blue-mid">Conviction.</em>
            </h2>
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
