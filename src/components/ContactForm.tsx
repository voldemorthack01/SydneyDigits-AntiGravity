'use client';

import { useState, useEffect, useRef } from 'react';

const serviceOptions = [
  'High-Converting Website',
  'Google & Meta Ads',
  'NFC Google Review Plates',
  'Local SEO',
  'Full Growth Package',
  'Not Sure — Need Advice',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('.form-container')?.classList.remove('opacity-0', 'translate-y-8');
            entry.target.querySelector('.form-container')?.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Your name is required';
    if (!form.business.trim()) errs.business = 'Business name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[\d\s\-+()]{8,}$/.test(form.phone.trim()))
      errs.phone = 'Enter a valid phone number';
    if (!form.service) errs.service = 'Select a service';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32" ref={sectionRef}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flare/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <span className="text-flare text-sm font-bold uppercase tracking-widest font-barlow">
              Let&apos;s Talk Growth
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 font-barlow uppercase tracking-tight">
              Get Your Free
              <br />
              <span className="text-flare">Growth Plan</span>
            </h2>
            <p className="text-mist/60 mt-4 font-inter leading-relaxed max-w-md">
              Tell us about your business. We&apos;ll put together a custom growth strategy
              — completely free, no obligations. If it makes sense, we work together. If
              not, you still walk away with a plan.
            </p>

            {/* Trust points */}
            <ul className="mt-8 space-y-3">
              {[
                'Free strategy call — no sales pitch',
                'Custom plan tailored to your industry',
                'See exactly what you\'re paying for',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-mist/70 font-inter"
                >
                  <svg
                    className="w-5 h-5 text-flare flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            {/* Direct contact */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+61493332306"
                className="flex items-center gap-3 text-sm text-mist/70 hover:text-flare transition-colors duration-200 font-inter"
              >
                <svg
                  className="w-5 h-5 text-flare flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0493 332 306
              </a>
              <a
                href="mailto:amirsharabiani84@gmail.com"
                className="flex items-center gap-3 text-sm text-mist/70 hover:text-flare transition-colors duration-200 font-inter"
              >
                <svg
                  className="w-5 h-5 text-flare flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                amirsharabiani84@gmail.com
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="form-container opacity-0 translate-y-8 transition-all duration-700 ease-out">
            {submitted ? (
              <div className="bg-steel/50 border border-flare/20 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 mx-auto bg-flare/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-flare"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white font-barlow uppercase mb-2">
                  We&apos;re On It!
                </h3>
                <p className="text-mist/60 font-inter">
                  We&apos;ll be in touch within 24 hours with your custom growth plan. Get
                  ready to scale.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="bg-steel/50 border border-white/5 rounded-2xl p-8 lg:p-10 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-mist/60 uppercase tracking-widest font-barlow mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`w-full bg-gunmetal/80 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder-mist/30 font-inter text-sm focus:outline-none focus:border-flare/50 focus:ring-1 focus:ring-flare/30 transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 font-inter">{errors.name}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label
                    htmlFor="contact-business"
                    className="block text-xs font-bold text-mist/60 uppercase tracking-widest font-barlow mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    id="contact-business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="e.g. Sydney Shine Detailing"
                    className={`w-full bg-gunmetal/80 border ${
                      errors.business ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder-mist/30 font-inter text-sm focus:outline-none focus:border-flare/50 focus:ring-1 focus:ring-flare/30 transition-colors`}
                  />
                  {errors.business && (
                    <p className="text-red-400 text-xs mt-1 font-inter">{errors.business}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold text-mist/60 uppercase tracking-widest font-barlow mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="04XX XXX XXX"
                    className={`w-full bg-gunmetal/80 border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder-mist/30 font-inter text-sm focus:outline-none focus:border-flare/50 focus:ring-1 focus:ring-flare/30 transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 font-inter">{errors.phone}</p>
                  )}
                </div>

                {/* Service Needed */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold text-mist/60 uppercase tracking-widest font-barlow mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full bg-gunmetal/80 border ${
                      errors.service ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-flare/50 focus:ring-1 focus:ring-flare/30 transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="" className="text-mist/30">
                      Select a service...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-gunmetal text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1 font-inter">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  id="contact-submit"
                  type="submit"
                  className="w-full bg-flare text-white text-base font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-[1.02] uppercase tracking-wider font-barlow mt-2"
                >
                  Get My Free Growth Plan
                </button>

                <p className="text-center text-xs text-mist/30 font-inter">
                  No spam. No obligations. Just a real plan to grow your business.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
