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
  return (
    <section id="services" className="py-[120px] max-[900px]:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">

        {/* Intro */}
        <div className="reveal max-w-[600px] mb-[72px]">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block">
            Excellence in Execution
          </span>
          <h2 className="font-serif font-light text-text-dark mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.15 }}>
            World-Class Expertise for<br /><em className="italic text-blue-mid">Your Global Success.</em>
          </h2>
          <p className="text-[16px] leading-[1.8] text-text-muted mt-4">
            From corporate structuring to real estate portfolios — every service is engineered for precision, performance, and lasting value.
          </p>
        </div>

        {/* Cards grid — gap-px on dark background creates subtle divider lines */}
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[2px] bg-black/[0.06]">
          {services.map(({ num, title, desc }) => (
            <div
              key={num}
              className="service-card reveal relative bg-white px-11 py-12 overflow-hidden transition-colors duration-300 hover:bg-blue-pale cursor-default"
            >
              <div className="font-serif text-[48px] font-light leading-none mb-5 text-black/[0.06] transition-colors duration-300">
                {num}
              </div>
              <div className="font-serif text-[22px] font-normal text-text-dark mb-[14px]">{title}</div>
              <div className="text-[14px] leading-[1.8] text-text-muted">{desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
