'use client';

import { useEffect, useRef } from 'react';

const pillars = [
  {
    id: 'why-local',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '100% Sydney Based',
    description:
      'No outsourcing. No overseas call centres. Our entire team works right here in Sydney. When you call, you talk to the person building your website.',
  },
  {
    id: 'why-fast',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description:
      'Your website in 7 days. Your ads live in 48 hours. We move fast because your business can\'t afford to wait. Speed is our competitive advantage.',
  },
  {
    id: 'why-results',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Results-Based Approach',
    description:
      'We don\'t charge you to look pretty. We charge you to grow. Every dollar you spend with us is tracked, measured, and tied to real business outcomes.',
  },
];

const stats = [
  { value: '150+', label: 'Local Businesses Served' },
  { value: '48hr', label: 'Average Turnaround' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '$2.3M+', label: 'Revenue Generated' },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.why-card').forEach((card, i) => {
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
    <section id="why-us" className="relative py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-flare text-sm font-bold uppercase tracking-widest font-barlow">
            Why Sydney Digits
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 font-barlow uppercase tracking-tight">
            No Fluff.
            <br />
            <span className="text-flare">Just Results.</span>
          </h2>
        </div>

        {/* Trust pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="why-card opacity-0 translate-y-8 transition-all duration-700 ease-out group flex flex-col items-center text-center p-8"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-flare/10 border border-flare/20 flex items-center justify-center text-flare mb-6 group-hover:bg-flare group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white font-barlow uppercase tracking-wide mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-mist/60 text-sm leading-relaxed font-inter">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="relative rounded-2xl border border-white/5 bg-steel/40 p-8 lg:p-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flare/40 to-transparent" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-black text-flare font-barlow mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-mist/50 uppercase tracking-widest font-barlow">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
