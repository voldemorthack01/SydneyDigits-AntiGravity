'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add('opacity-0', 'translate-y-8');
      requestAnimationFrame(() => {
        el.classList.remove('opacity-0', 'translate-y-8');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    }
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-flare/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ease-out"
      >
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 bg-steel/60 border border-flare/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-flare rounded-full animate-pulse" />
          <span className="text-xs font-medium text-mist/80 uppercase tracking-widest font-barlow">
            Sydney&apos;s #1 Local Growth Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight font-barlow uppercase mb-6">
          Dominate Your
          <br />
          <span className="text-flare">Local Market.</span>
          <br />
          Get More Clients.
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-mist/70 font-inter leading-relaxed mb-10">
          Custom Websites · Google Ads · Local SEO — built for Sydney businesses
          that want real results, not empty promises.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-cta"
            onClick={scrollToContact}
            className="group relative bg-flare text-white text-lg font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] uppercase tracking-wider font-barlow"
          >
            <span className="relative z-10">Get a Free Growth Plan</span>
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-mist/60 hover:text-mist text-sm font-medium transition-colors duration-200 flex items-center gap-2 uppercase tracking-widest font-barlow"
          >
            See What We Do
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Trust markers */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-mist/40 text-xs uppercase tracking-widest font-barlow">
          <span>✦ 100% Sydney Based</span>
          <span>✦ No Lock-In Contracts</span>
          <span>✦ Results or We Fix It Free</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gunmetal to-transparent" />
    </section>
  );
}
