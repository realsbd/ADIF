'use client';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={[
        'mobile-nav',
        'fixed inset-0 z-[99] bg-blue-deep flex flex-col items-center justify-center gap-8',
        'translate-x-full transition-transform duration-[400ms] ease-[ease]',
        open ? 'open' : '',
      ].join(' ')}
      id="mobileNav"
    >
      {/* Logo at top of mobile menu */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo_adif.PNG"
        alt="ADIF GROUP"
        className="h-14 mb-4"
      />

      {[['#hero','Home'],['#philosophy','Philosophy'],['#services','Services'],['#alliance','Alliance'],['#contact','Contact']].map(([href,label]) => (
        <a
          key={href}
          href={href}
          onClick={onClose}
          className="font-serif text-[32px] font-light text-white no-underline tracking-[0.05em] hover:text-gold transition-colors duration-300"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
