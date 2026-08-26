'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    id: 'service-websites',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'High-Converting Websites',
    description:
      'Your website is your digital storefront. We build fast, modern sites designed to turn every click into a booking. No templates — custom-built for your business.',
    features: ['Mobile-First Design', 'Speed Optimised', 'Booking Integration'],
  },
  {
    id: 'service-ads',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Google & Meta Ads',
    description:
      'Stop wasting money on ads that don\'t convert. We build targeted campaigns that put your business in front of local customers who are ready to buy — right now.',
    features: ['Targeted Local Traffic', 'Guaranteed Leads', 'Transparent Reporting'],
  },
  {
    id: 'service-nfc',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'NFC Google Review Plates',
    description:
      'Tap. Review. Done. Our custom NFC plates let your happy customers leave a 5-star Google review instantly — no typing, no searching. Watch your reputation skyrocket.',
    features: ['Tap-to-Review Tech', 'Instant 5-Star Boost', 'Custom Branded Plates'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-8');
                card.classList.add('opacity-100', 'translate-y-0');
              }, i * 150);
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

  return (
    <section id="services" className="relative py-24 lg:py-32" ref={sectionRef}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-flare text-sm font-bold uppercase tracking-widest font-barlow">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 font-barlow uppercase tracking-tight">
            Everything You Need to
            <br />
            <span className="text-flare">Win Locally</span>
          </h2>
          <p className="max-w-xl mx-auto text-mist/60 mt-4 font-inter">
            Three core services. One goal — fill your calendar with paying clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-out group relative bg-steel/50 border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-flare/10 hover:border-flare/20"
            >
              {/* Top glow on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-flare/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-flare/10 border border-flare/20 flex items-center justify-center text-flare mb-6 group-hover:bg-flare/20 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white font-barlow uppercase tracking-wide mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-mist/60 text-sm leading-relaxed font-inter mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-xs text-mist/50 font-inter"
                  >
                    <span className="w-1.5 h-1.5 bg-flare rounded-full flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
