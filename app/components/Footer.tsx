export default function Footer() {
  return (
    <footer className="bg-blue-deep py-10 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
        <div className="flex items-center justify-between flex-wrap gap-5 max-[900px]:flex-col max-[900px]:text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo_adif.png"
            alt="ADIF GROUP"
            className="h-7 opacity-60"
            style={{ filter: 'brightness(0) invert(1)' }}
            // increase size of the logo
          />
          <p className="text-[12px] text-white/35 tracking-[0.05em]">
            © 2026 ADIF GROUP. All Rights Reserved.
          </p>
          <div className="flex gap-7">
            {[['#philosophy','Philosophy'],['#services','Services'],['#alliance','Alliance'],['#contact','Contact']].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[11px] tracking-[0.1em] uppercase text-white/35 no-underline transition-colors duration-300 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
