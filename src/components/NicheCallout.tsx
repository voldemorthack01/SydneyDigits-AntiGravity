'use client';

import { useEffect, useRef } from 'react';

const niches = [
  {
    id: 'niche-detailers',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Auto Detailers',
    stat: '3x More Bookings',
    description:
      'We know detailing. From paint correction to full details — we build systems that keep your bays full and your phone ringing.',
  },
  {
    id: 'niche-ceramic',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Ceramic Coaters',
    stat: '5x Review Growth',
    description:
      'High-ticket ceramic jobs need high-trust clients. We position you as the premium choice in your area with reviews and ads that convert.',
  },
  {
    id: 'niche-trades',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local Trades',
    stat: '2x Revenue Growth',
    description:
      'Mechanics, plumbers, electricians — if you serve locals, we get you found. We build the online presence that turns Google searches into jobs.',
  },
];

export default function NicheCallout() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.niche-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-8');
                card.classList.add('opacity-100', 'translate-y-0');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="niche"
      className="relative py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flare/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-steel/30 via-transparent to-steel/30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-flare text-sm font-bold uppercase tracking-widest font-barlow">
            Who We Help
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 font-barlow uppercase tracking-tight">
            Built for Businesses
            <br />
            <span className="text-flare">Like Yours</span>
          </h2>
          <p className="max-w-xl mx-auto text-mist/60 mt-4 font-inter">
            We don&apos;t do &quot;one size fits all.&quot; We specialise in industries where
            local reputation and visibility drive real revenue.
          </p>
        </div>

        {/* Niche Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {niches.map((niche) => (
            <div
              key={niche.id}
              id={niche.id}
              className="niche-card opacity-0 translate-y-8 transition-all duration-700 ease-out group relative text-center p-8 rounded-2xl border border-white/5 bg-gunmetal/50 hover:border-flare/30 hover:bg-steel/40"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-flare/10 border border-flare/20 flex items-center justify-center text-flare mb-5 group-hover:scale-110 transition-transform duration-300">
                {niche.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white font-barlow uppercase tracking-wide mb-2">
                {niche.title}
              </h3>

              {/* Stat Badge */}
              <span className="inline-block text-flare text-sm font-bold font-barlow uppercase tracking-wider mb-4">
                ↑ {niche.stat}
              </span>

              {/* Description */}
              <p className="text-mist/60 text-sm leading-relaxed font-inter">
                {niche.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            id="niche-cta"
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-3 bg-flare text-white text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] uppercase tracking-wider font-barlow"
          >
            Let&apos;s Grow Your Business
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
