export default function StatsBar() {
  const stats = [
    { num: '10', suffix: '+', label: 'Years AIX Excellence' },
    { num: '6',  suffix: '',  label: 'Languages Spoken' },
    { num: '2',  suffix: '',  label: 'Global HQ Locations' },
    { num: '2024', suffix: '', label: 'Year Established' },
  ];

  return (
    <div className="bg-blue-deep py-14">
      <div className="max-w-[1200px] mx-auto px-12">
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-px bg-white/[0.08]">
          {stats.map(({ num, suffix, label }) => (
            <div key={label} className="reveal stat-item py-8 px-10 bg-blue-deep text-center">
              <div className="font-serif text-[48px] font-light text-white leading-none mb-2">
                {num}
                {suffix && <span className="text-[28px] text-gold">{suffix}</span>}
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/45">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
