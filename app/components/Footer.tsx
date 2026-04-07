export default function Footer() {
  return (
    <footer className="bg-blue-deep py-10 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
        <div className="flex items-center justify-between flex-wrap gap-5 max-[900px]:flex-col max-[900px]:text-center">

          {/* Logo — hidden on mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo_adif.PNG"
            alt="ADIF GROUP"
            className="h-7 opacity-60"
            style={{ filter: 'brightness(0) invert(1)' }}
          />

          {/* Nav links — order-1 on mobile so they appear above copyright */}
          <div className="flex flex-wrap justify-center gap-7 max-[900px]:order-1">
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

          {/* Copyright — order-2 on mobile so it appears below links */}
          <p className="text-[12px] text-white/35 tracking-[0.05em] max-[900px]:order-2">
            © 2026 ADIF GROUP. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
